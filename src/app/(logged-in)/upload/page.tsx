"use client"

import BlurCircle from '@/components/ui/blur-circle'
import { BrainCircuit } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import { FileUpload } from '@/components/ui/file-upload'
import { z } from 'zod'
import { useUploadThing } from '@/utils/uploadthing'
import { toast } from 'sonner'
import generatePDFsummary from '@/actions/upload-action'

const schema = z.object({
    file: z.instanceof(File, { message: "Valid file is required" })
        .refine((file) => file.size <= 24 * 1024 * 1024, {
            message: 'File size should be less than 24MB..',
        })
        .refine((file) => file.type.startsWith('application/pdf'), {
            message: 'Document type must be PDF.. '
        })
})

const page = () => {

    // Uploadthing hook
    const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
        onClientUploadComplete: () => {
            toast.success('Upload Completed');
            console.log('Upload Completed');
        },
        onUploadError: (error) => {
            toast.error("Error during upload: " + error.message);
            console.log("Error during upload: " + error.message);
        },
        onUploadBegin: (file) => {
            toast.promise<{ name: string }>(
                () =>
                    new Promise((resolve) =>
                        setTimeout(() => resolve({ name: "PDF" }), 2000)
                    ),
                {
                    loading: "Processing the PDF...",
                    success: (data) => `Summary Generated!`,
                    error: "Error",
                }
            )
            console.log("Starting upload for file: ", file);
        }
    })

    // Handle Submit 
    const handleFileUpload = async (files: File[]) => {
        const file = files[0] as File; // only one file allowed

        const validated = schema.safeParse({ file });
        if (!validated.success) {
            const errorMessage = validated.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file type..';
            console.error('Validation Error:', errorMessage);
            toast(errorMessage);
            return;
        }

        console.log('File uploaded successfully:', file);

        // Start upload the file to uploadthing
        const response = await startUpload([file]);
        if (!response || response.length === 0) {
            toast.error("Something went wrong..");
            return;
        };


        // Parsing PDFs using "LangChain"
        const summary = await generatePDFsummary(response);
        console.log({ summary })
    };

    return (
        <div className='relative w-full container py-8 md:py-10'>
            <BlurCircle top='top-0' left='left-0' />
            <BlurCircle bottom='bottom-0' right='right-0' />
            <div className='flex flex-col justify-center items-center text-center'>
                {/* Badge */}
                <Badge variant={"secondary"} className='flex items-center gap-2 bg-transparent border border-moonlight-300 dark:border-moonlight-200 py-1.5 px-8 rounded-full group'>
                    <BrainCircuit className='h-3.5 w-3.5 md:h-4 md:w-4' />
                    <span className='text-xs md:text-sm font-medium'> AI summaries, instantly </span>
                </Badge>
                <h1 className='mt-8 text-2xl sm:text-4xl md:text-5xl tracking-tight font-bold leading-snug bg-gradient-to-b from bg-moonlight-300 to-moonlight-400 dark:from-moonlight-200 dark:to-moonlight-300 text-transparent bg-clip-text'>
                    Drop your PDF here to begin
                </h1>
                <p className='mt-4 md:mt-5.5 font-medium text-xs sm:text-sm md:text-base lg:text-lg w-[450px] max-w-full text-neutralText-1 dark:text-neutralText-2 leading-snug'>
                    Upload your PDF and relax — our AI will turn it into a smart, easy-to-read summary.
                </p>
            </div>

            <div className='w-full mt-5 md:mt-6 lg:mt-7'>
                <FileUpload onChange={handleFileUpload} />
            </div>
        </div>
    )
}

export default page
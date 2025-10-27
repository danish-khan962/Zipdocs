import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const FileUploaderRouter = {
    pdfUploader : f({pdf: {maxFileSize:'32MB'}})
    .middleware(async ({req}) => {
        // geeting user info
        const user = await auth();
        if(!user || !user.userId){
            throw new UploadThingError("Unauthorized");
        }
        return {userId: user.userId};
    })
    .onUploadComplete(async ({metadata, file}) => {
        console.log("Upload completed for userID: ", metadata.userId);
        console.log("File URL: ", file.url);
        return { userId: metadata.userId, file: file.url};
    })
} satisfies FileRouter;

export type exportedFileRouter = typeof FileUploaderRouter;
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const fetchAndExtractedPDF = async (
    fileUrl: string
) => {
    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const arrayBuffer = await blob.arrayBuffer();

    const loader = new PDFLoader(new Blob([arrayBuffer]));

    const docs = await loader.load();

    // combining all pages
    const extractedText = docs.map((doc) => doc.pageContent).join('\n')

    return extractedText;
}
export default fetchAndExtractedPDF;
"use server"

import fetchAndExtractedPDF from "@/utils/langchain";
import openaiSummary from "@/utils/openai";

const generatePDFsummary = async (uploadResponse: any[]) => {
  console.log("Upload Response:", uploadResponse);

  if (!uploadResponse || uploadResponse.length === 0) {
    return { success: false, message: "Empty response from UploadThing!", data: null };
  }

  const {
    serverData: {
      userId,
      file: { ufsUrl: pdfUrl, name: fileName },
    },
  } = uploadResponse[0];

  console.log("Extracted pdfUrl:", pdfUrl);

  if (!pdfUrl) {
    return { success: false, message: "Missing PDF URL!", data: null };
  }
  try {
  const extractedPDFcontent = await fetchAndExtractedPDF(pdfUrl);
  console.log({ extractedPDFcontent });

  let summary;
  try {
    summary = await openaiSummary(extractedPDFcontent);
    console.log({ summary });
  } catch (error) {
    console.log("Error generating summary:", error);
  }

  if (!summary) {
    return {
      success: false,
      message: "Failed to generate summary!",
      data: null,
    };
  }

  return {
    success: true,
    message: "PDF parsed and summarized successfully!",
    data: { extractedPDFcontent, summary },
  };
} catch (error) {
  console.error("Error in generatePDFsummary:", error);
  return { success: false, message: "Error while parsing PDF!", data: null };
}
};

export default generatePDFsummary;
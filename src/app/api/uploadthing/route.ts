import { createRouteHandler } from "uploadthing/next";
import { FileUploaderRouter } from "./core";

export const runtime = "nodejs";

export const {GET, POST} = createRouteHandler({
    router: FileUploaderRouter,
    config: {
        // configuration options
    }
})
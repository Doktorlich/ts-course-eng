import { Source } from "./guards";

export function isFile(source: Source) {
    return source.type === "file";
}

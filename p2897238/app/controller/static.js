import { serveDir } from "@std/http/file-server";
import { request } from "node:http";

export function staticController({ request }){
    return serveDir(request);
}
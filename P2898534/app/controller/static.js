import {serverDir} from "@std/http/file-server";

export function staticController({request}) {
  

  return serverDir(request);
}

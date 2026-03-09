import { testController } from "./P2896775/app/controllers/test.js";

export default function server(request) {
     const url = new URL(request.url);

     if(url.pathname == "/") {
        return testController({ request });
    }
}
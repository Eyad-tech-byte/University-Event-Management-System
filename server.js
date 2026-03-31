import { indexController } from "./index/controllers/index.js";
import { staticController } from "./index/controllers/static.js";
import { eventsServer } from "./p2896775/app/eventsServer.js";
import newsServer from "./p2897238/server.js";
import { imageController } from "./p2897238/app/controller/add.js";
import { adminController } from "./index/controllers/indexAdmin.js";
import { notFoundController } from "./index/controllers/notFoundIndex.js";
import { loginController } from "./P2898534/app/controller/login.js";
import { registerController } from "./P2898534/app/controller/register.js";
export default function server(request) {
    const url = new URL(request.url);
    console.log(`\n${request.method} ${url.pathname} ${url.search}`);

    if(url.pathname == "/") {
        return indexController({ request });
    }
    if(url.pathname == "/Imaginary-University-Managment-System/admin"){
        return adminController({ request });
    }

    if(url.pathname.includes("/assets")) {
        return staticController({ request });
    }

    if(url.pathname.startsWith("/events")) {
        return eventsServer(request);
    }

    if(url.pathname.startsWith("/news")){
        return newsServer(request);
    }
    if (request.method == "GET" && url.pathname.startsWith("/file/")){
        return imageController({ request });
    }
    if(url.pathname == "/login") {
            return loginController({request});
        }
        if(url.pathname == "/register/registration-form") {
            return registerController({request});
        }
    return notFoundController({ request });
}
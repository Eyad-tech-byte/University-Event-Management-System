import { indexController } from "./index/controllers/index.js";
import { staticController } from "./index/controllers/static.js";
import { eventsServer } from "./P2896775/app/eventsServer.js";


export default function server(request) {
    const url = new URL(request.url);
    console.log(`\n${request.method} ${url.pathname} ${url.search}`);

    if(url.pathname == "/") {
        return indexController({ request });
    }

    if(url.pathname.includes("/assets")) {
        return staticController({ request });
    }

    if(url.pathname.startsWith("/events")) {
        return eventsServer(request);
    }

    return new Response("Not Found", { status: 404});
}
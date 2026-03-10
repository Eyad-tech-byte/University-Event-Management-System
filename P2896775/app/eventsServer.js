import { eventsCategoriesController } from "./controllers/eventsCategories.js";
import { eventsDetailsController } from "./controllers/eventsDetails.js";
import { eventsHomeController } from "./controllers/eventsHome.js";

export function eventsServer(request) {

    const url = new URL(request.url);

    if(url.pathname == "/events/events-homepage") {
        return eventsHomeController({ request });
    }

    if(url.pathname.startsWith("/events/events-details") && request.method == "GET") {
        return eventsDetailsController({ request });
    }

    if(url.pathname.startsWith("/events/category=") && request.method == "GET") {
        return eventsCategoriesController({ request });
    }

    return new Response("Events route not found", { status: 404 });
    
}
import { addEventsController, adminCreateEventController } from "./controllers/adminCreateEvent.js";
import { addDeleteEventController, adminDeleteEventController } from "./controllers/adminDeleteEvent.js";
import { adminEventsDetailsController } from "./controllers/adminEventsDetails.js";
import { adminEventsHomeController } from "./controllers/adminEventsHome.js";
import { addNewCategoryController, adminNewCategoryController } from "./controllers/adminNewCategory.js";
import { addUpdateEventController, adminUpdateEventController } from "./controllers/adminUpdateEvent.js";
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

    if(url.pathname == "/events/admin/events-homepage" && request.method == "GET") {
        return adminEventsHomeController({ request });
    }

    if(url.pathname.startsWith("/events/admin/events-details") && request.method == "GET") {
        return adminEventsDetailsController({ request });
    }

    if(url.pathname == "/events/admin/event-creation-form" && request.method == "GET") {
        return adminCreateEventController({ request });
    }

    if(url.pathname.startsWith("/events/admin/event-creation-form") && request.method == "POST") {
        return addEventsController({ request });
    }

    if(url.pathname.startsWith("/events/admin/event-update-form") && request.method == "GET") {
        return adminUpdateEventController({ request });
    }

    if(url.pathname.startsWith("/events/admin/event-update-form") && request.method == "POST") {
        return addUpdateEventController({ request });
    }

    if(url.pathname == "/events/admin/add-new-category-form" && request.method == "GET") {
        return adminNewCategoryController({ request });
    }

    if(url.pathname == "/events/admin/add-new-category-form" && request.method == "POST") {
        return addNewCategoryController({ request });
    }

    if(url.pathname.startsWith("/events/admin/event-deletion-confirmation") && request.method == "GET") {
        return adminDeleteEventController({ request });
    }
    
    if(url.pathname.startsWith("/events/admin/event-deletion-confirmation") && request.method == "POST") {
        return addDeleteEventController({ request });
    }


    return new Response("Events route not found", { status: 404 });
    
}
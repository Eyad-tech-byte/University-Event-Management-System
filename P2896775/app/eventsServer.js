import { staticController } from "./controllers/static.js";
import { addEventsController, adminCreateEventController } from "./controllers/adminCreateEvent.js";
import { addDeleteEventController, adminDeleteEventController } from "./controllers/adminDeleteEvent.js";
import { adminEventsDetailsController } from "./controllers/adminEventsDetails.js";
import { adminEventsHomeController } from "./controllers/adminEventsHome.js";
import { addNewCategoryController, adminNewCategoryController } from "./controllers/adminNewCategory.js";
import { addUpdateEventController, adminUpdateEventController } from "./controllers/adminUpdateEvent.js";
import { eventsCategoriesController } from "./controllers/eventsCategories.js";
import { eventsDetailsController } from "./controllers/eventsDetails.js";
import { eventsHomeController } from "./controllers/eventsHome.js";
import { notFoundController } from "./controllers/notFound.js";
import EventsRouter from "./eventsRouter.js";
import { withHeaders } from "./middleware/headers.js";
import { withLogs } from "./middleware/logging.js";
import { validate } from "./middleware/validate.js";
import { eventSchema } from "./schema/eventSchema.js";
import { newCategorySchema } from "./schema/newCategorySchema.js";
import { updateEventSchema } from "./schema/updateEventSchema.js";


const eventsApp = new EventsRouter();

// running all global middleware functions
eventsApp.use(withHeaders);
eventsApp.use(withLogs);

// student facing pages
eventsApp.get("/assets/*", staticController);
eventsApp.get("/events/events-homepage", eventsHomeController);
eventsApp.get("/events/events-details/*", eventsDetailsController);
eventsApp.get("/events/category=:category/:categoryId", eventsCategoriesController);

// admin facing pages
eventsApp.get("/events/admin/events-homepage", adminEventsHomeController);
eventsApp.get("/events/admin/events-details/*", adminEventsDetailsController);

eventsApp.get("/events/admin/event-creation-form", adminCreateEventController);
eventsApp.post("/events/admin/event-creation-form", adminCreateEventController, validate(eventSchema), addEventsController);

eventsApp.get("/events/admin/event-update-form/*", adminUpdateEventController);
eventsApp.post("/events/admin/event-update-form/*", adminUpdateEventController, validate(updateEventSchema), addUpdateEventController);

eventsApp.get("/events/admin/add-new-category-form", adminNewCategoryController);
eventsApp.post("/events/admin/add-new-category-form", adminNewCategoryController, validate(newCategorySchema), addNewCategoryController);

eventsApp.get("/events/admin/event-deletion-confirmation/*", adminDeleteEventController);
eventsApp.post("/events/admin/event-deletion-confirmation/*", addDeleteEventController);

eventsApp.get("*", notFoundController);
eventsApp.post("*", notFoundController);


export function eventsServer(request) {
    return eventsApp.handle({ request });
}
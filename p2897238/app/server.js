import { exampleController, createNewsController } from "./controller/add.js";
import { adminController } from "./controller/admin.js";
import { academicController, addCommentsController, artController, homeController, sportsController, technologyController } from "./controller/home.js";
import { newsController, footballController, roboticsController, munController, campusArtController, basketballController, auditionController } from "./controller/news.js";
import { notFoundController } from "./controller/notFoundController.js";
import { deleteController, removeController } from "./controller/remove.js";
import { staticController } from "../../index/controllers/static.js";
import { updateController, UpdatedController,updatesController, UpdateNewsController } from "./controller/update.js";
import ApplicationRouter from "../../router.js";
import { newsHome } from "./middleware/newsHome.js";
import { withHeaders } from "./middleware/header.js";
import { addingNewsSchema } from "./schema/add.js"
import { validate } from "./middleware/validate.js"
import { updatingNewsSchema } from "./schema/update.js";
import { addingCommentSchema } from "./schema/comment.js"

const app = new ApplicationRouter();

app.use(newsHome);
app.use(withHeaders);

app.get("/assets/*", staticController);

app.get("/news/news-home", homeController);
app.post("/news/news-home", homeController, validate(addingCommentSchema), addCommentsController);

app.get("/news/news-sports", sportsController);
app.get("/news/news-art", artController);
app.get("/news/news-technology", technologyController);
app.get("/news/news-academic", academicController);
app.get("/news/news-admin", adminController);

app.get("/news/news-admin-add-news-event", exampleController);
app.post("/news/news-admin-add-news-event", exampleController, validate(addingNewsSchema), createNewsController);

app.get("/news/news-admin-remove-news-event", removeController);
app.post("/news/news-admin-remove-news-event", deleteController);

app.get("/news/news-admin-update-choose-news-event", updateController);
app.post("/news/news-admin-update-choose-news-event", UpdatedController);

app.get("/news/news-admin-update-choosen-news-event", updatesController);
app.post("/news/news-admin-update-choosen-news-event", updatesController, validate(updatingNewsSchema), UpdateNewsController);

app.get("/news/news-football-event", footballController);
app.get("/news/news-mun-event", munController);
app.get("/news/news-robotics-event", roboticsController);
app.get("/news/news-art-event", campusArtController);
app.get("/news/news-audition-event", auditionController);
app.get("/news/news-basketball-event", basketballController);

app.get("/news/news-*-event", newsController);

app.get("*", notFoundController);
app.post("*", notFoundController);

export default function server(request){
    return app.handle({ request });
}
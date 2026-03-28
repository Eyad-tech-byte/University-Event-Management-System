import { exampleController, createNewsController } from "./app/controller/add.js";
import { adminController } from "./app/controller/admin.js";
import { academicController, artController, homeController, sportsController, technologyController } from "./app/controller/home.js";
import { newsController, footballController, roboticsController, munController, campusArtController, basketballController, auditionController } from "./app/controller/news.js";
import { notFoundController } from "./app/controller/notFoundController.js";
import { deleteController, removeController } from "./app/controller/remove.js";
import { staticController } from "../index/controllers/static.js";
import { updateController, UpdatedController,updatesController, UpdateNewsController } from "./app/controller/update.js";
import ApplicationRouter from "../router.js";

const app = new ApplicationRouter();

app.get("/assets/*", staticController);

app.get("/news/news-home", homeController);
app.get("/news/news-sports", sportsController);
app.get("/news/news-art", artController);
app.get("/news/news-technology", technologyController);
app.get("/news/news-academic", academicController);
app.get("/news/news-admin", adminController);

app.get("/news/news-admin-add-news-event", exampleController);
app.post("/news/news-admin-add-news-event", createNewsController);

app.get("/news/news-admin-remove-news-event", removeController);
app.post("/news/news-admin-remove-news-event", deleteController);

app.get("/news/news-admin-update-choose-news-event", updateController);
app.post("/news/news-admin-update-choose-news-event", UpdatedController);

app.get("/news/news-admin-update-choosen-news-event", updatesController);
app.post("/news/news-admin-update-choosen-news-event", UpdateNewsController);

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
    const url = new URL(request.url);
    console.log(`\n${request.method} ${url.pathname}${url.search}`);

    return app.handle({ request });
}
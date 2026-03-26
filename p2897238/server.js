import { exampleController, createNewsController, imageController } from "./app/controller/add.js";
import { adminController } from "./app/controller/admin.js";
import { academicController, artController, homeController, sportsController, technologyController } from "./app/controller/home.js";
import { newsController, footballController, roboticsController, munController, campusArtController, basketballController, auditionController } from "./app/controller/news.js";
import { notFoundController } from "./app/controller/notFoundController.js";
import { deleteController, removeController } from "./app/controller/remove.js";
import { staticController } from "../index/controllers/static.js";
import { updateController, UpdatedController,updatesController, UpdateNewsController } from "./app/controller/update.js";

export default function server(request){

    const url = new URL(request.url);
    console.log(`\n${request.method} ${url.pathname}${url.search}`);



   if (url.pathname.startsWith("/p2897238/assets")){
        return staticController({ request });
    }

    if(url.pathname == "/news/news-home"){
        return homeController({ request });
    }
    if (url.pathname == "/news/news-sports"){
        return sportsController({ request });
    }
    if(url.pathname == "/news/news-art"){
        return artController({ request });
    }
    if (url.pathname == "/news/news-technology"){
        return technologyController({ request });
    }
    if(url.pathname == "/news/news-academic"){
        return academicController({ request });
    }

    if(url.pathname == "/news/news-admin"){
        return adminController({ request });
    }
    if (url.pathname =="/news/news-admin-add-news-event" && request.method == "GET"){
        return exampleController({ request });
    }
    if (url.pathname =="/news/news-admin-add-news-event" && request.method == "POST"){
        return createNewsController({ request });
    }
    if (request.method == "GET" && url.pathname.startsWith("/file/")){
        return imageController({ request });
    }
    if (url.pathname == "/news/news-admin-remove-news-event" && request.method == "GET"){
        return removeController({ request });
    }
    if (url.pathname == "/news/news-admin-remove-news-event" && request.method == "POST"){
        return deleteController({ request });
    }
    if (url.pathname == "/news/news-admin-update-choose-news-event" && request.method == "GET"){
        return updateController({ request });
    }
    if (url.pathname == "/news/news-admin-update-choose-news-event" && request.method == "POST"){
        return UpdatedController({ request });
    }
    if (url.pathname == "/news/news-admin-update-choosen-news-event" && request.method == "GET"){
        return updatesController({ request });
    }
    if (url.pathname == "/news/news-admin-update-choosen-news-event" && request.method == "POST"){
        return UpdateNewsController({ request });
    }

    if(url.pathname == "/news/news-football-event"){
        return footballController({ request });
    }
    if(url.pathname == "/news/news-mun-event"){
        return munController({ request });
    }
    if(url.pathname == "/news/news-robotics-event"){
        return roboticsController({ request });
    }
    if(url.pathname == "/news/news-art-event"){
        return campusArtController({ request });
    }
    if(url.pathname == "/news/news-audition-event"){
        return auditionController({ request });
    }
    if(url.pathname == "/news/news-basketball-event"){
        return basketballController({ request });
    }

    if(url.pathname.startsWith("/news/news-") && url.pathname.endsWith("-event")){
        return newsController({ request });
    }

    return notFoundController({ request });

}
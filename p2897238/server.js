import { indexController } from "../index/controllers/index.js";
import { staticController } from "../index/controllers/static.js";
import { eventsServer } from "../P2896775/app/eventsServer.js";
import { notFoundController } from "./app/controller/notFoundController.js";
import { academicController, artController, homeController, sportsController, technologyController } from "./app/controller/home.js";
import { auditionController, basketballController, footballController, munController, newsController, campusArtController, roboticsController} from "./app/controller/news.js";

export default function newsServer(request){

    const url = new URL(request.url);
    console.log(`\n${request.method} ${url.pathname}${url.search}`);



   if (url.pathname.startsWith("/assets")){
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
    
    return notFoundController({ request });


}
import render from "../../render.js";
import { getNewsId, getNewsSimilar, getFootballNews, getMunNews, getFootballSimilar, getMunSimilar, getRoboticsSimilar, getArtSimilar, getAuditionSimilar, getBasketballSimilar, getRoboticsNews, getArtNews, getAuditionNews, getBasketballNews } from "../models/news.js";
import { newsView } from "../views/news.js";

export function newsController({ request }){
    const url = new URL(request.url);
    const id = url.pathname.replace("/news/news-", "").replace("-event", "");

    const content = getNewsId(id);
    const similarThings = getNewsSimilar(id);

    return render(newsView, { content, similarThings }, request);
}

export function footballController({ request }){
    const content = getFootballNews();
    const similarThings = getFootballSimilar();
   
    return render(newsView, { content, similarThings }, request);
}

export function munController({ request }){
    const content = getMunNews();
    const similarThings = getMunSimilar();

    return render(newsView, { content, similarThings }, request);
}

export function roboticsController({ request }){
    const content = getRoboticsNews();
    const similarThings = getRoboticsSimilar();
   
    return render(newsView, { content, similarThings }, request);
}

export function campusArtController({ request }){
    const content = getArtNews();
    const similarThings = getArtSimilar();

    return render(newsView, { content, similarThings }, request);
}

export function auditionController({ request }){
    const content = getAuditionNews();
    const similarThings = getAuditionSimilar();
   
    return render(newsView, { content, similarThings }, request);
}

export function basketballController({ request }){
    const content = getBasketballNews();
    const similarThings = getBasketballSimilar();

    return render(newsView, { content, similarThings }, request);
}



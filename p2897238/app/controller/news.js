import { getNewsArticles, getNewsSection, getFootballNews, getFootballSimilar, getMunNews, 
    getMunSimilar, getRoboticsNews, getRoboticsSimilar, getArtNews, getArtSimilar, getAuditionNews, 
    getAuditionSimilar, getBasketballNews, getBasketballSimilar} from "../models/news.js";
import render from "../../render.js";
import { newsView } from "../views/news.js";

export function newsController(){
    const content = getNewsArticles();
    const similarThings = getNewsSection();
   
    return render(newsView, { content, similarThings });
}

export function footballController(){
    const content = getFootballNews();
    const similarThings = getFootballSimilar();
   
    return render(newsView, { content, similarThings });
}

export function munController(){
    const content = getMunNews();
    const similarThings = getMunSimilar();

    return render(newsView, { content, similarThings });
}

export function roboticsController(){
    const content = getRoboticsNews();
    const similarThings = getRoboticsSimilar();
   
    return render(newsView, { content, similarThings });
}

export function campusArtController(){
    const content = getArtNews();
    const similarThings = getArtSimilar();

    return render(newsView, { content, similarThings });
}

export function auditionController(){
    const content = getAuditionNews();
    const similarThings = getAuditionSimilar();
   
    return render(newsView, { content, similarThings });
}

export function basketballController(){
    const content = getBasketballNews();
    const similarThings = getBasketballSimilar();

    return render(newsView, { content, similarThings });
}
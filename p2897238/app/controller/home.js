import { getAcademicArticles, getAllArticles, getAllSections, getArtArticles, getSportsArticles, getTechnologyArticles } from "../models/comments.js";
import render from "../../render.js";
import { homesView } from "../views/home.js";

export function homeController(ctx){
    const { request } = ctx;
    const url = new URL(request.url);

    const searchNewsItem = url.searchParams.get("search")?.toLocaleLowerCase() || "";

    let news = getAllArticles();

    if(searchNewsItem){
        news = news.filter(article => {
            const title = article.title.toLocaleLowerCase().includes(searchNewsItem);
            const content = article.content.toLocaleLowerCase().includes(searchNewsItem);
            return title || content;
        });
    }

    const events = getAllSections();
    return render(homesView, { news, events }, ctx);
}

export function sportsController(ctx){
    const news = getSportsArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, ctx);
}

export function artController(ctx){
    const news = getArtArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, ctx);
}

export function technologyController(ctx){
    const news = getTechnologyArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, ctx);
}

export function academicController(ctx){
    const news = getAcademicArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, ctx);
}
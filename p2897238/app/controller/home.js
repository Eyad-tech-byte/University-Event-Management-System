import { getAcademicArticles, getAllArticles, getAllSections, getArtArticles, getSportsArticles, getTechnologyArticles } from "../models/comments.js";
import render from "../../render.js";
import { homesView } from "../views/home.js";

export function homeController(){
    const news = getAllArticles();
    const events = getAllSections();
    return render(homesView, { news, events });
}

export function sportsController(){
    const news = getSportsArticles();
    const events = getAllSections();
    return render(homesView, { news, events });
}

export function artController(){
    const news = getArtArticles();
    const events = getAllSections();
    return render(homesView, { news, events });
}
export function technologyController(){
    const news = getTechnologyArticles();
    const events = getAllSections();
    return render(homesView, { news, events });
}

export function academicController(){
    const news = getAcademicArticles();
    const events = getAllSections();
    return render(homesView, { news, events });
}
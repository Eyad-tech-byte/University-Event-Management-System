import { getAcademicArticles, getAllArticles, getAllSections, getArtArticles, getSportsArticles, getTechnologyArticles } from "../models/comments.js";
import render from "../../render.js";
import { homesView } from "../views/home.js";

export function homeController({ request }){
    const news = getAllArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, request);
}

export function sportsController({ request }){
    const news = getSportsArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, request);
}

export function artController({ request }){
    const news = getArtArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, request);
}

export function technologyController({ request }){
    const news = getTechnologyArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, request);
}

export function academicController({ request }){
    const news = getAcademicArticles();
    const events = getAllSections();
    return render(homesView, { news, events }, request);
}
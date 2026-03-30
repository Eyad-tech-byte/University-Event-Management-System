import { db } from "../../../db.js";

export function getAllArticles(){
    return db.prepare(`SELECT * FROM news`).all();
}

export function getAllSections(){
    return db.prepare(`SELECT * FROM events_news_page`).all();
}

export function getSportsArticles(){
    return db.prepare(`SELECT * FROM news WHERE catagory = 'sports' `).all();
}

export function getArtArticles(){
    return db.prepare(`SELECT * FROM news WHERE catagory = 'art' `).all();
}

export function getTechnologyArticles(){
    return db.prepare(`SELECT * FROM news WHERE catagory = 'technology' `).all();
}

export function getAcademicArticles(){
    return db.prepare(`SELECT * FROM news WHERE catagory = 'academic' `).all();
}

export function getComments(){
    return db.prepare(`SELECT * FROM comments`).all();
}

export function addComments(name, comment) {
    db.prepare(`INSERT INTO comments (name, comment) VALUES ( :name, :comment )`).run({ name, comment });
}

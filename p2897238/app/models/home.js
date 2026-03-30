import { db } from "../../../db.js";

export function getAllArticles(){
    return db.prepare(`SELECT * FROM article`).all();
}

export function getAllSections(){
    return db.prepare(`SELECT * FROM section`).all();
}

export function getSportsArticles(){
    return db.prepare(`SELECT * FROM article WHERE catagory = 'sports' `).all();
}

export function getArtArticles(){
    return db.prepare(`SELECT * FROM article WHERE catagory = 'art' `).all();
}

export function getTechnologyArticles(){
    return db.prepare(`SELECT * FROM article WHERE catagory = 'technology' `).all();
}

export function getAcademicArticles(){
    return db.prepare(`SELECT * FROM article WHERE catagory = 'academic' `).all();
}

export function getComments(){
    return db.prepare(`SELECT * FROM comments`).all();
}

export function addComments(name, comment) {
    db.prepare(`INSERT INTO comments (name, comment) VALUES ( :name, :comment )`).run({ name, comment });
}

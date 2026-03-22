import { db } from "../../../db.js";

export function getNewsArticles(){
    return db.prepare(`SELECT * FROM news_article`).all();
}
export function getFootballNews(){
    return db.prepare(`SELECT * FROM news_article WHERE news_id = 'football'`).all();
}
export function getMunNews(){
    return db.prepare(`SELECT * FROM news_article WHERE news_id = 'mun'`).all();
}
export function getRoboticsNews(){
    return db.prepare(`SELECT * FROM news_article WHERE news_id = 'robotics'`).all();
}
export function getArtNews(){
    return db.prepare(`SELECT * FROM news_article WHERE news_id = 'art'`).all();
}
export function getAuditionNews(){
    return db.prepare(`SELECT * FROM news_article WHERE news_id = 'audition'`).all();
}
export function getBasketballNews(){
    return db.prepare(`SELECT * FROM news_article WHERE news_id = 'basketball'`).all();
}

export function getNewsSection(){
    return db.prepare(`SELECT * FROM news_section`).all();
}
export function getFootballSimilar(){
    return db.prepare(`SELECT * FROM news_section WHERE news_section_id = 'basketball' OR news_section_id = 'robotics'`).all();
}
export function getMunSimilar(){
    return db.prepare(`SELECT * FROM news_section WHERE news_section_id = 'audition' OR news_section_id = 'art'`).all();
}
export function getRoboticsSimilar(){
    return db.prepare(`SELECT * FROM news_section WHERE news_section_id = 'basketball' OR news_section_id = 'football'`).all();
}
export function getArtSimilar(){
    return db.prepare(`SELECT * FROM news_section WHERE news_section_id = 'audition' OR news_section_id = 'mun'`).all();
}
export function getAuditionSimilar(){
    return db.prepare(`SELECT * FROM news_section WHERE news_section_id = 'mun' OR news_section_id = 'art'`).all();
}
export function getBasketballSimilar(){
    return db.prepare(`SELECT * FROM news_section WHERE news_section_id = 'football' OR news_section_id = 'robotics'`).all();
}

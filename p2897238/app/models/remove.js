import { db } from "../../../db.js";

export function getRemoveNews(){
    return db.prepare(`SELECT * FROM article`).all();
}

export function getDeleteNews(idName){
    db.prepare(`DELETE FROM article WHERE idName = ?`).run(idName);
    db.prepare(`DELETE FROM news_article WHERE news_id = ?`).run(idName);
    db.prepare(`DELETE FROM news_section WHERE news_section_id = ?`).run(idName);
    db.prepare(`DELETE FROM news_section WHERE news_section_target = ?`).run(idName);
}
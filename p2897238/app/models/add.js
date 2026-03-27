import { db } from "../../../db.js";

export function getExampleShortArticle(){
    return db.prepare(`SELECT * FROM short_article`).all();
}

export function getExampleLongArticle(){
    return db.prepare(`SELECT * FROM long_article`).all();
}

export function getExampleSimilarArticle(){
    return db.prepare(`SELECT * FROM similar_article`).all();
}

export function createShortNews(idName, title, date, image, image_type, catagory, content) {
    db.prepare(`
        INSERT INTO article (idName, title, date, image, image_type, catagory, content) 
        VALUES ( :idName, :title, :date, :image, :image_type, :catagory, :content )
        `).run({ idName, title, date, image, image_type, catagory, content });
}

export function getShortImage(idName){
    return db.prepare(`SELECT * FROM article WHERE idName = ?`).get(idName)
}
export function getLongImage(news_id){
    return db.prepare(`SELECT * FROM news_article WHERE news_id = ?`).get(news_id)
}

export function createLongNews(
    news_id,
    news_title_1, 
    news_image,
    news_image_type, 
    news_date, 
    news_catagory, 
    news_title_2, 
    news_content_1, 
    news_title_3, 
    news_content_2, 
    news_title_4, 
    news_content_3, 
    news_title_5,
    news_content_4, 
    news_content_5 ) {
        db.prepare(`
            INSERT INTO news_article (
                news_id,
                news_title_1, 
                news_image,
                news_image_type, 
                news_date, 
                news_catagory, 
                news_title_2, 
                news_content_1, 
                news_title_3, 
                news_content_2, 
                news_title_4, 
                news_content_3, 
                news_title_5,
                news_content_4, 
                news_content_5 ) 
                VALUES ( 
                    :news_id,
                    :news_title_1, 
                    :news_image,
                    :news_image_type, 
                    :news_date, 
                    :news_catagory, 
                    :news_title_2, 
                    :news_content_1, 
                    :news_title_3, 
                    :news_content_2, 
                    :news_title_4, 
                    :news_content_3, 
                    :news_title_5,
                    :news_content_4, 
                    :news_content_5 )
            `).run({
                news_id,
                news_title_1, 
                news_image,
                news_image_type, 
                news_date, 
                news_catagory, 
                news_title_2, 
                news_content_1, 
                news_title_3, 
                news_content_2, 
                news_title_4, 
                news_content_3, 
                news_title_5,
                news_content_4, 
                news_content_5 });
}

export function createSimilar(news_section_id, news_section_target, news_section_content){
    db.prepare(`
        INSERT INTO news_section (news_section_id, news_section_target, news_section_content) VALUES (?, ?, ?)
        `).run(news_section_id, news_section_target, news_section_content);
}

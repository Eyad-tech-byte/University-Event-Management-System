import { db } from "../../db.js";

export function getSomeEvents() {
    return db.prepare(`
        SELECT 
        events.event_id,
        events.event_date,
        events.event_name,
        events.event_short_description,
        events.event_image_link,
        categories.category_name
        
        FROM events
        JOIN categories
        ON events.category_id = categories.category_id
        ORDER BY events.event_date ASC
        LIMIT 5
    `).all();
}
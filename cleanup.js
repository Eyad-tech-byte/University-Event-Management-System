import { db } from "./db.js";

db.prepare(`DELETE FROM categories WHERE category_id > 4`).run();
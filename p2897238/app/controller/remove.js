import { getRemoveNews, getDeleteNews } from "../models/remove.js";
import render from "../../render.js";
import { removeView } from "../views/remove.js";
import redirect from "../redirect.js";

export function removeController({ request }){
    const checkbox = getRemoveNews();
   
    return render(removeView, { checkbox }, request);
}

export async function deleteController({ request }){
    const formData = await request.formData();
    const deleteNews = formData.getAll('news_delete');

    for (const id of deleteNews){
        getDeleteNews(id);
    }

    const headers = new Headers();
    return redirect(headers, '/news/news-home', `removed Successfully`);
    
}

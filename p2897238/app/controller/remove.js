import { getRemoveNews, getDeleteNews } from "../models/remove.js";
import render from "../../render.js";
import { removeView } from "../views/remove.js";

export function removeController(){
    const checkbox = getRemoveNews();
   
    return render(removeView, { checkbox });
}

export async function deleteController({ request }){
    const formData = await request.formData();
    const deleteNews = formData.getAll('news_delete');

    for (const id of deleteNews){
        getDeleteNews(id);
    }

    const headers = new Headers();
    headers.set('location', '/news/news-home');
    return new Response(null, { headers, status: 303});
    
}

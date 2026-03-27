import { getUpdateShortArticle, getNews, UpdateFirstNews, UpdateSecondNews } from "../models/update.js";
import render from "../../render.js";
import { updateView } from "../views/update.js";
import { updateSecondView } from "../views/update2.js";
import redirect from "../redirect.js";

export function updateController({ request }){
    const update = getUpdateShortArticle();

    return render(updateView, { update }, request);
}

export async function UpdatedController({ request }){
    const formData = await request.formData();
    const id = formData.get('update_news');

    const headers = new Headers();
    headers.set('location', `/news/news-admin-update-choosen-news-event?id=${id}`);
    return new Response(null, { headers, status: 303}, request);
    
}

export function updatesController({ request }){
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    const { first, second } = getNews(id);
    return render(updateSecondView, { first, second }, request);
}

export async function UpdateNewsController({ request }){
    const formData = await request.formData();

    UpdateFirstNews(
        formData.get('first_idName'),
        formData.get('first_title'),
        formData.get('first_date'),
        formData.get('first_paragraph')
    );

    UpdateSecondNews(
        formData.get('first_idName'),
        formData.get('second_title'),
        formData.get('first_date'),        
        formData.get('second_header'),
        formData.get('second_paragraph'),
        formData.get('second_header_2'),
        formData.get('second_paragraph_2'),
        formData.get('second_header_3'),
        formData.get('second_paragraph_3'),
        formData.get('second_header_4'),
        formData.get('second_paragraph_4'),
        formData.get('second_paragraph_5')
    );

    const headers = new Headers();
    return redirect(headers, '/news/news-home', `updated Successfully`);
}
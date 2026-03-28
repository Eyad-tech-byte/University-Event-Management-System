import { getExampleLongArticle, getExampleShortArticle, getExampleSimilarArticle, createShortNews, createLongNews, createSimilar, getShortImage, getLongImage } from "../models/add.js";
import render from "../../render.js";
import { addView } from "../views/add.js";
import redirect from "../redirect.js";
import { validateField, required, minLength, validateSchema }  from "../validation.js";
import { addingNewsSchema } from "../schema/add.js";

export function exampleController({ request }){
    const short = getExampleShortArticle();
    const long = getExampleLongArticle();
    const similar = getExampleSimilarArticle();
   
    return render(addView, { short, long, similar }, request);
}

export async function imageController({ request }){
    const url = new URL(request.url);
    const id = url.pathname.split("/")[2];

    const shortImgId = getShortImage(id);
    if(shortImgId){
        if (shortImgId.image_type == "small") {
            const shortImg = await Deno.readFile("." + shortImgId.image);
            return new Response(shortImg, { headers: { "Content-Type": "image/jpeg"}});
        }
        if (shortImgId.image_type == "not_small"){
            return new Response(shortImgId.image, { headers: {"Content-Type": "image/jpeg"}});
        }
    }

    const longImgId = getLongImage(id);
    if(longImgId){
        if (longImgId.image_type == "big") {
            const longImg = await Deno.readFile("." + longImgId.image);
            return new Response(longImg, { headers: { "Content-Type": "image/jpeg"}});
        }
        if (longImgId.image_type == "not_big"){
            return new Response(longImgId.image, { headers: {"Content-Type": "image/jpeg"}});
        }
    }
    return new Response("Not Found", { status: 404});
}




export async function createNewsController({ request }){
    const formData = await request.formData();

    const { isValid, errors } = validateSchema(formData, addingNewsSchema);

    const short_article_id = formData.get('short_idName');
    const short_article_title = formData.get('short_title');
    const short_article_date = formData.get('short_date');
    const short_article_catagory = formData.get('short_catagory');
    const short_article_content = formData.get('short_paragraph');

    const image = formData.get('short_image');
    const short_article_image = new Uint8Array(await image.arrayBuffer());

    const long_article_id = formData.get('short_idName');
    const long_article_title_1 = formData.get('long_title');

    const news_image = formData.get('long_image');
    const long_article_image = new Uint8Array(await news_image.arrayBuffer());

    const long_article_date = formData.get('short_date'); 
    const long_article_catagory = formData.get('short_catagory'); 
    const long_article_title_2 = formData.get('long_header'); 
    const long_article_content_1 = formData.get('long_paragraph');
    const long_article_title_3 = formData.get('long_header_2'); 
    const long_article_content_2 = formData.get('long_paragraph_2');
    const long_article_title_4 = formData.get('long_header_3');
    const long_article_content_3 = formData.get('long_paragraph_3');
    const long_article_title_5 = formData.get('long_header_4');
    const long_article_content_4 = formData.get('long_paragraph_4');
    const long_article_content_5 = formData.get('long_paragraph_5');

    const short_article_image_type = 'not_small';
    const long_article_image_type = 'not_big';


    if(!isValid){
        const short = getExampleShortArticle();
        const long = getExampleLongArticle();
        const similar = getExampleSimilarArticle();

        return render(addView, { short, long, similar, errors }, request, 400);
    }

    createShortNews(
        short_article_id, 
        short_article_title, 
        short_article_date, 
        short_article_image, 
        short_article_image_type, 
        short_article_catagory, 
        short_article_content);

    createLongNews(
            long_article_id,
            long_article_title_1, 
            long_article_image,
            long_article_image_type, 
            long_article_date, 
            long_article_catagory, 
            long_article_title_2, 
            long_article_content_1, 
            long_article_title_3, 
            long_article_content_2, 
            long_article_title_4, 
            long_article_content_3, 
            long_article_title_5,
            long_article_content_4, 
            long_article_content_5);

    const news_id = short_article_id;

    if (formData.get('similar_football')){
        createSimilar(news_id, 'football', 'The university football team won the football tournament after a season full of hard work and practice.');
    }
    if (formData.get('similar_Basketball')){
        createSimilar(news_id, 'basketball', 'The basketball team won the basketball tournament with skill and energy.');
    }
    if (formData.get('similar_robotics')){
        createSimilar(news_id, 'robotics', 'The university robotics team won a major robotics competition by designing and building an impressive robot.');
    }
    if (formData.get('similar_Auditions')){
        createSimilar(news_id, 'audition', 'The university theater department successfully staged a performance of Hamlet, showcasing the talents');
    }
    if (formData.get('similar_art')){
        createSimilar(news_id, 'art', 'The university hosted its Annual Art Festival, showcasing student creativity through exhibitions');
    }
    if (formData.get('similar_MUN')){
        createSimilar(news_id, 'mun', 'The university successfully hosted its annual Model United Nations (MUN)');
    }
    const headers = new Headers();
    return redirect(headers, '/news/news-home', `added '${short_article_title}' Successfully`);
}



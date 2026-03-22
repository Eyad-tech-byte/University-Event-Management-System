export function newsView({ content, similarThings }){
    
    const contentOfNews = content.map(news_article => `
         <h1>${news_article.news_title_1}</h1>
        <a target="_self" href="${news_article.news_image}">
        <img src="${news_article.news_image}" alt=${news_article.news_title_2} width="400" height="450">
        </a>
        <div class="type">
            <time datetime="${news_article.news_date}"> ${news_article.news_date} </time>  
            <p>#${news_article.news_catagory}</p>
        </div>

        <h3>${news_article.news_title_2}</h3>
        <p>${news_article.news_content_1}</p>
            <br>
        
            <div class="both">
        <div>
        <h3>${news_article.news_title_3}</h3>
        <p>${news_article.news_content_2}</p>
        </div>
        <div>
        <h3>${news_article.news_title_4}</h3>
        <p>${news_article.news_content_3}</p>
        </div>
        </div>
        <br>

        <h3>${news_article.news_title_5}</h3>
        <p>${news_article.news_content_4}
        </p>
        
        <p>${news_article.news_content_5} <a href="index.html"><ins>here</ins></a></p>
        `).join("\n");
        
        const similarArticles = similarThings.map(news_section => ` 
                <a href="/news/news-${news_section.news_section_id}-event"><p>${news_section.news_section_content}<ins>view more...</ins></p></a><hr>
            `).join("\n");

    return `
    <div class="news-styling">
    <article>
    ${contentOfNews}
    </article>

    <section>
    ${similarArticles}
    </section>
    </div>
    
    `
}


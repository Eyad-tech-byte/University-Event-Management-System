import { escape } from "@std/html/entities";

export function removeView({ checkbox }){
    
    const remove_news = checkbox.map(article => `
            <article class="remove-news">
                <div class="remove-tittle">
                    <strong>${escape(article.title)}</strong>
                    <time datetime="${article.date}"> ${article.date}</time>
                </div>

                <figure class="remove-img">
                    <a href="/news/news-${escape(article.idName.toLowerCase())}-event">
                        <img src="/file/${escape(article.idName)}" alt="${escape(article.title)}" width="300" height="200">
                        ${escape(article.content)}
                        <ins> view more...</ins><br>
                    </a>
                </figure>

                <a href="/news/news-${article.catagory}"><ins>#${article.catagory}</ins></a>
                <hr>
            </article>

            <div>
                <input type="checkbox" id="${escape(article.idName)}" name="news_delete" value="${escape(article.idName)}">
                <label for="${escape(article.idName)}">To remove this one tick the checkbox</label>
            </div>
        `).join("\n");

    return `
    <main class="remove-form">
        <h2>Remove News</h2>
        <form method="POST">
            <section class="remove-news-page">
                ${remove_news}
            </section>
            <div class="end">
                <input type="submit" value="Delete">
            </div>
        </form>
    </main>
    `
}


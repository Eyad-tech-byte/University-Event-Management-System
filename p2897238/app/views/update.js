import { escape } from "@std/html/entities";

export function updateView({ update }){
    
    const update_news = update.map(news => `
            <article class="update-news">
                <div class="update-tittle">
                    <strong>${escape(news.title)}</strong>
                    <time datetime="${news.date}"> ${news.date}</time>
                </div>

                <figure class="update-img">
                    <a target="_blank" href="/news/news-${escape(news.idName.toLowerCase())}-event">
                        <img src="/file/${escape(news.idName)}" alt="${escape(news.title)}" width="300" height="200">
                        ${escape(news.content)}
                        <ins> view more...</ins><br>
                    </a>
                </figure>

                <a href="/news/news-${news.catagory}"><ins>#${news.catagory}</ins></a>
                <hr>
            </article>

            <div>
                <input type="checkbox" id="${escape(news.idName)}" name="update_news" value="${escape(news.idName)}">
                <label for="${escape(news.idName)}">To update this one tick the checkbox</label>
            </div>
        `).join("\n");

    return `
    <main class="update-form">
        <h2>Update News</h2>
        <form method="POST">
            <section class="update-news-page">
                ${update_news}
            </section>
            <div class="end">
                <input type="submit" value="Update">
            </div>
        </form>
    </main>
    `
}


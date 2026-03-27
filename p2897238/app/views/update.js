
export function updateView({ update }){
    
    const update_news = update.map(article => `
            <article class="update-news">
                <div class="update-tittle">
                    <strong>${article.title}</strong>
                    <time datetime="${article.date}"> ${article.date}</time>
                </div>

                <figure class="update-img">
                    <a href="/news/news-${article.idName.toLowerCase()}-event">
                        <img src="/file/${article.idName}" alt="${article.title}" width="300" height="200">
                        ${article.content}
                        <ins> view more...</ins><br>
                    </a>
                </figure>

                <a href="/news/news-${article.catagory}"><ins>#${article.catagory}</ins></a>
                <hr>
            </article>

            <div>
                <input type="checkbox" id="${article.idName}" name="update_news" value="${article.idName}">
                <label for="${article.idName}">To update this one tick the checkbox</label>
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


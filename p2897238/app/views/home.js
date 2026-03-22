export function homesView({ news, events }){
    
    const news_events = news.map(article => `
        <div class="news">
            <div class="tittle">
                <b>${article.title}</b>
                <time datetime="${article.date}"> ${article.date}</time>
            </div>
            <a href="/news/news-${article.idName.toLowerCase()}-event">
                <img src=${article.image} alt="${article.title}" width="300" height="200">
                ${article.content}
                <ins> view more...</ins><br>
            </a>
            <a href="/${article.catagory}"><ins>#${article.catagory}</ins></a>
            <hr>
        </div>
        `).join("\n");
        
        const events_news = events.map(section => `

                    <div class="events">
                        <img src=${section.section_image} alt=${section.section_title} width="300" height="200">
                        <div>
                        <b>${section.section_title}</b><br><br>
                        ${section.section_content}<br><br>
                        <time datetime=${section.section_date}>${section.section_date}</time><br><br>
                        <form action=/events/events-details/9/university-talent-showcase>
                        <button>View Details...</button>
                        </form>
                        </div>
                    </div>
                    <hr>
            `).join("\n");

    return `
    <div class="big">
    <div class="small">

    <article>
    <h2>Event News</h2>
    ${news_events}
    </article>
    
    <section>
    <h2><mark>Dont miss these events!</mark></h2>
    ${events_news}
     <form action="/events/events-homepage">
        <button>View More Events...</button>
     </form>
    </secton>
    </div>

    <aside>
            <h2>Calendar</h2>
            <div id="date"></div>
            <br><br>

            <h2>Comments</h2>
            <form autocomplete="off">
                <label>Name:</label><br>
                <input type="text" id="name" placeholder="your name..."><br><br>

                <label>Write your comment:</label><br>
                <textarea id="comment" rows="5" placeholder="type your comment..."></textarea><br><br>

                <input type="button" value="Submit" onclick="addComment()">
                <input type="reset" value="reset">
            </form>

            <br>

            <div id="commentBox"></div>
    </aside>
    </div>
    `
}


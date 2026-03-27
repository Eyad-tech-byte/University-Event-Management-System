export function homesView({ news, events }){
    
    const news_events = news.map(article => `
        <article class="news"> 
            <div class="tittle">
                <strong>${article.title}</strong>
                <time datetime="${article.date}"> ${article.date}</time>
            </div>

            <figure class="first_image">
                <a href="/news/news-${article.idName.toLowerCase()}-event">
                    <img src="/file/${article.idName}" alt="${article.title}" width="300" height="200">
                    ${article.content}
                    <ins> view more...</ins><br>
                </a>
            </figure>

            <a href="/news/news-${article.catagory}"><ins>#${article.catagory}</ins></a>
            <hr>
        </article>
        `).join("\n"); 
        
        const events_news = events.map(section => `
            <article class="events">
                <img src=${section.section_image} alt="${section.section_title}" width="300" height="200">
                <div>
                    <b>${section.section_title}</b><br><br>
                    ${section.section_content}<br><br>
                    <time datetime=${section.section_date}>${section.section_date}</time><br><br>
                    <button type="button"><a href="/events/events-homepage">View Details</a></button>
                </div>
            </article>
            <hr>
        `).join("\n");

    return `
    <main class="big">
        <div class="small">

            <section class="news_page">
                <h2>Event News</h2>
                ${news_events}
            </section>
                
            <section class="events_page">
                <h2><mark>Dont miss these events!</mark></h2>
                ${events_news}
                <button type="button"><a href="/events/events-homepage">view more events</a></button>
            </section>
        </div>

        <aside class="comments_calender">
            <h2>Calendar</h2>
            <div id="date"></div>
                <br><br>

                <h2>Comments</h2>
                <form autocomplete="off">
                    <label>Name:</label><br>
                    <input type="text" id="name" placeholder="your name..."><br><br>

                    <label>Write your comment:</label><br>
                    <textarea id="comment" rows="5" placeholder="type your comment..."></textarea><br><br>

                    <input type="button" value="Submit">
                    <input type="reset" value="reset">
                </form>

                <br>

                <div id="commentBox"></div>
        </aside>
    </main>
    `
}


import { escape } from "@std/html/entities";
import { fragments } from "./add.js";

export function homesView({ news, events, comments, 
    error = {
        name: {},
        comment: {}
    }}){
    
    const news_events = news.map(article => `
        <article class="news"> 
            <div class="tittle">
                <strong>${escape(article.title)}</strong>
                <time datetime="${article.date}"> ${article.date}</time>
            </div>

            <figure class="first_image">
                <a href="/news/news-${escape(article.idName.toLowerCase())}-event">
                    <img src="/file/${escape(article.idName)}" alt="${escape(article.title)}" width="300" height="200">
                    ${escape(article.content)}
                    <span class="underline"> view more...</span><br>
                </a>
            </figure>

            <a href="/news/news-${article.catagory}"><span class="underline">#${article.catagory}</span></a>
            <hr>
        </article>
        `).join("\n"); 
        
        const events_news = events.map(section => `
            <article class="events">
                <img src=${section.section_image} alt=${escape(section.section_title)} width="300" height="200">
                <div>
                    <b>${section.section_title}</b><br><br>
                    ${section.section_content}<br><br>
                    <time datetime=${section.section_date}>${section.section_date}</time><br><br>
                    <button type="button"><a href="/events/events-homepage">View Details</a></button>
                </div>
            </article>
            <hr>
        `).join("\n");

        const Comment_news = comments.map(comments => `
            <div>
                <p>Name: ${escape(comments.name)}</p>
                <p>${escape(comments.comment)}</p>
                <hr>
            </div>
            `).join("\n");

        const { name, comment } = fragments(error);

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
            <form method="POST" autocomplete="off">
                <div class="creating-comment">
                    <div class="name-input">
                        <label>Name:</label><br>
                        <input type="text" name="name" id="name" placeholder="your name..." required minLength="3">
                        ${name.message}
                    </div>

                    <div class="comment-input">
                        <label>Write your comment:</label><br>
                        <textarea id="comment" name="comment" rows="5" placeholder="type your comment..." required minLength="4"></textarea>
                        ${comment.message}
                    </div>

                    <div class="commentButton">
                        <input type="submit" value="Submit">
                        <input type="reset" value="reset">
                    </div>
                </div>
            </form>

            <div id="commentBox">
                ${Comment_news}
            </div>
        </aside>
    </main>
    `
}


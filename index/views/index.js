import { escape } from "@std/html/entities";
import { formatDate, formatLineBreaks, formatURL } from "../../P2896775/app/assets/events-script.js";


export function indexView(data) {

    const eventsHtml =  data.events.map(event => 
    `
    <a href="/events/events-details/${event.event_id}/${formatURL(escape(event.event_name))}">
        <div class="event ${escape(event.event_name).toLowerCase()}">
            <img src="${escape(event.event_image_link)}" alt="${escape(event.event_name)}" width="300" height="200">
            <time datetime="${escape(event.event_date)}">${formatDate(escape(event.event_date))}</time> 
            <h4>${escape(event.event_name)}</h4>
            <p>${formatLineBreaks(escape(event.event_short_description))}</p>

            <button>View Details</button>
        </div>
    </a>
    `).join("");


    return `
    <article>
        <h2>Events</h2>
        <div class="events">
            ${eventsHtml}
        </div>

        <form action="/events/events-homepage">
          <button class="more">More Events...</button>
        </form>
    </article>

    <section>
        <a href="project.html">
            <h2>Event News</h2>
        </a>
            <div class="new">
            <div class="news sports" id="football">
                        <div class="tittle">
                        <b>Football Champions</b> <time datetime="2026-02-22"> 22 Feb 2026 </time> 
                        </div>
                        <a href="football.html">
                        <img src="/p2897238/assets/img/football.jpg" alt="football" width="200" height="150">
                        The university football team won the football tournament after a season full of
                        hard work and practice.  <ins>view more...</ins><br>
                        </a>
                </div>

                <div class="news Academic" id="Academic">
                    <div class="tittle">
                        <b>MUN</b> <time datetime="2026-01-8">8 Jan 2026</time>
                        </div>
                    <a href="united.html">
                        <img src="/p2897238/assets/img/united.jpg" alt="MUN" width="200" height="150">
                        The university recently hosted its annual MUN Conference, where students participated 
                        in diplomatic and global discussions. <ins>view more...</ins><br>
                    </a>
                </div>

                <div class="news technology" id="robotics">
                    <div class="tittle">
                        <b>Robotics Champions</b> <time datetime="2025-01-3"> 3 Jan 2025 </time>
                        </div>
                    <a href="robotics.html">
                        <img src="/p2897238/assets/img/robotics2.jpg" alt="robotics" width="200" height="150">
                        The university robotics team won a major robotics competition by designing and 
                        building an impressive robot.<ins>view more...</ins><br>
                    </a>
                </div>
                </div>
                <a href="project.html">
                <button class="more" onclick="">More News...</button>
                </a>
            </section>
    `
}
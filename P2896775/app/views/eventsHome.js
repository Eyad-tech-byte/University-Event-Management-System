import { escape } from "@std/html/entities";
import { formatDate, formatLineBreaks, formatURL } from "../../assets/events-script.js";

export function eventsHomeView(data) {

  const categoriesNav = data.categories.map(category => `
    <li><a href="/events/category=${formatURL(escape(category.category_name))}/${category.category_id}">${escape(category.category_name)}</a></li>
    `).join("");
    

  let searchText;

  if (data.searchItem && data.events.length != 0) {
    searchText = `Search results for "${escape(data.searchItem).trim()}"`;

  } else if (data.searchItem && data.events.length == 0) {
    searchText = `Search result for "${escape(data.searchItem).trim()}" not found. Please try again.`;

  } else if (!data.searchItem) {
    searchText = ``;
  }


  let eventsCardHtml;

  if (data.events.length != 0) {
    eventsHtml =
    data.events.map(event => 
    `
    <a href="/events/events-details/${event.event_id}/${formatURL(escape(event.event_name))}">
        <article class="event-card">
            <img src="${escape(event.event_image_link)}" alt="${escape(event.event_name)}" width="200" height="100">
            <p class="category">${escape(event.category_name).toUpperCase()}</p>
            <time datetime="${escape(event.event_date)}">
            ${formatDate(escape(event.event_date))}
            </time>
            <h3>${escape(event.event_name)}</h3>
            <p class="short-desc">${formatLineBreaks(escape(event.event_short_description))}</p>
            <p class="view-details">View Details</p>
        </article>
        </a>
    `).join("");
  }
  

  
  return`
    <div class="page-wrapper">
    <header>
      <h1>Events at Imaginary University</h1>
      <p>Explore upcoming events and register to participate</p>
    </header>

    <nav>
      <ul>
        <li><a href="/">Back</a></li>
        <li><a href="/events/events-homepage">All Events</a></li>
        ${categoriesNav}
      </ul>

      <form action="/events/events-homepage" method="GET">
        <div class="search-container">
          <label for="search-category">Search:</label>
          <input type="search" id="search-category" name="search-student" placeholder="Type an event to search"/>
          <button type="submit" class="search-btn">Search</button>
        </div>
      </form>
    </nav>

    <main>
      <section id="all-events">
        <h2>${searchText || "All Events"}</h2>
        ${eventsCardHtml || `<p id="no-events-error">No events available for the search result.</p>`}
      </section>  
    </main>
    </div>
    `
}




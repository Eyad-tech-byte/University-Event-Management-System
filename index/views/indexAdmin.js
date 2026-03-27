export function adminView(){
    return `
    <main class="admin_page">
        <div class="admin" id="admin">
            <div class="events-admin">
                <form action="/events/admin/events-homepage" method="GET">
                    <button class="events-admin-button">Edit Events Page</button>
                </form>
            </div>

            <div class="news-admin-button">
                <form action="/news/news-admin" method="GET">
                    <button class="news-admin-button">Edit Event News Page</button>
                </form>
            </div>
        </div>
    </main>

    `
}


export function adminView(){
    return `
    <main class="admin_page">
        <div class="admin" id="admin">
            <div class="add">
                <form action="/news/news-admin-add-news-event" method="GET">
                    <button class="addButton">ADD</button>
                </form>
            </div>

            <div class="update">
                <form action="/news/news-admin-update-choose-news-event" method="GET">
                    <button class="updateButton">UPDATE</button>
                </form>
            </div>

            <div class="remove">
                <form action="/news/news-admin-remove-news-event" method="GET">
                    <button class="removeButton">REMOVE</button>
                </form>
            </div>
        </div>
    </main>

    `
}


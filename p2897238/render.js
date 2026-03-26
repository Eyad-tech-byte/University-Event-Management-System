export default function render(viewFn, data, status = 200){
    const content = viewFn(data);
    const headers = new Headers();
    headers.set("content-type", "text/html");
    const html =`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Event News</title>

                <link rel="icon" href="/p2897238/assets/img/logo.png">
                <link rel="stylesheet" href="/p2897238/assets/news.css">
            </head>

            <body>
                <header>
                    <h1><a href="/">Event Managment System </a></h1>
                </header>

                <nav>
                    <div class="navAll">
                        <div class="navBar">
                            <ul>
                                <li><a href="/news/news-home">All</a></li>
                                <li><a href="/news/news-sports">Sports</a></li>
                                <li><a href="/news/news-art">Art</a></li>
                                <li><a href="/news/news-technology">Technology</a></li>
                                <li><a href="/news/news-academic">Academic</a></li>
                                <li><a href="/news/news-admin">Admin</a></li>
                            </ul>
                        </div>
                        <div class="search">
                            <label style="color: white;">Search: </label>
                            <input class="serch" type="search" id="search" name="search">
                            <button class="sarch">Search</button>    
                        </div>
                    </div>
                </nav>

                ${content}
   
                <footer>
                    <div>
                        <address style="align-self: flex-end;">
                            Email: <a href="mailto:fake_university@example.com">fake_university@example.com</a><br>
                            Leicester, UK
                        </address>
                    </div>

                    <div>
                        <h3>Powerd by</h3>
                        <h4>Footer</h4>
                    </div>
                    <div>
                        <p>&copy Fake University. All rights reserved.</p>
                    </div>
                </footer>

                

            </body>
        </html>
        `
    return new Response(html, { headers, status});
}
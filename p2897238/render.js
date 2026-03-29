import { escape } from "@std/html/entities";
import { getFlash } from "./app/flash.js";

export default function render(viewFn, data, ctx){
    const { request, headers, status = 200 } = ctx;
    const content = viewFn(data);

    const flash = getFlash(request.headers, headers);
    const flashMessage = flash ? `
    <aside id="flash">
        <p>${escape(flash)}</p>
    </aside>
    ` : ''

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
                <header class="main-header">
                    <h1><a href="/">Imaginary University Managment System</a></h1>
                </header>

                <nav class="main-nav">
                    <div class="navAll">
                        <div class="navBar">
                            <ul>
                                <li><a href="/">Back</a></li>
                                <li><a href="/news/news-home">All</a></li>
                                <li><a href="/news/news-sports">Sports</a></li>
                                <li><a href="/news/news-art">Art</a></li>
                                <li><a href="/news/news-technology">Technology</a></li>
                                <li><a href="/news/news-academic">Academic</a></li>
                                <li><a href="/news/news-admin">Admin</a></li>
                            </ul>
                        </div>
                        <div class="search">
                            <form action="/news/news-home" method="GET" autocomplete="off">
                                <label style="color: white;">Search: </label>
                                <input class="serch" type="search" id="search" name="search">
                                <button class="sarch" type="submit">Search</button>
                            </form>    
                        </div>
                    </div>
                </nav>
                ${flashMessage}
                ${content}
   
                <footer class="main-footer">
                    <div>
                        <address style="align-self: flex-end;">
                            Address<br><br>
                            123 University Avenue<br>
                            Dubai, UAE<br>
                            LE1 XXX
                        </address>
                    </div>
                    
                    <div>
                        <p>&copy Imaginary University.All rights reserved.</p>
                    </div>

                    <div>
                        <span>Contact Information</span>
                        <p>Email: <a href="mailto:info@imaginaryuniversity.ac.ae">info@imaginaryuniversity.ac.ae</a></p>
                        <span>Phone: +971 5412345678 </span>
                    </div>
                </footer>

                <script src="/p2897238/assets/news.js"></script>                

            </body>
        </html>
        `
    return new Response(html, { headers, status});
}
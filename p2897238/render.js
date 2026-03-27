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
                    <h1><a href="/">Imaginary University Managment System</a></h1>
                </header>

                <nav>
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

                

            </body>
        </html>
        `
    return new Response(html, { headers, status});
}
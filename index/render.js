export function render(viewFn, data, request, status = 200) {

    const content = viewFn(data);
    const headers = new Headers();

    headers.set("content-type", "text/html");

    const html = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>University Event Managment System</title>

            <link rel="icon" href="/p2897238/assets/img/logo.png">
            <link rel="stylesheet" href="/index/assets/index.css">
        </head>
        <body>
            <header>
                <h1></h1>
                <h1><a href="/">Imaginary University Managment System</a></h1>
                <div class="button">
                    <a href="/log-in">
                        <button class="login">Log in</button>
                    </a>
                </div>
            </header>

            <nav>
                <div class="navBar">
                <ul>
                    <li><a href="/events/events-homepage">Events</a></li>
                    <li><a href="/news/news-home">News</a></li>
                    <li><a href="/register/registration-form">Register</a></li>
                </ul>
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
            `;

    return new Response(html, { headers, status });
}
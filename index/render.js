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
        <a href="/"><h1>University Event Managment System</h1></a>
        <div class="button">
            <a href="admin.html">
            <button class="login">Log in</button>
            </a>
        </div>
    </header>

    <nav>
        <div class="navBar">
        <ul>
            <li><a href="/events/events-homepage">Events</a></li>
            <li><a href="/news/news-home-page">News</a></li>
        </ul>
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
    `;

    return new Response(html, { headers, status });
}
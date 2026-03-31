export default function render(page) {

  let content = "";

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>University Event Management System</title>
    <link rel="stylesheet" href="/P2898534/assets/style.css">
  </head>
  <body>

    ${page}
<script src="/P2898534/assets/style.js"></script>
  </body>
  </html>
  `;

  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}
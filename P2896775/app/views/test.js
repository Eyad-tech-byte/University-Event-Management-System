export function testView(data) {
    return `
    <h1>Hello World</h1>
    <p>Testing if html content is being rendered</p>
    <p>I should be able to see a number here <strong>${data.num}</strong></p>
    `
}
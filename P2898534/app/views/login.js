

export function loginView () {

return ` 

<div class="container">
  <h2>Login</h2>

  <input id="username" type="text" placeholder="Username">
  <input id="password" type="password" placeholder="Password">

  <button onclick="login()">Login</button>

  <p id="message"></p>

  <a href="register.html">Don't have an account? Register</a>
</div>



`
}
export function registerview () {
return `
 <div class="register-container">
  <h2>Registration</h2>

  <!-- Personal -->
  <div class="section-title">Personal Details</div>
  <div class="form-grid">
    <input id="fullname" type="text" placeholder="Full Name">
    <input id="dob" type="date">
    <input id="email" type="email" placeholder="Email">
    <input id="mobile" type="text" placeholder="Mobile Number">
    <select id="gender">
      <option>Gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>
    <input id="occupation" type="text" placeholder="Events name">
  </div>

 

  

  <button onclick="register()">Register</button>

  <p id="message"></p>

  
</div>



  





`
}

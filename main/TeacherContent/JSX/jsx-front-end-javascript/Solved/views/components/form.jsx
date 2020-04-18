const React = require('react')

const Form = () =>
  <form>
    <div class='form-group'>
      <label htmlFor='email'>Email address</label>
      <input type='email' class='form-control' id='email' aria-describedby='emailHelp' placeholder='Enter email' />
      <small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small>
    </div>
    <div class='form-group'>
      <label htmlFor='password'>Password</label>
      <input type='password' class='form-control' id='password' placeholder='Password' />
    </div>
    <button type='submit' class='btn btn-primary' id='submitUser'>Submit</button>
  </form>

module.exports = Form

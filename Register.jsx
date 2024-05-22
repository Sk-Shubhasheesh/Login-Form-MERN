import {useState} from 'react'
import axios from 'axios'
function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function registerUser() {
    
    try {
        const response = await axios.post('http://localhost:1337/api/register', {
            name,
            email,
            password
        });
        const data = response.data;
        console.log(data);
        alert('Registration successful!');
    } catch (error) {
        console.error('Error registering user:', error);
    }
}
 return (
  <div>
    <h1>Register</h1>
    <form onSubmit={registerUser}>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" /> <br />
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" /> <br />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" /> <br />
      <input type='submit' value="Register" />
    </form>
  </div>
 )
}

export default Register;

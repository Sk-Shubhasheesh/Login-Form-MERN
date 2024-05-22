import {useState} from 'react'
import axios from 'axios';



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function loginUser() {
    
    try {
        const response = await axios.post('http://localhost:1337/api/login', {
            email,
            password
        });
        const data = response.data;
        if(data.user){
          alert('Login successful')
        } else {
          alert('plese check your username and password')
        }
    } catch (error) {
        console.error('Error registering user:', error);
    }
}
 return (
  <div>
    <h1>Login</h1>
    <form onSubmit={loginUser}>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" /> <br />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" /> <br />
      <input type='submit' value="Login" />
    </form>
  </div>
 )
}

export default Login;

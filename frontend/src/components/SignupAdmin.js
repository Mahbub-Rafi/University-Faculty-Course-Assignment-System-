import { useState } from "react"

const SignupAdmin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Assign a Admin</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button>Sign up</button>
    </form>
  )
}

export default SignupAdmin
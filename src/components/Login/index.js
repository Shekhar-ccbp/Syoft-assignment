import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './index.css'

const LogIn = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: '',
  })

  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('https://syoft.dev/Api/userlogin/api/userlogin', formData)
      .then(response => {
        if (
          response.data.status === false &&
          response.data.msg === 'Invalid credentials'
        ) {
          setError('Invalid email or password')
        } else {
          console.log(response.data)
          localStorage.setItem('user', JSON.stringify(response.data))
          navigate('/dashboard')
        }
      })
      .catch(err => {
        console.error('There was an error!', err)
        setError('An error occurred. Please try again later.')
      })
  }

  return (
    <div className="login">
      <div className="login-container">
        <h2>Log In</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="user_email"
              id="email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="user_password"
              id="password"
              value={formData.user_password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <p>
          Don`&apos`t have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default LogIn

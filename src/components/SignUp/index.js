import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './index.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_phone: '',
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
    const payload = {
      ...formData,
      user_lastname: 'Doe',
      user_city: 'Hyderabad',
      user_zipcode: '500072',
    }

    axios
      .post(
        'https://syoft.dev/Api/user_registeration/api/user_registeration',
        payload,
      )
      .then(response => {
        if (
          response.data.status === false &&
          response.data.msg === 'Already Exists'
        ) {
          setError('User already exists')
        } else {
          console.log(response.data)
          navigate('/login')
        }
      })
      .catch(err => {
        console.error('There was an error!', err)
        setError('An error occurred. Please try again later.')
      })
  }

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-left">
          <h1 className="title">
            Welcome to <br /> our community
          </h1>
          <p className="para">
            Fuse helps developers to build organized and well coded dashboards
            full of beautiful and rich modules. Join us and start building your
            application today.
          </p>
          <p className="para">
            More than 17K people joined us, it `&apos,` s your turn
          </p>
        </div>
        <div className="signup-right">
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1722502576/logoImage_iie0mw.png"
            alt=""
            className="logo-image"
          />
          <h2 className="side-head">Sign Up</h2>
          <p className="line">
            Already have an account?{' '}
            <a className="underline" href="/login">
              Sign In
            </a>
          </p>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstname">Full name *</label>
              <input
                type="text"
                name="user_firstname"
                id="firstname"
                value={formData.user_firstname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address *</label>
              <input
                type="email"
                name="user_email"
                id="email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="user_password"
                id="password"
                value={formData.user_password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="text"
                name="user_phone"
                id="phone"
                value={formData.user_phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input type="checkbox" name="terms" required />
              <label>
                I agree to the{' '}
                <a className="underline" href="#abc">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a className="underline" href="#abc">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button type="submit">Create your free account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp

import './index.css'

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <h2>Welcome to the Dashboard</h2>
        {user && user.user_data && user.user_data.length > 0 ? (
          <div>
            <p>
              <strong>First Name: </strong> {user.user_data[0].user_firstname}
            </p>
            <p>
              <strong>Last Name: </strong> {user.user_data[0].user_lastname}
            </p>
            <p>
              <strong>Email: </strong> {user.user_data[0].user_email}
            </p>
            <p>
              <strong>Phone: </strong> {user.user_data[0].user_phone}
            </p>
            <p>
              <strong>City: </strong> {user.user_data[0].user_city}
            </p>
            <p>
              <strong>Zipcode: </strong> {user.user_data[0].user_zipcode}
            </p>
          </div>
        ) : (
          <p>No user information available.</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard

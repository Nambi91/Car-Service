import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cars from './components/Cars'
import Header from './components/Header';
import Login from './components/Login';

const App = () => {

  const API_URL = 'http://localhost:8000'
  const [cars, setCars] = useState([])
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await fetchCars()
      setCars(carsFromServer)
    }

    getCars()

  }, [])



  // Fetch cars
  const fetchCars = async () => {
    const CAR_URL = `${API_URL}/cars`

    const cars = await fetch(CAR_URL)
    const data = await cars.json();

    return data
  }

  // Comment car
  const commentCar = async (id) => {
    console.log("Car comment")
  }

  // Login
  const onLogin = async () => {
    console.log("Login")
  }


  return (
    <Router>
      <div className="container">
        <Header onLogin={() => setShowLogin(!showLogin)} showLogin={showLogin} />

        <Route path='/' exact render={(props) => (
          <>
            {showLogin && <Login onLogin={onLogin} />}
            {!showLogin && <Cars cars={cars} onComment={commentCar} />}
          </>
        )} />

      </div>
    </Router>
  );
}

export default App;

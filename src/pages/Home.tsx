import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import filmsActions from '../store/actions/filmsActions';


interface IHomeScreenProps {
  setLoading: Function
}

const Home = (props: IHomeScreenProps) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filmsActions.initializeStart())
  }, []);


  return (

    <div>
      <h2>Home</h2>
      My Home page!
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/messages">Messages</Link></li>
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}


export default Home;
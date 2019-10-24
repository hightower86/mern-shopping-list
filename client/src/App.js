import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className='App'>
      <AppNavbar />
      {/* <header className='App-header'>Hello 4</header> */}
      <ShoppingList />
    </div>
  );
}

export default App;

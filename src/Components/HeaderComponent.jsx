import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

export default function HeaderComponent() {
  return (
    <div id='header'>
        <img src={logo} alt='calculator-logo'></img>
        <h1>Investment Calculator</h1>
    </div>
  )
}

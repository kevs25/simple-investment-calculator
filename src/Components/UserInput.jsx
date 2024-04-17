import React, { useState } from "react";

export default function UserInput({ onChangeInput, userInput }) {
  
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inital Investment</label>
          <input type="number" value={userInput.initialInvestment} onChange={(event) => onChangeInput('initialInvestment', event.target.value)} required />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" value={userInput.annualInvestment} onChange={(event) => onChangeInput('annualInvestment', event.target.value)} required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input type="number" value={userInput.expectedReturn} onChange={(event) => onChangeInput('expectedReturn', event.target.value)} required />
        </p>
        <p>
          <label>Annual return</label>
          <input type="number" value={userInput.duration} onChange={(event) => onChangeInput('duration', event.target.value)} required />
        </p>
      </div>
    </section>
  );
}

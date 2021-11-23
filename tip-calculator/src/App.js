import { useState } from 'react';
import logo from './images/logo.svg';
import './App.scss';
import './App.responsivity.scss';

const App = () => {
  const [value, setValue] = useState('');
  const [person, setPerson] = useState(1);
  const [tip, setTip] = useState(15);

  const handleValueChange = (event) => {+event.target.value >= 0 ? setValue(event.target.value) : setValue('')}
  const handlePersonChange = (event) => {+event.target.value > 0 ? setPerson(event.target.value) : setPerson(1)}
  const handleTipChange = (event) => {
    if(event.target.tagName === 'BUTTON') {
      setTip(+event.target.innerText.split('%')[0])
      document.querySelector('#custom-tip-input').value = ''
    } else {
      setTip(+event.target.value)
    }
  }
  
  const formatPrice = (num) => (Math.round(num * 100) / 100).toFixed(2);
  const calculateTip = () => value * (tip/100)
  const resetStates = () => {setValue(''); setPerson(1); setTip(15)}

  return (
    <main>
      <img src={logo} title="Splitter" alt="Splitter"/>

      <div className="content">
        <div id="left-side">
          {/* Bill */}
          <label htmlFor="bill-input">Bill</label>
          <input type="text" id="bill-input" value={value} placeholder="0" onChange={handleValueChange}></input>

          {/* Select Tip % */}
          <label htmlFor="custom-tip-input">Select Tip %</label>
          <div className="buttons">
            <button className={tip === 5 ? "btn active": "btn"} onClick={handleTipChange}>5%</button>
            <button className={tip === 10 ? "btn active": "btn"} onClick={handleTipChange}>10%</button>
            <button className={tip === 15 ? "btn active": "btn"} onClick={handleTipChange}>15%</button>
            <button className={tip === 25 ? "btn active": "btn"} onClick={handleTipChange}>25%</button>
            <button className={tip === 50 ? "btn active": "btn"} onClick={handleTipChange}>50%</button>
            <input type="number" id="custom-tip-input" min="0" max="100" placeholder="Custom" onChange={handleTipChange}></input>
          </div>

          {/* Number of People */}
          <label htmlFor="people-input">Number of People</label>
          <input type="text" id="people-input" placeholder="1" value={person} onChange={handlePersonChange}></input>
        </div>

        <div id="right-side">
          {/* Tip Amount */}
          <div className="amount-container" id="tip-amount">
            <div>
              <h2>Tip Amount</h2>
              <p>/person</p>
            </div>
            <p className="value">${formatPrice(calculateTip(value)/person)}</p>
          </div>

          {/* Total Amount */}
          <div className="amount-container" id="total-amount">
            <div>
              <h2>Total</h2>
              <p>/person</p>
            </div>
            <p className="value">${formatPrice((+value + calculateTip(value))/person)}</p>
          </div>

          <button className="btn active" onClick={resetStates} disabled={!value && person === 1}>Reset</button>
        </div>
      </div>
    </main>
  );
}

export default App;

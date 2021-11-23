import './App.scss';
import logo from './images/logo.svg';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

const App = () => {
  return (
    <main>
      <img src={logo} alt="Splitter" />
      <div className="content">
        <div id="left-side">
          {/* Bill */}
          <label for="bill-input">Bill</label>
          <div className="input-container">
            <img src={dollarIcon} alt="Bill icon"/>
            <input type="text" id="bill-input"></input>
          </div>

          {/* Select Tip % */}
          <label for="custom-tip-input">Select Tip %</label>
          <div className="buttons">
            <button className="btn">5%</button>
            <button className="btn">10%</button>
            <button className="btn active">15%</button>
            <button className="btn">25%</button>
            <button className="btn">50%</button>
            <input type="text" id="custom-tip-input" placeholder="Custom"></input>
          </div>

          {/* Number of People */}
          <label for="people-input">Number of People</label>
          <div className="input-container">
            <img src={personIcon} alt="Person icon"/>
            <input type="text" id="people-input"></input>
          </div>
        </div>

        <div id="right-side">
          {/* Tip Amount */}
          <div id="tip-amount">
            <div>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <p className="value">$4.27</p>
          </div>

          {/* Total Amount */}
          <div id="total-amount">
            <div>
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <p className="value">$32.79</p>
          </div>

          <button className="btn inactive">Reset</button>
        </div>
      </div>
    </main>
  );
}

export default App;

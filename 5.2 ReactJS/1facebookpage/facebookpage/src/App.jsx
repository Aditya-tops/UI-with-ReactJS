import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="left">
          <h1>facebook</h1>
          <p>Facebook helps you connect and share with the people in your life.</p>
        </div>

        <div className="right">
          <form>
            <input type="text" placeholder="Email or phone number" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="login-btn">Log in</button>
            <a href="#" className="forgot-password">Forgotten password?</a>
            <hr />
            <button type="button" className="signup-btn">Create new account</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect} from 'react'
import axios from 'axios'
function App() {

  const test = async () => {
    try {
      const login = await axios.post('https://865b-171-234-233-200.ngrok.io/api/admin/auth/login', {
        email: 'dohainam@gmail.com',
        password: '123456',
      });
    } catch (error) {
      console.log('erro', error);
    }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );
}

export default App;

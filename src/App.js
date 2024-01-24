
import './App.css';
import Navigation from './Navigation.js';
import LoginForm from './LoginForm.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;

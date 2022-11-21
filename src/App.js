import './App.css';
import User from './User';
import Footer from './Footer';
import { CurrentUserContextProvider } from './contexts/CurrentUserContext';

function App() {
  return (
    <CurrentUserContextProvider>
      <div className="App">
        <User />
        <hr />
        <Footer />
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;

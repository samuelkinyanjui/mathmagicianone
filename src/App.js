import './index.css';
import { Calculates } from './components/Calculator';
import Quote from './Quotes/Quote';

function App() {
  return (
    <>
      <div className="main">
        <Calculates />
        <Quote />
      </div>
    </>

  );
}

export default App;

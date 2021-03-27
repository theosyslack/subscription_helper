import './App.css';
import Service from './Service/Service';
import { HULU, NETFLIX } from './consts/SERVICES';

function App() {
  return (
    <div className="App">
      <div className="App__grid">
        <Service service={NETFLIX}/>
        <Service service={HULU}/>
      </div>
    </div>
  );
}

export default App;

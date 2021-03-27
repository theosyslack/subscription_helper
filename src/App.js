import './App.css';
import Service from './Components/Service/Service';
import AddService from './Components/AddService/AddService';
import SubscriptionContainer from './Components/SubscriptionContainer/SubscriptionContainer';
import { HULU, NETFLIX, PARAMOUNT_PLUS, DISNEY_PLUS } from './consts/SERVICES';
import { useContext } from 'react';
import { SubscriptionsContext } from './context/SubscriptionsContext';



function App() {
  return (
    <div className="App">
      <div className="App__grid">
        <SubscriptionContainer />
      </div>
    </div>
  );
}

export default App;

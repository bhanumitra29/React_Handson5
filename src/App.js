import './App.css';
import Message from './Compo/Message';
import HOC from './HOCCopmo/HOC';
import HOCData from './HOCCopmo/HOCData';


function App() {
  return (
    <div className="App">
      <Message />
      <HOC value = {HOCData} />
    </div>
  );
}

export default App;

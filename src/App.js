import './App.css';
import { Biography } from './components/Biography/Biography';
import {Image} from './components/Image/Image';
import { Title } from './components/Title/Title';


function App() {
  return (
    <div className="App">
      <Image />
      <Title />
      <Biography />
    </div>
  );
}

export default App;

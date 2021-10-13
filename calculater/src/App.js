import './App.css';
import { add, sub, mul, div } from './Cal';

function App() {
  return (
    <div>
         <ul>
                <li>Sum is {add(10, 20)}</li>
                <li>Sub is {sub(20, 30)}</li>
                <li>Mul is {mul(30, 40)}</li>
                <li>Div is {div(40, 50)}</li>
          </ul>
    </div>
  );
}

export default App;

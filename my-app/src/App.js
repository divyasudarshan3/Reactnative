//import logo from './logo.svg';
import Button from './Button';
import Text from './Text';
import { useState } from "react";
//import './App.css';
//import App1 from './App1.js'
const App = () => {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div className="App">
      <Text toggle={toggle} displayTxt="ReactJest"/>
      <Button setToggle={setToggle} btnTxt="Click Me!"/>
     {/*<App1/>*/}
    </div>
  );
}
  
export default App;
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Body from './components/Body';


function App() {
  return (
    <div className="App p--0"  
    
    >
       <Header></Header> 
       <Body></Body>
    </div>
  );
}

export default App;

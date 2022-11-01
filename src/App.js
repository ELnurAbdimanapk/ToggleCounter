import { useReducer } from "react";
import "./index.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count++,toggle:state.toggle};
    case "DECREMENT":
      return { count: state.count--,toggle:state.toggle };
      case 'SHOWCOUNT':
        return {count:state.count,toggle:!state.toggle}
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0,toggle:false });
  const minusHandler = () => {
    if(state.count >= 1){
      dispatch({type:'DECREMENT'})
    }
  }

  const addHandler = () => {
    dispatch ({type:'INCREMENT'})
  }
  const showHandler = () => {
    dispatch({type:'SHOWCOUNT'})
  }
  return (
    <div className="App">
      <div>
         <h2>Counter</h2> 
        {!state.toggle && <h1>{state.count}</h1>}
        <button onClick={minusHandler} className="minus">- Minus</button>
        <button onClick={addHandler} className="plus">Plus +</button>
        <div><button onClick={showHandler} className="show">Toggle</button></div>
      </div>
    </div>
  );
}

export default App;

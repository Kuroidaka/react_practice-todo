import { StoreContext, actions } from './store'
import './App.css';
import { useContext, useRef } from 'react';



function App() {
  const [state, dispatch] = useContext(StoreContext);
  const inputRef = useRef()
  const handleAdd = () => {
    dispatch(actions.setTodoInput('')) 
    dispatch(actions.addTodoInput(state.todoInput))
    inputRef.current.focus();
  }
  const handleDelete = (index) => dispatch(actions.deleteTodo(index))
  
 
  

  return (
    <div className='wrap'>
      <input 
        ref={inputRef}
        value={state.todoInput}
        onChange={e => dispatch(actions.setTodoInput(e.target.value))}
      />

      <button 
        onClick={handleAdd}
      >add</button>

      <ul>
        {state.todos.map((todo, index) => {
          return(
            <ul key={index} className='ul'>
              <li >{todo}</li>
              <button onClick={() => handleDelete(index)}>X</button>
            </ul>
          )
        })}
      </ul>
    </div>

  );
}

export default App;

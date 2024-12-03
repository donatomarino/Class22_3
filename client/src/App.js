import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import RegisterForm from './componentes/RegisterForm';
import ToDoList from './componentes/ToDoList';

function App() {
  return (
    <div className="App">
      <div className = 'RegisterForm'>
      <Header title = 'Registration Form' />
      <RegisterForm />
      </div>

      <div className='ToDoList'>
        <Header title={'To-Do-List'} />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;

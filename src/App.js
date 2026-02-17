import './App.css';
import { UserRow } from './components/UserRow/UserRow';
import { UserTable } from './components/UserTable/UserTable';
import { App2 } from './components/App/App';

const products = [
  { id: 1, name: "Оля", age: 20, city: "Киев" },
  { id: 2, name: "Игорь", age: 30, city: "Одесса" },
  { id: 3, name: "Лена", age: 25, city: "Львов" },
];

function formatAge(age) {
  return `${age} лет`;
}

function App() {
  return (
    <div className="App">
      <UserRow products={products}></UserRow>
      <UserTable products={products} formatAge={formatAge}></UserTable>
      <App2 products={products} formatAge={formatAge}></App2>
    </div>
  );
}

export default App;

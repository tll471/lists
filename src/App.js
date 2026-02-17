import './App.css';
import { GalleryItem } from './components/Gallery/Gallery';

const products = [
  { id: 1, url: "/irina.jpg", title: "Фото 1", author: "Ирина" },
  { id: 2, url: "/artem.avif", title: "Фото 2", author: "Артем" },
  { id: 3, url: "/kirill.webp", title: "Фото 3", author: "Кирилл" },
];


function App() {
  return (
    <div className="App">
      <GalleryItem products={products}></GalleryItem>
    </div>
  );
}

export default App;

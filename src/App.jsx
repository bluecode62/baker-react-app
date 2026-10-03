import "./App.css";
import BreadCard from "./components/BreadCard";
import imgList from "./components/data";

function App() {
  return (
    <div className="flex justify-evenly">
      {imgList.map((item) => (
        <BreadCard name={item.name} image={item.src} price={item.price} 
        />
      ))}
    </div>
  );
}

export default App;

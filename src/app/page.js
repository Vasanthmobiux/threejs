import Canvas from "./canvas/page";
import Customizer from "./customizer/page";
import Home from "./home/page";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Customizer />
      <Canvas />
    </main>
  );
};

export default App;

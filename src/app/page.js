import CanvasModel from "./canvas/page";
import Customizer from "./customizer/page";
import Home from "./home/page";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
};

export default App;

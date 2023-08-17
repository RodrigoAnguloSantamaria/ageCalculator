import { useContext } from "react";
import "./App.css";
import BirthForm from "./components/BitrhForm";
import { DataContext } from "./Context/DataContext";
import Screen from "./components/Screeen";

function App() {
  const context = useContext(DataContext);
  const { isBirthDate } = context;

  return (
    <div>
      <h1>Calcula tu edad </h1>
      <p>
        Introduce la fecha de nacimiento y se calculará tu edad. Si es el día
        del cumpleaños habrá sorptesa.
      </p>
      <BirthForm />
      {isBirthDate ? <Screen /> : null}
    </div>
  );
}

export default App;

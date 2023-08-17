import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { ageHook } from "../hooks/ageHook";

import confetti from "canvas-confetti";
import "./screen.css";
import regalo from "../assets/regalo.png";

function Screen() {
  const context = useContext(DataContext);
  const edad = ageHook();

  const handleLoad = () => {
    if (edad.days === 0) {
      confetti({
        spread: 150,
      });

      setTimeout(() => {
        confetti.reset();
        window.location.reload();
      }, 5000);
    } else {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  };

  return (
    <>
      <h5 onLoad={handleLoad()}>
        Tu edad es de {parseInt(edad.years)} años{" "}
        {edad.days != 0 ? <span> y {edad.days} días</span> : null}
      </h5>

      {edad.days === 0 && (
        <div>
          <h2 onLoad={handleLoad()}>HOY ES TU CUMPLEAÑOS</h2>
          <img src={regalo} alg="caja sorpresa de regalo de cumpleaños" />
        </div>
      )}
    </>
  );
}
export default Screen;

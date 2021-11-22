import React from "react";
import styles from "./styles.css";
import Capa from "../../Assets/capa.jpg";
import geriatrica from "../../Assets/fisioterapia-geriatria.jpg";
import aquatica from "../../Assets/fisio-aquatica.jpg";
import neural from "../../Assets/fisio-reural.jpg";

const Home = () => {
  return (
    <div>
      <img className="capa" src={Capa} />
      <div className="box">
        <h2>Equilíbrio & Propriocepção </h2>
        <p>
          A propriocepção refere-se a capacidade que o corpo tem para avaliar
          qual posição se encontra para ter o melhor equilíbrio, tanto quando
          está parado quanto quando faz movimentos ou realiza grandes esforços.
        </p>
      </div>
      <div className="container-md">
        <span className="mt-10 title">Conheça alguns de nossos serviços:</span>
        <div className="grid-imagens mt-10">
          <div className="image-services">
            <img  src={geriatrica} />
            <span>Fisioterapia geriátrica</span>
          </div>
          <div className="image-services">
            <img src={aquatica} />
            <span>Fisioterapia Aquática</span>
          </div>
          <div className="image-services">
            <img src={neural} />
            <span>Fisioterapia neurofuncional</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

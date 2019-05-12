import React from "react";
import "./app.scss";

function Appx() {
  return (
    <div className="main">
      <div className="container">
        <div className="thread-wrapper">
          <section className="thread-product cred">abc</section>
          <section className="thread-data cgreen">cba</section>
        </div>
      </div>
    </div>
  );
}

function Thread(props) {
  return (
    <div className="thread-wrapper">
      <section className="thread-product">
        <span className="product">
          <img src={props.productImage} alt="" />
          <span className="offerTime">30 dias</span>
        </span>
      </section>
      <section className="thread-data">
        <ul className="thread">
          <li />
          <li className="sthread-2">
            <span className="ti price-label underline">valor</span>
            <span className="ti normal-price">{props.totalValue}</span>
          </li>
          <li className="sthread-3">
            <span className="ti price-label">oferta</span>
            <span className="ti normal-price price-offer">
              {props.offerValue}
            </span>
          </li>
          <li className="sthread-5">
            <span className="ti price-label">inscritos</span>
            <span className="ti normal-price">{props.subscribes}</span>
          </li>
          <li className="sthread-6">
            <span className="ti price-label">bind</span>
            <span className="ti normal-price">{props.binds}</span>
          </li>
          <li className="sthread-1">
            <span>
              <a href="" className="bt">
                inscrever
              </a>
            </span>
            <br />
            <span>
              <a href="" className="bt">
                bind
              </a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <div className="container">
        <Thread
          totalValue="R$ 1.000,00"
          offerValue="R$ 900,00"
          time="30 dias"
          subscribes={100}
          binds={30}
          productImage="https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133453/1/133453169P1.png"
        />
        <Thread
          totalValue="R$ 600,00"
          offerValue="R$ 530,00"
          time="30 dias"
          subscribes={70}
          binds={25}
          productImage="https://images-americanas.b2w.io/produtos/01/00/item/116796/3/116796362P1.jpg"
        />
      </div>
    </div>
  );
}

export default App;

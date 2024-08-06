import React from "react";
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <Link href="">Track Tickets</Link>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <Link href="">Track account opening</Link>
          <Link href="">Track segment activation</Link>
          <Link href="">Intraday margins</Link>
          <Link href="">Kite user manual</Link>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <Link href="">Current Takeovers and Delisting - January 2024</Link>
            </li>
            <li>
              <Link href="">Latest Intraday leverages - MIS & CO</Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
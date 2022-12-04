import React from "react";
import ac from "../images/ac.png";
import carpenter from "../images/carpenter.png";
import cleaning from "../images/cleaning.png";
import plumbing from "../images/plumbing.png";
import salon from "../images/salon.png";
import applianceRepair from "../images/appliance-repair.png";
import electrical from "../images/electrical.png";
import pest from "../images/pest.png";
import spa from "../images/spa.png";
import paint from "../images/paint.png";
import { AiOutlineSearch } from "react-icons/ai";

function ServiceList() {
  return (
    <>
      <div className="container">
        <div className="bgimg">
          <div>
            <input
              className="searchService"
              type="text"
              placeholder="Search for services"
            ></input>
          </div>
          <section id="homepage">
            <div class="service-images">
              <button className="imgBtn">
                <img src={ac} alt="ac" />
                <p>Air Conditioning</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={carpenter} alt="carpenter" />
                <p>Carpenter</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={cleaning} alt="cleaning" />
                <p>Cleaning</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={plumbing} alt="plumbing" />
                <p>Plumbing</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={salon} alt="salon" />
                <p>Salon</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={applianceRepair} alt="carpenter" />
                <p>Appliance repair</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={paint} alt="cleaning" />
                <p>Paint</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={spa} alt="plumbing" />
                <p>Spa</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={electrical} alt="cleaning" />
                <p>Electrical</p>
              </button>
            </div>
            <div class="service-images">
              <button className="imgBtn">
                <img src={pest} alt="plumbing" />
                <p>Pest</p>
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ServiceList;

import React from "react";
import ac from '../images/ac.png'
import carpenter from "../images/carpenter.png"
import cleaning from '../images/cleaning.png'
import plumbing from '../images/plumbing.png'
import salon from '../images/salon.png'
import applianceRepair from '../images/appliance-repair.png'
import electrical from '../images/electrical.png'
import pest from '../images/pest.png'
import spa from '../images/spa.png'
import paint from '../images/paint.png'
import { AiOutlineSearch } from 'react-icons/ai'

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
        {/* <svg class="searchIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg> */}
      </div>
      <section id="homepage">
        <div class="service-images">
          <img src={ac} alt="ac" />
          <p>Air Conditioning</p>
        </div>
        <div class="service-images">
          <img src={carpenter} alt="carpenter" />
          <p>Carpenter</p>
        </div>
        <div class="service-images">
          <img src={cleaning} alt="cleaning" />
          <p>Cleaning</p>
        </div>
        <div class="service-images">
          <img src={plumbing} alt="plumbing" />
          <p>Plumbing</p>
        </div>
        <div class="service-images">
          <img src={salon} alt="salon" />
          <p>Salon</p>
        </div>
        <div class="service-images">
          <img src={applianceRepair} alt="carpenter" />
          <p>Appliance repair</p>
        </div>
        <div class="service-images">
          <img src={paint} alt="cleaning" />
          <p>Paint</p>
        </div>
        <div class="service-images">
          <img src={spa} alt="plumbing" />
          <p>Spa</p>
        </div>
        <div class="service-images">
          <img src={electrical} alt="cleaning" />
          <p>Electrical</p>
        </div>
        <div class="service-images">
          <img src={pest} alt="plumbing" />
          <p>Pest</p>
        </div>
      </section>
      </div>
      </div>
    </>
  );
}

export default ServiceList;

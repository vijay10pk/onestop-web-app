import React from "react";
import ac from "../images/ac.png";
import cleaning from "../images/cleaning.png";
import plumbing from "../images/plumbing.png";
import salon from "../images/salon.png";
import applianceRepair from "../images/appliance-repair.png";
import electrical from "../images/electrical.png";
import spa from "../images/spa.png";
import paint from "../images/paint.png";
import axios from "axios";
import SubCategory from "./SubCategory";
import { useEffect } from "react";
import { useContext } from "react";
import { ServicesContext } from "../Context/ServiceContext";
import SearchBar from "./SearchBar";

const url = 'http://13.58.197.46/category/'

function ServiceList() {

  const {data,addData,delData} = useContext(ServicesContext)

  const handleClick = (value) => {
    axios.get(url+value)
    .then(response => {
      addData(response.data[0].sub_category)
    }).catch(error => {
      console.log(error.response.data)
    })
  }

 useEffect(()=>{
    delData()
 },[])

 if(data){
    return <SubCategory></SubCategory>
  }
    return (
      <>
        <div className="authentication-container">
          <div className="bgimg">
            <SearchBar></SearchBar>
            <section id="homepage">
              <div className="service-images">
                <button onClick={()=> handleClick("AC")} name="AC" className="imgBtn">
                  <img src={ac} alt="ac" />
                  <p>Air Conditioning</p>
                </button>
              </div>
              <div className="service-images">
                <button onClick={()=> handleClick("CleaningPestControl")} name="CleaningPestControl" className="imgBtn">
                  <img src={cleaning} alt="cleaning" />
                  <p>Cleaning & Pest Control</p>
                </button>
              </div>
              <div className="service-images">
                <button onClick={()=> handleClick("PlumbersCarpenters")} name="PlumbersCarpenters" className="imgBtn">
                  <img src={plumbing} alt="plumbing" />
                  <p>Plumbing & Carpentry</p>
                </button>
              </div>
              <div className="service-images">
                <button onClick={()=> handleClick("Salon")} name="Salon" className="imgBtn">
                  <img src={salon} alt="salon" />
                  <p>Salon</p>
                </button>
              </div>
              <div className="service-images">
                <button onClick={()=> handleClick("Appliance")} name="Appliance" className="imgBtn">
                  <img src={applianceRepair} alt="carpenter" />
                  <p>Appliance repair</p>
                </button>
              </div>
              <div className="service-images">
                <button onClick={()=> handleClick("Painting")} name="Painting" className="imgBtn">
                  <img src={paint} alt="cleaning" />
                  <p>Paint</p>
                </button>
              </div>
              <div className="service-images">
                <button onClick={()=> handleClick("Spa")} name="Spa" className="imgBtn">
                  <img src={spa} alt="plumbing" />
                  <p>Spa</p>
                </button>
              </div>
              <div className="service-images">
                <button onClick={()=> handleClick("electrician")} name="electrician" className="imgBtn">
                  <img src={electrical} alt="cleaning" />
                  <p>Electrical</p>
                </button>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
  

export default ServiceList;
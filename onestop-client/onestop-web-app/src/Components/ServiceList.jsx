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
import { useState, createContext } from "react";
import SubCategory from "./SubCategory";
import { Link } from "react-router-dom";


const url = 'http://localhost:5000/category/'
const searchUrl = 'http://localhost:5000/search/'

function ServiceList() {

  const [data,setData] = useState('');
  const [search,setSearch] = useState('');

  const clear =()=>{
    setData('')
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    axios.get(url+'ac')
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })
  }

  const handleClick = (value) => {
    setData('')
    axios.get(url+value)
    .then(response => {
      setData(response.data[0].sub_category)
    }).catch(error => {
      console.log(error.response.data)
    })
  }

  if(data!==''){
    return <SubCategory data={data} clear={clear}></SubCategory>
  }else{
    return (
      <>
        <div className="authentication-container">
          <div className="bgimg">
            <div>
              <input
                className="searchService"
                type="search"
                value={search}
                onChange={handleSearch}
                placeholder="Search for services"
              ></input>
            </div>
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
  }

export default ServiceList;
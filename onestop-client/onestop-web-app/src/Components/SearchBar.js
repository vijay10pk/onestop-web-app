import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import ServiceDetail from './ServiceDetail';
import { ServicesContext } from '../Context/ServiceContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const searchUrl = 'http://localhost:5000/search/'

const SearchBar = () => {

    const [search,setSearch] = useState('');
    const {services,addServices} = useContext(ServicesContext)
    const navigate = useNavigate();
    console.log(services)

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(searchUrl+search)
        .then(response => {
            addServices(response.data)
            navigate('/detail',{replace:true})
        }).catch(error => {
          console.log(error.response)
        })
    }

    return (
        <div>
            <form className='searchService' onSubmit={handleSearch}>
              <input className='' onChange={(e)=> setSearch(e.target.value)} name='text' value={search} type="text" placeholder='Search Services' />
              <button type='submit'>Search</button>  
            </form>
        </div>
    )
}

export default SearchBar
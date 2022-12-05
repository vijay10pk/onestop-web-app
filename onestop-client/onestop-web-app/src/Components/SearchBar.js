import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ServicesContext } from '../Context/ServiceContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const searchUrl = 'http://13.58.197.46/search/'

const SearchBar = () => {

    const [search,setSearch] = useState('');
    const {addServices} = useContext(ServicesContext)
    const navigate = useNavigate();

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
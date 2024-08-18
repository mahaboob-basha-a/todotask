import React from 'react';
import { CiSearch } from "react-icons/ci";
import './index.css';

const Header = ({searchLabel,setSearchLabel,searchTodoItem}) => {
  const searchValue = e =>{
    setSearchLabel(e.target.value)
    searchTodoItem(e.target.value)
  }
  return (
    <div className='header-container'>
        <span>T</span>
        <div className="filter-container">
            <input value={searchLabel} onChange={searchValue} type="search" placeholder="Search by label" />
            <CiSearch />
        </div>
    </div>
  )
}

export default Header;
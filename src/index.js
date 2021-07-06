import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
import Search from './Search';


const sch = document.getElementById('id');
console.log("working");

const ncard = (val) => {
  return(
    <Cards 
      title = {val.title}
      imgsrc = {val.imgsrc}
      cat = {val.cat}
      linksrc = {val.linksrc}
    />
  )
}

ReactDOM.render(
  <>
    <h1 className="heading_style"> List of Top 5 Netflix series in 2021 </h1>
    <Search />

    {Sdata.map(ncard)}

  </>,
  document.getElementById('root')
)
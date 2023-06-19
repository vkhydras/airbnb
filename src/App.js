import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';


function App() {
  
const card = Data.map(item =>{
  return (
    <Card
        key = {item.id}
        {...item}
      /> 
  )
})
return(
  <>
    <Navbar />
    <Hero />
    <div className='cards' >
      {card}
    </div>  
  </>
)
}

export default App;
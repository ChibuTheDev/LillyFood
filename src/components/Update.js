import React from 'react'

const Update = () => {
  return (
    <section className='updates'>
        <section className='first-section'>
        <h2>Get notified when we update!</h2> 
        <p> Get notified when we add new items to our specials menu,<br/> update our price list of have promos! </p>
        
        </section>
        <section className='second-section'>
         <input placeholder='Enter your Email'/> <button className='btn' style={{fontWeight: '500', height:'51px'}}> Get Notified</button>
        </section>
    </section>
  )
}

export default Update
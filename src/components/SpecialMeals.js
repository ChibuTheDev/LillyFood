import React from 'react'
import stirfry from '../assets/spag.png'
import meatballs from '../assets/meatballs.png'
import burger from '../assets/burger.png'
import Food from './Food.js'
const meals = [
  {id:1,
   title: 'Stir Fry Pasta',
   img: stirfry,
   desc: 'A delicious ,eal of stirfry pasta'
   },
   {
    id:2,
    title:'Meat Balls',
    img: meatballs,
    desc: `A delicious Meat ball meal`
   },
   {
    id: 3,
    title: 'Burger',
    img:burger,
    desc: 'A delicious Burger meal'
   }

]


const SpecialMeals = () => {
  return (
    
    <section className='special-meal'>
     <div className='special-meal-header'>
     <h2>Special Meals of the day!</h2>
     <p> Check our sepecials of the day and get discounts on all our meal<br/> and swift delivery to what ever location within Ilorin.</p>
     </div>
      <div className='special-meal-img'>

      {meals.map((food) => (
        <Food food={food} key={food.id}  /> 
      ))}
      
      </div>
      

      
    </section>
  )
}

export default SpecialMeals




import React from 'react'
import himgone from "../assets/Pepper-Soup.jpg";
import himgtwo from "../assets/efo-riro.jpg";
import himgthree from "../assets/chicken-pepper-soup.jpg";
import himgfour from "../assets/Egusi-Pepper-Soup.jpg";
import himgfive from "../assets/Egusi-Soup.jpg";
import himgsix from "../assets/Gbegiri-Soup.jpg";
import "../styles/home.css"
import Navigation from '../components/Navigation';




const Home = () => {
  return (
  
    <div className="home">
        <Navigation className='navigation'/>
      <figure className='tsfig'>
        <img src={himgone} className="himgone" alt="Pepper-Soup" />
        <img src={himgtwo} className="himgtwo" alt="Efo Riro" />
        <img src={himgthree} className="himgthree" alt="chicken pepper soup" />
      </figure>
        <h1 className='create'> Stress free delicacies with the best of ingredients</h1>
        <p className='develop'>
            developed the concept of exclusivity, a Soupwiz features delicious soups and sauces, with natural ingredients, beautiful aroma, plenty of protein and orisirisi, that are cooked by the best chefs available in a very neat and hygenic enviroment. The Soups enchant with thier aroma and their delicious taste. faithful to the coking methods of each period, with a touch of the present.
        </p>
        <button className='read'>READ ABOUT US</button>
      <figure className='lsfig'>
        <img src={himgfour} className="himgfour" alt="egusi pepper soup" />
        <img src={himgfive} className="himgfive" alt="egusi soup" />
        <img src={himgsix} className="himgsix" alt="Gbegiri soup" />
      </figure>
         
    </div>
  )
}

export default Home
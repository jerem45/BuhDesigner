import React from 'react'
import  {FooterCard } from './Card'
import  {FooterComment } from './Card'
import mario from './images/mario.jpg'
import artiste from './images/artiste.jpg'
import profil from "./images/profil.jpg"


export default function Footer() {
  return (
    <div className='section__container_1'>
      <div className="container__footer__img">
       <FooterCard img={artiste}/>
       <FooterCard img={mario} description='Being Splited'/>
      </div>
      
       <FooterComment profil={profil}/>
    </div>
  )
}

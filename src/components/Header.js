import React from 'react'
import {Card} from './Card'
import {CardCase} from './Card'
import {CardNav} from './Card'
import {CardImg} from './Card'
import firstImg from'./images/girls.png'
import secondImg from'./images/girls2.png'

export default function Header(props) {
  return (
    <div className='section__container'>
     <Card />
     <div className='header___side'>
        <CardImg img={firstImg} />
        <CardNav />
        <CardCase />
        <CardImg img={secondImg}/>
        
     </div>
     
    </div>
  )
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons'
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons'
import { faShieldBlank } from '@fortawesome/free-solid-svg-icons'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
const logo = faAward
const arrow = faArrowLeftRotate

const data = [
{bigCard : {
     titre : "BUH  ",
     text : "3d illustrations for digital designers and agencies ! For you!",
     number : "4.98",
     review : "Best Reviews"
    } 
},
{cards_0 : {
    text_0 : "recent collaborations ",
    text_1 : "cbp",
    title : "More Cases",
   } 
},

{cardNav : {
    link_1 : "About ",
    link_2 : "Solutions",
    link_3 : "Portfolio",
    link_4 : "Blog",
    title : "HIRE US",}
   },
 {cards_comment : {
    date : "01/02 ",
    comment : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
    text_0 : "live ",
    text_1 : "preview",
   } 
},
   

]
    

    

console.log(data);
export  function  Card() {
  return (
    <div className='cards'>
        <div className='cards_header'>
            <FontAwesomeIcon icon={logo} className="headerLogo"/>
            <div className='cards_reviews'>
                  <span>{data[0].bigCard.number}</span>
                  <button>{data[0].bigCard.review}</button>
            </div>
        </div>
        <div className='Cards_middle'>
            <div className='flex_row'>
                 <h1>{data[0].bigCard.titre}  
                 </h1>
                 <div className='rotate'>!</div>
            </div>
           
          
            <div className='separation'></div>
            <div className='cards__footer'>
                 <h2>{data[0].bigCard.text}</h2>
                 <FontAwesomeIcon icon={arrow} className="arrow" />
            </div>
        </div>
    </div>
  )
}

export function CardImg (props){
    return (
        <div className='cards__img'>
            <img src={props.img}alt=""></img>
        </div>
    )
}

export function CardNav (){
    return (
        <div className='cards__nav'>
        <ul>
            <li>{data[2].cardNav.link_1}</li>
            <li>{data[2].cardNav.link_2}</li>
            <li>{data[2].cardNav.link_3}</li>
            <li>{data[2].cardNav.link_4}</li>
        </ul>
        <span>{data[2].cardNav.title}</span>
        </div>
    )
}

export function CardCase(){
    return (
        <div className='cards__case'>
            <div className='container'>
            <FontAwesomeIcon icon={faArrowsToDot} className="logoCase"/>
            <p>{data[1].cards_0.text_0}</p>
            </div>

            <div className='container__enterprise'>
            <FontAwesomeIcon icon={faShieldBlank} className="logoEnterprise"/>
            <p>{data[1].cards_0.text_1}</p>
            </div>
            <p className='title'>{data[1].cards_0.title}</p>
        </div>
    )
}

// footer card

export function FooterCard (props){
    return (
        <div className='footer__cards__img'>
            <img src={props.img}alt=""></img>
            <p>{props.description}</p>
        </div>
    )
}
export function FooterComment (props){
    return (
        <div className="comment__container">
            <div className="comment__header">
                <div className="container_0">
                    <div className='comment__date'>{data[3].cards_comment.date}</div>
                    <img src={props.profil}alt="" className="comment__profil"></img>
                </div>

                <div className="container_1">
                    <div className='container__col'>
                        <p className='comment__text'>{data[3].cards_comment.text_0}</p>
                        <p className='comment__text'>{data[3].cards_comment.text_1}</p>
                    </div>
                    <div className='container__logo'>
                          <FontAwesomeIcon icon={faArrowsRotate} className="logoComment"/>
                   </div>
                </div>
            </div>

            <div className='comment__description'>
                <p>{data[3].cards_comment.comment}</p>
            </div>
        </div>
    )
}
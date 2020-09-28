import React from 'react'
import Card from './Card'

function list(props){
const cards = props.cards.map(item => <Card title = {item.title} content = {item.content}/>)
 

    

    return <section class="List">

        <header class="List-header">
        <h2>{props.header}</h2>
        </header>
        
         <div className="List-cards">
        {cards.join()}
      </div>

      </section>
}


export default List;
<<<<<<< HEAD
import React from 'react';
import Card from './Card.js';

function List(props) {
    const cards = props.cards.map(card => <Card title={card.title} content={card.content}/> );
    return (
        <section className="List">
          <header className="List-header">
            <h2>{props.header}</h2>
          </header>
          <div className="List-cards">
            {cards.join("")}
          </div>
        </section>
    );
}

=======
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


>>>>>>> d65529f9795da55e58b6dbf099fb3505410df929
export default List;
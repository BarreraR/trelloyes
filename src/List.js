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
            {cards}
          </div>
        </section>
    );
}

export default List;
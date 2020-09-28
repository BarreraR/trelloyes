import React from 'react';
import List from './List';
import Card from './Card';

function myArray(arr, obj){
  let cards = [];
  for(let i=0; i<arr.length; i++ ){
    for(let [key, value] in Object.entries(obj)){
      if(arr[i] === key){
        cards.push(value);
      }
    }
  }
  return cards;
}

function App(props) {
  const arr = props.store.lists.map(list => <List key={list.id} header={list.header} cards={myArray(list.cardIds, props.store.allCards)} />)


  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {arr.join("")}
      </div>
    </main>
  );
}

export default App;
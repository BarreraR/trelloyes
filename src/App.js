import React from 'react';
import List from './List';

function myArray(arr, obj){
  let cards = [];
  for(let i=0; i<arr.length; i++ ){
    for(let key in obj){
      if(arr[i] === key){
        cards.push(obj[arr[i]]);
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
        {arr}
      </div>
    </main>
  );
}

export default App;
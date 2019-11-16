import React, {Component} from 'react';
import './App.css';
import Card from "./card/Card";
import Winner from './Winner';
import nanoid from 'nanoid';
import CardDeck from "./CardDeck";

class App extends Component{
    state = {
        cards : [],
        result : '',
    };
    giveCards = () => {
        let newCardDeck = new CardDeck();
        let cards = newCardDeck.getCards(5);
        const winner = new Winner(cards);
        const result = winner.getYourHand();
        this.setState({cards, result});
    };
    render () {
        return (
            <div className="App playingCards faceImages cards-block">
                <div className="btn"><button onClick={this.giveCards}>Give Cards</button></div>
                <ul className="table">
                    {this.state.cards.map((card,index) => {
                        return (
                            <li key={index}>
                                <Card suit={card.suit} rank={card.rank}/>
                            </li>
                        )
                    })}
                </ul>
                <div>{this.state.result}</div>
            </div>
        )
    }
}

export default App;

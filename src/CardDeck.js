//ПО ПОВОДУ НАНОЙДА И УНИКАЛЬНЫХ КЛЮЧЕЙ ТО ДИМА ГОВОРИЛ , ЧТО В СЛУЧАЯХ ГДЕ ЭЛЕМЕНТЫ НЕ УДАЛЯЮТСЯ МОЖНО ОСТАВЛЯТЬ ИНДЕКСЫ
//ТАК КАК В ТЗ СКАЗАНО ЧТО КОЛОДА ДОЛЖНА ГЕНЕРИРОВАТЬСЯ В КОНСТРУКТОРЕ , А НЕ В МЕТОДЕ ТО ПОЛУЧАЕИСЯ , ЧТО НАНОИД НЕ БУДЕТ ОБНОВЛЯТЬСЯ
// ПО НАЧАЛУ У МЕНЯ БЫЛ НАНОИД , НО ИЗ ЗА ТЗ ПРИШЛОСЬ ПЕРЕДЕЛАТЬ!!!

class CardDeck {
    constructor(){
        this.suits = ['D','H','C','S'];
        this.ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        this.deck = [];
        for (let i = 0; i < this.suits.length; i++){
            for (let j = 0; j <this.ranks.length; j++){
                let card = {suit : this.suits[i], rank : this.ranks[j]};
                this.deck.push(card);
            }
        }
    }
    getCard(){
        let random = Math.floor(Math.random() * this.deck.length);
        let [randomCard] = this.deck.splice(random,1);
        return randomCard;
    }
    getCards(amountOfCard){
        let cards = [];
        for (let k = 0; k < amountOfCard; k++){
            let randomCard = this.getCard();
            cards.push(randomCard);
        }
        return cards;
    }
}

export default CardDeck;
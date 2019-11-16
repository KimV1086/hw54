//========ТЕСТЫ ПО ВСЕМ ВЫЙГРЫШНЫМ КОМБИНАЦИЯМ В ФАЙЛЕ WINNER.TEST.JS============

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

class Winner {
    constructor(cards){
        this.cards = cards;
        this.suits = this.cards.map(card => card.suit);
        this.ranks = this.cards.map(card => card.rank);
        this.isFlash = this.suits.every(suit => suit === this.suits[0]);
    }
    isRoyalFlash() {
        return this.isFlash &&
            this.ranks.includes('10')&&
            this.ranks.includes('J')&&
            this.ranks.includes('Q')&&
            this.ranks.includes('K')&&
            this.ranks.includes('A')
    }
    isStraightFlush() {
        return this.isFlash &&
            this.ranks.includes('9')&&
            this.ranks.includes('10')&&
            this.ranks.includes('J')&&
            this.ranks.includes('Q')&&
            this.ranks.includes('K') ||
            this.isFlash &&
            this.ranks.includes('8')&&
            this.ranks.includes('9')&&
            this.ranks.includes('10')&&
            this.ranks.includes('j')&&
            this.ranks.includes('Q') ||
            this.isFlash &&
            this.ranks.includes('7')&&
            this.ranks.includes('8')&&
            this.ranks.includes('9')&&
            this.ranks.includes('10')&&
            this.ranks.includes('j')||
            this.isFlash &&
            this.ranks.includes('6')&&
            this.ranks.includes('7')&&
            this.ranks.includes('8')&&
            this.ranks.includes('9')&&
            this.ranks.includes('10')||
            this.isFlash &&
            this.ranks.includes('5')||
            this.ranks.includes('6')&&
            this.ranks.includes('7')&&
            this.ranks.includes('8')&&
            this.ranks.includes('9') ||
            this.isFlash &&
            this.ranks.includes('4')&&
            this.ranks.includes('5')&&
            this.ranks.includes('6')&&
            this.ranks.includes('7')&&
            this.ranks.includes('8') ||
            this.isFlash &&
            this.ranks.includes('3')&&
            this.ranks.includes('4')&&
            this.ranks.includes('5')&&
            this.ranks.includes('6')&&
            this.ranks.includes('7')||
            this.isFlash &&
            this.ranks.includes('2')&&
            this.ranks.includes('3')&&
            this.ranks.includes('4')&&
            this.ranks.includes('5')&&
            this.ranks.includes('6');
    }
    fourOfAKind() {
        const ranksNumber = {};
        this.ranks.forEach(rank =>{
            if(!ranksNumber[rank]){
                ranksNumber[rank] = 1;
            } else{
                ranksNumber[rank]++;
            }
        });
        return Object.values(ranksNumber).includes(4);
    }
    fullHouse(){
        const ranksNumber = {};
        this.ranks.forEach(rank =>{
            if(!ranksNumber[rank]){
                ranksNumber[rank] = 1;
            } else{
                ranksNumber[rank]++;
            }
        });
        const three = Object.values(ranksNumber).includes(2);
        const two = Object.values(ranksNumber).includes(3);
        if(three && two){
            return true;
        }
    }
    isStraight() {
        return (this.ranks.includes('9')&&
            this.ranks.includes('10')&&
            this.ranks.includes('J')&&
            this.ranks.includes('Q')&&
            this.ranks.includes('K'))||
            (this.ranks.includes('8')&&
            this.ranks.includes('9')&&
            this.ranks.includes('10')&&
            this.ranks.includes('j')&&
            this.ranks.includes('Q')) ||
            (this.ranks.includes('7')&&
            this.ranks.includes('8')&&
            this.ranks.includes('9')&&
            this.ranks.includes('10')&&
            this.ranks.includes('j'))||
            (this.ranks.includes('6')&&
            this.ranks.includes('7')&&
            this.ranks.includes('8')&&
            this.ranks.includes('9')&&
            this.ranks.includes('10'))||
            (this.ranks.includes('5')&&
            this.ranks.includes('6')&&
            this.ranks.includes('7')&&
            this.ranks.includes('8')&&
            this.ranks.includes('9')) ||
            (this.ranks.includes('4')&&
            this.ranks.includes('5')&&
            this.ranks.includes('6')&&
            this.ranks.includes('7')&&
            this.ranks.includes('8')) ||
            (this.ranks.includes('3')&&
            this.ranks.includes('4')&&
            this.ranks.includes('5')&&
            this.ranks.includes('6')&&
            this.ranks.includes('7'))||
            (this.ranks.includes('2')&&
            this.ranks.includes('3')&&
            this.ranks.includes('4')&&
            this.ranks.includes('5')&&
            this.ranks.includes('6'));
    }
    threeOfAKind(){
        const ranksNumber = {};
        this.ranks.forEach(rank =>{
            if(!ranksNumber[rank]){
                ranksNumber[rank] = 1;
            } else{
                ranksNumber[rank]++;
            }
        });
        return Object.values(ranksNumber).includes(3);
    }
    isTwoPairs() {
        let deck = this.ranks.filter(onlyUnique);
        if(deck.length === 3){
            return true;
        }
    }
    isPair() {
        const ranksNumber = {};
        this.ranks.forEach(rank =>{
            if(!ranksNumber[rank]){
                ranksNumber[rank] = 1;
            } else{
                ranksNumber[rank]++;
            }
        });
        return Object.values(ranksNumber).includes(2);
    }
    getYourHand () {
        if(this.isRoyalFlash()){
            return 'Royal Flash';
        } else if(this.isStraightFlush()){
            return 'Straight Flush'
        } else if(this.fourOfAKind()){
            return 'Four of A Kind';
        } else  if (this.fullHouse()){
            return 'Full House';
        } else if(this.isFlash){
            return  'Flash';
        } else if(this.isStraight()){
            return 'Straight';
        } else if(this.threeOfAKind()){
            return 'Three of A Kind';
        } else if(this.isTwoPairs()){
            return 'Two Pairs';
        } else if (this.isPair()){
            return 'Pairs';
        }
        else {
            return 'Nothing';
        }
    }
}
export default Winner;
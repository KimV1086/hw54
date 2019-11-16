import Winner from "./Winner";
const RoyalFlush = [
    {suit : 'H', rank : '10'},
    {suit : 'H', rank : 'J'},
    {suit : 'H', rank : 'Q'},
    {suit : 'H', rank : 'A'},
    {suit : 'H', rank : 'K'},
];
const StraightFlush = [
    {suit : 'H', rank : '7'},
    {suit : 'H', rank : '8'},
    {suit : 'H', rank : '9'},
    {suit : 'H', rank : '10'},
    {suit : 'H', rank : 'j'},
];
const FourOfKind = [
    {suit : 'S', rank : '10'},
    {suit : 'H', rank : '10'},
    {suit : 'S', rank : 'Q'},
    {suit : 'H', rank : '10'},
    {suit : 'C', rank : '10'},
];
const FullHouse = [
    {suit : 'S', rank : '10'},
    {suit : 'H', rank : '10'},
    {suit : 'S', rank : '10'},
    {suit : 'H', rank : 'K'},
    {suit : 'C', rank : 'K'},
];
const Flush = [
    {suit : 'H', rank : '10'},
    {suit : 'H', rank : '6'},
    {suit : 'H', rank : 'Q'},
    {suit : 'H', rank : '7'},
    {suit : 'H', rank : 'K'},
];

const Straight = [
    {suit : 'C', rank : '7'},
    {suit : 'H', rank : '8'},
    {suit : 'S', rank : '9'},
    {suit : 'H', rank : '10'},
    {suit : 'D', rank : 'j'},
];
const ThreeOFAKind = [
    {suit : 'S', rank : '10'},
    {suit : 'H', rank : '10'},
    {suit : 'S', rank : '10'},
    {suit : 'H', rank : 'J'},
    {suit : 'C', rank : 'K'},
];

const TwoPairs = [
    {suit : 'S', rank : '10'},
    {suit : 'H', rank : '10'},
    {suit : 'S', rank : 'K'},
    {suit : 'H', rank : 'J'},
    {suit : 'C', rank : 'K'},
];
const Pairs = [
    {suit : 'S', rank : '10'},
    {suit : 'H', rank : '10'},
    {suit : 'S', rank : 'K'},
    {suit : 'H', rank : 'J'},
    {suit : 'C', rank : 'Q'},
];

it('should determine Royal Flush', function () {
    const hand = new Winner(RoyalFlush);
    const result = hand.getYourHand();
    expect(result).toEqual('Royal Flash');
});
it('should determine Straight Flush', function () {
    const hand = new Winner(StraightFlush);
    const result = hand.getYourHand();
    expect(result).toEqual('Straight Flush');
});
it('should determine Four of A Kind', function () {
    const hand = new Winner(FourOfKind);
    const result = hand.getYourHand();
    expect(result).toEqual('Four of A Kind');
});
it('should determine full house', function () {
    const hand = new Winner(FullHouse);
    const result = hand.getYourHand();
    expect(result).toEqual('Full House');
});
it('should determine Flash', function () {
    const hand = new Winner(Flush);
    const result = hand.getYourHand();
    expect(result).toEqual('Flash');
});
it('should determine Straight', function () {
    const hand = new Winner(Straight);
    const result = hand.getYourHand();
    expect(result).toEqual('Straight');
});
it('should determine Three of A Kind', function () {
    const hand = new Winner(ThreeOFAKind);
    const result = hand.getYourHand();
    expect(result).toEqual('Three of A Kind');
});
it('should determine Two Pairs', function () {
    const hand = new Winner(TwoPairs);
    const result = hand.getYourHand();
    expect(result).toEqual('Two Pairs');
});
it('should determine Pairs', function () {
    const hand = new Winner(Pairs);
    const result = hand.getYourHand();
    expect(result).toEqual('Pairs');
});
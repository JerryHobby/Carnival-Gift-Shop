
var gifts = []
gifts[1] = { name: "Teddy Bear", price: 10, id: 1,};
gifts[2] = { name: "Big Red Ball", price: 5, id: 2,};
gifts[3] = { name: "Huge Bear", price: 50, id: 3,};
gifts[4] = { name: "Candy", price: 8, id: 4,};
gifts[5] = { name: "Stuffed Tiger", price: 15, id: 5,};
gifts[6] = { name: "Stuffed Dragon", price: 30, id: 6,};
gifts[7] = { name: "Skateboard", price: 100, id: 7,};
gifts[8] = { name: "Toy Car", price: 25, id: 8,};
gifts[9] = { name: "Basketball", price: 20, id: 9,};
gifts[10] = { name: "Scary Mask", price: 75, id: 10,};

var msgs = []
msgs['welcome'] = 'WELCOME TO THE CARNIVAL GIFT SHOP!'
msgs['thankyou'] = 'Hello friend! Thank you for visiting the carnival!'
msgs['giftlist'] = 'Here\'s the list of gifts:'

////////////////////////////////////////////////////////


console.log(msgs['welcome'])
console.log(msgs['thankyou'])
console.log(msgs['giftlist'])
console.log()


for(item in gifts) {
    console.log(`${item}- ${gifts[item].name}, Cost: ${gifts[item].price} tickets`)
}
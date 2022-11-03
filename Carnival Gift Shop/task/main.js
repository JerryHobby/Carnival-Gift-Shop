const input = require('sync-input');

const gifts = [
    {name: "Teddy Bear", price: 10, id: 1, quantity: 1,},
    {name: "Big Red Ball", price: 5, id: 2, quantity: 1,},
    {name: "Huge Bear", price: 50, id: 3, quantity: 1},
    {name: "Candy", price: 8, id: 4, quantity: 1},
    {name: "Stuffed Tiger", price: 15, id: 5, quantity: 1},
    {name: "Stuffed Dragon", price: 30, id: 6, quantity: 1},
    {name: "Skateboard", price: 100, id: 7, quantity: 1},
    {name: "Toy Car", price: 25, id: 8, quantity: 1},
    {name: "Basketball", price: 20, id: 9, quantity: 1},
    {name: "Scary Mask", price: 75, id: 10, quantity: 1},
]

const EnglishMsg = {
    welcome: 'WELCOME TO THE CARNIVAL GIFT SHOP!',
    thankYou: 'Hello friend! Thank you for visiting the carnival!',
    giftList: 'Here\'s the list of gifts:',
    mainMenu: 'What do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop ',
    niceDay: "Have a nice day!",
    giftPrompt: "Enter the number of the gift you want to get: ",
    giftGiven: "Here you go, one ",
    ticketsPrompt: "Enter the ticket amount: ",
    ticketsBalance: "Total tickets: ",
    errorOutOfRange: "Please enter a valid number between 0 and 1000.",
    errorNoGifts: "Wow! There are no gifts to buy.",
    errorBadInput: "Please enter a valid number!",
    errorNoGift: "There is no gift with that number!",
    errorNoTickets: "You don't have enough tickets to buy this gift.",



}

const msg = EnglishMsg

const user = {
    tickets: 0,
}

////////////////////////////////////////////////////////
main()
////////////////////////////////////////////////////////

function main() {
    console.log(msg.welcome)
    console.log(msg.thankYou)
    show_gifts()
    menu()

    console.log(msg.niceDay)
}

function menu() {
    let loop = true

    while(loop) {
        console.log()
        let choice = input(msg.mainMenu)

        if(isNaN(parseInt(choice))) {
            console.log(msg.errorBadInput)
            continue
        }
        if(choice < 1 || choice > 5){
            console.log(msg.errorBadInput)
            continue
        }

        switch (choice) {
            case "1": // buy gift
                buy_gift()
                break;
            case "2": // add tickets
                add_tickets()
                break;
            case "3": // check tickets
                check_tickets()
                break;
            case "4": // show gifts
                show_gifts()
                break;
            case "5": // quit
                loop = false
                break
        }
    }
}

function show_gifts() {
    console.log(msg.giftList)
    console.log()

    // do we have any inventory for sale?
    let stock = gifts.filter(x => x.quantity > 0)
    if (stock.length === 0) {
        console.log(msg.errorNoGifts)
    }



    for(let item in stock) {
        console.log(`${stock[item].id}- ${stock[item].name}, Cost: ${stock[item].price} tickets`)
    }
}


function buy_gift() {

    // do we have any inventory for sale?
    let stock = gifts.filter(x => x.quantity > 0)
    if (stock.length === 0) {
        console.log(msg.errorNoGifts)
        return
    }

    // get choice
    let choice = input(msg.giftPrompt)

    if(isNaN(parseInt(choice))) {
        console.log(msg.errorBadInput)
        return
    }

    // find prize and price
     stock = stock.filter(x => x.id === parseInt(choice))
    if(stock.length < 1) {
        console.log(msg.errorNoGift)
        return
    }

    let gift = stock[0].name
    let price = stock[0].price

    if(user.tickets < price) {
        console.log(msg.errorNoTickets)
        return
    }
    console.log(msg.giftGiven + gift + "!")

    stock[0].quantity -= 1
    user.tickets -= price

    console.log(msg.ticketsBalance + user.tickets)
}

function add_tickets() {
    let choice = input(msg.ticketsPrompt)

    if(isNaN(parseInt(choice))) {
        //console.log()
        console.log(msg.errorBadInput)
        //console.log()
        return add_tickets()
    }

    if(choice < 0 || choice > 1000) {
        console.log(msg.errorOutOfRange)
        //console.log()
        return add_tickets()
    }

    user.tickets += parseInt(choice)
    console.log(msg.ticketsBalance + user.tickets)
}

function check_tickets() {
    console.log(msg.ticketsBalance + user.tickets)
}

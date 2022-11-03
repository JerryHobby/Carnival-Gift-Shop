const input = require('sync-input');

const gifts = [
    {name: "Teddy Bear", price: 10, id: 1,},
    {name: "Big Red Ball", price: 5, id: 2,},
    {name: "Huge Bear", price: 50, id: 3,},
    {name: "Candy", price: 8, id: 4,},
    {name: "Stuffed Tiger", price: 15, id: 5,},
    {name: "Stuffed Dragon", price: 30, id: 6,},
    {name: "Skateboard", price: 100, id: 7,},
    {name: "Toy Car", price: 25, id: 8,},
    {name: "Basketball", price: 20, id: 9,},
    {name: "Scary Mask", price: 75, id: 10,},
]

const EnglishMsg = {
    welcome: 'WELCOME TO THE CARNIVAL GIFT SHOP!',
    thankYou: 'Hello friend! Thank you for visiting the carnival!',
    giftList: 'Here\'s the list of gifts:',
    mainMenu: 'What do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts ',
    niceDay: "Have a nice day!",
    giftPrompt: "Enter the number of the gift you want to get: ",
    giftGiven: "Here you go, one ",
    ticketsPrompt: "Enter the ticket amount: ",
    ticketsBalance: "Total tickets: ",
}

const msg = EnglishMsg

const user = {
    tickets: 100,
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
        loop = false

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
            case "": // quit
                loop = false
                break
        }
    }
}

function show_gifts() {
    console.log(msg.giftList)
    console.log()

    for(let item in gifts) {
        console.log(`${gifts[item].id}- ${gifts[item].name}, Cost: ${gifts[item].price} tickets`)
    }
}


function buy_gift() {
    let choice = input(msg.giftPrompt)

    // find prize and price

    let item = gifts.findIndex(x => x.id === parseInt(choice));

    if (item === -1) {
        return
    }
    let gift = gifts[item].name
    let price = gifts[item].price

    console.log(msg.giftGiven + gift + "!")
    user.tickets -= price

    console.log(msg.ticketsBalance + user.tickets)
}

function add_tickets() {
    let choice = input(msg.ticketsPrompt)
    user.tickets += parseInt(choice)
    console.log(msg.ticketsBalance + user.tickets)
}

function check_tickets() {
    console.log(msg.ticketsBalance + user.tickets)
}


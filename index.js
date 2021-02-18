// Code your solutions in this file

function writeCards(stringNames, eventName) {
    let messages = [];
    for (let i = 0; i < stringNames.length; i++) {
        messages.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages
}

function countDown(number) {
    while (number > -1) {
        console.log(number)
        number --
    }
}
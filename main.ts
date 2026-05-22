let random_number = 0
input.onButtonPressed(Button.A, function () {
    random_number = randint(1, 6)
    if (random_number == 1) {
        basic.showString("Cricket")
    } else if (random_number == 2) {
        basic.showString("Fielding ")
    } else if (random_number == 3) {
        basic.showString("Chess")
    } else if (random_number == 4) {
        basic.showString("Sleep")
    } else if (random_number == 5) {
        basic.showString("Movie")
    } else {
        basic.showString("Abacus")
    }
})

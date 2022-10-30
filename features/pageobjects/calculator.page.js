class CalculatorPage {

    get buttonClear() {
        return $('id=com.darkempire78.opencalculator:id/clearButton')
    }

    get buttonZero() {
        return $('id=com.darkempire78.opencalculator:id/zeroButton')
    }

    get buttonOne() {
        return $('id=com.darkempire78.opencalculator:id/oneButton')
    }

    get buttonTwo() {
        return $('id=com.darkempire78.opencalculator:id/twoButton')
    }

    get buttonThree() {
        return $('id=com.darkempire78.opencalculator:id/threeButton')
    }

    get buttonFour() {
        return $('id=com.darkempire78.opencalculator:id/fourButton')
    }

    get buttonFive() {
        return $('id=com.darkempire78.opencalculator:id/fiveButton')
    }

    get buttonSix() {
        return $('id=com.darkempire78.opencalculator:id/sixButton')
    }

    get buttonSeven() {
        return $('id=com.darkempire78.opencalculator:id/sevenButton')
    }

    get buttonEight() {
        return $('id=com.darkempire78.opencalculator:id/eightButton')
    }

    get buttonNine() {
        return $('id=com.darkempire78.opencalculator:id/nineButton')
    }

    get buttonAdd() {
        return $('id=com.darkempire78.opencalculator:id/addButton')
    }

    get buttonEquals() {
        return $('id=com.darkempire78.opencalculator:id/equalsButton')
    }

    get textInput() {
        return $('id=com.darkempire78.opencalculator:id/input')
    }

    numberButton(number) {
        switch(number) {
            case '0':
                return this.buttonZero
            case '1':
                return this.buttonOne
            case '2':
                return this.buttonTwo
            case '3':
                return this.buttonThree
            case '4':
                return this.buttonFour
            case '5':
                return this.buttonFive
            case '6':
                return this.buttonSix
            case '7':
                return this.buttonSeven
            case '8':
                return this.buttonEight
            case '9':
                return this.buttonNine
        }
        return $('')
    }
}

export default new CalculatorPage

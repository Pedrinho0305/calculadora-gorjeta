let bill = 0
let tipPerecentage = 0
let numberOfPeople = 0


let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()

}

let numberOfPeopleInput = document.querySelector("people")
numberOfPeopleInput.addEventListener("input", )

function receiveNumberOfPeople(){
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate()
}

function receiveTipPercentage(value){
    let buttonSelected = document.querySelector()
}

function calculate(){
    if(bill !== 0 && tipPerecentage !== 0 && numberOfPeople !== 0){
        console.log("calcular")
    }
    else {
        console.log("Ainda não é possível calcular")
    }
}
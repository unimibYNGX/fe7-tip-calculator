function calculateTip() {
    console.clear()
    activeReset()
    var bill = readBill()

    var tip = parseInt(document.querySelector('input[name="n"]:checked').value)
    var radios = document.getElementsByName('n')
    var input_custom = document.getElementById('input-custom')
    if (radios[5].checked) {
        tip = parseInt(input_custom.value)
        console.log('custom tip: ' + tip + '%')
    }

    var people = parseInt(readPeople())

    var result = (bill / people / 100) * tip
    console.log(result)

    console.log(bill)
    var test = bill / 5; console.log("142.55 / 5 = " + test)
    var test1 = test / 100 * 15; console.log(test1)

    var totalEach = bill / people + result

    var roundedResult = Math.round(100 * result) / 100
    var roundedTotalEach = Math.round(100 * totalEach) / 100

    if (!Number.isFinite(result)) {
            document.getElementById('txt-result1').innerHTML = ''
            document.getElementById('txt-result2').innerHTML = ''
            document.getElementById('txt-result1-d').innerHTML = ''
            document.getElementById('txt-result2-d').innerHTML = ''
    } else {
            document.getElementById('txt-result1').innerHTML = '$' + roundedResult
            document.getElementById('txt-result2').innerHTML = '$' + roundedTotalEach
        document.getElementById('txt-result1-d').innerHTML = '$' + roundedResult
        document.getElementById('txt-result2-d').innerHTML = '$' + roundedTotalEach 
    }
}

function readBill() {
    return document.getElementById('bill').value
}

function readPeople() {
    return document.getElementById('people').value
}

function readTip() {
    return document.querySelector('input[name="n"]:checked').value
}

function zeroPeople() {
    var people = parseInt(readPeople())
    var text = document.getElementById('zero-error')
    var element = document.getElementById('display-people')
    if (people == 0) {
        console.log('reading zero people')
        if (!element.classList.contains('border-red'))
            element.classList.add('border-red')

        if (text.classList.contains('hide')) {
            text.classList.remove('hide')
            text.classList.add('show')
        }
    } else {
        console.log('reading more than zero people')
        if (element.classList.contains('border-red'))
            element.classList.remove('border-red')

        if (text.classList.contains('show')) {
            text.classList.remove('show')
            text.classList.add('hide')
        }
    }
}

function reset() {
    inactiveReset()
    var bill = document.getElementById('bill')
    var people = document.getElementById('people')
    var custom = document.getElementById('input-custom')
    resetCustom()

    bill.value = ''
    people.value = ''
    custom.value = ''
    var radios = document.getElementsByName('n')
    for (let index = 0; index < radios.length; index++) {
        radios[index].checked = false
    }
    document.getElementById('txt-result1').innerHTML = ''
    document.getElementById('txt-result2').innerHTML = ''
    document.getElementById('txt-result1-d').innerHTML = ''
    document.getElementById('txt-result2-d').innerHTML = ''
    console.clear()
}

function showCustom() {
    var custom_button = document.getElementById('custom-button')
    var custom_input = document.getElementById('custom-input')

    custom_button.classList.add('hide')
    custom_input.classList.remove('hide')

    setTimeout(function () {
        focusCustom()
        greenlight()
    }, 0)
}

function focusCustom() {
    var input = document.getElementById('input-custom')
    input.focus()
}

function resetCustom() {
    var custom_button = document.getElementById('custom-button')
    var custom_input = document.getElementById('custom-input')

    custom_button.classList.remove('hide')
    custom_input.classList.add('hide')
}

function greenlight() {
    // console.log("green");
    var display_bill = document.getElementById('display-bill')
    var input_bill = document.getElementById('bill')
    if (input_bill === document.activeElement) {
        console.log('input-bill is active')
        display_bill.classList.add('border-green')
    } else {
        display_bill.classList.remove('border-green')
    }

    var btn_custom = document.getElementById('custom-input')
    var input_custom = document.getElementById('input-custom')
    if (input_custom === document.activeElement) {
        checkCustom()
        console.log('input-custom is active')
        btn_custom.classList.add('border-green')
    } else {
        btn_custom.classList.remove('border-green')
    }

    var display_people = document.getElementById('display-people')
    var input_people = document.getElementById('people')
    if (input_people === document.activeElement) {
        console.log('input-people is active')
        display_people.classList.add('border-green')
    } else {
        display_people.classList.remove('border-green')
    }
}

function checkCustom() {
    var btn_custom = document.getElementById('custom-input')
    var input_custom = document.getElementById('input-custom')
    var radios = document.getElementsByName('n')
    for (let index = 0; index < radios.length; index++) {
        if (index != radios.length - 1) radios[index].checked = false
    }
    var input_radio = radios[5]
    input_radio.checked = true
}

function inactiveReset() {
    var btn_reset = document.getElementById("btn-reset");
    var btn_reset_d = document.getElementById("btn-reset-d")

    btn_reset.classList.add("inactive");
    btn_reset.classList.add("noHover");

    btn_reset_d.classList.add("inactive");
    btn_reset_d.classList.add("noHover");
}

function activeReset() {
    var btn_reset = document.getElementById("btn-reset");
    var btn_reset_d = document.getElementById("btn-reset-d")

    btn_reset.classList.remove("inactive");
    btn_reset.classList.remove("noHover");

    btn_reset_d.classList.remove("inactive");
    btn_reset_d.classList.remove("noHover");
}

function checkSize() {
    var x = window.matchMedia("(min-width: 1000px)")
    var card2 = document.getElementById("card2")
    var card3 = document.getElementById("card3")

    console.clear();
    // console.log(x.matches);
    if(x.matches){
        console.log("desktop")
        if(!card2.classList.contains("hide")){
            card2.classList.add("hide");
        }
        if(card3.classList.contains("hide")){
            card3.classList.remove("hide");
        }
    }
    else
    {
        console.log("mobile")
        if(card2.classList.contains("hide"))
        {
            card2.classList.remove("hide");
        }
        if(!card3.classList.contains("hide")){
            card3.classList.add("hide");
        }
    }
    return x.matches
}

document.onclick = function () {
    console.log('clicked!')
    greenlight()
}

window.addEventListener('resize', function(event) {
    checkSize();
});

checkSize();


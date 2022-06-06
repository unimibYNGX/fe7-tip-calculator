function calculateTip() {
    var bill = parseInt(readBill());
    // if(bill == "")
    //     console.log("bill: empty");
    // else
    //     console.log("bill: " + bill);

    var tip = parseInt(document.querySelector('input[name="n"]:checked').value);
    var people = parseInt(readPeople());

    var result = bill / people / 100 * tip;
    // console.log("result: " + result);
    var totalEach = bill / people + result;

    var roundedResult = Math.round(100*result)/100;
    var roundedTotalEach = Math.round(100*totalEach)/100;

    if(!Number.isFinite(result)){
        document.getElementById("txt-result1").innerHTML = "";
        document.getElementById("txt-result2").innerHTML = "";
    }
    else{
        document.getElementById("txt-result1").innerHTML = "$" + roundedResult;
        document.getElementById("txt-result2").innerHTML = "$" + roundedTotalEach;
    }

    console.clear();
}

function readBill() {
    var bill = document.getElementById("bill");
    var bill_content = bill.value;
    // if(bill_content != ""){
    //     console.log("bill: " + bill_content);
    // }
    // else {
    //     console.log("bill: empty");
    // }
    return bill_content;
}

function readPeople() {
    var people = document.getElementById("people");
    var people_content = people.value;
    // if(people_content != "")
    //     console.log("people: " + people_content);
    // else 
    //     console.log("people: empty");

    return people.value;
}

function readTip() {
    var tip = document.querySelector('input[name="n"]:checked').value
    // try {
    //     console.log(tip);
    // } catch (error) {
    //     console.log("tip: empty");
    // }
    return tip;
}

function zeroPeople() {
    var people = parseInt(readPeople());
    var text = document.getElementById("zero-error");
    var element = document.getElementById("display-people");
    if(people == 0) {
        console.log("reading zero people");
        if(!element.classList.contains("border-red"))
            element.classList.add("border-red");

        if(text.classList.contains("hide"))
        {
            text.classList.remove("hide");
            text.classList.add("show");
        }
    }
    else {
        console.log("reading more than zero people");
        if(element.classList.contains("border-red"))
            element.classList.remove("border-red"); 

        if(text.classList.contains("show")){
            text.classList.remove("show");
            text.classList.add("hide");
        }
    }
}




// MAIN 1

var main1 = document.getElementById("principal-form")
var form = document.getElementById("form")
var amountTeams = document.getElementById("teams")
var radio = document.getElementsByName("roundT")

// MAIN 2

var main2 = document.getElementById("principal-teams")
var form2 = document.getElementById("form-generate")

// MAIN 3

var main3 = document.getElementById("principal-fixture")

/*********************/

var amount;
var teams = []
var radioValue;
var reload = false;

// MAIN 1 EVENT

form.addEventListener("submit", (e) => {
    e.preventDefault()

    var messageOne = document.getElementById("messageForm1")
    var messageTwo = document.getElementById("messageForm2")

    try {

        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                radioValue = radio[i].value;
                break;
            }
        }

        if (amountTeams.value < 2) {
            messageOne.style.display = "flex";
            messageTwo.style.display = "none";
        } else if (amountTeams.value > 30) {
            messageTwo.style.display = "flex";
            messageOne.style.display = "none";
        } else {

            amount = amountTeams.value;

            main1.style.display = "none";
            main2.style.display = "initial";

            parseInt(amount)

            if (amount == 2) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 3) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
               
            }
            else if (amount == 4) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 5) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            }
            else if (amount == 6) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 7) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 8) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 9) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 10) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 11) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 12) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
               
            } else if (amount == 13) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 14) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 15) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 16) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 17) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 18) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 19) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 20) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 21) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 22) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 23) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams23">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 24) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams23">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams24">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 25) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams23">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams24">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams25">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 26) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams23">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams24">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams25">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams26">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 27) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams23">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams24">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams25">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams26">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams27">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 28) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams23">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams24">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams25">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams26">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams27">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams28">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 29) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams23">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams24">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams25">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams26">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams27">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams28">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams29">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
                
            } else if (amount == 30) {
                form2.innerHTML += `
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams1">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams2">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams3">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams4">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams5">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams6">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams7">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams8">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams9">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams10">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams11">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams12">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams13">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams14">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams15">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams16">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams17">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams18">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams19">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams20">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams21">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams22">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams23">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams24">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams25">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams26">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams27">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams28">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams29">
                </div>
                <div class="separetor-teams">
                    <input autocomplete="off" class="team" type="text" id="teams30">
                </div>
                `;
                var teamClassLength = form2.querySelectorAll(".team");
                teamClassLength.forEach(item => {
                    item.setAttribute("maxlength", "30")
                })
                var teamOne = form2.querySelectorAll("#teams1")
                teamOne.forEach(item => {
                    item.focus()
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
})

// MAIN 2 EVENT

form2.addEventListener("submit", function mainTwo(e) {
    e.preventDefault()

    var message = document.getElementById("messageTeams")
    var items = [];
    var countEmpty = 0;

    try {

        // COMPROBATE EMPTY

        var teamClass = form2.querySelectorAll(".team");
        teamClass.forEach(item => {
            items.push(item.value)
        })

        for (item of items) {
            if (item.length == 0) {
                countEmpty++;
            }
        }

        if (countEmpty > 0) {
            message.style.display = "flex";
        } else {

            // MAIN 3 WORK

            main2.style.display = "none";
            main3.style.display = "flex";

            if (amount == 2) {
                teams.push(form2["teams1"].value, form2["teams2"].value)
            } else if (amount == 3) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value)
            } else if (amount == 4) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value)
            } else if (amount == 5) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value)
            } else if (amount == 6) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value)
            } else if (amount == 7) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value)
            } else if (amount == 8) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value)
            } else if (amount == 9) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value)
            } else if (amount == 10) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value)
            } else if (amount == 11) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value)
            } else if (amount == 12) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value)
            } else if (amount == 13) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value)
            } else if (amount == 14) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value)
            } else if (amount == 15) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value)
            } else if (amount == 16) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value)
            } else if (amount == 17) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value)
            } else if (amount == 18) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value)
            } else if (amount == 19) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value)
            } else if (amount == 20) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value)
            } else if (amount == 21) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value)
            } else if (amount == 22) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value)
            } else if (amount == 23) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value, form2["teams23"].value)
            } else if (amount == 24) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value, form2["teams23"].value, form2["teams24"].value)
            } else if (amount == 25) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value, form2["teams23"].value, form2["teams24"].value, form2["teams25"].value)
            } else if (amount == 26) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value, form2["teams23"].value, form2["teams24"].value, form2["teams25"].value, form2["teams26"].value)
            } else if (amount == 27) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value, form2["teams23"].value, form2["teams24"].value, form2["teams25"].value, form2["teams26"].value, form2["teams27"].value)
            } else if (amount == 28) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value, form2["teams23"].value, form2["teams24"].value, form2["teams25"].value, form2["teams26"].value, form2["teams27"].value, form2["teams28"].value)
            } else if (amount == 29) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value, form2["teams23"].value, form2["teams24"].value, form2["teams25"].value, form2["teams26"].value, form2["teams27"].value, form2["teams28"].value, form2["teams29"].value)
            } else if (amount == 30) {
                teams.push(form2["teams1"].value, form2["teams2"].value, form2["teams3"].value, form2["teams4"].value, form2["teams5"].value, form2["teams6"].value, form2["teams7"].value, form2["teams8"].value, form2["teams9"].value, form2["teams10"].value, form2["teams11"].value, form2["teams12"].value, form2["teams13"].value, form2["teams14"].value, form2["teams15"].value, form2["teams16"].value, form2["teams17"].value, form2["teams18"].value, form2["teams19"].value, form2["teams20"].value, form2["teams21"].value, form2["teams22"].value, form2["teams23"].value, form2["teams24"].value, form2["teams25"].value, form2["teams26"].value, form2["teams27"].value, form2["teams28"].value, form2["teams29"].value, form2["teams30"].value)
            }

            shuffle(teams);

            var button = document.createElement("button")
            button.innerHTML = "AGAIN"
            button.className = "button-again"
            document.body.appendChild(button)

            button.addEventListener("click", (e) => {
                main3.innerHTML = "";
                teams = [];
                button.remove();
                mainTwo(e);
            })

            if (teams.length == 2) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                            <table>
                                <tr>
                                    <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                                </tr>
                                <tr>
                                    <td>${teams[1]}</td>
                                    <td class="versus" >VS</td>
                                    <td>${teams[0]}</td>
                                </tr>
                            </table>
                            `;
                        } else {
                            main3.innerHTML += `
                            <table>
                                <tr>
                                    <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                                </tr>
                                <tr>
                                    <td>${i < teams.length ? teams[0] : teams[1]}</td>
                                    <td class="versus" >VS</td>
                                    <td>${i < teams.length ? teams[1] : teams[0]}</td>
                                </tr>
                            </table>
            `;
                        }
                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                <table>
                    <tr>
                        <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                    </tr>
                    <tr>
                        <td>${teams[0]}</td>
                        <td class="versus" >VS</td>
                        <td>${teams[1]}</td>
                    </tr>
                </table>
            `;
                    }
                }
            } else if (teams.length == 3) {

                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                            <tr>
                                <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[3] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstThree = teams[1];

                        teams[1] = teams[3];
                        teams[3] = teams[2];
                        teams[2] = fixtureFirstThree;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                            <tr>
                                <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[3]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstThree = teams[1];

                        teams[1] = teams[3];
                        teams[3] = teams[2];
                        teams[2] = fixtureFirstThree;

                    }
                }
            } else if (teams.length == 4) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                    <table>
                    <tr>
                        <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                    </tr>
                        <tr>
                            <td>${teams[1]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[0]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[2] : teams[3]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[3] : teams[2]}</td>
                        </tr>
                    </table>
                `;
                        } else {
                            main3.innerHTML += `
                    <table>
                    <tr>
                        <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                    </tr>
                        <tr>
                            <td>${teams[0]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[1]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[2] : teams[3]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[3] : teams[2]}</td>
                        </tr>
                    </table>
                `;
                        }

                        var fixtureFirstFour = teams[1];

                        teams[1] = teams[3];
                        teams[3] = teams[2];
                        teams[2] = fixtureFirstFour;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                    <table>
                    <tr>
                        <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                    </tr>
                        <tr>
                            <td>${teams[1]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[0]}</td>
                        </tr>
                        <tr>
                            <td>${teams[2]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[3]}</td>
                        </tr>
                    </table>
                `;
                        } else {
                            main3.innerHTML += `
                    <table>
                    <tr>
                        <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                    </tr>
                        <tr>
                            <td>${teams[0]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[1]}</td>
                        </tr>
                        <tr>
                            <td>${teams[2]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[3]}</td>
                        </tr>
                    </table>
                `;
                        }

                        var fixtureFirstFour = teams[1];

                        teams[1] = teams[3];
                        teams[3] = teams[2];
                        teams[2] = fixtureFirstFour;

                    }
                }
            } else if (teams.length == 5) {

                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[5] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[4] : teams[3]}</td>
                            </tr>
                            <tr>
                            <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstFive = teams[1];

                        teams[1] = teams[4];
                        teams[4] = teams[2];
                        teams[2] = teams[5];
                        teams[5] = teams[3];
                        teams[3] = fixtureFirstFive;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[4]}</td>
                            </tr>
                            <tr>
                            <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstFive = teams[1];

                        teams[1] = teams[4];
                        teams[4] = teams[2];
                        teams[2] = teams[5];
                        teams[5] = teams[3];
                        teams[3] = fixtureFirstFive;

                    }
                }
            } else if (teams.length == 6) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                    <table>
                    <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                        <tr>
                            <td>${teams[1]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[0]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[2] : teams[5]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[5] : teams[2]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[3] : teams[4]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[4] : teams[3]}</td>
                        </tr>
                    </table>
                `;
                        } else {
                            main3.innerHTML += `
                    <table>
                    <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                        <tr>
                            <td>${teams[0]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[1]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[2] : teams[5]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[5] : teams[2]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[3] : teams[4]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[4] : teams[3]}</td>
                        </tr>
                    </table>
                `;
                        }

                        var fixtureFirstSix = teams[1];

                        teams[1] = teams[4];
                        teams[4] = teams[2];
                        teams[2] = teams[5];
                        teams[5] = teams[3];
                        teams[3] = fixtureFirstSix;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                    <table>
                    <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                        <tr>
                            <td>${teams[1]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[0]}</td>
                        </tr>
                        <tr>
                            <td>${teams[2]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[5]}</td>
                        </tr>
                        <tr>
                            <td>${teams[3]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[4]}</td>
                        </tr>
                    </table>
                `;
                        } else {
                            main3.innerHTML += `
                    <table>
                    <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                        <tr>
                            <td>${teams[0]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[1]}</td>
                        </tr>
                        <tr>
                            <td>${teams[2]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[5]}</td>
                        </tr>
                        <tr>
                            <td>${teams[3]}</td>
                            <td class="versus" >VS</td>
                            <td>${teams[4]}</td>
                        </tr>
                    </table>
                `;
                        }

                        var fixtureFirstSix = teams[1];

                        teams[1] = teams[4];
                        teams[4] = teams[2];
                        teams[2] = teams[5];
                        teams[5] = teams[3];
                        teams[3] = fixtureFirstSix;

                    }
                }
            } else if (teams.length == 7) {

                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[6] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[5] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstSeven = teams[1];

                        teams[1] = teams[5];
                        teams[5] = teams[2];
                        teams[2] = teams[6];
                        teams[6] = teams[3];
                        teams[3] = teams[7];
                        teams[7] = teams[4];
                        teams[4] = fixtureFirstSeven;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[5]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstSeven = teams[1];

                        teams[1] = teams[5];
                        teams[5] = teams[2];
                        teams[2] = teams[6];
                        teams[6] = teams[3];
                        teams[3] = teams[7];
                        teams[7] = teams[4];
                        teams[4] = fixtureFirstSeven;

                    }
                }

            } else if (teams.length == 8) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[6] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[5] : teams[4]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[6] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[5] : teams[4]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstEight = teams[1];

                        teams[1] = teams[5];
                        teams[5] = teams[2];
                        teams[2] = teams[6];
                        teams[6] = teams[3];
                        teams[3] = teams[7];
                        teams[7] = teams[4];
                        teams[4] = fixtureFirstEight;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[5]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[5]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstEight = teams[1];

                        teams[1] = teams[5];
                        teams[5] = teams[2];
                        teams[2] = teams[6];
                        teams[6] = teams[3];
                        teams[3] = teams[7];
                        teams[7] = teams[4];
                        teams[4] = fixtureFirstEight;

                    }
                }
            } else if (teams.length == 9) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[6] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstNine = teams[1];

                        teams[1] = teams[6];
                        teams[6] = teams[2];
                        teams[2] = teams[7];
                        teams[7] = teams[3];
                        teams[3] = teams[8];
                        teams[8] = teams[4];
                        teams[4] = teams[9];
                        teams[9] = teams[5];
                        teams[5] = fixtureFirstNine;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[6]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstNine = teams[1];

                        teams[1] = teams[6];
                        teams[6] = teams[2];
                        teams[2] = teams[7];
                        teams[7] = teams[3];
                        teams[3] = teams[8];
                        teams[8] = teams[4];
                        teams[4] = teams[9];
                        teams[9] = teams[5];
                        teams[5] = fixtureFirstNine;

                    }
                }

            } else if (teams.length == 10) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[6] : teams[5]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[6] : teams[5]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTen = teams[1];

                        teams[1] = teams[6];
                        teams[6] = teams[2];
                        teams[2] = teams[7];
                        teams[7] = teams[3];
                        teams[3] = teams[8];
                        teams[8] = teams[4];
                        teams[4] = teams[9];
                        teams[9] = teams[5];
                        teams[5] = fixtureFirstTen;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[6]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[6]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTen = teams[1];

                        teams[1] = teams[6];
                        teams[6] = teams[2];
                        teams[2] = teams[7];
                        teams[7] = teams[3];
                        teams[3] = teams[8];
                        teams[8] = teams[4];
                        teams[4] = teams[9];
                        teams[9] = teams[5];
                        teams[5] = fixtureFirstTen;

                    }
                }
            } else if (teams.length == 11) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[6]}</td>
                            </tr>
                            <tr>
                            <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstEleven = teams[1];

                        teams[1] = teams[7];
                        teams[7] = teams[2];
                        teams[2] = teams[8];
                        teams[8] = teams[3];
                        teams[3] = teams[9];
                        teams[9] = teams[4];
                        teams[4] = teams[10];
                        teams[10] = teams[5];
                        teams[5] = teams[11];
                        teams[11] = teams[6];
                        teams[6] = fixtureFirstEleven;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                            <tr>
                            <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstEleven = teams[1];

                        teams[1] = teams[7];
                        teams[7] = teams[2];
                        teams[2] = teams[8];
                        teams[8] = teams[3];
                        teams[3] = teams[9];
                        teams[9] = teams[4];
                        teams[4] = teams[10];
                        teams[10] = teams[5];
                        teams[5] = teams[11];
                        teams[11] = teams[6];
                        teams[6] = fixtureFirstEleven;

                    }
                }

            } else if (teams.length == 12) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[6]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                            <td>${i < teams.length ? teams[2] : teams[11]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[11] : teams[2]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[3] : teams[10]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[10] : teams[3]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[4] : teams[9]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[9] : teams[4]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[5] : teams[8]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[8] : teams[5]}</td>
                        </tr>
                        <tr>
                            <td>${i < teams.length ? teams[6] : teams[7]}</td>
                            <td class="versus" >VS</td>
                            <td>${i < teams.length ? teams[7] : teams[6]}</td>
                        </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwelve = teams[1];

                        teams[1] = teams[7];
                        teams[7] = teams[2];
                        teams[2] = teams[8];
                        teams[8] = teams[3];
                        teams[3] = teams[9];
                        teams[9] = teams[4];
                        teams[4] = teams[10];
                        teams[10] = teams[5];
                        teams[5] = teams[11];
                        teams[11] = teams[6];
                        teams[6] = fixtureFirstTwelve;

                    }

                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[7]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwelve = teams[1];

                        teams[1] = teams[7];
                        teams[7] = teams[2];
                        teams[2] = teams[8];
                        teams[8] = teams[3];
                        teams[3] = teams[9];
                        teams[9] = teams[4];
                        teams[4] = teams[10];
                        teams[10] = teams[5];
                        teams[5] = teams[11];
                        teams[11] = teams[6];
                        teams[6] = fixtureFirstTwelve;

                    }

                }
            } else if (teams.length == 13) {

                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[7]}</td>
                            </tr>
                            <tr>
                            <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstThirteen = teams[1];

                        teams[1] = teams[8];
                        teams[8] = teams[2];
                        teams[2] = teams[9];
                        teams[9] = teams[3];
                        teams[3] = teams[10];
                        teams[10] = teams[4];
                        teams[4] = teams[11];
                        teams[11] = teams[5];
                        teams[5] = teams[12];
                        teams[12] = teams[6];
                        teams[6] = teams[13];
                        teams[13] = teams[7];
                        teams[7] = fixtureFirstThirteen;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                            <tr>
                            <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstThirteen = teams[1];

                        teams[1] = teams[8];
                        teams[8] = teams[2];
                        teams[2] = teams[9];
                        teams[9] = teams[3];
                        teams[3] = teams[10];
                        teams[10] = teams[4];
                        teams[4] = teams[11];
                        teams[11] = teams[5];
                        teams[5] = teams[12];
                        teams[12] = teams[6];
                        teams[6] = teams[13];
                        teams[13] = teams[7];
                        teams[7] = fixtureFirstThirteen;

                    }
                }

            } else if (teams.length == 14) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[7]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[7]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstFourteen = teams[1];

                        teams[1] = teams[8];
                        teams[8] = teams[2];
                        teams[2] = teams[9];
                        teams[9] = teams[3];
                        teams[3] = teams[10];
                        teams[10] = teams[4];
                        teams[4] = teams[11];
                        teams[11] = teams[5];
                        teams[5] = teams[12];
                        teams[12] = teams[6];
                        teams[6] = teams[13];
                        teams[13] = teams[7];
                        teams[7] = fixtureFirstFourteen;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[8]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstFourteen = teams[1];

                        teams[1] = teams[8];
                        teams[8] = teams[2];
                        teams[2] = teams[9];
                        teams[9] = teams[3];
                        teams[3] = teams[10];
                        teams[10] = teams[4];
                        teams[4] = teams[11];
                        teams[11] = teams[5];
                        teams[5] = teams[12];
                        teams[12] = teams[6];
                        teams[6] = teams[13];
                        teams[13] = teams[7];
                        teams[7] = fixtureFirstFourteen;

                    }
                }
            } else if (teams.length == 15) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[8]}</td>
                            </tr>
                            <tr>
                            <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstFiveteen = teams[1];

                        teams[1] = teams[9];
                        teams[9] = teams[2];
                        teams[2] = teams[10];
                        teams[10] = teams[3];
                        teams[3] = teams[11];
                        teams[11] = teams[4];
                        teams[4] = teams[12];
                        teams[12] = teams[5];
                        teams[5] = teams[13];
                        teams[13] = teams[6];
                        teams[6] = teams[14];
                        teams[14] = teams[7];
                        teams[7] = teams[15];
                        teams[15] = teams[8];
                        teams[8] = fixtureFirstFiveteen;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                            <tr>
                            <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstFiveteen = teams[1];

                        teams[1] = teams[9];
                        teams[9] = teams[2];
                        teams[2] = teams[10];
                        teams[10] = teams[3];
                        teams[3] = teams[11];
                        teams[11] = teams[4];
                        teams[4] = teams[12];
                        teams[12] = teams[5];
                        teams[5] = teams[13];
                        teams[13] = teams[6];
                        teams[6] = teams[14];
                        teams[14] = teams[7];
                        teams[7] = teams[15];
                        teams[15] = teams[8];
                        teams[8] = fixtureFirstFiveteen;

                    }
                }

            } else if (teams.length == 16) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[8]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[9] : teams[8]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstSixteen = teams[1];

                        teams[1] = teams[8];
                        teams[8] = teams[2];
                        teams[2] = teams[9];
                        teams[9] = teams[3];
                        teams[3] = teams[10];
                        teams[10] = teams[4];
                        teams[4] = teams[11];
                        teams[11] = teams[5];
                        teams[5] = teams[12];
                        teams[12] = teams[6];
                        teams[6] = teams[13];
                        teams[13] = teams[7];
                        teams[7] = fixtureFirstSixteen;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[9]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstSixteen = teams[1];

                        teams[1] = teams[8];
                        teams[8] = teams[2];
                        teams[2] = teams[9];
                        teams[9] = teams[3];
                        teams[3] = teams[10];
                        teams[10] = teams[4];
                        teams[4] = teams[11];
                        teams[11] = teams[5];
                        teams[5] = teams[12];
                        teams[12] = teams[6];
                        teams[6] = teams[13];
                        teams[13] = teams[7];
                        teams[7] = fixtureFirstSixteen;

                    }
                }
            } else if (teams.length == 17) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstSeventeen = teams[1];

                        teams[1] = teams[10];
                        teams[10] = teams[2];
                        teams[2] = teams[11];
                        teams[11] = teams[3];
                        teams[3] = teams[12];
                        teams[12] = teams[4];
                        teams[4] = teams[13];
                        teams[13] = teams[5];
                        teams[5] = teams[14];
                        teams[14] = teams[6];
                        teams[6] = teams[15];
                        teams[15] = teams[7];
                        teams[7] = teams[16];
                        teams[16] = teams[8];
                        teams[8] = teams[17];
                        teams[17] = teams[9];
                        teams[9] = fixtureFirstSeventeen;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstSeventeen = teams[1];

                        teams[1] = teams[10];
                        teams[10] = teams[2];
                        teams[2] = teams[11];
                        teams[11] = teams[3];
                        teams[3] = teams[12];
                        teams[12] = teams[4];
                        teams[4] = teams[13];
                        teams[13] = teams[5];
                        teams[5] = teams[14];
                        teams[14] = teams[6];
                        teams[6] = teams[15];
                        teams[15] = teams[7];
                        teams[7] = teams[16];
                        teams[16] = teams[8];
                        teams[8] = teams[17];
                        teams[17] = teams[9];
                        teams[9] = fixtureFirstSeventeen;

                    }
                }

            } else if (teams.length == 18) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[9]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[10] : teams[9]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstEighteen = teams[1];

                        teams[1] = teams[10];
                        teams[10] = teams[2];
                        teams[2] = teams[11];
                        teams[11] = teams[3];
                        teams[3] = teams[12];
                        teams[12] = teams[4];
                        teams[4] = teams[13];
                        teams[13] = teams[5];
                        teams[5] = teams[14];
                        teams[14] = teams[6];
                        teams[6] = teams[15];
                        teams[15] = teams[7];
                        teams[7] = teams[16];
                        teams[16] = teams[8];
                        teams[8] = fixtureFirstEighteen;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[10]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstEighteen = teams[1];

                        teams[1] = teams[10];
                        teams[10] = teams[2];
                        teams[2] = teams[11];
                        teams[11] = teams[3];
                        teams[3] = teams[12];
                        teams[12] = teams[4];
                        teams[4] = teams[13];
                        teams[13] = teams[5];
                        teams[5] = teams[14];
                        teams[14] = teams[6];
                        teams[6] = teams[15];
                        teams[15] = teams[7];
                        teams[7] = teams[16];
                        teams[16] = teams[8];
                        teams[8] = fixtureFirstEighteen;

                    }
                }
            } else if (teams.length == 19) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstNineteen = teams[1];

                        teams[1] = teams[11];
                        teams[11] = teams[2];
                        teams[2] = teams[12];
                        teams[12] = teams[3];
                        teams[3] = teams[13];
                        teams[13] = teams[4];
                        teams[4] = teams[14];
                        teams[14] = teams[5];
                        teams[5] = teams[15];
                        teams[15] = teams[6];
                        teams[6] = teams[16];
                        teams[16] = teams[7];
                        teams[7] = teams[17];
                        teams[17] = teams[8];
                        teams[8] = teams[18];
                        teams[18] = teams[9];
                        teams[9] = teams[19];
                        teams[19] = teams[10];
                        teams[10] = fixtureFirstNineteen;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstNineteen = teams[1];

                        teams[1] = teams[11];
                        teams[11] = teams[2];
                        teams[2] = teams[12];
                        teams[12] = teams[3];
                        teams[3] = teams[13];
                        teams[13] = teams[4];
                        teams[4] = teams[14];
                        teams[14] = teams[5];
                        teams[5] = teams[15];
                        teams[15] = teams[6];
                        teams[6] = teams[16];
                        teams[16] = teams[7];
                        teams[7] = teams[17];
                        teams[17] = teams[8];
                        teams[8] = teams[18];
                        teams[18] = teams[9];
                        teams[9] = teams[19];
                        teams[19] = teams[10];
                        teams[10] = fixtureFirstNineteen;

                    }
                }
            } else if (teams.length == 20) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[10]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[11] : teams[10]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwenty = teams[1];

                        teams[1] = teams[11];
                        teams[11] = teams[2];
                        teams[2] = teams[12];
                        teams[12] = teams[3];
                        teams[3] = teams[13];
                        teams[13] = teams[4];
                        teams[4] = teams[14];
                        teams[14] = teams[5];
                        teams[5] = teams[15];
                        teams[15] = teams[6];
                        teams[6] = teams[16];
                        teams[16] = teams[7];
                        teams[7] = teams[17];
                        teams[17] = teams[8];
                        teams[8] = teams[18];
                        teams[18] = teams[9];
                        teams[9] = teams[19];
                        teams[19] = teams[10];
                        teams[10] = fixtureFirstTwenty;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[11]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwenty = teams[1];

                        teams[1] = teams[11];
                        teams[11] = teams[2];
                        teams[2] = teams[12];
                        teams[12] = teams[3];
                        teams[3] = teams[13];
                        teams[13] = teams[4];
                        teams[4] = teams[14];
                        teams[14] = teams[5];
                        teams[5] = teams[15];
                        teams[15] = teams[6];
                        teams[6] = teams[16];
                        teams[16] = teams[7];
                        teams[7] = teams[17];
                        teams[17] = teams[8];
                        teams[8] = teams[18];
                        teams[18] = teams[9];
                        teams[9] = teams[19];
                        teams[19] = teams[10];
                        teams[10] = fixtureFirstTwenty;

                    }
                }
            } else if (teams.length == 21) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentyOne = teams[1];

                        teams[1] = teams[12];
                        teams[12] = teams[2];
                        teams[2] = teams[13];
                        teams[13] = teams[3];
                        teams[3] = teams[14];
                        teams[14] = teams[4];
                        teams[4] = teams[15];
                        teams[15] = teams[5];
                        teams[5] = teams[16];
                        teams[16] = teams[6];
                        teams[6] = teams[17];
                        teams[17] = teams[7];
                        teams[7] = teams[18];
                        teams[18] = teams[8];
                        teams[8] = teams[19];
                        teams[19] = teams[9];
                        teams[9] = teams[20];
                        teams[20] = teams[10];
                        teams[10] = teams[21];
                        teams[21] = teams[11];
                        teams[11] = fixtureFirstTwentyOne;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentyOne = teams[1];

                        teams[1] = teams[12];
                        teams[12] = teams[2];
                        teams[2] = teams[13];
                        teams[13] = teams[3];
                        teams[3] = teams[14];
                        teams[14] = teams[4];
                        teams[4] = teams[15];
                        teams[15] = teams[5];
                        teams[5] = teams[16];
                        teams[16] = teams[6];
                        teams[6] = teams[17];
                        teams[17] = teams[7];
                        teams[7] = teams[18];
                        teams[18] = teams[8];
                        teams[8] = teams[19];
                        teams[19] = teams[9];
                        teams[9] = teams[20];
                        teams[20] = teams[10];
                        teams[10] = teams[21];
                        teams[21] = teams[11];
                        teams[11] = fixtureFirstTwentyOne;

                    }
                }
            } else if (teams.length == 22) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[11]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[12] : teams[11]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwentyTwo = teams[1];

                        teams[1] = teams[12];
                        teams[12] = teams[2];
                        teams[2] = teams[13];
                        teams[13] = teams[3];
                        teams[3] = teams[14];
                        teams[14] = teams[4];
                        teams[4] = teams[15];
                        teams[15] = teams[5];
                        teams[5] = teams[16];
                        teams[16] = teams[6];
                        teams[6] = teams[17];
                        teams[17] = teams[7];
                        teams[7] = teams[18];
                        teams[18] = teams[8];
                        teams[8] = teams[19];
                        teams[19] = teams[9];
                        teams[9] = teams[20];
                        teams[20] = teams[10];
                        teams[10] = teams[21];
                        teams[21] = teams[11];
                        teams[11] = fixtureFirstTwentyTwo;
                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[12]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwentyTwo = teams[1];

                        teams[1] = teams[12];
                        teams[12] = teams[2];
                        teams[2] = teams[13];
                        teams[13] = teams[3];
                        teams[3] = teams[14];
                        teams[14] = teams[4];
                        teams[4] = teams[15];
                        teams[15] = teams[5];
                        teams[5] = teams[16];
                        teams[16] = teams[6];
                        teams[6] = teams[17];
                        teams[17] = teams[7];
                        teams[7] = teams[18];
                        teams[18] = teams[8];
                        teams[8] = teams[19];
                        teams[19] = teams[9];
                        teams[9] = teams[20];
                        teams[20] = teams[10];
                        teams[10] = teams[21];
                        teams[21] = teams[11];
                        teams[11] = fixtureFirstTwentyTwo;
                    }
                }
            } else if (teams.length == 23) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[4] : teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentyThree = teams[1];

                        teams[1] = teams[13];
                        teams[13] = teams[2];
                        teams[2] = teams[14];
                        teams[14] = teams[3];
                        teams[3] = teams[15];
                        teams[15] = teams[4];
                        teams[4] = teams[16];
                        teams[16] = teams[5];
                        teams[5] = teams[17];
                        teams[17] = teams[6];
                        teams[6] = teams[18];
                        teams[18] = teams[7];
                        teams[7] = teams[19];
                        teams[19] = teams[8];
                        teams[8] = teams[20];
                        teams[20] = teams[9];
                        teams[9] = teams[21];
                        teams[21] = teams[10];
                        teams[10] = teams[22];
                        teams[22] = teams[11];
                        teams[11] = teams[23];
                        teams[23] = teams[12];
                        teams[12] = fixtureFirstTwentyThree;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentyThree = teams[1];

                        teams[1] = teams[13];
                        teams[13] = teams[2];
                        teams[2] = teams[14];
                        teams[14] = teams[3];
                        teams[3] = teams[15];
                        teams[15] = teams[4];
                        teams[4] = teams[16];
                        teams[16] = teams[5];
                        teams[5] = teams[17];
                        teams[17] = teams[6];
                        teams[6] = teams[18];
                        teams[18] = teams[7];
                        teams[7] = teams[19];
                        teams[19] = teams[8];
                        teams[8] = teams[20];
                        teams[20] = teams[9];
                        teams[9] = teams[21];
                        teams[21] = teams[10];
                        teams[10] = teams[22];
                        teams[22] = teams[11];
                        teams[11] = teams[23];
                        teams[23] = teams[12];
                        teams[12] = fixtureFirstTwentyThree;

                    }
                }
            } else if (teams.length == 24) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[12]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[13] : teams[12]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwentyFour = teams[1];

                        teams[1] = teams[13];
                        teams[13] = teams[2];
                        teams[2] = teams[14];
                        teams[14] = teams[3];
                        teams[3] = teams[15];
                        teams[15] = teams[4];
                        teams[4] = teams[16];
                        teams[16] = teams[5];
                        teams[5] = teams[17];
                        teams[17] = teams[6];
                        teams[6] = teams[18];
                        teams[18] = teams[7];
                        teams[7] = teams[19];
                        teams[19] = teams[8];
                        teams[8] = teams[20];
                        teams[20] = teams[9];
                        teams[9] = teams[21];
                        teams[21] = teams[10];
                        teams[10] = teams[22];
                        teams[22] = teams[11];
                        teams[11] = teams[23];
                        teams[23] = teams[12];
                        teams[12] = fixtureFirstTwentyFour;
                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[13]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwentyFour = teams[1];

                        teams[1] = teams[13];
                        teams[13] = teams[2];
                        teams[2] = teams[14];
                        teams[14] = teams[3];
                        teams[3] = teams[15];
                        teams[15] = teams[4];
                        teams[4] = teams[16];
                        teams[16] = teams[5];
                        teams[5] = teams[17];
                        teams[17] = teams[6];
                        teams[6] = teams[18];
                        teams[18] = teams[7];
                        teams[7] = teams[19];
                        teams[19] = teams[8];
                        teams[8] = teams[20];
                        teams[20] = teams[9];
                        teams[9] = teams[21];
                        teams[21] = teams[10];
                        teams[10] = teams[22];
                        teams[22] = teams[11];
                        teams[11] = teams[23];
                        teams[23] = teams[12];
                        teams[12] = fixtureFirstTwentyFour;
                    }
                }
            } else if (teams.length == 25) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[21] : teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[6] : teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[20] : teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[7] : teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[13]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentyFive = teams[1];

                        teams[1] = teams[14];
                        teams[14] = teams[2];
                        teams[2] = teams[15];
                        teams[15] = teams[3];
                        teams[3] = teams[16];
                        teams[16] = teams[4];
                        teams[4] = teams[17];
                        teams[17] = teams[5];
                        teams[5] = teams[18];
                        teams[18] = teams[6];
                        teams[6] = teams[19];
                        teams[19] = teams[7];
                        teams[7] = teams[20];
                        teams[20] = teams[8];
                        teams[8] = teams[21];
                        teams[21] = teams[9];
                        teams[9] = teams[22];
                        teams[22] = teams[10];
                        teams[10] = teams[23];
                        teams[23] = teams[11];
                        teams[11] = teams[24];
                        teams[24] = teams[12];
                        teams[12] = teams[25];
                        teams[25] = teams[12];
                        teams[12] = fixtureFirstTwentyFive;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentyFive = teams[1];

                        teams[1] = teams[14];
                        teams[14] = teams[2];
                        teams[2] = teams[15];
                        teams[15] = teams[3];
                        teams[3] = teams[16];
                        teams[16] = teams[4];
                        teams[4] = teams[17];
                        teams[17] = teams[5];
                        teams[5] = teams[18];
                        teams[18] = teams[6];
                        teams[6] = teams[19];
                        teams[19] = teams[7];
                        teams[7] = teams[20];
                        teams[20] = teams[8];
                        teams[8] = teams[21];
                        teams[21] = teams[9];
                        teams[9] = teams[22];
                        teams[22] = teams[10];
                        teams[10] = teams[23];
                        teams[23] = teams[11];
                        teams[11] = teams[24];
                        teams[24] = teams[12];
                        teams[12] = teams[25];
                        teams[25] = teams[12];
                        teams[12] = fixtureFirstTwentyFive;

                    }
                }
            } else if (teams.length == 26) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[13]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[14] : teams[13]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwentySix = teams[1];

                        teams[1] = teams[14];
                        teams[14] = teams[2];
                        teams[2] = teams[15];
                        teams[15] = teams[3];
                        teams[3] = teams[16];
                        teams[16] = teams[4];
                        teams[4] = teams[17];
                        teams[17] = teams[5];
                        teams[5] = teams[18];
                        teams[18] = teams[6];
                        teams[6] = teams[19];
                        teams[19] = teams[7];
                        teams[7] = teams[20];
                        teams[20] = teams[8];
                        teams[8] = teams[21];
                        teams[21] = teams[9];
                        teams[9] = teams[22];
                        teams[22] = teams[10];
                        teams[10] = teams[23];
                        teams[23] = teams[11];
                        teams[11] = teams[24];
                        teams[24] = teams[12];
                        teams[12] = teams[25];
                        teams[25] = teams[13];
                        teams[13] = fixtureFirstTwentySix;
                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[14]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwentySix = teams[1];

                        teams[1] = teams[14];
                        teams[14] = teams[2];
                        teams[2] = teams[15];
                        teams[15] = teams[3];
                        teams[3] = teams[16];
                        teams[16] = teams[4];
                        teams[4] = teams[17];
                        teams[17] = teams[5];
                        teams[5] = teams[18];
                        teams[18] = teams[6];
                        teams[6] = teams[19];
                        teams[19] = teams[7];
                        teams[7] = teams[20];
                        teams[20] = teams[8];
                        teams[8] = teams[21];
                        teams[21] = teams[9];
                        teams[9] = teams[22];
                        teams[22] = teams[10];
                        teams[10] = teams[23];
                        teams[23] = teams[11];
                        teams[11] = teams[24];
                        teams[24] = teams[12];
                        teams[12] = teams[25];
                        teams[25] = teams[13];
                        teams[13] = fixtureFirstTwentySix;
                    }
                }
            } else if (teams.length == 27) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[27]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[27] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[26]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[26] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[21] : teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[8] : teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[14] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[14]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentySeven = teams[1];

                        teams[1] = teams[15];
                        teams[15] = teams[2];
                        teams[2] = teams[16];
                        teams[16] = teams[3];
                        teams[3] = teams[17];
                        teams[17] = teams[4];
                        teams[4] = teams[18];
                        teams[18] = teams[5];
                        teams[5] = teams[19];
                        teams[19] = teams[6];
                        teams[6] = teams[20];
                        teams[20] = teams[7];
                        teams[7] = teams[21];
                        teams[21] = teams[8];
                        teams[8] = teams[22];
                        teams[22] = teams[9];
                        teams[9] = teams[23];
                        teams[23] = teams[10];
                        teams[10] = teams[24];
                        teams[24] = teams[11];
                        teams[11] = teams[25];
                        teams[25] = teams[12];
                        teams[12] = teams[26];
                        teams[26] = teams[12];
                        teams[12] = teams[27];
                        teams[27] = teams[13];
                        teams[13] = fixtureFirstTwentySeven;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[27]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[26]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentySeven = teams[1];

                        teams[1] = teams[15];
                        teams[15] = teams[2];
                        teams[2] = teams[16];
                        teams[16] = teams[3];
                        teams[3] = teams[17];
                        teams[17] = teams[4];
                        teams[4] = teams[18];
                        teams[18] = teams[5];
                        teams[5] = teams[19];
                        teams[19] = teams[6];
                        teams[6] = teams[20];
                        teams[20] = teams[7];
                        teams[7] = teams[21];
                        teams[21] = teams[8];
                        teams[8] = teams[22];
                        teams[22] = teams[9];
                        teams[9] = teams[23];
                        teams[23] = teams[10];
                        teams[10] = teams[24];
                        teams[24] = teams[11];
                        teams[11] = teams[25];
                        teams[25] = teams[12];
                        teams[12] = teams[26];
                        teams[26] = teams[12];
                        teams[12] = teams[27];
                        teams[27] = teams[13];
                        teams[13] = fixtureFirstTwentySeven;

                    }
                }
            } else if (teams.length == 28) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[27]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[27] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[26]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[26] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[14] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[14]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[27]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[27] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[26]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[26] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[14] : teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[15] : teams[14]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwentyEigth = teams[1];

                        teams[1] = teams[15];
                        teams[15] = teams[2];
                        teams[2] = teams[16];
                        teams[16] = teams[3];
                        teams[3] = teams[17];
                        teams[17] = teams[4];
                        teams[4] = teams[18];
                        teams[18] = teams[5];
                        teams[5] = teams[19];
                        teams[19] = teams[6];
                        teams[6] = teams[20];
                        teams[20] = teams[7];
                        teams[7] = teams[21];
                        teams[21] = teams[8];
                        teams[8] = teams[22];
                        teams[22] = teams[9];
                        teams[9] = teams[23];
                        teams[23] = teams[10];
                        teams[10] = teams[24];
                        teams[24] = teams[11];
                        teams[11] = teams[25];
                        teams[25] = teams[12];
                        teams[12] = teams[26];
                        teams[26] = teams[13];
                        teams[13] = teams[27];
                        teams[27] = teams[14];
                        teams[14] = fixtureFirstTwentyEigth;
                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[27]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[26]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[27]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[26]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td>${teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[15]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstTwentyEigth = teams[1];

                        teams[1] = teams[15];
                        teams[15] = teams[2];
                        teams[2] = teams[16];
                        teams[16] = teams[3];
                        teams[3] = teams[17];
                        teams[17] = teams[4];
                        teams[4] = teams[18];
                        teams[18] = teams[5];
                        teams[5] = teams[19];
                        teams[19] = teams[6];
                        teams[6] = teams[20];
                        teams[20] = teams[7];
                        teams[7] = teams[21];
                        teams[21] = teams[8];
                        teams[8] = teams[22];
                        teams[22] = teams[9];
                        teams[9] = teams[23];
                        teams[23] = teams[10];
                        teams[10] = teams[24];
                        teams[24] = teams[11];
                        teams[11] = teams[25];
                        teams[25] = teams[12];
                        teams[12] = teams[26];
                        teams[26] = teams[13];
                        teams[13] = teams[27];
                        teams[27] = teams[14];
                        teams[14] = fixtureFirstTwentyEigth;
                    }
                }
            } else if (teams.length == 29) {
                teams.unshift("Free")

                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[29]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[29] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[28]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[28] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[27]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[27] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[26]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[26] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[14] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[15] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[15]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentyNine = teams[1];

                        teams[1] = teams[16];
                        teams[16] = teams[2];
                        teams[2] = teams[17];
                        teams[17] = teams[3];
                        teams[3] = teams[18];
                        teams[18] = teams[4];
                        teams[4] = teams[19];
                        teams[19] = teams[5];
                        teams[5] = teams[20];
                        teams[20] = teams[6];
                        teams[6] = teams[21];
                        teams[21] = teams[7];
                        teams[7] = teams[22];
                        teams[22] = teams[8];
                        teams[8] = teams[23];
                        teams[23] = teams[9];
                        teams[9] = teams[24];
                        teams[24] = teams[10];
                        teams[10] = teams[25];
                        teams[25] = teams[11];
                        teams[11] = teams[26];
                        teams[26] = teams[12];
                        teams[12] = teams[27];
                        teams[27] = teams[12];
                        teams[12] = teams[28];
                        teams[28] = teams[13];
                        teams[13] = teams[29];
                        teams[29] = teams[14];
                        teams[14] = fixtureFirstTwentyNine;

                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[29]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[28]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[27]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[26]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: green;">${teams[0]}</td>
                                <td>${teams[1]}</td>
                            </tr>
                        </table>
                    `;

                        var fixtureFirstTwentyNine = teams[1];

                        teams[1] = teams[16];
                        teams[16] = teams[2];
                        teams[2] = teams[17];
                        teams[17] = teams[3];
                        teams[3] = teams[18];
                        teams[18] = teams[4];
                        teams[4] = teams[19];
                        teams[19] = teams[5];
                        teams[5] = teams[20];
                        teams[20] = teams[6];
                        teams[6] = teams[21];
                        teams[21] = teams[7];
                        teams[7] = teams[22];
                        teams[22] = teams[8];
                        teams[8] = teams[23];
                        teams[23] = teams[9];
                        teams[9] = teams[24];
                        teams[24] = teams[10];
                        teams[10] = teams[25];
                        teams[25] = teams[11];
                        teams[11] = teams[26];
                        teams[26] = teams[12];
                        teams[12] = teams[27];
                        teams[27] = teams[12];
                        teams[12] = teams[28];
                        teams[28] = teams[13];
                        teams[13] = teams[29];
                        teams[29] = teams[14];
                        teams[14] = fixtureFirstTwentyNine;

                    }
                }
            } else if (teams.length == 30) {
                if (radioValue == 0) {
                    for (var i = 1; i < teams.length * 2 - 1; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[29]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[29] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[28]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[28] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[27]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[27] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[26]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[26] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[14] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[15] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[15]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[2] : teams[29]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[29] : teams[2]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[3] : teams[28]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[28] : teams[3]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[4] : teams[27]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[27] : teams[4]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[5] : teams[26]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[26] : teams[5]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[6] : teams[25]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[25] : teams[6]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[7] : teams[24]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[24] : teams[7]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[8] : teams[23]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[23] : teams[8]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[9] : teams[22]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[22] : teams[9]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[10] : teams[21]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[21] : teams[10]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[11] : teams[20]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[20] : teams[11]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[12] : teams[19]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[19] : teams[12]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[13] : teams[18]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[18] : teams[13]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[14] : teams[17]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[17] : teams[14]}</td>
                            </tr>
                            <tr>
                                <td>${i < teams.length ? teams[15] : teams[16]}</td>
                                <td class="versus" >VS</td>
                                <td>${i < teams.length ? teams[16] : teams[15]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstThirty = teams[1];

                        teams[1] = teams[16];
                        teams[16] = teams[2];
                        teams[2] = teams[17];
                        teams[17] = teams[3];
                        teams[3] = teams[18];
                        teams[18] = teams[4];
                        teams[4] = teams[19];
                        teams[19] = teams[5];
                        teams[5] = teams[20];
                        teams[20] = teams[6];
                        teams[6] = teams[21];
                        teams[21] = teams[7];
                        teams[7] = teams[22];
                        teams[22] = teams[8];
                        teams[8] = teams[23];
                        teams[23] = teams[9];
                        teams[9] = teams[24];
                        teams[24] = teams[10];
                        teams[10] = teams[25];
                        teams[25] = teams[11];
                        teams[11] = teams[26];
                        teams[26] = teams[12];
                        teams[12] = teams[27];
                        teams[27] = teams[13];
                        teams[13] = teams[28];
                        teams[28] = teams[14];
                        teams[14] = teams[29];
                        teams[29] = teams[15];
                        teams[15] = fixtureFirstThirty;
                    }
                } else {
                    for (var i = 1; i < teams.length; i++) {

                        if (i % 2 == 0) {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[1]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[0]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[29]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[28]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[27]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[26]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                        </table>
                    `;
                        } else {
                            main3.innerHTML += `
                        <table>
                        <tr>
                            <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                        </tr>
                            <tr>
                                <td>${teams[0]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[1]}</td>
                            </tr>
                            <tr>
                                <td>${teams[2]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[29]}</td>
                            </tr>
                            <tr>
                                <td>${teams[3]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[28]}</td>
                            </tr>
                            <tr>
                                <td>${teams[4]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[27]}</td>
                            </tr>
                            <tr>
                                <td>${teams[5]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[26]}</td>
                            </tr>
                            <tr>
                                <td>${teams[6]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[25]}</td>
                            </tr>
                            <tr>
                                <td>${teams[7]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[24]}</td>
                            </tr>
                            <tr>
                                <td>${teams[8]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[23]}</td>
                            </tr>
                            <tr>
                                <td>${teams[9]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[22]}</td>
                            </tr>
                            <tr>
                                <td>${teams[10]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[21]}</td>
                            </tr>
                            <tr>
                                <td>${teams[11]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[20]}</td>
                            </tr>
                            <tr>
                                <td>${teams[12]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[19]}</td>
                            </tr>
                            <tr>
                                <td>${teams[13]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[18]}</td>
                            </tr>
                            <tr>
                                <td>${teams[14]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[17]}</td>
                            </tr>
                            <tr>
                                <td>${teams[15]}</td>
                                <td class="versus" >VS</td>
                                <td>${teams[16]}</td>
                            </tr>
                        </table>
                    `;
                        }

                        var fixtureFirstThirty = teams[1];

                        teams[1] = teams[16];
                        teams[16] = teams[2];
                        teams[2] = teams[17];
                        teams[17] = teams[3];
                        teams[3] = teams[18];
                        teams[18] = teams[4];
                        teams[4] = teams[19];
                        teams[19] = teams[5];
                        teams[5] = teams[20];
                        teams[20] = teams[6];
                        teams[6] = teams[21];
                        teams[21] = teams[7];
                        teams[7] = teams[22];
                        teams[22] = teams[8];
                        teams[8] = teams[23];
                        teams[23] = teams[9];
                        teams[9] = teams[24];
                        teams[24] = teams[10];
                        teams[10] = teams[25];
                        teams[25] = teams[11];
                        teams[11] = teams[26];
                        teams[26] = teams[12];
                        teams[12] = teams[27];
                        teams[27] = teams[13];
                        teams[13] = teams[28];
                        teams[28] = teams[14];
                        teams[14] = teams[29];
                        teams[29] = teams[15];
                        teams[15] = fixtureFirstThirty;
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
})

// SHUFFLE

function shuffle(fixture) {

    var currentIndex = fixture.length, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [fixture[currentIndex], fixture[randomIndex]] = [
            fixture[randomIndex], fixture[currentIndex]];
    }

    return fixture;
}
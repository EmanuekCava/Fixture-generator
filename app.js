
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
var teamsCopy = []
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

            for(var i = 1; i <= amount; i++) {
                const separatorClass = document.createElement("div")
                separatorClass.className = "separetor-teams";
                const inputTeam = document.createElement("input")
                inputTeam.type = "text"; 
                inputTeam.className = "team"; 
                inputTeam.autocomplete = "off"; 
                inputTeam.id = `teams${i}`; 
                separatorClass.appendChild(inputTeam)
                form2.appendChild(separatorClass)
            }

            var teamClassLength = form2.querySelectorAll(".team");
            teamClassLength.forEach(item => {
                item.setAttribute("maxlength", "30")
            })
            var teamOne = form2.querySelectorAll("#teams1")
            teamOne.forEach(item => {
                item.focus()
            })

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

            for(var i = 1; i <= amount; i++) {
                teams.push(form2[`teams${i}`].value)
            }

            teamsCopy = shuffle(teams);

            if (teams.length % 2 != 0) {
                teams.unshift("Free")
            }

            var button = document.createElement("button")
            button.innerHTML = "AGAIN"
            button.className = "button-again"
            document.body.appendChild(button)

            button.addEventListener("click", (e) => {
                main3.innerHTML = "";
                teams = [];
                teamsCopy = [];
                button.remove();
                mainTwo(e);
            })

            var proxMain = (teams.length / 2) + 1;
            var beforeProxMain;
            var radioChoose;

            if (radioValue == 0) {
                radioChoose = (teams.length * 2) - 1;
            } else {
                radioChoose = teams.length;
            }

            for (var i = 1; i < radioChoose; i++) {

                var fixtureItems = document.createElement("table")
                fixtureItems.innerHTML += `
                    <tr>
                        <td colspan="3" style="color: green;">MATCHDAY ${i}</td>
                    </tr>
                `;
                main3.appendChild(fixtureItems)

                var actually0 = teams[0]
                var actually1 = teams[1]

                for (var j = 0; j < teams.length / 2; j++) {
                    var matchItem = document.createElement("tr")
                    matchItem.innerHTML += `
                        <td>${i >= teams.length ? teams[0] : teams[1]}</td>
                        <td class="versus" >VS</td>
                        <td>${i >= teams.length ? teams[1] : teams[0]}</td>
                    `;
                    fixtureItems.appendChild(matchItem)
                    teams[1] = teams[teams.length - (j + 1)];
                    if (j == 0) {
                        teams[0] = teams[2];
                    } else {
                        teams[0] = teams[2 + j];
                    }
                }

                teams = teamsCopy;
                teams[0] = actually0;

                beforeProxMain = proxMain;

                for (var k = 0; k < teams.length / 2; k++) {
                    teams[k + 1] = teams[proxMain];
                    if (proxMain == teams.length) {
                        break;
                    }
                    teams[proxMain] = teams[k + 2];
                    proxMain++;
                }

                proxMain = beforeProxMain;
                teams[proxMain - 1] = actually1;
                teamsCopy = teams;
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

    return teams;
}
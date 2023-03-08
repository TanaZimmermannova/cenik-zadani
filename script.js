const salary = () => {
    let wage = Number(prompt("Zadejte hodinovou mzdu"));
    let hours = Number(prompt("Zadejte počet hodin za den"));
    let days = Number(prompt("Zadejte počet pracovních dní v měsíci"));
    let month = wage*hours*days;
    return month;
}

const taxed = () => {
    let plat = salary ();
    let tax1 = Number(prompt("Zadejte procento zdanění"));
    let money = (1-tax1/100)*plat;
    let mzda = document.querySelector (".mzda");
    mzda.textContent = `Vaše měsíční mzda po zdanění je ${money} Kč`;
}

const calculate = () => {
    let number1 = Number(prompt("Zadejte první hodnotu výpočtu"));
    let operation = (prompt("Zadejte matematickou operaci (+, -, *, /"))
    let number2 = Number(prompt("Zadejte druhou hodnotu výpočtu"));
    let vysledek = document.querySelector(".kalkulacka")
    let result;

    if (operation==="+") {
        result = number1 + number2;
    } else if (operation==="-"){
        result = number1 - number2;
    } else if (operation==="*"){
        result = number1 * number2;
    } else if (operation==="/"){
        result = number1 / number2;
    } else {
        alert ("Neplatná matematická operace")
    }

    vysledek.textContent = `výsledek je ${result}.`;
}

const selectPlan = () => {
    let predplatne = Number(prompt("Zadejte číslo předplatného - 1, 2  nebo 3"));
    let vyber1 = document.querySelector("#plan1");
    let vyber2 = document.querySelector("#plan2");
    let vyber3 = document.querySelector("#plan3");

    if (predplatne===1) {
        vyber1.classList.add("plan--selected");
        vyber2.classList.remove("plan--selected");
        vyber3.classList.remove("plan--selected");
    } else if (predplatne===2) {
        vyber1.classList.remove("plan--selected");
        vyber2.classList.add("plan--selected");
        vyber3.classList.remove("plan--selected");
    } else {
        vyber1.classList.remove("plan--selected");
        vyber2.classList.remove("plan--selected");
        vyber3.classList.add("plan--selected");
    }
}
const totalDrinks = () => document.querySelectorAll(".drink").length;

document.addEventListener("input", (event) => {
    calculateForOneDrink();
    calculateTotalDrinks();
    if (
        document.getElementById(`volume${totalDrinks()}`).value &&
        document.getElementById(`abv${totalDrinks()}`).value
    ) {
        createNewDrink();
    }
});

document.addEventListener("click", function (event) {
    if (event.target.matches("#clear")) {
        clearEverything();
    }
    if (event.target.matches("input")) {
        event.target.value = "";
    }
    calculateForOneDrink();
    calculateTotalDrinks();
});

const calculateForOneDrink = () => {
    let toBeCalculated = totalDrinks();
    const innerCalculate = () => {
        if (toBeCalculated > 0) {
            document.getElementById(`result${toBeCalculated}`).innerHTML =
                standardDrinkFormula(
                    parseFloat(document.getElementById(`volume${toBeCalculated}`).value),
                    parseFloat(document.getElementById(`abv${toBeCalculated}`).value)
                );
            toBeCalculated--;
            innerCalculate();
        }
    };
    innerCalculate();
};
const standardDrinkFormula = (volumeInMl, percentage) => {
    const formulaResult = Math.round(volumeInMl * percentage * 0.0789) / 100;
    if (formulaResult) {
        return formulaResult;
    } else {
        return 0;
    }
};

const calculateTotalDrinks = () => {
    let newTotal = 0;
    document
        .querySelectorAll(".result")
        .forEach((element) => (newTotal += parseFloat(element.innerHTML)));
    document.getElementById("total").innerHTML = Math.round(newTotal * 100) / 100;
};

let deleteDrinks = () => {
    if (totalDrinks() > 1) {
        document.getElementById(`drink${totalDrinks()}`).remove();
        deleteDrinks();
    } else return;
};
let clearEverything = () => {
    document.getElementById("volume1").value = "";
    document.getElementById("abv1").value = "";
    deleteDrinks();
    calculateTotalDrinks();
};

const createNewDrink = () => {
    const drinkNumber = totalDrinks() + 1;
    const newDrink = document.createElement("div");
    let previousVolume = 0;
    if (totalDrinks() > 0) {
        previousVolume = document.getElementById(`volume${totalDrinks()}`).value;
    }
    newDrink.classList.add("drink", "contents");
    newDrink.setAttribute("id", `drink${drinkNumber}`);
    newDrink.innerHTML = `
                <input
                    class="volume block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    id="volume${drinkNumber}"
                    type="text"
                    inputmode="decimal"
                    value="${previousVolume}"
                />
                <input
                    class="abv block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    id="abv${drinkNumber}"
                    type="text"
                    inputmode="decimal"
                />
                <div
                    class="result block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    id="result${drinkNumber}"
                >
                    0
                </div>
`;
    document.getElementById("footer").before(newDrink);
};
const firstDrink = () => {
    if (totalDrinks === null) {
        createNewDrink();
    }
};
createNewDrink();

const btn = document.querySelector(".btn");
const resultsDiv = document.querySelector(".results");

btn.addEventListener("click", () => {
    const countPizza = document.querySelector(".count-pizza").value
    const pizza = new Pizza(countPizza);
    const resultPizza = pizza.isCount();
    resultsDiv.insertAdjacentHTML("beforeend",
    `
    <div class="result">
        <h2>Столько нужно для ${countPizza == 1 ? countPizza + " пиццы" : countPizza + " пицц"}</h2>
        <p>Дрожжи: ${resultPizza.droggi}г</p>
        <p>Мука: ${resultPizza.powder}г</p>
        <p>Соль: ${resultPizza.salt}г</p>
        <p>Вода: ${resultPizza.water}г</p>
    </div>
    `);
})

class Pizza {
    count;
    constructor(count) {
        this.count = count;
    }

    isCount() {
        return {
            powder: 202.5 * this.count,
            water: 132.5 * this.count,
            salt: 4 * this.count,
            droggi: (0.4 * this.count).toFixed(2),
        }
    }
}

/*const pizza = new Pizza(3).isCount();
console.log(pizza);*/




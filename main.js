let images = ["./images/dice-1-svgrepo-com.svg",
    "./images/dice-2-svgrepo-com.svg",
    "./images/dice-3-svgrepo-com.svg",
    "./images/dice-4-svgrepo-com.svg",
    "./images/dice-5-svgrepo-com.svg",
    "./images/dice-6-svgrepo-com.svg"
];

let dice = document.getElementById("dice");
let start = document.getElementById("start");
let result = document.getElementById("result");
let arr = document.getElementById("arr");
let avgEl = document.getElementById("avg");
let reload = document.getElementById("reload");
var array = "";
var allNums = [];
var avg = 0;

async function roll() {
    // Ваш код для анимации, может быть асинхронным
    // Например, использование тайм-аута для имитации анимации
    return new Promise(resolve => {
        setTimeout(() => {
            // Ваш код анимации здесь
            dice.classList.add("shake");
            setTimeout(function(){
                    dice.classList.remove("shake");
                },
                1000
            );
            resolve();
        }, 2000); // Пример времени анимации - 1 секунда
    });
}

/*function roll() {
    dice.classList.add("shake");
    setTimeout(function(){
        dice.classList.remove("shake");
        },
        1000
    );
}*/

start.addEventListener("click", async function () {
    let count = Number(document.getElementById("count").value);
    arr.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * 6) + 1;
        await roll(); // Дождаться завершения анимации
        dice.setAttribute("src", images[num-1]);
        allNums.push(num);
        result.innerHTML = "Your roll is " + num;
        if (i < count-1) {
            array += num += ", ";
            arr.innerHTML = array;
        }
        else {
            array += num;
            arr.innerHTML = array;
        }

        let sum = 0;
        for (let i = 0; i < allNums.length; i++) {
            sum += allNums[i];
        }
        avg = (sum/allNums.length);
        avgEl.innerHTML = (avg.toFixed(3)).toString();
    }
});

reload.addEventListener("click", function () {
    window.location.reload()
});
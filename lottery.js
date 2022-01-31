let num = [];
let random_num = '';
let num_of_num = document.querySelector(".need");
let form = document.querySelector("form");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
console.log(num_of_num);
let lottery = () => {
    for(i = 0; i < num_of_need; i++) {
        random_num = Math.floor(Math.random() * 80) + 1;
        for(j = 0;j < num.length; j++) {
            if (num[j] == random_num) {
                num.splice(j, 1);
                i--;
            }
        }
        if (num.length < num_of_need) {
            num.push(random_num);
        }
    }
    console.log(num);
}

form.addEventListener("submit",(e) => {
    num = [];
    num_of_need = num_of_num.value;
    ul.innerHTML = "";
    e.preventDefault();
    lottery();
    num.forEach(value => {
        arr_num = document.createElement("li");
        arr_num.classList.add("num");
        arr_num.textContent = value;
        ul.append(arr_num);
    });
    console.log(num_of_need)
} );

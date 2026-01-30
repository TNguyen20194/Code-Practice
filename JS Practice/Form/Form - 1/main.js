// 0.7428391023847

const generateUniqueString = (length) => {
    return Math.random()
    .toString(36)
    .substring(2, 2 + length)
}

const fruits = ["Apple", "Banada", "Orange"];
const ul = document.querySelector("ul");

fruits.forEach((fruit, index) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    li.id = generateUniqueString(5)

    ul.appendChild(li);
})

console.log(ul)
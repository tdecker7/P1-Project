const sortArray = randomArray(10);

document.addEventListener('DOMContentLoaded', () => {
    const sortList = document.getElementById('sort-list')

    console.log(sortArray);

    buildSortItems(sortList, sortArray);
})

function randomArray(length) {
    return new Array(length).fill(0).map(() => {
        return Math.floor(Math.random() * (length * 2));
    })
}
function buildSortItems(parent, array) {
    const liClasses = ['btn-floating', 'btn-large', 'red'];
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.classList.add(...liClasses);

        li.innerText = array[i];
        parent.appendChild(li);
    }
}
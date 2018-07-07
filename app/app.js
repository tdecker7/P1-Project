const SORTARRAY = randomArray(10);

document.addEventListener('DOMContentLoaded', () => {
    const sortList = document.getElementById('sort-list')

    console.log(SORTARRAY);

    buildSortItems(sortList, SORTARRAY);
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
function sort() {
    const sortListElements = document.getElementById('sort-list').childNodes;
    swapElements(sortListElements[0], sortListElements[1]);
}
function swapElements(elem1, elem2) {
    elem2.classList.add('animated','slideInRight');
    elem1.classList.add('animated', 'slideInLeft');
    elem1.parentNode.insertBefore(elem2, elem1);
    setTimeout( () => { 
        /* wait for animation to finish. Reset classes */
        elem2.classList.remove('slideInRight');
        elem1.classList.remove('slideInLeft');
    }, 1000)
}
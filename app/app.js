const SORTARRAY = randomArray(10);
const SELECTEDSORT = { selected : 'bubble' } // initialize to bubble sort

document.addEventListener('DOMContentLoaded', () => {
    const sortList = document.getElementById('sort-list')

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
    switch (SELECTEDSORT.selected) {
        case 'merge': {
            bubbleSort(sortListElements);
            break;
        }
        case 'selection': {
            console.log('do selectSort');
            selectionSort(sortListElements);
            break;
        }
    }
}
function getSelectedSort() {
    const picker = document.getElementById('picker');
    const radios = picker.getElementsByTagName('input');

    for (let i = 0; i < radios.length; i++) {
         if (radios[i].checked) {
             SELECTEDSORT.selected = radios[i].id;
         }
     }
    console.log(SELECTEDSORT);

}
function swapElementsRebuild(elem1, elem2) {
    // Build function that can swap any two elements. 
    // not just elements side-by-side
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
async function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i -1); j++) {
            let num1 = Number(array[j].innerText);
            let num2 = Number(array[j+1].innerText);
            
            if (num1 > num2) {
                swapElements(array[j], array[j+1]);
                await sleep(1000);
            }
        }
    }
}
async function selectionSort(array) {
    swapElementsRebuild(array[0], array[4]);
}
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
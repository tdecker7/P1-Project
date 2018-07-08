/**
 * TODO: Control Flow {
 *      disable button after sort is pressed
 *      Allow program to re-init new array
 * }
 * TODO: Swapping in Selection {
 *      There seems to be an issue with swapping 
 *      on selection sort. Some elements don't trade 
 *      places.
 * }
 */
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
        case 'bubble': {
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
    const elemRect1 = elem1.getBoundingClientRect();
    const elemRect2 = elem2.getBoundingClientRect();
    const elemOffset1 = elemRect2.left - elemRect1.left;
    const elemOffset2 = elemRect1.left - elemRect2.left;
    // const origElem1 = elemRect1.left;
    // const origElem2 = elemRect2.left;

    let elem2Clone = elem2.cloneNode(true);
    elem2Clone.style.display = 'hidden';
    elem2.parentNode.insertBefore(elem2Clone, elem2);
    elem1.parentNode.insertBefore(elem2, elem1);
    elem2Clone.parentNode.insertBefore(elem1, elem2Clone);
    elem2Clone.parentNode.removeChild(elem2Clone);

    elem2.style.left = elemOffset1;
    elem1.style.left = elemOffset2;
    let inc1 = elemOffset2;
    let inc2 = elemOffset1;
    const incrementer = Math.abs( (elemRect1.left - elemRect2.left) / 100 ); // set interval should run 100 times to take up a second.
    const interval1 = setInterval(moveOne, 10);
    const interval2 = setInterval(moveTwo, 10);

    function moveOne() {
        let left = parseFloat(elem1.style.left, 10);
        if (left >= 0) {
            clearInterval(interval1);
            elem1.style.left = 0;
        } else {
            inc1 += incrementer;
            elem1.style.left = `${inc1}px`;
        }
    }
    function moveTwo() {
        let left = parseFloat(elem2.style.left, 10);
        if (left <= 0) {
            clearInterval(interval2);
            elem2.style.left = 0;
        } else {
            inc2 -= incrementer;
            elem2.style.left = `${inc2}px`;
        }
    }
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
    let length = array.length;
    let min;

    for (i = 0; i < length; i++) {
        min = i;
        
        for (j = i + 1; j < length; j++) {
            let num1 = Number(array[j].innerText);
            let num2 = Number(array[min].innerText);
            if (num1 < num2) {
                min = j;
            }
        }

        if (i != min) {
            swapElementsRebuild(array[i], array[min]);
            await sleep(1000);
        }
    }
}
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
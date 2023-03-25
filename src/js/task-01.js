const categoriesEL = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesEL.length}`);

categoriesEL.forEach(el => {
    const categoryTitle = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;

    console.log(
    `Category : ${categoryTitle}
    Elements : ${elements}`)
});

// const categoriesEl = document.querySelector('#categories')
// console.log(categoriesEl)

// const itemEl = categoriesEl.children.length;
// console.log(`Number of categories: ${itemEl}\n\n`)

// const array = [...categoriesEl.children]
// array.forEach(child => {
//     console.log(`Category: ${child.firstElementChild.textContent}`)
//     console.log(`\tElements: ${child.lastElementChild.children.length}\n\n`)
    
// });

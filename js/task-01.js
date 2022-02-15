const allCategoriesItemSetEl = document.querySelector('#categories')

console.log('Number of categories :>> ', allCategoriesItemSetEl.children.length);

const allEl = allCategoriesItemSetEl.querySelectorAll('.item');

    for (let i = 0; i < allEl.length; i += 1) {
        console.log('Category :>> ', allCategoriesItemSetEl.children[i].firstElementChild.textContent);
        console.log('Element :>> ', allCategoriesItemSetEl.children[i].children[1].children.length);
    };
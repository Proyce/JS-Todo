const form = document.querySelector('.add');
const items = document.querySelector('.todos');
const search = document.querySelector('.search input');

const setTemplate = item => {

    const template = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`;

    items.innerHTML += template;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const item = form.add.value.trim();
    if(item.length){
        setTemplate(item);
        form.reset();
    }
})

items.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

const filteredItem = (searchedItem) => {
    Array.from(items.children)
        .filter((filtered) => !filtered.textContent.toLowerCase().includes(searchedItem))
        .forEach((filtered) => filtered.classList.add('filtered-out'));

    Array.from(items.children)
        .filter((filtered) => filtered.textContent.toLowerCase().includes(searchedItem))
        .forEach((filtered) => filtered.classList.remove('filtered-out'));        
}

search.addEventListener('keyup', () => {
    const searchedItem = search.value.trim().toLowerCase();
    filteredItem(searchedItem);
});
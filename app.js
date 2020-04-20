// Variable 
const input_box = document.querySelector('.input_box');
const add_button = document.querySelector('.add_button');
const delete_button = document.querySelector('.delete_button');
const trash = document.querySelectorAll('.fas.fa-trash');
const list = document.querySelector('ul');
const checkmark = document.querySelectorAll('.checkbox i')
const checkbox = document.querySelectorAll('.checkbox')
const select_all = document.querySelector('#select_all');
const line_through = document.querySelectorAll('a');

console.log(checkbox);
console.log(checkmark);
console.log(trash[0]);

add_button.addEventListener('click', function () {
  // Create li & class
  let item = document.createElement('li');
  item.className = 'list_container';

  // Create item list container class & content
  let item_list_container = document.createElement('div');
  item_list_container.className = 'item_list_container';
  let checkbox = document.createElement('span');
  checkbox.className = 'checkbox';
  let link = document.createElement('a');
  link.setAttribute('href', '#');
  let icon_box = document.createElement('div');
  icon_box.className = 'icon_box';
  let trash = document.createElement('i');
  trash.className = 'fas fa-trash';
  icon_box.appendChild(trash);

  // Append item list content to item list container
  item_list_container.appendChild(checkbox)
  item_list_container.appendChild(link);

  // Append item list container to li
  item.appendChild(item_list_container);

  // Append icon box with icon to li
  item.appendChild(icon_box);

  // Create text Node for a link
  link.textContent = input_box.value

  // Prevents empty input value
  if (item.firstElementChild.firstElementChild.nextSibling.textContent === '') {
    return false;
  }

  // Append li to ul
  list.appendChild(item);
  input_box.value = '';

})


// Select All Checkbox
for (let i = 0; i < checkbox.length; i++) {
  checkbox[0].parentElement.addEventListener('click', function () {
    // Select All Check Box
    checkbox[0].firstElementChild.classList.toggle('active');
    // List Item Check Box
    checkbox[i].firstElementChild.classList.toggle('active');
    console.log(checkbox[0]);
  })
}

// // Hide All Checked Items
// for (let i = 0; i < checkbox.length; i++) {
//   checkbox[0].parentElement.addEventListener('click', function () {
//     // Select All Check Box
//     checkbox[0].firstElementChild.classList.toggle('active');
//     // List Item Check Box
//     checkbox[i].firstElementChild.classList.toggle('active');
//     console.log(checkbox[0]);
//   })
// }

// Individual Checkmark 
for (let i = 0; i < checkmark.length; i++) {
  checkmark[i].parentElement.addEventListener('click', function () {
    checkmark[i].classList.toggle('active');
  })
}

// Clear list
delete_button.addEventListener('click', function () {

})

// Removes individual item item from list
for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener('click', () => {
    trash[i].parentElement.parentElement.remove();
  })
}

// Line Through Function
line_through.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  })
})



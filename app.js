const input_box = document.querySelector('.input_box');
const add_button = document.querySelector('.add_button');
const delete_button = document.querySelector('.delete_button');
const trash = document.querySelectorAll('.fas.fa-trash');
const list = document.querySelector('ul');
const checkmark = document.querySelectorAll('.checkbox i')
const checkbox = document.querySelectorAll('.checkbox')

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

  if (item.firstElementChild.firstElementChild.nextSibling.textContent === '') {
    return false;
  }

  // Append li to ul
  list.appendChild(item);

  input_box.value = '';

  // Console
  // console.log(item.firstElementChild.firstElementChild.nextSibling);
})






for (let i = 0; i < checkmark.length; i++) {
  checkmark
}


// Checkmark 
checkbox.forEach(box => {
  box.addEventListener('click', function () {
    checkmark.forEach(mark => {
      mark.classList.toggle('active');
      console.log(mark);
    })
  })
})






// Clear list
delete_button.addEventListener('click', function () {

})



for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener('click', () => {
    trash[i].parentElement.parentElement.remove();
  })


}
console.log(delete_button);
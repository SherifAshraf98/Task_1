var addbtn = document.getElementById('addbtn');
var numval = document.getElementById('ItemNumber');
var list = document.getElementById('listnum');
var searchbar = document.getElementById('Search');
var listitems = document.getElementsByClassName('list-group-item');
var checkedbox = document.getElementById('checkedbox');

addbtn.addEventListener('click', addbtnclicked)


/**
 * 
 *@function : Add items with entered value by the user when addbtn is clicked
 *@returns : void
 * 
 */

function addbtnclicked(event) {
    var value = numval.value;
    list.innerHTML += `<li class="list-group-item">${value}</li>`;
    numval.value=null;

}



searchbar.addEventListener('input', searchinput)

/**
 * 
 *@function : Search for entered value by user
 *@returns : void
 * 
 */
function searchinput(event) {
    var enteredvalue = searchbar.value;
    for (var i = 0; i < listitems.length; i++)
     {
        if (!(listitems[i].textContent.includes(enteredvalue))) {
            listitems[i].style.display = "none";
        }
        else {
            listitems[i].style.display = "initial";
        }
    }
}



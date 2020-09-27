//edit user
var btnEdit = document.querySelectorAll('.btn-edit')
let popupEdit = document.querySelector('#popup-edit')
let btnCloseEdit = document.querySelector('.btn-close-edit')

//add user
var btnAdd = document.querySelector('#btn-add')
let popupAdd = document.querySelector('#popup-add')
let btnCloseAdd = document.querySelector('.btn-close-add')

function showPopup(popup){
    if(popup.classList.contains('popup-active')){
        popup.classList.remove('popup-active')
    }
    else{
        popup.classList.add('popup-active')
    }
}

//edit
for(let i = 0; i < btnEdit.length; i++){
    btnEdit[i].onclick = () => {
        showPopup(popupEdit)
    }
}

btnCloseEdit.onclick = () => {
    showPopup(popupEdit)
}

//add
btnAdd.onclick = () => {
    showPopup(popupAdd)
}
btnCloseAdd.onclick = () => {
    showPopup(popupAdd)
}
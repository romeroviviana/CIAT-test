//get users
$(function(){
    getUsers();    
});

function getUsers(){
    $.ajax({
        url: 'data.php',
        type: 'POST',
        success: function(res){
            var js = JSON.parse(res);
            var user = "";
            for(var i = 0; i < js.length; i++){
                user+='<div class="row row-text">';
                user+='<div>'+ js[i].id+'</div>';
                user+='<div>'+ js[i].first_name +' '+ js[i].last_name +'</div>';
                user+='<div class="col-action"><button class="btn btn-edit" onclick="updateUser('+ js[i].id+')"><i class="fa fa-pencil" aria-hidden="true"></i></button></div>';
                user+='</div>';
            }
            $('#list-user').html(user);
        }
    });
}

// add user
$('#btn-add-user').click(function(){
    var req = false
    $('form#form-add').find('input').each(function(){
        if($(this).val() == ""){            
            req = true
        } 
    });
    if(!req){
        $.ajax({
            url: 'add.php',
            type: 'POST',
            data: $('#form-add').serialize(),
            success: function(res){            
                $('#res-add').html(res);
                getUsers()
            }
        });
    }
    else{
        $('#res-add').html('Fill in all fields');
    }
})

// update user
function updateUser(id){
    showPopup(popupEdit)

    $.ajax({
        url: 'update.php',
        type: 'POST',
        data: "id="+id,
        success: function(res){
            var js = JSON.parse(res);
            var user = "";
            for(var i = 0; i < js.length; i++){
                $('#id-user').val(js[i].id);
                $('#first-name').val(js[i].first_name);
                $('#last-name').val(js[i].last_name);
                $('#email').val(js[i].email);
                $('#username').val(js[i].nameuser);
                $('#Manager').prop("checked", false);
                $('#Member').prop("checked", false);
                $('#Contributor').prop("checked", false);
                var role = '#'+js[i].role                
                $(role).prop("checked", true);
                var active = '#'+js[i].active                
                $(active).prop("checked", true);
            }            
        }
    });
}

$('#btn-update').click(function(){
    var req = false
    $('form#form-edit').find('input').each(function(){
        if($(this).val() == ""){            
            req = true
        } 
    });
    if(!req){
        $.ajax({
            url: 'update-user.php',
            type: 'POST',
            data: $('#form-edit').serialize(),
            success: function(res){            
                $('#res-update').html(res);
                getUsers()
            }
        });
    }
    else{
        $('#res-update').html('Fill in all fields');
    }
    
})

// delete user
$('#btn-delete').click(function(){
    $.ajax({
        url: 'delete.php',
        type: 'POST',
        data: $('#form-edit').serialize(),
        success: function(res){            
            $('#res-update').html(res);
            getUsers()
        }
    });
})


// javascript
//edit user
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
    let resUpdate = document.querySelector('#res-update')
    let resAdd = document.querySelector('#res-add')
    resUpdate.innerHTML = "";
    resAdd.innerHTML = "";
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
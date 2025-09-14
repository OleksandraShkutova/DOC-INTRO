'use strict';

const user = {
    firstName: 'Vika',
    lastName: 'Lyn',
    age: 21,
    photoSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
};

const userCardEl = document.createElement('article');
userCardEl.classList.add('userCard');
document.body.append(userCardEl);

//const userImg = createImg(user);
//const userInfoEl = createUserInfo(user);
//const trashEl = createTrashEl(user);
//userCardEl.append(userImg, userInfoEl, trashEl);

userCardEl.append(createImg(user), createUserInfo(user), createTrashEl());

function createImg ({firstName, lastName, photoSrc}){
    const userImg = document.createElement('img');
    userImg.src = photoSrc;
    userImg.alt = `${firstName} ${lastName}`;
    userImg.classList.add('userImg');
    return userImg;
}

function createUserInfo({firstName, lastName, age}){
    const userInfoEl = document.createElement('div');
    userInfoEl.classList.add('userInfo');
    
    const userNameEl = document.createElement('p');
    userNameEl.classList.add('userName');
    userNameEl.textContent = `${firstName} ${lastName}`;
    userInfoEl.append(userNameEl);

    const userAgeEl = document.createElement('p');
    userAgeEl.classList.add('userAge');
    userAgeEl.textContent = `${age} рік`;
    userInfoEl.append(userAgeEl);

    return userInfoEl;
}

function createTrashEl(){
    const trashEl = document.createElement('i');
    trashEl.classList.add('fa-solid');
    trashEl.classList.add('fa-trash');
    trashEl.classList.add('trashIcon');
    return trashEl;
}
function deleteUser (e){
    //uaeCard.remove();
    //e.target.parentElement.remove()
    e.target.closest('body').remove();
};

trashEl.onclick = deleteUser;




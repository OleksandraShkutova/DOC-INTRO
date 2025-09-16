//1,2.3

/*const btn = document.querySelector('.btn');
const img = document.querySelector('.img');

const clickHandler = function(e){
    btn.textContent = 'new content';
    btn.style.backgroundColor = 'blue';
    img.src = 'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg';
    img.alt = 'nature';
};

btn.addEventListener('click', clickHandler);
*/

const user = {
    firstName: 'Test',
    lastName: 'Testovych',
    profilePhoto: 'https://images.pexels.com/photos/17656028/pexels-photo-17656028.jpeg',
    birthday: new Date('2000-05-16'),
    nickname: 'super dev',
    likesCount: 10,
};

const btn = document.querySelector('button');
btn.classList.add('btn');

const userCardEl = document.createElement('article');
document.body.append(userCardEl);

function clickBtn(e){
    userCardEl.classList.add('userCard');
    userCardEl.append(userImg, userInfoEl, likesEl);
};
btn.onclick = clickBtn;

const userImg = createImg(user);
const userInfoEl = createUserInfo(user);
const likesEl = createLikesEl(user);

function createImg ({firstName, lastName, profilePhoto}){
    const userImg = document.createElement('img');
    userImg.src = `${profilePhoto}`;
    userImg.alt = `${firstName} ${lastName}`;
    userImg.classList.add('userImg');
    return userImg;
};

function createUserInfo({firstName, lastName, birthday, nickname}){
    const userInfoEl = document.createElement('div');
    userInfoEl.classList.add('userInfo');

    const userNickname = document.createElement('p');
    userNickname.classList.add('userNickname');
    userNickname.textContent = `${nickname}`;
    userInfoEl.append(userNickname);
    
    const userNameEl = document.createElement('p');
    userNameEl.classList.add('userName');
    userNameEl.textContent = `${firstName} ${lastName}`;
    userInfoEl.append(userNameEl);

    const userBirthday = document.createElement('p');
    userBirthday.classList.add('userBirthday');
    userBirthday.textContent = `${birthday}`;
    userInfoEl.append(userBirthday);

    function userBirthdayMouseMoveHandler(e) {
        let age = new Date().getFullYear() - user.birthday.getFullYear();
        userBirthday.textContent = age;
        //моливо є щось на подобі classList.toggle, 
        //щоб повністю є заміняти, а лише мерехтіло при наведенні. 
    };
    userBirthday.addEventListener('mousemove', userBirthdayMouseMoveHandler);

    return userInfoEl;
};

function createLikesEl({likesCount}){
    const likesEl = document.createElement('div');
    likesEl.classList.add('likesBlock');

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular');
    likeIcon.classList.add('fa-heart');
    likesEl.append(likeIcon);

    const likesCountEl = document.createElement('p');
    likesCountEl.classList.add('likesCount');
    likesCountEl.textContent = `${likesCount}`;
    likesEl.append(likesCountEl);
    
    function changeColorLike (e){
        likeIcon.style.backgroundColor = 'red';
    };
    likeIcon.onclick = changeColorLike;

    return likesEl;
};
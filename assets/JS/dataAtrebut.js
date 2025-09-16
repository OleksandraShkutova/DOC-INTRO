
const colorBtn = document.querySelectorAll('section > button');

function changeColorBtn (e) {
    document.body.style.backgroundColor = e.target.dataset.color;
};

colorBtn.forEach(b => (b.onclick = changeColorBtn));



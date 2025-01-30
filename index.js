
const btnAjtAuPanier = document.getElementById('btn1');
const btnAjtAuPanier2 = document.getElementById('btn2');
const btnAjtAuPanier3 = document.getElementById('btn3');
console.log(btnAjtAuPanier);
console.log(btnAjtAuPanier2);
console.log(btnAjtAuPanier3);

btnAjtAuPanier.addEventListener('click', function() {
    alert('Harry Potter 1 ajouté au panier !');
});

btnAjtAuPanier2.addEventListener('click', function() {
    alert('Harry Potter 2 ajouté au panier !');
});

btnAjtAuPanier3.addEventListener('click', function() {  
    alert('Harry Potter 3 ajouté au panier !');
});

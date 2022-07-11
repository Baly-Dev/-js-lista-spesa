// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
// gli elementi della lista individualmente con un ciclo while.

const shoppingList = ['Acqua', 'Pasta integrale', 'Arance', 'Carne km0', 'Verdura bio']
let i = 0

while (i < shoppingList.length){
    document.getElementById('shoppingList').innerHTML += `<li class="list-group-item bg_primary text-white br-rimary border-3 mb-2 rounded fs-5">${shoppingList[i]}</li>`
    i++
}
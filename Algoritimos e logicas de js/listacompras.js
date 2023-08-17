let items = []
for (let item = 0; item < 10; item++) {
    let itemName = prompt ("Ecreva o item numero "+ (item + 1))
   items[item] = itemName
}
alert(items)
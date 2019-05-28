function newItem() { /*функция */                               /*var для введения переменных*/
    var item = document.getElementById("input").value;  /*применяются переменные.
    value - значение с которого все будет начинаться*/
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));/*чтобы создать текстовый узел переменной,
    для которого установлено значение. Определяет отдельный элемент списка*/
    ul.appendChild(li); /*соединяет li с вхожным текстом в ul*/
    document.getElementById("input").value = ""; /*позваляет при нажатии удалить выбранный элеммент*/
    li.onclick = removeItem; /*позволяет при нажатии на клавишу enter добавлять в список*/
}
document.body.onkeyup = function(e) { /*удаление элемента */
    if (e.keyCode == 13) {/*удаление 13-это прибавить или удалить (+ или -) означает это число */
        newItem();
    }
};
function removeItem(e) {                           /*удаление (е)*/
    e.target.parentElement.removeChild(e.target);
}
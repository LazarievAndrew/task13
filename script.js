// Правильное обращение.
// Написать функцию, которая будет принимать строку с Ф.И.О
// и будет возвращать Ф.И.О в правильном регистре. 
// Ф.И.О - нужно запросить у пользователя.

var name = prompt('Введите фамилию имя отчество:');

function correctEntry(x){

    var arr = x.split(' ');

    var newArr = arr.map(function(item){
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() ;
    })
    
    newArr = newArr.join(' ');

    return newArr;
}

alert(correctEntry(name));
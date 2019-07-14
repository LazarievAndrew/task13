// Правильное обращение.
// Написать функцию, которая будет принимать строку с Ф.И.О
// и будет возвращать Ф.И.О в правильном регистре. 
// Ф.И.О - нужно запросить у пользователя.

var name = prompt('Введите фамилию имя отчество:');

function correctEntry(x){

    var arr = x.split(' ');

    
    // Вариант через map:

    // var newArr = arr.map(function(item){
    //     return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() ;
    // })
    // var str = newArr.join(' ');
    

    //Через цикл:

    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase() ;
    }
    
    var str = arr.join(' ');

    return str;
}

alert(correctEntry(name));
// Правильное обращение.
// Написать функцию, которая будет принимать строку с Ф.И.О
// и будет возвращать Ф.И.О в правильном регистре. 
// Ф.И.О - нужно запросить у пользователя.

var name = prompt('Введите фамилию имя отчество:');

function properTreatment(x){

    var name1 = '';
    var n;

    for (var i = 0; i < x.length; i++ ){

        if (!i || !isNaN(+x[i - 1])){  //как вариант после || x[i - 1] === ' '

            n = x[i].toUpperCase();

        } else {

            n = x[i].toLowerCase();

        }

        name1 += n;
    }

    return name1;
}

alert (properTreatment(name));
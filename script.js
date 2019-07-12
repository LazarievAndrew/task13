// Правильное обращение.
// Написать функцию, которая будет принимать строку с Ф.И.О
// и будет возвращать Ф.И.О в правильном регистре. 
// Ф.И.О - нужно запросить у пользователя.

function properTreatment(){

    var name = prompt('Введите фамилия имя отчество:');
    var name1 = '';
    var n = '';

    for (var i = 0; i < name.length; i++ ){

        if (i === 0){

            n = name[i].toUpperCase();

        } else if (name[i - 1] === ' ') {

            n = name[i].toUpperCase();

        } else {

            n = name[i].toLowerCase();

        }

        name1 += n;
    }

    alert (name1);
}

properTreatment();
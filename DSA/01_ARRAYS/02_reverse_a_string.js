//create a function that reverses a string
//'Hi my name is Andrei' should be:
//'ierdnA si eman ym iH!

function reverse(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Hmm thats not good';
    }

    const backwards = [];
    const totalItems = str.length -1;

    //en sağdan en sola doğru gidiyoruz
    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    var result = backwards.join('');
    console.log(result);
    return result;
}

function reverse2(str) {
    var result  = str.split('').reverse().join('');
    console.log(result);
    return result;
}

const reverse3 = str => str.split('').reverse().join('');

reverse('Hi my name is Andrei');

reverse2('Hi my name is Andrei');

var r3 = reverse3('Hi my name is Andrei');

console.log(r3);
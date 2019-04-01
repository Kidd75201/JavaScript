var arr = [
    'John'
    , 'Bob'
    , 'Mary'
    , 10
    , true
    , [1,2,3]
    , function(name) {
        return 'Hello ' + name;
    }

];

//console.log(arr[6](arr[0]));

// array constructor

var array2 = new Array(1, 'John', false);

//console.log(array2);

var colors = ['white', 'black', 'brown'];

colors.push('red');
colors.unshift('blue');
colors.sort();
colors[1] = 'yellow';

// verify the index # of item, will return -1 if it does not exist
console.log(colors.indexOf('orange'));

// add item if equals to -1, does not exist
if (colors.indexOf('purple') === -1) {
    
    colors.push('purple');
    console.log(colors);
}

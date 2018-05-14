'use strict';
function countingSheep(sheep) {
    if(sheep === 0) {
        return;
    }
    console.log(sheep + " - Another sheep jump over the fence");
    return countingSheep(sheep -1);
};

//countingSheep(4);

function double(arr) {
    if (arr.length === 0) {
        return [];
    }
    const current = arr[0];
    return [arr[0]*2, ...double(arr.slice(1))];   
}

//console.log(double([1,2,3]));
//2,4,6
function reverse(string) {
    if (string.length === 0) {
        return "";
    }
    return reverse(string.slice(1)) + string[0];
}

//console.log(reverse('hello'));
//olleh
function triangleNum(num) {
    if (num === 1) {
        return 1;
    }
    return triangleNum(num-1)+num;
}

//console.log(triangleNum(5));
//15
function splitter(string, char, num=0, holdNum=0, arr=[]) {
    if (string.length === num-1) {
        if (string[num-2] === char) {
            return arr;
        }
        else return [...arr, string.slice(holdNum+1, num)];
    }
    if (char === string[num]) {
        if (holdNum === 0) {
            arr = [...arr, string.slice(holdNum, num)]
        }
        else {
            arr = [...arr, string.slice(holdNum+1, num)]
        }
        holdNum = num;
    }
    num++;
    return splitter(string, char, num, holdNum, arr);
}

//console.log(splitter('hello there', ' '));
// ['hello','there']

function binaryConvert(num) {
    if (num === 0) {
        return '';
    }
    const binary = (num % 2).toString();
    return binary + binaryConvert(Math.floor(num/2));
}

//console.log(binaryConvert(25));
//11001

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1)
}

//console.log(factorial(3));
//6

function fib(num) {
    if (num < 2) {
        return num;
    }
    return fib(num-1) + fib(num-2)
}

//console.log(fib(7))
//13

function anagram(word, result=[], prefix='') {
    if (word.length === 0) {
        result.push(prefix);
        return result;
    }
    for (let i = 0; i < word.length; i++) {
        anagram((word.slice(0, i) + word.slice(i+1)), result, prefix + word[i]);
    }
    return result;
}

//console.log(anagram('word'));
// 24 words...

const facebookHierarchy = [
    {id: 'Zuckerberg', parent: null},
    {id: 'Schroepfer', parent: 'Zuckerberg'},
    {id: 'Bosworth', parent: 'Schroepfer'},
    {id: 'Steve', parent: 'Bosworth'},
    {id: 'Kyle', parent: 'Bosworth'},
    {id: 'Schrage', parent:'Zuckerberg' },
    {id: 'VanDyck', parent: 'Schrage'},
    {id: 'Sandberg', parent:'Zuckerberg'}
]

function numToSpace(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(' ');
    }
    return arr.join('');
}

// ==============================
function traverse(facebookHierarchy, parent, inc=0) {
    inc++;
    facebookHierarchy.filter((item) => item.parent === parent)
                   .forEach(item => {console.log(numToSpace(inc),item.id), traverse(facebookHierarchy, item.id, inc)});
}
traverse(facebookHierarchy, null);
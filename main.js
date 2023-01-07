"use strict";
const button = document.getElementById('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const root1 = document.getElementById('root1');
const root2 = document.getElementById('root2');
const clear = document.getElementById('clear');

root1.innerHTML = get()['id1'];
root2.innerHTML = get()['id2'];

button.addEventListener('click', () => {
    set('id1', input1.value);
    set('id2', input2.value);
});

clear.addEventListener('click', () => {
    cookieClear('id1');
    cookieClear('id2');
});

function set(key, value) {
    document.cookie = key + "=" + value;
}

function get() {
    let r = document.cookie.replace(/ /g, "");
    r = r.split(";");

    let array = [];
    r.forEach(value => {
        let content = value.split('=');

        value = value.substring(0, value.indexOf('='))
        array[value] = content[1];
    });

    return array;
}

function cookieClear(id) {
    document.cookie = `${id}=; max-age=0`;
}
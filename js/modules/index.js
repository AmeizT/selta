/*

* Selta Digital Studio Scripts 

*/

function _(id) { return document.getElementById(id); }

export function draw(e) { 
    e.preventDefault();
    return (
        _('drawer').classList.toggle('active'),
        _('burger').classList.toggle('active')
    ); 
}


let age = 25;
age += 10;
console.log(age += 5);


let person = 'he\'s a man';
console.log(person);




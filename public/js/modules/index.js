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





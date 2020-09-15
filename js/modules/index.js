// export const index = document.title = 'Beyond Brilliance';
// // export const about = document.title = 'Multidisciplinary design & development agency';
// // export const contact = document.title = 'Contacts | Selta Digital Studio';


export function draw(e) 
{ 
    e.preventDefault();
    return (
        document.querySelector('#drawer').classList.toggle('active')
    ); 
}

let slideIndex = 1;
showSlides(slideIndex);

export function plusSlides(n) {
    showSlides(slideIndex += n);
}

export function currSec(n) {
    showSlides(slideIndex = n);
}

export function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("section");
    let pointers = document.getElementsByClassName("pointer");

    n > slides.length ? slideIndex = 1 : '';
    n < 1 ? slideIndex = slides.length : '';
    
    for (var value of slides) {
        value.style.display = 'none';
    }

    for (var el of pointers) {
        el.className = el.className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "grid";
    pointers[slideIndex - 1].className += " active";
}




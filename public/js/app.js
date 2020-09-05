estimate = () => {
    
    let estimator = document.getElementById('esty');
    let err = document.querySelector('.error');
    
    if (isNaN(estimator.value)) {
        err.innerHTML = 'Type a valid number';
    } else {
        err.innerHTML = '';
    }
}
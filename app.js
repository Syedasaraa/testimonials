const slide = document.querySelector('.slider').children;
const indicator = document.querySelector('.indicator').children;

for (let i = 0; i < indicator.length; i++) { 
    indicator[i].addEventListener("click", function () {
        for (let j = 0; j < indicator.length; j++){
            indicator[j].classList.remove('active');
            slide[j].classList.remove('active');

        };
        indicator[i].classList.add('active');
        slide[i].classList.add('active');
    })
}


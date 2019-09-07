let slider = document.querySelector('.new-card-wrap');   // обертка сладера 
let sliderElems = document.querySelectorAll('.new-card');    // масссив блоков слайдера

let leftArrow = document.querySelectorAll('.arrow-left');        // стрелка влево
console.log(leftArrow);
let rightArrow = document.querySelectorAll('.arrow-right');      // стрелка вправо

let px = /px/;        // хранит регулярное выражение
let margin0 = /0px /;  
// Бордер задать вручную!!!!!!!!
let border = 1;

// получает значение свойства max-width обертки слайдера
let widthSlider = window.getComputedStyle(slider).getPropertyValue('max-width');  
widthSlider = widthSlider.replace(px, '');   // удаляет px из значения переменной, оставляя только значение

// получает значение свойства max-width элемента слайдера
let widthSliderElems = window.getComputedStyle(sliderElems[0]).getPropertyValue('max-width');
widthSliderElems = Number(widthSliderElems.replace(px, '')); // удаляет px из значения переменной, оставляя только значение

// получает значение отступой справа и слева у элементов слайда
let marginSliderElems = window.getComputedStyle(sliderElems[0]).getPropertyValue('margin');

// убирает px и преобразует в число
marginSliderElems = marginSliderElems.replace(margin0, '');
marginSliderElems = Number(marginSliderElems.replace(px, ''));


// в итоге ширина элемента слайда равна ширина + отстутп 
widthSliderElems = widthSliderElems + (marginSliderElems * 2) + (border * 2);
 

let count = widthSlider / widthSliderElems;  // число выводимых блоков и прокручиваемых блоков
count = Math.round(count)  // округляет до ближайшего целого
console.log(count);



window.addEventListener('load', function() {      // когда все прогружено
    let position = 0; // позиция прокрутки   
    leftArrow.forEach(function(arrow) {     // назначаем прослушивание на все кнопки коллекции
        arrow.addEventListener('click', function (){   // сдвиг влево
        position += widthSliderElems * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0)
        sliderElems[0].style.marginLeft = position + 'px';
        console.log(position + 'left');
        });              
    });
        rightArrow.forEach(function(arrow) {          // назначаем прослушивание на все кнопки коллекции
            arrow.addEventListener('click', function() {  // сдвиг вправо
            position -= widthSliderElems * count;
            // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
            position = Math.max(position, -widthSliderElems * (sliderElems.length - count));
            sliderElems[0].style.marginLeft = position  + 'px'; 
            console.log(position + 'right');
        });
    });
});

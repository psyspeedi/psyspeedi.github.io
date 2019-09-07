let slider = {
    item: document.querySelector('.new-card'),    // итемы слайдера, нужна ширина и маржин чтобы знать на сколько двивать -->
    sliderWrap: document.getElementById('slider'),   // --> сам слайдер
    itemSum: document.querySelectorAll('.new-card').length,  // длина коллекции слайдов
    left: 0,   // отступ влево (не изменять)
    border: 1,   // если у блоков есть бордер вписать значение из css, если нет выставить 0
    itemView: 4, // число выводимых изначально элементов, вписать
    
    init() {
        this.itemWidth = window.getComputedStyle(this.item).getPropertyValue('max-width');   // получаем максимальную ширину итемов слайда
        this.itemMargin = window.getComputedStyle(this.item).getPropertyValue('margin');  // получаем отступы
        console.log(this.itemWidth);
        console.log(this.itemMargin);
    },
    calcItemWidth() {
        // получаем значени свойства в виде 'NUMBERpx'
        itemWidth = window.getComputedStyle(this.item).getPropertyValue('max-width');
        let px = /px/;
        // отбрасываем лишнее и получаем число
        itemWidth = Number(itemWidth.replace(px, ''));
        console.log(itemWidth);
        return itemWidth;
    },            
    calcItemMargin() {
        // получаем значени свойства в виде '0px NUMBERpx' данное условие работает при условии -->
        // --> что маржа сверху и снизу равна нулю, только маржин по бокам указываем
        itemMargin = window.getComputedStyle(this.item).getPropertyValue('margin');
        let margin0 = /0px /;
        let px = /px/;
        // отбрасываем лишнее и получаем число
        itemMargin = itemMargin.replace(margin0, '');
        itemMargin = Number(itemMargin.replace(px, ''));
        console.log(itemMargin);
        return itemMargin * 2;
    },

    /**
     * считаем шаг прокрутки
     */

    calcStep() {
        let step = this.calcItemWidth() + (this.border * 2) + this.calcItemMargin();
        return step;
    },
    calcStepLost() {
        let stepLost = (this.itemSum - this.itemView) * this.calcStep();
        return stepLost;
    },
    /**
     * назначает прослушку на все левые кнопки
     */
    allLeftArrow() {
        this.leftArrow = document.querySelectorAll('.arrow-left');   // все кнопки влево [коллекция]
        this.leftArrow.forEach(function(arrow) {
            arrow.addEventListener('click', function() {
                slider.moveLeft();
                console.log('sdsd')
            });
        });
    },
    /**
     * назначает прослушку на все правые кнопки
     */
    allRightArrow() {
        this.rightArrow = document.querySelectorAll('.arrow-right');  // все кнопки вправо [коллекция]
        this.rightArrow.forEach(function(arrow) {
            arrow.addEventListener('click', function() {
                slider.moveRight();
                console.log('sdsd')
            });
        });
    },
    moveLeft() { 
        this.left = this.left + this.calcStep();
        if (this.left > 0) {
            this.left = -this.calcStepLost();
        };
        this.sliderWrap.style.left = this.left + 'px';
    },

    moveRight() {
        this.left = this.left - this.calcStep();
        if (this.left < -this.calcStepLost()) {
            this.left = 0;
        };
        this.sliderWrap.style.left = this.left + 'px';
    },
};
slider.init();
slider.allRightArrow();
slider.allLeftArrow();


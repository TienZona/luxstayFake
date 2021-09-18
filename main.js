//Search header 
const search_Bar = document.querySelector('.header__search-bar');
const search_bar_input = document.querySelector('.header__search-input');
const search_bar_icon = document.querySelector('.header__search-bar-icon');
search_bar_input.addEventListener('click',function(e){
    search_Bar.style.boxShadow = 'inset 0 0 0 2px rgb(0 0 0 / 14%)';
    search_Bar.style.transition = '0.1s';
    e.stopPropagation()
})
document.onclick = function(e){
    search_Bar.style.boxShadow = 'none';
    search_Bar.style.transition = '0';
}
//Quantity header

const searchQuantity = document.querySelector('.header__search-quantity');
const searchQuantityChoice = document.querySelector('.quantity__choose');

searchQuantity.addEventListener('click', function(e){
    searchQuantity.classList.add('header__search-quantity--active');
    searchQuantityChoice.style.display = 'block';
    searchQuantityChoice.style.animation = 'fadeIn ease-in .3s';
    e.stopPropagation()

})


searchQuantityChoice.addEventListener('click', function(e){
    searchQuantityChoice.style.display = 'block';
})

document.addEventListener('click',function(e){
    searchQuantity.classList.remove('header__search-quantity--active');
    searchQuantityChoice.style.animation = 'fadeOut ease-in-out .3s';
    setTimeout(() => {
    searchQuantityChoice.style.display = 'none';
    }, 300);
})

// Search header quantity
const quantityChooses = document.querySelectorAll('.quantity__item-choice');
const amountOfPeople = document.querySelector('.header__search-text');
const deleteChoose = document.querySelector('.quantity__choose-delete');

deleteChoose.addEventListener('click', function(e){
    for(quantityChoose of quantityChooses){
        const blockMinus = quantityChoose.querySelector('.quantity__item-btn');
        spanAmount = quantityChoose.querySelector('.quantity__item-amount');
        blockMinus.classList.add('quantity__item-btn---hidden');
        quantityNew(spanAmount, 0, 0)
    }
    amountOfPeople.innerHTML = `<a class="header__search-text">Số khách</a>`
    quantityClick();
})
function quantityClick(){
    let quantity = 0;
    for(quantityChoose of quantityChooses){
        const minusBtn = quantityChoose.querySelector('.quantity__item-btn-minus');
        const addBtn = quantityChoose.querySelector('.quantity__item-btn-add');
        const blockMinus = quantityChoose.querySelector('.quantity__item-btn');
        const spanAmount = quantityChoose.querySelector('.quantity__item-amount');
        let count = spanAmount.innerHTML;
        minusBtn.addEventListener('click', function(e){
            if(count > 0) {
                count--;
                quantity--;
            }
            if(count <= 0){
                blockMinus.classList.add('quantity__item-btn---hidden');
            }
            quantityNew(spanAmount, count, quantity)
        })
        addBtn.addEventListener('click', function(e){
            count++;
            quantity++;
            blockMinus.classList.remove('quantity__item-btn---hidden');
            quantityNew(spanAmount, count, quantity)
        })
    
    }
}
quantityClick();


function quantityNew(span,count,quantity){
    span.innerHTML = count;
    amountOfPeople.innerHTML = `<a class="header__search-text">${quantity} khách</a>`
}









//btn__setting active

const settings = document.querySelectorAll('.header__list-item-btn');
const btn__settings = document.querySelectorAll('.btn__setting');
const modalHeader = document.querySelector('.modal__header');

settings.forEach(function(setting, index){
    setting.addEventListener('click',function(e){
    const btnSettingActive = this.querySelector('.btn__setting.btn__setting--active');
        btn__settings.forEach(function(btn__setting, index){
            if(btnSettingActive === btn__setting){
                btn__setting.classList.remove('btn__setting--active');
                btn__setting.style.animation = 'fadeUp ease-in-out .3s';
            }else {
                hiddenSetting(btn__setting);
            }
        })
        e.stopPropagation();
    })
})

$(window).resize(function(){
    var width = $(window).width();
    if(width < 900){
        modalHeader.addEventListener('click', function(e){
            btn__settings.forEach(function(btn__setting, index){
                hiddenSetting(btn__setting);
            })
            e.stopPropagation();
        })

    }
})

function hiddenSetting(btn__setting){
    btn__setting.style.animation = 'fadeDown ease-in-out .3s';

    setTimeout(() => {
           btn__setting.classList.add('btn__setting--active');
    }, 300);
}

// menu setting

const menu = document.querySelector('.bars');
const modal = document.querySelector('.modal');


menu.addEventListener('click', function(e){
    modal.classList.remove('display--none');
    modalHeader.style.animation = 'fadeInLeft ease-in-out .3s';
    e.stopPropagation()
})

document.addEventListener('click', function(e){
    fadeOutModal();
})

const modalClose = document.querySelector('.modal__close');
modalClose.addEventListener('click', function(e){
    fadeOutModal();
})

function fadeOutModal(){
    modalHeader.style.animation = 'fadeOutLeft ease-in-out .3s';
    setTimeout(() => {
        modal.classList.add('display--none');
        btn__settings.forEach(function(btn__setting, index){
            hiddenSetting(btn__setting);
        })
    }, 300);
}



//slider active 

// slider 
// slick 

var numberSlider = 0;
$(window).resize(function(){
    const sliderHeight = document.querySelector('.slider');
    const sliderBtns = document.querySelectorAll('.slider button.slick-arrow');
    // Lấy thông số
    var width = $(window).width();
    var height = $(window).height();
    var height = width / 4.2;
    sliderHeight.style.height = `${height}px`;
    sliderBtns.forEach(function(sliderBtn, index){
        sliderBtn.style.top = `${0.75 * height}px`;
        sliderBtns[index].style.left = `${0.9 * width - 20*index}px`;
    })
});

$(document).ready(function(){

    $('.slider__img').slick();
    $('.prominent__list-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    $('.suggest__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    $('.explore__list-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    $('.manual__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
});

   
// locate js




const btnLeft = document.querySelector('.navbar__btn--left');
const btnRight = document.querySelector('.navbar__btn--right');
const pages = document.querySelectorAll('.navbar__page');
const numberList = document.querySelector('.navbar__number-list');
var locate = 0;
btnRight.addEventListener('click', function(e){
    pages[locate].classList.remove('navbar__page--active');
    locate++;
    pages[locate].classList.add('navbar__page--active');
    if(locate > 0){
        btnLeft.classList.remove('display--none');
    }
    if(locate > 4) {
        if(parseInt(pages[4].innerHTML) < 30){
            pages[locate].classList.remove('navbar__page--active');
            locate = 0;
            pages[locate].classList.add('navbar__page--active');
            for(page of pages){
                page.innerHTML = parseInt(page.innerHTML)+5;
            }
        }else{
            btnRight.classList.add('display--none');
        }
    }
})
btnLeft.addEventListener('click',function(e){
    pages[locate].classList.remove('navbar__page--active');
    if(locate > 0) locate--;
    pages[locate].classList.add('navbar__page--active');
    if(locate < 30 ){
        btnRight.classList.remove('display--none');
    }
    if(locate == 0) {
        if(parseInt(pages[0].innerHTML) > 5){
            pages[4].classList.add('navbar__page--active');
            pages[0].classList.remove('navbar__page--active');
            for(page of pages){
                page.innerHTML = parseInt(page.innerHTML)-5;
            }
            locate = 4;
        }else{
            btnLeft.classList.add('display--none');
        }
    }
})
// <span class="btn-close">x</span>

// btn click
const optionBtns = document.querySelectorAll('.container__header-btn--option');
for(optionBtn of optionBtns){
    optionBtn.addEventListener('click', function(e){
        if(e.target.innerHTML.indexOf('<span class="btn-close">x</span>') == -1){
            e.target.innerHTML += '<span class="btn-close">x</span>';
            e.target.classList.add('container__header-btn--active');
            getClose(e.target);
        }else{
           e.target.innerHTML =  e.target.innerHTML.replace('<span class="btn-close">x</span>','');
           e.target.classList.remove('container__header-btn--active');
        }
    })
}

function getClose(optionBtn){
    const closeBtn = optionBtn.querySelector('.btn-close');

    closeBtn.addEventListener('click',function(e){
        optionBtn.innerHTML =  optionBtn.innerHTML.replace('<span class="btn-close">x</span>','');
        optionBtn.classList.remove('container__header-btn--active');
    })
}




// popover 


const blockPopovers = document.querySelectorAll('.popover');
const popoverItems = document.querySelectorAll('.popover__item');
for(blockPopover of blockPopovers){
    blockPopover.addEventListener('click',function(e){
        e.stopPropagation();
    })
}
for(popoverItem of popoverItems){
    popoverItem.addEventListener('click',function(e){
        const btn = this.querySelector('.popover__item-btn');
        if(btn.innerHTML.indexOf('<i class="btn-check fas fa-check-square"></i>')==-1){
            btn.classList.add('popover__item--active');
            btn.innerHTML += '<i class="btn-check fas fa-check-square"></i>';
        }else{
            btn.classList.remove('popover__item--active');
            btn.innerHTML = '';
        }
        e.stopPropagation();
    })
}

document.addEventListener('click',function(e){
    hidden();
});
function hidden(){
    categoryBtn.classList.remove('container__header-btn--active');
    categoryPopover.style.animation = 'fadeOut ease .3s';
    areaBtn.classList.remove('container__header-btn--active');
    areaPopover.style.animation = 'fadeOut ease .3s';
    priceBtn.classList.remove('container__header-btn--active');
    pricePopover.style.animation = 'fadeOut ease .3s';
    filterBtn.classList.remove('container__header-btn--active');
    filterPopover.style.animation = 'fadeOut ease .3s';
    
    prominentSort.classList.remove('prominent-sort--active');
    prominentSort.style.transition = '.3s';
    popoverSort.style.animation = 'scrollUp ease-in .4s';
    sortIcon.innerHTML = '<i class="fas fa-chevron-down"></i>';
    setTimeout(() => {
        areaPopover.classList.add('display--none');
        categoryPopover.classList.add('display--none');
        pricePopover.classList.add('display--none');
        filterPopover.classList.add('display--none');
        popoverSort.classList.add('display--none');

    }, 300);
}

//area popover
const btns = document.querySelectorAll('.container__header-btn');
const areaBtn = document.querySelector('.container__header-btn--area');
const areaPopover = document.querySelector('.area__popover');
const areaDeleteOption = document.querySelectorAll('.popover-footer-delete')[0];

areaDeleteOption.addEventListener('click', function(e){
    const areaItemBtns = document.querySelectorAll('.popover__item-btn--area');
    for(areaItemBtn of areaItemBtns){
        areaItemBtn.classList.remove('popover__item--active');
        areaItemBtn.innerHTML = '';
    }
    hidden()
})
areaBtn.addEventListener('click', function(e){
    areaPopover.style.animation = 'fadeIn ease .3s';
    e.target.classList.add('container__header-btn--active');
    setTimeout(() => {
        areaPopover.classList.remove('display--none');
    }, 300);
    e.stopPropagation();
})
// category popover 
const categoryPopover = document.querySelector('.category__popover');
const categoryBtn = document.querySelector('.container__header-btn--category');
const categoryDeleteOption = document.querySelectorAll('.popover-footer-delete')[1];

categoryDeleteOption.addEventListener('click', function(e){
    const categoryItemBtns = document.querySelectorAll('.popover__item-btn--category');
    for(categoryItemBtn of categoryItemBtns){
        categoryItemBtn.classList.remove('popover__item--active');
        categoryItemBtn.innerHTML = '';
    }
    hidden()
})

categoryBtn.addEventListener('click', function(e){
    categoryPopover.style.animation = 'fadeIn ease .3s';
    e.target.classList.add('container__header-btn--active');
    setTimeout(() => {
        categoryPopover.classList.remove('display--none');
    }, 300);
    e.stopPropagation();
})

// price popover
const pricePopover = document.querySelector('.price__popover');
const priceBtn = document.querySelector('.container__header-btn--price');
const priceDeleteOption = document.querySelectorAll('.popover-footer-delete')[2];
priceDeleteOption.addEventListener('click', function(e){
    hidden();
})

priceBtn.addEventListener('click', function(e){
    pricePopover.style.animation = 'fadeIn ease .3s';
    e.target.classList.add('container__header-btn--active');
    setTimeout(() => {
        pricePopover.classList.remove('display--none');
    }, 300);
    e.stopPropagation();
})
pricePopover.addEventListener('click' ,function(e){
    e.stopPropagation();
})

// filter popover 
const filterPopover = document.querySelector('.filter__popover');
const filterBtn = document.querySelector('.container__header-btn--filter');
const filterDeleteOption = document.querySelectorAll('.popover-footer-delete')[3];
filterDeleteOption.addEventListener('click', function(e){
    hidden();
    removeHtml();
})

filterBtn.addEventListener('click', function(e){
    filterPopover.style.animation = 'fadeIn ease .3s';
    e.target.classList.add('container__header-btn--active');
    setTimeout(() => {
        filterPopover.classList.remove('display--none');
    }, 300);
    e.stopPropagation();
})
filterPopover.addEventListener('click' ,function(e){
    e.stopPropagation();
})


const choiceBtns = document.querySelectorAll('.room-item__choice');

for(choiceBtn of choiceBtns){
    const addRoom = choiceBtn.querySelector('.room-item__btn--right');
    const subRoom = choiceBtn.querySelector('.room-item__btn--left');
    const htmlClass = choiceBtn.querySelector('.room-item__quantity');
    addRoom.addEventListener('click', function(e){
        let quantity = parseInt(htmlClass.innerHTML);
        quantity++;
        htmlClass.innerHTML = `${quantity}`;
    })

    subRoom.addEventListener('click', function(e){
        let quantity = parseInt(htmlClass.innerHTML);
        if(quantity !=0 ) quantity--;
        htmlClass.innerHTML = `${quantity}`
    })
}

const utilitiesItems = document.querySelectorAll('.utilities-item');
for(utilitiesItem of utilitiesItems){
    const utilitiesBtn = utilitiesItem.querySelector('.utilities-btn');
    utilitiesItem.addEventListener('click', function(e){
        if(utilitiesBtn.innerHTML.indexOf('<i class="btn-check fas fa-check-square"></i>')==-1){
            utilitiesBtn.classList.add('popover__item--active');
            utilitiesBtn.innerHTML += '<i class="btn-check fas fa-check-square"></i>';
        }else{
            utilitiesBtn.classList.remove('popover__item--active');
            utilitiesBtn.innerHTML = '';
        }
    })
}

function removeHtml(){
    for(choiceBtn of choiceBtns){
        const htmlClass = choiceBtn.querySelector('.room-item__quantity');
        htmlClass.innerHTML = '0';
    }
    for(utilitiesItem of utilitiesItems){
        const utilitiesBtn = utilitiesItem.querySelector('.utilities-btn');
        if(utilitiesBtn.innerHTML.indexOf('<i class="btn-check fas fa-check-square"></i>')!=-1){
            utilitiesBtn.classList.remove('popover__item--active');
            utilitiesBtn.innerHTML = '';
        }
    }
}

// sort price

const prominentSort = document.querySelector('.prominent-sort');
const popoverSort = document.querySelector('.prominent__popover');
const sortIcon = document.querySelector('.sort-icon');

prominentSort.addEventListener('click', function(e){
    if(sortIcon.innerHTML.indexOf('<i class="fas fa-chevron-up"></i>')){
        prominentSort.classList.add('prominent-sort--active');
        prominentSort.style.transition = '.3s';
        popoverSort.classList.remove('display--none');
        popoverSort.style.animation = 'scrollDown ease-in .3s';
        sortIcon.innerHTML = '<i class="fas fa-chevron-up"></i>';
    }else{
        hidden();
    }
    e.stopPropagation();
})

function text(){
    document.addEventListener('click', function(e){
        prominentSort.classList.remove('prominent-sort--active');
        prominentSort.style.transition = '.3s';
        popoverSort.style.animation = 'scrollUp ease-in .4s';
        sortIcon.innerHTML = '<i class="fas fa-chevron-down"></i>';

        setTimeout(() => {
            popoverSort.classList.add('display--none');
        }, 300);
    })
}


const choiceOptions = document.querySelectorAll('.prominent__popover-text');
const sortOption = document.querySelector('.sort-option');

for(let i = 0; i < 2; i++){
    choiceOptions[i].addEventListener('click', function(e){
        this.classList.add('prominent__popover-text--active');
        choiceOptions[1-i].classList.remove('prominent__popover-text--active');
        sortOption.innerHTML = this.innerHTML;
    })
}



// responsive

const inforM = document.querySelector('.infor');
console.log(inforM)
$(window).resize(function(){
    const inforM = document.querySelector('.infor');
    console.log(inforM)
    var width = $(window).width();
    if(width < 900 && width >= 750){

    }
})
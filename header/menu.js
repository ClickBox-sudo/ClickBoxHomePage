let master = $('#master');
addClassStickeyMenu=(element,newPic,oldPic)=>{
    element = $(element)
    if (window.pageYOffset > element.offset().top) {
        element.html(' ');
        element.html(newPic);
        element.addClass("stickeyMenu");
      } else if(window.pageYOffset == 0){
        element.html(' ');
        element.html(oldPic);
        element.removeClass("stickeyMenu");

      }
}
mainMenuDesk = (menuList) => {
    let mainMenu = $('<div>').attr('class', 'main-menu-desk flex');
    let menuItems = $('<ul>').attr('class', 'desk-menu-list flex');
    let item;
    menuList.menu.forEach((elem, index) => {
        if (index == 2) {
            item = $('<li>').attr('class', 'flex desk-menu-icon').html('<img src=./logo/Click-Box-logo.svg/>');
            $(menuItems).append(item);
        }
        item = $('<li>').attr('class', 'flex desk-menu-' + index).text(elem);
        $(menuItems).append(item);

    })
    $(mainMenu).append(menuItems);
    $(master).append(mainMenu);
}

mainMenuMob = (menuList) => {
    let mobIcon = $('<div>').attr('class', 'mob-icon flex').html('<img src=./logo/Click-Box-logowhite.svg/>');
    let mobMenuIcon = $('<div>').attr('class', 'mob-menu-icon flex').html('<img src=./logo/Click-Box-logoBOX.svg/>');
    let mainMenu = $('<div>').attr('class', ' flex main-menu-mob');
    let menuItems = $('<ul>').attr('class', 'mob-menu-list flex');
    menuList.menu.forEach((elem, index) => {
        item = $('<li>').attr('class', 'flex mob-menu-' + index).text(elem);
        $(menuItems).append(item);

    });
    $(master).append(mobMenuIcon);
    $(mainMenu).append(menuItems);
    $(master).append(mainMenu);
    $(master).append(mobIcon);

    //klik za pojavuvanje na meni na mob
    $(mobMenuIcon).on('click', () => {
        $('.mob-menu-list').css({ 'display': 'block' })
        let menuListByClass = $('.mob-menu-list').children()
        var factor = 165;
        var time = 500;
        $(menuListByClass[0]).css('bottom') === `${factor}px` ? factor = -55 : null;

        for (var i = 0; i < menuListByClass.length; i++) {
            $(menuListByClass[i]).velocity({ bottom: factor }, {
                duration: time,
                easing: "ease-in"
            });
            console.log(factor)
            factor -= 55;
            time = time + 250;
            if (factor < -55) {
                setTimeout(() => {
                    $('.mob-menu-list').css({ 'display': 'none' })
                }, 1000);
            }
        }
    });
    window.onscroll = () =>{addClassStickeyMenu(mobMenuIcon,'<img src=./logo/Click-Box-logo1.svg/>','<img src=./logo/Click-Box-logoBOX.svg/>')};
}
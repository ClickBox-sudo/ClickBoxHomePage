let master = $('#master');
mainMenuDesk = (menuList) => {
    let mainMenu = $('<div>').attr('class', 'main-menu-desk flex');
    let menuItems = $('<ul>').attr('class', 'desk-menu-list flex');
    let item;
    menuList.menu.forEach((elem, index) => {
        if (index == 2) {
            item = $('<li>').attr('id', 'flex desk-menu-icon').html('<img src=./logo/Click-Box-logo.svg/>');
            $(menuItems).append(item);
        }
        item = $('<li>').attr('id', 'flex desk-menu-' + index).text(elem);
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
        item = $('<li>').attr('id', 'flex mob-menu-' + index).text(elem);
        $(menuItems).append(item);

    });
    $(mainMenu).append(menuItems);
    $(master).append(mainMenu);
    $(master).append(mobMenuIcon);
    $(master).append(mobIcon)

}
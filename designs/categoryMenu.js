createCategoryMenu=(content)=>{
    let categoryList = content.servicesInfo.templates.list
   
    let categoryMenuContainer = $('<div>').attr('class','flex category-menu-container');
    let categoryMenu = $('<ul>').attr('class','flex');

    categoryList.forEach((elem,index)=>{
        let item = $('<li>').attr('class','category-menu-item').attr('id',elem).text(elem);
        return $(categoryMenu).append(item);
    })

    
    $(categoryMenuContainer).append(categoryMenu);
    $(master).append(categoryMenuContainer);
}
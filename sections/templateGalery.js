createListPanel = (content,graphic)=>{
    let contentList = content.list;
    let listHolder = $('<div>').attr('class','template-list-holder');
    let list = $('<ul>').attr('class','template-list-panel');
    
    contentList.forEach((elem,index)=>{
        let item = $('<li>').attr('class','template-galery-list-'+index).text(elem);
        $(list).append(item)
    })

    $(listHolder).append(list)

    return listHolder
};

createPictureItem = (category,heading)=>{
    let thumbnailHolder = $('<div>').attr('class','flex galery-thumbnail-'+heading);
    let thumbnail = $('<img>').attr('src','./content/images/'+category.thumbnails);

    let thumbnailOverlay = $('<div>').attr('class','flex thumbnail-overlay-'+heading);
    let thumbnailIcon = $('<img>').attr('class','thumbnail-icon-'+heading).attr('src','./content/icons/'+category.icons);
    let thumbnailHeading = $('<p>').attr('class','thumbnail-heading-'+heading).text(heading);

    $(thumbnailOverlay).append(thumbnailIcon);
    $(thumbnailOverlay).append(thumbnailHeading);

    $(thumbnailHolder).append(thumbnailOverlay);
    $(thumbnailHolder).append(thumbnail);


    return thumbnailHolder

}
createPicturePanel = (content , graphic)=>{
    let allGraphic= graphic;
    let categories = Object.keys(allGraphic);
    
    let picturePanelWrapper = $('<div>').attr('class','flex picture-panel-wrapper');

    console.log(Object.keys(allGraphic))
    categories.forEach((elem,index)=>{
        let item = createPictureItem(allGraphic[elem],elem);
        $(picturePanelWrapper).append(item)
    });


return picturePanelWrapper

}

createTemplateGalery = (content,graphic)=>{
    let picturePanel = createPicturePanel(content,graphic)
    let templateList = createListPanel(content,graphic);
    let templateGaleryWrapper = $('<div>').attr('class','flex template-galery-wrapper');
    let templateGaleryListWrapper = $('<div>').attr('class','flex template-galery-list-wrapper');

 let templateGaleryHeader = $('<h3>').attr('class','template-galery-header').text(content.header);

 $(templateGaleryListWrapper).append(templateGaleryHeader);
 $(templateGaleryListWrapper).append(templateList);

 $(templateGaleryWrapper).append(templateGaleryListWrapper)
 $(templateGaleryWrapper).append(picturePanel)
 return templateGaleryWrapper
}
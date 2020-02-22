createThumbnail = (content,image,icon)=>{
    let folder = content.toLowerCase();
    console.log(folder);
    console.log(content)
    console.log(graphics)


    let thumbnailWrapper = $('<div>').attr('class','flex thumbnail-wrapper').attr('id',content);

    let thumbImageHolder = $('<div>').attr('class','flex thumbnail-image-container');
    let thumbnailImage = $('<img>').attr('src','../content/screen-shots/'+folder+'/'+image)

    let thumbnailinfo = $('<div>').attr('class','flex thumbnail-info');
    let thumbnailCategoryIcon = $('<img>').attr('src','../content/icons/'+icon)
    let thumbnailCatInfo = $('<p>').text(content)

    $(thumbImageHolder).append(thumbnailImage);
    $(thumbnailinfo).append(thumbnailCategoryIcon);
    $(thumbnailinfo).append(thumbnailCatInfo);

    $(thumbnailWrapper).append(thumbImageHolder);
    $(thumbnailWrapper).append(thumbnailinfo);

    $('.designs-container').append(thumbnailWrapper);

}

createDesignsContainer = (content,graphics)=>{
    let category = content.servicesInfo.templates.list;
    let images = graphics.templates.food.screenShots;
    let icon = graphics.templates.food.icons; 
    let designsContainer = $('<div>').attr('class', 'flex designs-container');
    
    
    $(master).append(designsContainer);
    createThumbnail(category[0],images[0],icon[0])

}
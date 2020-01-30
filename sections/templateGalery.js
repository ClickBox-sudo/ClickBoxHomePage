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
createPicturePanel = (content , graphic)=>{
    let picturePanelWrapper = $('<div>').attr('class','picture-panel-wrapper');

}

createTemplateGalery = (content,graphic)=>{
    let templateGaleryWrapper = $('<div>').attr('class','template-galery-wrapper');
    let templateGaleryListWrapper = $('<div>').attr('class','template-galery-wrapper');

 let templateList = createListPanel(content,graphic);
 let templateGaleryHeader = $('<h3>').attr('class','template-galery-header').text(content.header);

 $(templateGaleryListWrapper).append(templateGaleryHeader);
 $(templateGaleryListWrapper).append(templateList);

 $(templateGaleryWrapper).append(templateGaleryListWrapper)
 return templateGaleryWrapper
}
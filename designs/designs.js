let graphics = loadGraphic();

createLangBtn(graphics.icons);
$(document).ready(function () {
    let master = $('#master');
let content = loadText();
let graphics = loadGraphic();
main=(content,graphics)=>{
    
    createMenu(content,graphics);
    createCategoryMenu(content);
    createDesignsContainer(content,graphics);
    
    $('.thumbnail-wrapper').click((event)=>{
        let path = $(event.target).attr('src')
        path = path.split('/');
        path.splice(path.length-1,1,'index.html');
       path=path.join('/')
       window.open(path,'_blank');
    });
$('.category-menu-item').click((event)=>{
    let elemToCategory = $(event.target).attr('id');
    $('.designs-container').html(' ');
    createAllThumbnails(elemToCategory,graphics);
});

    let mobMenuIcon= $('.mob-icon-menu');
    let mobMenuIconDesk = $('.main-menu-desk');
    
    window.onscroll = () =>{
    addClassStickeyMenu(mobMenuIcon,'<img src=../content/logo/'+graphics.logos.cWithBox+'>','<img src=../content/logo/'+graphics.logos.onlyBox+'>',"stickeyMenu")
    addClassStickeyMenuDesktop(mobMenuIconDesk,'../content/logo/'+graphics.logos.cWithBoxBlue,'../content/logo/'+graphics.logos.fullWhiteLogo,"stickeyDesk")

};
 
}

main(content.en,graphics)
                    $('#mk-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.mk,graphics)
                    });
                    $('#uk-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.en,graphics)
                    });
                    $('#al-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.al,graphics)
                    });
});
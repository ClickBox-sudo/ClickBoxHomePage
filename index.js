let graphics = loadGraphic();

createLangBtn(graphics.icons);

$(document).ready(function () {
    let master = $('#master');
let content = loadText();
let graphics = loadGraphic();
main=(content,graphics)=>{

    createVideo(graphics);
    createMenu(content,graphics);
    createHeaderBanner(content,graphics);
    createSections(content,graphics);

    
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
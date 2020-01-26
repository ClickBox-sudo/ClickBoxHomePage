createLangBtn();

$(document).ready(function () {
    let master = $('#master');
    var langBtn = $('<button>').attr('class','btn').attr('id','langBtn').text('MK');
let content = loadText();
main=(content)=>{

    createVideo()
    createMenu(content);
    createHeaderBanner(content);

    
}

main(content.en)
                    $('#mk-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.mk)
                    });
                    $('#uk-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.en)
                    });
                    $('#al-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.al)
                    });
});
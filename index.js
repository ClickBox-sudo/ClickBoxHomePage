createLangBtn();

$(document).ready(function () {
    const master = $('#master');
    var langBtn = $('<button>').attr('class','btn').attr('id','langBtn').text('MK');
let content = loadText();
main=(content)=>{

    createVideo()
    createHeaderBanner(content);

    var test = $('<h1>').text(content.header);
    var logo = $('<div>').html('<object type="image/svg+xml" data="logo/Click-Box-logo.svg" class="logo"><object/>').attr('class','logo')
    $(master).append(langBtn);
    
    $(master).append(test);
    $(master).append(logo)
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
});
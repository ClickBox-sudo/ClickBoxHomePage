
$(document).ready(function () {

let content = loadContent();
    const master = $('#master');
    var test = $('<h1>').text(content[0].header);
    var logo = $('<div>').html('<object type="image/svg+xml" data="logo/Click-Box-logo.svg" class="logo"><object/>').attr('class','logo')
    var langBtn = $('<button>').attr('class','btn').attr('id','langBtn').text('MK');
    $(langBtn).on('click',()=>{
        $(test).text(content[1].header)
    })
    $(master).append(langBtn);

    $(master).append(test);
    $(master).append(logo)

    $('.logo').velocity({transform: ['rotate(30deg)', 'rotate(-30deg)',]}).velocity({transform: ["scale(1)", "scale(0.3)"]},{loop:true});
});
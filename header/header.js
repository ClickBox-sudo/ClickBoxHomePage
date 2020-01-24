const body = $('body');
// kreiranje kopcinja za jazici
createLangBtn = () => {
    let langBtnHolder = $('<div>').attr('class', 'btn-holder flex');
    let enBtn = $('<img>').attr('src', "./icons/uk.svg").attr('id', 'uk-btn').attr('class', 'lang-btn');
    let mkBtn = $('<img>').attr('src', "./icons/mk.svg").attr('id', 'mk-btn').attr('class', 'lang-btn');
    $(langBtnHolder).append(enBtn);
    $(langBtnHolder).append(mkBtn);
    $(body).prepend(langBtnHolder);
};

// kreiranje meni
createMenu = () => {

}

// kreiranje video holder
createVideo=()=>{
    let videoHolder = $('<div>').html('<video autoplay muted loop id="myVideo">\
    <source src="./content/images/head-back-desktop.mp4" type="video/mp4">\
    Your browser does not support HTML5 video.\
  </video>').attr('id','video-holder').css('height',window.innerHeight)


$('#master').append(videoHolder)
}

// kreiranje baner koj ke bide vrz video
createHeaderBanner = (content) => {
    let banerHolder = $('<div>').attr('class', 'baner-holder flex').css('height',window.innerHeight);
    let banerScreen = $('<div>').attr('class', 'banner-screen flex').css('height',window.innerHeight/2);
    let banerHeading = $('<h1>').attr('class', 'baner-heading').text(content.mainHeading);
    let banerInfo = $('<p>').attr('class', 'baner-info').text(content.banerInfo);

    $(banerScreen).append(banerHeading);
    $(banerScreen).append(banerInfo);
    $(banerHolder).append(banerScreen);
    $('#master').append(banerHolder);
}
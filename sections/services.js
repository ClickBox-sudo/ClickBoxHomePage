createServices=(content,graphics)=>{
    let wrapper = $('<section>').attr('id','services').attr('class','flex logo-background');
    let headerHolderBack = $('<div>').attr('class','flex header-holder clippy-right-back');
    let header = $('<h1>').attr('class','flex section-header-left').text(content.servicesHeader);
     let infoHolder = $('<div>').attr('class','flex info-holder clippy-right-info');
     let info = $('<div>').attr('class','flex info-right')
     let infoContent = $('<p>').attr('class','flex info-content').text(content.servicesInfo)
    
     $(info).append(infoContent)
     $(infoHolder).append(info);
     $(wrapper).append(header);
     $(headerHolderBack).append(infoHolder);
    return $(wrapper).append(headerHolderBack)
}

createAbout = (content,graphic)=>{
    let wrapper = $('<section>').attr('id','about').attr('class','flex logo-background');
    let headerHolderBack = $('<div>').attr('class','flex header-holder clippy-left-back');
    let header = $('<h1>').attr('class','flex section-header-right').text(content.aboutHeader);
     let infoHolder = $('<div>').attr('class','flex info-holder clippy-left-info');
     let info = $('<div>').attr('class','flex info-left')
     let infoContent = $('<p>').attr('class','flex info-content').text(content.aboutInfo)
    
     $(info).append(infoContent)
     $(infoHolder).append(info);
     $(wrapper).append(header);
     $(headerHolderBack).append(infoHolder);
    return $(wrapper).append(headerHolderBack);

}
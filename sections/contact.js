createContact=(content,graphics)=>{
    let wrapper = $('<section>').attr('id','contact').attr('class','flex logo-background');
    let headerHolderBack = $('<div>').attr('class','flex header-holder clippy-right-back');
    let header = $('<h1>').attr('class','flex section-header-left').attr('id','contact-header').text(content.contactHeader);
     let infoHolder = $('<div>').attr('class','flex info-holder clippy-right-info');
     
     let info = $('<div>').attr('class','flex info-right')
     let smallHeaderWrapper = $('<div>').attr('class','flex small-header-wrapper');
     let smallHeader = $('<h3>').attr('class','flex small-header').text(content.contactHeader);
     
     let infoContentWrapper = $('<div>').attr('class','flex info-content-wrapper');
     let infoContent = $('<p>').attr('class','flex info-content').text(content.contactInfo);

     $(smallHeaderWrapper).append(smallHeader);
     
     $(infoContentWrapper).append(infoContent);
    
     $(info).append(smallHeaderWrapper);
     $(info).append(infoContentWrapper);
     
     $(infoHolder).append(info);
     $(wrapper).append(header);
     $(headerHolderBack).append(infoHolder);
    return $(wrapper).append(headerHolderBack)
}
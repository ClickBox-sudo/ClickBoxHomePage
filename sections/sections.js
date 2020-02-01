addClassAnimateSection = (elementToView, elementToAnimate, cssClass) => {
  elementToView = $(elementToView);
  elementToAnimate = $(elementToAnimate)
  let elemBottom = elementToView.position().top + elementToView.outerHeight(true)
  if (window.pageYOffset > elementToView.offset().top - 10) {
    elementToAnimate.addClass(cssClass);
  } if (window.pageYOffset > elemBottom || window.pageYOffset < elementToView.offset().top - 150) {
    elementToAnimate.removeClass(cssClass);
  }
};
createSections = (content, graphics) => {
  let sectionsWrapper = $('<div>').attr('class', ' flex sections-wrapper');

  let services = createServices(content, graphics);
  let about = createAbout(content, graphics);
  let contact = createContact(content, graphics);

  $(sectionsWrapper).append(services);
  $(sectionsWrapper).append(about);
  $(sectionsWrapper).append(contact);

  $(master).append(sectionsWrapper);
  $('li[class^="template-galery-list-item-"]').click((event) => {
    let text = $(event.target).attr('class').split('-');
    text= text[text.length-1]
    let category = graphics.templates[text];
    let popUp = createPopUpGalery(category);
    $('body').append(popUp)
  });

}
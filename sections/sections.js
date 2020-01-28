createSections = (content, graphics) => {
    let sectionsWrapper = $('<div>').attr('class', ' flex sections-wrapper');

    let services = createServices(content, graphics);
    let about = createAbout(content, graphics);
    let contact = createContact(content, graphics);

    $(sectionsWrapper).append(services);
    $(sectionsWrapper).append(about);
    $(sectionsWrapper).append(contact);

    $(master).append(sectionsWrapper);
}
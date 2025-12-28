function loadBody(formContext, body, tab) {
    const bodyObj = loadFields(formContext, body);
    bodyObj.Tab = loadTabs(formContext, tab);
    return bodyObj;
}

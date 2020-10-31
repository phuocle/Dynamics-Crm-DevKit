function loadExternalScripts(srcArray) {
    srcArray.forEach((src) => {
        const scriptEl = window.document.createElement('script');
        scriptEl.textContent = src;
        window.document.body.appendChild(scriptEl);
    });
}
module.exports = loadExternalScripts;
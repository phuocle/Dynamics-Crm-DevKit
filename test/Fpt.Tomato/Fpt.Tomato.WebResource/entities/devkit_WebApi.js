//@ts-check
///<reference path='devkit_WebApi.d.ts' />
//@ts-check
///<reference path='devkit_WebApi.d.ts' />
var formWebApi = (function () {
    function onLoad(executionContext) {
    }
    async function onSave(executionContext) {
        await testXrmWebApideleteRecord();
    }

    async function testXrmWebApideleteRecord() {
        var res = await Xrm.WebApi.deleteRecord("devkit_webapi", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
        debugger;
        //{"id":"8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f","entityType":"devkit_webapi"}
    }

    return {
        OnLoad: onLoad,
        OnSave: onSave
    };
})();
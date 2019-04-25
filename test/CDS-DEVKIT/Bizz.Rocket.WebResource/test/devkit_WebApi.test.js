define(['xrm-mock', 'sinon'], function (xrm_mock, sinon) {
    var mock = new DevKitXrmMock(xrm_mock, "devkit_webapi");
    var server = new DevKitServerMock(sinon);
    describe('devkit_WebApi.js Test', function () {
        it("true", function () {
            expect(true).toBe(true);
        });
    });
});
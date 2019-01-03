///<reference path="../entities/Lead.intellisense.js" />
///<reference path="mock.intellisense.js" />
define(['xrm-mock', 'sinon'], function (xrm_mock, sinon) {
    var mock = new DevKitXrmMock(xrm_mock, "lead");
    var server = new DevKitServerMock(sinon);
    describe('Lead.js Test', function () {
        it("true", function () {
            expect(true).toBe(true);
        });
    });
});
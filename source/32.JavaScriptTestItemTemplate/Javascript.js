///<reference path="../entities/$EntityName$.intellisense.js" />
///<reference path="mock.intellisense.js" />
define(['xrm-mock', 'sinon'], function (xrm_mock, sinon) {
    var mock = new DevKitXrmMock(xrm_mock, "$LogicalName$");
    var server = new DevKitServerMock(sinon);
    describe('$EntityName$.js Test', function () {
        it("true", function () {
            expect(true).toBe(true);
        });
    });
});

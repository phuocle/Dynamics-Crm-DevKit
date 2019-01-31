///<reference path="../entities/Account.intellisense.js" />
///<reference path="mock.intellisense.js" />
define(['xrm-mock', 'sinon'], function (xrm_mock, sinon) {
    var mock = new DevKitXrmMock(xrm_mock, "account");
    var server = new DevKitServerMock(sinon);
    describe('Account.js Test', function () {
        it("true", function () {
            expect(true).toBe(true);
        });
    });
});
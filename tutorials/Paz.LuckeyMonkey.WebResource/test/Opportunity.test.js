///<reference path="../entities/Opportunity.intellisense.js" />
///<reference path="mock.intellisense.js" />
define(['xrm-mock', 'sinon'], function (xrm_mock, sinon) {
    var mock = new DevKitXrmMock(xrm_mock, "opportunity");
    var server = new DevKitServerMock(sinon);
    describe('Opportunity.js Test', function () {
        it("true", function () {
            expect(true).toBe(true);
        });
    });
});
//@ts-check
define(['xrm-mock', 'sinon'], () => {
    var xrmMock = require('xrm-mock');
    var sinon = require('sinon');
    describe("Delete", () => {
        beforeEach(function () {
            xrmMock.XrmMockGenerator.initialise();
        });
        it("Delete Contact", async () => {
            /** @type {any} */
            var obj =
            {
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                entityType: "devkit_webapi"
            };
            sinon.stub(Xrm.WebApi, 'deleteRecord')
                .withArgs("devkit_webapi", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f")
                .returns(obj);
            /** @type {any} */
            var res = await Xrm.WebApi.deleteRecord("devkit_webapi", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.entityType).toBe("devkit_webapi");
        });
    });
});

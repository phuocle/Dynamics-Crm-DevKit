//@ts-check
define(['xrm-mock'], () => {
    var xrmMock = require('xrm-mock');
    describe('', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Navigation', () => {
            var standard = new xrmMock.UiStandardElementMock(new xrmMock.UiLabelElementMock("NAV-LABBEL"), new xrmMock.UiCanGetVisibleElementMock(true));
            var focus = new xrmMock.UiFocusableMock(true);
            var navigation = new xrmMock.NavigationMock(new xrmMock.ItemCollectionMock([
                new xrmMock.NavigationItemMock("nav01", standard, focus)
            ]));
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_dummy"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var ui = new xrmMock.UiMock({
                navigation: navigation
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);
            expect(form.Navigation.nav01.Id).toBe("nav01");
            expect(form.Navigation.nav01.Label).toBe("NAV-LABBEL");
            form.Navigation.nav01.Label = "NAV-LABBEL-NEW";
            expect(form.Navigation.nav01.Label).toBe("NAV-LABBEL-NEW");
            expect(form.Navigation.nav01.Visible).toBeTruthy();
            form.Navigation.nav01.Visible = false;
            expect(form.Navigation.nav01.Visible).toBeFalsy();
            expect(form.Navigation.nav01.Focus()).toBeUndefined();
        });
    });
});
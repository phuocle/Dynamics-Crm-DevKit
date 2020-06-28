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
        it('Tab', () => {
            var tab1Section1 = xrmMock.XrmMockGenerator.Section.createSection("Tab1Section1", "LABEL-TAB1-SECTION1", true, null, null);
            var tab1Section2 = xrmMock.XrmMockGenerator.Section.createSection("Tab1Section2", "LABEL-TAB1-SECTION2", false, null, null);
            var tab1 = xrmMock.XrmMockGenerator.Tab.createTab("Tab1", "LABEL-TAB1", true, "expanded", null, new xrmMock.ItemCollectionMock([tab1Section1, tab1Section2]));
            var addTabStateChange = function (executionContext) { }
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);
            expect(tab1.tabStateChangeHandlers.length).toBe(0);
            form.Body.Tab.Tab1.AddTabStateChange(addTabStateChange);
            expect(tab1.tabStateChangeHandlers.length).toBe(1);
            expect(form.Body.Tab.Tab1.DisplayState).toBe(OptionSet.TabDisplayState.Expanded);
            form.Body.Tab.Tab1.DisplayState = OptionSet.TabDisplayState.Collapsed;
            expect(form.Body.Tab.Tab1.DisplayState).toBe(OptionSet.TabDisplayState.Collapsed);
            expect(form.Body.Tab.Tab1.Focus()).toBeUndefined();
            expect(form.Body.Tab.Tab1.Label).toBe("LABEL-TAB1");
            form.Body.Tab.Tab1.Label = "LABEL-TAB1-NEW";
            expect(form.Body.Tab.Tab1.Label).toBe("LABEL-TAB1-NEW");
            expect(form.Body.Tab.Tab1.Name).toBe("Tab1");
            //expect(form.Body.Tab.Tab1.Parent).toBeUndefined();
            form.Body.Tab.Tab1.RemoveTabStateChange(addTabStateChange);
            expect(tab1.tabStateChangeHandlers.length).toBe(0);
            expect(form.Body.Tab.Tab1.Visible).toBeTruthy();
            form.Body.Tab.Tab1.Visible = false;
            expect(form.Body.Tab.Tab1.Visible).toBeFalsy();
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Label).toBe("LABEL-TAB1-SECTION1");
            form.Body.Tab.Tab1.Section.Tab1Section1.Label = "LABEL-TAB1-SECTION1-NEW";
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Label).toBe("LABEL-TAB1-SECTION1-NEW");
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Name).toBe("Tab1Section1");
            //expect(form.Body.Tab.Tab1.Section.Tab1Section1.Parent).toBeUndefined();
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Visible).toBeTruthy();
            form.Body.Tab.Tab1.Section.Tab1Section1.Visible = false;
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Visible).toBeFalsy();
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
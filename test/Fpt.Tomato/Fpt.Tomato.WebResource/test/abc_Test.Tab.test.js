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
        it('Tab/Section removed', () => {
            var tab2Section1 = xrmMock.XrmMockGenerator.Section.createSection("Tab2Section1", "LABEL-TAB1-SECTION1", true, null, null);
            var tab2Section2 = xrmMock.XrmMockGenerator.Section.createSection("Tab2Section2", "LABEL-TAB1-SECTION2", false, null, null);
            var tab2 = xrmMock.XrmMockGenerator.Tab.createTab("Tab3", "LABEL-TAB2", true, "expanded", null, new xrmMock.ItemCollectionMock([tab2Section1, tab2Section2]));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);
            expect(form.Body.Tab.Tab2.Label).toBe("");
            expect(form.Body.Tab.Tab2.Section.Tab2Section1.Label).toBe("");
        });
    });
});
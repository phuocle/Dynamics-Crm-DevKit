//@ts-check
define(['xrm-mock'], () => {
    var xrmMock = require('xrm-mock');
    describe('Controls', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
        });
        it('standard control type', () => {
            xrmMock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                format: "text",
                isDirty: true,
                name: "abc_all",
                requiredLevel: "required",
                value: "ABC ALL VALUE",
                maxLength: 100,
                submitMode: "always"
            },
                [
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "ABC ALL LABEL",
                        name: "abc_all",
                        visible: true
                    },
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "ABC ALL LABEL_TAB_2",
                        name: "abc_all_1",
                        visible: false
                    }
                ]
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(() => { form.Body.abc_All.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_All.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.abc_All.Attribute).toBeDefined();
            expect(form.Body.abc_All.ControlType).toBe(OptionSet.FieldControlType.Standard);
            expect(form.Body.abc_All.Disabled).toBeTruthy();
            expect(form.Body.abc_All.Label).toBe("ABC ALL LABEL");
            expect(form.Body.abc_All.ControlName).toBe("abc_all");
            expect(form.Body.abc_All_1.ControlName).toBe("abc_all_1");
            expect(form.Body.abc_All_1.Value).toBe("ABC ALL VALUE");
            expect(form.Body.abc_All.ControlParent).toBeUndefined();
            expect(form.Body.abc_All_1.Visible).toBeFalsy(0);
            form.Body.abc_All.Disabled = false;
            expect(form.Body.abc_All.Disabled).toBeFalsy();
            expect(form.Body.abc_All.Focus()).toBeUndefined();
            form.Body.abc_All.Label = "ABC ALL LABEL NEW";
            expect(form.Body.abc_All.Label).toBe("ABC ALL LABEL NEW");
            expect(() => { form.Body.abc_All.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.abc_All.Visible = false;
            expect(form.Body.abc_All.Visible).toBeFalsy();
        });
        it('iframe control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_iframed"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var frame = new xrmMock.IframeControlMock({
                name: "abc_iframed",
                controlType: "iframe",
                label: "IFRAME LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([
                    frame
                ])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(() => { form.Body.abc_IFramed.ContentWindow(null, null) }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_IFramed.ControlType).toBe(OptionSet.FieldControlType.Iframe);
            expect(() => { form.Body.abc_IFramed.Disabled }).toThrow(new Error("getDisabled not implemented."));
            expect(() => { form.Body.abc_IFramed.InitialUrl }).toThrow(new Error("getInitialUrl not implemented."));
            expect(form.Body.abc_IFramed.Label).toBe("IFRAME LABEL");
            expect(form.Body.abc_IFramed.ControlName).toBe("abc_iframed");
            expect(() => { form.Body.abc_IFramed.Object }).toThrow(new Error("getObject not implemented."));
            expect(form.Body.abc_IFramed.ControlParent).toBeUndefined();
            expect(() => { form.Body.abc_IFramed.Src }).toThrow(new Error("getSrc not implemented."));
            expect(form.Body.abc_IFramed.Visible).toBeTruthy();
            expect(() => { form.Body.abc_IFramed.Disabled = true }).toThrow(new Error("setDisabled not implemented."));
            expect(() => { form.Body.abc_IFramed.Focus() }).toThrow(new Error("setFocus not implemented."));
            form.Body.abc_IFramed.Label = "IFRAME LABEL NEW";
            expect(form.Body.abc_IFramed.Label).toBe("IFRAME LABEL NEW");
            expect(() => { form.Body.abc_IFramed.Src = "ABC" }).toThrow(new Error("setSrc not implemented."));
            expect(() => { form.Body.abc_IFramed.Visible = true }).toThrow(new Error("setVisible not implemented."));
        });
        it('kbsearch (Knowledge base search) control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_kbsearch"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var kbsearch = new xrmMock.KbSearchControlMock({
                name: "abc_kbsearch",
                controlType: "kbsearch",
                label: "KbSearch LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([
                    kbsearch
                ])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(() => { form.Body.abc_KbSearch.AddOnPostSearch(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.AddOnResultOpened(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.AddOnSelection(null) }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_KbSearch.ControlType).toBe(OptionSet.FieldControlType.KbSearch);
            expect(() => { form.Body.abc_KbSearch.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_KbSearch.Label).toBe("KbSearch LABEL");
            expect(form.Body.abc_KbSearch.AttributeName).toBe("abc_kbsearch");
            expect(form.Body.abc_KbSearch.ControlName).toBe("abc_kbsearch");
            expect(form.Body.abc_KbSearch.ControlParent).toBeUndefined();
            expect(() => { form.Body.abc_KbSearch.SearchQuery }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.SelectedResults }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.TotalResultCount }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_KbSearch.Visible).toBeTruthy();
            expect(() => { form.Body.abc_KbSearch.OpenSearchResult(null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.RemoveOnPostSearch(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.RemoveOnResultOpened(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.RemoveOnSelection(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.Focus() }).toThrow(new Error("Method not implemented."));
            form.Body.abc_KbSearch.Label = "KbSearch LABEL NEW";
            expect(form.Body.abc_KbSearch.Label).toBe("KbSearch LABEL NEW");
            expect(() => { form.Body.abc_KbSearch.SearchQuery = "SEARCH QUERY" }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.Visible = true }).toThrow(new Error("Method not implemented."));
        });
        it('lookup control type', () => {
            var lookup = xrmMock.XrmMockGenerator.Control.createLookup(new xrmMock.LookupControlMock({
                name: "abc_lookup",
                attribute: new xrmMock.LookupAttributeMock({
                    name: "abc_lookup",
                    isPartyList: true,
                    value: [new xrmMock.LookupValueMock("id", "abc_test2", "name")]
                }),
                views: [
                    {
                        entityName: "abc_test2",
                        fetchXml: "<fetchxml/>",
                        layoutXml: "<layoutxml/>",
                        viewDisplayName: "Lookup Test2",
                        viewId: "DefaultViewId",
                        isDefault: true
                    },
                    {
                        entityName: "abc_test2",
                        fetchXml: "<fetchxml2/>",
                        layoutXml: "<layoutxml2/>",
                        viewDisplayName: "Lookup Test2 2",
                        viewId: "DefaultViewId2",
                        isDefault: false
                    }
                ],
                disabled: false,
                label: "LOOKUP LABEL",
                visible: true
            }));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(lookup.filters.length).toBe(0);
            var abc_LookupAddPreSearch = () => {
                var filter = `
<filter type="and">
    <condition attribute="abc_name" operator="eq" value="ABC" />
</filter>
`;
                var form = new Tomato.FormTest(executionContext);
                form.Body.abc_Lookup.AddCustomFilter(filter, "abc_test");
            }
            form.Body.abc_Lookup.AddPreSearch(abc_LookupAddPreSearch);
            abc_LookupAddPreSearch();
            expect(lookup.filters.length).toBe(1);
            expect(lookup.views.length).toBe(2);
            form.Body.abc_Lookup.AddCustomView("viewid", "enttiyName", "viewDisplayName", "fetchXml", "layoutXml", false);
            expect(lookup.views.length).toBe(3);
            expect(() => { form.Body.abc_Lookup.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_Lookup.AddOnLookupTagClick(null); }).toThrow(new Error("addOnLookupTagClick not implemented"))
            expect(() => { form.Body.abc_Lookup.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.abc_Lookup.Attribute).toBeDefined();
            expect(form.Body.abc_Lookup.ControlType).toBe(OptionSet.FieldControlType.Lookup);
            expect(form.Body.abc_Lookup.DefaultView).toBe("DefaultViewId");
            expect(form.Body.abc_Lookup.Disabled).toBeFalsy();
            expect(() => { form.Body.abc_Lookup.EntityTypes }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_Lookup.Label).toBe("LOOKUP LABEL");
            expect(form.Body.abc_Lookup.ControlName).toBe("abc_lookup");
            expect(form.Body.abc_Lookup.ControlParent).toBeUndefined();
            expect(form.Body.abc_Lookup.Visible).toBeTruthy();
            expect(() => { form.Body.abc_Lookup.RemoveOnLookupTagClick(null); }).toThrow(new Error("removeOnLookupTagClick not implemented"))
            expect(() => { form.Body.abc_Lookup.RemovePreSearch(abc_LookupAddPreSearch) }).toThrow(new Error("remove presearch not implemented"));
            form.Body.abc_Lookup.DefaultView = "DefaultViewId2";
            expect(form.Body.abc_Lookup.DefaultView).toBe("DefaultViewId2");
            form.Body.abc_Lookup.Disabled = true;
            expect(form.Body.abc_Lookup.Disabled).toBeTruthy();
            expect(() => { form.Body.abc_Lookup.EntityTypes = ["account"] }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_Lookup.Focus()).toBeUndefined();
            form.Body.abc_Lookup.Label = "LOOKUP LABEL NEW";
            expect(form.Body.abc_Lookup.Label).toBe("LOOKUP LABEL NEW");
            expect(() => { form.Body.abc_Lookup.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.abc_Lookup.Visible = false;
            expect(form.Body.abc_Lookup.Visible).toBeFalsy();
        });
        it('multiselectoptionset and optionset control types', () => {
            var optionSet = xrmMock.XrmMockGenerator.Control.createOptionSet({
                name: "abc_optionsetcode",
                disabled: true,
                label: "OPTIONSET LABEL",
                visible: true,
                attribute: new xrmMock.OptionSetAttributeMock({
                    name: "abc_optionsetcode",
                    options: [
                        { text: "Value 1", value: 100000000 },
                        { text: "Value 2", value: 100000001 },
                        { text: "Value 3", value: 100000002 },
                        { text: "Value 4", value: 100000003 },
                        { text: "Value 5", value: 100000004 },
                        { text: "Value 6", value: 100000005 }
                    ]
                }),
                options: [
                    { text: "Value 1", value: 100000000 },
                    { text: "Value 2", value: 100000001 },
                    { text: "Value 3", value: 100000002 },
                    { text: "Value 4", value: 100000003 },
                    { text: "Value 5", value: 100000004 },
                    { text: "Value 6", value: 100000005 }
                ]
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(() => { form.Body.abc_OptionSetCode.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_OptionSetCode.Options.length).toBe(6);
            expect(form.Body.abc_OptionSetCode.AddOption("Value 7", 100000006, 6)).toBeUndefined();
            expect(form.Body.abc_OptionSetCode.ControlOptions.length).toBe(7);
            expect(() => { form.Body.abc_OptionSetCode.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.abc_OptionSetCode.ClearOptions()).toBeUndefined();
            expect(form.Body.abc_OptionSetCode.ControlOptions.length).toBe(0);
            expect(form.Body.abc_OptionSetCode.Attribute).toBeDefined();
            expect(form.Body.abc_OptionSetCode.ControlType).toBe(OptionSet.FieldControlType.OptionSet);
            expect(form.Body.abc_OptionSetCode.Disabled).toBeTruthy();
            expect(form.Body.abc_OptionSetCode.Label).toBe("OPTIONSET LABEL");
            expect(form.Body.abc_OptionSetCode.ControlName).toBe("abc_optionsetcode");
            expect(form.Body.abc_OptionSetCode.ControlParent).toBeUndefined();
            expect(form.Body.abc_OptionSetCode.Visible).toBeTruthy();
            form.Body.abc_OptionSetCode.AddOption("A", 1, 0);
            form.Body.abc_OptionSetCode.AddOption("B", 2, 0);
            form.Body.abc_OptionSetCode.AddOption("C", 3, 0);
            expect(form.Body.abc_OptionSetCode.ControlOptions.length).toBe(3);
            expect(form.Body.abc_OptionSetCode.RemoveOption(1));
            expect(form.Body.abc_OptionSetCode.ControlOptions.length).toBe(2);
            form.Body.abc_OptionSetCode.Disabled = false;
            expect(form.Body.abc_OptionSetCode.Disabled).toBeFalsy();
            expect(form.Body.abc_OptionSetCode.Focus()).toBeUndefined();
            form.Body.abc_OptionSetCode.Label = "OPTIONSET LABEL NEW";
            expect(form.Body.abc_OptionSetCode.Label).toBe("OPTIONSET LABEL NEW");
            expect(() => { form.Body.abc_OptionSetCode.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.abc_OptionSetCode.Visible = false;
            expect(form.Body.abc_OptionSetCode.Visible).toBeFalsy();
        });
        it('quickform control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "quickform"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var quickform = new xrmMock.QuickFormControlMock({
                name: "QuickForm",
                controlType: "quickform",
                label: "QUICK FORM LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                quickForms: new xrmMock.ItemCollectionMock([quickform])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(() => { form.QuickForm.QuickForm.Controls() }).toThrow(new Error("Method not implemented."));
            expect(form.QuickForm.QuickForm.ControlType).toBe(OptionSet.FieldControlType.QuickForm);
            expect(() => { form.QuickForm.QuickForm.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.QuickForm.QuickForm.Label).toBe("QUICK FORM LABEL");
            expect(form.QuickForm.QuickForm.ControlName).toBe("QuickForm");
            expect(form.QuickForm.QuickForm.ControlParent).toBeUndefined();
            expect(form.QuickForm.QuickForm.Visible).toBeTruthy();
            expect(() => { form.QuickForm.QuickForm.IsLoaded() }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.QuickForm.Refresh() }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.QuickForm.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.QuickForm.Focus() }).toThrow(new Error("Method not implemented."));
            form.QuickForm.QuickForm.Label = "QUICK FORM LABEL NEW";
            expect(form.QuickForm.QuickForm.Label).toBe("QUICK FORM LABEL NEW");
            expect(() => { form.QuickForm.QuickForm.Visible = false }).toThrow(new Error("Method not implemented."));
        });
        //it('REMOVED quickform control type', () => {
        //    var attributes = new xrmMock.ItemCollectionMock([
        //        new xrmMock.AttributeMock({
        //            name: "quickform1"
        //        })
        //    ]);
        //    var entity = new xrmMock.EntityMock({
        //        attributes: attributes
        //    });
        //    var data = new xrmMock.DataMock(entity);
        //    var quickform = new xrmMock.QuickFormControlMock({
        //        name: "QuickForm1",
        //        controlType: "quickform",
        //        label: "QUICK FORM LABEL",
        //        visible: true
        //    });
        //    var ui = new xrmMock.UiMock({
        //        quickForms: new xrmMock.ItemCollectionMock([quickform])
        //    });
        //    xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
        //    var executionContext = xrmMock.XrmMockGenerator.formContext;
        //    var form = new Tomato.FormTest(executionContext);
        //    expect(form.QuickForm.QuickForm.Controls().length).toBe(0);
        //    expect(form.QuickForm.QuickForm.ControlType.toString()).toBe("");
        //    expect(form.QuickForm.QuickForm.Disabled).toBeTruthy();
        //    expect(form.QuickForm.QuickForm.Label).toBe("");
        //    expect(form.QuickForm.QuickForm.ControlName).toBe("");
        //    expect(form.QuickForm.QuickForm.ControlParent.length).toBe({}.length);
        //    expect(form.QuickForm.QuickForm.Visible).toBeFalsy();
        //    expect(form.QuickForm.QuickForm.IsLoaded()).toBeFalsy();
        //    expect(form.QuickForm.QuickForm.Refresh()).toBeUndefined();
        //    form.QuickForm.QuickForm.Disabled = true;
        //    expect(form.QuickForm.QuickForm.Disabled).toBeTruthy();
        //    expect(form.QuickForm.QuickForm.Focus()).toBeUndefined();
        //    form.QuickForm.QuickForm.Label = "QUICK FORM LABEL NEW";
        //    expect(form.QuickForm.QuickForm.Label).toBe("");
        //    form.QuickForm.QuickForm.Visible = false;
        //    expect(form.QuickForm.QuickForm.Visible).toBeFalsy();
        //});
        it('subgrid control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "Contacts"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);

            var grid = new xrmMock.GridControlMock({
                name: "Contacts",
                controlType: "subgrid",
                label: "CONTACTS",
                visible: true,
                entityName: "contact",
                contextType: XrmEnum.GridControlContext.FormContextRelated
            });

            var viewSelector = new xrmMock.ViewSelectorMock(true);
            viewSelector.setCurrentView(new xrmMock.LookupValueMock("GUID-CONTACTS-I-FOLLOW", "1039", "Contacts I Follow"));
            grid.viewSelector = viewSelector;

            var relationship = new xrmMock.RelationshipMock({
                name: "name"
            });
            grid.relationship = relationship;
            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([grid])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);
            var ContactsAddOnLoad = function (executionContext) { }
            expect(grid.onLoadHandlers.length).toBe(0);
            form.Grid.Contacts.AddOnLoad(ContactsAddOnLoad);
            expect(grid.onLoadHandlers.length).toBe(1);
            expect(form.Grid.Contacts.EntityName).toBe("contact");
            expect(() => { form.Grid.Contacts.FetchXml }).toThrow(new Error("getFetchXml not implemented."));
            expect(() => { form.Grid.Contacts.GridType }).toThrow(new Error("getGridType not implemented."));
            expect(form.Grid.Contacts.Relationship).toBeDefined();
            expect(() => { form.Grid.Contacts.Url(0); }).toThrow(new Error("getUrl not implemented."));
            expect(form.Grid.Contacts.ViewSelector.CurrentView.entityType).toBe("1039");
            expect(form.Grid.Contacts.ViewSelector.CurrentView.id).toBe("GUID-CONTACTS-I-FOLLOW");
            expect(form.Grid.Contacts.ViewSelector.CurrentView.name).toBe("Contacts I Follow");
            var newCurrentView = {
                entityType: "1039",
                id: "GUID-NEW",
                name: "NAME-NEW"
            };
            form.Grid.Contacts.ViewSelector.CurrentView = newCurrentView;
            expect(form.Grid.Contacts.ViewSelector.CurrentView.entityType).toBe("1039");
            expect(form.Grid.Contacts.ViewSelector.CurrentView.id).toBe("GUID-NEW");
            expect(form.Grid.Contacts.ViewSelector.CurrentView.name).toBe("NAME-NEW");
            expect(form.Grid.Contacts.ViewSelector.Visible).toBeTruthy();
        });
        it('timelinewall control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_timelinewall"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var timelineWall = new xrmMock.TimelineWallMock({
                name: "abc_timelinewall",
                controlType: "timelinewall",
                label: "TIMELINE WALL LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([timelineWall])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(form.Body.abc_TimelineWall.ControlType).toBe(OptionSet.FieldControlType.TimelineWall);
            expect(() => { form.Body.abc_TimelineWall.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_TimelineWall.Label).toBe("TIMELINE WALL LABEL");
            expect(form.Body.abc_TimelineWall.AttributeName).toBe("abc_timelinewall");
            expect(form.Body.abc_TimelineWall.ControlName).toBe("abc_timelinewall");
            expect(form.Body.abc_TimelineWall.ControlParent).toBeUndefined();
            expect(form.Body.abc_TimelineWall.Visible).toBeTruthy();
            expect(() => { form.Body.abc_TimelineWall.Refresh() }).toThrow(new Error("Not implemented."));
            expect(() => { form.Body.abc_TimelineWall.Disabled = true}).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_TimelineWall.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_TimelineWall.Focus() }).toThrow(new Error("Method not implemented."));
            form.Body.abc_TimelineWall.Label = "TIMELINE WALL LABEL NEW";
            expect(form.Body.abc_TimelineWall.Label).toBe("TIMELINE WALL LABEL NEW");
            expect(() => { form.Body.abc_TimelineWall.Visible = true }).toThrow(new Error("Method not implemented."));
        });
        it('timer control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_timer"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var timer = new xrmMock.TimerControlMock({
                name: "abc_timer",
                controlType: "timercontrol",
                label: "TIMMER LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([timer])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);
            expect(form.Body.abc_Timer.ControlType).toBe(OptionSet.FieldControlType.TimerControl);
            expect(() => { form.Body.abc_Timer.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_Timer.Label).toBe("TIMMER LABEL");
            expect(form.Body.abc_Timer.AttributeName).toBe("abc_timer");
            expect(form.Body.abc_Timer.ControlName).toBe("abc_timer");
            expect(form.Body.abc_Timer.ControlParent).toBeUndefined();
            expect(() => { form.Body.abc_Timer.State }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_Timer.Visible).toBeTruthy();
            expect(() => { form.Body.abc_Timer.Refresh() }).toThrow(new Error("Not implemented."));
            expect(() => { form.Body.abc_Timer.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_Timer.Focus() }).toThrow(new Error("Method not implemented."));
            form.Body.abc_Timer.Label = "TIMMER LABEL NEW";
            expect(form.Body.abc_Timer.Label).toBe("TIMMER LABEL NEW");
            expect(() => { form.Body.abc_Timer.Visible = false }).toThrow(new Error("Method not implemented."));
        });
        it('webresource control type', () => {
            expect(true).toBeTruthy();
        });
    });
});
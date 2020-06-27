//@ts-check
var devKit = (function () {
    //@ts-check
    "use strict";
    var EMPTY_STRING = "";
    var EMPTY_GUID = "{00000000-0000-0000-0000-000000000000}";
    var EMPTY_REFERENCE = { entityType: EMPTY_STRING, id: EMPTY_GUID, name: EMPTY_STRING };
    var EMPTY_NUMBER = 0;
    var N = null;
    function has(obj, key) {
        if (isNullOrUndefined(obj)) return false;
        return key.split(".").every(function (x) {
            if (typeof obj != "object" || obj === null || !x in obj) {
                return false;
            }
            obj = obj[x];
            return true;
        });
    }
    function isNullOrUndefined(obj) {
        if (obj === null) return true;
        if (obj === undefined) return true;
        return false;
    }
    function loadForm(formContext) {
        if (!formContext) return;
        var form = {};
        if (formContext.data) {
            var contextData = formContext.data;
            form.DataAddOnLoad = function (callback) { contextData.addOnLoad(callback); };            
            Object.defineProperty(form, "DataIsDirty", { get: function () { return contextData.getIsDirty(); } });
            Object.defineProperty(form, "DataIsValid", { get: function () { return contextData.isValid(); } });            
            form.Refresh = function (save, successCallback, errorCallback) { contextData.refresh(save).then(successCallback, errorCallback); };
            form.DataRemoveOnLoad = function (callback) { contextData.removeOnLoad(callback); };
            form.Save = function (saveOptions, successCallback, errorCallback) { contextData.save(saveOptions).then(successCallback, errorCallback); };
        }
        if (formContext.data && formContext.data.entity) {
            var contextDataEntity = formContext.data.entity;
            Object.defineProperty(form, "Attributes", { get: function () { return contextDataEntity.attributes; } });
            form.AddOnSave = function (callback) { contextDataEntity.addOnSave(callback); };
            Object.defineProperty(form, "DataXml", { get: function () { return contextDataEntity.getDataXml(); } });
            Object.defineProperty(form, "EntityName", { get: function () { return contextDataEntity.getEntityName(); } });
            Object.defineProperty(form, "EntityReference", { get: function () { return contextDataEntity.getEntityReference(); } });
            Object.defineProperty(form, "EntityId", { get: function () { return contextDataEntity.getId(); } });
            Object.defineProperty(form, "EntityIsDirty", { get: function () { return contextDataEntity.getIsDirty(); } });
            Object.defineProperty(form, "PrimaryAttributeValue", { get: function () { return contextDataEntity.getPrimaryAttributeValue(); } });
            Object.defineProperty(form, "EntityIsValid", { get: function () { return contextDataEntity.isValid(); } });
            form.RemoveOnSave = function (callback) { contextDataEntity.removeOnSave(callback); };
        }
        if (formContext.ui) {
            var contextUi = formContext.ui;
            Object.defineProperty(form, "Controls", { get: function () { return contextUi.controls; } });
            form.UiAddOnLoad = function (callback) { contextUi.addOnLoad(callback); };
            form.ClearFormNotification = function (uniqueId) { return contextUi.clearFormNotification(uniqueId); };
            form.Close = function () { contextUi.close(); };
            Object.defineProperty(form, "FormType", { get: function () { return contextUi.getFormType(); } });
            Object.defineProperty(form, "ViewPortHeight", { get: function () { return contextUi.getViewPortHeight(); } });
            Object.defineProperty(form, "ViewPortWidth", { get: function () { return contextUi.getViewPortWidth(); } });
            form.RefreshRibbon = function (refreshAll) { contextUi.refreshRibbon(refreshAll); };
            form.UiRemoveOnLoad = function (callback) { contextUi.removeOnLoad(callback); };
            form.SetFormEntityName = function (arg) { contextUi.setFormEntityName(arg); };
            form.SetFormNotification = function (message, level, uniqueId) { return contextUi.setFormNotification(message, level, uniqueId); };
        }
        if (formContext.ui && formContext.ui.formSelector) {
            var contextUiFormSelector = formContext.ui.formSelector;
            Object.defineProperty(form, "FormId", { get: function () { return contextUiFormSelector.getCurrentItem().getId(); } });
            Object.defineProperty(form, "FormLabel", { get: function () { return contextUiFormSelector.getCurrentItem().getLabel(); } });
            form.FormNavigate = function (formId) { contextUiFormSelector.items.get(formId).navigate(); };
            form.FormIsVisible = function (formId) { return contextUiFormSelector.items.get(formId).getVisible(); }
            form.FormSetVisible = function (formId, value) { contextUiFormSelector.items.get(formId).setVisible(value); }
        }
        return form;
    }
    function loadProcess(formContext) {
        if (!formContext) return;
        var process = {};
        if (formContext.data && formContext.data.process) {
            var getProcess = formContext.data.process;
            Object.defineProperty(process, "InstanceId", { get: function () { return getProcess.getInstanceId(); } });
            Object.defineProperty(process, "InstanceName", { get: function () { return getProcess.getInstanceName(); } });
            Object.defineProperty(process, "ActivePath", { get: function () { return getProcess.getActivePath(); } });
            Object.defineProperty(process, "Status", {
                get: function () { return getProcess.getStatus(); },
                set: function (value) { getProcess.setStatus(value, N); }
            });
            Object.defineProperty(process, "ActiveProcess", {
                get: function () {
                    var data = { Id: EMPTY_GUID, Name: EMPTY_STRING, IsRendered: false, Stages: N };
                    if (!getProcess.getActiveProcess) return data;
                    var activeProcess = getProcess.getActiveProcess();
                    if (activeProcess.getId) data.Id = activeProcess.getId();
                    if (activeProcess.getName) data.Name = activeProcess.getName();
                    if (activeProcess.isRendered) data.IsRendered = activeProcess.isRendered();
                    if (activeProcess.getStages) data.Stages = activeProcess.getStages();
                    return data;
                }
            });
            Object.defineProperty(process, "ActiveStage", {
                get: function () {
                    var data = { Category: N, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: N };
                    if (!getProcess.getActiveStage) return data;
                    var activeStage = getProcess.getActiveStage();
                    if (activeStage.getCategory) if (activeStage.getCategory().getValue) data.Category = activeStage.getCategory().getValue();
                    if (activeStage.getEntityName) data.EntityName = activeStage.getEntityName();
                    if (activeStage.getId) data.Id = activeStage.getId();
                    if (activeStage.getName) data.Name = activeStage.getName();
                    if (activeStage.getStatus) data.Status = activeStage.getStatus();
                    if (activeStage.getSteps) data.Steps = activeStage.getSteps();
                    return data;
                }
            });
            Object.defineProperty(process, "SelectedStage", {
                get: function () {
                    var data = { Category: N, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: N };
                    if (!getProcess.getSelectedStage) return data;
                    var selectedStage = getProcess.getSelectedStage();
                    if (selectedStage.getCategory) if (selectedStage.getCategory().getValue) data.Category = selectedStage.getCategory().getValue();
                    if (selectedStage.getEntityName) data.EntityName = selectedStage.getEntityName();
                    if (selectedStage.getId) data.Id = selectedStage.getId();
                    if (selectedStage.getName) data.Name = selectedStage.getName();
                    if (selectedStage.getStatus) data.Status = selectedStage.getStatus();
                    if (selectedStage.getSteps) data.Steps = selectedStage.getSteps();
                    return data;
                }
            });
            process.AddOnProcessStatusChange = function (callback) { getProcess.addOnProcessStatusChange(callback); };
            process.AddOnStageChange = function (callback) { getProcess.addOnStageChange(callback); };
            process.AddOnStageSelected = function (callback) { getProcess.addOnStageSelected(callback); };
            process.EnabledProcesses = function (callback) { getProcess.getEnabledProcesses(callback); };
            process.MoveNext = function (callback) { getProcess.moveNext(callback); };
            process.MovePrevious = function (callback) { getProcess.movePrevious(callback); };
            process.ProcessInstances = function (callback) { getProcess.getProcessInstances(callback); };
            process.RemoveOnProcessStatusChange = function (callback) { getProcess.removeOnProcessStatusChange(callback); };
            process.RemoveOnStageChange = function (callback) { getProcess.removeOnStageChange(callback); };
            process.RemoveOnStageSelected = function (callback) { getProcess.removeOnStageSelected(callback); };
            process.SetActiveProcess = function (processId, callback) { getProcess.setActiveProcess(processId, callback); };
            process.SetActiveProcessInstance = function (processInstanceId, callback) { getProcess.setActiveProcessInstance(processInstanceId, callback); };
            process.SetActiveStage = function (stageId, callback) { getProcess.setActiveStage(stageId, callback); };
        }
        if (formContext.ui && formContext.ui.process) {
            var getProcessUi = formContext.ui.process;
            Object.defineProperty(process, "DisplayState", {
                get: function () { return getProcessUi.getDisplayState(); },
                set: function (value) { getProcessUi.setDisplayState(value); }
            });
            Object.defineProperty(process, "Visible", {
                get: function () { return getProcessUi.getVisible(); },
                set: function (value) { getProcessUi.setVisible(value); }
            });
        }
        return process;
    }
    function loadField(formContext, body, field, type) {           
        var logicalName = (function () {
            if (type === undefined) return field.toLowerCase();
            return (type + field).toLowerCase();
        })();
        var control = formContext.getControl(logicalName);
        if (control === null) control = formContext.getControl(field);
        var attribute = (function () {
            if (formContext) {
                if (formContext.getAttribute) {
                    var attr = formContext.getAttribute(logicalName);
                    if (attr) {
                        return attr;
                    }
                }
                if (control) {
                    if (control.getAttribute) {
                        attr = control.getAttribute();
                        if (attr) {
                            return attr;
                        }
                    }
                }
            }
        })();        
        Object.defineProperty(body[field], "AttributeType", { get: function () { return attribute.getAttributeType(); } });
        Object.defineProperty(body[field], "Format", { get: function () { return attribute.getFormat(); } });
        Object.defineProperty(body[field], "InitialValue", { get: function () { return attribute.getInitialValue(); } });
        Object.defineProperty(body[field], "IsDirty", { get: function () { return attribute.getIsDirty(); } });
        Object.defineProperty(body[field], "IsPartyList", { get: function () { return attribute.getIsPartyList(); } });
        Object.defineProperty(body[field], "Max", { get: function () { return attribute.getMax(); } });
        Object.defineProperty(body[field], "MaxLength", { get: function () { return attribute.getMaxLength(); } });
        Object.defineProperty(body[field], "Min", { get: function () { return attribute.getMin(); } });
        Object.defineProperty(body[field], "AttributeName", { get: function () { return attribute.getName(); } });
        Object.defineProperty(body[field], "Options", { get: function () { return attribute.getOptions(); } });
        Object.defineProperty(body[field], "ControlOptions", { get: function () { return control.getOptions(); } });
        Object.defineProperty(body[field], "AttributeParent", { get: function () { return attribute.getParent(); } });
        Object.defineProperty(body[field], "SelectedOption", { get: function () { return attribute.getSelectedOption(); } });
        Object.defineProperty(body[field], "Text", { get: function () { return attribute.getText(); } });
        Object.defineProperty(body[field], "UserPrivilege", { get: function () { return attribute.getUserPrivilege(); } });
        Object.defineProperty(body[field], "IsValid", { get: function () { return attribute.isValid(); } });
        Object.defineProperty(body[field], "ControlType", { get: function () { return control.getControlType(); } });
        Object.defineProperty(body[field], "InitialUrl", { get: function () { return control.getInitialUrl(); } });
        Object.defineProperty(body[field], "ControlName", { get: function () { return control.getName(); } });
        Object.defineProperty(body[field], "Object", { get: function () { return control.getObject(); } });
        Object.defineProperty(body[field], "ControlParent", { get: function () { return control.getParent(); } });
        Object.defineProperty(body[field], "State", { get: function () { return control.getState(); } });
        Object.defineProperty(body[field], "TotalResultCount", { get: function () { return control.getTotalResultCount(); } });
        Object.defineProperty(body[field], "SelectedResults", { get: function () { return control.getSelectedResults(); } });
        Object.defineProperty(body[field], "Attribute", { get: function () { return control.getAttribute(); } });
        Object.defineProperty(body[field], "Precision", {
            get: function () { return attribute.getPrecision(); },
            set: function (value) { attribute.setPrecision(value); }
        });
        Object.defineProperty(body[field], "RequiredLevel", {
            get: function () { return attribute.getRequiredLevel(); },
            set: function (value) { attribute.setRequiredLevel(value); }
        });
        Object.defineProperty(body[field], "SubmitMode", {
            get: function () { return attribute.getSubmitMode(); },
            set: function (value) { attribute.setSubmitMode(value); }
        });
        Object.defineProperty(body[field], "Value", {
            get: function () {
                if (attribute !== undefined) return attribute.getValue();
                //throw new Error(`field: ${logicalName} removed on form`);
            },           
            set: function (value) { attribute.setValue(value); }
        });
        Object.defineProperty(body[field], "Data", {
            get: function () { return control.getData(); },
            set: function (value) { control.setData(value); }
        });
        Object.defineProperty(body[field], "DefaultView", {
            get: function () { return control.getDefaultView(); },
            set: function (value) { control.setDefaultView(value); }
        });
        Object.defineProperty(body[field], "Disabled", {
            get: function () { return control.getDisabled(); },
            set: function (value) { control.setDisabled(value); }
        });
        Object.defineProperty(body[field], "EntityTypes", {
            get: function () { return control.getEntityTypes(); },
            set: function (value) { control.setEntityTypes(value); }
        });
        Object.defineProperty(body[field], "Label", {
            get: function () { return control.getLabel(); },
            set: function (value) { control.setLabel(value); }
        });
        Object.defineProperty(body[field], "SearchQuery", {
            get: function () { return control.getSearchQuery(); },
            set: function (value) { control.setSearchQuery(value); }
        });
        Object.defineProperty(body[field], "ShowTime", {
            get: function () { return control.getShowTime(); },
            set: function (value) { control.setShowTime(value); }
        });
        Object.defineProperty(body[field], "Src", {
            get: function () { return control.getSrc(); },
            set: function (value) { control.setSrc(value); }
        });
        Object.defineProperty(body[field], "Visible", {
            get: function () { return control.getVisible(); },
            set: function (value) { control.setVisible(value); }
        });
        body[field].ContentWindow = function (successCallback, errorCallback) { control.getContentWindow().then(successCallback, errorCallback); }
        body[field].Option = function (value) { return attribute.getOption(value); };
        body[field].RemoveOnChange = function (callback) { attribute.removeOnChange(callback); };
        body[field].AddCustomFilter = function (filter, entityLogicaName) { control.addCustomFilter(filter, entityLogicaName); };
        body[field].AddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) { control.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault); };
        body[field].AddOnPostSearch = function (callback) { control.addOnPostSearch(callback); };
        body[field].AddOnResultOpened = function (callback) { control.addOnResultOpened(callback); };
        body[field].AddOnSelection = function (callback) { control.addOnSelection(callback); };
        body[field].AddPreSearch = function (callback) { control.addPreSearch(callback); };
        body[field].ClearNotification = function (uniqueId) { return control.clearNotification(uniqueId); };
        body[field].ClearOptions = function () { control.clearOptions(); };
        body[field].AddOnChange = function (callback) { attribute.addOnChange(callback); };
        body[field].FireOnChange = function () { attribute.fireOnChange(); };
        body[field].OpenSearchResult = function (resultNumber, mode) { return control.openSearchResult(resultNumber, mode); };
        body[field].Refresh = function () { control.refresh(); };
        body[field].RemoveOnPostSearch = function (callback) { control.removeOnPostSearch(callback); };
        body[field].RemoveOnResultOpened = function (callback) { control.removeOnResultOpened(callback); };
        body[field].RemoveOnSelection = function (callback) { control.removeOnSelection(callback); };
        body[field].RemoveOption = function (value) { control.removeOption(value); };
        body[field].RemovePreSearch = function (callback) { control.removePreSearch(callback); };
        body[field].Focus = function () { control.setFocus(); };
        body[field].SetNotification = function (message, uniqueId) { return control.setNotification(message, uniqueId); };
        body[field].AddOption = function (text, value, index) { var option = { text: text, value: value }; control.addOption(option, index); };
        body[field].AddNotification = function (title, message, notificationLevel, uniqueId, callback) {
            var actions = { message: message, actions: [callback] };
            var notification = { messages: [title], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
            return control.addNotification(notification);
        };
        body[field].AddOnLookupTagClick = function (callback) { control.addOnLookupTagClick(callback); };
        body[field].RemoveOnLookupTagClick = function (callback) { control.removeOnLookupTagClick(callback); };
        body[field].SetIsValid = function (valid, message) { attribute.setIsValid(valid, message); };
    }
    function loadFields(formContext, body, type) {
        for (var field in body) {
            loadField(formContext, body, field, type);
        }
        return body;
    }
    function loadSection(formContext, tab, sections, section) {
        if (!formContext) return;
        if (formContext.ui && formContext.ui.tabs && formContext.ui.tabs.get) {
            var tabObject = formContext.ui.tabs.get(tab);
            if (!tabObject) return;
            if (tabObject.sections && tabObject.sections.get) {
                var sectionObject = tabObject.sections.get(section);
                Object.defineProperty(sections[section], "Name", { get: function () { return sectionObject.getName(); } });
                Object.defineProperty(sections[section], "Parent", { get: function () { return sectionObject.getParent(); } });
                Object.defineProperty(sections[section], "Label", {
                    get: function () { return sectionObject.getLabel(); },
                    set: function (value) { sectionObject.setLabel(value); }
                });
                Object.defineProperty(sections[section], "Visible", {
                    get: function () { return sectionObject.getVisible(); },
                    set: function (value) { sectionObject.setVisible(value); }
                });
            }
        }
    }
    function loadTab(formContext, tabs, tab) {
        if (!formContext) return;
        if (formContext.ui && formContext.ui.tabs && formContext.ui.tabs.get) {
            var tabObject = formContext.ui.tabs.get(tab);            
            Object.defineProperty(tabs[tab], "Name", { get: function () { return tabObject.getName(); } });
            Object.defineProperty(tabs[tab], "Parent", { get: function () { return tabObject.getParent(); } });
            Object.defineProperty(tabs[tab], "DisplayState", {
                get: function () { return tabObject.getDisplayState(); },
                set: function (value) { tabObject.setDisplayState(value); }
            });
            Object.defineProperty(tabs[tab], "Label", {
                get: function () { return tabObject.getLabel(); },
                set: function (value) { tabObject.setLabel(value); }
            });
            Object.defineProperty(tabs[tab], "Visible", {
                get: function () { return tabObject.getVisible(); },
                set: function (value) { tabObject.setVisible(value); }
            });
            tabs[tab].AddTabStateChange = function (callback) { tabObject.addTabStateChange(callback); };
            tabs[tab].Focus = function () { tabObject.setFocus(); };
            tabs[tab].RemoveTabStateChange = function (callback) { tabObject.removeTabStateChange(callback); };
            for (var section in tabs[tab].Section) {
                loadSection(formContext, tab, tabs[tab].Section, section);
            }
        }
    }
    function loadTabs(formContext, tabs) {
        for (var tab in tabs) {
            loadTab(formContext, tabs, tab);
        }
    }
    function loadNavigation(formContext, navigations, navigation) {
        if (!formContext) return;
        if (formContext.ui && formContext.ui.navigation && formContext.ui.navigation.items && formContext.ui.navigation.items.get) {
            var navigationItem = formContext.ui.navigation.items.get(navigation);
            Object.defineProperty(navigations[navigation], "Id", { get: function () { return navigationItem.getId(); } });
            Object.defineProperty(navigations[navigation], "Label", {
                get: function () { return navigationItem.getLabel(); },
                set: function (value) { navigationItem.setLabel(value); }
            });
            Object.defineProperty(navigations[navigation], "Visible", {
                get: function () { return navigationItem.getVisible(); },
                set: function (value) { navigationItem.setVisible(value); }
            });
            navigations[navigation].Focus = function () { navigationItem.setFocus(); };
        }
    }
    function loadNavigations(formContext, navigations) {
        for (var navigation in navigations) {
            loadNavigation(formContext, navigations, navigation);
        }
    }
    function loadQuickForm(formContext, quickForms, quickForm) {
        if (!formContext || !formContext.ui || !formContext.ui.quickForms || !formContext.ui.quickForms.get) return;
        var quickViewControl = formContext.ui.quickForms.get(quickForm);
        quickForms[quickForm].Controls = function (arg) {
            if (!quickViewControl) return [];
            if (arg === undefined) return quickViewControl.getControl();
            return quickViewControl.getControl(arg);
        };
        Object.defineProperty(quickForms[quickForm], "ControlType", {
            get: function () {
                if (!quickViewControl) return EMPTY_STRING;
                return quickViewControl.getControlType();
            }
        });
        Object.defineProperty(quickForms[quickForm], "Disabled", {
            get: function () {
                if (!quickViewControl) return true;
                return quickViewControl.getDisabled();
            },
            set: function (value) {
                if (!quickViewControl) return;
                quickViewControl.setDisabled(value);
            }
        });
        Object.defineProperty(quickForms[quickForm], "Label", {
            get: function () {
                if (!quickViewControl) return EMPTY_STRING;
                return quickViewControl.getLabel();
            },
            set: function (value) {
                if (!quickViewControl) return;
                quickViewControl.setLabel(value);
            }
        });
        Object.defineProperty(quickForms[quickForm], "ControlName", {
            get: function () {
                if (!quickViewControl) return EMPTY_STRING;
                return quickViewControl.getName();
            }
        });
        Object.defineProperty(quickForms[quickForm], "ControlParent", {
            get: function () {
                if (!quickViewControl) return {};
                return quickViewControl.getParent();
            }
        });
        Object.defineProperty(quickForms[quickForm], "Visible", {
            get: function () {
                if (!quickViewControl) return false;
                return quickViewControl.getVisible();
            },
            set: function (value) {
                if (!quickViewControl) return;
                quickViewControl.setVisible(value);
            }
        });
        quickForms[quickForm].IsLoaded = function () {
            if (!quickViewControl) return false;
            return quickViewControl.isLoaded();
        };
        quickForms[quickForm].Refresh = function () {
            if (!quickViewControl) return;
            quickViewControl.refresh();
        };
        quickForms[quickForm].Focus = function () {
            if (!quickViewControl) return;
            quickViewControl.setFocus();
        };
    }
    function loadQuickForms(formContext, quickForms) {
        for (var quickForm in quickForms) {
            loadQuickForm(formContext, quickForms, quickForm);
        }
    }
    function loadGrid(formContext, grids, grid) {        
        if (!has(formContext, 'getControl')) return;
        var gridControl = formContext.getControl(grid);
        grids[grid].AddOnLoad = function (callback) {
            if (!has(gridControl, 'addOnLoad')) return;
            gridControl.addOnLoad(callback);
        };
        grids[grid].RemoveOnLoad = function (callback) {
            if (!has(gridControl, 'removeOnLoad')) return;
            gridControl.removeOnLoad(callback);
        };
        Object.defineProperty(grids[grid], "EntityName", {
            get: function () {
                if (!has(gridControl, 'getEntityName')) return EMPTY_STRING;
                return gridControl.getEntityName();
            }
        });
        Object.defineProperty(grids[grid], "FetchXml", {
            get: function () {
                if (!has(gridControl, 'getFetchXml')) return EMPTY_STRING;
                return gridControl.getFetchXml();
            }
        });
        Object.defineProperty(grids[grid], "GridType", {
            get: function () {
                if (!has(gridControl, 'getGridType')) return 2;
                return gridControl.getGridType();
            }
        });
        Object.defineProperty(grids[grid], "Relationship", {
            get: function () {
                if (!has(gridControl, 'getRelationship')) return {};
                return gridControl.getRelationship();
            }
        });
        grids[grid].Url = function (client) {
            if (!has(gridControl, 'getUrl')) return EMPTY_STRING;
            return gridControl.getUrl(client);
        };
        Object.defineProperty(grids[grid], "ViewSelector", {
            get: function () {
                if (!has(gridControl, 'getViewSelector')) return {};
                var viewSelectorControl = gridControl.getViewSelector();
                var viewSelector = {};                
                Object.defineProperty(viewSelector, "CurrentView", {
                    get: function () {
                        if (!has(viewSelectorControl, 'getCurrentView')) return EMPTY_REFERENCE;
                        return gridControl.getViewSelector().getCurrentView();
                    },
                    set: function (value) {
                        if (!has(viewSelectorControl, 'getCurrentView')) return;
                        gridControl.getViewSelector().setCurrentView(value);
                    }
                });
                Object.defineProperty(viewSelector, "Visible", {
                    get: function () {
                        if (!has(viewSelectorControl, 'isVisible')) return false;
                        return gridControl.getViewSelector().isVisible();
                    },
                });
                return viewSelector;
            }
        });
        grids[grid].Refresh = function () {
            if (!has(gridControl, 'refresh')) return;
            gridControl.refresh();
        };
        grids[grid].RefreshRibbon = function () {
            if (!has(gridControl, 'refreshRibbon')) return;
            gridControl.refreshRibbon();
        };
        grids[grid].OpenRelatedGrid = function () {
            if (!has(gridControl, 'openRelatedGrid')) return;
            gridControl.openRelatedGrid();
        };
        Object.defineProperty(grids[grid], "Rows", {
            get: function () {
                var obj = {};
                obj.getLength = function () {     
                    if (!gridControl) return 0;
                    return gridControl.getGrid().getRows().getLength();                    
                }
                obj.get = function (index) {
                    if (!gridControl) return {};
                    var row = gridControl.getGrid().getRows().get(index);
                    return loadGridRow(row);
                }
                obj.forEach = function (callback) {
                    if (!gridControl) return;
                    var rows = gridControl.getGrid().getRows();
                    for (var index = 0; index < rows.getLength(); index++) {
                        var row = rows.get(index);
                        callback(loadGridRow(row), index);
                    }
                }
                return obj;
            }
        });
        Object.defineProperty(grids[grid], "SelectedRows", {
            get: function () {
                var obj = {};
                obj.getLength = function () {
                    if (!gridControl) return 0;
                    return gridControl.getGrid().getSelectedRows().getLength();
                }
                obj.get = function (index) {
                    if (!gridControl) return {};
                    var row = gridControl.getGrid().getSelectedRows().get(index);
                    return loadGridRow(row);
                }
                obj.forEach = function (callback) {
                    if (!gridControl) return;
                    var selectedRows = gridControl.getGrid().getSelectedRows();
                    for (var index = 0; index < selectedRows.getLength(); index++) {
                        var row = selectedRows.get(index);
                        callback(loadGridRow(row), index);
                    }
                }
                return obj;
            }
        });
        Object.defineProperty(grids[grid], "OnRecordSelect", {
            get: function () {
                return loadGridRow(formContext);
            }
        });
    }    
    function loadGridRow(row) {
        var obj = {};
        Object.defineProperty(obj, "EntityName", {
            get: function () {
                if (!has(row, 'data.entity.getEntityName')) return EMPTY_STRING;
                return row.data.entity.getEntityName();                
            }
        });
        Object.defineProperty(obj, "EntityReference", {
            get: function () {
                if (!has(row, 'data.entity.getEntityReference')) return EMPTY_REFERENCE;
                return row.data.entity.getEntityReference();                
            }
        });
        Object.defineProperty(obj, "EntityId", {
            get: function () {
                if (!has(row, 'data.entity.getId')) return EMPTY_GUID;
                return row.data.entity.getId();                
            }
        });
        Object.defineProperty(obj, "PrimaryAttributeValue", {
            get: function () {
                if (!has(row, 'data.entity.getPrimaryAttributeValue')) return EMPTY_STRING;
                return row.data.entity.getPrimaryAttributeValue();
            }
        });
        Object.defineProperty(obj, "Columns", {
            get: function () {
                var col = {};
                col.getLength = function () {
                    if (!has(row, 'data.entity.attributes.getLength')) return 0;
                    return row.data.entity.attributes.getLength();                    
                }
                col.get = function (value) {
                    if (!has(row, 'data.entity.attributes')) return {};
                    var columns = row.data.entity.attributes;
                    for (var index = 0; index < columns.getLength(); index++) {
                        var column = columns.get(index);
                        if (column.getName() === value) {
                            return loadGridColumn(column);
                        }
                    }
                    return {};
                }
                col.forEach = function (callback) {
                    if (!has(row, 'data.entity.attributes')) return;
                    var columns = row.data.entity.attributes;
                    for (var index = 0; index < columns.getLength(); index++) {
                        var column = columns.get(index);
                        callback(loadGridColumn(column), index);
                    }
                }
                return col;
            }
        });
        return obj;
    }
    function loadGridColumn(col) {
        var obj = {};
        Object.defineProperty(obj, "Name", {
            get: function () {
                if (!has(col, 'getName')) return EMPTY_STRING;
                return col.getName();
            }
        });
        Object.defineProperty(obj, "RequiredLevel", {
            get: function () {
                if (!has(col, 'getRequiredLevel')) return "none";
                return col.getRequiredLevel();
            },
            set: function (value) {
                if (!has(col, 'setRequiredLevel')) return;
                col.setRequiredLevel(value);
            }
        });
        Object.defineProperty(obj, "Value", {
            get: function () {
                if (!has(col, 'getValue')) return EMPTY_STRING;
                return col.getValue();
            },
            set: function (value) {
                if (!has(col, 'setValue')) return;
                col.setValue(value);
            }
        });
        obj.SetNotification = function (message, uniqueId) {
            if (!has(col, 'controls.get')) return false;
            var control = col.controls.get(0);
            if (!control) return false;
            return control.setNotification(message, uniqueId);
        };
        obj.ClearNotification = function (uniqueId) {
            if (!has(col, 'controls.get')) return false;
            var control = col.controls.get(0);
            if (!control) return false;
            return control.clearNotification(uniqueId);
        };
        Object.defineProperty(obj, "Disabled", {
            get: function () {
                if (!has(col, 'controls.get')) return false;
                var control = col.controls.get(0);                    
                if (!control) return false;
                return control.getDisabled();                
            },
            set: function (value) {
                if (!has(col, 'controls.get')) return false;
                var control = col.controls.get(0);
                if (!control) return false;
                control.setDisabled(value);
            }
        });
        Object.defineProperty(obj, "Label", {
            get: function () {
                if (!has(col, 'controls.get')) return EMPTY_STRING;
                var control = col.controls.get(0);
                if (!control) return EMPTY_STRING;
                return control.getLabel();
            }
        });
        return obj;
    }
    function loadGrids(formContext, grids) {        
        for (var grid in grids) {
            loadGrid(formContext, grids, grid);
        }
    }
    function loadUtility(defaultWebResourceName) {
        var utility = {};
        if (Xrm && Xrm.Utility) {
            var getUtility = Xrm.Utility;
            Object.defineProperty(utility, "LearningPathAttributeName", { get: function () { return getUtility.getLearningPathAttributeName(); } });
            utility.CloseProgressIndicator = function () { getUtility.closeProgressIndicator(); };
            utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) { getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback); };
            utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) { getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback); };
            utility.ResourceString = function (webResourceName, key) { return getUtility.getResourceString(webResourceName, key); };
            utility.Resource = function (key) { if (defaultWebResourceName !== undefined) return getUtility.getResourceString(defaultWebResourceName, key); return EMPTY_STRING; };
            utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) { getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback); };
            utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) { getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback); };
            utility.RefreshParentGrid = function (lookupOptions) { getUtility.refreshParentGrid(lookupOptions); };
            utility.ShowProgressIndicator = function (message) { getUtility.showProgressIndicator(message); };
            Object.defineProperty(utility, "PageContext", { get: function () { return getUtility.getPageContext(); } });
        }
        if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext) {
            var getGlobalContext = Xrm.Utility.getGlobalContext();            
            Object.defineProperty(utility, "Client", {
                get: function () {
                    var Client = {};
                    if (getGlobalContext.client) {
                        var client = getGlobalContext.client;
                        Object.defineProperty(Client, "ClientName", { get: function () { return client.getClient(); } });
                        Object.defineProperty(Client, "ClientState", { get: function () { return client.getClientState(); } });
                        Object.defineProperty(Client, "FormFactor", { get: function () { return client.getFormFactor(); } });
                        Object.defineProperty(Client, "IsOffline", { get: function () { return client.isOffline(); } });                        
                    }
                    return Client;
                }
            });
            Object.defineProperty(utility, "OrganizationSettings", {
                get: function () {
                    var OrganizationSettings = {};
                    if (getGlobalContext.organizationSettings) {
                        var organizationSettings = getGlobalContext.organizationSettings;
                        Object.defineProperty(OrganizationSettings, "Attributes", { get: function () { return organizationSettings.attributes; } });//NOT-TEST
                        Object.defineProperty(OrganizationSettings, "BaseCurrencyId", { get: function () { return organizationSettings.baseCurrencyId; } });
                        Object.defineProperty(OrganizationSettings, "DefaultCountryCode", { get: function () { return organizationSettings.defaultCountryCode; } });
                        Object.defineProperty(OrganizationSettings, "LanguageId", { get: function () { return organizationSettings.languageId; } });
                        Object.defineProperty(OrganizationSettings, "OrganizationId", { get: function () { return organizationSettings.organizationId; } });
                        Object.defineProperty(OrganizationSettings, "UniqueName", { get: function () { return organizationSettings.uniqueName; } });
                        Object.defineProperty(OrganizationSettings, "UseSkypeProtocol", { get: function () { return organizationSettings.useSkypeProtocol; } });
                        Object.defineProperty(OrganizationSettings, "IsAutoSaveEnabled", { get: function () { return organizationSettings.isAutoSaveEnabled; } });                        
                    }
                    return OrganizationSettings;
                }
            });
            Object.defineProperty(utility, "UserSettings", {
                get: function () {
                    var UserSettings = {};
                    if (getGlobalContext.userSettings) {
                        var userSettings = getGlobalContext.userSettings;
                        Object.defineProperty(UserSettings, "DateFormattingInfo", { get: function () { return userSettings.dateFormattingInfo; } });
                        Object.defineProperty(UserSettings, "DefaultDashboardId", { get: function () { return userSettings.defaultDashboardId; } });
                        Object.defineProperty(UserSettings, "IsGuidedHelpEnabled", { get: function () { return userSettings.isGuidedHelpEnabled; } });
                        Object.defineProperty(UserSettings, "IsHighContrastEnabled", { get: function () { return userSettings.isHighContrastEnabled; } });
                        Object.defineProperty(UserSettings, "IsRTL", { get: function () { return userSettings.isRTL; } });
                        Object.defineProperty(UserSettings, "LanguageId", { get: function () { return userSettings.languageId; } });
                        Object.defineProperty(UserSettings, "Roles", { get: function () { debugger; return userSettings.roles; } });
                        Object.defineProperty(UserSettings, "SecurityRolePrivileges", { get: function () { return userSettings.securityRolePrivileges; } });                        
                        Object.defineProperty(UserSettings, "TransactionCurrency", { get: function () { return userSettings.transactionCurrency; } });                        
                        Object.defineProperty(UserSettings, "UserId", { get: function () { return userSettings.userId; } });
                        Object.defineProperty(UserSettings, "UserName", { get: function () { return userSettings.userName; } });
                        Object.defineProperty(UserSettings, "TimeZoneOffsetMinutes", { get: function () { return userSettings.getTimeZoneOffsetMinutes(); } });
                    }
                    return UserSettings;
                }
            });
            utility.AdvancedConfigSetting = function (setting) { return getGlobalContext.getAdvancedConfigSetting(setting); };
            Object.defineProperty(utility, "ClientUrl", { get: function () { return getGlobalContext.getClientUrl(); } });            
            utility.CurrentAppName = function (successCallback, errorCallback) { getGlobalContext.getCurrentAppName().then(successCallback, errorCallback); };
            utility.CurrentAppProperties = function (successCallback, errorCallback) { getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback); };
            Object.defineProperty(utility, "CurrentAppUrl", { get: function () { return getGlobalContext.getCurrentAppUrl(); } });
            Object.defineProperty(utility, "Version", { get: function () { return getGlobalContext.getVersion(); } });
            utility.WebResourceUrl = function (webResourceName) { return getGlobalContext.getWebResourceUrl(webResourceName); };
            Object.defineProperty(utility, "IsOnPremises", { get: function () { return getGlobalContext.isOnPremises(); } });
            utility.PrependOrgName = function (sPath) { return getGlobalContext.prependOrgName(sPath); };
        }
        if (Xrm && Xrm.Navigation) {
            var getNavigation = Xrm.Navigation;
            utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) { getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback); };
            utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) { getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback); };
            utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) { getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback); };
            utility.OpenFile = function (file, openFileOptions) { getNavigation.openFile(file, openFileOptions); };
            utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) { getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback); };
            utility.OpenUrl = function (url, openUrlOptions) { getNavigation.openUrl(url, openUrlOptions); };
            utility.OpenWebResource = function (webResourceName, windowOptions, data) { getNavigation.openWebResource(webResourceName, windowOptions, data); };
            utility.NavigateTo = function (pageInput, navigationOptions, successCallback, errorCallback) { getNavigation.navigateTo(pageInput, navigationOptions).then(successCallback, errorCallback); };
        }
        if (Xrm && Xrm.Panel) {
            var getPanel = Xrm.Panel;
            utility.LoadPanel = function (url, title) { getPanel.loadPanel(url, title); };
        }
        if (Xrm && Xrm.Encoding) {
            var getEncoding = Xrm.Encoding;
            utility.XmlAttributeEncode = function (arg) { return getEncoding.xmlAttributeEncode(arg); };
            utility.XmlEncode = function (arg) { return getEncoding.xmlEncode(arg); };
            utility.HtmlAttributeEncode = function (arg) { return getEncoding.htmlAttributeEncode(arg); };
            utility.HtmlDecode = function (arg) { return getEncoding.htmlDecode(arg); };
            utility.HtmlEncode = function (arg) { return getEncoding.htmlEncode(arg); };
        }
        if (Xrm && Xrm.Device) {
            var getDevice = Xrm.Device;
            utility.CaptureAudio = function (successCallback, errorCallback) { getDevice.captureAudio().then(successCallback, errorCallback); };
            utility.CaptureImage = function (imageOptions, successCallback, errorCallback) { getDevice.captureImage(imageOptions).then(successCallback, errorCallback); };
            utility.CaptureVideo = function (successCallback, errorCallback) { getDevice.captureVideo().then(successCallback, errorCallback); };
            utility.BarcodeValue = function (successCallback, errorCallback) { getDevice.getBarcodeValue().then(successCallback, errorCallback); };
            utility.CurrentPosition = function (successCallback, errorCallback) { getDevice.getCurrentPosition().then(successCallback, errorCallback); };
            utility.PickFile = function (pickFileOptions, successCallback, errorCallback) { getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback); };
        }
        if (Xrm && Xrm.App) {
            var getApp = Xrm.App;
            utility.AddGlobalNotification = function (notification, successCallback, errorCallback) { getApp.addGlobalNotification(notification).then(successCallback, errorCallback); }
            utility.ClearGlobalNotification = function (uniqueId, successCallback, errorCallback) { getApp.clearGlobalNotification(uniqueId).then(successCallback, errorCallback); }
        }
        return utility;
    }
    return {
        LoadForm: loadForm,
        LoadProcess: loadProcess,
        LoadFields: loadFields,
        LoadTabs: loadTabs,
        LoadNavigations: loadNavigations,
        LoadQuickForms: loadQuickForms,
        LoadGrids: loadGrids,
        LoadUtility: loadUtility        
    }
})();
var OptionSet;
(function (OptionSet) {
    OptionSet.FormType = {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 5
    };
    OptionSet.SaveOption = {
        SaveAndClose: 'saveandclose',
        SaveAndNew: 'saveandnew'
    };
    OptionSet.SaveMode = {
        Save: 1,
        SaveAndClose: 2,
        Deactivate: 5,
        Reactivate: 6,
        Email: 7,
        Disqualify: 15,
        Qualify: 16,
        Assign: 47,
        SaveAsCompleted: 58,
        SaveAndNew: 59,
        AutoSave: 70
    };
    OptionSet.FormNotificationLevel = {
        Error: 'ERROR',
        Warning: 'WARNING',
        Info: 'INFO'
    };
    OptionSet.TabDisplayState = {
        Expanded: 'expanded',
        Collapsed: 'collapsed'
    };
    OptionSet.ProcessDisplayState = {
        Expanded: 'expanded',
        Collapsed: 'collapsed',
        Floating: 'floating'
    };
    OptionSet.ProcessStatus = {
        Active: 'active',
        Aborted: 'aborted',
        Finished: 'finished'
    };
    OptionSet.FieldAttributeType = {
        Boolean: 'boolean',
        DateTime: 'datetime',
        Decimal: 'decimal',
        Double: 'double',
        Integer: 'integer',
        Lookup: 'lookup',
        Memo: 'memo',
        Money: 'money',
        MultiOptionSet: 'multioptionset',
        OptionSet: 'optionset',
        String: 'string'
    };
    OptionSet.FieldFormat = {
        Date: 'date',
        DateTime: 'datetime',
        Duration: 'duration',
        Email: 'email',
        Language: 'language',
        None: 'none',
        TextArea: 'textarea',
        Text: 'text',
        TickerSymbol: 'tickersymbol',
        Phone: 'phone',
        TimeZone: 'timezone',
        Url: 'url'
    };
    OptionSet.FieldRequiredLevel = {
        None: 'none',
        Required: 'required',
        Recommended: 'recommended'
    };
    OptionSet.FieldSubmitMode = {
        Always: 'always',
        Never: 'never',
        Dirty: 'dirty'
    };
    OptionSet.FieldControlType = {
        Standard: 'standard',
        Iframe: 'iframe',
        KbSearch: 'kbsearch',
        Lookup: 'lookup',
        MultiSelectOptionset: 'multiselectoptionset',
        Notes: 'notes',
        OptionSet: 'optionset',
        QuickForm: 'quickform',
        SubGrid: 'subgrid',
        TimerControl: 'timercontrol',
        TimelineWall: 'timelinewall',
        WebResource: 'webresource'
    };
    OptionSet.FieldNotificationLevel = {
        Error: 'ERROR',
        Recommendation: 'RECOMMENDATION'
    };
    OptionSet.ProcessCategory = {
        Qualify: 0,
        Develop: 1,
        Propose: 2,
        Close: 3,
        Identify: 4,
        Research: 5,
        Resolve: 6
    };
    OptionSet.TimerState = {
        NotSet: 1,
        InProgress: 2,
        Warning: 3,
        Violated: 4,
        Success: 5,
        Expired: 6,
        Canceled: 7,
        Paused: 8
    };
    OptionSet.ClientName = {
        Web: 'Web',
        Outlook: 'Outlook',
        Mobile: 'Mobile'
    };
    OptionSet.ClientState = {
        Online: 'Online',
        Offline: 'Offline'
    };
    OptionSet.FormFactor = {
        Unknown: 0,
        Desktop: 1,
        Tablet: 2,
        Phone: 3
    };
    OptionSet.AdvancedConfigSetting = {
        MaxChildIncidentNumber: 'MaxChildIncidentNumber',
        MaxIncidentMergeNumber: 'MaxIncidentMergeNumber'
    };
    OptionSet.OpenFileOption = {
        Open: 1,
        Save: 2
    };
    OptionSet.GridType = {
        HomePageGrid: 1,
        Subgrid: 2
    }
})(OptionSet || (OptionSet = {}));
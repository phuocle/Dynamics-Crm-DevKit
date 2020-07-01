//@ts-check
var devKit = (function () {    
    //@ts-check
    "use strict";
    var Xrm = Xrm || {};
    var EMPTY_STRING = "";
    var EMPTY_GUID = "{00000000-0000-0000-0000-000000000000}";
    var EMPTY_REFERENCE = { entityType: EMPTY_STRING, id: EMPTY_GUID, name: EMPTY_STRING };
    var EMPTY_NUMBER = 0;
    var EMPTY_BOOL = false;
    function has(obj, key) {
        if (isNullOrUndefined(obj)) return false;
        if (Object.keys(obj).length === 0 && obj.constructor === Object) return false;
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
        var loadStep = function (step) {
            var obj = {};
            Object.defineProperty(obj, "Attribute", {
                get: function () {
                    if (has(step, 'getAttribute')) {
                        return step.getAttribute();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "Name", {
                get: function () {
                    if (has(step, 'getName')) {
                        return step.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "Required", {
                get: function () {
                    if (has(step, 'isRequired')) {
                        return step.isRequired();
                    }
                    return EMPTY_BOOL;
                }
            });
            Object.defineProperty(obj, "Progress", {
                get: function () {
                    if (has(step, 'getProgress')) {
                        return step.getProgress();
                    }
                    return EMPTY_NUMBER;
                }
            });
            obj.SetProgress = function (stepProgress, message) {
                if (has(step, 'setProgress')) {
                    step.setProgress(stepProgress, message);
                }
            }
            return obj;
        }
        var loadStage = function (stage) {
            var obj = {};
            Object.defineProperty(obj, "Category", {
                get: function () {
                    if (stage && stage.getCategory && stage.getCategory().getValue) {
                        return stage.getCategory().getValue();
                    }
                    return EMPTY_NUMBER;
                }
            });
            Object.defineProperty(obj, "EntityName", {
                get: function () {
                    if (has(stage, 'getEntityName')) {
                        return stage.getEntityName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "Id", {
                get: function () {
                    if (stage && stage.getId) {
                        return stage.getId();
                    }
                    return EMPTY_GUID;
                }
            });
            Object.defineProperty(obj, "Name", {
                get: function () {
                    if (has(stage, 'getName')) {
                        return stage.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "Status", {
                get: function () {
                    if (has(stage, 'getStatus')) {
                        return stage.getStatus();
                    }
                    return "active";
                }
            });
            obj.AllowCreateNew = function (callback) {
                if (has(stage, 'getNavigationBehavior')) {
                    stage.getNavigationBehavior().allowCreateNew = callback;
                }
            }
            Object.defineProperty(obj, "Steps", {
                get: function () {
                    var obj = {};
                    obj.getLength = function () {
                        if (has(stage, 'getSteps')) {
                            return stage.getSteps().getLength();
                        }
                        return EMPTY_NUMBER;
                    }
                    obj.get = function (index) {
                        if (has(stage, 'getSteps')) {
                            var step = stage.getSteps().get(index);
                            return loadStep(step);
                        }
                        return loadStep({});
                    }
                    obj.forEach = function (callback) {
                        if (has(stage, 'getSteps')) {
                            var steps = stage.getSteps();
                            for (var index = 0; index < steps.getLength(); index++) {
                                var step = steps.get(index);
                                callback(loadStep(step), index);
                            }
                        }
                    }
                    return obj;
                }
            });
            return obj;
        }
        var loadProcess = function (process) {
            var obj = {};
            Object.defineProperty(obj, "Id", {
                get: function () {
                    if (has(process, 'getId')) {
                        return process.getId();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "Name", {
                get: function () {
                    if (has(process, 'getName')) {
                        return process.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "IsRendered", {
                get: function () {
                    if (has(process, 'isRendered')) {
                        return process.isRendered();
                    }
                    return EMPTY_BOOL;
                }
            });
            Object.defineProperty(obj, "Stages", {
                get: function () {
                    var obj = {};
                    obj.getLength = function () {
                        if (has(process, 'getStages')) {
                            return process.getStages().getLength();
                        }
                        return EMPTY_NUMBER;
                    }
                    obj.get = function (index) {
                        if (has(process, 'getStages')) {
                            var stage = process.getStages().get(index);
                            return loadStage(stage);
                        }
                        return loadStage({});
                    }
                    obj.forEach = function (callback) {
                        if (has(process, 'getStages')) {
                            var stages = process.getStages();
                            for (var index = 0; index < stages.getLength(); index++) {
                                var stage = stages.get(index);
                                callback(loadStage(stage), index);
                            }
                        }
                    }
                    return obj;
                }
            });
            return obj;
        }
        var process = {};
        var getProcess = null;
        if (has(formContext, 'data.process')) {
            getProcess = formContext.data.process;
        }
        var getProcessUi = null;
        if (has(formContext, 'ui.process')) {
            getProcessUi = formContext.ui.process;
        }
        process.AddOnPreProcessStatusChange = function (callback) {
            if (has(getProcess, 'addOnPreProcessStatusChange')) {
                getProcess.addOnPreProcessStatusChange(callback);
            }
        };
        process.RemoveOnPreProcessStatusChange = function (callback) {
            if (has(getProcess, 'removeOnPreProcessStatusChange')) {
                getProcess.removeOnPreProcessStatusChange(callback);
            }
        };
        process.AddOnProcessStatusChange = function (callback) {
            if (has(getProcess, 'addOnProcessStatusChange')) {
                getProcess.addOnProcessStatusChange(callback);
            }
        };
        process.RemoveOnProcessStatusChange = function (callback) {
            if (has(getProcess, 'removeOnProcessStatusChange')) {
                getProcess.removeOnProcessStatusChange(callback);
            }
        };
        process.AddOnStageChange = function (callback) {
            if (has(getProcess, 'addOnStageChange')) {
                getProcess.addOnStageChange(callback);
            }
        };
        process.RemoveOnStageChange = function (callback) {
            if (has(getProcess, 'removeOnStageChange')) {
                getProcess.removeOnStageChange(callback);
            }
        };
        process.AddOnStageSelected = function (callback) {
            if (getProcess) {
                getProcess.addOnStageSelected(callback);
            }
        };
        process.RemoveOnStageSelected = function (callback) {
            if (has(getProcess, 'removeOnStageSelected')) {
                getProcess.removeOnStageSelected(callback);
            }
        };
        process.EnabledProcesses = function (callback) {
            if (has(getProcess, 'getEnabledProcesses')) {
                getProcess.getEnabledProcesses(function (enabledProcesses) {
                    var processes = [];
                    for (var processId in enabledProcesses) {
                        processes.push({ ProcessId: processId, ProcessName: enabledProcesses[processId] });
                    }
                    callback(processes);
                });
            }
        };
        process.MoveNext = function (callback) {
            if (has(getProcess, 'moveNext')) {
                getProcess.moveNext(callback);
            }
        };
        process.MovePrevious = function (callback) {
            if (has(getProcess, 'movePrevious')) {
                getProcess.movePrevious(callback);
            }
        };
        process.ProcessInstances = function (callback) {
            if (has(getProcess, 'getProcessInstances')) {
                getProcess.getProcessInstances(function (processInstances) {
                    var processes = [];
                    for (var processId in processInstances) {
                        var process = processInstances[processId];
                        processes.push({
                            ProcessId: process.ProcessDefinitionID,
                            ProcessName: process.ProcessDefinitionName,
                            CreatedOn: process.CreatedOn,
                            CreatedOnDate: process.CreatedOnDate,
                            InstanceId: process.ProcessInstanceID,
                            InstanceName: process.ProcessInstanceName,
                            Status: process.StatusCodeName
                        });
                    }
                    callback(processes);
                });
            }
        };
        process.SetActiveStage = function (stageId, callback) {
            if (has(getProcess, 'setActiveStage')) {
                getProcess.setActiveStage(stageId, callback);
            }
        };
        process.SetActiveProcessInstance = function (processInstanceId, callback) {
            if (has(getProcess, 'setActiveProcessInstance')) {
                getProcess.setActiveProcessInstance(processInstanceId, callback);
            }
        };
        process.SetActiveProcess = function (processId, callback) {
            if (has(getProcess, 'setActiveProcess')) {
                getProcess.setActiveProcess(processId, callback);
            }
        };
        process.Reflow = function (updateUi, parentStage, nextStage) {
            if (has(getProcess, 'reflow')) {
                getProcess.reflow(updateUi, parentStage, nextStage);
            }
        }
        Object.defineProperty(process, "ActiveProcess", {
            get: function () {
                var getActiveProcess = null;
                if (has(getProcess, 'getActiveProcess')) {
                    getActiveProcess = getProcess.getActiveProcess();
                }
                return loadProcess(getActiveProcess);
            }
        });
        Object.defineProperty(process, "SelectedStage", {
            get: function () {
                var selectedStage = null;
                if (has(getProcess, 'getSelectedStage')) {
                    selectedStage = getProcess.getSelectedStage();
                }
                return loadStage(selectedStage);
            }
        });
        Object.defineProperty(process, "ActiveStage", {
            get: function () {
                var activeStage = null;
                if (has(getProcess, 'getActiveStage')) {
                    activeStage = getProcess.getActiveStage();
                }
                return loadStage(activeStage);
            }
        });
        Object.defineProperty(process, "InstanceId", {
            get: function () {
                if (has(getProcess, 'getInstanceId')) {
                    return getProcess.getInstanceId();
                }
                return EMPTY_GUID;
            }
        });
        Object.defineProperty(process, "InstanceName", {
            get: function () {
                if (has(getProcess, 'getInstanceName')) {
                    return getProcess.getInstanceName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(process, "Status", {
            get: function () {
                if (has(getProcess, 'getStatus')) {
                    return getProcess.getStatus();
                }
                return "active";
            },
            set: function (value) {
                if (has(getProcess, 'setStatus')) {
                    getProcess.setStatus(value);
                }
            }
        });
        Object.defineProperty(process, "DisplayState", {
            get: function () {
                if (has(getProcessUi, 'getDisplayState')) {
                    return getProcessUi.getDisplayState();
                }
                return "expanded";
            },
            set: function (value) {
                if (has(getProcessUi, 'setDisplayState')) {
                    getProcessUi.setDisplayState(value);
                }
            }
        });
        Object.defineProperty(process, "Visible", {
            get: function () {
                if (has(getProcessUi, 'getVisible')) {
                    return getProcessUi.getVisible();
                }
                return EMPTY_BOOL;
            },
            set: function (value) {
                if (has(getProcessUi, 'setVisible')) {
                    getProcessUi.setVisible(value);
                }
            }
        });
        Object.defineProperty(process, "ActivePath", {
            get: function () {
                var obj = {};
                obj.getLength = function () {
                    if (has(getProcess, 'getActivePath')) {
                        return getProcess.getActivePath().getLength();
                    }
                    return 0;
                }
                obj.get = function (index) {
                    if (has(getProcess, 'getActivePath')) {
                        var stage = getProcess.getActivePath().get(index);
                        return loadStage(stage);
                    }
                    return loadStage({});
                }
                obj.forEach = function (callback) {
                    if (has(getProcess, 'getActivePath')) {
                        var stages = getProcess.getActivePath();
                        for (var index = 0; index < stages.getLength(); index++) {
                            var stage = stages.get(index);
                            callback(loadStage(stage), index);
                        }
                    }
                }
                return obj;
            }
        });
        return process;
    }
    function loadFields(formContext, body, type) {
        var loadField = function(formContext, body, field, type) {
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
                get: function () { return attribute.getValue(); },
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
        for (var field in body) {
            loadField(formContext, body, field, type);
        }
        return body;
    }
    function loadTabs(formContext, tabs) {
        var loadSection = function(formContext, tab, sections, section) {
            var tabObject = null;
            if (has(formContext, 'ui.tabs.get')) {
                tabObject = formContext.ui.tabs.get(tab);
            }
            var sectionObject = null;
            if (has(tabObject, 'sections.get')) {
                sectionObject = tabObject.sections.get(section);
            }
            Object.defineProperty(sections[section], "Name", {
                get: function () {
                    if (has(sectionObject, 'getName')) {
                        return sectionObject.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(sections[section], "Parent", {
                get: function () {
                    if (has(sectionObject, 'getParent')) {
                        return sectionObject.getParent();
                    }
                    return null;
                }
            });
            Object.defineProperty(sections[section], "Label", {
                get: function () {
                    if (has(sectionObject, 'getLabel')) {
                        return sectionObject.getLabel();
                    }
                    return EMPTY_STRING;
                },
                set: function (value) {
                    if (has(sectionObject, 'setLabel')) {
                        sectionObject.setLabel(value);
                    }
                }
            });
            Object.defineProperty(sections[section], "Visible", {
                get: function () {
                    if (has(sectionObject, 'getVisible')) {
                        return sectionObject.getVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(sectionObject, 'setVisible')) {
                        sectionObject.setVisible(value);
                    }
                }
            });
        }
        var loadTab = function(formContext, tabs, tab) {
            var tabObject = null;
            if (has(formContext, 'ui.tabs.get')) {
                tabObject = formContext.ui.tabs.get(tab);
            }
            tabs[tab].AddTabStateChange = function (callback) {
                if (has(tabObject, 'addTabStateChange')) {
                    tabObject.addTabStateChange(callback);
                }
            };
            tabs[tab].Focus = function () {
                if (has(tabObject, 'setFocus')) {
                    tabObject.setFocus();
                }
            };
            tabs[tab].RemoveTabStateChange = function (callback) {
                if (has(tabObject, 'removeTabStateChange')) {
                    tabObject.removeTabStateChange(callback);
                }
            };
            Object.defineProperty(tabs[tab], "Name", {
                get: function () {
                    if (has(tabObject, 'getName')) {
                        return tabObject.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(tabs[tab], "Parent", {
                get: function () {
                    if (has(tabObject, 'getParent')) {
                        return tabObject.getParent();
                    }
                    return null;
                }
            });
            Object.defineProperty(tabs[tab], "DisplayState", {
                get: function () {
                    if (has(tabObject, 'getDisplayState')) {
                        return tabObject.getDisplayState();
                    }
                    return "expanded";
                },
                set: function (value) {
                    if (has(tabObject, 'setDisplayState')) {
                        tabObject.setDisplayState(value);
                    }
                }
            });
            Object.defineProperty(tabs[tab], "Label", {
                get: function () {
                    if (has(tabObject, 'getLabel')) {
                        return tabObject.getLabel();
                    }
                    return EMPTY_STRING;
                },
                set: function (value) {
                    if (has(tabObject, 'setLabel')) {
                        tabObject.setLabel(value);
                    }
                }
            });
            Object.defineProperty(tabs[tab], "Visible", {
                get: function () {
                    if (has(tabObject, 'getVisible')) {
                        return tabObject.getVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(tabObject, 'setVisible')) {
                        tabObject.setVisible(value);
                    }
                }
            });            
            for (var section in tabs[tab].Section) {
                loadSection(formContext, tab, tabs[tab].Section, section);
            }
        }
        for (var tab in tabs) {
            loadTab(formContext, tabs, tab);
        }
    }
    function loadNavigations(formContext, navigations) {
        var loadNavigation = function(formContext, navigations, navigation) {
            var navigationItem = null;
            if (has(formContext, 'ui.navigation.items.get')) {
                for (var i = 0; i < formContext.ui.navigation.items.getLength(); i++) {
                    if (navigation === formContext.ui.navigation.items.get(i).getId()) {
                        navigationItem = formContext.ui.navigation.items.get(i);
                    }
                }
            }
            navigations[navigation].Focus = function () {
                if (has(navigationItem, 'setFocus')) {
                    navigationItem.setFocus();
                }
            };
            Object.defineProperty(navigations[navigation], "Id", {
                get: function () {
                    if (has(navigationItem, 'getId')) {
                        return navigationItem.getId();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(navigations[navigation], "Label", {
                get: function () {
                    if (has(navigationItem, 'getLabel')) {
                        return navigationItem.getLabel();
                    }
                    return EMPTY_STRING;
                },
                set: function (value) {
                    if (has(navigationItem, 'setLabel')) {
                        navigationItem.setLabel(value);
                    }
                }
            });
            Object.defineProperty(navigations[navigation], "Visible", {
                get: function () {
                    if (has(navigationItem, 'getVisible')) {
                        return navigationItem.getVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(navigationItem, 'setVisible')) {
                        navigationItem.setVisible(value);
                    }
                }
            });            
        }
        for (var navigation in navigations) {
            loadNavigation(formContext, navigations, navigation);
        }
    }
    function loadQuickForms(formContext, quickForms) {
        var loadQuickForm = function(formContext, quickForms, quickForm) {
            var quickViewControl = null;
            if (has(formContext, 'ui.quickForms.get')) {
                quickViewControl = formContext.ui.quickForms.get(quickForm);
            }
            quickForms[quickForm].Controls = function (arg) {                
                if (has(quickViewControl, 'getControl')) {
                    if (arg === undefined) {
                        return quickViewControl.getControl();
                    }
                    else {
                        return quickViewControl.getControl(arg);
                    }
                }
                return [];
            };
            quickForms[quickForm].IsLoaded = function () {
                if (has(quickViewControl, 'isLoaded')) {
                    return quickViewControl.isLoaded();
                }
                return EMPTY_BOOL;
            };
            quickForms[quickForm].Refresh = function () {
                if (has(quickViewControl, 'refresh')) {
                    quickViewControl.refresh();
                }
            };
            quickForms[quickForm].Focus = function () {
                if (has(quickViewControl, 'setFocus')) {
                    quickViewControl.setFocus();
                }
            };
            Object.defineProperty(quickForms[quickForm], "ControlType", {
                get: function () {
                    if (has(quickViewControl, 'getControlType')) {
                        return quickViewControl.getControlType();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(quickForms[quickForm], "Disabled", {
                get: function () {
                    if (has(quickViewControl, 'getDisabled')) {
                        return quickViewControl.getDisabled();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(quickViewControl, 'setDisabled')) {
                        quickViewControl.setDisabled(value);
                    }
                }
            });
            Object.defineProperty(quickForms[quickForm], "Label", {
                get: function () {
                    if (has(quickViewControl, 'getLabel')) {
                        return quickViewControl.getLabel();
                    }
                    return EMPTY_STRING;
                },
                set: function (value) {
                    if (has(quickViewControl, 'setLabel')) {
                        quickViewControl.setLabel(value);
                    }
                }
            });
            Object.defineProperty(quickForms[quickForm], "ControlName", {
                get: function () {
                    if (has(quickViewControl, 'getName')) {
                        return quickViewControl.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(quickForms[quickForm], "ControlParent", {
                get: function () {
                    if (has(quickViewControl, 'getParent')) {
                        return quickViewControl.getParent();
                    }
                    return null;
                }
            });
            Object.defineProperty(quickForms[quickForm], "Visible", {
                get: function () {
                    if (has(quickViewControl, 'getVisible')) {
                        return quickViewControl.getVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(quickViewControl, 'setVisible')) {
                        quickViewControl.setVisible(value);
                    }
                }
            });            
        }
        for (var quickForm in quickForms) {
            loadQuickForm(formContext, quickForms, quickForm);
        }
    }
    function loadGrids(formContext, grids) {
        var loadGridRow = function (row) {
            var obj = {};
            Object.defineProperty(obj, "EntityName", {
                get: function () {
                    if (has(row, 'data.entity.getEntityName')) {
                        return row.data.entity.getEntityName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "EntityReference", {
                get: function () {
                    if (has(row, 'data.entity.getEntityReference')) {
                        return row.data.entity.getEntityReference();
                    }
                    return EMPTY_REFERENCE;
                }
            });
            Object.defineProperty(obj, "EntityId", {
                get: function () {
                    if (has(row, 'data.entity.getId')) {
                        return row.data.entity.getId();
                    }
                    return EMPTY_GUID;
                }
            });
            Object.defineProperty(obj, "PrimaryAttributeValue", {
                get: function () {
                    if (has(row, 'data.entity.getPrimaryAttributeValue')) {
                        return row.data.entity.getPrimaryAttributeValue();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "Columns", {
                get: function () {
                    var obj = {};
                    obj.getLength = function () {
                        if (has(row, 'data.entity.attributes')) {
                            return row.data.entity.attributes.getLength();
                        }
                        return EMPTY_NUMBER;
                    }
                    obj.get = function (index) {
                        if (has(row, 'data.entity.attributes')) {
                            var column = row.data.entity.attributes.get(index);
                            return loadGridColumn(column);
                        }
                        return loadGridColumn({});
                    }
                    obj.forEach = function (callback) {
                        if (has(row, 'data.entity.attributes')) {
                            var columns = row.data.entity.attributes;
                            for (var index = 0; index < columns.getLength(); index++) {
                                var column = columns.get(index);
                                callback(loadGridColumn(column), index);
                            }
                        }
                    }
                    return obj;
                }
            });
            return obj;
        }
        var loadGridColumn = function (col) {
            var obj = {};
            obj.SetNotification = function (message, uniqueId) {
                if (has(col, 'controls.get')) {
                    var control = col.controls.get(0);
                    if (has(control, 'setNotification')) {
                        return control.setNotification(message, uniqueId);
                    }
                }
                return EMPTY_BOOL;
            };
            obj.ClearNotification = function (uniqueId) {
                if (has(col, 'controls.get')) {
                    var control = col.controls.get(0);
                    if (has(control, 'clearNotification')) {
                        return control.clearNotification(uniqueId);
                    }
                }
                return EMPTY_BOOL;
            };
            Object.defineProperty(obj, "Name", {
                get: function () {
                    if (has(col, 'getName')) {
                        return col.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, "RequiredLevel", {
                get: function () {
                    if (has(col, 'getRequiredLevel')) {
                        return col.getRequiredLevel();
                    }
                    return "none";
                },
                set: function (value) {
                    if (has(col, 'setRequiredLevel')) {
                        col.setRequiredLevel(value);
                    }
                }
            });
            Object.defineProperty(obj, "Value", {
                get: function () {
                    if (has(col, 'getValue')) {
                        return col.getValue();
                    }
                    return EMPTY_STRING;
                },
                set: function (value) {
                    if (has(col, 'setValue')) {
                        col.setValue(value);
                    }
                }
            });            
            Object.defineProperty(obj, "Disabled", {
                get: function () {
                    if (has(col, 'controls.get')) {
                        var control = col.controls.get(0);
                        if (has(control, 'getDisabled')) {
                            return control.getDisabled();
                        }
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(col, 'controls.get')) {
                        var control = col.controls.get(0);
                        if (has(control, 'setDisabled')) {
                            control.setDisabled(value);
                        }
                    }
                }
            });
            Object.defineProperty(obj, "Label", {
                get: function () {
                    if (has(col, 'controls.get')) {
                        var control = col.controls.get(0);
                        if (has(control, 'getLabel')) {
                            return control.getLabel();
                        }
                    }
                    return EMPTY_STRING;
                }
            });
            return obj;
        }
        var loadGrid =function(formContext, grids, grid) {
            var gridControl = null;
            if (has(formContext, 'getControl')) {
                gridControl = formContext.getControl(grid);
            }
            grids[grid].AddOnLoad = function (callback) {
                if (has(gridControl, 'addOnLoad')) {
                    gridControl.addOnLoad(callback);
                }
            };
            grids[grid].RemoveOnLoad = function (callback) {
                if (has(gridControl, 'removeOnLoad')) {
                    gridControl.removeOnLoad(callback);
                }
            };
            grids[grid].Url = function (client) {
                if (has(gridControl, 'getUrl')) {
                    return gridControl.getUrl(client);
                }
                return EMPTY_STRING;
            };
            grids[grid].Refresh = function () {
                if (has(gridControl, 'refresh')) {
                    gridControl.refresh();
                }
            };
            grids[grid].RefreshRibbon = function () {
                if (has(gridControl, 'refreshRibbon')) {
                    gridControl.refreshRibbon();
                }
            };
            grids[grid].OpenRelatedGrid = function () {
                if (has(gridControl, 'openRelatedGrid')) {
                    gridControl.openRelatedGrid();
                }
            };
            Object.defineProperty(grids[grid], "EntityName", {
                get: function () {
                    if (has(gridControl, 'getEntityName')) {
                        return gridControl.getEntityName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(grids[grid], "FetchXml", {
                get: function () {
                    if (has(gridControl, 'getFetchXml')) {
                        return gridControl.getFetchXml();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(grids[grid], "GridType", {
                get: function () {
                    if (has(gridControl, 'getGridType')) {
                        return gridControl.getGridType();
                    }
                    return 2;
                }
            });
            Object.defineProperty(grids[grid], "Relationship", {
                get: function () {
                    if (has(gridControl, 'getRelationship')) {
                        return gridControl.getRelationship();
                    }
                    return {};
                }
            });            
            Object.defineProperty(grids[grid], "ViewSelector", {
                get: function () {
                    var viewSelector = null;
                    if (has(gridControl, 'getViewSelector')) {
                        viewSelector = gridControl.getViewSelector();
                    }
                    var obj = {};
                    Object.defineProperty(obj, "CurrentView", {
                        get: function () {
                            if (has(viewSelector, 'getCurrentView')) {
                                return viewSelector.getCurrentView();
                            }
                            return EMPTY_REFERENCE;
                        },
                        set: function (value) {
                            if (has(viewSelector, 'getCurrentView')) {
                                viewSelector.setCurrentView(value);
                            }
                        }
                    });
                    Object.defineProperty(obj, "Visible", {
                        get: function () {
                            if (has(viewSelector, 'isVisible')) {
                                return viewSelector.isVisible();
                            }
                            return EMPTY_BOOL;
                        },
                    });
                    return obj;
                }
            });            
            Object.defineProperty(grids[grid], "Rows", {
                get: function () {
                    var obj = {};
                    var getGrid = null;
                    if (has(gridControl, 'getGrid')) {
                        getGrid = gridControl.getGrid();
                    }
                    obj.getLength = function () {
                        if (has(getGrid, 'getRows')) {
                            return getGrid.getRows().getLength();
                        }
                        return EMPTY_NUMBER;
                    }
                    obj.get = function (index) {
                        if (has(getGrid, 'getRows')) {
                            return loadGridRow(getGrid.getRows().get(index));
                        }
                        return loadGridRow({});
                    }
                    obj.forEach = function (callback) {
                        if (has(getGrid, 'getRows')) {
                            var rows = getGrid.getRows();
                            for (var index = 0; index < rows.getLength(); index++) {
                                var row = rows.get(index);
                                callback(loadGridRow(row), index);
                            }
                        }
                    }
                    return obj;
                }
            });
            Object.defineProperty(grids[grid], "SelectedRows", {
                get: function () {
                    var obj = {};
                    var getGrid = null;
                    if (has(gridControl, 'getGrid')) {
                        getGrid = gridControl.getGrid();
                    }
                    obj.getLength = function () {
                        if (has(getGrid, 'getSelectedRows')) {
                            return getGrid.getSelectedRows().getLength();
                        }
                        return EMPTY_NUMBER;
                    }
                    obj.get = function (index) {
                        if (has(getGrid, 'getSelectedRows')) {
                            return loadGridRow(getGrid.getSelectedRows().get(index));
                        }
                        return loadGridRow({});
                    }
                    obj.forEach = function (callback) {
                        if (has(getGrid, 'getSelectedRows')) {
                            var rows = getGrid.getSelectedRows();
                            for (var index = 0; index < rows.getLength(); index++) {
                                var row = rows.get(index);
                                callback(loadGridRow(row), index);
                            }
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
            Object.defineProperty(grids[grid], "TotalRecordCount", {
                get: function () {
                    var getGrid = null;
                    if (has(gridControl, 'getGrid')) {
                        getGrid = gridControl.getGrid();
                    }
                    if (has(getGrid, 'getTotalRecordCount')) {
                        return getGrid.getTotalRecordCount();
                    }
                    return EMPTY_NUMBER;
                }
            });
        }        
        for (var grid in grids) {
            loadGrid(formContext, grids, grid);
        }
    }
    function loadUtility(defaultWebResourceName) {
        var utility = {};

        var getUtility = null;
        if (has(Xrm, 'Utility')) {
            getUtility = Xrm.Utility;
        }
        utility.CloseProgressIndicator = function () {
            if (has(getUtility, 'closeProgressIndicator')) {
                getUtility.closeProgressIndicator();
            }
        };
        utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
            if (has(getUtility, 'getAllowedStatusTransitions')) {
                getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback);
            }
        };
        utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
            if (has(getUtility, 'getEntityMetadata')) {
                getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback);
            }
        };
        utility.ResourceString = function (webResourceName, key) {
            if (has(getUtility, 'getResourceString')) {
                return getUtility.getResourceString(webResourceName, key);
            }
        };
        utility.Resource = function (key) {
            if (!isNullOrUndefined(defaultWebResourceName)) {
                if (has(getUtility, 'getResourceString')) {
                    return getUtility.getResourceString(defaultWebResourceName, key);
                }
            }
            return EMPTY_STRING;
        };
        utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
            if (has(getUtility, 'invokeProcessAction')) {
                getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback);
            }
        };
        utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
            if (has(getUtility, 'lookupObjects')) {
                getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback);
            }
        };
        utility.RefreshParentGrid = function (lookupOptions) {
            if (has(getUtility, 'refreshParentGrid')) {
                getUtility.refreshParentGrid(lookupOptions);
            }
        };
        utility.ShowProgressIndicator = function (message) {
            if (has(getUtility, 'showProgressIndicator')) {
                getUtility.showProgressIndicator(message);
            }
        };
        Object.defineProperty(utility, "LearningPathAttributeName", {
            get: function () {
                if (has(getUtility, 'getLearningPathAttributeName')) {
                    return getUtility.getLearningPathAttributeName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(utility, "PageContext", {
            get: function () {
                if (has(getUtility, 'getPageContext')) {
                    return getUtility.getPageContext();
                }
                return null;
            }
        });

        var getGlobalContext = null;
        if (has(Xrm, 'Utility.getGlobalContext')) {
            getGlobalContext = Xrm.Utility.getGlobalContext();
        }   
        utility.AdvancedConfigSetting = function (setting) {
            if (has(getGlobalContext, 'getAdvancedConfigSetting')) {
                return getGlobalContext.getAdvancedConfigSetting(setting);
            }
            return EMPTY_NUMBER;
        };
        utility.CurrentAppName = function (successCallback, errorCallback) {
            if (has(getGlobalContext, 'getCurrentAppName')) {
                getGlobalContext.getCurrentAppName().then(successCallback, errorCallback);
            }            
        };
        utility.CurrentAppProperties = function (successCallback, errorCallback) {
            if (has(getGlobalContext, 'getCurrentAppProperties')) {
                getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback);
            }
        };
        utility.WebResourceUrl = function (webResourceName) {
            if (has(getGlobalContext, 'getWebResourceUrl')) {
                return getGlobalContext.getWebResourceUrl(webResourceName);
            }
            return EMPTY_STRING;
        };
        utility.PrependOrgName = function (sPath) {
            if (has(getGlobalContext, 'prependOrgName')) {
                return getGlobalContext.prependOrgName(sPath);
            }
            return EMPTY_STRING;
        };
        Object.defineProperty(utility, "Client", {
            get: function () {
                var obj = {};
                var client = null;
                if (has(getGlobalContext, 'client')) {
                    client = getGlobalContext.client;
                }                
                Object.defineProperty(obj, "ClientName", {
                    get: function () {
                        if (has(client, 'getClient')) {
                            return client.getClient();
                        }
                        return "Web";
                    }
                });
                Object.defineProperty(obj, "ClientState", {
                    get: function () {
                        if (has(client, 'getClientState')) {
                            return client.getClientState();
                        }
                        return "Online";
                    }
                });
                Object.defineProperty(obj, "FormFactor", {
                    get: function () {
                        if (has(client, 'getFormFactor')) {
                            return client.getFormFactor();
                        }
                        return EMPTY_NUMBER;
                    }
                });
                Object.defineProperty(obj, "IsOffline", {
                    get: function () {
                        if (has(client, 'isOffline')) {
                            return client.isOffline();
                        }
                        return EMPTY_BOOL;
                    }
                });                
                return obj;
            }
        });
        Object.defineProperty(utility, "OrganizationSettings", {
            get: function () {
                var obj = {};
                var organizationSettings = null;
                if (has(getGlobalContext, 'organizationSettings')) {
                    organizationSettings = getGlobalContext.organizationSettings;
                }                
                Object.defineProperty(obj, "Attributes", {
                    get: function () {
                        if (has(organizationSettings, 'attributes')) {
                            return organizationSettings.attributes;
                        }
                        return {};
                    }
                });
                Object.defineProperty(obj, "BaseCurrencyId", {
                    get: function () {
                        if (has(organizationSettings, 'baseCurrencyId')) {
                            return organizationSettings.baseCurrencyId;
                        }
                        return EMPTY_GUID;
                    }
                });
                Object.defineProperty(obj, "BaseCurrency", {
                    get: function () {
                        if (has(organizationSettings, 'baseCurrency')) {
                            return organizationSettings.baseCurrency;
                        }
                        return EMPTY_REFERENCE;
                    }
                });

                Object.defineProperty(obj, "DefaultCountryCode", {
                    get: function () {
                        if (has(organizationSettings, 'defaultCountryCode')) {
                            return organizationSettings.defaultCountryCode;
                        }
                        return null;
                    }
                });
                Object.defineProperty(obj, "IsAutoSaveEnabled", {
                    get: function () {
                        if (has(organizationSettings, 'isAutoSaveEnabled')) {
                            return organizationSettings.isAutoSaveEnabled;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, "LanguageId", {
                    get: function () {
                        if (has(organizationSettings, 'languageId')) {
                            return organizationSettings.languageId;
                        }
                        return 1033;
                    }
                });
                Object.defineProperty(obj, "OrganizationId", {
                    get: function () {
                        if (has(organizationSettings, 'organizationId')) {
                            return organizationSettings.organizationId;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, "UniqueName", {
                    get: function () {
                        if (has(organizationSettings, 'uniqueName')) {
                            return organizationSettings.uniqueName;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, "UseSkypeProtocol", {
                    get: function () {
                        if (has(organizationSettings, 'useSkypeProtocol')) {
                            return organizationSettings.useSkypeProtocol;
                        }
                        return EMPTY_BOOL;
                    }
                });                
                return obj;
            }
        });
        Object.defineProperty(utility, "UserSettings", {
            get: function () {
                var obj = {};
                var userSettings = null;
                if (has(getGlobalContext, 'userSettings')) {
                    userSettings = getGlobalContext.userSettings;
                }
                Object.defineProperty(obj, "DateFormattingInfo", {
                    get: function () {
                        if (has(userSettings, 'dateFormattingInfo')) {
                            return userSettings.dateFormattingInfo;
                        }
                        return {};
                    }
                });
                Object.defineProperty(obj, "DefaultDashboardId", {
                    get: function () {
                        if (has(userSettings, 'defaultDashboardId')) {
                            return userSettings.defaultDashboardId;
                        }
                        return EMPTY_GUID;
                    }
                });
                Object.defineProperty(obj, "IsGuidedHelpEnabled", {
                    get: function () {
                        if (has(userSettings, 'isGuidedHelpEnabled')) {
                            return userSettings.isGuidedHelpEnabled;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, "IsHighContrastEnabled", {
                    get: function () {
                        if (has(userSettings, 'isHighContrastEnabled')) {
                            return userSettings.isHighContrastEnabled;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, "IsRTL", {
                    get: function () {
                        if (has(userSettings, 'isRTL')) {
                            return userSettings.isRTL;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, "LanguageId", {
                    get: function () {
                        if (has(userSettings, 'languageId')) {
                            return userSettings.languageId;
                        }
                        return 1033;
                    }
                });
                Object.defineProperty(obj, "Roles", {
                    get: function () {
                        if (has(userSettings, 'roles')) {
                            return userSettings.roles;
                        }
                        return [];
                    }
                });
                Object.defineProperty(obj, "SecurityRolePrivileges", {
                    get: function () {
                        if (has(userSettings, 'securityRolePrivileges')) {
                            return userSettings.securityRolePrivileges;
                        }
                        return [];
                    }
                });
                Object.defineProperty(obj, "SecurityRoles", {
                    get: function () {
                        if (has(userSettings, 'securityRoles')) {
                            return userSettings.securityRoles;
                        }
                        return [];
                    }
                });
                Object.defineProperty(obj, "TransactionCurrency", {
                    get: function () {
                        if (has(userSettings, 'transactionCurrency')) {
                            return userSettings.transactionCurrency;
                        }
                        return EMPTY_REFERENCE;
                    }
                });
                Object.defineProperty(obj, "TransactionCurrencyId", {
                    get: function () {
                        if (has(userSettings, 'transactionCurrencyId')) {
                            return userSettings.transactionCurrencyId;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, "UserId", {
                    get: function () {
                        if (has(userSettings, 'userId')) {
                            return userSettings.userId;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, "UserName", {
                    get: function () {
                        if (has(userSettings, 'userName')) {
                            return userSettings.userName;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, "TimeZoneOffsetMinutes", {
                    get: function () {
                        if (has(userSettings, 'getTimeZoneOffsetMinutes')) {
                            return userSettings.getTimeZoneOffsetMinutes();
                        }
                        return EMPTY_NUMBER;
                    }
                });
                return obj;
            }
        });        
        Object.defineProperty(utility, "ClientUrl", {
            get: function () {
                if (has(getGlobalContext, 'getClientUrl')) {
                    return getGlobalContext.getClientUrl();
                }
                return EMPTY_STRING;
            }
        });        
        Object.defineProperty(utility, "CurrentAppUrl", {
            get: function () {
                if (has(getGlobalContext, 'getCurrentAppUrl')) {
                    return getGlobalContext.getCurrentAppUrl();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(utility, "Version", {
            get: function () {
                if (has(getGlobalContext, 'getVersion')) {
                    return getGlobalContext.getVersion();
                }
                return EMPTY_STRING;
            }
        });        
        Object.defineProperty(utility, "IsOnPremises", {
            get: function () {
                if (has(getGlobalContext, 'isOnPremises')) {
                    return getGlobalContext.isOnPremises();
                }
                return EMPTY_BOOL;
            }
        });        

        var getNavigation = null;
        if (has(Xrm, 'Navigation')) {
            getNavigation = Xrm.Navigation;
        }
        utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
            if (has(getNavigation, 'openAlertDialog')) {
                getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback);
            }
        };
        utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
            if (has(getNavigation, 'openConfirmDialog')) {
                getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback);
            }
        };
        utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
            if (has(getNavigation, 'openErrorDialog')) {
                getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback);
            }
        };
        utility.OpenFile = function (file, openFileOptions) {
            if (has(getNavigation, 'openFile')) {
                getNavigation.openFile(file, openFileOptions);
            }
        };
        utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
            if (has(getNavigation, 'openForm')) {
                getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback);
            }
        };
        utility.OpenUrl = function (url, openUrlOptions) {
            if (has(getNavigation, 'openUrl')) {
                getNavigation.openUrl(url, openUrlOptions);
            }
        };
        utility.OpenWebResource = function (webResourceName, windowOptions, data) {
            if (has(getNavigation, 'openWebResource')) {
                getNavigation.openWebResource(webResourceName, windowOptions, data);
            }
        };
        utility.NavigateTo = function (pageInput, navigationOptions, successCallback, errorCallback) {
            if (has(getNavigation, 'navigateTo')) {
                getNavigation.navigateTo(pageInput, navigationOptions).then(successCallback, errorCallback);
            }
        };

        var getPanel = null;
        if (has(Xrm, 'Panel')) {
            getPanel = Xrm.Panel;
        }
        utility.LoadPanel = function (url, title) {
            if (has(getPanel, 'loadPanel')) {
                getPanel.loadPanel(url, title);
            }
        };

        var getEncoding = null;
        if (has(Xrm, 'Encoding')) {
            getEncoding = Xrm.Encoding;
        }
        utility.XmlAttributeEncode = function (arg) {
            if (has(getEncoding, 'xmlAttributeEncode')) {
                return getEncoding.xmlAttributeEncode(arg);
            }
            return arg;
        };
        utility.XmlEncode = function (arg) {
            if (has(getEncoding, 'xmlEncode')) {
                return getEncoding.xmlEncode(arg);
            }
            return arg;
        };
        utility.HtmlAttributeEncode = function (arg) {
            if (has(getEncoding, 'htmlAttributeEncode')) {
                return getEncoding.htmlAttributeEncode(arg);
            }
            return arg;
        };
        utility.HtmlDecode = function (arg) {
            if (has(getEncoding, 'htmlDecode')) {
                return getEncoding.htmlDecode(arg);
            }
            return arg;
        };
        utility.HtmlEncode = function (arg) {
            if (has(getEncoding, 'htmlEncode')) {
                return getEncoding.htmlEncode(arg);
            }
            return arg;
        };

        var getDevice = null;
        if (has(Xrm, 'Device')) {
            getDevice = Xrm.Device;
        }
        utility.CaptureAudio = function (successCallback, errorCallback) {
            if (has(getDevice, 'captureAudio')) {
                getDevice.captureAudio().then(successCallback, errorCallback);
            }
        };
        utility.CaptureImage = function (imageOptions, successCallback, errorCallback) {
            if (has(getDevice, 'captureImage')) {
                getDevice.captureImage(imageOptions).then(successCallback, errorCallback);
            }
        };
        utility.CaptureVideo = function (successCallback, errorCallback) {
            if (has(getDevice, 'captureVideo')) {
                getDevice.captureVideo().then(successCallback, errorCallback);
            }
        };
        utility.BarcodeValue = function (successCallback, errorCallback) {
            if (has(getDevice, 'getBarcodeValue')) {
                getDevice.getBarcodeValue().then(successCallback, errorCallback);
            }
        };
        utility.CurrentPosition = function (successCallback, errorCallback) {
            if (has(getDevice, 'getCurrentPosition')) {
                getDevice.getCurrentPosition().then(successCallback, errorCallback);
            }
        };
        utility.PickFile = function (pickFileOptions, successCallback, errorCallback) {
            if (has(getDevice, 'pickFile')) {
                getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback);
            }
        };

        var getApp = null;
        if (has(Xrm, 'App')) {
            getApp = Xrm.App;
        }
        utility.AddGlobalNotification = function (notification, successCallback, errorCallback) {
            if (has(getApp, 'addGlobalNotification')) {
                getApp.addGlobalNotification(notification).then(successCallback, errorCallback);
            }
        }
        utility.ClearGlobalNotification = function (uniqueId, successCallback, errorCallback) {
            if (has(getApp, 'clearGlobalNotification')) {
                getApp.clearGlobalNotification(uniqueId).then(successCallback, errorCallback);
            }
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
/*
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
*/
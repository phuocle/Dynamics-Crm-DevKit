'use strict';
var devKit = (function () {
    'use strict';
    var EMPTY_STRING = '';
    var EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
    var EMPTY_REFERENCE = { entityType: EMPTY_STRING, id: EMPTY_GUID, name: EMPTY_STRING };
    var EMPTY_NUMBER = 0;
    var EMPTY_BOOL = false;
    var NULL = null;
    function has(obj, key) {
        if (isNullOrUndefined(obj)) return EMPTY_BOOL;
        if (Object.keys(obj).length === 0 && obj.constructor === Object) return EMPTY_BOOL;
        return key.split('.').every(function (x) {
            if (typeof obj != 'object' || obj === NULL || !x in obj) {
                return EMPTY_BOOL;
            }
            obj = obj[x];
            return !EMPTY_BOOL;
        });
    }
    function isNullOrUndefined(obj) {
        if (obj === NULL) return !EMPTY_BOOL;
        if (obj === undefined) return !EMPTY_BOOL;
        return EMPTY_BOOL;
    }
    function loadForm(formContext) {
        var form = {};
        var contextData = NULL;
        if (has(formContext, 'data')) {
            contextData = formContext.data;
        }
        form.DataAddOnLoad = function (callback) {
            if (has(contextData, 'addOnLoad')) {
                contextData.addOnLoad(callback);
            }
        };
        form.Refresh = function (save, successCallback, errorCallback) {
            if (has(contextData, 'refresh')) {
                contextData.refresh(save).then(successCallback, errorCallback);
            }
        };
        form.DataRemoveOnLoad = function (callback) {
            if (has(contextData, 'removeOnLoad')) {
                contextData.removeOnLoad(callback);
            }
        };
        form.Save = function (saveOptions, successCallback, errorCallback) {
            if (has(contextData, 'save')) {
                contextData.save(saveOptions).then(successCallback, errorCallback);
            }
        };
        Object.defineProperty(form, 'DataIsDirty', {
            get: function () {
                if (has(contextData, 'getIsDirty')) {
                    return contextData.getIsDirty();
                }
                return EMPTY_BOOL;
            }
        });
        Object.defineProperty(form, 'DataIsValid', {
            get: function () {
                if (has(contextData, 'isValid')) {
                    return contextData.isValid();
                }
                return EMPTY_BOOL;
            }
        });
        var contextDataEntity = NULL;
        if (has(formContext, 'data.entity')) {
            contextDataEntity = formContext.data.entity;
        }
        form.AddOnSave = function (callback) {
            if (has(contextDataEntity, 'addOnSave')) {
                contextDataEntity.addOnSave(callback);
            }
        };
        form.AddPostSave = function (callback) {
            if (has(contextDataEntity, 'addOnPostSave')) {
                contextDataEntity.addOnPostSave(callback);
            }
        }
        form.RemoveOnSave = function (callback) {
            if (has(contextDataEntity, 'removeOnSave')) {
                contextDataEntity.removeOnSave(callback);
            }
        };
        Object.defineProperty(form, 'Attributes', {
            get: function () {
                if (has(contextDataEntity, 'attributes')) {
                    return contextDataEntity.attributes;
                }
                return [];
            }
        });
        Object.defineProperty(form, 'DataXml', {
            get: function () {
                if (has(contextDataEntity, 'getDataXml')) {
                    return contextDataEntity.getDataXml();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(form, 'EntityName', {
            get: function () {
                if (has(contextDataEntity, 'getEntityName')) {
                    return contextDataEntity.getEntityName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(form, 'EntityReference', {
            get: function () {
                if (has(contextDataEntity, 'getEntityReference')) {
                    return contextDataEntity.getEntityReference();
                }
                return EMPTY_REFERENCE;
            }
        });
        Object.defineProperty(form, 'EntityId', {
            get: function () {
                if (has(contextDataEntity, 'getId')) {
                    return contextDataEntity.getId();
                }
                return EMPTY_GUID;
            }
        });
        Object.defineProperty(form, 'EntityIsDirty', {
            get: function () {
                if (has(contextDataEntity, 'getIsDirty')) {
                    return contextDataEntity.getIsDirty();
                }
                return EMPTY_BOOL;
            }
        });
        Object.defineProperty(form, 'PrimaryAttributeValue', {
            get: function () {
                if (has(contextDataEntity, 'getPrimaryAttributeValue')) {
                    return contextDataEntity.getPrimaryAttributeValue();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(form, 'EntityIsValid', {
            get: function () {
                if (has(contextDataEntity, 'isValid')) {
                    return contextDataEntity.isValid();
                }
                return EMPTY_BOOL;
            }
        });
        var contextUi = NULL;
        if (has(formContext, 'ui')) {
            contextUi = formContext.ui;
        }
        form.UiAddOnLoad = function (callback) {
            if (has(contextUi, 'addOnLoad')) {
                contextUi.addOnLoad(callback);
            }
        };
        form.ClearFormNotification = function (uniqueId) {
            if (has(contextUi, 'clearFormNotification')) {
                return contextUi.clearFormNotification(uniqueId);
            }
            return EMPTY_BOOL;
        };
        form.Close = function () {
            if (has(contextUi, 'close')) {
                contextUi.close();
            }
        };
        form.RefreshRibbon = function (refreshAll) {
            if (has(contextUi, 'refreshRibbon')) {
                contextUi.refreshRibbon(refreshAll);
            }
        };
        form.UiRemoveOnLoad = function (callback) {
            if (has(contextUi, 'removeOnLoad')) {
                contextUi.removeOnLoad(callback);
            }
        };
        form.SetFormEntityName = function (arg) {
            if (has(contextUi, 'setFormEntityName')) {
                contextUi.setFormEntityName(arg);
            }
        };
        form.SetFormNotification = function (message, level, uniqueId) {
            if (has(contextUi, 'setFormNotification')) {
                return contextUi.setFormNotification(message, level, uniqueId);
            }
            return EMPTY_BOOL;
        };
        Object.defineProperty(form, 'Controls', {
            get: function () {
                if (has(contextUi, 'controls')) {
                    return contextUi.controls;
                }
                return [];
            }
        });
        Object.defineProperty(form, 'FormType', {
            get: function () {
                if (has(contextUi, 'getFormType')) {
                    return contextUi.getFormType();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(form, 'ViewPortHeight', {
            get: function () {
                if (has(contextUi, 'getViewPortHeight')) {
                    return contextUi.getViewPortHeight();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(form, 'ViewPortWidth', {
            get: function () {
                if (has(contextUi, 'getViewPortWidth')) {
                    return contextUi.getViewPortWidth();
                }
                return EMPTY_NUMBER;
            }
        });
        var contextUiFormSelector = NULL;
        if (has(formContext, 'ui.formSelector')) {
            contextUiFormSelector = formContext.ui.formSelector;
        }
        form.FormNavigate = function (formId) {
            if (has(contextUiFormSelector, 'items')) {
                for (var i = 0; i < contextUiFormSelector.items.getLength(); i++) {
                    if (formId === contextUiFormSelector.items.get(i).getId()) {
                        var form = contextUiFormSelector.items.get(i)
                        if (has(form, 'navigate')) {
                            form.navigate();
                        }
                    }
                }
            }
        };
        form.FormIsVisible = function (formId) {
            if (has(contextUiFormSelector, 'items')) {
                for (var i = 0; i < contextUiFormSelector.items.getLength(); i++) {
                    if (formId === contextUiFormSelector.items.get(i).getId()) {
                        var form = contextUiFormSelector.items.get(i)
                        if (has(form, 'getVisible')) {
                            return form.getVisible();
                        }
                    }
                }
            }
            return EMPTY_BOOL;
        }
        form.FormSetVisible = function (formId, value) {
            if (has(contextUiFormSelector, 'items')) {
                for (var i = 0; i < contextUiFormSelector.items.getLength(); i++) {
                    if (formId === contextUiFormSelector.items.get(i).getId()) {
                        var form = contextUiFormSelector.items.get(i)
                        if (has(form, 'setVisible')) {
                            form.setVisible(value);
                        }
                    }
                }
            }
        }
        Object.defineProperty(form, 'FormId', {
            get: function () {
                if (has(contextUiFormSelector, 'getCurrentItem')) {
                    var form = contextUiFormSelector.getCurrentItem();
                    if (has(form, 'getId')) {
                        return form.getId();
                    }
                }
                return EMPTY_GUID;
            }
        });
        Object.defineProperty(form, 'FormLabel', {
            get: function () {
                if (has(contextUiFormSelector, 'getCurrentItem')) {
                    var form = contextUiFormSelector.getCurrentItem();
                    if (has(form, 'getLabel')) {
                        return form.getLabel();
                    }
                }
                return EMPTY_STRING;
            }
        });
        return form;
    }
    function loadProcess(formContext) {
        var loadStep = function (step) {
            var obj = {};
            Object.defineProperty(obj, 'Attribute', {
                get: function () {
                    if (has(step, 'getAttribute')) {
                        return step.getAttribute();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'Name', {
                get: function () {
                    if (has(step, 'getName')) {
                        return step.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'Required', {
                get: function () {
                    if (has(step, 'isRequired')) {
                        return step.isRequired();
                    }
                    return EMPTY_BOOL;
                }
            });
            Object.defineProperty(obj, 'Progress', {
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
            Object.defineProperty(obj, 'Category', {
                get: function () {
                    if (has(stage, 'getCategory')) {
                        return stage.getCategory().getValue();
                    }
                    return EMPTY_NUMBER;
                }
            });
            Object.defineProperty(obj, 'EntityName', {
                get: function () {
                    if (has(stage, 'getEntityName')) {
                        return stage.getEntityName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'Id', {
                get: function () {
                    if (has(stage, 'getId')) {
                        return stage.getId();
                    }
                    return EMPTY_GUID;
                }
            });
            Object.defineProperty(obj, 'Name', {
                get: function () {
                    if (has(stage, 'getName')) {
                        return stage.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'Status', {
                get: function () {
                    if (has(stage, 'getStatus')) {
                        return stage.getStatus();
                    }
                    return 'active';
                }
            });
            obj.AllowCreateNew = function (callback) {
                if (has(stage, 'getNavigationBehavior')) {
                    stage.getNavigationBehavior().allowCreateNew = callback;
                }
            }
            Object.defineProperty(obj, 'Steps', {
                get: function () {
                    var obj = [];
                    if (has(stage, 'getSteps')) {
                        var steps = stage.getSteps();
                        for (var index = 0; index < steps.length; index++) {
                            var step = steps[index];
                            obj.push(loadStep(step));
                        }
                    }
                    return obj;
                }
            });
            return obj;
        }
        var loadProcess = function (process) {
            var obj = {};
            Object.defineProperty(obj, 'Id', {
                get: function () {
                    if (has(process, 'getId')) {
                        return process.getId();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'Name', {
                get: function () {
                    if (has(process, 'getName')) {
                        return process.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'IsRendered', {
                get: function () {
                    if (has(process, 'isRendered')) {
                        return process.isRendered();
                    }
                    return EMPTY_BOOL;
                }
            });
            Object.defineProperty(obj, 'Stages', {
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
        var getProcess = NULL;
        if (has(formContext, 'data.process')) {
            getProcess = formContext.data.process;
        }
        var getProcessUi = NULL;
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
        process.AddOnPreStageChange = function (callback) {
            if (has(getProcess, 'addOnPreStageChange')) {
                getProcess.addOnPreStageChange(callback);
            }
        };
        process.RemoveOnPreStageChange = function (callback) {
            if (has(getProcess, 'removeOnPreStageChange')) {
                getProcess.removeOnPreStageChange(callback);
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
            if (has(getProcessUi, 'reflow')) {
                getProcessUi.reflow(updateUi, parentStage, nextStage);
            }
        }
        Object.defineProperty(process, 'ActiveProcess', {
            get: function () {
                var getActiveProcess = NULL;
                if (has(getProcess, 'getActiveProcess')) {
                    getActiveProcess = getProcess.getActiveProcess();
                }
                return loadProcess(getActiveProcess);
            }
        });
        Object.defineProperty(process, 'SelectedStage', {
            get: function () {
                var selectedStage = NULL;
                if (has(getProcess, 'getSelectedStage')) {
                    selectedStage = getProcess.getSelectedStage();
                }
                return loadStage(selectedStage);
            }
        });
        Object.defineProperty(process, 'ActiveStage', {
            get: function () {
                var activeStage = NULL;
                if (has(getProcess, 'getActiveStage')) {
                    activeStage = getProcess.getActiveStage();
                }
                return loadStage(activeStage);
            }
        });
        Object.defineProperty(process, 'InstanceId', {
            get: function () {
                if (has(getProcess, 'getInstanceId')) {
                    return getProcess.getInstanceId();
                }
                return EMPTY_GUID;
            }
        });
        Object.defineProperty(process, 'InstanceName', {
            get: function () {
                if (has(getProcess, 'getInstanceName')) {
                    return getProcess.getInstanceName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(process, 'Status', {
            get: function () {
                if (has(getProcess, 'getStatus')) {
                    return getProcess.getStatus();
                }
                return 'active';
            },
            set: function (value) {
                if (has(getProcess, 'setStatus')) {
                    getProcess.setStatus(value);
                }
            }
        });
        Object.defineProperty(process, 'DisplayState', {
            get: function () {
                if (has(getProcessUi, 'getDisplayState')) {
                    return getProcessUi.getDisplayState();
                }
                return 'expanded';
            },
            set: function (value) {
                if (has(getProcessUi, 'setDisplayState')) {
                    getProcessUi.setDisplayState(value);
                }
            }
        });
        Object.defineProperty(process, 'Visible', {
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
        Object.defineProperty(process, 'ActivePath', {
            get: function () {
                var obj = {};
                obj.getLength = function () {
                    if (has(getProcess, 'getActivePath')) {
                        return getProcess.getActivePath().getLength();
                    }
                    return EMPTY_NUMBER;
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
    function loadField(field, attribute, control) {
        field.ContentWindow = function (successCallback, errorCallback) {
            if (has(control, 'getContentWindow')) {
                control.getContentWindow().then(successCallback, errorCallback);
            }
        }
        field.Option = function (value) {
            if (has(attribute, 'getOption')) {
                return attribute.getOption(value);
            }
            return { text: EMPTY_STRING, value: EMPTY_NUMBER };
        };
        field.RemoveOnChange = function (callback) {
            if (has(attribute, 'removeOnChange')) {
                attribute.removeOnChange(callback);
            }
        };
        field.AddCustomFilter = function (filter, entityLogicaName) {
            if (has(control, 'addCustomFilter')) {
                control.addCustomFilter(filter, entityLogicaName);
            }
        };
        field.AddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
            if (has(control, 'addCustomView')) {
                control.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
            }
        };
        field.AddPostSearch = function (callback) {
            if (has(control, 'addOnPostSearch')) {
                control.addOnPostSearch(callback);
            }
        };
        field.AddResultOpened = function (callback) {
            if (has(control, 'addOnResultOpened')) {
                control.addOnResultOpened(callback);
            }
        };
        field.AddSelection = function (callback) {
            if (has(control, 'addOnSelection')) {
                control.addOnSelection(callback);
            }
        };
        field.AddPreSearch = function (callback) {
            if (has(control, 'addPreSearch')) {
                control.addPreSearch(callback);
            }
        };
        field.ClearNotification = function (uniqueId) {
            if (has(control, 'clearNotification')) {
                return control.clearNotification(uniqueId);
            }
            return EMPTY_BOOL;
        };
        field.ClearOptions = function () {
            if (has(control, 'clearOptions')) {
                control.clearOptions();
            }
        };
        field.AddOnChange = function (callback) {
            if (has(attribute, 'addOnChange')) {
                attribute.addOnChange(callback);
            }
        };
        field.FireOnChange = function () {
            if (has(attribute, 'fireOnChange')) {
                attribute.fireOnChange();
            }
        };
        field.OpenSearchResult = function (resultNumber, mode) {
            if (has(control, 'openSearchResult')) {
                return control.openSearchResult(resultNumber, mode);
            }
            return EMPTY_BOOL;
        };
        field.Refresh = function () {
            if (has(control, 'refresh')) {
                control.refresh();
            }
        };
        field.RemovePostSearch = function (callback) {
            if (has(control, 'removeOnPostSearch')) {
                control.removeOnPostSearch(callback);
            }
        };
        field.RemoveResultOpened = function (callback) {
            if (has(control, 'removeOnResultOpened')) {
                control.removeOnResultOpened(callback);
            }
        };
        field.RemoveSelection = function (callback) {
            if (has(control, 'removeOnSelection')) {
                control.removeOnSelection(callback);
            }
        };
        field.RemoveOption = function (value) {
            if (has(control, 'removeOption')) {
                control.removeOption(value);
            }
        };
        field.RemovePreSearch = function (callback) {
            if (has(control, 'removePreSearch')) {
                control.removePreSearch(callback);
            }
        };
        field.Focus = function () {
            if (has(control, 'setFocus')) {
                control.setFocus();
            }
        };
        field.SetNotification = function (message, uniqueId) {
            if (has(control, 'setNotification')) {
                return control.setNotification(message, uniqueId);
            }
            return EMPTY_BOOL;
        };
        field.AddOption = function (text, value, index) {
            if (has(control, 'addOption')) {
                var option = { text: text, value: value };
                control.addOption(option, index);
            }
        };
        field.AddNotification = function (title, message, notificationLevel, uniqueId, callback) {
            if (has(control, 'addNotification')) {
                var actions = { message: message, actions: [callback] };
                var notification = { messages: [title], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
                return control.addNotification(notification);
            }
            return EMPTY_BOOL;
        };
        field.AddLookupTagClick = function (callback) {
            if (has(control, 'addOnLookupTagClick')) {
                control.addOnLookupTagClick(callback);
            }
        };
        field.RemoveLookupTagClick = function (callback) {
            if (has(control, 'removeOnLookupTagClick')) {
                control.removeOnLookupTagClick(callback);
            }
        };
        field.SetIsValid = function (valid, message) {
            if (has(attribute, 'setIsValid')) {
                attribute.setIsValid(valid, message);
            }
        };
        Object.defineProperty(field, 'AttributeType', {
            get: function () {
                if (has(attribute, 'getAttributeType')) {
                    return attribute.getAttributeType();
                }
                return 'string';
            }
        });
        Object.defineProperty(field, 'Format', {
            get: function () {
                if (has(attribute, 'getFormat')) {
                    return attribute.getFormat();
                }
                return NULL;
            }
        });
        Object.defineProperty(field, 'InitialValue', {
            get: function () {
                if (has(attribute, 'getInitialValue')) {
                    return attribute.getInitialValue();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'IsDirty', {
            get: function () {
                if (has(attribute, 'getIsDirty')) {
                    return attribute.getIsDirty();
                }
                return EMPTY_BOOL;
            }
        });
        Object.defineProperty(field, 'IsPartyList', {
            get: function () {
                if (has(attribute, 'getIsPartyList')) {
                    return attribute.getIsPartyList();
                }
                return EMPTY_BOOL;
            }
        });
        Object.defineProperty(field, 'Max', {
            get: function () {
                if (has(attribute, 'getMax')) {
                    return attribute.getMax();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'MaxLength', {
            get: function () {
                if (has(attribute, 'getMaxLength')) {
                    return attribute.getMaxLength();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'Min', {
            get: function () {
                if (has(attribute, 'getMin')) {
                    return attribute.getMin();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'AttributeName', {
            get: function () {
                if (has(attribute, 'getName')) {
                    return attribute.getName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(field, 'Options', {
            get: function () {
                if (has(attribute, 'getOptions')) {
                    return attribute.getOptions();
                }
                return [];
            }
        });
        Object.defineProperty(field, 'ControlOptions', {
            get: function () {
                if (has(control, 'getOptions')) {
                    return control.getOptions();
                }
                return [];
            }
        });
        Object.defineProperty(field, 'AttributeParent', {
            get: function () {
                if (has(attribute, 'getParent')) {
                    return attribute.getParent();
                }
                return NULL;
            }
        });
        Object.defineProperty(field, 'SelectedOption', {
            get: function () {
                if (has(attribute, 'getSelectedOption')) {
                    return attribute.getSelectedOption();
                }
                return { text: EMPTY_STRING, value: EMPTY_NUMBER };
            }
        });
        Object.defineProperty(field, 'Text', {
            get: function () {
                if (has(attribute, 'getText')) {
                    return attribute.getText();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(field, 'UserPrivilege', {
            get: function () {
                if (has(attribute, 'getUserPrivilege')) {
                    return attribute.getUserPrivilege();
                }
                return { canRead: EMPTY_BOOL, canUpdate: EMPTY_BOOL, canCreate: EMPTY_BOOL };
            }
        });
        Object.defineProperty(field, 'IsValid', {
            get: function () {
                if (has(attribute, 'isValid')) {
                    return attribute.isValid();
                }
                return EMPTY_BOOL;
            }
        });
        Object.defineProperty(field, 'ControlType', {
            get: function () {
                if (has(control, 'getControlType')) {
                    return control.getControlType();
                }
                return 'standard';
            }
        });
        Object.defineProperty(field, 'InitialUrl', {
            get: function () {
                if (has(control, 'getInitialUrl')) {
                    return control.getInitialUrl();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(field, 'ControlName', {
            get: function () {
                if (has(control, 'getName')) {
                    return control.getName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(field, 'Object', {
            get: function () {
                if (has(control, 'getObject')) {
                    return control.getObject();
                }
                return {};
            }
        });
        Object.defineProperty(field, 'ControlParent', {
            get: function () {
                if (has(control, 'getParent')) {
                    return control.getParent();
                }
                return NULL;
            }
        });
        Object.defineProperty(field, 'State', {
            get: function () {
                if (has(control, 'getState')) {
                    return control.getState();
                }
                return 1;
            }
        });
        Object.defineProperty(field, 'TotalResultCount', {
            get: function () {
                if (has(control, 'getTotalResultCount')) {
                    return control.getTotalResultCount();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'SelectedResults', {
            get: function () {
                if (has(control, 'getSelectedResults')) {
                    return control.getSelectedResults();
                }
                return {};
            }
        });
        Object.defineProperty(field, 'Attribute', {
            get: function () {
                if (has(control, 'getAttribute')) {
                    return control.getAttribute();
                }
                return {};
            }
        });
        Object.defineProperty(field, 'Precision', {
            get: function () {
                if (has(attribute, 'getPrecision')) {
                    return attribute.getPrecision();
                }
                return EMPTY_NUMBER;
            },
            set: function (value) {
                if (has(attribute, 'setPrecision')) {
                    attribute.setPrecision(value);
                }
            }
        });
        Object.defineProperty(field, 'RequiredLevel', {
            get: function () {
                if (has(attribute, 'getRequiredLevel')) {
                    return attribute.getRequiredLevel();
                }
                return 'none';
            },
            set: function (value) {
                if (has(attribute, 'setRequiredLevel')) {
                    attribute.setRequiredLevel(value);
                }
            }
        });
        Object.defineProperty(field, 'SubmitMode', {
            get: function () {
                if (has(attribute, 'getSubmitMode')) {
                    return attribute.getSubmitMode();
                }
                return 'always';
            },
            set: function (value) {
                if (has(attribute, 'setSubmitMode')) {
                    attribute.setSubmitMode(value);
                }
            }
        });
        Object.defineProperty(field, 'Value', {
            get: function () {
                if (has(attribute, 'getValue')) {
                    return attribute.getValue();
                }
                return NULL;
            },
            set: function (value) {
                if (has(attribute, 'setValue')) {
                    attribute.setValue(value);
                }
            }
        });
        Object.defineProperty(field, 'Data', {
            get: function () {
                if (has(control, 'getData')) {
                    return control.getData();
                }
                return EMPTY_STRING;
            },
            set: function (value) {
                if (has(control, 'setData')) {
                    control.setData(value);
                }
            }
        });
        Object.defineProperty(field, 'DefaultView', {
            get: function () {
                if (has(control, 'getDefaultView')) {
                    return control.getDefaultView();
                }
                return EMPTY_GUID;
            },
            set: function (value) {
                if (has(control, 'setDefaultView')) {
                    control.setDefaultView(value);
                }
            }
        });
        Object.defineProperty(field, 'Disabled', {
            get: function () {
                if (has(control, 'getDisabled')) {
                    return control.getDisabled();
                }
                return EMPTY_BOOL;
            },
            set: function (value) {
                if (has(control, 'setDisabled')) {
                    control.setDisabled(value);
                }
            }
        });
        Object.defineProperty(field, 'EntityTypes', {
            get: function () {
                if (has(control, 'getEntityTypes')) {
                    return control.getEntityTypes();
                }
                return [];
            },
            set: function (value) {
                if (has(control, 'setEntityTypes')) {
                    control.setEntityTypes(value);
                }
            }
        });
        Object.defineProperty(field, 'Label', {
            get: function () {
                if (has(control, 'getLabel')) {
                    return control.getLabel();
                }
                return EMPTY_STRING;
            },
            set: function (value) {
                if (has(control, 'setLabel')) {
                    control.setLabel(value);
                }
            }
        });
        Object.defineProperty(field, 'SearchQuery', {
            get: function () {
                if (has(control, 'getSearchQuery')) {
                    return control.getSearchQuery();
                }
                return EMPTY_STRING;
            },
            set: function (value) {
                if (has(control, 'setSearchQuery')) {
                    control.setSearchQuery(value);
                }
            }
        });
        Object.defineProperty(field, 'ShowTime', {
            get: function () {
                if (has(control, 'getShowTime')) {
                    return control.getShowTime();
                }
                return EMPTY_BOOL;
            },
            set: function (value) {
                if (has(control, 'setShowTime')) {
                    control.setShowTime(value);
                }
            }
        });
        Object.defineProperty(field, 'Src', {
            get: function () {
                if (has(control, 'getSrc')) {
                    return control.getSrc();
                }
                return EMPTY_STRING;
            },
            set: function (value) {
                if (has(control, 'setSrc')) {
                    control.setSrc(value);
                }
            }
        });
        Object.defineProperty(field, 'Visible', {
            get: function () {
                if (has(control, 'getVisible')) {
                    return control.getVisible();
                }
                return EMPTY_BOOL;
            },
            set: function (value) {
                if (has(control, 'setVisible')) {
                    control.setVisible(value);
                }
            }
        });
    }
    function loadFields(formContext, body, type) {
        for (var field in body) {
            var logicalName = (function () {
                if (type === undefined) {
                    return field.toLowerCase();
                }
                return (type + field).toLowerCase();
            })();
            var control = formContext.getControl(logicalName);
            if (isNullOrUndefined(control)) {
                control = formContext.getControl(field);
            }
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
                            var attr = control.getAttribute();
                            if (attr) {
                                return attr;
                            }
                        }
                    }
                }
            })();
            loadField(body[field], attribute, control);
        }
        if (type === "footer_") {
            Object.defineProperty(body, 'Visible', {
                get: function () {
                    if (has(formContext, 'ui.footerSection.getVisible')) {
                        return formContext.ui.footerSection.getVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(formContext, 'ui.footerSection.setVisible')) {
                        formContext.ui.footerSection.setVisible(value);
                    }
                }
            });
        }
        else if (type === "header_") {
            Object.defineProperty(body, 'BodyVisible', {
                get: function () {
                    if (has(formContext, 'ui.headerSection.getBodyVisible')) {
                        return formContext.ui.headerSection.getBodyVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(formContext, 'ui.headerSection.setBodyVisible')) {
                        formContext.ui.headerSection.setBodyVisible(value);
                    }
                }
            });
            Object.defineProperty(body, 'CommandBarVisible', {
                get: function () {
                    if (has(formContext, 'ui.headerSection.getCommandBarVisible')) {
                        return formContext.ui.headerSection.getCommandBarVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(formContext, 'ui.headerSection.setCommandBarVisible')) {
                        formContext.ui.headerSection.setCommandBarVisible(value);
                    }
                }
            });
            Object.defineProperty(body, 'TabNavigatorVisible', {
                get: function () {
                    if (has(formContext, 'ui.headerSection.getTabNavigatorVisible')) {
                        return formContext.ui.headerSection.getTabNavigatorVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(formContext, 'ui.headerSection.setTabNavigatorVisible')) {
                        formContext.ui.headerSection.setTabNavigatorVisible(value);
                    }
                }
            });
        }
        return body;
    }
    function loadTabs(formContext, tabs) {
        var loadSection = function (formContext, tab, sections, section) {
            var tabObject = NULL;
            if (has(formContext, 'ui.tabs.get')) {
                tabObject = formContext.ui.tabs.get(tab);
            }
            var sectionObject = NULL;
            if (has(tabObject, 'sections.get')) {
                sectionObject = tabObject.sections.get(section);
            }
            Object.defineProperty(sections[section], 'Name', {
                get: function () {
                    if (has(sectionObject, 'getName')) {
                        return sectionObject.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(sections[section], 'Parent', {
                get: function () {
                    if (has(sectionObject, 'getParent')) {
                        return sectionObject.getParent();
                    }
                    return NULL;
                }
            });
            Object.defineProperty(sections[section], 'Label', {
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
            Object.defineProperty(sections[section], 'Visible', {
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
        var loadTab = function (formContext, tabs, tab) {
            var tabObject = NULL;
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
            Object.defineProperty(tabs[tab], 'Name', {
                get: function () {
                    if (has(tabObject, 'getName')) {
                        return tabObject.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(tabs[tab], 'Parent', {
                get: function () {
                    if (has(tabObject, 'getParent')) {
                        return tabObject.getParent();
                    }
                    return NULL;
                }
            });
            Object.defineProperty(tabs[tab], 'DisplayState', {
                get: function () {
                    if (has(tabObject, 'getDisplayState')) {
                        return tabObject.getDisplayState();
                    }
                    return 'expanded';
                },
                set: function (value) {
                    if (has(tabObject, 'setDisplayState')) {
                        tabObject.setDisplayState(value);
                    }
                }
            });
            Object.defineProperty(tabs[tab], 'ContentType', {
                get: function () {
                    if (has(tabObject, 'getContentType')) {
                        return tabObject.getContentType();
                    }
                    return 'cardSections';
                },
                set: function (value) {
                    if (has(tabObject, 'setContentType')) {
                        tabObject.setContentType(value);
                    }
                }
            });
            Object.defineProperty(tabs[tab], 'Label', {
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
            Object.defineProperty(tabs[tab], 'Visible', {
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
        var loadNavigation = function (formContext, navigations, navigation) {
            var navigationItem = NULL;
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
            Object.defineProperty(navigations[navigation], 'Id', {
                get: function () {
                    if (has(navigationItem, 'getId')) {
                        return navigationItem.getId();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(navigations[navigation], 'Label', {
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
            Object.defineProperty(navigations[navigation], 'Visible', {
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
        var loadQuickForm = function (formContext, quickForms, quickForm) {
            var quickViewControl = NULL;
            var fields = [];
            for (var field in quickForms[quickForm]) {
                fields.push(field);
                delete quickForms[quickForm][field];
            }
            if (has(formContext, 'ui.quickForms.get')) {
                quickViewControl = formContext.ui.quickForms.get(quickForm);
            }
            Object.defineProperty(quickForms[quickForm], 'Body', {
                get: function () {
                    var obj = {};
                    for (var i = 0; i < fields.length; i++) {
                        var field = fields[i];
                        if (quickViewControl.isLoaded()) {
                            var control = quickViewControl.getControl(field.toLowerCase());
                            var attribute = control.getAttribute();
                            var objField = {};
                            loadField(objField, attribute, control);
                            obj[field] = objField;
                        }
                    }
                    return obj;
                }
            });
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
            Object.defineProperty(quickForms[quickForm], 'ControlType', {
                get: function () {
                    if (has(quickViewControl, 'getControlType')) {
                        return quickViewControl.getControlType();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(quickForms[quickForm], 'Disabled', {
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
            Object.defineProperty(quickForms[quickForm], 'Label', {
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
            Object.defineProperty(quickForms[quickForm], 'ControlName', {
                get: function () {
                    if (has(quickViewControl, 'getName')) {
                        return quickViewControl.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(quickForms[quickForm], 'ControlParent', {
                get: function () {
                    if (has(quickViewControl, 'getParent')) {
                        return quickViewControl.getParent();
                    }
                    return NULL;
                }
            });
            Object.defineProperty(quickForms[quickForm], 'Visible', {
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
            Object.defineProperty(obj, 'EntityName', {
                get: function () {
                    if (has(row, 'data.entity.getEntityName')) {
                        return row.data.entity.getEntityName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'EntityReference', {
                get: function () {
                    if (has(row, 'data.entity.getEntityReference')) {
                        return row.data.entity.getEntityReference();
                    }
                    return EMPTY_REFERENCE;
                }
            });
            Object.defineProperty(obj, 'EntityId', {
                get: function () {
                    if (has(row, 'data.entity.getId')) {
                        return row.data.entity.getId();
                    }
                    return EMPTY_GUID;
                }
            });
            Object.defineProperty(obj, 'PrimaryAttributeValue', {
                get: function () {
                    if (has(row, 'data.entity.getPrimaryAttributeValue')) {
                        return row.data.entity.getPrimaryAttributeValue();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'Columns', {
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
            Object.defineProperty(obj, 'Name', {
                get: function () {
                    if (has(col, 'getName')) {
                        return col.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'RequiredLevel', {
                get: function () {
                    if (has(col, 'getRequiredLevel')) {
                        return col.getRequiredLevel();
                    }
                    return 'none';
                },
                set: function (value) {
                    if (has(col, 'setRequiredLevel')) {
                        col.setRequiredLevel(value);
                    }
                }
            });
            Object.defineProperty(obj, 'Value', {
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
            Object.defineProperty(obj, 'Disabled', {
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
            Object.defineProperty(obj, 'Label', {
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
        var loadGrid = function (formContext, grids, grid) {
            var gridControl = NULL;
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
            Object.defineProperty(grids[grid], 'EntityName', {
                get: function () {
                    if (has(gridControl, 'getEntityName')) {
                        return gridControl.getEntityName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(grids[grid], 'FetchXml', {
                get: function () {
                    if (has(gridControl, 'getFetchXml')) {
                        return gridControl.getFetchXml();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(grids[grid], 'GridType', {
                get: function () {
                    if (has(gridControl, 'getGridType')) {
                        return gridControl.getGridType();
                    }
                    return 2;
                }
            });
            Object.defineProperty(grids[grid], 'Relationship', {
                get: function () {
                    if (has(gridControl, 'getRelationship')) {
                        return gridControl.getRelationship();
                    }
                    return {};
                }
            });
            Object.defineProperty(grids[grid], 'ViewSelector', {
                get: function () {
                    var viewSelector = NULL;
                    if (has(gridControl, 'getViewSelector')) {
                        viewSelector = gridControl.getViewSelector();
                    }
                    var obj = {};
                    Object.defineProperty(obj, 'CurrentView', {
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
                    Object.defineProperty(obj, 'Visible', {
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
            Object.defineProperty(grids[grid], 'Rows', {
                get: function () {
                    var obj = {};
                    var getGrid = NULL;
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
            Object.defineProperty(grids[grid], 'SelectedRows', {
                get: function () {
                    var obj = {};
                    var getGrid = NULL;
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
            Object.defineProperty(grids[grid], 'TotalRecordCount', {
                get: function () {
                    var getGrid = NULL;
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
        var getUtility = NULL;
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
        utility.EntityMainFormDescriptor = function (entityName, formId) {
            if (has(getUtility, 'getEntityMainFormDescriptor')) {
                return getUtility.getEntityMainFormDescriptor(entityName, formId);
            }
            return NULL;
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
        Object.defineProperty(utility, 'LearningPathAttributeName', {
            get: function () {
                if (has(getUtility, 'getLearningPathAttributeName')) {
                    return getUtility.getLearningPathAttributeName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(utility, 'PageContext', {
            get: function () {
                if (has(getUtility, 'getPageContext')) {
                    return getUtility.getPageContext();
                }
                return NULL;
            }
        });
        var getGlobalContext = NULL;
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
        Object.defineProperty(utility, 'Client', {
            get: function () {
                var obj = {};
                var client = NULL;
                if (has(getGlobalContext, 'client')) {
                    client = getGlobalContext.client;
                }
                Object.defineProperty(obj, 'ClientName', {
                    get: function () {
                        if (has(client, 'getClient')) {
                            return client.getClient();
                        }
                        return 'Web';
                    }
                });
                Object.defineProperty(obj, 'ClientState', {
                    get: function () {
                        if (has(client, 'getClientState')) {
                            return client.getClientState();
                        }
                        return 'Online';
                    }
                });
                Object.defineProperty(obj, 'FormFactor', {
                    get: function () {
                        if (has(client, 'getFormFactor')) {
                            return client.getFormFactor();
                        }
                        return EMPTY_NUMBER;
                    }
                });
                Object.defineProperty(obj, 'IsOffline', {
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
        Object.defineProperty(utility, 'OrganizationSettings', {
            get: function () {
                var obj = {};
                var organizationSettings = NULL;
                if (has(getGlobalContext, 'organizationSettings')) {
                    organizationSettings = getGlobalContext.organizationSettings;
                }
                Object.defineProperty(obj, 'Attributes', {
                    get: function () {
                        if (has(organizationSettings, 'attributes')) {
                            return organizationSettings.attributes;
                        }
                        return {};
                    }
                });
                Object.defineProperty(obj, 'BaseCurrencyId', {
                    get: function () {
                        if (has(organizationSettings, 'baseCurrencyId')) {
                            return organizationSettings.baseCurrencyId;
                        }
                        return EMPTY_GUID;
                    }
                });
                Object.defineProperty(obj, 'BaseCurrency', {
                    get: function () {
                        if (has(organizationSettings, 'baseCurrency')) {
                            return organizationSettings.baseCurrency;
                        }
                        return EMPTY_REFERENCE;
                    }
                });

                Object.defineProperty(obj, 'DefaultCountryCode', {
                    get: function () {
                        if (has(organizationSettings, 'defaultCountryCode')) {
                            return organizationSettings.defaultCountryCode;
                        }
                        return NULL;
                    }
                });
                Object.defineProperty(obj, 'IsAutoSaveEnabled', {
                    get: function () {
                        if (has(organizationSettings, 'isAutoSaveEnabled')) {
                            return organizationSettings.isAutoSaveEnabled;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, 'LanguageId', {
                    get: function () {
                        if (has(organizationSettings, 'languageId')) {
                            return organizationSettings.languageId;
                        }
                        return 1033;
                    }
                });
                Object.defineProperty(obj, 'OrganizationId', {
                    get: function () {
                        if (has(organizationSettings, 'organizationId')) {
                            return organizationSettings.organizationId;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, 'IsTrialOrganization', {
                    get: function () {
                        if (has(organizationSettings, 'isTrialOrganization')) {
                            return organizationSettings.isTrialOrganization;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, 'OrganizationExpiryDate', {
                    get: function () {
                        if (has(organizationSettings, 'organizationExpiryDate')) {
                            return organizationSettings.organizationExpiryDate;
                        }
                        return NULL;
                    }
                });
                Object.defineProperty(obj, 'UniqueName', {
                    get: function () {
                        if (has(organizationSettings, 'uniqueName')) {
                            return organizationSettings.uniqueName;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, 'UseSkypeProtocol', {
                    get: function () {
                        if (has(organizationSettings, 'useSkypeProtocol')) {
                            return organizationSettings.useSkypeProtocol;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, 'FullNameConventionCode', {
                    get: function () {
                        if (has(organizationSettings, 'fullNameConventionCode')) {
                            return organizationSettings.fullNameConventionCode;
                        }
                        return EMPTY_NUMBER;
                    }
                });
                return obj;
            }
        });
        Object.defineProperty(utility, 'UserSettings', {
            get: function () {
                var obj = {};
                var userSettings = NULL;
                if (has(getGlobalContext, 'userSettings')) {
                    userSettings = getGlobalContext.userSettings;
                }
                Object.defineProperty(obj, 'DateFormattingInfo', {
                    get: function () {
                        if (has(userSettings, 'dateFormattingInfo')) {
                            return userSettings.dateFormattingInfo;
                        }
                        return {};
                    }
                });
                Object.defineProperty(obj, 'DefaultDashboardId', {
                    get: function () {
                        if (has(userSettings, 'defaultDashboardId')) {
                            return userSettings.defaultDashboardId;
                        }
                        return EMPTY_GUID;
                    }
                });
                Object.defineProperty(obj, 'IsGuidedHelpEnabled', {
                    get: function () {
                        if (has(userSettings, 'isGuidedHelpEnabled')) {
                            return userSettings.isGuidedHelpEnabled;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, 'IsHighContrastEnabled', {
                    get: function () {
                        if (has(userSettings, 'isHighContrastEnabled')) {
                            return userSettings.isHighContrastEnabled;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, 'IsRTL', {
                    get: function () {
                        if (has(userSettings, 'isRTL')) {
                            return userSettings.isRTL;
                        }
                        return EMPTY_BOOL;
                    }
                });
                Object.defineProperty(obj, 'LanguageId', {
                    get: function () {
                        if (has(userSettings, 'languageId')) {
                            return userSettings.languageId;
                        }
                        return 1033;
                    }
                });
                Object.defineProperty(obj, 'Roles', {
                    get: function () {
                        if (has(userSettings, 'roles')) {
                            return userSettings.roles;
                        }
                        return [];
                    }
                });
                Object.defineProperty(obj, 'SecurityRolePrivileges', {
                    get: function () {
                        if (has(userSettings, 'securityRolePrivileges')) {
                            return userSettings.securityRolePrivileges;
                        }
                        return [];
                    }
                });
                Object.defineProperty(obj, 'SecurityRoles', {
                    get: function () {
                        if (has(userSettings, 'securityRoles')) {
                            return userSettings.securityRoles;
                        }
                        return [];
                    }
                });
                Object.defineProperty(obj, 'TransactionCurrency', {
                    get: function () {
                        if (has(userSettings, 'transactionCurrency')) {
                            return userSettings.transactionCurrency;
                        }
                        return EMPTY_REFERENCE;
                    }
                });
                Object.defineProperty(obj, 'TransactionCurrencyId', {
                    get: function () {
                        if (has(userSettings, 'transactionCurrencyId')) {
                            return userSettings.transactionCurrencyId;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, 'UserId', {
                    get: function () {
                        if (has(userSettings, 'userId')) {
                            return userSettings.userId;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, 'UserName', {
                    get: function () {
                        if (has(userSettings, 'userName')) {
                            return userSettings.userName;
                        }
                        return EMPTY_STRING;
                    }
                });
                Object.defineProperty(obj, 'TimeZoneOffsetMinutes', {
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
        Object.defineProperty(utility, 'ClientUrl', {
            get: function () {
                if (has(getGlobalContext, 'getClientUrl')) {
                    return getGlobalContext.getClientUrl();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(utility, 'CurrentAppUrl', {
            get: function () {
                if (has(getGlobalContext, 'getCurrentAppUrl')) {
                    return getGlobalContext.getCurrentAppUrl();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(utility, 'Version', {
            get: function () {
                if (has(getGlobalContext, 'getVersion')) {
                    return getGlobalContext.getVersion();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(utility, 'IsOnPremises', {
            get: function () {
                if (has(getGlobalContext, 'isOnPremises')) {
                    return getGlobalContext.isOnPremises();
                }
                return EMPTY_BOOL;
            }
        });
        var getNavigation = NULL;
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
        var getPanel = NULL;
        if (has(Xrm, 'Panel')) {
            getPanel = Xrm.Panel;
        }
        utility.LoadPanel = function (url, title) {
            if (has(getPanel, 'loadPanel')) {
                getPanel.loadPanel(url, title);
            }
        };
        var getEncoding = NULL;
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
        var getDevice = NULL;
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
        var getApp = NULL;
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
    function loadExecutionContext(executionContext) {
        var obj = {};
        obj.GetSharedVariable = function (key) {
            if (has(executionContext, 'getSharedVariable')) {
                return executionContext.getSharedVariable(key);
            }
            return NULL;
        }
        obj.SetSharedVariable = function (key, value) {
            if (has(executionContext, 'setSharedVariable')) {
                return executionContext.setSharedVariable(key, value);
            }
            return NULL;
        }
        obj.IsDefaultPrevented = function () {
            if (has(executionContext, 'getEventArgs')) {
                return executionContext.getEventArgs().isDefaultPrevented();
            }
            return EMPTY_BOOL;
        }
        obj.SetPreventDefault = function () {
            if (has(executionContext, 'getEventArgs')) {
                executionContext.getEventArgs().preventDefault();
            }
        }
        obj.SetPreventDefaultOnError = function () {
            if (has(executionContext, 'getEventArgs')) {
                executionContext.getEventArgs().preventDefaultOnError();
            }
        }
        Object.defineProperty(obj, 'Depth', {
            get: function () {
                if (has(executionContext, 'getDepth')) {
                    return executionContext.getDepth();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(obj, 'EventArgs', {
            get: function () {
                if (has(executionContext, 'getEventArgs')) {
                    return executionContext.getEventArgs();
                }
                return {};
            }
        });
        Object.defineProperty(obj, 'EventSource', {
            get: function () {
                if (has(executionContext, 'getEventSource')) {
                    return executionContext.getEventSource();
                }
                return {};
            }
        });
        Object.defineProperty(obj, 'FormContext', {
            get: function () {
                if (has(executionContext, 'getFormContext')) {
                    return executionContext.getFormContext();
                }
                return {};
            }
        });
        Object.defineProperty(obj, 'SaveMode', {
            get: function () {
                if (has(executionContext, 'getEventArgs')) {
                    return executionContext.getEventArgs().getSaveMode();
                }
                return 1;
            }
        });
        Object.defineProperty(obj, 'EntityReference', {
            get: function () {
                if (has(executionContext, 'getEntityReference')) {
                    return executionContext.getEventArgs().getEntityReference();
                }
                return {};
            }
        });
        Object.defineProperty(obj, 'IsSaveSuccess', {
            get: function () {
                if (has(executionContext, 'getIsSaveSuccess')) {
                    return executionContext.getEventArgs().getIsSaveSuccess();
                }
                return false;
            }
        });
        Object.defineProperty(obj, 'SaveErrorInfo', {
            get: function () {
                if (has(executionContext, 'getSaveErrorInfo')) {
                    return executionContext.getEventArgs().getSaveErrorInfo();
                }
                return {};
            }
        });
        return obj;
    }
    function loadSidePanes() {
        var sidePanes = {};
        sidePanes.Create = function (paneOptions, successCallback) {
            Xrm.App.sidePanes.createPane(paneOptions).then(successCallback);
        }
        sidePanes.Get = function (paneId) {
            return Xrm.App.sidePanes.getPane(paneId);
        }
        sidePanes.GetSelected = function () {
            return Xrm.App.sidePanes.getSelectedPane();
        }
        sidePanes.GetAll = function () {
            return Xrm.App.sidePanes.getAllPanes();
        }
        Object.defineProperty(sidePanes, 'DisplayState', {
            get: function () {
                return Xrm.App.sidePanes.state;
            },
            set: function (value) {
                Xrm.App.sidePanes.state = value;
            }
        });
        return sidePanes;
    }
    function loadOthers(formContext, form, defaultWebResourceName) {
        form.SidePanes = loadSidePanes();
    }
    return {
        LoadForm: loadForm,
        LoadProcess: loadProcess,
        LoadFields: loadFields,
        LoadTabs: loadTabs,
        LoadNavigations: loadNavigations,
        LoadQuickForms: loadQuickForms,
        LoadGrids: loadGrids,
        LoadUtility: loadUtility,
        LoadExecutionContext: loadExecutionContext,
        LoadOthers: loadOthers
    }
})();
/** @namespace OptionSet */
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
    OptionSet.TabContentType = {
        CardSections: 'cardSections',
        SingleComponent: 'singleComponent'
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
    };
    OptionSet.SidePaneState = {
        Collapsed: 0,
        Expanded: 1
    };
    OptionSet.FullNameConventionCode = {
        LastName_Comma_FirstName: 0,
        FirstName_LastName: 1,
        LastName_Comma_FirstName_MiddleInitial: 2,
        FirstName_MiddleInitial_LastName: 3,
        LastName_Comma_FirstName_MiddleName: 4,
        FirstName_MiddleName_LastName: 5,
        LastName_FirstName: 6,
        LastNameFirstName: 7
    };
})(OptionSet || (OptionSet = {}));
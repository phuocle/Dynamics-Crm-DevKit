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
        var contextData = formContext.data;
        form.DataAddOnLoad = function (callback) {
            contextData.addOnLoad(callback);
        };
        form.Refresh = function (save, successCallback, errorCallback) {
            contextData.refresh(save).then(successCallback, errorCallback);
        };
        form.DataRemoveOnLoad = function (callback) {
            contextData.removeOnLoad(callback);
        };
        form.Save = function (saveOptions, successCallback, errorCallback) {
            contextData.save(saveOptions).then(successCallback, errorCallback);
        };
        Object.defineProperty(form, 'DataIsDirty', {
            get() { return contextData.getIsDirty(); }
        });
        Object.defineProperty(form, 'DataIsValid', {
            get() { return contextData.isValid(); }
        });
        var contextDataEntity = formContext.data.entity;
        form.AddOnSave = function (callback) {
            contextDataEntity.addOnSave(callback);
        };
        form.AddOnPostSave = function (callback) {
            contextDataEntity.addOnPostSave(callback);
        }
        form.RemoveOnSave = function (callback) {
            contextDataEntity.removeOnSave(callback);
        };
        form.RemoveOnPostSave = function (callback) {
            contextDataEntity.removeOnPostSave(callback);
        };
        Object.defineProperty(form, 'Attributes', {
            get() { return contextDataEntity.attributes; }
        });
        Object.defineProperty(form, 'DataXml', {
            get() { return contextDataEntity.getDataXml(); }
        });
        Object.defineProperty(form, 'EntityName', {
            get() { return contextDataEntity.getEntityName(); }
        });
        Object.defineProperty(form, 'EntityReference', {
            get() { return contextDataEntity.getEntityReference(); }
        });
        Object.defineProperty(form, 'EntityId', {
            get() { return contextDataEntity.getId(); }
        });
        Object.defineProperty(form, 'EntityIsDirty', {
            get() { return contextDataEntity.getIsDirty(); }
        });
        Object.defineProperty(form, 'PrimaryAttributeValue', {
            get() { return contextDataEntity.getPrimaryAttributeValue(); }
        });
        Object.defineProperty(form, 'EntityIsValid', {
            get() { return contextDataEntity.isValid(); }
        });
        var contextUi = formContext.ui;
        form.UiAddLoaded = function (callback) {
            contextUi.addLoaded(callback);
        };
        form.UiAddOnLoad = function (callback) {
            contextUi.addOnLoad(callback);
        };
        form.ClearFormNotification = function (uniqueId) {
            return contextUi.clearFormNotification(uniqueId);
        };
        form.Close = function () {
            contextUi.close();
        };
        form.RefreshRibbon = function (refreshAll) {
            contextUi.refreshRibbon(refreshAll);
        };
        form.UiRemoveLoaded = function (callback) {
            contextUi.removeLoaded(callback);
        };
        form.UiRemoveOnLoad = function (callback) {
            contextUi.removeOnLoad(callback);
        };
        form.SetFormEntityName = function (arg) {
            contextUi.setFormEntityName(arg);
        };
        form.SetFormNotification = function (message, level, uniqueId) {
            return contextUi.setFormNotification(message, level, uniqueId);
        };
        Object.defineProperty(form, 'Controls', {
            get() { return contextUi.controls; }
        });
        Object.defineProperty(form, 'FormType', {
            get() { return contextUi.getFormType(); }
        });
        Object.defineProperty(form, 'ViewPortHeight', {
            get() { return contextUi.getViewPortHeight(); }
        });
        Object.defineProperty(form, 'ViewPortWidth', {
            get() { return contextUi.getViewPortWidth(); }
        });
        var contextUiFormSelector = formContext?.ui?.formSelector;
        form.FormNavigateToFormId = function (formId) {
            for (var i = 0; i < contextUiFormSelector?.items?.getLength(); i++) {
                if (formId === contextUiFormSelector?.items?.get(i)?.getId()) {
                    contextUiFormSelector?.items?.get(i)?.navigate();
                }
            }
        };
        form.FormNavigateToFormLabel = function (formLabel) {
            for (var i = 0; i < contextUiFormSelector.items.getLength(); i++) {
                if (formLabel === contextUiFormSelector.items.get(i).getLabel()) {
                    var form = contextUiFormSelector.items.get(i)
                    form.navigate();
                }
            }
        };
        form.FormIsVisible = function (formId) {
            for (var i = 0; i < contextUiFormSelector.items.getLength(); i++) {
                if (formId === contextUiFormSelector.items.get(i).getId()) {
                    return contextUiFormSelector.items.get(i).getVisible();
                }
            }
        }
        form.FormSetVisible = function (formId, value) {
            for (var i = 0; i < contextUiFormSelector.items.getLength(); i++) {
                if (formId === contextUiFormSelector.items.get(i).getId()) {
                    contextUiFormSelector.items.get(i).setVisible(value);
                }
            }
        }
        Object.defineProperty(form, 'FormId', {
            get() { return contextUiFormSelector.getCurrentItem().getId(); }
        });
        Object.defineProperty(form, 'FormLabel', {
            get() { return contextUiFormSelector.getCurrentItem().getLabel(); }
        });
        return form;
    }
    function loadProcess(formContext) {
        var loadStep = function (step) {
            var obj = {};
            Object.defineProperty(obj, 'Attribute', {
                get() { return step.getAttribute(); }
            });
            Object.defineProperty(obj, 'Name', {
                get() { return step.getName(); }
            });
            Object.defineProperty(obj, 'Required', {
                get() { return step.isRequired(); }
            });
            Object.defineProperty(obj, 'Progress', {
                get() { return step.getProgress(); }
            });
            obj.SetProgress = function (stepProgress, message) {
                step.setProgress(stepProgress, message);
            }
            return obj;
        }
        var loadStage = function (stage) {
            var obj = {};
            Object.defineProperty(obj, 'Category', {
                get() { return stage.getCategory().getValue(); }
            });
            Object.defineProperty(obj, 'EntityName', {
                get() { return stage.getEntityName(); }
            });
            Object.defineProperty(obj, 'Id', {
                get() { return stage.getId(); }
            });
            Object.defineProperty(obj, 'Name', {
                get() { return stage.getName(); }
            });
            Object.defineProperty(obj, 'Status', {
                get() { return stage.getStatus(); }
            });
            obj.AllowCreateNew = function (callback) {
                stage.getNavigationBehavior().allowCreateNew = callback;
            }
            Object.defineProperty(obj, 'Steps', {
                get() {
                    var obj = [];
                    var steps = stage.getSteps();
                    for (var index = 0; index < steps.length; index++) {
                        var step = steps[index];
                        obj.push(loadStep(step));
                    }
                    return obj;
                }
            });
            return obj;
        }
        var loadProcess = function (process) {
            var obj = {};
            Object.defineProperty(obj, 'Id', {
                get() { return process.getId(); }
            });
            Object.defineProperty(obj, 'Name', {
                get() { return process.getName(); }
            });
            Object.defineProperty(obj, 'IsRendered', {
                get() { return process.isRendered(); }
            });
            Object.defineProperty(obj, 'Stages', {
                get() {
                    var obj = {};
                    obj.getLength = function () {
                        return process.getStages().getLength();
                    }
                    obj.get = function (index) {
                        var stage = process.getStages().get(index);
                        return loadStage(stage);
                    }
                    obj.forEach = function (callback) {
                        var stages = process.getStages();
                        for (var index = 0; index < stages.getLength(); index++) {
                            var stage = stages.get(index);
                            callback(loadStage(stage), index);
                        }
                    }
                    return obj;
                }
            });
            return obj;
        }
        var process = {};
        var getProcess = formContext?.data?.process;
        var getProcessUi = formContext?.ui?.process;
        process.AddOnPreProcessStatusChange = function (callback) {
            getProcess.addOnPreProcessStatusChange(callback);
        };
        process.RemoveOnPreProcessStatusChange = function (callback) {
            getProcess.removeOnPreProcessStatusChange(callback);
        };
        process.AddOnPreStageChange = function (callback) {
            getProcess.addOnPreStageChange(callback);
        };
        process.RemoveOnPreStageChange = function (callback) {
            getProcess.removeOnPreStageChange(callback);
        };
        process.AddOnProcessStatusChange = function (callback) {
            getProcess.addOnProcessStatusChange(callback);
        };
        process.RemoveOnProcessStatusChange = function (callback) {
            getProcess.removeOnProcessStatusChange(callback);
        };
        process.AddOnStageChange = function (callback) {
            getProcess.addOnStageChange(callback);
        };
        process.RemoveOnStageChange = function (callback) {
            getProcess.removeOnStageChange(callback);
        };
        process.AddOnStageSelected = function (callback) {
            getProcess.addOnStageSelected(callback);
        };
        process.RemoveOnStageSelected = function (callback) {
            getProcess.removeOnStageSelected(callback);
        };
        process.EnabledProcesses = function (callback) {
            getProcess.getEnabledProcesses(function (enabledProcesses) {
                var processes = [];
                for (var processId in enabledProcesses) {
                    processes.push({ ProcessId: processId, ProcessName: enabledProcesses[processId] });
                }
                callback(processes);
            });
        };
        process.MoveNext = function (callback) {
            getProcess.moveNext(callback);
        };
        process.MovePrevious = function (callback) {
            getProcess.movePrevious(callback);
        };
        process.ProcessInstances = function (callback) {
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
        };
        process.SetActiveStage = function (stageId, callback) {
            getProcess.setActiveStage(stageId, callback);
        };
        process.SetActiveProcessInstance = function (processInstanceId, callback) {
            getProcess.setActiveProcessInstance(processInstanceId, callback);
        };
        process.SetActiveProcess = function (processId, callback) {
            getProcess.setActiveProcess(processId, callback);
        };
        process.Reflow = function (updateUi, parentStage, nextStage) {
            getProcessUi.reflow(updateUi, parentStage, nextStage);
        }
        Object.defineProperty(process, 'ActiveProcess', {
            get() { return loadProcess(getProcess.getActiveProcess()); }
        });
        Object.defineProperty(process, 'SelectedStage', {
            get() { return loadStage(getProcess.getSelectedStage()); }
        });
        Object.defineProperty(process, 'ActiveStage', {
            get() { return loadStage(getProcess.getActiveStage()); }
        });
        Object.defineProperty(process, 'InstanceId', {
            get() { return getProcess.getInstanceId(); }
        });
        Object.defineProperty(process, 'InstanceName', {
            get() { return getProcess.getInstanceName(); }
        });
        Object.defineProperty(process, 'Status', {
            get() { return getProcess.getStatus(); },
            set(value) { getProcess.setStatus(value); }
        });
        Object.defineProperty(process, 'DisplayState', {
            get() { return getProcessUi.getDisplayState(); },
            set(value) { getProcessUi.setDisplayState(value); }
        });
        Object.defineProperty(process, 'Visible', {
            get() { return getProcessUi.getVisible(); },
            set(value) { getProcessUi.setVisible(value); }
        });
        Object.defineProperty(process, 'ActivePath', {
            get() {
                var obj = {};
                obj.getLength = function () { return getProcess.getActivePath().getLength(); }
                obj.get = function (index) {
                    var stage = getProcess.getActivePath().get(index);
                    return loadStage(stage);
                }
                obj.forEach = function (callback) {
                    var stages = getProcess.getActivePath();
                    for (var index = 0; index < stages.getLength(); index++) {
                        var stage = stages.get(index);
                        callback(loadStage(stage), index);
                    }
                }
                return obj;
            }
        });
        return process;
    }
    function loadField(formContext, field, attribute, control) {
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
        field.AddOnOutputChange = function (callback) {
            if (has(control, 'addOnOutputChange')) {
                control.addOnOutputChange(callback);
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
        field.RemoveOnOutputChange = function (callback) {
            if (has(control, 'removeOnOutputChange')) {
                control.removeOnOutputChange(callback);
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
        field.AddNotification = function (message, notificationLevel, uniqueId, callback) {
            if (has(control, 'addNotification')) {
                var actions = { message: message, actions: [callback] };
                var notification = { messages: [message], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
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
            get() {
                if (has(attribute, 'getAttributeType')) {
                    return attribute.getAttributeType();
                }
                return 'string';
            }
        });
        Object.defineProperty(field, 'Format', {
            get() {
                if (has(attribute, 'getFormat')) {
                    return attribute.getFormat();
                }
                return NULL;
            }
        });
        Object.defineProperty(field, 'InitialValue', {
            get() {
                if (has(attribute, 'getInitialValue')) {
                    return attribute.getInitialValue();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'IsDirty', {
            get() {
                if (has(attribute, 'getIsDirty')) {
                    return attribute.getIsDirty();
                }
                return EMPTY_BOOL;
            }
        });
        Object.defineProperty(field, 'IsPartyList', {
            get() {
                if (has(attribute, 'getIsPartyList')) {
                    return attribute.getIsPartyList();
                }
                return EMPTY_BOOL;
            }
        });
        Object.defineProperty(field, 'Max', {
            get() {
                if (has(attribute, 'getMax')) {
                    return attribute.getMax();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'MaxLength', {
            get() {
                if (has(attribute, 'getMaxLength')) {
                    return attribute.getMaxLength();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'Min', {
            get() {
                if (has(attribute, 'getMin')) {
                    return attribute.getMin();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'AttributeName', {
            get() {
                if (has(attribute, 'getName')) {
                    return attribute.getName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(field, 'Options', {
            get() {
                if (has(attribute, 'getOptions')) {
                    return attribute.getOptions();
                }
                return [];
            }
        });
        Object.defineProperty(field, 'ControlOptions', {
            get() {
                if (has(control, 'getOptions')) {
                    return control.getOptions();
                }
                return [];
            }
        });
        Object.defineProperty(field, 'AttributeParent', {
            get() {
                if (has(attribute, 'getParent')) {
                    return attribute.getParent();
                }
                return NULL;
            }
        });
        Object.defineProperty(field, 'SelectedOption', {
            get() {
                if (has(attribute, 'getSelectedOption')) {
                    return attribute.getSelectedOption();
                }
                return { text: EMPTY_STRING, value: EMPTY_NUMBER };
            }
        });
        Object.defineProperty(field, 'Text', {
            get() {
                if (has(attribute, 'getText')) {
                    return attribute.getText();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(field, 'UserPrivilege', {
            get() {
                if (has(attribute, 'getUserPrivilege')) {
                    return attribute.getUserPrivilege();
                }
                return { canRead: EMPTY_BOOL, canUpdate: EMPTY_BOOL, canCreate: EMPTY_BOOL };
            }
        });
        Object.defineProperty(field, 'IsValid', {
            get() {
                if (has(attribute, 'isValid')) {
                    return attribute.isValid();
                }
                return EMPTY_BOOL;
            }
        });
        Object.defineProperty(field, 'ControlType', {
            get() {
                if (has(control, 'getControlType')) {
                    return control.getControlType();
                }
                return 'standard';
            }
        });
        Object.defineProperty(field, 'InitialUrl', {
            get() {
                if (has(control, 'getInitialUrl')) {
                    return control.getInitialUrl();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(field, 'ControlName', {
            get() {
                if (has(control, 'getName')) {
                    return control.getName();
                }
                return EMPTY_STRING;
            }
        });
        Object.defineProperty(field, 'Object', {
            get() {
                if (has(control, 'getObject')) {
                    return control.getObject();
                }
                return {};
            }
        });
        Object.defineProperty(field, 'ControlParent', {
            get() {
                if (has(control, 'getParent')) {
                    return control.getParent();
                }
                return NULL;
            }
        });
        Object.defineProperty(field, 'State', {
            get() {
                if (has(control, 'getState')) {
                    return control.getState();
                }
                return 1;
            }
        });
        Object.defineProperty(field, 'TotalResultCount', {
            get() {
                if (has(control, 'getTotalResultCount')) {
                    return control.getTotalResultCount();
                }
                return EMPTY_NUMBER;
            }
        });
        Object.defineProperty(field, 'SelectedResults', {
            get() {
                if (has(control, 'getSelectedResults')) {
                    return control.getSelectedResults();
                }
                return {};
            }
        });
        Object.defineProperty(field, 'Attribute', {
            get() {
                if (has(control, 'getAttribute')) {
                    return control.getAttribute();
                }
                return {};
            }
        });
        Object.defineProperty(field, 'Precision', {
            get() {
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
            get() {
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
            get() {
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
            get() {
                if (has(attribute, 'getValue')) {
                    return attribute.getValue();
                }
                return NULL;
            },
            set: function (value) {
                if (formContext.ui.getFormType() === 3 || formContext.ui.getFormType() === 4) return;
                if (has(attribute, 'setValue')) {
                    attribute.setValue(value);
                }
            }
        });
        Object.defineProperty(field, 'Data', {
            get() {
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
            get() {
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
            get() {
                if (has(control, 'getDisabled')) {
                    return control.getDisabled();
                }
                return EMPTY_BOOL;
            },
            set: function (value) {
                if (formContext.ui.getFormType() === 3 || formContext.ui.getFormType() === 4) return;
                if (has(control, 'setDisabled')) {
                    control.setDisabled(value);
                }
            }
        });
        Object.defineProperty(field, 'EntityTypes', {
            get() {
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
            get() {
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
            get() {
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
            get() {
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
            get() {
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
            get() {
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
            var control = null;
            if (formContext.getControl) {
                control = formContext.getControl(logicalName);
            }
            if (isNullOrUndefined(control)) {
                if (formContext.getControl) {
                control = formContext.getControl(field);
            }
            }
            var attribute = (function () {
                var attr = null;
                if (formContext) {
                    if (formContext.getAttribute) {
                        attr = formContext.getAttribute(logicalName);
                        if (attr) {
                            return attr;
                        }
                    }
                    if (control) {
                        if (control.getAttribute) {
                            try {
                                attr = control.getAttribute();
                            }
                            catch {
                                try {
                                    attr = formContext.getAttribute(control.controlDescriptor.Id);
                                } catch { }
                            }
                            if (attr) {
                                return attr;
                            }
                        }
                    }
                }
            })();
            loadField(formContext, body[field], attribute, control);
        }
        if (type === "footer_") {
            Object.defineProperty(body, 'Visible', {
                get() {
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
                get() {
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
                get() {
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
                get() {
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
                get() {
                    if (has(sectionObject, 'getName')) {
                        return sectionObject.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(sections[section], 'Parent', {
                get() {
                    if (has(sectionObject, 'getParent')) {
                        return sectionObject.getParent();
                    }
                    return NULL;
                }
            });
            Object.defineProperty(sections[section], 'Label', {
                get() {
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
                get() {
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
                get() {
                    if (has(tabObject, 'getName')) {
                        return tabObject.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(tabs[tab], 'Parent', {
                get() {
                    if (has(tabObject, 'getParent')) {
                        return tabObject.getParent();
                    }
                    return NULL;
                }
            });
            Object.defineProperty(tabs[tab], 'DisplayState', {
                get() {
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
                get() {
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
                get() {
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
                get() {
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
                get() {
                    if (has(navigationItem, 'getId')) {
                        return navigationItem.getId();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(navigations[navigation], 'Label', {
                get() {
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
                get() {
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
                get() {
                    var obj = {};
                    for (var i = 0; i < fields.length; i++) {
                        var field = fields[i];
                        if (quickViewControl.isLoaded()) {
                            var control = quickViewControl.getControl(field.toLowerCase());
                            var attribute = control.getAttribute();
                            var objField = {};
                            loadField(formContext, objField, attribute, control);
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
                get() {
                    if (has(quickViewControl, 'getControlType')) {
                        return quickViewControl.getControlType();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(quickForms[quickForm], 'Disabled', {
                get() {
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
                get() {
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
                get() {
                    if (has(quickViewControl, 'getName')) {
                        return quickViewControl.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(quickForms[quickForm], 'ControlParent', {
                get() {
                    if (has(quickViewControl, 'getParent')) {
                        return quickViewControl.getParent();
                    }
                    return NULL;
                }
            });
            Object.defineProperty(quickForms[quickForm], 'Visible', {
                get() {
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
                get() {
                    if (has(row, 'data.entity.getEntityName')) {
                        return row.data.entity.getEntityName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'EntityReference', {
                get() {
                    if (has(row, 'data.entity.getEntityReference')) {
                        return row.data.entity.getEntityReference();
                    }
                    return EMPTY_REFERENCE;
                }
            });
            Object.defineProperty(obj, 'EntityId', {
                get() {
                    if (has(row, 'data.entity.getId')) {
                        return row.data.entity.getId();
                    }
                    return EMPTY_GUID;
                }
            });
            Object.defineProperty(obj, 'PrimaryAttributeValue', {
                get() {
                    if (has(row, 'data.entity.getPrimaryAttributeValue')) {
                        return row.data.entity.getPrimaryAttributeValue();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'Columns', {
                get() {
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
                get() {
                    if (has(col, 'getName')) {
                        return col.getName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(obj, 'RequiredLevel', {
                get() {
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
                get() {
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
                get() {
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
                get() {
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
                get() {
                    if (has(gridControl, 'getEntityName')) {
                        return gridControl.getEntityName();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(grids[grid], 'FetchXml', {
                get() {
                    if (has(gridControl, 'getFetchXml')) {
                        return gridControl.getFetchXml();
                    }
                    return EMPTY_STRING;
                }
            });
            Object.defineProperty(grids[grid], 'GridType', {
                get() {
                    if (has(gridControl, 'getGridType')) {
                        return gridControl.getGridType();
                    }
                    return 2;
                }
            });
            Object.defineProperty(grids[grid], 'Relationship', {
                get() {
                    if (has(gridControl, 'getRelationship')) {
                        return gridControl.getRelationship();
                    }
                    return {};
                }
            });
            Object.defineProperty(grids[grid], 'ViewSelector', {
                get() {
                    var viewSelector = NULL;
                    if (has(gridControl, 'getViewSelector')) {
                        viewSelector = gridControl.getViewSelector();
                    }
                    var obj = {};
                    Object.defineProperty(obj, 'CurrentView', {
                        get() {
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
                        get() {
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
                get() {
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
                get() {
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
                get() {
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
            Object.defineProperty(grids[grid], 'Visible', {
                get() {
                    if (has(gridControl, 'getVisible')) {
                        return gridControl.getVisible();
                    }
                    return EMPTY_BOOL;
                },
                set: function (value) {
                    if (has(gridControl, 'setVisible')) {
                        gridControl.setVisible(value);
                    }
                }
            });
        }
        for (var grid in grids) {
            loadGrid(formContext, grids, grid);
        }
    }
    function loadUtility(defaultWebResourceName) {
        var utility = {};
        var getUtility = Xrm?.Utility;
        utility.CloseProgressIndicator = function () {
            getUtility.closeProgressIndicator();
        };
        utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
            getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback);
        };
        utility.EntityMainFormDescriptor = function (entityName, formId) {
            return getUtility.getEntityMainFormDescriptor(entityName, formId);
        };
        utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
            getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback);
        };
        utility.ResourceString = function (webResourceName, key) {
            return getUtility.getResourceString(webResourceName, key);
        };
        utility.Resource = function (key) {
            if (!isNullOrUndefined(defaultWebResourceName)) {
                return getUtility.getResourceString(defaultWebResourceName, key);
            }
            return EMPTY_STRING;
        };
        utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
            getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback);
        };
        utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
            getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback);
        };
        utility.RefreshParentGrid = function (lookupOptions) {
            getUtility.refreshParentGrid(lookupOptions);
        };
        utility.ShowProgressIndicator = function (message) {
            getUtility.showProgressIndicator(message);
        };
        Object.defineProperty(utility, 'LearningPathAttributeName', {
            get() { return getUtility.getLearningPathAttributeName(); }
        });
        Object.defineProperty(utility, 'PageContext', {
            get() { return getUtility.getPageContext(); }
        });
        var getGlobalContext = Xrm?.Utility?.getGlobalContext();
        utility.AdvancedConfigSetting = function (setting) {
            return getGlobalContext.getAdvancedConfigSetting(setting);
        };
        utility.CurrentAppName = function (successCallback, errorCallback) {
            getGlobalContext.getCurrentAppName().then(successCallback, errorCallback);
        };
        utility.CurrentAppProperties = function (successCallback, errorCallback) {
            getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback);
        };
        utility.WebResourceUrl = function (webResourceName) {
            return getGlobalContext.getWebResourceUrl(webResourceName);
        };
        utility.PrependOrgName = function (sPath) {
            return getGlobalContext.prependOrgName(sPath);
        };
        Object.defineProperty(utility, 'Client', {
            get() {
                var obj = {};
                var client = getGlobalContext?.client;
                Object.defineProperty(obj, 'ClientName', {
                    get() { return client.getClient(); }
                });
                Object.defineProperty(obj, 'ClientState', {
                    get() { return client.getClientState(); }
                });
                Object.defineProperty(obj, 'FormFactor', {
                    get() { return client.getFormFactor(); }
                });
                Object.defineProperty(obj, 'IsOffline', {
                    get() { return client.isOffline(); }
                });
                Object.defineProperty(obj, 'IsNetworkAvailable', {
                    get() { return client.isNetworkAvailable(); }
                });
                return obj;
            }
        });
        Object.defineProperty(utility, 'OrganizationSettings', {
            get() {
                var obj = {};
                var organizationSettings = getGlobalContext?.organizationSettings;
                Object.defineProperty(obj, 'Attributes', {
                    get() { return organizationSettings.attributes; }
                });
                Object.defineProperty(obj, 'BaseCurrencyId', {
                    get() { return organizationSettings.baseCurrencyId; }
                });
                Object.defineProperty(obj, 'BaseCurrency', {
                    get() {  return organizationSettings.baseCurrency; }
                });
                Object.defineProperty(obj, 'DefaultCountryCode', {
                    get() { return organizationSettings.defaultCountryCode; }
                });
                Object.defineProperty(obj, 'IsAutoSaveEnabled', {
                    get() { return organizationSettings.isAutoSaveEnabled; }
                });
                Object.defineProperty(obj, 'LanguageId', {
                    get() { return organizationSettings.languageId; }
                });
                Object.defineProperty(obj, 'OrganizationId', {
                    get() { return organizationSettings.organizationId; }
                });
                Object.defineProperty(obj, 'IsTrialOrganization', {
                    get() { return organizationSettings.isTrialOrganization; }
                });
                Object.defineProperty(obj, 'OrganizationExpiryDate', {
                    get() { return organizationSettings.organizationExpiryDate; }
                });
                Object.defineProperty(obj, 'UniqueName', {
                    get() { return organizationSettings.uniqueName; }
                });
                Object.defineProperty(obj, 'UseSkypeProtocol', {
                    get() { return organizationSettings.useSkypeProtocol; }
                });
                Object.defineProperty(obj, 'FullNameConventionCode', {
                    get() { return organizationSettings.fullNameConventionCode; }
                });
                return obj;
            }
        });
        Object.defineProperty(utility, 'UserSettings', {
            get() {
                var obj = {};
                var userSettings = getGlobalContext?.userSettings;
                Object.defineProperty(obj, 'DateFormattingInfo', {
                    get() { return userSettings.dateFormattingInfo; }
                });
                Object.defineProperty(obj, 'DefaultDashboardId', {
                    get() { return userSettings.defaultDashboardId; }
                });
                Object.defineProperty(obj, 'IsGuidedHelpEnabled', {
                    get() { return userSettings.isGuidedHelpEnabled; }
                });
                Object.defineProperty(obj, 'IsHighContrastEnabled', {
                    get() { return userSettings.isHighContrastEnabled; }
                });
                Object.defineProperty(obj, 'IsRTL', {
                    get() { return userSettings.isRTL; }
                });
                Object.defineProperty(obj, 'LanguageId', {
                    get() { return userSettings.languageId; }
                });
                Object.defineProperty(obj, 'Roles', {
                    get() { return userSettings.roles; }
                });
                Object.defineProperty(obj, 'SecurityRolePrivileges', {
                    get() { return userSettings.securityRolePrivileges; }
                });
                Object.defineProperty(obj, 'SecurityRoles', {
                    get() { return userSettings.securityRoles; }
                });
                Object.defineProperty(obj, 'TransactionCurrency', {
                    get() { return userSettings.transactionCurrency; }
                });
                Object.defineProperty(obj, 'TransactionCurrencyId', {
                    get() { return userSettings.transactionCurrencyId; }
                });
                Object.defineProperty(obj, 'UserId', {
                    get() { return userSettings.userId; }
                });
                Object.defineProperty(obj, 'UserName', {
                    get() { return userSettings.userName; }
                });
                Object.defineProperty(obj, 'TimeZoneOffsetMinutes', {
                    get() { return userSettings.getTimeZoneOffsetMinutes(); }
                });
                return obj;
            }
        });
        Object.defineProperty(utility, 'ClientUrl', {
            get() { return getGlobalContext.getClientUrl(); }
        });
        Object.defineProperty(utility, 'CurrentAppUrl', {
            get() { return getGlobalContext.getCurrentAppUrl(); }
        });
        Object.defineProperty(utility, 'Version', {
            get() { return getGlobalContext.getVersion(); }
        });
        Object.defineProperty(utility, 'IsOnPremises', {
            get() { return getGlobalContext.isOnPremises(); }
        });
        var getNavigation = Xrm?.Navigation;
        utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
            getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback);
        };
        utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
            getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback);
        };
        utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
            getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback);
        };
        utility.OpenFile = function (file, openFileOptions) {
            getNavigation.openFile(file, openFileOptions);
        };
        utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
            getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback);
        };
        utility.OpenUrl = function (url, openUrlOptions) {
            getNavigation.openUrl(url, openUrlOptions);
        };
        utility.OpenWebResource = function (webResourceName, windowOptions, data) {
            getNavigation.openWebResource(webResourceName, windowOptions, data);
        };
        utility.NavigateTo = function (pageInput, navigationOptions, successCallback, errorCallback) {
            getNavigation.navigateTo(pageInput, navigationOptions).then(successCallback, errorCallback);
        };
        var getPanel =  Xrm?.Panel;
        utility.LoadPanel = function (url, title) {
            getPanel.loadPanel(url, title);
        };
        var getEncoding = Xrm?.Encoding;
        utility.XmlAttributeEncode = function (arg) {
            return getEncoding.xmlAttributeEncode(arg);
        };
        utility.XmlEncode = function (arg) {
            return getEncoding.xmlEncode(arg);
        };
        utility.HtmlAttributeEncode = function (arg) {
            return getEncoding.htmlAttributeEncode(arg);
        };
        utility.HtmlDecode = function (arg) {
            return getEncoding.htmlDecode(arg);
        };
        utility.HtmlEncode = function (arg) {
            return getEncoding.htmlEncode(arg);
        };
        var getDevice = Xrm?.Device;
        utility.CaptureAudio = function (successCallback, errorCallback) {
            getDevice.captureAudio().then(successCallback, errorCallback);
        };
        utility.CaptureImage = function (imageOptions, successCallback, errorCallback) {
            getDevice.captureImage(imageOptions).then(successCallback, errorCallback);
        };
        utility.CaptureVideo = function (successCallback, errorCallback) {
            getDevice.captureVideo().then(successCallback, errorCallback);
        };
        utility.BarcodeValue = function (successCallback, errorCallback) {
            getDevice.getBarcodeValue().then(successCallback, errorCallback);
        };
        utility.CurrentPosition = function (successCallback, errorCallback) {
            getDevice.getCurrentPosition().then(successCallback, errorCallback);
        };
        utility.PickFile = function (pickFileOptions, successCallback, errorCallback) {
            getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback);
        };
        var getApp = Xrm?.App;
        utility.AddGlobalNotification = function (notification, successCallback, errorCallback) {
            getApp.addGlobalNotification(notification).then(successCallback, errorCallback);
        }
        utility.ClearGlobalNotification = function (uniqueId, successCallback, errorCallback) {
            getApp.clearGlobalNotification(uniqueId).then(successCallback, errorCallback);
        }
        return utility;
    }
    function loadExecutionContext(executionContext) {
        var obj = {};
        obj.IsInitialLoad = function () {
            return executionContext.getEventArgs().getDataLoadState() === 1;
        }
        obj.GetSharedVariable = function (key) {
            return executionContext.getSharedVariable(key);
        }
        obj.SetSharedVariable = function (key, value) {
            return executionContext.setSharedVariable(key, value);
        }
        obj.IsDefaultPrevented = function () {
            return executionContext.getEventArgs().isDefaultPrevented();
        }
        obj.SetPreventDefault = function () {
            executionContext.getEventArgs().preventDefault();
        }
        obj.SetPreventDefaultOnError = function () {
            executionContext.getEventArgs().preventDefaultOnError();
        }
        obj.DisableAsyncTimeout = function () {
            executionContext.getEventArgs().disableAsyncTimeout();
        }
        Object.defineProperty(obj, 'Depth', {
            get() { return executionContext.getDepth(); }
        });
        Object.defineProperty(obj, 'EventArgs', {
            get() { return executionContext.getEventArgs(); }
        });
        Object.defineProperty(obj, 'EventSource', {
            get() { return executionContext.getEventSource(); }
        });
        Object.defineProperty(obj, 'FormContext', {
            get() { return executionContext.getFormContext(); }
        });
        Object.defineProperty(obj, 'SaveMode', {
            get() { return executionContext.getEventArgs().getSaveMode(); }
        });
        Object.defineProperty(obj, 'EntityReference', {
            get() { return executionContext.getEventArgs().getEntityReference(); }
        });
        Object.defineProperty(obj, 'IsSaveSuccess', {
            get() { return executionContext.getEventArgs().getIsSaveSuccess(); }
        });
        Object.defineProperty(obj, 'SaveErrorInfo', {
            get() { return executionContext.getEventArgs().getSaveErrorInfo(); }
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
            get() { return Xrm.App.sidePanes.state;},
            set(value) { Xrm.App.sidePanes.state = value; }
        });
        return sidePanes;
    }
    function loadOthers(formContext, form, defaultWebResourceName) {
        form.SidePanes = loadSidePanes();
    }
    function loadFormDialog(executionContext, fields) {
        var formContext = executionContext.getFormContext();
        var form = {};
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            var attribute = formContext.data.attributes.get(field);
            var control = formContext.getControl(field);
            form[field] = {};
            devKit.LoadField(form[field], attribute, control);
        }
        form.Close = function () { formContext.ui.close(); };
        return form;
    }
    return {
        LoadForm: loadForm,
        LoadProcess: loadProcess,
        LoadFields: loadFields,
        LoadField: loadField,
        LoadTabs: loadTabs,
        LoadNavigations: loadNavigations,
        LoadQuickForms: loadQuickForms,
        LoadGrids: loadGrids,
        LoadUtility: loadUtility,
        LoadExecutionContext: loadExecutionContext,
        LoadOthers: loadOthers,
        LoadFormDialog: loadFormDialog
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

export { devKit, OptionSet };
'use strict';
var devKit = (function () {
    'use strict';

    function defineGetter(obj, prop, getter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            enumerable: true, // Optional: make it enumerable by default
            configurable: true // Optional: make it configurable by default
        });
    }

    function defineGetterSetter(obj, prop, getter, setter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            set: setter,
            enumerable: true, // Optional: make it enumerable by default
            configurable: true // Optional: make it configurable by default
        });
    }

    function loadForm(formContext) {
        var form = {};
        var contextData = formContext?.data;
        form.DataAddOnLoad = callback => {
            contextData?.addOnLoad(callback);
        };
        form.Refresh = (save, successCallback, errorCallback) => {
            contextData?.refresh(save)?.then(successCallback, errorCallback);
        };
        form.DataRemoveOnLoad = callback => {
            contextData?.removeOnLoad(callback);
        };
        form.Save = (saveOptions, successCallback, errorCallback) => {
            contextData?.save(saveOptions)?.then(successCallback, errorCallback);
        };
        defineGetter(form, 'DataIsDirty', () => contextData?.getIsDirty());
        defineGetter(form, 'DataIsValid', () => contextData?.isValid());
        var contextDataEntity = formContext?.data?.entity;
        form.AddOnSave = function (callback) {
            contextDataEntity?.addOnSave(callback);
        };
        form.AddOnPostSave = function (callback) {
            contextDataEntity?.addOnPostSave(callback);
        }
        form.RemoveOnSave = function (callback) {
            contextDataEntity?.removeOnSave(callback);
        };
        form.RemoveOnPostSave = function (callback) {
            contextDataEntity?.removeOnPostSave(callback);
        };
        defineGetter(form, 'Attributes', () => contextDataEntity?.attributes);
        defineGetter(form, 'DataXml', () => contextDataEntity?.getDataXml());
        defineGetter(form, 'EntityName', () => contextDataEntity?.getEntityName());
        defineGetter(form, 'EntityReference', () => contextDataEntity?.getEntityReference());
        defineGetter(form, 'EntityId', () => contextDataEntity?.getId());
        defineGetter(form, 'EntityIsDirty', () => contextDataEntity?.getIsDirty());
        defineGetter(form, 'PrimaryAttributeValue', () => contextDataEntity?.getPrimaryAttributeValue());
        defineGetter(form, 'EntityIsValid', () => contextDataEntity?.isValid());
        var contextUi = formContext?.ui;
        form.UiAddLoaded = callback => {
            contextUi?.addLoaded(callback);
        };
        form.UiAddOnLoad = callback => {
            contextUi?.addOnLoad(callback);
        };
        form.ClearFormNotification = uniqueId => {
            return contextUi?.clearFormNotification(uniqueId);
        };
        form.Close = () => {
            contextUi?.close();
        };
        form.RefreshRibbon = refreshAll => {
            contextUi?.refreshRibbon(refreshAll);
        };
        form.UiRemoveLoaded = callback => {
            contextUi?.removeLoaded(callback);
        };
        form.UiRemoveOnLoad = callback => {
            contextUi?.removeOnLoad(callback);
        };
        form.SetFormEntityName = arg => {
            contextUi?.setFormEntityName(arg);
        };
        form.SetFormNotification = (message, level, uniqueId) => {
            return contextUi?.setFormNotification(message, level, uniqueId);
        };
        defineGetter(form, 'Controls', () => contextUi?.controls);
        defineGetter(form, 'FormType', () => contextUi?.getFormType());
        defineGetter(form, 'ViewPortHeight', () => contextUi?.getViewPortHeight());
        defineGetter(form, 'ViewPortWidth', () => contextUi?.getViewPortWidth());
        var contextUiFormSelector = formContext?.ui?.formSelector;
        form.FormNavigateToFormId = formId => {
            for (var i = 0; i < contextUiFormSelector?.items?.getLength(); i++) {
                if (formId === contextUiFormSelector?.items?.get(i)?.getId()) {
                    contextUiFormSelector?.items?.get(i)?.navigate();
                }
            }
        };
        form.FormNavigateToFormLabel = formLabel => {
            for (var i = 0; i < contextUiFormSelector?.items?.getLength(); i++) {
                if (formLabel === contextUiFormSelector?.items?.get(i)?.getLabel()) {
                    contextUiFormSelector?.items?.get(i)?.navigate();
                }
            }
        };
        form.FormIsVisible = formId => {
            for (var i = 0; i < contextUiFormSelector?.items?.getLength(); i++) {
                if (formId === contextUiFormSelector?.items?.get(i)?.getId()) {
                    return contextUiFormSelector?.items?.get(i)?.getVisible();
                }
            }
        }
        form.FormSetVisible = (formId, value) => {
            for (var i = 0; i < contextUiFormSelector?.items?.getLength(); i++) {
                if (formId === contextUiFormSelector?.items?.get(i)?.getId()) {
                    contextUiFormSelector?.items?.get(i)?.setVisible(value);
                }
            }
        }
        defineGetter(form, 'FormId', () => contextUiFormSelector?.getCurrentItem()?.getId());
        defineGetter(form, 'FormLabel', () => contextUiFormSelector?.getCurrentItem()?.getLabel());
        return form;
    }
    function loadProcess(formContext) {
        var loadStep = function (step) {
            var obj = {};
            defineGetter(obj, 'Attribute', () => step?.getAttribute());
            defineGetter(obj, 'Name', () => step?.getName());
            defineGetter(obj, 'Required', () => step?.isRequired());
            defineGetter(obj, 'Progress', () => step?.getProgress());
            obj.SetProgress = (stepProgress, message) => {
                step?.setProgress(stepProgress, message);
            }
            return obj;
        }
        var loadStage = function (stage) {
            var obj = {};
            defineGetter(obj, 'Category', () => stage?.getCategory()?.getValue());
            defineGetter(obj, 'EntityName', () => stage?.getEntityName());
            defineGetter(obj, 'Id', () => stage?.getId());
            defineGetter(obj, 'Name', () => stage?.getName());
            defineGetter(obj, 'Status', () => stage?.getStatus());
            obj.AllowCreateNew = callback => {
                stage.getNavigationBehavior().allowCreateNew = callback;
            }
            Object.defineProperty(obj, 'Steps', {
                get() {
                    var obj = [];
                    var steps = stage?.getSteps();
                    for (var index = 0; index < steps?.length; index++) {
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
            defineGetter(obj, 'Id', () => process?.getId());
            defineGetter(obj, 'Name', () => process?.getName());
            defineGetter(obj, 'IsRendered', () => process?.isRendered());
            Object.defineProperty(obj, 'Stages', {
                get: () => {
                    var obj = {};
                    obj.getLength = () => {
                        return process?.getStages()?.getLength();
                    }
                    obj.get = index => {
                        var stage = process?.getStages()?.get(index);
                        return loadStage(stage);
                    }
                    obj.forEach = callback => {
                        var stages = process?.getStages();
                        for (var index = 0; index < stages?.getLength(); index++) {
                            var stage = stages?.get(index);
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
        process.AddOnPreProcessStatusChange = callback => {
            getProcess?.addOnPreProcessStatusChange(callback);
        };
        process.RemoveOnPreProcessStatusChange = callback => {
            getProcess?.removeOnPreProcessStatusChange(callback);
        };
        process.AddOnPreStageChange = callback => {
            getProcess?.addOnPreStageChange(callback);
        };
        process.RemoveOnPreStageChange = callback => {
            getProcess?.removeOnPreStageChange(callback);
        };
        process.AddOnProcessStatusChange = callback => {
            getProcess?.addOnProcessStatusChange(callback);
        };
        process.RemoveOnProcessStatusChange = callback => {
            getProcess?.removeOnProcessStatusChange(callback);
        };
        process.AddOnStageChange = callback => {
            getProcess?.addOnStageChange(callback);
        };
        process.RemoveOnStageChange = callback => {
            getProcess?.removeOnStageChange(callback);
        };
        process.AddOnStageSelected = callback => {
            getProcess?.addOnStageSelected(callback);
        };
        process.RemoveOnStageSelected = callback => {
            getProcess?.removeOnStageSelected(callback);
        };
        process.EnabledProcesses = callback => {
            getProcess?.getEnabledProcesses(enabledProcesses => {
                var processes = [];
                for (var processId in enabledProcesses) {
                    processes.push({ ProcessId: processId, ProcessName: enabledProcesses[processId] });
                }
                callback(processes);
            });
        };
        process.MoveNext = callback => {
            getProcess?.moveNext(callback);
        };
        process.MovePrevious = callback => {
            getProcess?.movePrevious(callback);
        };
        process.ProcessInstances = callback => {
            getProcess?.getProcessInstances(processInstances => {
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
        process.SetActiveStage = (stageId, callback) => {
            getProcess?.setActiveStage(stageId, callback);
        };
        process.SetActiveProcessInstance = (processInstanceId, callback) => {
            getProcess?.setActiveProcessInstance(processInstanceId, callback);
        };
        process.SetActiveProcess = (processId, callback) => {
            getProcess?.setActiveProcess(processId, callback);
        };
        process.Reflow = (updateUi, parentStage, nextStage) => {
            getProcessUi?.reflow(updateUi, parentStage, nextStage);
        }
        defineGetter(process, 'ActiveProcess', () => loadProcess(getProcess?.getActiveProcess()));
        defineGetter(process, 'SelectedStage', () => loadStage(getProcess?.getSelectedStage()));
        defineGetter(process, 'ActiveStage', () => loadStage(getProcess?.getActiveStage()));
        defineGetter(process, 'InstanceId', () => getProcess?.getInstanceId());
        defineGetter(process, 'InstanceName', () => getProcess?.getInstanceName());
        defineGetterSetter(process, 'Status', () => getProcess?.getStatus(), value => { getProcess?.setStatus(value); });
        defineGetterSetter(process, 'DisplayState', () => getProcessUi?.getDisplayState(), value => { getProcessUi?.setDisplayState(value); });
        defineGetterSetter(process, 'Visible', () => getProcessUi?.getVisible(), value => { getProcessUi?.setVisible(value); });
        Object.defineProperty(process, 'ActivePath', {
            get: () => {
                var obj = {};
                obj.getLength = () => { return getProcess?.getActivePath()?.getLength(); }
                obj.get = index => {
                    var stage = getProcess?.getActivePath()?.get(index);
                    return loadStage(stage);
                }
                obj.forEach = callback => {
                    var stages = getProcess?.getActivePath();
                    for (var index = 0; index < stages?.getLength(); index++) {
                        var stage = stages?.get(index);
                        callback(loadStage(stage), index);
                    }
                }
                return obj;
            }
        });
        return process;
    }
    function loadField(formContext, field, attribute, control) {
        field.ContentWindow = (successCallback, errorCallback) => {
            control?.getContentWindow()?.then(successCallback, errorCallback);
        }
        field.Option = value => {
            return attribute?.getOption(value);
        };
        field.RemoveOnChange = callback => {
            attribute?.removeOnChange(callback);
        };
        field.AddCustomFilter = (filter, entityLogicaName) => {
            control?.addCustomFilter(filter, entityLogicaName);
        };
        field.AddCustomView = (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) => {
            control?.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
        };
        field.AddPostSearch = callback => {
            control?.addOnPostSearch(callback);
        };
        field.AddOnOutputChange = callback => {
            control?.addOnOutputChange(callback);
        };
        field.AddResultOpened = callback => {
            control?.addOnResultOpened(callback);
        };
        field.AddSelection = callback => {
            control?.addOnSelection(callback);
        };
        field.AddPreSearch = callback => {
            control?.addPreSearch(callback);
        };
        field.ClearNotification = uniqueId => {
            return control?.clearNotification(uniqueId);
        };
        field.ClearOptions = () => {
            control?.clearOptions();
        };
        field.AddOnChange = callback => {
            attribute?.addOnChange(callback);
        };
        field.FireOnChange = () => {
            attribute?.fireOnChange();
        };
        field.OpenSearchResult = (resultNumber, mode) => {
            return control?.openSearchResult(resultNumber, mode);
        };
        field.Refresh = () => {
            control?.refresh();
        };
        field.RemovePostSearch = callback => {
            control?.removeOnPostSearch(callback);
        };
        field.RemoveOnOutputChange = callback => {
            control?.removeOnOutputChange(callback);
        };
        field.RemoveResultOpened = callback => {
            control?.removeOnResultOpened(callback);
        };
        field.RemoveSelection = callback => {
            control?.removeOnSelection(callback);
        };
        field.RemoveOption = value => {
            control?.removeOption(value);
        };
        field.RemovePreSearch = callback => {
            control?.removePreSearch(callback);
        };
        field.Focus = () => {
            control?.setFocus();
        };
        field.SetNotification = (message, uniqueId) => {
            return control?.setNotification(message, uniqueId);
        };
        field.AddOption = (text, value, index) => {
            control?.addOption({ text: text, value: value }, index);
        };
        field.AddNotification = (message, notificationLevel, uniqueId, callback) => {
            var actions = { message: message, actions: [callback] };
            var notification = { messages: [message], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
            return control?.addNotification(notification);
        };
        field.AddLookupTagClick = callback => {
            control?.addOnLookupTagClick(callback);
        };
        field.RemoveLookupTagClick = callback => {
            control?.removeOnLookupTagClick(callback);
        };
        field.SetIsValid = (valid, message) => {
            attribute?.setIsValid(valid, message);
        };
        defineGetter(field, 'AttributeType', () => attribute?.getAttributeType());
        defineGetter(field, 'Format', () => attribute?.getFormat());
        defineGetter(field, 'InitialValue', () => attribute?.getInitialValue());
        defineGetter(field, 'IsDirty', () => attribute?.getIsDirty());
        defineGetter(field, 'IsPartyList', () => attribute?.getIsPartyList());
        defineGetter(field, 'Max', () => attribute?.getMax());
        defineGetter(field, 'MaxLength', () => attribute?.getMaxLength());
        defineGetter(field, 'Min', () => attribute?.getMin());
        defineGetter(field, 'AttributeName', () => attribute?.getName());
        defineGetter(field, 'Options', () => attribute?.getOptions());
        defineGetter(field, 'ControlOptions', () => control?.getOptions());
        defineGetter(field, 'AttributeParent', () => attribute?.getParent());
        defineGetter(field, 'SelectedOption', () => attribute?.getSelectedOption());
        defineGetter(field, 'Text', () => attribute?.getText());
        defineGetter(field, 'UserPrivilege', () => attribute?.getUserPrivilege());
        defineGetter(field, 'IsValid', () => attribute?.isValid());
        defineGetter(field, 'ControlType', () => control?.getControlType());
        defineGetter(field, 'InitialUrl', () => control?.getInitialUrl());
        defineGetter(field, 'ControlName', () => control?.getName());
        defineGetter(field, 'Object', () => control?.getObject());
        defineGetter(field, 'ControlParent', () => control?.getParent());
        defineGetter(field, 'State', () => control?.getState());
        defineGetter(field, 'TotalResultCount', () => control?.getTotalResultCount());
        defineGetter(field, 'SelectedResults', () => control?.getSelectedResults());
        defineGetter(field, 'Attribute', () => control?.getAttribute());
        defineGetterSetter(field, 'Precision', () => attribute?.getPrecision(), value => { attribute?.setPrecision(value); });
        defineGetterSetter(field, 'RequiredLevel', () => attribute?.getRequiredLevel(), value => { attribute?.setRequiredLevel(value); });
        defineGetterSetter(field, 'SubmitMode', () => attribute?.getSubmitMode(), value => { attribute?.setSubmitMode(value); });
        defineGetterSetter(field, 'Value', () => attribute?.getValue(), value => {
            if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
            attribute?.setValue(value);
        });
        defineGetterSetter(field, 'Data', () => control?.getData(), value => { control?.setData(value); });
        defineGetterSetter(field, 'DefaultView', () => control?.getDefaultView(), value => { control?.setDefaultView(value); });
        defineGetterSetter(field, 'Disabled', () => control?.getDisabled(), value => {
            if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
            control?.setDisabled(value);
        });
        defineGetterSetter(field, 'EntityTypes', () => control?.getEntityTypes(), value => { control?.setEntityTypes(value); });
        defineGetterSetter(field, 'Label', () => control?.getLabel(), value => { control?.setLabel(value); });
        defineGetterSetter(field, 'SearchQuery', () => control?.getSearchQuery(), value => { control?.setSearchQuery(value); });
        defineGetterSetter(field, 'ShowTime', () => control?.getShowTime(), value => { control?.setShowTime(value); });
        defineGetterSetter(field, 'Src', () => control?.getSrc(), value => { control?.setSrc(value); });
        defineGetterSetter(field, 'Visible', () => control?.getVisible(), value => { control?.setVisible(value); });
    }
    function loadFields(formContext, body, type) {
        for (var field in body) {
            var logicalName = (() => {
                if (type === undefined) return field?.toLowerCase();
                return (type + field)?.toLowerCase();
            })();
            var control = formContext?.getControl(logicalName) ?? formContext?.getControl(field);
            var attribute = (() => {
                var attr = formContext?.getAttribute(logicalName);
                if (attr) return attr;
                if (control?.getAttribute) {
                    attr = control?.getAttribute();
                    if (attr) return attr;
                }
                return null;
            })();
            loadField(formContext, body[field], attribute, control);
        }
        if (type === "header_") {
            var getHeaderSection = formContext?.ui?.headerSection;
            defineGetterSetter(body, 'BodyVisible', () => getHeaderSection?.getBodyVisible(), value => { getHeaderSection?.setBodyVisible(value); });
            defineGetterSetter(body, 'CommandBarVisible', () => getHeaderSection?.getCommandBarVisible(), value => { getHeaderSection?.setCommandBarVisible(value); });
            defineGetterSetter(body, 'TabNavigatorVisible', () => getHeaderSection?.getTabNavigatorVisible(), value => { getHeaderSection?.setTabNavigatorVisible(value); });
        }
        return body;
    }
    function loadTabs(formContext, tabs) {
        var loadSection = function (formContext, tab, sections, section) {
            var tabObject = formContext?.ui?.tabs?.get(tab);
            var sectionObject = tabObject?.sections?.get(section);
            Object.defineProperty(sections[section], 'Name', {
                get() { return sectionObject?.getName(); }
            });
            Object.defineProperty(sections[section], 'Parent', {
                get() { return sectionObject?.getParent(); }
            });
            defineGetterSetter(sections[section], 'Label', () => sectionObject?.getLabel(), value => { sectionObject?.setLabel(value); });
            Object.defineProperty(sections[section], 'Visible', {
                get() { return sectionObject?.getVisible(); },
                set(value) { sectionObject?.setVisible(value); } // Assuming this was the intended logic for the placeholder {…}
            });
        }
        var loadTab = function (formContext, tabs, tab) {
            var tabObject = formContext?.ui?.tabs?.get(tab);
            tabs[tab].AddTabStateChange = callback => {
                tabObject?.addTabStateChange(callback);
            };
            tabs[tab].Focus = () => {
                tabObject?.setFocus();
            };
            tabs[tab].RemoveTabStateChange = callback => {
                tabObject?.removeTabStateChange(callback);
            };
            Object.defineProperty(tabs[tab], 'Name', {
                get() { return tabObject?.getName(); }
            });
            Object.defineProperty(tabs[tab], 'Parent', {
                get() { return tabObject?.getParent(); }
            });
            Object.defineProperty(tabs[tab], 'DisplayState', {
                get() { return tabObject?.getDisplayState(); },
                set(value) { tabObject?.setDisplayState(value); }
            });
            Object.defineProperty(tabs[tab], 'ContentType', {
                get() { return tabObject?.getContentType(); },
                set(value) { tabObject?.setContentType(value); }
            });
            Object.defineProperty(tabs[tab], 'Label', {
                get() { return tabObject?.getLabel(); },
                set(value) { tabObject?.setLabel(value); }
            });
            Object.defineProperty(tabs[tab], 'Visible', {
                get() { return tabObject?.getVisible(); },
                set(value) { tabObject?.setVisible(value); }
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
            var navigationItem = null;
            for (var i = 0; i < formContext?.ui?.navigation?.items?.getLength(); i++) {
                if (navigation === formContext?.ui?.navigation?.items?.get(i)?.getId()) { navigationItem = formContext?.ui?.navigation?.items?.get(i); break; }
            }
            navigations[navigation].Focus = () => {
                navigationItem?.setFocus();
            };
            Object.defineProperty(navigations[navigation], 'Id', {
                get() { return navigationItem?.getId(); }
            });
            Object.defineProperty(navigations[navigation], 'Label', {
                get() { return navigationItem?.getLabel(); },
                set(value) { navigationItem?.setLabel(value); }
            });
            Object.defineProperty(navigations[navigation], 'Visible', {
                get() { return navigationItem?.getVisible(); },
                set(value) { navigationItem?.setVisible(value); }
            });
        }
        for (var navigation in navigations) {
            loadNavigation(formContext, navigations, navigation);
        }
    }
    function loadQuickForms(formContext, quickForms) {
        var loadQuickForm = function (formContext, quickForms, quickForm) {
            var fields = [];
            for (var field in quickForms[quickForm]) {
                if (field === "Body") continue;
                if (field === "Controls") continue;
                if (field === "IsLoaded") continue;
                if (field === "Refresh") continue;
                if (field === "Focus") continue;
                if (field === "ControlType") continue;
                if (field === "Disabled") continue;
                if (field === "Label") continue;
                if (field === "ControlName") continue;
                if (field === "ControlParent") continue;
                if (field === "Visible") continue;
                fields.push(field);
            }
            var quick = formContext?.ui?.quickForms?.get(quickForm);
            Object.defineProperty(quickForms[quickForm], 'Body', {
                get() { return loadFormDialog(quick, fields); }
            });
            quickForms[quickForm].Controls = arg => {
                return quick?.getControl(arg);
            };
            quickForms[quickForm].IsLoaded = () => {
                return quick?.isLoaded();
            };
            quickForms[quickForm].Refresh = () => {
                quick?.refresh();
            };
            quickForms[quickForm].Focus = () => {
                quick?.setFocus();
            };
            Object.defineProperty(quickForms[quickForm], 'ControlType', {
                get() { return quick?.getControlType(); }
            });
            Object.defineProperty(quickForms[quickForm], 'Disabled', {
                get() { return quick?.getDisabled(); },
                set(value) { quick?.setDisabled(value); }
            });
            Object.defineProperty(quickForms[quickForm], 'Label', {
                get() { return quick?.getLabel(); },
                set(value) { quick?.setLabel(value); }
            });
            Object.defineProperty(quickForms[quickForm], 'ControlName', {
                get() { return quick?.getName(); }
            });
            Object.defineProperty(quickForms[quickForm], 'ControlParent', {
                get() { return quick?.getParent(); }
            });
            Object.defineProperty(quickForms[quickForm], 'Visible', {
                get() { return quick?.getVisible(); },
                set(value) { quick?.setVisible(value); }
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
                get() { return row?.data?.entity?.getEntityName(); }
            });
            Object.defineProperty(obj, 'EntityReference', {
                get() { return row?.data?.entity?.getEntityReference(); }
            });
            Object.defineProperty(obj, 'EntityId', {
                get() { return row?.data?.entity?.getId(); }
            });
            Object.defineProperty(obj, 'PrimaryAttributeValue', {
                get() { return row?.data?.entity?.getPrimaryAttributeValue(); }
            });
            Object.defineProperty(obj, 'Columns', {
                get() {
                    var obj = {};
                    obj.getLength = function () {
                        return row?.data?.entity?.attributes?.getLength();
                    }
                    obj.get = function (index) {
                        var column = row?.data?.entity?.attributes?.get(index);
                        return loadGridColumn(column);
                    }
                    obj.forEach = function (callback) {
                        var columns = row?.data?.entity?.attributes;
                        for (var index = 0; index < columns?.getLength(); index++) {
                            var column = columns?.get(index);
                            callback(loadGridColumn(column), index);
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
                return col?.controls?.get(0)?.setNotification(message, uniqueId);
            };
            obj.ClearNotification = function (uniqueId) {
                return col?.controls?.get(0)?.clearNotification(uniqueId);
            };
            Object.defineProperty(obj, 'Name', {
                get() { return col?.getName(); }
            });
            defineGetterSetter(obj, 'RequiredLevel', () => col?.getRequiredLevel(), value => { col?.setRequiredLevel(value); });
            defineGetterSetter(obj, 'Value', () => col?.getValue(), value => { col?.setValue(value); });
            defineGetterSetter(obj, 'Disabled', () => col?.controls?.get(0)?.getDisabled(), value => { col?.controls?.get(0)?.setDisabled(value); });
            Object.defineProperty(obj, 'Label', { get() { return col?.controls?.get(0)?.getLabel(); } });
            return obj;
        }
        var loadGrid = function (formContext, grids, grid) {
            var gridControl = formContext?.getControl(grid);
            grids[grid].AddOnLoad = callback => {
                gridControl?.addOnLoad(callback);
            };
            grids[grid].RemoveOnLoad = callback => {
                gridControl?.removeOnLoad(callback);
            };
            grids[grid].Url = client => {
                return gridControl?.getUrl(client);
            };
            grids[grid].Refresh = () => {
                gridControl?.refresh();
            };
            grids[grid].RefreshRibbon = () => {
                gridControl?.refreshRibbon();
            };
            grids[grid].OpenRelatedGrid = () => {
                gridControl?.openRelatedGrid();
            };
            Object.defineProperty(grids[grid], 'EntityName', {
                get() { return gridControl?.getEntityName(); }
            });
            Object.defineProperty(grids[grid], 'FetchXml', {
                get() { return gridControl?.getFetchXml(); }
            });
            Object.defineProperty(grids[grid], 'GridType', {
                get() { return gridControl?.getGridType(); }
            });
            Object.defineProperty(grids[grid], 'Relationship', {
                get() { return gridControl?.getRelationship(); }
            });
            Object.defineProperty(grids[grid], 'ViewSelector', {
                get() {
                    var viewSelector = gridControl?.getViewSelector();
                    var obj = {};
                    Object.defineProperty(obj, 'CurrentView', {
                        get() { return viewSelector?.getCurrentView(); },
                        set(value) { viewSelector?.setCurrentView(value); }
                    });
                    Object.defineProperty(obj, 'Visible', {
                        get() { return viewSelector?.isVisible(); },
                    });
                    return obj;
                }
            });
            Object.defineProperty(grids[grid], 'Rows', {
                get() {
                    var obj = {};
                    var getGrid = formContext?.getControl(grid)?.getGrid();
                    obj.getLength = function () {
                        return getGrid?.getRows()?.getLength();
                    }
                    obj.get = function (index) {
                        return loadGridRow(getGrid?.getRows()?.get(index));
                    }
                    obj.forEach = function (callback) {
                        var rows = getGrid?.getRows();
                        for (var index = 0; index < rows?.getLength(); index++) {
                            var row = rows?.get(index);
                            callback(loadGridRow(row), index);
                        }
                    }
                    return obj;
                }
            });
            Object.defineProperty(grids[grid], 'SelectedRows', {
                get() {
                    var obj = {};
                    var getGrid = formContext?.getControl(grid)?.getGrid();
                    obj.getLength = () => { return getGrid?.getSelectedRows()?.getLength(); }
                    obj.get = index => {
                        var row = getGrid?.getSelectedRows()?.get(index)?.getData();
                        return loadGridRow(row);
                    }
                    obj.forEach = callback => {
                        var rows = getGrid?.getSelectedRows();
                        for (var index = 0; index < rows?.getLength(); index++) {
                            var row = rows?.get(index)?.getData();
                            callback(loadGridRow(row), index);
                        }
                    }
                    return obj;
                }
            });
            Object.defineProperty(grids[grid], 'TotalRecordCount', {
                get() { return gridControl?.getGrid()?.getTotalRecordCount(); }
            });
            Object.defineProperty(grids[grid], 'Visible', {
                get() { return gridControl?.getVisible(); },
                set(value) { gridControl?.setVisible(value); }
            });
        }
        for (var grid in grids) {
            loadGrid(formContext, grids, grid);
        }
    }
    function loadUtility(defaultWebResourceName) {
        var utility = {};
        var getUtility = Xrm?.Utility;
        utility.CloseProgressIndicator = () => {
            getUtility?.closeProgressIndicator();
        };
        utility.AllowedStatusTransitions = (entityName, stateCode, successCallback, errorCallback) => {
            getUtility?.getAllowedStatusTransitions(entityName, stateCode)?.then(successCallback, errorCallback);
        };
        utility.EntityMainFormDescriptor = (entityName, formId) => {
            return getUtility?.getEntityMainFormDescriptor(entityName, formId);
        };
        utility.EntityMetadata = (entityName, attributes, successCallback, errorCallback) => {
            getUtility?.getEntityMetadata(entityName, attributes)?.then(successCallback, errorCallback);
        };
        utility.ResourceString = (webResourceName, key) => {
            return getUtility?.getResourceString(webResourceName, key);
        };
        utility.Resource = key => {
            return getUtility?.getResourceString(defaultWebResourceName, key);
        };
        utility.InvokeProcessAction = (name, parameters, successCallback, errorCallback) => {
            getUtility?.invokeProcessAction(name, parameters)?.then(successCallback, errorCallback);
        };
        utility.LookupObjects = (lookupOptions, successCallback, errorCallback) => {
            getUtility?.lookupObjects(lookupOptions)?.then(successCallback, errorCallback);
        };
        utility.RefreshParentGrid = lookupOptions => {
            getUtility?.refreshParentGrid(lookupOptions);
        };
        utility.ShowProgressIndicator = message => {
            getUtility?.showProgressIndicator(message);
        };
        Object.defineProperty(utility, 'LearningPathAttributeName', {
            get() { return getUtility?.getLearningPathAttributeName(); }
        });
        Object.defineProperty(utility, 'PageContext', {
            get() { return getUtility?.getPageContext(); }
        });
        var getGlobalContext = Xrm?.Utility?.getGlobalContext();
        utility.AdvancedConfigSetting = setting => {
            return getGlobalContext?.getAdvancedConfigSetting(setting);
        };
        utility.CurrentAppName = (successCallback, errorCallback) => {
            getGlobalContext?.getCurrentAppName()?.then(successCallback, errorCallback);
        };
        utility.CurrentAppProperties = (successCallback, errorCallback) => {
            getGlobalContext?.getCurrentAppProperties()?.then(successCallback, errorCallback);
        };
        utility.WebResourceUrl = webResourceName => {
            return getGlobalContext?.getWebResourceUrl(webResourceName);
        };
        utility.PrependOrgName = sPath => {
            return getGlobalContext?.prependOrgName(sPath);
        };
        Object.defineProperty(utility, 'Client', {
            get() {
                var obj = {};
                var client = getGlobalContext?.client;
                Object.defineProperty(obj, 'ClientName', {
                    get() { return client?.getClient(); }
                });
                Object.defineProperty(obj, 'ClientState', {
                    get() { return client?.getClientState(); }
                });
                Object.defineProperty(obj, 'FormFactor', {
                    get() { return client?.getFormFactor(); }
                });
                Object.defineProperty(obj, 'IsOffline', {
                    get() { return client?.isOffline(); }
                });
                Object.defineProperty(obj, 'IsNetworkAvailable', {
                    get() { return client?.isNetworkAvailable(); }
                });
                return obj;
            }
        });
        Object.defineProperty(utility, 'OrganizationSettings', {
            get() {
                var obj = {};
                var organizationSettings = getGlobalContext?.organizationSettings;
                Object.defineProperty(obj, 'Attributes', {
                    get() { return organizationSettings?.attributes; }
                });
                Object.defineProperty(obj, 'BaseCurrencyId', {
                    get() { return organizationSettings?.baseCurrencyId; }
                });
                Object.defineProperty(obj, 'BaseCurrency', {
                    get() { return organizationSettings?.baseCurrency; }
                });
                Object.defineProperty(obj, 'DefaultCountryCode', {
                    get() { return organizationSettings?.defaultCountryCode; }
                });
                Object.defineProperty(obj, 'IsAutoSaveEnabled', {
                    get() { return organizationSettings?.isAutoSaveEnabled; }
                });
                Object.defineProperty(obj, 'LanguageId', {
                    get() { return organizationSettings?.languageId; }
                });
                Object.defineProperty(obj, 'OrganizationId', {
                    get() { return organizationSettings?.organizationId; }
                });
                Object.defineProperty(obj, 'IsTrialOrganization', {
                    get() { return organizationSettings?.isTrialOrganization; }
                });
                Object.defineProperty(obj, 'OrganizationExpiryDate', {
                    get() { return organizationSettings?.organizationExpiryDate; }
                });
                Object.defineProperty(obj, 'UniqueName', {
                    get() { return organizationSettings?.uniqueName; }
                });
                Object.defineProperty(obj, 'UseSkypeProtocol', {
                    get() { return organizationSettings?.useSkypeProtocol; }
                });
                Object.defineProperty(obj, 'FullNameConventionCode', {
                    get() { return organizationSettings?.fullNameConventionCode; }
                });
                return obj;
            }
        });
        Object.defineProperty(utility, 'UserSettings', {
            get() {
                var obj = {};
                var userSettings = getGlobalContext?.userSettings;
                Object.defineProperty(obj, 'DateFormattingInfo', {
                    get() { return userSettings?.dateFormattingInfo; }
                });
                Object.defineProperty(obj, 'DefaultDashboardId', {
                    get() { return userSettings?.defaultDashboardId; }
                });
                Object.defineProperty(obj, 'IsGuidedHelpEnabled', {
                    get() { return userSettings?.isGuidedHelpEnabled; }
                });
                Object.defineProperty(obj, 'IsHighContrastEnabled', {
                    get() { return userSettings?.isHighContrastEnabled; }
                });
                Object.defineProperty(obj, 'IsRTL', {
                    get() { return userSettings?.isRTL; }
                });
                Object.defineProperty(obj, 'LanguageId', {
                    get() { return userSettings?.languageId; }
                });
                Object.defineProperty(obj, 'Roles', {
                    get() { return userSettings?.roles; }
                });
                Object.defineProperty(obj, 'SecurityRolePrivileges', {
                    get() { return userSettings?.securityRolePrivileges; }
                });
                Object.defineProperty(obj, 'SecurityRoles', {
                    get() { return userSettings?.securityRoles; }
                });
                Object.defineProperty(obj, 'TransactionCurrency', {
                    get() { return userSettings?.transactionCurrency; }
                });
                Object.defineProperty(obj, 'TransactionCurrencyId', {
                    get() { return userSettings?.transactionCurrencyId; }
                });
                Object.defineProperty(obj, 'UserId', {
                    get() { return userSettings?.userId; }
                });
                Object.defineProperty(obj, 'UserName', {
                    get() { return userSettings?.userName; }
                });
                Object.defineProperty(obj, 'TimeZoneOffsetMinutes', {
                    get() { return userSettings?.getTimeZoneOffsetMinutes(); }
                });
                return obj;
            }
        });
        Object.defineProperty(utility, 'ClientUrl', {
            get() { return getGlobalContext?.getClientUrl(); }
        });
        Object.defineProperty(utility, 'CurrentAppUrl', {
            get() { return getGlobalContext?.getCurrentAppUrl(); }
        });
        Object.defineProperty(utility, 'Version', {
            get() { return getGlobalContext?.getVersion(); }
        });
        Object.defineProperty(utility, 'IsOnPremises', {
            get() { return getGlobalContext?.isOnPremises(); }
        });
        var getNavigation = Xrm?.Navigation;
        utility.OpenAlertDialog = (alertStrings, alertOptions, closeCallback, errorCallback) => {
            getNavigation?.openAlertDialog(alertStrings, alertOptions)?.then(closeCallback, errorCallback);
        };
        utility.OpenConfirmDialog = (confirmStrings, confirmOptions, successCallback, errorCallback) => {
            getNavigation?.openConfirmDialog(confirmStrings, confirmOptions)?.then(successCallback, errorCallback);
        };
        utility.OpenErrorDialog = (errorOptions, successCallback, errorCallback) => {
            getNavigation?.openErrorDialog(errorOptions)?.then(successCallback, errorCallback);
        };
        utility.OpenFile = (file, openFileOptions) => {
            getNavigation?.openFile(file, openFileOptions);
        };
        utility.OpenForm = (entityFormOptions, formParameters, successCallback, errorCallback) => {
            getNavigation?.openForm(entityFormOptions, formParameters)?.then(successCallback, errorCallback);
        };
        utility.OpenUrl = (url, openUrlOptions) => {
            getNavigation?.openUrl(url, openUrlOptions);
        };
        utility.OpenWebResource = (webResourceName, windowOptions, data) => {
            getNavigation?.openWebResource(webResourceName, windowOptions, data);
        };
        utility.NavigateTo = (pageInput, navigationOptions, successCallback, errorCallback) => {
            getNavigation?.navigateTo(pageInput, navigationOptions)?.then(successCallback, errorCallback);
        };
        var getPanel = Xrm?.Panel;
        utility.LoadPanel = (url, title) => {
            getPanel?.loadPanel(url, title);
        };
        var getEncoding = Xrm?.Encoding;
        utility.XmlAttributeEncode = arg => {
            return getEncoding?.xmlAttributeEncode(arg);
        };
        utility.XmlEncode = arg => {
            return getEncoding?.xmlEncode(arg);
        };
        utility.HtmlAttributeEncode = arg => {
            return getEncoding?.htmlAttributeEncode(arg);
        };
        utility.HtmlDecode = arg => {
            return getEncoding?.htmlDecode(arg);
        };
        utility.HtmlEncode = arg => {
            return getEncoding?.htmlEncode(arg);
        };
        var getDevice = Xrm?.Device;
        utility.CaptureAudio = (successCallback, errorCallback) => {
            getDevice?.captureAudio()?.then(successCallback, errorCallback);
        };
        utility.CaptureImage = (imageOptions, successCallback, errorCallback) => {
            getDevice?.captureImage(imageOptions)?.then(successCallback, errorCallback);
        };
        utility.CaptureVideo = (successCallback, errorCallback) => {
            getDevice?.captureVideo()?.then(successCallback, errorCallback);
        };
        utility.BarcodeValue = (successCallback, errorCallback) => {
            getDevice?.getBarcodeValue()?.then(successCallback, errorCallback);
        };
        utility.CurrentPosition = (successCallback, errorCallback) => {
            getDevice?.getCurrentPosition()?.then(successCallback, errorCallback);
        };
        utility.PickFile = (pickFileOptions, successCallback, errorCallback) => {
            getDevice?.pickFile(pickFileOptions)?.then(successCallback, errorCallback);
        };
        var getApp = Xrm?.App;
        utility.AddGlobalNotification = (notification, successCallback, errorCallback) => {
            getApp?.addGlobalNotification(notification)?.then(successCallback, errorCallback);
        }
        utility.ClearGlobalNotification = (uniqueId, successCallback, errorCallback) => {
            getApp?.clearGlobalNotification(uniqueId)?.then(successCallback, errorCallback);
        }
        return utility;
    }
    function loadExecutionContext(executionContext) {
        var obj = {};
        obj.IsInitialLoad = () => {
            return executionContext?.getEventArgs()?.getDataLoadState() === 1;
        }
        obj.GetSharedVariable = key => {
            return executionContext?.getSharedVariable(key);
        }
        obj.SetSharedVariable = (key, value) => {
            return executionContext?.setSharedVariable(key, value);
        }
        obj.IsDefaultPrevented = () => {
            return executionContext?.getEventArgs()?.isDefaultPrevented();
        }
        obj.SetPreventDefault = () => {
            executionContext?.getEventArgs()?.preventDefault();
        }
        obj.SetPreventDefaultOnError = () => {
            executionContext?.getEventArgs()?.preventDefaultOnError();
        }
        obj.DisableAsyncTimeout = () => {
            executionContext?.getEventArgs()?.disableAsyncTimeout();
        }
        Object.defineProperty(obj, 'Depth', {
            get() { return executionContext?.getDepth(); }
        });
        Object.defineProperty(obj, 'EventArgs', {
            get() { return executionContext?.getEventArgs(); }
        });
        Object.defineProperty(obj, 'EventSource', {
            get() { return executionContext?.getEventSource(); }
        });
        Object.defineProperty(obj, 'FormContext', {
            get() { return executionContext?.getFormContext(); }
        });
        Object.defineProperty(obj, 'SaveMode', {
            get() { return executionContext?.getEventArgs()?.getSaveMode(); }
        });
        Object.defineProperty(obj, 'EntityReference', {
            get() { return executionContext?.getEventArgs()?.getEntityReference(); }
        });
        Object.defineProperty(obj, 'IsSaveSuccess', {
            get() { return executionContext?.getEventArgs()?.getIsSaveSuccess(); }
        });
        Object.defineProperty(obj, 'SaveErrorInfo', {
            get() { return executionContext?.getEventArgs()?.getSaveErrorInfo(); }
        });
        return obj;
    }
    function loadSidePanes() {
        var sidePanes = {};
        sidePanes.Create = (paneOptions, successCallback) => {
            Xrm?.App?.sidePanes?.createPane(paneOptions)?.then(successCallback);
        }
        sidePanes.Get = paneId => {
            return Xrm?.App?.sidePanes?.getPane(paneId);
        }
        sidePanes.GetSelected = () => {
            return Xrm?.App?.sidePanes?.getSelectedPane();
        }
        sidePanes.GetAll = () => {
            return Xrm?.App?.sidePanes?.getAllPanes();
        }
        Object.defineProperty(sidePanes, 'DisplayState', {
            get() { return Xrm?.App?.sidePanes?.state; },
            set(value) { Xrm.App.sidePanes.state = value; }
        });
        return sidePanes;
    }
    function loadOthers(formContext, form, defaultWebResourceName) {
        form.SidePanes = loadSidePanes();
    }
    function loadFormDialog(formContext, fields) {
        var form = {};
        for (var i = 0; i < fields?.length; i++) {
            var field = fields[i];
            var attribute = formContext?.data?.entity?.attributes?.get(field);
            var control = formContext?.getControl(field);
            form[field] = {};
            devKit.LoadField(formContext, form[field], attribute, control);
        }
        form.Close = () => { formContext?.ui?.close(); };
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
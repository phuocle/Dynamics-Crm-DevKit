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

    function loadForm(formContext) {
        var form = {};
        var contextData = formContext?.data;
        form.DataAddOnLoad = function (callback) {
            contextData?.addOnLoad(callback);
        };
        form.Refresh = function (save, successCallback, errorCallback) {
            contextData?.refresh(save)?.then(successCallback, errorCallback);
        };
        form.DataRemoveOnLoad = function (callback) {
            contextData?.removeOnLoad(callback);
        };
        form.Save = function (saveOptions, successCallback, errorCallback) {
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
        form.UiAddLoaded = function (callback) {
            contextUi?.addLoaded(callback);
        };
        form.UiAddOnLoad = function (callback) {
            contextUi?.addOnLoad(callback);
        };
        form.ClearFormNotification = function (uniqueId) {
            return contextUi?.clearFormNotification(uniqueId);
        };
        form.Close = function () {
            contextUi?.close();
        };
        form.RefreshRibbon = function (refreshAll) {
            contextUi?.refreshRibbon(refreshAll);
        };
        form.UiRemoveLoaded = function (callback) {
            contextUi?.removeLoaded(callback);
        };
        form.UiRemoveOnLoad = function (callback) {
            contextUi?.removeOnLoad(callback);
        };
        form.SetFormEntityName = function (arg) {
            contextUi?.setFormEntityName(arg);
        };
        form.SetFormNotification = function (message, level, uniqueId) {
            return contextUi?.setFormNotification(message, level, uniqueId);
        };
        defineGetter(form, 'Controls', () => contextUi?.controls);
        defineGetter(form, 'FormType', () => contextUi?.getFormType());
        defineGetter(form, 'ViewPortHeight', () => contextUi?.getViewPortHeight());
        defineGetter(form, 'ViewPortWidth', () => contextUi?.getViewPortWidth());
        var contextUiFormSelector = formContext?.ui?.formSelector;
        form.FormNavigateToFormId = function (formId) {
            for (var i = 0; i < contextUiFormSelector?.items?.getLength(); i++) {
                if (formId === contextUiFormSelector?.items?.get(i)?.getId()) {
                    contextUiFormSelector?.items?.get(i)?.navigate();
                }
            }
        };
        form.FormNavigateToFormLabel = function (formLabel) {
            for (var i = 0; i < contextUiFormSelector?.items?.getLength(); i++) {
                if (formLabel === contextUiFormSelector?.items?.get(i)?.getLabel()) {
                    contextUiFormSelector?.items?.get(i)?.navigate();
                }
            }
        };
        form.FormIsVisible = function (formId) {
            for (var i = 0; i < contextUiFormSelector?.items?.getLength(); i++) {
                if (formId === contextUiFormSelector?.items?.get(i)?.getId()) {
                    return contextUiFormSelector?.items?.get(i)?.getVisible();
                }
            }
        }
        form.FormSetVisible = function (formId, value) {
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
            obj.SetProgress = function (stepProgress, message) {
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
            obj.AllowCreateNew = function (callback) {
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
                    obj.getLength = function () {
                        return process?.getStages()?.getLength();
                    }
                    obj.get = function (index) {
                        var stage = process?.getStages()?.get(index);
                        return loadStage(stage);
                    }
                    obj.forEach = function (callback) {
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
        process.AddOnPreProcessStatusChange = function (callback) {
            getProcess?.addOnPreProcessStatusChange(callback);
        };
        process.RemoveOnPreProcessStatusChange = function (callback) {
            getProcess?.removeOnPreProcessStatusChange(callback);
        };
        process.AddOnPreStageChange = function (callback) {
            getProcess?.addOnPreStageChange(callback);
        };
        process.RemoveOnPreStageChange = function (callback) {
            getProcess?.removeOnPreStageChange(callback);
        };
        process.AddOnProcessStatusChange = function (callback) {
            getProcess?.addOnProcessStatusChange(callback);
        };
        process.RemoveOnProcessStatusChange = function (callback) {
            getProcess?.removeOnProcessStatusChange(callback);
        };
        process.AddOnStageChange = function (callback) {
            getProcess?.addOnStageChange(callback);
        };
        process.RemoveOnStageChange = function (callback) {
            getProcess?.removeOnStageChange(callback);
        };
        process.AddOnStageSelected = function (callback) {
            getProcess?.addOnStageSelected(callback);
        };
        process.RemoveOnStageSelected = function (callback) {
            getProcess?.removeOnStageSelected(callback);
        };
        process.EnabledProcesses = function (callback) {
            getProcess?.getEnabledProcesses(function (enabledProcesses) {
                var processes = [];
                for (var processId in enabledProcesses) {
                    processes.push({ ProcessId: processId, ProcessName: enabledProcesses[processId] });
                }
                callback(processes);
            });
        };
        process.MoveNext = function (callback) {
            getProcess?.moveNext(callback);
        };
        process.MovePrevious = function (callback) {
            getProcess?.movePrevious(callback);
        };
        process.ProcessInstances = function (callback) {
            getProcess?.getProcessInstances(function (processInstances) {
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
            getProcess?.setActiveStage(stageId, callback);
        };
        process.SetActiveProcessInstance = function (processInstanceId, callback) {
            getProcess?.setActiveProcessInstance(processInstanceId, callback);
        };
        process.SetActiveProcess = function (processId, callback) {
            getProcess?.setActiveProcess(processId, callback);
        };
        process.Reflow = function (updateUi, parentStage, nextStage) {
            getProcessUi?.reflow(updateUi, parentStage, nextStage);
        }
        defineGetter(process, 'ActiveProcess', () => loadProcess(getProcess?.getActiveProcess()));
        defineGetter(process, 'SelectedStage', () => loadStage(getProcess?.getSelectedStage()));
        defineGetter(process, 'ActiveStage', () => loadStage(getProcess?.getActiveStage()));
        defineGetter(process, 'InstanceId', () => getProcess?.getInstanceId());
        defineGetter(process, 'InstanceName', () => getProcess?.getInstanceName());
        Object.defineProperty(process, 'Status', {
            get: () => getProcess?.getStatus(),
            set(value) { getProcess?.setStatus(value); }
        });
        Object.defineProperty(process, 'DisplayState', {
            get: () => getProcessUi?.getDisplayState(),
            set(value) { getProcessUi?.setDisplayState(value); }
        });
        Object.defineProperty(process, 'Visible', {
            get: () => getProcessUi?.getVisible(),
            set(value) { getProcessUi?.setVisible(value); }
        });
        Object.defineProperty(process, 'ActivePath', {
            get: () => {
                var obj = {};
                obj.getLength = function () { return getProcess?.getActivePath()?.getLength(); }
                obj.get = function (index) {
                    var stage = getProcess?.getActivePath()?.get(index);
                    return loadStage(stage);
                }
                obj.forEach = function (callback) {
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
        field.ContentWindow = function (successCallback, errorCallback) {
            control?.getContentWindow()?.then(successCallback, errorCallback);
        }
        field.Option = function (value) {
            return attribute?.getOption(value);
        };
        field.RemoveOnChange = function (callback) {
            attribute?.removeOnChange(callback);
        };
        field.AddCustomFilter = function (filter, entityLogicaName) {
            control?.addCustomFilter(filter, entityLogicaName);
        };
        field.AddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
            control?.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
        };
        field.AddPostSearch = function (callback) {
            control?.addOnPostSearch(callback);
        };
        field.AddOnOutputChange = function (callback) {
            control?.addOnOutputChange(callback);
        };
        field.AddResultOpened = function (callback) {
            control?.addOnResultOpened(callback);
        };
        field.AddSelection = function (callback) {
            control?.addOnSelection(callback);
        };
        field.AddPreSearch = function (callback) {
            control?.addPreSearch(callback);
        };
        field.ClearNotification = function (uniqueId) {
            return control?.clearNotification(uniqueId);
        };
        field.ClearOptions = function () {
            control?.clearOptions();
        };
        field.AddOnChange = function (callback) {
            attribute?.addOnChange(callback);
        };
        field.FireOnChange = function () {
            attribute?.fireOnChange();
        };
        field.OpenSearchResult = function (resultNumber, mode) {
            return control?.openSearchResult(resultNumber, mode);
        };
        field.Refresh = function () {
            control?.refresh();
        };
        field.RemovePostSearch = function (callback) {
            control?.removeOnPostSearch(callback);
        };
        field.RemoveOnOutputChange = function (callback) {
            control?.removeOnOutputChange(callback);
        };
        field.RemoveResultOpened = function (callback) {
            control?.removeOnResultOpened(callback);
        };
        field.RemoveSelection = function (callback) {
            control?.removeOnSelection(callback);
        };
        field.RemoveOption = function (value) {
            control?.removeOption(value);
        };
        field.RemovePreSearch = function (callback) {
            control?.removePreSearch(callback);
        };
        field.Focus = function () {
            control?.setFocus();
        };
        field.SetNotification = function (message, uniqueId) {
            return control?.setNotification(message, uniqueId);
        };
        field.AddOption = function (text, value, index) {
            control?.addOption({ text: text, value: value }, index);
        };
        field.AddNotification = function (message, notificationLevel, uniqueId, callback) {
            var actions = { message: message, actions: [callback] };
            var notification = { messages: [message], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
            return control?.addNotification(notification);
        };
        field.AddLookupTagClick = function (callback) {
            control?.addOnLookupTagClick(callback);
        };
        field.RemoveLookupTagClick = function (callback) {
            control?.removeOnLookupTagClick(callback);
        };
        field.SetIsValid = function (valid, message) {
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
        Object.defineProperty(field, 'Precision', {
            get: () => attribute?.getPrecision(),
            set(value) { attribute?.setPrecision(value); }
        });
        Object.defineProperty(field, 'RequiredLevel', {
            get: () => attribute?.getRequiredLevel(),
            set(value) { attribute?.setRequiredLevel(value); }
        });
        Object.defineProperty(field, 'SubmitMode', {
            get: () => attribute?.getSubmitMode(),
            set(value) { attribute?.setSubmitMode(value); }
        });
        Object.defineProperty(field, 'Value', {
            get: () => attribute?.getValue(),
            set(value) {
                if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
                attribute?.setValue(value);
            }
        });
        Object.defineProperty(field, 'Data', {
            get: () => control?.getData(),
            set(value) { control?.setData(value); }
        });
        Object.defineProperty(field, 'DefaultView', {
            get: () => control?.getDefaultView(),
            set(value) { control?.setDefaultView(value); }
        });
        Object.defineProperty(field, 'Disabled', {
            get: () => control?.getDisabled(),
            set(value) {
                if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
                control?.setDisabled(value);
            }
        });
        Object.defineProperty(field, 'EntityTypes', {
            get: () => control?.getEntityTypes(),
            set(value) { control?.setEntityTypes(value); }
        });
        Object.defineProperty(field, 'Label', {
            get: () => control?.getLabel(),
            set(value) { control?.setLabel(value); }
        });
        Object.defineProperty(field, 'SearchQuery', {
            get: () => control?.getSearchQuery(),
            set(value) { control?.setSearchQuery(value); }
        });
        Object.defineProperty(field, 'ShowTime', {
            get: () => control?.getShowTime(),
            set(value) { control?.setShowTime(value); }
        });
        Object.defineProperty(field, 'Src', {
            get: () => control?.getSrc(),
            set(value) { control?.setSrc(value); }
        });
        Object.defineProperty(field, 'Visible', {
            get: () => control?.getVisible(),
            set(value) { control?.setVisible(value); }
        });
    }
    function loadFields(formContext, body, type) {
        for (var field in body) {
            var logicalName = (function () {
                if (type === undefined) return field?.toLowerCase();
                return (type + field)?.toLowerCase();
            })();
            var control = formContext?.getControl(logicalName) ?? formContext?.getControl(field);
            var attribute = (function () {
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
            Object.defineProperty(body, 'BodyVisible', {
                get() { return getHeaderSection?.getBodyVisible(); },
                set(value) { getHeaderSection?.setBodyVisible(value); }
            });
            Object.defineProperty(body, 'CommandBarVisible', {
                get() { return getHeaderSection?.getCommandBarVisible(); },
                set(value) { getHeaderSection?.setCommandBarVisible(value); }
            });
            Object.defineProperty(body, 'TabNavigatorVisible', {
                get() { return getHeaderSection?.getTabNavigatorVisible(); },
                set(value) { getHeaderSection?.setTabNavigatorVisible(value); }
            });
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
            Object.defineProperty(sections[section], 'Label', {
                get() { return sectionObject?.getLabel(); },
                set(value) { sectionObject?.setLabel(value); }
            });
            Object.defineProperty(sections[section], 'Visible', {
                get() { return sectionObject?.getVisible(); },
                set(value) { sectionObject?.setVisible(value); }
            });
        }
        var loadTab = function (formContext, tabs, tab) {
            var tabObject = formContext?.ui?.tabs?.get(tab);
            tabs[tab].AddTabStateChange = function (callback) {
                tabObject?.addTabStateChange(callback);
            };
            tabs[tab].Focus = function () {
                tabObject?.setFocus();
            };
            tabs[tab].RemoveTabStateChange = function (callback) {
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
                if (navigation === formContext?.ui?.navigation?.items?.get(i)?.getId()) {
                    navigationItem = formContext?.ui?.navigation?.items?.get(i);
                }
            }
            navigations[navigation].Focus = function () {
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
                fields.push(field);
                delete quickForms[quickForm][field];
            }
            var quick = formContext?.ui?.quickForms?.get(quickForm);
            Object.defineProperty(quickForms[quickForm], 'Body', {
                get() {
                    var obj = {};
                    for (var i = 0; i < fields?.length; i++) {
                        var field = fields[i];
                        if (quick?.isLoaded()) {
                            var control = quick?.getControl(field?.toLowerCase());
                            var attribute = control?.getAttribute();
                            var objField = {};
                            loadField(formContext, objField, attribute, control);
                            obj[field] = objField;
                        }
                    }
                    return obj;
                }
            });
            quickForms[quickForm].Controls = function (arg) {
                return arg === undefined ? quick?.getControl() : quick?.getControl(arg);
            };
            quickForms[quickForm].IsLoaded = function () {
                return quick?.isLoaded();
            };
            quickForms[quickForm].Refresh = function () {
                quick?.refresh();
            };
            quickForms[quickForm].Focus = function () {
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
            Object.defineProperty(obj, 'RequiredLevel', {
                get() { return col?.getRequiredLevel(); },
                set(value) { col?.setRequiredLevel(value); }
            });
            Object.defineProperty(obj, 'Value', {
                get() { return col?.getValue(); },
                set(value) { col?.setValue(value); }
            });
            Object.defineProperty(obj, 'Disabled', {
                get() { return col?.controls?.get(0)?.getDisabled(); },
                set(value) { col?.controls?.get(0)?.setDisabled(value); }
            });
            Object.defineProperty(obj, 'Label', {
                get() { return col?.controls?.get(0)?.getLabel(); }
            });
            return obj;
        }
        var loadGrid = function (formContext, grids, grid) {
            var gridControl = formContext?.getControl(grid);
            grids[grid].AddOnLoad = function (callback) {
                gridControl?.addOnLoad(callback);
            };
            grids[grid].RemoveOnLoad = function (callback) {
                gridControl?.removeOnLoad(callback);
            };
            grids[grid].Url = function (client) {
                return gridControl?.getUrl(client);
            };
            grids[grid].Refresh = function () {
                gridControl?.refresh();
            };
            grids[grid].RefreshRibbon = function () {
                gridControl?.refreshRibbon();
            };
            grids[grid].OpenRelatedGrid = function () {
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
                    obj.getLength = function () {
                        return getGrid?.getSelectedRows()?.getLength();
                    }
                    obj.get = function (index) {
                        return loadGridRow(getGrid?.getSelectedRows()?.get(index));
                    }
                    obj.forEach = function (callback) {
                        var rows = getGrid?.getSelectedRows();
                        for (var index = 0; index < rows?.getLength(); index++) {
                            var row = rows?.get(index);
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
        utility.CloseProgressIndicator = function () {
            getUtility?.closeProgressIndicator();
        };
        utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
            getUtility?.getAllowedStatusTransitions(entityName, stateCode)?.then(successCallback, errorCallback);
        };
        utility.EntityMainFormDescriptor = function (entityName, formId) {
            return getUtility?.getEntityMainFormDescriptor(entityName, formId);
        };
        utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
            getUtility?.getEntityMetadata(entityName, attributes)?.then(successCallback, errorCallback);
        };
        utility.ResourceString = function (webResourceName, key) {
            return getUtility?.getResourceString(webResourceName, key);
        };
        utility.Resource = function (key) {
            return getUtility?.getResourceString(defaultWebResourceName, key);
        };
        utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
            getUtility?.invokeProcessAction(name, parameters)?.then(successCallback, errorCallback);
        };
        utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
            getUtility?.lookupObjects(lookupOptions)?.then(successCallback, errorCallback);
        };
        utility.RefreshParentGrid = function (lookupOptions) {
            getUtility?.refreshParentGrid(lookupOptions);
        };
        utility.ShowProgressIndicator = function (message) {
            getUtility?.showProgressIndicator(message);
        };
        Object.defineProperty(utility, 'LearningPathAttributeName', {
            get() { return getUtility?.getLearningPathAttributeName(); }
        });
        Object.defineProperty(utility, 'PageContext', {
            get() { return getUtility?.getPageContext(); }
        });
        var getGlobalContext = Xrm?.Utility?.getGlobalContext();
        utility.AdvancedConfigSetting = function (setting) {
            return getGlobalContext?.getAdvancedConfigSetting(setting);
        };
        utility.CurrentAppName = function (successCallback, errorCallback) {
            getGlobalContext?.getCurrentAppName()?.then(successCallback, errorCallback);
        };
        utility.CurrentAppProperties = function (successCallback, errorCallback) {
            getGlobalContext?.getCurrentAppProperties()?.then(successCallback, errorCallback);
        };
        utility.WebResourceUrl = function (webResourceName) {
            return getGlobalContext?.getWebResourceUrl(webResourceName);
        };
        utility.PrependOrgName = function (sPath) {
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
        utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
            getNavigation?.openAlertDialog(alertStrings, alertOptions)?.then(closeCallback, errorCallback);
        };
        utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
            getNavigation?.openConfirmDialog(confirmStrings, confirmOptions)?.then(successCallback, errorCallback);
        };
        utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
            getNavigation?.openErrorDialog(errorOptions)?.then(successCallback, errorCallback);
        };
        utility.OpenFile = function (file, openFileOptions) {
            getNavigation?.openFile(file, openFileOptions);
        };
        utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
            getNavigation?.openForm(entityFormOptions, formParameters)?.then(successCallback, errorCallback);
        };
        utility.OpenUrl = function (url, openUrlOptions) {
            getNavigation?.openUrl(url, openUrlOptions);
        };
        utility.OpenWebResource = function (webResourceName, windowOptions, data) {
            getNavigation?.openWebResource(webResourceName, windowOptions, data);
        };
        utility.NavigateTo = function (pageInput, navigationOptions, successCallback, errorCallback) {
            getNavigation?.navigateTo(pageInput, navigationOptions)?.then(successCallback, errorCallback);
        };
        var getPanel = Xrm?.Panel;
        utility.LoadPanel = function (url, title) {
            getPanel?.loadPanel(url, title);
        };
        var getEncoding = Xrm?.Encoding;
        utility.XmlAttributeEncode = function (arg) {
            return getEncoding?.xmlAttributeEncode(arg);
        };
        utility.XmlEncode = function (arg) {
            return getEncoding?.xmlEncode(arg);
        };
        utility.HtmlAttributeEncode = function (arg) {
            return getEncoding?.htmlAttributeEncode(arg);
        };
        utility.HtmlDecode = function (arg) {
            return getEncoding?.htmlDecode(arg);
        };
        utility.HtmlEncode = function (arg) {
            return getEncoding?.htmlEncode(arg);
        };
        var getDevice = Xrm?.Device;
        utility.CaptureAudio = function (successCallback, errorCallback) {
            getDevice?.captureAudio()?.then(successCallback, errorCallback);
        };
        utility.CaptureImage = function (imageOptions, successCallback, errorCallback) {
            getDevice?.captureImage(imageOptions)?.then(successCallback, errorCallback);
        };
        utility.CaptureVideo = function (successCallback, errorCallback) {
            getDevice?.captureVideo()?.then(successCallback, errorCallback);
        };
        utility.BarcodeValue = function (successCallback, errorCallback) {
            getDevice?.getBarcodeValue()?.then(successCallback, errorCallback);
        };
        utility.CurrentPosition = function (successCallback, errorCallback) {
            getDevice?.getCurrentPosition()?.then(successCallback, errorCallback);
        };
        utility.PickFile = function (pickFileOptions, successCallback, errorCallback) {
            getDevice?.pickFile(pickFileOptions)?.then(successCallback, errorCallback);
        };
        var getApp = Xrm?.App;
        utility.AddGlobalNotification = function (notification, successCallback, errorCallback) {
            getApp?.addGlobalNotification(notification)?.then(successCallback, errorCallback);
        }
        utility.ClearGlobalNotification = function (uniqueId, successCallback, errorCallback) {
            getApp?.clearGlobalNotification(uniqueId)?.then(successCallback, errorCallback);
        }
        return utility;
    }
    function loadExecutionContext(executionContext) {
        var obj = {};
        obj.IsInitialLoad = function () {
            return executionContext?.getEventArgs()?.getDataLoadState() === 1;
        }
        obj.GetSharedVariable = function (key) {
            return executionContext?.getSharedVariable(key);
        }
        obj.SetSharedVariable = function (key, value) {
            return executionContext?.setSharedVariable(key, value);
        }
        obj.IsDefaultPrevented = function () {
            return executionContext?.getEventArgs()?.isDefaultPrevented();
        }
        obj.SetPreventDefault = function () {
            executionContext?.getEventArgs()?.preventDefault();
        }
        obj.SetPreventDefaultOnError = function () {
            executionContext?.getEventArgs()?.preventDefaultOnError();
        }
        obj.DisableAsyncTimeout = function () {
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
        sidePanes.Create = function (paneOptions, successCallback) {
            Xrm?.App?.sidePanes?.createPane(paneOptions)?.then(successCallback);
        }
        sidePanes.Get = function (paneId) {
            return Xrm?.App?.sidePanes?.getPane(paneId);
        }
        sidePanes.GetSelected = function () {
            return Xrm?.App?.sidePanes?.getSelectedPane();
        }
        sidePanes.GetAll = function () {
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
        form.Close = function () { formContext?.ui?.close(); };
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
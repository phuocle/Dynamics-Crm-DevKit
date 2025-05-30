'use strict';
var devKit = (function () {
    'use strict';
    function defineGetter(obj, prop, getter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            enumerable: true,
            configurable: true
        });
    }
    function defineGetterSetter(obj, prop, getter, setter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true        });
    }
    function loadForm(formContext) {
        const form = {};
        const contextData = formContext?.data;
        form.DataAddOnLoad = callback => contextData?.addOnLoad(callback);
        form.Refresh = (save, successCallback, errorCallback) => contextData?.refresh(save)?.then(successCallback, errorCallback);
        form.DataRemoveOnLoad = callback => contextData?.removeOnLoad(callback);
        form.Save = (saveOptions, successCallback, errorCallback) => contextData?.save(saveOptions)?.then(successCallback, errorCallback);
        defineGetter(form, 'DataIsDirty', () => contextData?.getIsDirty());
        defineGetter(form, 'DataIsValid', () => contextData?.isValid());
        const contextDataEntity = formContext?.data?.entity;
        form.AddOnSave = callback => contextDataEntity?.addOnSave(callback);
        form.AddOnPostSave = callback => contextDataEntity?.addOnPostSave(callback);
        form.RemoveOnSave = callback => contextDataEntity?.removeOnSave(callback);
        form.RemoveOnPostSave = callback => contextDataEntity?.removeOnPostSave(callback);
        defineGetter(form, 'Attributes', () => contextDataEntity?.attributes);
        defineGetter(form, 'DataXml', () => contextDataEntity?.getDataXml());
        defineGetter(form, 'EntityName', () => contextDataEntity?.getEntityName());
        defineGetter(form, 'EntityReference', () => contextDataEntity?.getEntityReference());
        defineGetter(form, 'EntityId', () => contextDataEntity?.getId());
        defineGetter(form, 'EntityIsDirty', () => contextDataEntity?.getIsDirty());
        defineGetter(form, 'PrimaryAttributeValue', () => contextDataEntity?.getPrimaryAttributeValue());
        defineGetter(form, 'EntityIsValid', () => contextDataEntity?.isValid());
        const contextUi = formContext?.ui;
        form.UiAddLoaded = callback => contextUi?.addLoaded(callback);
        form.UiAddOnLoad = callback => contextUi?.addOnLoad(callback);
        form.ClearFormNotification = uniqueId => contextUi?.clearFormNotification(uniqueId);
        form.Close = () => contextUi?.close();
        form.RefreshRibbon = refreshAll => contextUi?.refreshRibbon(refreshAll);
        form.UiRemoveLoaded = callback => contextUi?.removeLoaded(callback);
        form.UiRemoveOnLoad = callback => contextUi?.removeOnLoad(callback);
        form.SetFormEntityName = arg => contextUi?.setFormEntityName(arg);
        form.SetFormNotification = (message, level, uniqueId) => contextUi?.setFormNotification(message, level, uniqueId);
        defineGetter(form, 'Controls', () => contextUi?.controls);
        defineGetter(form, 'FormType', () => contextUi?.getFormType());
        defineGetter(form, 'ViewPortHeight', () => contextUi?.getViewPortHeight());
        defineGetter(form, 'ViewPortWidth', () => contextUi?.getViewPortWidth());
        const contextUiFormSelector = formContext?.ui?.formSelector;
        const findFormItem = (criteria, value) => {
            const length = contextUiFormSelector?.items?.getLength() ?? 0;
            for (let i = 0; i < length; i++) {
                const item = contextUiFormSelector?.items?.get(i);
                if (item && criteria(item) === value) {
                    return item;
                }
            }
            return null;
        };
        form.FormNavigateToFormId = formId => {
            findFormItem(item => item.getId(), formId)?.navigate();
        };
        form.FormNavigateToFormLabel = formLabel => {
            findFormItem(item => item.getLabel(), formLabel)?.navigate();
        };
        form.FormIsVisible = formId => {
            return findFormItem(item => item.getId(), formId)?.getVisible();
        }
        form.FormSetVisible = (formId, value) => {
            findFormItem(item => item.getId(), formId)?.setVisible(value);
        }
        defineGetter(form, 'FormId', () => contextUiFormSelector?.getCurrentItem()?.getId());
        defineGetter(form, 'FormLabel', () => contextUiFormSelector?.getCurrentItem()?.getLabel());
        return form;
    }
    function loadProcess(formContext) {
        const loadStep = step => {
            const obj = {};
            defineGetter(obj, 'Attribute', () => step?.getAttribute());
            defineGetter(obj, 'Name', () => step?.getName());
            defineGetter(obj, 'Required', () => step?.isRequired());
            defineGetter(obj, 'Progress', () => step?.getProgress());
            obj.SetProgress = (stepProgress, message) => step?.setProgress(stepProgress, message);
            return obj;
        }
        const loadStage = stage => {
            const obj = {};
            defineGetter(obj, 'Category', () => stage?.getCategory()?.getValue());
            defineGetter(obj, 'EntityName', () => stage?.getEntityName());
            defineGetter(obj, 'Id', () => stage?.getId());
            defineGetter(obj, 'Name', () => stage?.getName());
            defineGetter(obj, 'Status', () => stage?.getStatus());
            obj.AllowCreateNew = callback => stage.getNavigationBehavior().allowCreateNew = callback;
            defineGetter(obj, 'Steps', () => {
                const steps = stage?.getSteps();
                if (!steps) return [];
                const stepsArray = [];
                const length = steps.length || 0;
                for (let index = 0; index < length; index++) {
                    stepsArray.push(loadStep(steps[index]));
                }
                return stepsArray;
            });
            return obj;
        }
        const loadProcessInner = process => {
            const obj = {};
            defineGetter(obj, 'Id', () => process?.getId());
            defineGetter(obj, 'Name', () => process?.getName());
            defineGetter(obj, 'IsRendered', () => process?.isRendered());
            defineGetter(obj, 'Stages', () => {
                const processStages = process?.getStages();
                const stagesObj = {};
                stagesObj.getLength = () => processStages?.getLength();
                stagesObj.get = index => {
                    const stage = processStages?.get(index);
                    return loadStage(stage);
                }
                stagesObj.forEach = callback => {
                    const length = processStages?.getLength() || 0;
                    for (let index = 0; index < length; index++) {
                        const stage = processStages.get(index);
                        callback(loadStage(stage), index);
                    }
                }
                return stagesObj;
            });
            return obj;
        }
        const process = {};
        const getProcess = formContext?.data?.process;
        const getProcessUi = formContext?.ui?.process;
        process.AddOnPreProcessStatusChange = callback => getProcess?.addOnPreProcessStatusChange(callback);
        process.RemoveOnPreProcessStatusChange = callback => getProcess?.removeOnPreProcessStatusChange(callback);
        process.AddOnPreStageChange = callback => getProcess?.addOnPreStageChange(callback);
        process.RemoveOnPreStageChange = callback => getProcess?.removeOnPreStageChange(callback);
        process.AddOnProcessStatusChange = callback => getProcess?.addOnProcessStatusChange(callback);
        process.RemoveOnProcessStatusChange = callback => getProcess?.removeOnProcessStatusChange(callback);
        process.AddOnStageChange = callback => getProcess?.addOnStageChange(callback);
        process.RemoveOnStageChange = callback => getProcess?.removeOnStageChange(callback);
        process.AddOnStageSelected = callback => getProcess?.addOnStageSelected(callback);
        process.RemoveOnStageSelected = callback => getProcess?.removeOnStageSelected(callback);
        process.EnabledProcesses = callback => {
            getProcess?.getEnabledProcesses(enabledProcesses => {
                var processes = [];
                for (var processId in enabledProcesses) {
                    processes.push({ ProcessId: processId, ProcessName: enabledProcesses[processId] });
                }
                callback(processes);
            });
        };
        process.MoveNext = callback => getProcess?.moveNext(callback);
        process.MovePrevious = callback => getProcess?.movePrevious(callback);
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
        process.SetActiveStage = (stageId, callback) => getProcess?.setActiveStage(stageId, callback);
        process.SetActiveProcessInstance = (processInstanceId, callback) => getProcess?.setActiveProcessInstance(processInstanceId, callback);
        process.SetActiveProcess = (processId, callback) => getProcess?.setActiveProcess(processId, callback);
        process.Reflow = (updateUi, parentStage, nextStage) => getProcessUi?.reflow(updateUi, parentStage, nextStage);
        defineGetter(process, 'ActiveProcess', () => loadProcessInner(getProcess?.getActiveProcess()));
        defineGetter(process, 'SelectedStage', () => loadStage(getProcess?.getSelectedStage()));
        defineGetter(process, 'ActiveStage', () => loadStage(getProcess?.getActiveStage()));
        defineGetter(process, 'InstanceId', () => getProcess?.getInstanceId());
        defineGetter(process, 'InstanceName', () => getProcess?.getInstanceName());
        defineGetterSetter(process, 'Status', () => getProcess?.getStatus(), value => { getProcess?.setStatus(value); });
        defineGetterSetter(process, 'DisplayState', () => getProcessUi?.getDisplayState(), value => { getProcessUi?.setDisplayState(value); });
        defineGetterSetter(process, 'Visible', () => getProcessUi?.getVisible(), value => { getProcessUi?.setVisible(value); }); defineGetter(process, 'ActivePath', () => {
            var activePathObj = {};
            activePathObj.getLength = () => getProcess?.getActivePath()?.getLength();
            activePathObj.get = index => {
                var stage = getProcess?.getActivePath()?.get(index);
                return loadStage(stage);
            }
            activePathObj.forEach = callback => {
                var stages = getProcess?.getActivePath();
                for (var index = 0; index < stages?.getLength(); index++) {
                    var stage = stages?.get(index);
                    callback(loadStage(stage), index);
                }
            }
            return activePathObj;
        });
        return process;
    }
    function loadField(formContext, field, attribute, control) {
        field.ContentWindow = (successCallback, errorCallback) => control?.getContentWindow()?.then(successCallback, errorCallback);
        field.Option = value => attribute?.getOption(value);
        field.RemoveOnChange = callback => attribute?.removeOnChange(callback);
        field.AddCustomFilter = (filter, entityLogicaName) => control?.addCustomFilter(filter, entityLogicaName);
        field.AddCustomView = (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) => control?.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
        field.AddPostSearch = callback => control?.addOnPostSearch(callback);
        field.AddOnOutputChange = callback => control?.addOnOutputChange(callback);
        field.AddResultOpened = callback => control?.addOnResultOpened(callback);
        field.AddSelection = callback => control?.addOnSelection(callback);
        field.AddPreSearch = callback => control?.addPreSearch(callback);
        field.ClearNotification = uniqueId => control?.clearNotification(uniqueId);
        field.ClearOptions = () => control?.clearOptions();
        field.AddOnChange = callback => attribute?.addOnChange(callback);
        field.FireOnChange = () => attribute?.fireOnChange();
        field.OpenSearchResult = (resultNumber, mode) => control?.openSearchResult(resultNumber, mode);
        field.Refresh = () => control?.refresh();
        field.RemovePostSearch = callback => control?.removeOnPostSearch(callback);
        field.RemoveOnOutputChange = callback => control?.removeOnOutputChange(callback);
        field.RemoveResultOpened = callback => control?.removeOnResultOpened(callback);
        field.RemoveSelection = callback => control?.removeOnSelection(callback);
        field.RemoveOption = value => control?.removeOption(value);
        field.RemovePreSearch = callback => control?.removePreSearch(callback);
        field.Focus = () => control?.setFocus();
        field.SetNotification = (message, uniqueId) => control?.setNotification(message, uniqueId);
        field.AddOption = (text, value, index) => control?.addOption({ text: text, value: value }, index);
        field.AddNotification = (message, notificationLevel, uniqueId, callback) => {
            var actions = { message: message, actions: [callback] };
            var notification = { messages: [message], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
            return control?.addNotification(notification);
        };
        field.AddLookupTagClick = callback => control?.addOnLookupTagClick(callback);
        field.RemoveLookupTagClick = callback => control?.removeOnLookupTagClick(callback);
        field.SetIsValid = (valid, message) => attribute?.setIsValid(valid, message);
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
        defineGetterSetter(field, 'Src', () => control?.getSrc(), value => { control?.setSrc(value); });        defineGetterSetter(field, 'Visible', () => control?.getVisible(), value => { control?.setVisible(value); });
    }
    function loadFields(formContext, body, type) {
        for (var field in body) {
            const logicalName = type === undefined ? field?.toLowerCase() : (type + field)?.toLowerCase();
            const control = formContext?.getControl(logicalName) ?? formContext?.getControl(field); let attribute = formContext?.getAttribute(logicalName);
            if (!attribute && control?.getAttribute) {
                attribute = control.getAttribute();
            }
            loadField(formContext, body[field], attribute, control);
        }
        if (type === "header_") {
            const getHeaderSection = formContext?.ui?.headerSection;
            defineGetterSetter(body, 'BodyVisible', () => getHeaderSection?.getBodyVisible(), value => { getHeaderSection?.setBodyVisible(value); });
            defineGetterSetter(body, 'CommandBarVisible', () => getHeaderSection?.getCommandBarVisible(), value => { getHeaderSection?.setCommandBarVisible(value); });
            defineGetterSetter(body, 'TabNavigatorVisible', () => getHeaderSection?.getTabNavigatorVisible(), value => { getHeaderSection?.setTabNavigatorVisible(value); });
        }        return body;
    }

    function loadTabs(formContext, tabs) {
        const loadSection = (formContext, tab, sections, section) => {
            const tabObject = formContext?.ui?.tabs?.get(tab);
            const sectionObject = tabObject?.sections?.get(section);
            defineGetter(sections[section], 'Name', () => sectionObject?.getName());
            defineGetter(sections[section], 'Parent', () => sectionObject?.getParent());
            defineGetterSetter(sections[section], 'Label', () => sectionObject?.getLabel(), value => sectionObject?.setLabel(value));
            defineGetterSetter(sections[section], 'Visible', () => sectionObject?.getVisible(), value => sectionObject?.setVisible(value));
        }
        const loadTab = (formContext, tabs, tab) => {
            const tabObject = formContext?.ui?.tabs?.get(tab);
            tabs[tab].AddTabStateChange = callback => tabObject?.addTabStateChange(callback);
            tabs[tab].Focus = () => tabObject?.setFocus();
            tabs[tab].RemoveTabStateChange = callback => tabObject?.removeTabStateChange(callback);
            defineGetter(tabs[tab], 'Name', () => tabObject?.getName());
            defineGetter(tabs[tab], 'Parent', () => tabObject?.getParent());
            defineGetterSetter(tabs[tab], 'DisplayState', () => tabObject?.getDisplayState(), value => { tabObject?.setDisplayState(value); });
            defineGetterSetter(tabs[tab], 'ContentType', () => tabObject?.getContentType(), value => { tabObject?.setContentType(value); });
            defineGetterSetter(tabs[tab], 'Label', () => tabObject?.getLabel(), value => { tabObject?.setLabel(value); }); defineGetterSetter(tabs[tab], 'Visible', () => tabObject?.getVisible(), value => { tabObject?.setVisible(value); });

            for (const section in tabs[tab].Section) {
                loadSection(formContext, tab, tabs[tab].Section, section);
            }
        }
        for (const tab in tabs) {
            loadTab(formContext, tabs, tab);        }
    }
    function loadNavigations(formContext, navigations) {
        const getNavigationItem = (navigation) => {
            const navItems = formContext?.ui?.navigation?.items;
            if (!navItems) return null;

            const length = navItems.getLength();
            for (let i = 0; i < length; i++) {
                const item = navItems.get(i);
                if (item?.getId() === navigation) {
                    return item;
                }
            }
            return null;
        };
        const loadNavigation = (formContext, navigations, navigation) => {
            const navigationItem = getNavigationItem(navigation);
            navigations[navigation].Focus = () => navigationItem?.setFocus();
            defineGetter(navigations[navigation], 'Id', () => navigationItem?.getId());
            defineGetterSetter(navigations[navigation], 'Label', () => navigationItem?.getLabel(), value => navigationItem?.setLabel(value));
            defineGetterSetter(navigations[navigation], 'Visible', () => navigationItem?.getVisible(), value => navigationItem?.setVisible(value));
        }
        for (var navigation in navigations) {
            loadNavigation(formContext, navigations, navigation);
        }
    }
    function loadQuickForms(formContext, quickForms) {
        const excludedFields = new Set([
            "Body", "Controls", "IsLoaded", "Refresh", "Focus",
            "ControlType", "Disabled", "Label", "ControlName",
            "ControlParent", "Visible"
        ]);
        const loadQuickForm = (formContext, quickForms, quickForm) => {
            const fields = Object.keys(quickForms[quickForm]).filter(field => !excludedFields.has(field));
            const quick = formContext?.ui?.quickForms?.get(quickForm);
            defineGetter(quickForms[quickForm], 'Body', () => loadFormDialog(quick, fields));
            quickForms[quickForm].Controls = arg => quick?.getControl(arg);
            quickForms[quickForm].IsLoaded = () => quick?.isLoaded();
            quickForms[quickForm].Refresh = () => quick?.refresh();
            quickForms[quickForm].Focus = () => quick?.setFocus();
            defineGetter(quickForms[quickForm], 'ControlType', () => quick?.getControlType());
            defineGetterSetter(quickForms[quickForm], 'Disabled', () => quick?.getDisabled(), value => { quick?.setDisabled(value); });
            defineGetterSetter(quickForms[quickForm], 'Label', () => quick?.getLabel(), value => { quick?.setLabel(value); });
            defineGetter(quickForms[quickForm], 'ControlName', () => quick?.getName());
            defineGetter(quickForms[quickForm], 'ControlParent', () => quick?.getParent());
            defineGetterSetter(quickForms[quickForm], 'Visible', () => quick?.getVisible(), value => { quick?.setVisible(value); });
        }
        for (var quickForm in quickForms) {
            loadQuickForm(formContext, quickForms, quickForm);
        }
    }
    function loadGrids(formContext, grids) {
        const loadGridRow = row => {
            var obj = {};
            defineGetter(obj, 'EntityName', () => row?.data?.entity?.getEntityName());
            defineGetter(obj, 'EntityReference', () => row?.data?.entity?.getEntityReference());
            defineGetter(obj, 'EntityId', () => row?.data?.entity?.getId());
            defineGetter(obj, 'PrimaryAttributeValue', () => row?.data?.entity?.getPrimaryAttributeValue());
            defineGetter(obj, 'Columns', () => {
                var columnsObj = {};
                columnsObj.getLength = () => row?.data?.entity?.attributes?.getLength();
                columnsObj.get = index => {
                    var column = row?.data?.entity?.attributes?.get(index);
                    return loadGridColumn(column);
                };
                columnsObj.forEach = callback => {
                    var columns = row?.data?.entity?.attributes;
                    for (var index = 0; index < columns?.getLength(); index++) {
                        var column = columns?.get(index);
                        callback(loadGridColumn(column), index);
                    }
                };
                return columnsObj;
            });
            return obj;
        }
        const loadGridColumn = col => {
            var obj = {};
            obj.SetNotification = (message, uniqueId) => col?.controls?.get(0)?.setNotification(message, uniqueId);
            obj.ClearNotification = uniqueId => col?.controls?.get(0)?.clearNotification(uniqueId);
            defineGetter(obj, 'Name', () => col?.getName());
            defineGetterSetter(obj, 'RequiredLevel', () => col?.getRequiredLevel(), value => { col?.setRequiredLevel(value); });
            defineGetterSetter(obj, 'Value', () => col?.getValue(), value => { col?.setValue(value); });
            defineGetterSetter(obj, 'Disabled', () => col?.controls?.get(0)?.getDisabled(), value => { col?.controls?.get(0)?.setDisabled(value); });
            defineGetter(obj, 'Label', () => col?.controls?.get(0)?.getLabel());
            return obj;
        }

        const loadGrid = (formContext, grids, grid) => {
            const gridControl = formContext?.getControl(grid);
            grids[grid].AddOnLoad = callback => gridControl?.addOnLoad(callback);
            grids[grid].RemoveOnLoad = callback => gridControl?.removeOnLoad(callback);
            grids[grid].Url = client => gridControl?.getUrl(client);
            grids[grid].Refresh = () => gridControl?.refresh();
            grids[grid].RefreshRibbon = () => gridControl?.refreshRibbon();
            grids[grid].OpenRelatedGrid = () => gridControl?.openRelatedGrid();
            defineGetter(grids[grid], 'EntityName', () => gridControl?.getEntityName());
            defineGetter(grids[grid], 'FetchXml', () => gridControl?.getFetchXml());
            defineGetter(grids[grid], 'GridType', () => gridControl?.getGridType());
            defineGetter(grids[grid], 'Relationship', () => gridControl?.getRelationship());
            defineGetter(grids[grid], 'ViewSelector', () => {
                const viewSelector = gridControl?.getViewSelector();
                const obj = {};
                defineGetterSetter(obj, 'CurrentView', () => viewSelector?.getCurrentView(), value => viewSelector?.setCurrentView(value));
                defineGetter(obj, 'Visible', () => viewSelector?.isVisible());
                return obj;
            });
            const createCollectionObject = (getItemsFn, processItemFn) => {
                const obj = {};
                obj.getLength = () => getItemsFn()?.getLength();
                obj.get = index => processItemFn(getItemsFn()?.get(index));
                obj.forEach = callback => {
                    const items = getItemsFn();
                    const length = items?.getLength() || 0;
                    for (let index = 0; index < length; index++) {
                        callback(processItemFn(items.get(index)), index);
                    }
                };
                return obj;
            };
            defineGetter(grids[grid], 'Rows', () => {
                const gridInstance = formContext?.getControl(grid)?.getGrid();
                return createCollectionObject(
                    () => gridInstance?.getRows(),
                    row => loadGridRow(row)
                );
            });
            defineGetter(grids[grid], 'SelectedRows', () => {
                const gridInstance = formContext?.getControl(grid)?.getGrid();
                return createCollectionObject(
                    () => gridInstance?.getSelectedRows(),
                    row => loadGridRow(row?.getData())
                );
            });
            defineGetter(grids[grid], 'TotalRecordCount', () => gridControl?.getGrid()?.getTotalRecordCount());
            defineGetterSetter(grids[grid], 'Visible', () => gridControl?.getVisible(), value => { gridControl?.setVisible(value); });
        }
        for (const grid in grids) {
            loadGrid(formContext, grids, grid);
        }
    }
    function loadUtility(defaultWebResourceName) {
        const utility = {};
        const getUtility = Xrm?.Utility;
        utility.CloseProgressIndicator = () => getUtility?.closeProgressIndicator();
        utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) { getUtility?.getAllowedStatusTransitions(entityName, stateCode)?.then(successCallback, errorCallback); };
        utility.EntityMainFormDescriptor = (entityName, formId) => getUtility?.getEntityMainFormDescriptor(entityName, formId);
        utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) { getUtility?.getEntityMetadata(entityName, attributes)?.then(successCallback, errorCallback); };
        utility.ResourceString = (webResourceName, key) => getUtility?.getResourceString(webResourceName, key);
        utility.Resource = key => getUtility?.getResourceString(defaultWebResourceName, key);
        utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) { getUtility?.invokeProcessAction(name, parameters)?.then(successCallback, errorCallback); };
        utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) { getUtility?.lookupObjects(lookupOptions)?.then(successCallback, errorCallback); };
        utility.RefreshParentGrid = lookupOptions => getUtility?.refreshParentGrid(lookupOptions);
        utility.ShowProgressIndicator = message => getUtility?.showProgressIndicator(message);
        defineGetter(utility, 'LearningPathAttributeName', () => getUtility?.getLearningPathAttributeName());
        defineGetter(utility, 'PageContext', () => getUtility?.getPageContext());
        const getGlobalContext = Xrm?.Utility?.getGlobalContext();
        utility.AdvancedConfigSetting = setting => getGlobalContext?.getAdvancedConfigSetting(setting);
        utility.CurrentAppName = function (successCallback, errorCallback) {
            getGlobalContext?.getCurrentAppName()?.then(successCallback, errorCallback);
        };
        utility.CurrentAppProperties = function (successCallback, errorCallback) {
            getGlobalContext?.getCurrentAppProperties()?.then(successCallback, errorCallback);
        };
        utility.WebResourceUrl = webResourceName => getGlobalContext?.getWebResourceUrl(webResourceName);
        utility.PrependOrgName = sPath => getGlobalContext?.prependOrgName(sPath); defineGetter(utility, 'Client', () => {
            const obj = {};
            const client = getGlobalContext?.client;
            defineGetter(obj, 'ClientName', () => client?.getClient());
            defineGetter(obj, 'ClientState', () => client?.getClientState());
            defineGetter(obj, 'FormFactor', () => client?.getFormFactor());
            defineGetter(obj, 'IsOffline', () => client?.isOffline());
            defineGetter(obj, 'IsNetworkAvailable', () => client?.isNetworkAvailable());
            return obj;
        });
        defineGetter(utility, 'OrganizationSettings', () => {
            const obj = {};
            const organizationSettings = getGlobalContext?.organizationSettings;
            defineGetter(obj, 'Attributes', () => organizationSettings?.attributes);
            defineGetter(obj, 'BaseCurrencyId', () => organizationSettings?.baseCurrencyId);
            defineGetter(obj, 'BaseCurrency', () => organizationSettings?.baseCurrency);
            defineGetter(obj, 'DefaultCountryCode', () => organizationSettings?.defaultCountryCode);
            defineGetter(obj, 'IsAutoSaveEnabled', () => organizationSettings?.isAutoSaveEnabled);
            defineGetter(obj, 'LanguageId', () => organizationSettings?.languageId);
            defineGetter(obj, 'OrganizationId', () => organizationSettings?.organizationId);
            defineGetter(obj, 'IsTrialOrganization', () => organizationSettings?.isTrialOrganization);
            defineGetter(obj, 'OrganizationExpiryDate', () => organizationSettings?.organizationExpiryDate);
            defineGetter(obj, 'UniqueName', () => organizationSettings?.uniqueName);
            defineGetter(obj, 'UseSkypeProtocol', () => organizationSettings?.useSkypeProtocol);
            defineGetter(obj, 'FullNameConventionCode', () => organizationSettings?.fullNameConventionCode);
            return obj;
        });
        defineGetter(utility, 'UserSettings', () => {
            const obj = {};
            const userSettings = getGlobalContext?.userSettings;
            defineGetter(obj, 'DateFormattingInfo', () => userSettings?.dateFormattingInfo);
            defineGetter(obj, 'DefaultDashboardId', () => userSettings?.defaultDashboardId);
            defineGetter(obj, 'IsGuidedHelpEnabled', () => userSettings?.isGuidedHelpEnabled);
            defineGetter(obj, 'IsHighContrastEnabled', () => userSettings?.isHighContrastEnabled);
            defineGetter(obj, 'IsRTL', () => userSettings?.isRTL);
            defineGetter(obj, 'LanguageId', () => userSettings?.languageId);
            defineGetter(obj, 'Roles', () => userSettings?.roles);
            defineGetter(obj, 'SecurityRolePrivileges', () => userSettings?.securityRolePrivileges);
            defineGetter(obj, 'SecurityRoles', () => userSettings?.securityRoles);
            defineGetter(obj, 'TransactionCurrency', () => userSettings?.transactionCurrency);
            defineGetter(obj, 'TransactionCurrencyId', () => userSettings?.transactionCurrencyId);
            defineGetter(obj, 'UserId', () => userSettings?.userId);
            defineGetter(obj, 'UserName', () => userSettings?.userName);
            defineGetter(obj, 'TimeZoneOffsetMinutes', () => userSettings?.getTimeZoneOffsetMinutes());
            return obj;
        });
        defineGetter(utility, 'ClientUrl', () => getGlobalContext?.getClientUrl());
        defineGetter(utility, 'CurrentAppUrl', () => getGlobalContext?.getCurrentAppUrl());
        defineGetter(utility, 'Version', () => getGlobalContext?.getVersion());
        defineGetter(utility, 'IsOnPremises', () => getGlobalContext?.isOnPremises());
        const getNavigation = Xrm?.Navigation;
        utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) { getNavigation?.openAlertDialog(alertStrings, alertOptions)?.then(closeCallback, errorCallback); };
        utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) { getNavigation?.openConfirmDialog(confirmStrings, confirmOptions)?.then(successCallback, errorCallback); };
        utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) { getNavigation?.openErrorDialog(errorOptions)?.then(successCallback, errorCallback); };
        utility.OpenFile = (file, openFileOptions) => getNavigation?.openFile(file, openFileOptions);
        utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) { getNavigation?.openForm(entityFormOptions, formParameters)?.then(successCallback, errorCallback); };
        utility.OpenUrl = (url, openUrlOptions) => getNavigation?.openUrl(url, openUrlOptions);
        utility.OpenWebResource = (webResourceName, windowOptions, data) => getNavigation?.openWebResource(webResourceName, windowOptions, data);
        utility.NavigateTo = function (pageInput, navigationOptions, successCallback, errorCallback) { getNavigation?.navigateTo(pageInput, navigationOptions)?.then(successCallback, errorCallback); };
        const getPanel = Xrm?.Panel;
        utility.LoadPanel = (url, title) => getPanel?.loadPanel(url, title);
        const getEncoding = Xrm?.Encoding;
        utility.XmlAttributeEncode = arg => getEncoding?.xmlAttributeEncode(arg);
        utility.XmlEncode = arg => getEncoding?.xmlEncode(arg);
        utility.HtmlAttributeEncode = arg => getEncoding?.htmlAttributeEncode(arg);
        utility.HtmlDecode = arg => getEncoding?.htmlDecode(arg);
        utility.HtmlEncode = arg => getEncoding?.htmlEncode(arg);
        const getDevice = Xrm?.Device;
        utility.CaptureAudio = function (successCallback, errorCallback) { getDevice?.captureAudio()?.then(successCallback, errorCallback); };
        utility.CaptureImage = function (imageOptions, successCallback, errorCallback) { getDevice?.captureImage(imageOptions)?.then(successCallback, errorCallback); };
        utility.CaptureVideo = function (successCallback, errorCallback) { getDevice?.captureVideo()?.then(successCallback, errorCallback); };
        utility.BarcodeValue = function (successCallback, errorCallback) { getDevice?.getBarcodeValue()?.then(successCallback, errorCallback); };
        utility.CurrentPosition = function (successCallback, errorCallback) { getDevice?.getCurrentPosition()?.then(successCallback, errorCallback); };
        utility.PickFile = function (pickFileOptions, successCallback, errorCallback) { getDevice?.pickFile(pickFileOptions)?.then(successCallback, errorCallback); };
        const getApp = Xrm?.App;
        utility.AddGlobalNotification = function (notification, successCallback, errorCallback) { getApp?.addGlobalNotification(notification)?.then(successCallback, errorCallback); };
        utility.ClearGlobalNotification = function (uniqueId, successCallback, errorCallback) { getApp?.clearGlobalNotification(uniqueId)?.then(successCallback, errorCallback); };        return utility;
    }

    function loadExecutionContext(executionContext) {
        const obj = {};
        obj.IsInitialLoad = () => executionContext?.getEventArgs()?.getDataLoadState() === 1;
        obj.GetSharedVariable = key => executionContext?.getSharedVariable(key);
        obj.SetSharedVariable = (key, value) => executionContext?.setSharedVariable(key, value);
        obj.IsDefaultPrevented = () => executionContext?.getEventArgs()?.isDefaultPrevented();
        obj.SetPreventDefault = () => executionContext?.getEventArgs()?.preventDefault();
        obj.SetPreventDefaultOnError = () => executionContext?.getEventArgs()?.preventDefaultOnError();
        obj.DisableAsyncTimeout = () => executionContext?.getEventArgs()?.disableAsyncTimeout();
        defineGetter(obj, 'Depth', () => executionContext?.getDepth());
        defineGetter(obj, 'EventArgs', () => executionContext?.getEventArgs());
        defineGetter(obj, 'EventSource', () => executionContext?.getEventSource());
        defineGetter(obj, 'FormContext', () => executionContext?.getFormContext());
        defineGetter(obj, 'SaveMode', () => executionContext?.getEventArgs()?.getSaveMode());
        defineGetter(obj, 'EntityReference', () => executionContext?.getEventArgs()?.getEntityReference());
        defineGetter(obj, 'IsSaveSuccess', () => executionContext?.getEventArgs()?.getIsSaveSuccess());
        defineGetter(obj, 'SaveErrorInfo', () => executionContext?.getEventArgs()?.getSaveErrorInfo());
        return obj;
    }
    function loadSidePanes() {
        const sidePanes = {};
        sidePanes.Create = function (paneOptions, successCallback) { Xrm?.App?.sidePanes?.createPane(paneOptions)?.then(successCallback); };
        sidePanes.Get = paneId => Xrm?.App?.sidePanes?.getPane(paneId);
        sidePanes.GetSelected = () => Xrm?.App?.sidePanes?.getSelectedPane();
        sidePanes.GetAll = () => Xrm?.App?.sidePanes?.getAllPanes();
        defineGetterSetter(sidePanes, 'DisplayState', () => Xrm?.App?.sidePanes?.state, value => { Xrm.App.sidePanes.state = value; });
        return sidePanes;    }

    function loadOthers(formContext, form, defaultWebResourceName) {
        form.SidePanes = loadSidePanes();
    }
    function loadFormDialog(formContext, fields) {
        const form = {};
        const fieldsLength = fields?.length || 0;
        for (let i = 0; i < fieldsLength; i++) {
            const field = fields[i];
            const attribute = formContext?.data?.entity?.attributes?.get(field);
            const control = formContext?.getControl(field);
            form[field] = {};
            devKit.LoadField(formContext, form[field], attribute, control);
        }
        form.Close = () => formContext?.ui?.close();
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
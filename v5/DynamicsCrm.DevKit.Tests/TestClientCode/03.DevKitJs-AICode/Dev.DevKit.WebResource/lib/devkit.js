// -----------------------------------------------------------------------------------
// --------------------------- SOURCE OF TRUTH ---------------------------------------
// -----------------------------------------------------------------------------------
// This file is a Source of Truth for the DynamicsCrm.DevKit project.
// Do not edit without considering the impact on the entire toolkit.
// -----------------------------------------------------------------------------------
// @ts-nocheck
'use strict';
const devKit = (function () {
    function getXrm() {
        if (typeof window !== 'undefined' && window.Xrm !== undefined) {
            return window.Xrm;
        }
        if (typeof parent !== 'undefined' && typeof parent.window !== 'undefined' && parent.window.Xrm !== undefined) {
            return parent.window.Xrm;
        }
        if (typeof parent !== 'undefined' && typeof parent.parent !== 'undefined' && typeof parent.parent.window !== 'undefined' && parent.parent.window.Xrm !== undefined) {
            return parent.parent.window.Xrm;
        }
        return undefined;
    }
    function getter(obj, prop, getter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            enumerable: true,
            configurable: true
        });
    }
    function getterSetter(obj, prop, getter, setter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
    function loadForm(formContext) {
        const obj = {};
        const contextData = formContext?.data;
        const contextDataEntity = formContext?.data?.entity;
        const contextUi = formContext?.ui;
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
        getter(obj, 'Attributes', () => contextDataEntity?.attributes);
        getter(obj, 'Controls', () => contextUi?.controls);
        getter(obj, 'DataIsDirty', () => contextData?.getIsDirty());
        getter(obj, 'DataIsValid', () => contextData?.isValid());
        getter(obj, 'DataXml', () => contextDataEntity?.getDataXml());
        getter(obj, 'EntityId', () => contextDataEntity?.getId());
        getter(obj, 'EntityIsDirty', () => contextDataEntity?.getIsDirty());
        getter(obj, 'EntityIsValid', () => contextDataEntity?.isValid());
        getter(obj, 'EntityName', () => contextDataEntity?.getEntityName());
        getter(obj, 'EntityReference', () => contextDataEntity?.getEntityReference());
        getter(obj, 'FormId', () => contextUiFormSelector?.getCurrentItem()?.getId());
        getter(obj, 'FormLabel', () => contextUiFormSelector?.getCurrentItem()?.getLabel());
        getter(obj, 'FormType', () => contextUi?.getFormType());
        getter(obj, 'PrimaryAttributeValue', () => contextDataEntity?.getPrimaryAttributeValue());
        getter(obj, 'ViewPortHeight', () => contextUi?.getViewPortHeight());
        getter(obj, 'ViewPortWidth', () => contextUi?.getViewPortWidth());
        obj.AddOnPostSave = callback => contextDataEntity?.addOnPostSave(callback);
        obj.AddOnSave = callback => contextDataEntity?.addOnSave(callback);
        obj.ClearFormNotification = uniqueId => contextUi?.clearFormNotification(uniqueId);
        obj.Close = () => contextUi?.close();
        obj.DataAddOnLoad = callback => contextData?.addOnLoad(callback);
        obj.DataRemoveOnLoad = callback => contextData?.removeOnLoad(callback);
        obj.FormIsVisible = formId => { return findFormItem(item => item.getId(), formId)?.getVisible(); }
        obj.FormNavigateToFormId = formId => { findFormItem(item => item.getId(), formId)?.navigate(); };
        obj.FormNavigateToFormLabel = formLabel => { findFormItem(item => item.getLabel(), formLabel)?.navigate(); };
        obj.FormSetVisible = (formId, value) => { findFormItem(item => item.getId(), formId)?.setVisible(value); }
        obj.Refresh = (save, successCallback, errorCallback) => {
            const promise = contextData?.refresh(save);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.RefreshRibbon = refreshAll => contextUi?.refreshRibbon(refreshAll);
        obj.RemoveOnPostSave = callback => contextDataEntity?.removeOnPostSave(callback);
        obj.RemoveOnSave = callback => contextDataEntity?.removeOnSave(callback);
        obj.Save = (saveOptions, successCallback, errorCallback) => {
            const promise = contextData?.save(saveOptions);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.SetFormEntityName = arg => contextUi?.setFormEntityName(arg);
        obj.SetFormNotification = (message, level, uniqueId) => contextUi?.setFormNotification(message, level, uniqueId);
        obj.UiAddLoaded = callback => contextUi?.addLoaded(callback);
        obj.UiAddOnLoad = callback => contextUi?.addOnLoad(callback);
        obj.UiRemoveLoaded = callback => contextUi?.removeLoaded(callback);
        obj.UiRemoveOnLoad = callback => contextUi?.removeOnLoad(callback);
        return obj;
    }
    function loadProcess(formContext, bpf) {
        const obj = {};
        const bpfFieldNames = [];
        let bpfProcessName = null;
        bpf.forEach(item => {
            const [processName, fieldName] = item.split('___');
            if (!bpfProcessName) {
                bpfProcessName = processName;
            }
            bpfFieldNames.push(fieldName);
        });
        if (bpfProcessName) {
            const bpfObj = loadFields(formContext, bpfFieldNames, 'header_process_');
            obj[bpfProcessName] = bpfObj;
        }
        const getProcess = formContext?.data?.process;
        const getProcessUi = formContext?.ui?.process;
        const loadStep = step => {
            const obj = {};
            getter(obj, 'Attribute', () => step?.getAttribute());
            getter(obj, 'Name', () => step?.getName());
            getter(obj, 'Progress', () => step?.getProgress());
            getter(obj, 'Required', () => step?.isRequired());
            obj.SetProgress = (stepProgress, message) => step?.setProgress(stepProgress, message);
            return obj;
        }
        const loadStage = stage => {
            const obj = {};
            getter(obj, 'Category', () => stage?.getCategory()?.getValue());
            getter(obj, 'EntityName', () => stage?.getEntityName());
            getter(obj, 'Id', () => stage?.getId());
            getter(obj, 'Name', () => stage?.getName());
            getter(obj, 'Status', () => stage?.getStatus());
            getter(obj, 'Steps', () => {
                const steps = stage?.getSteps();
                if (!steps) return [];
                const stepsArray = [];
                const length = steps.length || 0;
                for (let index = 0; index < length; index++) {
                    stepsArray.push(loadStep(steps[index]));
                }
                return stepsArray;
            });
            obj.AllowCreateNew = callback => stage.getNavigationBehavior().allowCreateNew = callback;
            return obj;
        }
        const loadProcessInner = process => {
            const obj = {};
            getter(obj, 'Id', () => process?.getId());
            getter(obj, 'IsRendered', () => process?.isRendered());
            getter(obj, 'Name', () => process?.getName());
            getter(obj, 'Stages', () => {
                const processStages = process?.getStages();
                const stagesObj = {};
                stagesObj.get = index => {
                    const stage = processStages?.get(index);
                    return loadStage(stage);
                }
                stagesObj.getLength = () => processStages?.getLength();
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
        getter(obj, 'ActivePath', () => {
            const activePathObj = {};
            activePathObj.get = index => {
                const stage = getProcess?.getActivePath()?.get(index);
                return loadStage(stage);
            }
            activePathObj.getLength = () => getProcess?.getActivePath()?.getLength();
            activePathObj.forEach = callback => {
                const stages = getProcess?.getActivePath();
                for (let index = 0; index < stages?.getLength(); index++) {
                    const stage = stages?.get(index);
                    callback(loadStage(stage), index);
                }
            }
            return activePathObj;
        });
        getter(obj, 'ActiveProcess', () => loadProcessInner(getProcess?.getActiveProcess()));
        getter(obj, 'ActiveStage', () => loadStage(getProcess?.getActiveStage()));
        getter(obj, 'InstanceId', () => getProcess?.getInstanceId());
        getter(obj, 'InstanceName', () => getProcess?.getInstanceName());
        getter(obj, 'SelectedStage', () => loadStage(getProcess?.getSelectedStage()));
        getterSetter(obj, 'DisplayState', () => getProcessUi?.getDisplayState(), value => { getProcessUi?.setDisplayState(value); });
        getterSetter(obj, 'Status', () => getProcess?.getStatus(), value => { getProcess?.setStatus(value); });
        getterSetter(obj, 'Visible', () => getProcessUi?.getVisible(), value => { getProcessUi?.setVisible(value); });
        obj.AddOnPreProcessStatusChange = callback => getProcess?.addOnPreProcessStatusChange(callback);
        obj.AddOnPreStageChange = callback => getProcess?.addOnPreStageChange(callback);
        obj.AddOnProcessStatusChange = callback => getProcess?.addOnProcessStatusChange(callback);
        obj.AddOnStageChange = callback => getProcess?.addOnStageChange(callback);
        obj.AddOnStageSelected = callback => getProcess?.addOnStageSelected(callback);
        obj.EnabledProcesses = callback => {
            getProcess?.getEnabledProcesses(enabledProcesses => {
                const processes = Object.entries(enabledProcesses).map(([processId, processName]) => ({
                    ProcessId: processId,
                    ProcessName: processName
                }));
                callback(processes);
            });
        };
        obj.MoveNext = callback => getProcess?.moveNext(callback);
        obj.MovePrevious = callback => getProcess?.movePrevious(callback);
        obj.ProcessInstances = callback => {
            getProcess?.getProcessInstances(processInstances => {
                const processes = Object.values(processInstances).map(process => ({
                    ProcessId: process.ProcessDefinitionID,
                    ProcessName: process.ProcessDefinitionName,
                    CreatedOn: process.CreatedOn,
                    CreatedOnDate: process.CreatedOnDate,
                    InstanceId: process.ProcessInstanceID,
                    InstanceName: process.ProcessInstanceName,
                    Status: process.StatusCodeName
                }));
                callback(processes);
            });
        };
        obj.Reflow = (updateUi, parentStage, nextStage) => getProcessUi?.reflow(updateUi, parentStage, nextStage);
        obj.RemoveOnPreProcessStatusChange = callback => getProcess?.removeOnPreProcessStatusChange(callback);
        obj.RemoveOnPreStageChange = callback => getProcess?.removeOnPreStageChange(callback);
        obj.RemoveOnProcessStatusChange = callback => getProcess?.removeOnProcessStatusChange(callback);
        obj.RemoveOnStageChange = callback => getProcess?.removeOnStageChange(callback);
        obj.RemoveOnStageSelected = callback => getProcess?.removeOnStageSelected(callback);
        obj.SetActiveProcess = (processId, callback) => getProcess?.setActiveProcess(processId, callback);
        obj.SetActiveProcessInstance = (processInstanceId, callback) => getProcess?.setActiveProcessInstance(processInstanceId, callback);
        obj.SetActiveStage = (stageId, callback) => getProcess?.setActiveStage(stageId, callback);
        return obj;
    }
    function loadField(formContext, field, attribute, control) {
        getter(field, 'Attribute', () => control?.getAttribute());
        getter(field, 'AttributeName', () => attribute?.getName());
        getter(field, 'AttributeParent', () => attribute?.getParent());
        getter(field, 'AttributeType', () => attribute?.getAttributeType());
        getter(field, 'ControlName', () => control?.getName());
        getter(field, 'ControlOptions', () => control?.getOptions());
        getter(field, 'ControlParent', () => control?.getParent());
        getter(field, 'ControlType', () => control?.getControlType());
        getter(field, 'Format', () => attribute?.getFormat());
        getter(field, 'InitialUrl', () => control?.getInitialUrl());
        getter(field, 'InitialValue', () => attribute?.getInitialValue());
        getter(field, 'IsDirty', () => attribute?.getIsDirty());
        getter(field, 'IsPartyList', () => attribute?.getIsPartyList());
        getter(field, 'IsValid', () => attribute?.isValid());
        getter(field, 'Max', () => attribute?.getMax());
        getter(field, 'MaxLength', () => attribute?.getMaxLength());
        getter(field, 'Min', () => attribute?.getMin());
        getter(field, 'Object', () => control?.getObject());
        getter(field, 'Options', () => attribute?.getOptions());
        getter(field, 'Outputs', () => control?.getOutputs());
        getter(field, 'SelectedOption', () => attribute?.getSelectedOption());
        getter(field, 'SelectedResults', () => control?.getSelectedResults());
        getter(field, 'State', () => control?.getState());
        getter(field, 'Text', () => attribute?.getText());
        getter(field, 'TotalResultCount', () => control?.getTotalResultCount());
        getter(field, 'UserPrivilege', () => attribute?.getUserPrivilege());
        getterSetter(field, 'Data', () => control?.getData(), value => { control?.setData(value); });
        getterSetter(field, 'DefaultView', () => control?.getDefaultView(), value => { control?.setDefaultView(value); });
        getterSetter(field, 'Disabled', () => control?.getDisabled(), value => {
            if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
            control?.setDisabled(value);
        });
        getterSetter(field, 'EntityTypes', () => control?.getEntityTypes(), value => { control?.setEntityTypes(value); });
        getterSetter(field, 'Label', () => control?.getLabel(), value => { control?.setLabel(value); });
        getterSetter(field, 'Precision', () => attribute?.getPrecision(), value => { attribute?.setPrecision(value); });
        getterSetter(field, 'RequiredLevel', () => attribute?.getRequiredLevel(), value => { attribute?.setRequiredLevel(value); });
        getterSetter(field, 'SearchQuery', () => control?.getSearchQuery(), value => { control?.setSearchQuery(value); });
        getterSetter(field, 'ShowTime', () => control?.getShowTime(), value => { control?.setShowTime(value); });
        getterSetter(field, 'Src', () => control?.getSrc(), value => { control?.setSrc(value); });
        getterSetter(field, 'SubmitMode', () => attribute?.getSubmitMode(), value => { attribute?.setSubmitMode(value); });
        getterSetter(field, 'Value', () => attribute?.getValue(), value => {
            if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
            attribute?.setValue(value);
        });
        getterSetter(field, 'Visible', () => control?.getVisible(), value => { control?.setVisible(value); });
        field.AddCustomFilter = (filter, entityLogicaName) => control?.addCustomFilter(filter, entityLogicaName);
        field.AddCustomView = (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) => control?.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
        field.AddLookupTagClick = callback => control?.addOnLookupTagClick(callback);
        field.AddNotification = (message, notificationLevel, uniqueId, callback) => {
            const actions = { message: message, actions: [callback] };
            const notification = { messages: [message], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
            return control?.addNotification(notification);
        };
        field.AddOnChange = callback => attribute?.addOnChange(callback);
        field.AddOnOutputChange = callback => control?.addOnOutputChange(callback);
        field.AddOption = (text, value, index) => control?.addOption({ text: text, value: value }, index);
        field.AddPostSearch = callback => control?.addOnPostSearch(callback);
        field.AddPreSearch = callback => control?.addPreSearch(callback);
        field.AddResultOpened = callback => control?.addOnResultOpened(callback);
        field.AddSelection = callback => control?.addOnSelection(callback);
        field.ClearNotification = uniqueId => control?.clearNotification(uniqueId);
        field.ClearOptions = () => control?.clearOptions();
        field.ContentWindow = (successCallback, errorCallback) => {
            const promise = control?.getContentWindow();
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        field.FireOnChange = () => attribute?.fireOnChange();
        field.Focus = () => control?.setFocus();
        field.OpenSearchResult = (resultNumber, mode) => control?.openSearchResult(resultNumber, mode);
        field.Option = value => attribute?.getOption(value);
        field.Refresh = () => control?.refresh();
        field.RemoveLookupTagClick = callback => control?.removeOnLookupTagClick(callback);
        field.RemoveOnChange = callback => attribute?.removeOnChange(callback);
        field.RemoveOnOutputChange = callback => control?.removeOnOutputChange(callback);
        field.RemoveOption = value => control?.removeOption(value);
        field.RemovePostSearch = callback => control?.removeOnPostSearch(callback);
        field.RemovePreSearch = callback => control?.removePreSearch(callback);
        field.RemoveResultOpened = callback => control?.removeOnResultOpened(callback);
        field.RemoveSelection = callback => control?.removeOnSelection(callback);
        field.SetIsValid = (valid, message) => attribute?.setIsValid(valid, message);
        field.SetNotification = (message, uniqueId) => control?.setNotification(message, uniqueId);
    }
    function findControlFromAttribute(attribute, controlName) {
        let foundControl = null;
        const lowerName = controlName?.toLowerCase();
        attribute?.controls?.forEach(ctrl => {
            if (ctrl?.getName()?.toLowerCase() === lowerName) {
                foundControl = ctrl;
            }
        });
        return foundControl;
    }
    function loadFields(formContext, fields, type) {
        const obj = {};
        fields.forEach(field => {
            obj[field] = {};
            const logicalName = type === undefined ? field?.toLowerCase() : (type + field)?.toLowerCase();
            let control = formContext?.getControl(logicalName) ?? formContext?.getControl(field);
            let attribute = null;
            if (type === "header_" && control) {
                attribute = control.getAttribute();
            } else {
                attribute = formContext?.getAttribute(logicalName);
                if (!attribute) {
                    const baseFieldName = field.replace(/\d+$/, '');
                    if (baseFieldName !== field) {
                        const baseLogicalName = type === undefined ? baseFieldName?.toLowerCase() : (type + baseFieldName)?.toLowerCase();
                        attribute = formContext?.getAttribute(baseLogicalName);
                    }
                }
            }
            if (!attribute && control) {
                attribute = control.getAttribute?.();
            }
            if (!control && attribute) {
                control = findControlFromAttribute(attribute, logicalName) ?? findControlFromAttribute(attribute, field);
            }
            loadField(formContext, obj[field], attribute, control);
        });
        if (type === "header_") {
            const getHeaderSection = formContext?.ui?.headerSection;
            getterSetter(obj, 'BodyVisible', () => getHeaderSection?.getBodyVisible(), value => { getHeaderSection?.setBodyVisible(value); });
            getterSetter(obj, 'CommandBarVisible', () => getHeaderSection?.getCommandBarVisible(), value => { getHeaderSection?.setCommandBarVisible(value); });
            getterSetter(obj, 'TabNavigatorVisible', () => getHeaderSection?.getTabNavigatorVisible(), value => { getHeaderSection?.setTabNavigatorVisible(value); });
        }
        return obj;
    }
    function loadTabs(formContext, tabItems) {
        const obj = {};
        tabItems.forEach(item => {
            const [tabName, sectionName] = item.split('___');
            if (!obj[tabName]) {
                obj[tabName] = { Section: {} };
                const tabObject = formContext?.ui?.tabs?.get(tabName);
                getter(obj[tabName], 'Name', () => tabObject?.getName());
                getter(obj[tabName], 'Parent', () => tabObject?.getParent());
                getterSetter(obj[tabName], 'ContentType', () => tabObject?.getContentType(), value => { tabObject?.setContentType(value); });
                getterSetter(obj[tabName], 'DisplayState', () => tabObject?.getDisplayState(), value => { tabObject?.setDisplayState(value); });
                getterSetter(obj[tabName], 'Label', () => tabObject?.getLabel(), value => { tabObject?.setLabel(value); });
                getterSetter(obj[tabName], 'Visible', () => tabObject?.getVisible(), value => { tabObject?.setVisible(value); });
                obj[tabName].AddTabStateChange = callback => tabObject?.addTabStateChange(callback);
                obj[tabName].Focus = () => tabObject?.setFocus();
                obj[tabName].RemoveTabStateChange = callback => tabObject?.removeTabStateChange(callback);
            }
            obj[tabName].Section[sectionName] = {};
            const tabObject = formContext?.ui?.tabs?.get(tabName);
            const sectionObject = tabObject?.sections?.get(sectionName);
            getter(obj[tabName].Section[sectionName], 'Name', () => sectionObject?.getName());
            getter(obj[tabName].Section[sectionName], 'Parent', () => sectionObject?.getParent());
            getter(obj[tabName].Section[sectionName], 'Controls', () => {
                const controlsCollection = sectionObject?.controls;
                if (!controlsCollection) return null;
                const controlsObj = {};
                controlsObj.get = (arg) => controlsCollection?.get(arg);
                controlsObj.getLength = () => controlsCollection?.getLength();
                controlsObj.forEach = (callback) => {
                    const length = controlsCollection?.getLength() || 0;
                    for (let i = 0; i < length; i++) {
                        callback(controlsCollection.get(i), i);
                    }
                };
                return controlsObj;
            });
            getterSetter(obj[tabName].Section[sectionName], 'Label', () => sectionObject?.getLabel(), value => sectionObject?.setLabel(value));
            getterSetter(obj[tabName].Section[sectionName], 'Visible', () => sectionObject?.getVisible(), value => sectionObject?.setVisible(value));
        });
        return obj;
    }
    function loadNavigations(formContext, navigationItems) {
        const obj = {};
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
        navigationItems.forEach(navigation => {
            obj[navigation] = {};
            const navigationItem = getNavigationItem(navigation);
            getter(obj[navigation], 'Id', () => navigationItem?.getId());
            getterSetter(obj[navigation], 'Label', () => navigationItem?.getLabel(), value => navigationItem?.setLabel(value));
            getterSetter(obj[navigation], 'Visible', () => navigationItem?.getVisible(), value => navigationItem?.setVisible(value));
            obj[navigation].Focus = () => navigationItem?.setFocus();
        });
        return obj;
    }
    function loadQuickForms(formContext, quickItems) {
        const obj = {};
        const quickFormFields = {};
        quickItems.forEach(item => {
            const [quickFormName, fieldName] = item.split('___');
            if (!obj[quickFormName]) {
                obj[quickFormName] = {};
                quickFormFields[quickFormName] = [];
                const quick = formContext?.ui?.quickForms?.get(quickFormName);
                getter(obj[quickFormName], 'Body', () => loadFormQuickView(quick, quickFormFields[quickFormName]));
                getter(obj[quickFormName], 'ControlName', () => quick?.getName());
                getter(obj[quickFormName], 'ControlParent', () => quick?.getParent());
                getter(obj[quickFormName], 'ControlType', () => quick?.getControlType());
                getterSetter(obj[quickFormName], 'Disabled', () => quick?.getDisabled(), value => { quick?.setDisabled(value); });
                getterSetter(obj[quickFormName], 'Label', () => quick?.getLabel(), value => { quick?.setLabel(value); });
                getterSetter(obj[quickFormName], 'Visible', () => quick?.getVisible(), value => { quick?.setVisible(value); });
                obj[quickFormName].Controls = arg => quick?.getControl(arg);
                obj[quickFormName].Focus = () => quick?.setFocus();
                obj[quickFormName].IsLoaded = () => quick?.isLoaded();
                obj[quickFormName].Refresh = () => quick?.refresh();
            }
            if (fieldName) {
                quickFormFields[quickFormName].push(fieldName);
            }
        });
        return obj;
    }
    function loadGrids(formContext, gridItems) {
        const obj = {};
        const loadGridRow = row => {
            const rowObj = {};
            getter(rowObj, 'Columns', () => {
                const columnsObj = {};
                columnsObj.getLength = () => row?.data?.entity?.attributes?.getLength();
                columnsObj.get = index => {
                    const column = row?.data?.entity?.attributes?.get(index);
                    return loadGridColumn(column);
                };
                columnsObj.forEach = callback => {
                    const columns = row?.data?.entity?.attributes;
                    for (let index = 0; index < columns?.getLength(); index++) {
                        const column = columns?.get(index);
                        callback(loadGridColumn(column), index);
                    }
                };
                return columnsObj;
            });
            getter(rowObj, 'EntityId', () => row?.data?.entity?.getId());
            getter(rowObj, 'EntityName', () => row?.data?.entity?.getEntityName());
            getter(rowObj, 'EntityReference', () => row?.data?.entity?.getEntityReference());
            getter(rowObj, 'PrimaryAttributeValue', () => row?.data?.entity?.getPrimaryAttributeValue());
            return rowObj;
        }
        const loadGridColumn = col => {
            const colObj = {};
            getter(colObj, 'Label', () => col?.controls?.get(0)?.getLabel());
            getter(colObj, 'Name', () => col?.getName());
            getterSetter(colObj, 'Disabled', () => col?.controls?.get(0)?.getDisabled(), value => { col?.controls?.get(0)?.setDisabled(value); });
            getterSetter(colObj, 'RequiredLevel', () => col?.getRequiredLevel(), value => { col?.setRequiredLevel(value); });
            getterSetter(colObj, 'Value', () => col?.getValue(), value => { col?.setValue(value); });
            colObj.ClearNotification = uniqueId => col?.controls?.get(0)?.clearNotification(uniqueId);
            colObj.SetNotification = (message, uniqueId) => col?.controls?.get(0)?.setNotification(message, uniqueId);
            return colObj;
        }
        const createCollectionObject = (getItemsFn, processItemFn) => {
            const collObj = {};
            collObj.getLength = () => getItemsFn()?.getLength();
            collObj.get = index => processItemFn(getItemsFn()?.get(index));
            collObj.forEach = callback => {
                const items = getItemsFn();
                const length = items?.getLength() || 0;
                for (let index = 0; index < length; index++) {
                    callback(processItemFn(items.get(index)), index);
                }
            };
            return collObj;
        };
        gridItems.forEach(grid => {
            obj[grid] = {};
            const gridControl = formContext?.getControl(grid);
            getter(obj[grid], 'EntityName', () => gridControl?.getEntityName());
            getter(obj[grid], 'FetchXml', () => gridControl?.getFetchXml());
            getter(obj[grid], 'GridType', () => gridControl?.getGridType());
            getter(obj[grid], 'Relationship', () => gridControl?.getRelationship());
            getter(obj[grid], 'Rows', () => {
                const gridInstance = formContext?.getControl(grid)?.getGrid();
                return createCollectionObject(
                    () => gridInstance?.getRows(),
                    row => loadGridRow(row)
                );
            });
            getter(obj[grid], 'SelectedRows', () => {
                const gridInstance = formContext?.getControl(grid)?.getGrid();
                return createCollectionObject(
                    () => gridInstance?.getSelectedRows(),
                    row => loadGridRow(row?.getData())
                );
            });
            getter(obj[grid], 'TotalRecordCount', () => gridControl?.getGrid()?.getTotalRecordCount());
            getter(obj[grid], 'ViewSelector', () => {
                const viewSelector = gridControl?.getViewSelector();
                const vsObj = {};
                getter(vsObj, 'Visible', () => viewSelector?.isVisible());
                getterSetter(vsObj, 'CurrentView', () => viewSelector?.getCurrentView(), value => viewSelector?.setCurrentView(value));
                return vsObj;
            });
            getterSetter(obj[grid], 'Visible', () => gridControl?.getVisible(), value => { gridControl?.setVisible(value); });
            getter(obj[grid], 'ControlType', () => gridControl?.getControlType());
            getter(obj[grid], 'ControlName', () => gridControl?.getName());
            getter(obj[grid], 'ControlParent', () => gridControl?.getParent());
            getterSetter(obj[grid], 'Disabled', () => gridControl?.getDisabled(), value => { gridControl?.setDisabled(value); });
            getterSetter(obj[grid], 'Label', () => gridControl?.getLabel(), value => { gridControl?.setLabel(value); });
            obj[grid].Focus = () => gridControl?.setFocus();
            obj[grid].AddOnLoad = callback => gridControl?.addOnLoad(callback);
            obj[grid].OpenRelatedGrid = () => gridControl?.openRelatedGrid();
            obj[grid].Refresh = () => gridControl?.refresh();
            obj[grid].RefreshRibbon = () => gridControl?.refreshRibbon();
            obj[grid].RemoveOnLoad = callback => gridControl?.removeOnLoad(callback);
            obj[grid].Url = client => gridControl?.getUrl(client);
        });
        return obj;
    }
    function loadBody(formContext, body, tab) {
        const obj = loadFields(formContext, body);
        obj.Tab = loadTabs(formContext, tab);
        return obj;
    }
    function loadUtility(defaultWebResourceName) {
        const obj = {};
        const getApp = Xrm?.App;
        const getDevice = Xrm?.Device;
        const getEncoding = Xrm?.Encoding;
        const getGlobalContext = Xrm?.Utility?.getGlobalContext();
        const getNavigation = Xrm?.Navigation;
        const getPanel = Xrm?.Panel;
        const getUtility = Xrm?.Utility;
        getter(obj, 'Client', () => {
            const obj = {};
            const client = getGlobalContext?.client;
            getter(obj, 'ClientName', () => client?.getClient());
            getter(obj, 'ClientState', () => client?.getClientState());
            getter(obj, 'FormFactor', () => client?.getFormFactor());
            getter(obj, 'IsNetworkAvailable', () => client?.isNetworkAvailable());
            getter(obj, 'IsOffline', () => client?.isOffline());
            return obj;
        });
        getter(obj, 'ClientUrl', () => getGlobalContext?.getClientUrl());
        getter(obj, 'CurrentAppUrl', () => getGlobalContext?.getCurrentAppUrl());
        getter(obj, 'IsOnPremises', () => getGlobalContext?.isOnPremises());
        getter(obj, 'LearningPathAttributeName', () => getUtility?.getLearningPathAttributeName());
        getter(obj, 'OrganizationSettings', () => {
            const obj = {};
            const organizationSettings = getGlobalContext?.organizationSettings;
            getter(obj, 'Attributes', () => organizationSettings?.attributes);
            getter(obj, 'BaseCurrency', () => organizationSettings?.baseCurrency);
            getter(obj, 'BaseCurrencyId', () => organizationSettings?.baseCurrencyId);
            getter(obj, 'DefaultCountryCode', () => organizationSettings?.defaultCountryCode);
            getter(obj, 'FullNameConventionCode', () => organizationSettings?.fullNameConventionCode);
            getter(obj, 'IsAutoSaveEnabled', () => organizationSettings?.isAutoSaveEnabled);
            getter(obj, 'IsTrialOrganization', () => organizationSettings?.isTrialOrganization);
            getter(obj, 'LanguageId', () => organizationSettings?.languageId);
            getter(obj, 'OrganizationExpiryDate', () => organizationSettings?.organizationExpiryDate);
            getter(obj, 'OrganizationId', () => organizationSettings?.organizationId);
            getter(obj, 'UniqueName', () => organizationSettings?.uniqueName);
            getter(obj, 'UseSkypeProtocol', () => organizationSettings?.useSkypeProtocol);
            return obj;
        });
        getter(obj, 'PageContext', () => getUtility?.getPageContext());
        getter(obj, 'UserSettings', () => {
            const obj = {};
            const userSettings = getGlobalContext?.userSettings;
            getter(obj, 'DateFormattingInfo', () => userSettings?.dateFormattingInfo);
            getter(obj, 'DefaultDashboardId', () => userSettings?.defaultDashboardId);
            getter(obj, 'IsGuidedHelpEnabled', () => userSettings?.isGuidedHelpEnabled);
            getter(obj, 'IsHighContrastEnabled', () => userSettings?.isHighContrastEnabled);
            getter(obj, 'IsRTL', () => userSettings?.isRTL);
            getter(obj, 'LanguageId', () => userSettings?.languageId);
            getter(obj, 'Roles', () => userSettings?.roles);
            getter(obj, 'SecurityRolePrivileges', () => userSettings?.securityRolePrivileges);
            getter(obj, 'SecurityRoles', () => userSettings?.securityRoles);
            getter(obj, 'TimeZoneOffsetMinutes', () => userSettings?.getTimeZoneOffsetMinutes());
            getter(obj, 'TransactionCurrency', () => userSettings?.transactionCurrency);
            getter(obj, 'TransactionCurrencyId', () => userSettings?.transactionCurrencyId);
            getter(obj, 'UserId', () => userSettings?.userId);
            getter(obj, 'UserName', () => userSettings?.userName);
            return obj;
        });
        getter(obj, 'Version', () => getGlobalContext?.getVersion());
        obj.AddGlobalNotification = function (notification, successCallback, errorCallback) {
            const promise = getApp?.addGlobalNotification(notification);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.AdvancedConfigSetting = setting => getGlobalContext?.getAdvancedConfigSetting(setting);
        obj.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
            const promise = getUtility?.getAllowedStatusTransitions(entityName, stateCode);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.BarcodeValue = function (successCallback, errorCallback) {
            const promise = getDevice?.getBarcodeValue();
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.CaptureAudio = function (successCallback, errorCallback) {
            const promise = getDevice?.captureAudio();
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.CaptureImage = function (imageOptions, successCallback, errorCallback) {
            const promise = getDevice?.captureImage(imageOptions);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.CaptureVideo = function (successCallback, errorCallback) {
            const promise = getDevice?.captureVideo();
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.ClearGlobalNotification = function (uniqueId, successCallback, errorCallback) {
            const promise = getApp?.clearGlobalNotification(uniqueId);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.CloseProgressIndicator = () => getUtility?.closeProgressIndicator();
        obj.CurrentAppName = function (successCallback, errorCallback) {
            const promise = getGlobalContext?.getCurrentAppName();
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        }
        obj.CurrentAppProperties = function (successCallback, errorCallback) {
            const promise = getGlobalContext?.getCurrentAppProperties();
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.CurrentPosition = function (successCallback, errorCallback) {
            const promise = getDevice?.getCurrentPosition();
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.EntityMainFormDescriptor = (entityName, formId) => getUtility?.getEntityMainFormDescriptor(entityName, formId);
        obj.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
            const promise = getUtility?.getEntityMetadata(entityName, attributes);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.HtmlAttributeEncode = arg => getEncoding?.htmlAttributeEncode(arg);
        obj.HtmlDecode = arg => getEncoding?.htmlDecode(arg);
        obj.HtmlEncode = arg => getEncoding?.htmlEncode(arg);
        obj.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
            const promise = getUtility?.invokeProcessAction(name, parameters);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.LoadPanel = (url, title) => getPanel?.loadPanel(url, title);
        obj.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
            const promise = getUtility?.lookupObjects(lookupOptions);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.NavigateTo = function (pageInput, navigationOptions, successCallback, errorCallback) {
            const promise = getNavigation?.navigateTo(pageInput, navigationOptions);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
            const promise = getNavigation?.openAlertDialog(alertStrings, alertOptions);
            if (closeCallback) promise?.then(closeCallback, errorCallback);
            else return promise;
        };
        obj.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
            const promise = getNavigation?.openConfirmDialog(confirmStrings, confirmOptions);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
            const promise = getNavigation?.openErrorDialog(errorOptions);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.OpenFile = (file, openFileOptions) => getNavigation?.openFile(file, openFileOptions);
        obj.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
            const promise = getNavigation?.openForm(entityFormOptions, formParameters);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.OpenUrl = (url, openUrlOptions) => getNavigation?.openUrl(url, openUrlOptions);
        obj.OpenWebResource = (webResourceName, windowOptions, data) => getNavigation?.openWebResource(webResourceName, windowOptions, data);
        obj.PickFile = function (pickFileOptions, successCallback, errorCallback) {
            const promise = getDevice?.pickFile(pickFileOptions);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.PrependOrgName = sPath => getGlobalContext?.prependOrgName(sPath);
        obj.RefreshParentGrid = lookupOptions => getUtility?.refreshParentGrid(lookupOptions);
        obj.Resource = key => getUtility?.getResourceString(defaultWebResourceName, key);
        obj.ResourceString = (webResourceName, key) => getUtility?.getResourceString(webResourceName, key);
        obj.ShowProgressIndicator = message => getUtility?.showProgressIndicator(message);
        obj.WebResourceUrl = webResourceName => getGlobalContext?.getWebResourceUrl(webResourceName);
        obj.XmlAttributeEncode = arg => getEncoding?.xmlAttributeEncode(arg);
        obj.XmlEncode = arg => getEncoding?.xmlEncode(arg);
        return obj;
    }
    function loadWebApi() {
        const obj = {};
        const xrmInstance = getXrm() ?? Xrm;
        const getWebApi = xrmInstance?.WebApi;
        const getOnline = xrmInstance?.WebApi?.online;
        const getOffline = xrmInstance?.WebApi?.offline;
        const extractEntityName = function (fetchXml) {
            const splitIndex = fetchXml.toLowerCase().indexOf('fetchxml=') + 'fetchxml='.length;
            const cleanXml = decodeURIComponent(fetchXml.substring(splitIndex));
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(cleanXml, "text/xml");
            const entityNode = xmlDoc.querySelector("entity");
            if (entityNode && entityNode.hasAttribute("name"))
                return entityNode.getAttribute("name");
            throw new Error("Entity name not found in fetchXml");
        };
        obj.CreateRecord = function (entityLogicalName, data, successCallback, errorCallback) {
            const promise = getWebApi?.createRecord(entityLogicalName, data);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        obj.DeleteRecord = function (entityLogicalName, id, successCallback, errorCallback) {
            const promise = getWebApi?.deleteRecord(entityLogicalName, id);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        obj.RetrieveMultipleRecords = function (entityLogicalName, options, maxPageSize, successCallback, errorCallback) {
            const promise = getWebApi?.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        obj.UpdateRecord = function (entityLogicalName, id, data, successCallback, errorCallback) {
            const promise = getWebApi?.updateRecord(entityLogicalName, id, data);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        const isClientOffline = () => xrmInstance?.Utility?.getGlobalContext?.()?.client?.isOffline?.() === true;
        obj.Execute = function (request, successCallback, errorCallback) {
            if (isClientOffline()) {
                if (errorCallback) {
                    errorCallback(new Error('Execute is not available in offline mode'));
                }
                return undefined;
            }
            const promise = getOnline?.execute(request);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        obj.ExecuteMultiple = function (requests, successCallback, errorCallback) {
            if (isClientOffline()) {
                if (errorCallback) {
                    errorCallback(new Error('ExecuteMultiple is not available in offline mode'));
                }
                return undefined;
            }
            const promise = getOnline?.executeMultiple(requests);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        obj.RetrieveRecords = function (apiConstructorOrFactory, entityLogicalNameOrOptions, optionsOrMaxPageSizeOrCallback, maxPageSizeOrSuccessCallback, successCallback, errorCallback) {
            let entityLogicalName;
            let options;
            let maxPageSize;
            const hasFetchXml = entityLogicalNameOrOptions => /fetchxml=/i.test(entityLogicalNameOrOptions);
            const isPlainFetchXml = entityLogicalNameOrOptions => typeof entityLogicalNameOrOptions === 'string' && entityLogicalNameOrOptions.trim().startsWith('<fetch');
            const secondParamIsFetchXmlOrOData = typeof entityLogicalNameOrOptions === 'string' &&
                (hasFetchXml(entityLogicalNameOrOptions) ||
                    isPlainFetchXml(entityLogicalNameOrOptions) ||
                    (entityLogicalNameOrOptions.startsWith('?') && !hasFetchXml(entityLogicalNameOrOptions)));
            if (secondParamIsFetchXmlOrOData) {
                options = entityLogicalNameOrOptions;
                if (isPlainFetchXml(options)) {
                    options = '?fetchXml=' + encodeURIComponent(options);
                }
                if (hasFetchXml(options) || isPlainFetchXml(entityLogicalNameOrOptions)) {
                    entityLogicalName = extractEntityName(options);
                } else {
                    throw new Error('Entity name cannot be determined from OData query. Please provide entityLogicalName as second parameter.');
                }
                if (typeof optionsOrMaxPageSizeOrCallback === 'function') {
                    successCallback = optionsOrMaxPageSizeOrCallback;
                    errorCallback = maxPageSizeOrSuccessCallback;
                    maxPageSize = undefined;
                } else if (typeof optionsOrMaxPageSizeOrCallback === 'number') {
                    maxPageSize = optionsOrMaxPageSizeOrCallback;
                    if (typeof maxPageSizeOrSuccessCallback === 'function') {
                        successCallback = maxPageSizeOrSuccessCallback;
                        errorCallback = successCallback;
                    }
                }
            } else {
                entityLogicalName = entityLogicalNameOrOptions;
                options = optionsOrMaxPageSizeOrCallback;
                if (typeof maxPageSizeOrSuccessCallback === 'function') {
                    errorCallback = successCallback;
                    successCallback = maxPageSizeOrSuccessCallback;
                    maxPageSize = undefined;
                } else if (typeof maxPageSizeOrSuccessCallback === 'number') {
                    maxPageSize = maxPageSizeOrSuccessCallback;
                }
            }
            const promise = getWebApi?.retrieveMultipleRecords(entityLogicalName, options, maxPageSize).then(result => {
                if (result.entities && result.entities.length > 0) {
                    return result.entities.map(entity =>
                        typeof apiConstructorOrFactory === 'function' && apiConstructorOrFactory.prototype
                            ? new apiConstructorOrFactory(entity)
                            : apiConstructorOrFactory(entity)
                    );
                }
                return [];
            });
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        obj.RetrieveRecord = function (apiConstructorOrFactory, entityLogicalName, id, options, successCallback, errorCallback) {
            if (typeof options === 'function') {
                errorCallback = successCallback;
                successCallback = options;
                options = "?$select=*";
            }
            if (!options) {
                options = "?$select=*";
            }
            const promise = getWebApi?.retrieveRecord(entityLogicalName, id, options).then(result => {
                return typeof apiConstructorOrFactory === 'function' && apiConstructorOrFactory.prototype
                    ? new apiConstructorOrFactory(result)
                    : apiConstructorOrFactory(result);
            });
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        getter(obj, 'Online', () => {
            const online = {};
            online.Execute = function (request, successCallback, errorCallback) {
                const promise = getOnline?.execute(request);
                if (successCallback) {
                    promise?.then(successCallback, errorCallback);
                } else {
                    return promise;
                }
            };
            online.ExecuteMultiple = function (requests, successCallback, errorCallback) {
                const promise = getOnline?.executeMultiple(requests);
                if (successCallback) {
                    promise?.then(successCallback, errorCallback);
                } else {
                    return promise;
                }
            };
            return online;
        });
        getter(obj, 'Offline', () => {
            const offline = {};
            offline.IsAvailable = entityLogicalName => getOffline?.isAvailable(entityLogicalName);
            return offline;
        });
        return obj;
    }
    function loadCopilot() {
        const obj = {};
        const getCopilot = Xrm?.Copilot;
        obj.ExecuteEvent = function (eventName, eventParameters, successCallback, errorCallback) {
            const promise = getCopilot?.executeEvent(eventName, eventParameters);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        obj.ExecutePrompt = function (promptText, successCallback, errorCallback) {
            const promise = getCopilot?.executePrompt(promptText);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        return obj;
    }
    function loadExecutionContext(executionContext) {
        const obj = {};
        getter(obj, 'Depth', () => executionContext?.getDepth());
        getter(obj, 'EntityReference', () => executionContext?.getEventArgs()?.getEntityReference());
        getter(obj, 'EventArgs', () => executionContext?.getEventArgs());
        getter(obj, 'EventSource', () => executionContext?.getEventSource());
        getter(obj, 'FormContext', () => executionContext?.getFormContext());
        getter(obj, 'IsSaveSuccess', () => executionContext?.getEventArgs()?.getIsSaveSuccess());
        getter(obj, 'SaveErrorInfo', () => executionContext?.getEventArgs()?.getSaveErrorInfo());
        getter(obj, 'SaveMode', () => executionContext?.getEventArgs()?.getSaveMode());
        obj.DisableAsyncTimeout = () => executionContext?.getEventArgs()?.disableAsyncTimeout();
        obj.GetSharedVariable = key => executionContext?.getSharedVariable(key);
        obj.IsDefaultPrevented = () => executionContext?.getEventArgs()?.isDefaultPrevented();
        obj.IsInitialLoad = () => executionContext?.getEventArgs()?.getDataLoadState() === 1;
        obj.SetPreventDefault = () => executionContext?.getEventArgs()?.preventDefault();
        obj.SetPreventDefaultOnError = () => executionContext?.getEventArgs()?.preventDefaultOnError();
        obj.SetSharedVariable = (key, value) => executionContext?.setSharedVariable(key, value);
        return obj;
    }
    function loadSidePanes() {
        const obj = {};
        getterSetter(obj, 'DisplayState', () => Xrm?.App?.sidePanes?.state, value => { Xrm.App.sidePanes.state = value; });
        obj.Create = function (paneOptions, successCallback, errorCallback) {
            const promise = Xrm?.App?.sidePanes?.createPane(paneOptions);
            if (successCallback) promise?.then(successCallback, errorCallback);
            else return promise;
        };
        obj.Get = paneId => Xrm?.App?.sidePanes?.getPane(paneId);
        obj.GetAll = () => Xrm?.App?.sidePanes?.getAllPanes();
        obj.GetSelected = () => Xrm?.App?.sidePanes?.getSelectedPane();
        return obj;
    }
    function loadFormQuickView(formContext, fields) {
        const obj = {};
        const hasGetControl = typeof formContext?.getControl === 'function';
        const fieldsLength = fields?.length || 0;
        for (let i = 0; i < fieldsLength; i++) {
            const field = fields[i];
            let attribute = formContext?.data?.attributes?.get(field);
            const control = hasGetControl ? formContext.getControl(field) : null;
            if (!attribute && control) {
                attribute = control.getAttribute?.();
            }
            obj[field] = {};
            loadField(formContext, obj[field], attribute, control);
        }
        obj.Close = () => formContext?.ui?.close();
        return obj;
    }
    function loadDialogFormBase(executionContext, dialog, defaultWebResourceName) {
        const obj = {};
        const formContext = executionContext?.getFormContext?.() ?? executionContext ?? null;
        const contextUi = formContext?.ui;
        obj.Close = () => contextUi?.close();
        obj.Dialog = dialog?.length > 0 ? loadFormQuickView(formContext, dialog) : {};
        obj.Utility = loadUtility(defaultWebResourceName);
        return obj;
    }
    function loadFormV2(executionContext, defaultWebResourceName, formConfig) {
        const formContext = executionContext?.getFormContext?.() ?? executionContext ?? null;
        const { body = [], tab = [], header = [], bpf = [], quick = [], grid = [], navigation = [], dialog = [] } = formConfig;
        const form = loadForm(formContext);
        form.Body = loadBody(formContext, body, tab);
        form.Header = loadFields(formContext, header, 'header_');
        form.Process = loadProcess(formContext, bpf);
        form.QuickForm = loadQuickForms(formContext, quick);
        form.Grid = loadGrids(formContext, grid);
        form.Navigation = loadNavigations(formContext, navigation);
        form.Dialog = loadFormQuickView(formContext, dialog);
        form.Utility = loadUtility(defaultWebResourceName);
        form.ExecutionContext = loadExecutionContext(executionContext);
        form.SidePanes = loadSidePanes();
        form.WebApi = loadWebApi();
        form.Copilot = loadCopilot();
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
        LoadWebApi: loadWebApi,
        LoadCopilot: loadCopilot,
        LoadExecutionContext: loadExecutionContext,
        LoadFormDialog: loadDialogFormBase,
        LoadSidePanes: loadSidePanes,
        LoadFormV2: loadFormV2
    }
})();
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
    OptionSet.AdvancedConfigSetting = Object.freeze({ MaxChildIncidentNumber: 'MaxChildIncidentNumber', MaxIncidentMergeNumber: 'MaxIncidentMergeNumber' });
    OptionSet.ClientName = Object.freeze({ Web: 'Web', Outlook: 'Outlook', Mobile: 'Mobile' });
    OptionSet.ClientState = Object.freeze({ Online: 'Online', Offline: 'Offline' });
    OptionSet.FieldAttributeType = Object.freeze({ Boolean: 'boolean', DateTime: 'datetime', Decimal: 'decimal', Double: 'double', Integer: 'integer', Lookup: 'lookup', Memo: 'memo', Money: 'money', MultiOptionSet: 'multiselectoptionset', OptionSet: 'optionset', String: 'string' });
    OptionSet.FieldControlType = Object.freeze({ Standard: 'standard', Iframe: 'iframe', KbSearch: 'kbsearch', Lookup: 'lookup', MultiSelectOptionset: 'multiselectoptionset', Notes: 'notes', OptionSet: 'optionset', QuickForm: 'quickform', SubGrid: 'subgrid', TimerControl: 'timercontrol', TimelineWall: 'timelinewall', WebResource: 'webresource' });
    OptionSet.FieldFormat = Object.freeze({ Date: 'date', DateTime: 'datetime', Duration: 'duration', Email: 'email', Language: 'language', None: 'none', TextArea: 'textarea', Text: 'text', TickerSymbol: 'tickersymbol', Phone: 'phone', TimeZone: 'timezone', Url: 'url' });
    OptionSet.FieldNotificationLevel = Object.freeze({ Error: 'ERROR', Recommendation: 'RECOMMENDATION' });
    OptionSet.FieldRequiredLevel = Object.freeze({ None: 'none', Required: 'required', Recommended: 'recommended' });
    OptionSet.FieldSubmitMode = Object.freeze({ Always: 'always', Never: 'never', Dirty: 'dirty' });
    OptionSet.FormFactor = Object.freeze({ Unknown: 0, Desktop: 1, Tablet: 2, Phone: 3 });
    OptionSet.FormNotificationLevel = Object.freeze({ Error: 'ERROR', Warning: 'WARNING', Info: 'INFO' });
    OptionSet.FormType = Object.freeze({ Undefined: 0, Create: 1, Update: 2, ReadOnly: 3, Disabled: 4, BulkEdit: 5 });
    OptionSet.FullNameConventionCode = Object.freeze({ LastName_Comma_FirstName: 0, FirstName_LastName: 1, LastName_Comma_FirstName_MiddleInitial: 2, FirstName_MiddleInitial_LastName: 3, LastName_Comma_FirstName_MiddleName: 4, FirstName_MiddleName_LastName: 5, LastName_FirstName: 6, LastNameFirstName: 7 });
    OptionSet.GridType = Object.freeze({ HomePageGrid: 1, Subgrid: 2 });
    OptionSet.OpenFileOption = Object.freeze({ Open: 1, Save: 2 });
    OptionSet.ProcessCategory = Object.freeze({ Qualify: 0, Develop: 1, Propose: 2, Close: 3, Identify: 4, Research: 5, Resolve: 6 });
    OptionSet.ProcessDisplayState = Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed', Floating: 'floating' });
    OptionSet.ProcessStageStatus = Object.freeze({ Active: 'active', Inactive: 'inactive' });
    OptionSet.ProcessStatus = Object.freeze({ Active: 'active', Aborted: 'aborted', Finished: 'finished' });
    OptionSet.SaveMode = Object.freeze({ Save: 1, SaveAndClose: 2, Deactivate: 5, Reactivate: 6, Email: 7, Disqualify: 15, Qualify: 16, Assign: 47, SaveAsCompleted: 58, SaveAndNew: 59, AutoSave: 70 });
    OptionSet.SaveOption = Object.freeze({ SaveAndClose: 'saveandclose', SaveAndNew: 'saveandnew' });
    OptionSet.SidePaneState = Object.freeze({ Collapsed: 0, Expanded: 1 });
    OptionSet.TabContentType = Object.freeze({ CardSections: 'cardSections', SingleComponent: 'singleComponent' });
    OptionSet.TabDisplayState = Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed' });
    OptionSet.TimerState = Object.freeze({ NotSet: 1, InProgress: 2, Warning: 3, Violated: 4, Success: 5, Expired: 6, Canceled: 7, Paused: 8 });
})(OptionSet || (OptionSet = /** @type {any} */ ({})));

'use strict';
const devKit = (function () {
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
        const form = {};
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
        getter(form, 'Attributes', () => contextDataEntity?.attributes);
        getter(form, 'Controls', () => contextUi?.controls);
        getter(form, 'DataIsDirty', () => contextData?.getIsDirty());
        getter(form, 'DataIsValid', () => contextData?.isValid());
        getter(form, 'DataXml', () => contextDataEntity?.getDataXml());
        getter(form, 'EntityId', () => contextDataEntity?.getId());
        getter(form, 'EntityIsDirty', () => contextDataEntity?.getIsDirty());
        getter(form, 'EntityIsValid', () => contextDataEntity?.isValid());
        getter(form, 'EntityName', () => contextDataEntity?.getEntityName());
        getter(form, 'EntityReference', () => contextDataEntity?.getEntityReference());
        getter(form, 'FormId', () => contextUiFormSelector?.getCurrentItem()?.getId());
        getter(form, 'FormLabel', () => contextUiFormSelector?.getCurrentItem()?.getLabel());
        getter(form, 'FormType', () => contextUi?.getFormType());
        getter(form, 'PrimaryAttributeValue', () => contextDataEntity?.getPrimaryAttributeValue());
        getter(form, 'ViewPortHeight', () => contextUi?.getViewPortHeight());
        getter(form, 'ViewPortWidth', () => contextUi?.getViewPortWidth());
        form.AddOnPostSave = callback => contextDataEntity?.addOnPostSave(callback);
        form.AddOnSave = callback => contextDataEntity?.addOnSave(callback);
        form.ClearFormNotification = uniqueId => contextUi?.clearFormNotification(uniqueId);
        form.Close = () => contextUi?.close();
        form.DataAddOnLoad = callback => contextData?.addOnLoad(callback);
        form.DataRemoveOnLoad = callback => contextData?.removeOnLoad(callback);
        form.FormIsVisible = formId => { return findFormItem(item => item.getId(), formId)?.getVisible(); }
        form.FormNavigateToFormId = formId => { findFormItem(item => item.getId(), formId)?.navigate(); };
        form.FormNavigateToFormLabel = formLabel => { findFormItem(item => item.getLabel(), formLabel)?.navigate(); };
        form.FormSetVisible = (formId, value) => { findFormItem(item => item.getId(), formId)?.setVisible(value); }
        form.Refresh = (save, successCallback, errorCallback) => contextData?.refresh(save)?.then(successCallback, errorCallback);
        form.RefreshRibbon = refreshAll => contextUi?.refreshRibbon(refreshAll);
        form.RemoveOnPostSave = callback => contextDataEntity?.removeOnPostSave(callback);
        form.RemoveOnSave = callback => contextDataEntity?.removeOnSave(callback);
        form.Save = (saveOptions, successCallback, errorCallback) => contextData?.save(saveOptions)?.then(successCallback, errorCallback);
        form.SetFormEntityName = arg => contextUi?.setFormEntityName(arg);
        form.SetFormNotification = (message, level, uniqueId) => contextUi?.setFormNotification(message, level, uniqueId);
        form.UiAddLoaded = callback => contextUi?.addLoaded(callback);
        form.UiAddOnLoad = callback => contextUi?.addOnLoad(callback);
        form.UiRemoveLoaded = callback => contextUi?.removeLoaded(callback);
        form.UiRemoveOnLoad = callback => contextUi?.removeOnLoad(callback);
        return form;
    }
    function loadProcess(formContext) {
        const process = {};
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
        getter(process, 'ActivePath', () => {
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
        getter(process, 'ActiveProcess', () => loadProcessInner(getProcess?.getActiveProcess()));
        getter(process, 'ActiveStage', () => loadStage(getProcess?.getActiveStage()));
        getter(process, 'InstanceId', () => getProcess?.getInstanceId());
        getter(process, 'InstanceName', () => getProcess?.getInstanceName());
        getter(process, 'SelectedStage', () => loadStage(getProcess?.getSelectedStage()));
        getterSetter(process, 'DisplayState', () => getProcessUi?.getDisplayState(), value => { getProcessUi?.setDisplayState(value); });
        getterSetter(process, 'Status', () => getProcess?.getStatus(), value => { getProcess?.setStatus(value); });
        getterSetter(process, 'Visible', () => getProcessUi?.getVisible(), value => { getProcessUi?.setVisible(value); });
        process.AddOnPreProcessStatusChange = callback => getProcess?.addOnPreProcessStatusChange(callback);
        process.AddOnPreStageChange = callback => getProcess?.addOnPreStageChange(callback);
        process.AddOnProcessStatusChange = callback => getProcess?.addOnProcessStatusChange(callback);
        process.AddOnStageChange = callback => getProcess?.addOnStageChange(callback);
        process.AddOnStageSelected = callback => getProcess?.addOnStageSelected(callback);
        process.EnabledProcesses = callback => {
            getProcess?.getEnabledProcesses(enabledProcesses => {
                const processes = [];
                for (const processId in enabledProcesses) {
                    processes.push({ ProcessId: processId, ProcessName: enabledProcesses[processId] });
                }
                callback(processes);
            });
        };
        process.MoveNext = callback => getProcess?.moveNext(callback);
        process.MovePrevious = callback => getProcess?.movePrevious(callback);
        process.ProcessInstances = callback => {
            getProcess?.getProcessInstances(processInstances => {
                const processes = [];
                for (const processId in processInstances) {
                    const process = processInstances[processId];
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
        process.Reflow = (updateUi, parentStage, nextStage) => getProcessUi?.reflow(updateUi, parentStage, nextStage);
        process.RemoveOnPreProcessStatusChange = callback => getProcess?.removeOnPreProcessStatusChange(callback);
        process.RemoveOnPreStageChange = callback => getProcess?.removeOnPreStageChange(callback);
        process.RemoveOnProcessStatusChange = callback => getProcess?.removeOnProcessStatusChange(callback);
        process.RemoveOnStageChange = callback => getProcess?.removeOnStageChange(callback);
        process.RemoveOnStageSelected = callback => getProcess?.removeOnStageSelected(callback);
        process.SetActiveProcess = (processId, callback) => getProcess?.setActiveProcess(processId, callback);
        process.SetActiveProcessInstance = (processInstanceId, callback) => getProcess?.setActiveProcessInstance(processInstanceId, callback);
        process.SetActiveStage = (stageId, callback) => getProcess?.setActiveStage(stageId, callback);
        return process;
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
        field.ContentWindow = (successCallback, errorCallback) => control?.getContentWindow()?.then(successCallback, errorCallback);
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
    function loadFields(formContext, body, type) {
        for (const field in body) {
            const logicalName = type === undefined ? field?.toLowerCase() : (type + field)?.toLowerCase();
            const control = formContext?.getControl(logicalName) ?? formContext?.getControl(field); let attribute = formContext?.getAttribute(logicalName);
            if (!attribute && control?.getAttribute) {
                attribute = control.getAttribute();
            }
            loadField(formContext, body[field], attribute, control);
        }
        if (type === "header_") {
            const getHeaderSection = formContext?.ui?.headerSection;
            getterSetter(body, 'BodyVisible', () => getHeaderSection?.getBodyVisible(), value => { getHeaderSection?.setBodyVisible(value); });
            getterSetter(body, 'CommandBarVisible', () => getHeaderSection?.getCommandBarVisible(), value => { getHeaderSection?.setCommandBarVisible(value); });
            getterSetter(body, 'TabNavigatorVisible', () => getHeaderSection?.getTabNavigatorVisible(), value => { getHeaderSection?.setTabNavigatorVisible(value); });
        }
        return body;
    }
    function loadTabs(formContext, tabs) {
        const loadSection = (formContext, tab, sections, section) => {
            const tabObject = formContext?.ui?.tabs?.get(tab);
            const sectionObject = tabObject?.sections?.get(section);
            getter(sections[section], 'Name', () => sectionObject?.getName());
            getter(sections[section], 'Parent', () => sectionObject?.getParent());
            getterSetter(sections[section], 'Label', () => sectionObject?.getLabel(), value => sectionObject?.setLabel(value));
            getterSetter(sections[section], 'Visible', () => sectionObject?.getVisible(), value => sectionObject?.setVisible(value));
        }
        const loadTab = (formContext, tabs, tab) => {
            const tabObject = formContext?.ui?.tabs?.get(tab);
            getter(tabs[tab], 'Name', () => tabObject?.getName());
            getter(tabs[tab], 'Parent', () => tabObject?.getParent());
            getterSetter(tabs[tab], 'ContentType', () => tabObject?.getContentType(), value => { tabObject?.setContentType(value); });
            getterSetter(tabs[tab], 'DisplayState', () => tabObject?.getDisplayState(), value => { tabObject?.setDisplayState(value); });
            getterSetter(tabs[tab], 'Label', () => tabObject?.getLabel(), value => { tabObject?.setLabel(value); });
            getterSetter(tabs[tab], 'Visible', () => tabObject?.getVisible(), value => { tabObject?.setVisible(value); });
            tabs[tab].AddTabStateChange = callback => tabObject?.addTabStateChange(callback);
            tabs[tab].Focus = () => tabObject?.setFocus();
            tabs[tab].RemoveTabStateChange = callback => tabObject?.removeTabStateChange(callback);
            for (const section in tabs[tab].Section) {
                loadSection(formContext, tab, tabs[tab].Section, section);
            }
        }
        for (const tab in tabs) {
            loadTab(formContext, tabs, tab);
        }
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
            getter(navigations[navigation], 'Id', () => navigationItem?.getId());
            getterSetter(navigations[navigation], 'Label', () => navigationItem?.getLabel(), value => navigationItem?.setLabel(value));
            getterSetter(navigations[navigation], 'Visible', () => navigationItem?.getVisible(), value => navigationItem?.setVisible(value));
            navigations[navigation].Focus = () => navigationItem?.setFocus();
        }
        for (const navigation in navigations) {
            loadNavigation(formContext, navigations, navigation);
        }
    }
    function loadQuickForms(formContext, quickForms) {
        const excludedFields = new Set([ "Body", "Controls", "IsLoaded", "Refresh", "Focus", "ControlType", "Disabled", "Label", "ControlName", "ControlParent", "Visible" ]);
        const loadQuickForm = (formContext, quickForms, quickForm) => {
            const fields = Object.keys(quickForms[quickForm]).filter(field => !excludedFields.has(field));
            const quick = formContext?.ui?.quickForms?.get(quickForm);
            getter(quickForms[quickForm], 'Body', () => loadFormDialog(quick, fields));
            getter(quickForms[quickForm], 'ControlName', () => quick?.getName());
            getter(quickForms[quickForm], 'ControlParent', () => quick?.getParent());
            getter(quickForms[quickForm], 'ControlType', () => quick?.getControlType());
            getterSetter(quickForms[quickForm], 'Disabled', () => quick?.getDisabled(), value => { quick?.setDisabled(value); });
            getterSetter(quickForms[quickForm], 'Label', () => quick?.getLabel(), value => { quick?.setLabel(value); });
            getterSetter(quickForms[quickForm], 'Visible', () => quick?.getVisible(), value => { quick?.setVisible(value); });
            quickForms[quickForm].Controls = arg => quick?.getControl(arg);
            quickForms[quickForm].Focus = () => quick?.setFocus();
            quickForms[quickForm].IsLoaded = () => quick?.isLoaded();
            quickForms[quickForm].Refresh = () => quick?.refresh();
        }
        for (const quickForm in quickForms) {
            loadQuickForm(formContext, quickForms, quickForm);
        }
    }
    function loadGrids(formContext, grids) {
        const loadGridRow = row => {
            const obj = {};
            getter(obj, 'Columns', () => {
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
            getter(obj, 'EntityId', () => row?.data?.entity?.getId());
            getter(obj, 'EntityName', () => row?.data?.entity?.getEntityName());
            getter(obj, 'EntityReference', () => row?.data?.entity?.getEntityReference());
            getter(obj, 'PrimaryAttributeValue', () => row?.data?.entity?.getPrimaryAttributeValue());
            return obj;
        }
        const loadGridColumn = col => {
            const obj = {};
            getter(obj, 'Label', () => col?.controls?.get(0)?.getLabel());
            getter(obj, 'Name', () => col?.getName());
            getterSetter(obj, 'Disabled', () => col?.controls?.get(0)?.getDisabled(), value => { col?.controls?.get(0)?.setDisabled(value); });
            getterSetter(obj, 'RequiredLevel', () => col?.getRequiredLevel(), value => { col?.setRequiredLevel(value); });
            getterSetter(obj, 'Value', () => col?.getValue(), value => { col?.setValue(value); });
            obj.ClearNotification = uniqueId => col?.controls?.get(0)?.clearNotification(uniqueId);
            obj.SetNotification = (message, uniqueId) => col?.controls?.get(0)?.setNotification(message, uniqueId);
            return obj;
        }
        const loadGrid = (formContext, grids, grid) => {
            const gridControl = formContext?.getControl(grid);
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
            getter(grids[grid], 'EntityName', () => gridControl?.getEntityName());
            getter(grids[grid], 'FetchXml', () => gridControl?.getFetchXml());
            getter(grids[grid], 'GridType', () => gridControl?.getGridType());
            getter(grids[grid], 'Relationship', () => gridControl?.getRelationship());
            getter(grids[grid], 'Rows', () => {
                const gridInstance = formContext?.getControl(grid)?.getGrid();
                return createCollectionObject(
                    () => gridInstance?.getRows(),
                    row => loadGridRow(row)
                );
            });
            getter(grids[grid], 'SelectedRows', () => {
                const gridInstance = formContext?.getControl(grid)?.getGrid();
                return createCollectionObject(
                    () => gridInstance?.getSelectedRows(),
                    row => loadGridRow(row?.getData())
                );
            });
            getter(grids[grid], 'TotalRecordCount', () => gridControl?.getGrid()?.getTotalRecordCount());
            getter(grids[grid], 'ViewSelector', () => {
                const viewSelector = gridControl?.getViewSelector();
                const obj = {};
                getter(obj, 'Visible', () => viewSelector?.isVisible());
                getterSetter(obj, 'CurrentView', () => viewSelector?.getCurrentView(), value => viewSelector?.setCurrentView(value));
                return obj;
            });
            getterSetter(grids[grid], 'Visible', () => gridControl?.getVisible(), value => { gridControl?.setVisible(value); });
            grids[grid].AddOnLoad = callback => gridControl?.addOnLoad(callback);
            grids[grid].OpenRelatedGrid = () => gridControl?.openRelatedGrid();
            grids[grid].Refresh = () => gridControl?.refresh();
            grids[grid].RefreshRibbon = () => gridControl?.refreshRibbon();
            grids[grid].RemoveOnLoad = callback => gridControl?.removeOnLoad(callback);
            grids[grid].Url = client => gridControl?.getUrl(client);
        }
        for (const grid in grids) {
            loadGrid(formContext, grids, grid);
        }
    }
    function loadUtility(defaultWebResourceName) {
        const utility = {};
        const getApp = Xrm?.App;
        const getDevice = Xrm?.Device;
        const getEncoding = Xrm?.Encoding;
        const getGlobalContext = Xrm?.Utility?.getGlobalContext();
        const getNavigation = Xrm?.Navigation;
        const getPanel = Xrm?.Panel;
        const getUtility = Xrm?.Utility;
        getter(utility, 'Client', () => {
            const obj = {};
            const client = getGlobalContext?.client;
            getter(obj, 'ClientName', () => client?.getClient());
            getter(obj, 'ClientState', () => client?.getClientState());
            getter(obj, 'FormFactor', () => client?.getFormFactor());
            getter(obj, 'IsNetworkAvailable', () => client?.isNetworkAvailable());
            getter(obj, 'IsOffline', () => client?.isOffline());
            return obj;
        });
        getter(utility, 'ClientUrl', () => getGlobalContext?.getClientUrl());
        getter(utility, 'CurrentAppUrl', () => getGlobalContext?.getCurrentAppUrl());
        getter(utility, 'IsOnPremises', () => getGlobalContext?.isOnPremises());
        getter(utility, 'LearningPathAttributeName', () => getUtility?.getLearningPathAttributeName());
        getter(utility, 'OrganizationSettings', () => {
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
        getter(utility, 'PageContext', () => getUtility?.getPageContext());
        getter(utility, 'UserSettings', () => {
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
        getter(utility, 'Version', () => getGlobalContext?.getVersion());
        utility.AddGlobalNotification = function (notification, successCallback, errorCallback) { getApp?.addGlobalNotification(notification)?.then(successCallback, errorCallback); };
        utility.AdvancedConfigSetting = setting => getGlobalContext?.getAdvancedConfigSetting(setting);
        utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) { getUtility?.getAllowedStatusTransitions(entityName, stateCode)?.then(successCallback, errorCallback); };
        utility.BarcodeValue = function (successCallback, errorCallback) { getDevice?.getBarcodeValue()?.then(successCallback, errorCallback); };
        utility.CaptureAudio = function (successCallback, errorCallback) { getDevice?.captureAudio()?.then(successCallback, errorCallback); };
        utility.CaptureImage = function (imageOptions, successCallback, errorCallback) { getDevice?.captureImage(imageOptions)?.then(successCallback, errorCallback); };
        utility.CaptureVideo = function (successCallback, errorCallback) { getDevice?.captureVideo()?.then(successCallback, errorCallback); };
        utility.ClearGlobalNotification = function (uniqueId, successCallback, errorCallback) { getApp?.clearGlobalNotification(uniqueId)?.then(successCallback, errorCallback); };
        utility.CloseProgressIndicator = () => getUtility?.closeProgressIndicator();
        utility.CurrentAppName = function (successCallback, errorCallback) { getGlobalContext?.getCurrentAppName()?.then(successCallback, errorCallback); }
        utility.CurrentAppProperties = function (successCallback, errorCallback) { getGlobalContext?.getCurrentAppProperties()?.then(successCallback, errorCallback); };
        utility.CurrentPosition = function (successCallback, errorCallback) { getDevice?.getCurrentPosition()?.then(successCallback, errorCallback); };
        utility.EntityMainFormDescriptor = (entityName, formId) => getUtility?.getEntityMainFormDescriptor(entityName, formId);
        utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) { getUtility?.getEntityMetadata(entityName, attributes)?.then(successCallback, errorCallback); };
        utility.HtmlAttributeEncode = arg => getEncoding?.htmlAttributeEncode(arg);
        utility.HtmlDecode = arg => getEncoding?.htmlDecode(arg);
        utility.HtmlEncode = arg => getEncoding?.htmlEncode(arg);
        utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) { getUtility?.invokeProcessAction(name, parameters)?.then(successCallback, errorCallback); };
        utility.LoadPanel = (url, title) => getPanel?.loadPanel(url, title);
        utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) { getUtility?.lookupObjects(lookupOptions)?.then(successCallback, errorCallback); };
        utility.NavigateTo = function (pageInput, navigationOptions, successCallback, errorCallback) { getNavigation?.navigateTo(pageInput, navigationOptions)?.then(successCallback, errorCallback); };
        utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) { getNavigation?.openAlertDialog(alertStrings, alertOptions)?.then(closeCallback, errorCallback); };
        utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) { getNavigation?.openConfirmDialog(confirmStrings, confirmOptions)?.then(successCallback, errorCallback); };
        utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) { getNavigation?.openErrorDialog(errorOptions)?.then(successCallback, errorCallback); };
        utility.OpenFile = (file, openFileOptions) => getNavigation?.openFile(file, openFileOptions);
        utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) { getNavigation?.openForm(entityFormOptions, formParameters)?.then(successCallback, errorCallback); };
        utility.OpenUrl = (url, openUrlOptions) => getNavigation?.openUrl(url, openUrlOptions);
        utility.OpenWebResource = (webResourceName, windowOptions, data) => getNavigation?.openWebResource(webResourceName, windowOptions, data);
        utility.PickFile = function (pickFileOptions, successCallback, errorCallback) { getDevice?.pickFile(pickFileOptions)?.then(successCallback, errorCallback); };
        utility.PrependOrgName = sPath => getGlobalContext?.prependOrgName(sPath);
        utility.RefreshParentGrid = lookupOptions => getUtility?.refreshParentGrid(lookupOptions);
        utility.Resource = key => getUtility?.getResourceString(defaultWebResourceName, key);
        utility.ResourceString = (webResourceName, key) => getUtility?.getResourceString(webResourceName, key);
        utility.ShowProgressIndicator = message => getUtility?.showProgressIndicator(message);
        utility.WebResourceUrl = webResourceName => getGlobalContext?.getWebResourceUrl(webResourceName);
        utility.XmlAttributeEncode = arg => getEncoding?.xmlAttributeEncode(arg);
        utility.XmlEncode = arg => getEncoding?.xmlEncode(arg);
        return utility;
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
        const sidePanes = {};
        getterSetter(sidePanes, 'DisplayState', () => Xrm?.App?.sidePanes?.state, value => { Xrm.App.sidePanes.state = value; });
        sidePanes.Create = function (paneOptions, successCallback) { Xrm?.App?.sidePanes?.createPane(paneOptions)?.then(successCallback); };
        sidePanes.Get = paneId => Xrm?.App?.sidePanes?.getPane(paneId);
        sidePanes.GetAll = () => Xrm?.App?.sidePanes?.getAllPanes();
        sidePanes.GetSelected = () => Xrm?.App?.sidePanes?.getSelectedPane();
        return sidePanes;
    }
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
        LoadFormDialog: loadFormDialog    }
})();
let OptionSet;
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
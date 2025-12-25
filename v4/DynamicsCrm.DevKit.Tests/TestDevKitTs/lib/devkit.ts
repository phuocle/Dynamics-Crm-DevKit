function getXrm(): typeof Xrm | undefined {
    if (typeof window !== 'undefined' && (window as any).Xrm !== undefined) {
        return (window as any).Xrm;
    }
    if (typeof parent !== 'undefined' && typeof parent.window !== 'undefined' && (parent.window as any).Xrm !== undefined) {
        return (parent.window as any).Xrm;
    }
    if (typeof parent !== 'undefined' && typeof parent.parent !== 'undefined' && typeof parent.parent.window !== 'undefined' && (parent.parent.window as any).Xrm !== undefined) {
        return (parent.parent.window as any).Xrm;
    }
    return undefined;
}
function getter<T>(obj: any, prop: string, getterFn: () => T): void {
    Object.defineProperty(obj, prop, {
        get: getterFn,
        enumerable: true,
        configurable: true
    });
}
function getterSetter<T>(obj: any, prop: string, getterFn: () => T, setterFn: (value: T) => void): void {
    Object.defineProperty(obj, prop, {
        get: getterFn,
        set: setterFn,
        enumerable: true,
        configurable: true
    });
}
function loadField(formContext: any, field: any, attribute: any, control: any): void {
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
    getterSetter(field, 'Data', () => control?.getData(), (value: any) => { control?.setData(value); });
    getterSetter(field, 'DefaultView', () => control?.getDefaultView(), (value: any) => { control?.setDefaultView(value); });
    getterSetter(field, 'Disabled', () => control?.getDisabled(), (value: boolean) => {
        if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
        control?.setDisabled(value);
    });
    getterSetter(field, 'EntityTypes', () => control?.getEntityTypes(), (value: any) => { control?.setEntityTypes(value); });
    getterSetter(field, 'Label', () => control?.getLabel(), (value: string) => { control?.setLabel(value); });
    getterSetter(field, 'Precision', () => attribute?.getPrecision(), (value: number) => { attribute?.setPrecision(value); });
    getterSetter(field, 'RequiredLevel', () => attribute?.getRequiredLevel(), (value: string) => { attribute?.setRequiredLevel(value); });
    getterSetter(field, 'SearchQuery', () => control?.getSearchQuery(), (value: string) => { control?.setSearchQuery(value); });
    getterSetter(field, 'ShowTime', () => control?.getShowTime(), (value: boolean) => { control?.setShowTime(value); });
    getterSetter(field, 'Src', () => control?.getSrc(), (value: string) => { control?.setSrc(value); });
    getterSetter(field, 'SubmitMode', () => attribute?.getSubmitMode(), (value: string) => { attribute?.setSubmitMode(value); });
    getterSetter(field, 'Value', () => attribute?.getValue(), (value: any) => {
        if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
        attribute?.setValue(value);
    });
    getterSetter(field, 'Visible', () => control?.getVisible(), (value: boolean) => { control?.setVisible(value); });
    field.AddCustomFilter = (filter: string, entityLogicaName?: string) => control?.addCustomFilter(filter, entityLogicaName);
    field.AddCustomView = (viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean) => control?.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
    field.AddLookupTagClick = (callback: any) => control?.addOnLookupTagClick(callback);
    field.AddNotification = (message: string, notificationLevel: string, uniqueId: string, callback?: any) => {
        const actions = { message: message, actions: [callback] };
        const notification = { messages: [message], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
        return control?.addNotification(notification);
    };
    field.AddOnChange = (callback: any) => attribute?.addOnChange(callback);
    field.AddOnOutputChange = (callback: any) => control?.addOnOutputChange(callback);
    field.AddOption = (text: string, value: number, index?: number) => control?.addOption({ text: text, value: value }, index);
    field.AddPostSearch = (callback: any) => control?.addOnPostSearch(callback);
    field.AddPreSearch = (callback: any) => control?.addPreSearch(callback);
    field.AddResultOpened = (callback: any) => control?.addOnResultOpened(callback);
    field.AddSelection = (callback: any) => control?.addOnSelection(callback);
    field.ClearNotification = (uniqueId: string) => control?.clearNotification(uniqueId);
    field.ClearOptions = () => control?.clearOptions();
    field.ContentWindow = (successCallback?: any, errorCallback?: any) => {
        const promise = control?.getContentWindow();
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    field.FireOnChange = () => attribute?.fireOnChange();
    field.Focus = () => control?.setFocus();
    field.OpenSearchResult = (resultNumber: number, mode?: string) => control?.openSearchResult(resultNumber, mode);
    field.Option = (value: number | string) => attribute?.getOption(value);
    field.Refresh = () => control?.refresh();
    field.RemoveLookupTagClick = (callback: any) => control?.removeOnLookupTagClick(callback);
    field.RemoveOnChange = (callback: any) => attribute?.removeOnChange(callback);
    field.RemoveOnOutputChange = (callback: any) => control?.removeOnOutputChange(callback);
    field.RemoveOption = (value: number) => control?.removeOption(value);
    field.RemovePostSearch = (callback: any) => control?.removeOnPostSearch(callback);
    field.RemovePreSearch = (callback: any) => control?.removePreSearch(callback);
    field.RemoveResultOpened = (callback: any) => control?.removeOnResultOpened(callback);
    field.RemoveSelection = (callback: any) => control?.removeOnSelection(callback);
    field.SetIsValid = (valid: boolean, message?: string) => attribute?.setIsValid(valid, message);
    field.SetNotification = (message: string, uniqueId: string) => control?.setNotification(message, uniqueId);
}
// Helper: find control by name using attribute.controls (works for lazy-loaded tabs)
function findControlFromAttribute(attribute: any, controlName: string): any {
    let foundControl: any = null;
    const lowerName = controlName?.toLowerCase();
    attribute?.controls?.forEach((ctrl: any) => {
        if (ctrl?.getName()?.toLowerCase() === lowerName) {
            foundControl = ctrl;
        }
    });
    return foundControl;
}
function loadFields(formContext: any, fields: string[], type?: string): any {
    const body: any = {};
    fields.forEach(field => {
        body[field] = {};
        const logicalName = type === undefined ? field?.toLowerCase() : (type + field)?.toLowerCase();
        // Get control first (especially important for header_ type where control name has prefix)
        let control = formContext?.getControl(logicalName) ?? formContext?.getControl(field);
        // Get attribute: for header controls, get from control.getAttribute() since attribute name differs
        let attribute: any = null;
        if (type === "header_" && control) {
            // Header controls: attribute name is WITHOUT "header_" prefix, get from control
            attribute = control.getAttribute();
        } else {
            // Body controls: attribute name matches logical name
            attribute = formContext?.getAttribute(logicalName);
            // If no attribute, try base name for multi-control scenarios (OwnerId1 -> ownerid)
            if (!attribute) {
                const baseFieldName = field.replace(/\d+$/, '');
                if (baseFieldName !== field) {
                    const baseLogicalName = type === undefined ? baseFieldName?.toLowerCase() : (type + baseFieldName)?.toLowerCase();
                    attribute = formContext?.getAttribute(baseLogicalName);
                }
            }
        }
        // Fallback: if no control found, try attribute.controls (handles lazy-loaded tabs)
        if (!control && attribute) {
            control = findControlFromAttribute(attribute, logicalName) ?? findControlFromAttribute(attribute, field);
        }
        loadField(formContext, body[field], attribute, control);
    });
    if (type === "header_") {
        const getHeaderSection = formContext?.ui?.headerSection;
        getterSetter(body, 'BodyVisible', () => getHeaderSection?.getBodyVisible(), (value: any) => { getHeaderSection?.setBodyVisible(value); });
        getterSetter(body, 'CommandBarVisible', () => getHeaderSection?.getCommandBarVisible(), (value: any) => { getHeaderSection?.setCommandBarVisible(value); });
        getterSetter(body, 'TabNavigatorVisible', () => getHeaderSection?.getTabNavigatorVisible(), (value: any) => { getHeaderSection?.setTabNavigatorVisible(value); });
    }
    return body;
}
function loadTabs(formContext: any, tabItems: string[]): any {
    const tabs: any = {};
    tabItems.forEach((item: string) => {
        const [tabName, sectionName] = item.split('___');
        if (!tabs[tabName]) {
            tabs[tabName] = { Section: {} };
        }
        tabs[tabName].Section[sectionName] = {};
    });
    const loadSection = (formContext: any, tab: string, sections: any, section: string) => {
        const tabObject = formContext?.ui?.tabs?.get(tab);
        const sectionObject = tabObject?.sections?.get(section);
        getter(sections[section], 'Name', () => sectionObject?.getName());
        getter(sections[section], 'Parent', () => sectionObject?.getParent());
        getterSetter(sections[section], 'Label', () => sectionObject?.getLabel(), (value: any) => sectionObject?.setLabel(value));
        getterSetter(sections[section], 'Visible', () => sectionObject?.getVisible(), (value: any) => sectionObject?.setVisible(value));
    };
    const loadTab = (formContext: any, tabs: any, tab: string) => {
        const tabObject = formContext?.ui?.tabs?.get(tab);
        getter(tabs[tab], 'Name', () => tabObject?.getName());
        getter(tabs[tab], 'Parent', () => tabObject?.getParent());
        getterSetter(tabs[tab], 'ContentType', () => tabObject?.getContentType(), (value: any) => { tabObject?.setContentType(value); });
        getterSetter(tabs[tab], 'DisplayState', () => tabObject?.getDisplayState(), (value: any) => { tabObject?.setDisplayState(value); });
        getterSetter(tabs[tab], 'Label', () => tabObject?.getLabel(), (value: any) => { tabObject?.setLabel(value); });
        getterSetter(tabs[tab], 'Visible', () => tabObject?.getVisible(), (value: any) => { tabObject?.setVisible(value); });
        tabs[tab].AddTabStateChange = (callback: any) => tabObject?.addTabStateChange(callback);
        tabs[tab].Focus = () => tabObject?.setFocus();
        tabs[tab].RemoveTabStateChange = (callback: any) => tabObject?.removeTabStateChange(callback);
        Object.keys(tabs[tab].Section).forEach(section => {
            loadSection(formContext, tab, tabs[tab].Section, section);
        });
    };
    Object.keys(tabs).forEach(tab => {
        loadTab(formContext, tabs, tab);
    });
    return tabs;
}
function loadNavigations(formContext: any, navigationItems: string[]): any {
    const navigations: any = {};
    navigationItems.forEach((item: string) => navigations[item] = {});
    const getNavigationItem = (navigation: string) => {
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
    const loadNavigation = (formContext: any, navigations: any, navigation: string) => {
        const navigationItem = getNavigationItem(navigation);
        getter(navigations[navigation], 'Id', () => navigationItem?.getId());
        getterSetter(navigations[navigation], 'Label', () => navigationItem?.getLabel(), (value: any) => navigationItem?.setLabel(value));
        getterSetter(navigations[navigation], 'Visible', () => navigationItem?.getVisible(), (value: any) => navigationItem?.setVisible(value));
        navigations[navigation].Focus = () => navigationItem?.setFocus();
    };
    Object.keys(navigations).forEach(navigation => {
        loadNavigation(formContext, navigations, navigation);
    });
    return navigations;
}
function loadQuickForms(formContext: any, quickItems: string[]): any {
    const quickForms: any = {};
    quickItems.forEach((item: string) => {
        const [quickFormName, fieldName] = item.split('___');
        if (!quickForms[quickFormName]) {
            quickForms[quickFormName] = {};
        }
        if (fieldName) {
            quickForms[quickFormName][fieldName] = {};
        }
    });
    const excludedFields = new Set(["Body", "Controls", "IsLoaded", "Refresh", "Focus", "ControlType", "Disabled", "Label", "ControlName", "ControlParent", "Visible"]);
    const loadQuickForm = (formContext: any, quickForms: any, quickForm: string) => {
        const fields = Object.keys(quickForms[quickForm]).filter(field => !excludedFields.has(field));
        const quick = formContext?.ui?.quickForms?.get(quickForm);
        getter(quickForms[quickForm], 'Body', () => loadFormDialog(quick, fields));
        getter(quickForms[quickForm], 'ControlName', () => quick?.getName());
        getter(quickForms[quickForm], 'ControlParent', () => quick?.getParent());
        getter(quickForms[quickForm], 'ControlType', () => quick?.getControlType());
        getterSetter(quickForms[quickForm], 'Disabled', () => quick?.getDisabled(), (value: any) => { quick?.setDisabled(value); });
        getterSetter(quickForms[quickForm], 'Label', () => quick?.getLabel(), (value: any) => { quick?.setLabel(value); });
        getterSetter(quickForms[quickForm], 'Visible', () => quick?.getVisible(), (value: any) => { quick?.setVisible(value); });
        quickForms[quickForm].Controls = (arg: any) => quick?.getControl(arg);
        quickForms[quickForm].Focus = () => quick?.setFocus();
        quickForms[quickForm].IsLoaded = () => quick?.isLoaded();
        quickForms[quickForm].Refresh = () => quick?.refresh();
    };
    Object.keys(quickForms).forEach(quickForm => {
        loadQuickForm(formContext, quickForms, quickForm);
    });
    return quickForms;
}
function loadGrids(formContext: any, gridItems: string[]): any {
    const grids: any = {};
    gridItems.forEach((item: string) => grids[item] = {});
    const loadGridColumn = (col: any) => {
        const obj: any = {};
        getter(obj, 'Label', () => col?.controls?.get(0)?.getLabel());
        getter(obj, 'Name', () => col?.getName());
        getterSetter(obj, 'Disabled', () => col?.controls?.get(0)?.getDisabled(), (value: any) => { col?.controls?.get(0)?.setDisabled(value); });
        getterSetter(obj, 'RequiredLevel', () => col?.getRequiredLevel(), (value: any) => { col?.setRequiredLevel(value); });
        getterSetter(obj, 'Value', () => col?.getValue(), (value: any) => { col?.setValue(value); });
        obj.ClearNotification = (uniqueId: string) => col?.controls?.get(0)?.clearNotification(uniqueId);
        obj.SetNotification = (message: string, uniqueId: string) => col?.controls?.get(0)?.setNotification(message, uniqueId);
        return obj;
    };
    const loadGridRow = (row: any) => {
        const obj: any = {};
        getter(obj, 'Columns', () => {
            const columnsObj: any = {};
            columnsObj.getLength = () => row?.data?.entity?.attributes?.getLength();
            columnsObj.get = (index: number) => {
                const column = row?.data?.entity?.attributes?.get(index);
                return loadGridColumn(column);
            };
            columnsObj.forEach = (callback: any) => {
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
    };
    const loadGrid = (formContext: any, grids: any, grid: string) => {
        const gridControl = formContext?.getControl(grid);
        const createCollectionObject = (getItemsFn: any, processItemFn: any) => {
            const obj: any = {};
            obj.getLength = () => getItemsFn()?.getLength();
            obj.get = (index: number) => processItemFn(getItemsFn()?.get(index));
            obj.forEach = (callback: any) => {
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
                (row: any) => loadGridRow(row)
            );
        });
        getter(grids[grid], 'SelectedRows', () => {
            const gridInstance = formContext?.getControl(grid)?.getGrid();
            return createCollectionObject(
                () => gridInstance?.getSelectedRows(),
                (row: any) => loadGridRow(row?.getData())
            );
        });
        getter(grids[grid], 'TotalRecordCount', () => gridControl?.getGrid()?.getTotalRecordCount());
        getter(grids[grid], 'ViewSelector', () => {
            const viewSelector = gridControl?.getViewSelector();
            const obj: any = {};
            getter(obj, 'Visible', () => viewSelector?.isVisible());
            getterSetter(obj, 'CurrentView', () => viewSelector?.getCurrentView(), (value: any) => viewSelector?.setCurrentView(value));
            return obj;
        });
        getterSetter(grids[grid], 'Visible', () => gridControl?.getVisible(), (value: any) => { gridControl?.setVisible(value); });
        grids[grid].AddOnLoad = (callback: any) => gridControl?.addOnLoad(callback);
        grids[grid].OpenRelatedGrid = () => gridControl?.openRelatedGrid();
        grids[grid].Refresh = () => gridControl?.refresh();
        grids[grid].RefreshRibbon = () => gridControl?.refreshRibbon();
        grids[grid].RemoveOnLoad = (callback: any) => gridControl?.removeOnLoad(callback);
        grids[grid].Url = (client: number) => gridControl?.getUrl(client);
    };
    Object.keys(grids).forEach(grid => {
        loadGrid(formContext, grids, grid);
    });
    return grids;
}
function loadExecutionContext(executionContext: any): DevKit.IExecutionContext {
    const obj: any = {};
    getter(obj, 'Depth', () => executionContext?.getDepth());
    getter(obj, 'EntityReference', () => executionContext?.getEventArgs()?.getEntityReference());
    getter(obj, 'EventArgs', () => executionContext?.getEventArgs());
    getter(obj, 'EventSource', () => executionContext?.getEventSource());
    getter(obj, 'FormContext', () => executionContext?.getFormContext());
    getter(obj, 'IsSaveSuccess', () => executionContext?.getEventArgs()?.getIsSaveSuccess());
    getter(obj, 'SaveErrorInfo', () => executionContext?.getEventArgs()?.getSaveErrorInfo());
    getter(obj, 'SaveMode', () => executionContext?.getEventArgs()?.getSaveMode());
    obj.DisableAsyncTimeout = () => executionContext?.getEventArgs()?.disableAsyncTimeout();
    obj.GetSharedVariable = (key: string) => executionContext?.getSharedVariable(key);
    obj.IsDefaultPrevented = () => executionContext?.getEventArgs()?.isDefaultPrevented();
    obj.IsInitialLoad = () => executionContext?.getEventArgs()?.getDataLoadState() === 1;
    obj.SetPreventDefault = () => executionContext?.getEventArgs()?.preventDefault();
    obj.SetPreventDefaultOnError = () => executionContext?.getEventArgs()?.preventDefaultOnError();
    obj.SetSharedVariable = (key: string, value: any) => executionContext?.setSharedVariable(key, value);
    return obj;
}
function loadSidePanes(): DevKit.ISidePanes {
    const sidePanes: any = {};
    const xrm: any = getXrm();
    const getSidePanes = xrm?.App?.sidePanes;
    getterSetter(sidePanes, 'DisplayState', () => getSidePanes?.state, (value: any) => { if (getSidePanes) getSidePanes.state = value; });
    sidePanes.Create = function (paneOptions: any, successCallback?: any) { getSidePanes?.createPane(paneOptions)?.then(successCallback); };
    sidePanes.Get = (paneId: string) => getSidePanes?.getPane(paneId);
    sidePanes.GetAll = () => getSidePanes?.getAllPanes();
    sidePanes.GetSelected = () => getSidePanes?.getSelectedPane();
    return sidePanes;
}
function loadWebApi(): DevKit.IWebApi {
    const obj: any = {} as DevKit.IWebApi;
    const xrm = getXrm();
    const getWebApi = xrm?.WebApi;
    const getOnline = xrm?.WebApi?.online;
    const getOffline = xrm?.WebApi?.offline;
    const extractEntityName = function (fetchXml: string): string {
        // This function is always called with ?fetchXml= prefix (line 433-434 ensures this)
        const splitIndex = fetchXml.toLowerCase().indexOf('fetchxml=') + 'fetchxml='.length;
        const cleanXml = decodeURIComponent(fetchXml.substring(splitIndex));
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(cleanXml, "text/xml");
        const entityNode = xmlDoc.querySelector("entity");
        if (entityNode && entityNode.hasAttribute("name"))
            return entityNode.getAttribute("name")!;
        throw new Error("Entity name not found in fetchXml");
    };


    obj.CreateRecord = function (entityLogicalName: string, data: any, successCallback?: any, errorCallback?: any) {
        const promise = getWebApi?.createRecord(entityLogicalName, data);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    obj.DeleteRecord = function (entityLogicalName: string, id: string, successCallback?: any, errorCallback?: any) {
        const promise = getWebApi?.deleteRecord(entityLogicalName, id);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    // NOTE: obj.RetrieveRecord is defined later with factory pattern (line ~480)

    obj.RetrieveMultipleRecords = function (entityLogicalName: string, options?: string, maxPageSize?: number, successCallback?: any, errorCallback?: any) {
        const promise = getWebApi?.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    obj.UpdateRecord = function (entityLogicalName: string, id: string, data: any, successCallback?: any, errorCallback?: any) {
        const promise = getWebApi?.updateRecord(entityLogicalName, id, data);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    obj.Execute = function (request: any, successCallback?: any, errorCallback?: any) {
        const promise = (getWebApi as any)?.execute(request);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    obj.ExecuteMultiple = function (requests: any[], successCallback?: any, errorCallback?: any) {
        const promise = (getWebApi as any)?.executeMultiple(requests);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    obj.RetrieveRecords = function (apiConstructorOrFactory: any, entityLogicalNameOrOptions: string, optionsOrMaxPageSizeOrCallback?: any, maxPageSizeOrSuccessCallback?: any, successCallback?: any, errorCallback?: any) {
        let entityLogicalName: string;
        let options: string | undefined;
        let maxPageSize: number | undefined;
        const hasFetchXml = (str: string) => /fetchxml=/i.test(str);
        const isPlainFetchXml = (str: string) => typeof str === 'string' && str.trim().startsWith('<fetch');
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
        const promise = getWebApi?.retrieveMultipleRecords(entityLogicalName!, options, maxPageSize).then((result: any) => {
            if (result.entities && result.entities.length > 0) {
                return result.entities.map((entity: any) =>
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
    obj.RetrieveRecord = function (apiConstructorOrFactory: any, entityLogicalName: string, id: string, options?: string | Function, successCallback?: any, errorCallback?: any) {
        if (typeof options === 'function') {
            errorCallback = successCallback;
            successCallback = options;
            options = "?$select=*";
        }
        if (!options) {
            options = "?$select=*";
        }
        const promise = getWebApi?.retrieveRecord(entityLogicalName, id, options as string).then((result: any) => {
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
        const online: any = {};
        online.Execute = function (request: any, successCallback?: any, errorCallback?: any) {
            const promise = getOnline?.execute(request);
            if (successCallback) {
                promise?.then(successCallback, errorCallback);
            } else {
                return promise;
            }
        };
        online.ExecuteMultiple = function (requests: any[], successCallback?: any, errorCallback?: any) {
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
        const offline: any = {};
        offline.IsAvailable = (entityLogicalName: string) => (getOffline as any)?.isAvailable(entityLogicalName);
        return offline;
    });
    return obj;
}
function loadCopilot(): DevKit.ICopilot {
    const obj: any = {};
    const xrm = getXrm();
    const getCopilot = (xrm as any)?.Copilot;
    obj.ExecuteEvent = function (eventName: string, eventParameters: any, successCallback?: any, errorCallback?: any) {
        const promise = getCopilot?.executeEvent(eventName, eventParameters);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    obj.ExecutePrompt = function (promptText: string, successCallback?: any, errorCallback?: any) {
        const promise = getCopilot?.executePrompt(promptText);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    return obj;
}
function loadFormV3<TBody = Record<string, any>, THeader = Record<string, any>, TGrid = Record<string, any>, TNavigation = Record<string, any>, TQuickForm = Record<string, any>, TProcess = any, TDialog = any>(
    executionContext: any,
    defaultWebResourceName: string | undefined,
    formConfig: {
        body?: string[];
        header?: string[];
        tab?: string[];
        grid?: string[];
        navigation?: string[];
        quick?: string[];
        bpf?: string[];
        dialog?: string[];
    }
): {
    ExecutionContext: DevKit.IExecutionContext;
    Body: TBody;
    Header: THeader;
    Grid: TGrid;
    Navigation: TNavigation;
    QuickForm: TQuickForm;
    FormId: string;
    FormLabel: string;
    FormType: number;
    EntityId: string;
    EntityName: string;
    DataIsDirty: boolean;
    DataIsValid: boolean;
    Attributes: any;
    Controls: any;
    DataXml: string;
    EntityIsDirty: boolean;
    EntityIsValid: boolean;
    EntityReference: any;
    PrimaryAttributeValue: string;
    ViewPortHeight: number;
    ViewPortWidth: number;
    Save: (saveOptions?: any, successCallback?: any, errorCallback?: any) => Promise<void> | void;
    Refresh: (save?: boolean, successCallback?: any, errorCallback?: any) => Promise<void> | void;
    Close: () => void;
    SetFormNotification: (message: string, level: string, uniqueId: string) => boolean;
    ClearFormNotification: (uniqueId: string) => boolean;
    RefreshRibbon: (refreshAll?: boolean) => void;
    UiAddLoaded: (callback: (context: any) => void) => void;
    UiRemoveLoaded: (callback: (context: any) => void) => void;
    UiAddOnLoad: (callback: (context: any) => void) => void;
    UiRemoveOnLoad: (callback: (context: any) => void) => void;
    AddOnPostSave: (callback: (context: any) => void) => void;
    AddOnSave: (callback: (context: any) => void) => void;
    RemoveOnPostSave: (callback: (context: any) => void) => void;
    RemoveOnSave: (callback: (context: any) => void) => void;
    DataAddOnLoad: (callback: (context: any) => void) => void;
    DataRemoveOnLoad: (callback: (context: any) => void) => void;
    FormIsVisible: (formId: string) => boolean;
    FormNavigateToFormId: (formId: string) => void;
    FormNavigateToFormLabel: (formLabel: string) => void;
    FormSetVisible: (formId: string, visible: boolean) => void;
    SetFormEntityName: (name: string) => void;
    Process: TProcess;
    Utility: any;
    SidePanes: any;
    WebApi: any;
    Copilot: any;
    Dialog: any;
} {
    const formContext = executionContext?.getFormContext?.() ?? executionContext ?? null;
    const form: any = {};
    const contextData = formContext?.data;
    const contextDataEntity = formContext?.data?.entity;
    const contextUi = formContext?.ui;
    const contextUiFormSelector = formContext?.ui?.formSelector;
    const findFormItem = (criteria: any, value: any) => {
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
    form.AddOnPostSave = (callback: any) => contextDataEntity?.addOnPostSave(callback);
    form.AddOnSave = (callback: any) => contextDataEntity?.addOnSave(callback);
    form.ClearFormNotification = (uniqueId: string) => contextUi?.clearFormNotification(uniqueId);
    form.Close = () => contextUi?.close();
    form.DataAddOnLoad = (callback: any) => contextData?.addOnLoad(callback);
    form.DataRemoveOnLoad = (callback: any) => contextData?.removeOnLoad(callback);
    form.FormIsVisible = (formId: string) => { return findFormItem((item: any) => item.getId(), formId)?.getVisible(); };
    form.FormNavigateToFormId = (formId: string) => { findFormItem((item: any) => item.getId(), formId)?.navigate(); };
    form.FormNavigateToFormLabel = (formLabel: string) => { findFormItem((item: any) => item.getLabel(), formLabel)?.navigate(); };
    form.FormSetVisible = (formId: string, value: boolean) => { findFormItem((item: any) => item.getId(), formId)?.setVisible(value); };
    form.Refresh = (save?: boolean, successCallback?: any, errorCallback?: any) => {
        const promise = contextData?.refresh(save);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    form.RefreshRibbon = (refreshAll?: boolean) => contextUi?.refreshRibbon(refreshAll);
    form.RemoveOnPostSave = (callback: any) => contextDataEntity?.removeOnPostSave(callback);
    form.RemoveOnSave = (callback: any) => contextDataEntity?.removeOnSave(callback);
    form.Save = (saveOptions?: any, successCallback?: any, errorCallback?: any) => {
        const promise = contextData?.save(saveOptions);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    form.SetFormEntityName = (arg: string) => contextUi?.setFormEntityName(arg);
    form.SetFormNotification = (message: string, level: string, uniqueId: string) => contextUi?.setFormNotification(message, level, uniqueId);
    form.UiAddLoaded = (callback: any) => contextUi?.addLoaded(callback);
    form.UiAddOnLoad = (callback: any) => contextUi?.addOnLoad(callback);
    form.UiRemoveLoaded = (callback: any) => contextUi?.removeLoaded(callback);
    form.UiRemoveOnLoad = (callback: any) => contextUi?.removeOnLoad(callback);
    const { body = [], tab = [], header = [], bpf = [], quick = [], grid = [], navigation = [] } = formConfig;
    const bodyObj = body.length > 0 ? loadFields(formContext, body) : {};
    bodyObj.Tab = tab.length > 0 ? loadTabs(formContext, tab) : {};
    form.Body = bodyObj;
    form.Header = header.length > 0 ? loadFields(formContext, header, 'header_') : {};
    form.Process = bpf.length > 0 ? loadProcess(formContext, bpf) : {};
    form.QuickForm = quick.length > 0 ? loadQuickForms(formContext, quick) : {};
    form.Grid = grid.length > 0 ? loadGrids(formContext, grid) : {};
    form.Navigation = navigation.length > 0 ? loadNavigations(formContext, navigation) : {};

    form.Utility = loadUtility(defaultWebResourceName);
    form.ExecutionContext = loadExecutionContext(executionContext);
    form.SidePanes = loadSidePanes();
    form.WebApi = loadWebApi();
    form.Copilot = loadCopilot();
    return form;
}
function loadProcess(formContext: any, bpf: string[]): any {
    const process: any = {};
    // Parse BPF fields - bpf always has items since gatekeeper checks bpf.length > 0 before calling
    const bpfFieldNames: string[] = [];
    let bpfProcessName: string = '';
    bpf.forEach((item: string) => {
        const [processName, fieldName] = item.split('___');
        if (!bpfProcessName) {
            bpfProcessName = processName;
        }
        bpfFieldNames.push(fieldName);
    });
    const bpfObj = loadFields(formContext, bpfFieldNames, 'header_process_');
    process[bpfProcessName] = bpfObj;
    const getProcess = formContext?.data?.process;
    const getProcessUi = formContext?.ui?.process;
    const loadStep = (step: any) => {
        const obj: any = {};
        getter(obj, 'Attribute', () => step?.getAttribute());
        getter(obj, 'Name', () => step?.getName());
        getter(obj, 'Progress', () => step?.getProgress());
        getter(obj, 'Required', () => step?.isRequired());
        obj.SetProgress = (stepProgress: number, message: string) => step?.setProgress(stepProgress, message);
        return obj;
    };
    const loadStage = (stage: any) => {
        const obj: any = {};
        getter(obj, 'Category', () => stage?.getCategory()?.getValue());
        getter(obj, 'EntityName', () => stage?.getEntityName());
        getter(obj, 'Id', () => stage?.getId());
        getter(obj, 'Name', () => stage?.getName());
        getter(obj, 'Status', () => stage?.getStatus());
        getter(obj, 'Steps', () => {
            const steps = stage?.getSteps();
            if (!steps) return [];
            const stepsArray: any[] = [];
            const length = steps.length || 0;
            for (let index = 0; index < length; index++) {
                stepsArray.push(loadStep(steps[index]));
            }
            return stepsArray;
        });
        obj.AllowCreateNew = (callback: any) => { if (stage?.getNavigationBehavior()) stage.getNavigationBehavior().allowCreateNew = callback; };
        return obj;
    };
    const loadProcessInner = (processObj: any) => {
        const obj: any = {};
        getter(obj, 'Id', () => processObj?.getId());
        getter(obj, 'IsRendered', () => processObj?.isRendered());
        getter(obj, 'Name', () => processObj?.getName());
        getter(obj, 'Stages', () => {
            const processStages = processObj?.getStages();
            const stagesObj: any = {};
            stagesObj.get = (index: number) => {
                const stage = processStages?.get(index);
                return loadStage(stage);
            };
            stagesObj.getLength = () => processStages?.getLength();
            stagesObj.forEach = (callback: (stage: any, index: number) => void) => {
                const length = processStages?.getLength() || 0;
                for (let index = 0; index < length; index++) {
                    const stage = processStages.get(index);
                    callback(loadStage(stage), index);
                }
            };
            return stagesObj;
        });
        return obj;
    };
    getter(process, 'ActivePath', () => {
        const activePathObj: any = {};
        activePathObj.get = (index: number) => {
            const stage = getProcess?.getActivePath()?.get(index);
            return loadStage(stage);
        };
        activePathObj.getLength = () => getProcess?.getActivePath()?.getLength();
        activePathObj.forEach = (callback: (stage: any, index: number) => void) => {
            const stages = getProcess?.getActivePath();
            for (let index = 0; index < stages?.getLength(); index++) {
                const stage = stages?.get(index);
                callback(loadStage(stage), index);
            }
        };
        return activePathObj;
    });
    getter(process, 'ActiveProcess', () => loadProcessInner(getProcess?.getActiveProcess()));
    getter(process, 'ActiveStage', () => loadStage(getProcess?.getActiveStage()));
    getter(process, 'InstanceId', () => getProcess?.getInstanceId());
    getter(process, 'InstanceName', () => getProcess?.getInstanceName());
    getter(process, 'SelectedStage', () => loadStage(getProcess?.getSelectedStage()));
    getterSetter(process, 'DisplayState', () => getProcessUi?.getDisplayState(), (value: string) => { getProcessUi?.setDisplayState(value); });
    getterSetter(process, 'Status', () => getProcess?.getStatus(), (value: string) => { getProcess?.setStatus(value); });
    getterSetter(process, 'Visible', () => getProcessUi?.getVisible(), (value: boolean) => { getProcessUi?.setVisible(value); });
    process.AddOnPreProcessStatusChange = (callback: any) => getProcess?.addOnPreProcessStatusChange(callback);
    process.AddOnPreStageChange = (callback: any) => getProcess?.addOnPreStageChange(callback);
    process.AddOnProcessStatusChange = (callback: any) => getProcess?.addOnProcessStatusChange(callback);
    process.AddOnStageChange = (callback: any) => getProcess?.addOnStageChange(callback);
    process.AddOnStageSelected = (callback: any) => getProcess?.addOnStageSelected(callback);
    process.EnabledProcesses = (callback: (processes: any[]) => void) => {
        getProcess?.getEnabledProcesses((enabledProcesses: any) => {
            const processes = Object.entries(enabledProcesses).map(([processId, processName]) => ({
                ProcessId: processId,
                ProcessName: processName
            }));
            callback(processes);
        });
    };
    process.MoveNext = (callback: any) => getProcess?.moveNext(callback);
    process.MovePrevious = (callback: any) => getProcess?.movePrevious(callback);
    process.ProcessInstances = (callback: (processes: any[]) => void) => {
        getProcess?.getProcessInstances((processInstances: any) => {
            const processes = Object.values(processInstances).map((proc: any) => ({
                ProcessId: proc.ProcessDefinitionID,
                ProcessName: proc.ProcessDefinitionName,
                CreatedOn: proc.CreatedOn,
                CreatedOnDate: proc.CreatedOnDate,
                InstanceId: proc.ProcessInstanceID,
                InstanceName: proc.ProcessInstanceName,
                Status: proc.StatusCodeName
            }));
            callback(processes);
        });
    };
    process.Reflow = (updateUi: boolean, parentStage: string, nextStage: string) => getProcessUi?.reflow(updateUi, parentStage, nextStage);
    process.RemoveOnPreProcessStatusChange = (callback: any) => getProcess?.removeOnPreProcessStatusChange(callback);
    process.RemoveOnPreStageChange = (callback: any) => getProcess?.removeOnPreStageChange(callback);
    process.RemoveOnProcessStatusChange = (callback: any) => getProcess?.removeOnProcessStatusChange(callback);
    process.RemoveOnStageChange = (callback: any) => getProcess?.removeOnStageChange(callback);
    process.RemoveOnStageSelected = (callback: any) => getProcess?.removeOnStageSelected(callback);
    process.SetActiveProcess = (processId: string, callback: any) => getProcess?.setActiveProcess(processId, callback);
    process.SetActiveProcessInstance = (processInstanceId: string, callback: any) => getProcess?.setActiveProcessInstance(processInstanceId, callback);
    process.SetActiveStage = (stageId: string, callback: any) => getProcess?.setActiveStage(stageId, callback);
    return process;
}
function loadUtility(defaultWebResourceName?: string): DevKit.IUtility {
    const utility: any = {};
    const xrm = getXrm();
    const getApp = xrm?.App;
    const getDevice = xrm?.Device;
    const getEncoding = xrm?.Encoding;
    const getGlobalContext = xrm?.Utility?.getGlobalContext();
    const getNavigation = xrm?.Navigation;
    const getPanel = xrm?.Panel;
    const getUtility = xrm?.Utility;
    getter(utility, 'Client', () => {
        const obj: any = {};
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
    // @ts-ignore - isOnPremises not in @types/Xrm
    getter(utility, 'IsOnPremises', () => getGlobalContext?.isOnPremises());
    getter(utility, 'LearningPathAttributeName', () => getUtility?.getLearningPathAttributeName());
    getter(utility, 'OrganizationSettings', () => {
        const obj: any = {};
        const organizationSettings = getGlobalContext?.organizationSettings;
        // @ts-ignore - attributes not in @types/Xrm
        getter(obj, 'Attributes', () => organizationSettings?.attributes);
        getter(obj, 'BaseCurrency', () => organizationSettings?.baseCurrency);
        getter(obj, 'BaseCurrencyId', () => organizationSettings?.baseCurrencyId);
        getter(obj, 'DefaultCountryCode', () => organizationSettings?.defaultCountryCode);
        // @ts-ignore - fullNameConventionCode not in @types/Xrm
        getter(obj, 'FullNameConventionCode', () => organizationSettings?.fullNameConventionCode);
        getter(obj, 'IsAutoSaveEnabled', () => organizationSettings?.isAutoSaveEnabled);
        // @ts-ignore - isTrialOrganization not in @types/Xrm
        getter(obj, 'IsTrialOrganization', () => organizationSettings?.isTrialOrganization);
        getter(obj, 'LanguageId', () => organizationSettings?.languageId);
        // @ts-ignore - organizationExpiryDate not in @types/Xrm
        getter(obj, 'OrganizationExpiryDate', () => organizationSettings?.organizationExpiryDate);
        getter(obj, 'OrganizationId', () => organizationSettings?.organizationId);
        getter(obj, 'UniqueName', () => organizationSettings?.uniqueName);
        getter(obj, 'UseSkypeProtocol', () => organizationSettings?.useSkypeProtocol);
        return obj;
    });
    getter(utility, 'PageContext', () => getUtility?.getPageContext());
    getter(utility, 'UserSettings', () => {
        const obj: any = {};
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
    utility.AddGlobalNotification = function (notification: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getApp?.addGlobalNotification(notification);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.AdvancedConfigSetting = (setting: string) => getGlobalContext?.getAdvancedConfigSetting(setting as "MaxChildIncidentNumber" | "MaxIncidentMergeNumber");
    utility.AllowedStatusTransitions = function (entityName: string, stateCode: number, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getUtility?.getAllowedStatusTransitions(entityName, stateCode);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.BarcodeValue = function (successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getDevice?.getBarcodeValue();
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.CaptureAudio = function (successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getDevice?.captureAudio();
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.CaptureImage = function (imageOptions: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getDevice?.captureImage(imageOptions);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.CaptureVideo = function (successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getDevice?.captureVideo();
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.ClearGlobalNotification = function (uniqueId: string, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getApp?.clearGlobalNotification(uniqueId);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.CloseProgressIndicator = () => getUtility?.closeProgressIndicator();
    utility.CurrentAppName = function (successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getGlobalContext?.getCurrentAppName();
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.CurrentAppProperties = function (successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getGlobalContext?.getCurrentAppProperties();
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.CurrentPosition = function (successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getDevice?.getCurrentPosition();
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    // @ts-ignore - getEntityMainFormDescriptor not in @types/Xrm
    utility.EntityMainFormDescriptor = (entityName: string, formId: string) => getUtility?.getEntityMainFormDescriptor(entityName, formId);
    utility.EntityMetadata = function (entityName: string, attributes?: string[], successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getUtility?.getEntityMetadata(entityName, attributes);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.HtmlAttributeEncode = (arg: string) => getEncoding?.htmlAttributeEncode(arg);
    utility.HtmlDecode = (arg: string) => getEncoding?.htmlDecode(arg);
    utility.HtmlEncode = (arg: string) => getEncoding?.htmlEncode(arg);
    utility.InvokeProcessAction = function (name: string, parameters: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getUtility?.invokeProcessAction(name, parameters);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.LoadPanel = (url: string, title: string) => getPanel?.loadPanel(url, title);
    utility.LookupObjects = function (lookupOptions: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getUtility?.lookupObjects(lookupOptions);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.NavigateTo = function (pageInput: any, navigationOptions: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getNavigation?.navigateTo(pageInput, navigationOptions);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.OpenAlertDialog = function (alertStrings: any, alertOptions: any, closeCallback?: () => void, errorCallback?: (error: any) => void) {
        const promise = getNavigation?.openAlertDialog(alertStrings, alertOptions);
        if (closeCallback) promise?.then(closeCallback, errorCallback);
        else return promise;
    };
    utility.OpenConfirmDialog = function (confirmStrings: any, confirmOptions: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getNavigation?.openConfirmDialog(confirmStrings, confirmOptions);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.OpenErrorDialog = function (errorOptions: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getNavigation?.openErrorDialog(errorOptions);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.OpenFile = (file: any, openFileOptions?: any) => getNavigation?.openFile(file, openFileOptions);
    utility.OpenForm = function (entityFormOptions: any, formParameters: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getNavigation?.openForm(entityFormOptions, formParameters);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.OpenUrl = (url: string, openUrlOptions?: any) => getNavigation?.openUrl(url, openUrlOptions);
    utility.OpenWebResource = (webResourceName: string, windowOptions?: any, data?: string) => getNavigation?.openWebResource(webResourceName, windowOptions, data);
    utility.PickFile = function (pickFileOptions: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void) {
        const promise = getDevice?.pickFile(pickFileOptions);
        if (successCallback) promise?.then(successCallback, errorCallback);
        else return promise;
    };
    utility.PrependOrgName = (sPath: string) => getGlobalContext?.prependOrgName(sPath);
    utility.RefreshParentGrid = (lookupOptions: any) => getUtility?.refreshParentGrid(lookupOptions);
    // @ts-ignore - defaultWebResourceName may be undefined
    utility.Resource = (key: string) => getUtility?.getResourceString(defaultWebResourceName!, key);
    utility.ResourceString = (webResourceName: string, key: string) => getUtility?.getResourceString(webResourceName, key);
    utility.ShowProgressIndicator = (message: string) => getUtility?.showProgressIndicator(message);
    utility.WebResourceUrl = (webResourceName: string) => getGlobalContext?.getWebResourceUrl(webResourceName);
    utility.XmlAttributeEncode = (arg: string) => getEncoding?.xmlAttributeEncode(arg);
    utility.XmlEncode = (arg: string) => getEncoding?.xmlEncode(arg);
    return utility;
}
function loadFormDialog(formContext: any, fields: string[]): any {
    const form: any = {};
    const fieldsLength = fields.length;
    for (let i = 0; i < fieldsLength; i++) {
        const fieldName = fields[i];
        const attribute = formContext?.data?.entity?.attributes?.get(fieldName);
        const control = formContext?.getControl(fieldName);
        form[fieldName] = {};
        loadField(formContext, form[fieldName], attribute, control);
    }
    form.Close = () => formContext?.ui?.close();
    return form;
}

function getWebApiTypeParsers(): Record<string, (value: any) => any> {
    // Note: These parsers are called via webApiReturnGet which is only called after
    // getValue in defineWebApiField has already filtered out null/undefined values.
    // Therefore, null/undefined checks are NOT needed in individual parsers.
    return {
        DateTime: (value: any): Date | null => {
            if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
            const trimmedString = String(value).trim();
            if (trimmedString === '') return null;
            const timestamp = Date.parse(trimmedString);
            if (isNaN(timestamp)) return null;
            // If Date.parse succeeded, new Date(timestamp) will always be valid
            return new Date(timestamp);
        },

        Integer: (value: any): number | null => {
            const parsed = parseInt(value, 10);
            return isNaN(parsed) ? null : parsed;
        },
        Number: (value: any): number | null => {
            const parsed = Number(value);
            return isNaN(parsed) ? null : parsed;
        },
        Boolean: (value: any): boolean | null => {
            if (typeof value === 'boolean') return value;
            if (typeof value === 'number') return value !== 0;
            const stringValue = String(value).trim().toLowerCase();
            const trueValues = ['true', '1', 'yes', 'y'];
            const falseValues = ['false', '0', 'no', 'n'];
            if (trueValues.includes(stringValue)) return true;
            if (falseValues.includes(stringValue)) return false;
            return null;
        }
    };
}
function webApiReturnGet(data: any, type?: DevKit.WebApiFieldType): any {
    // Note: data is never null/undefined here - getValue in defineWebApiField
    // already returns null before calling this function for null/undefined values.
    if (type === null || type === undefined) return data;
    const parser = getWebApiTypeParsers()[type];
    return parser ? parser(data) : data;
}

export class FormBase<TBody = any, THeader = any, TGrid = any, TNavigation = any, TQuickForm = any, TProcess = any, TDialog = any> {
    public Body: TBody;
    public Header: THeader;
    public Grid: TGrid;
    public Navigation: TNavigation;
    public QuickForm: TQuickForm;
    public Process: TProcess;
    public Dialog: TDialog;
    public ExecutionContext: DevKit.IExecutionContext;
    public Utility: any;
    public SidePanes: DevKit.ISidePanes;
    public WebApi: DevKit.IWebApi;
    public Copilot: DevKit.ICopilot;
    public readonly FormId: string;
    public readonly FormLabel: string;
    public readonly FormType: number;
    public readonly EntityId: string;
    public readonly EntityName: string;
    public readonly DataIsDirty: boolean;
    public readonly DataIsValid: boolean;
    public readonly Attributes: any;
    public readonly Controls: any;
    public readonly DataXml: string;
    public readonly EntityIsDirty: boolean;
    public readonly EntityIsValid: boolean;
    public readonly EntityReference: any;
    public readonly PrimaryAttributeValue: string;
    public readonly ViewPortHeight: number;
    public readonly ViewPortWidth: number;
    public Save: (saveOptions?: any, successCallback?: any, errorCallback?: any) => Promise<void> | void;
    public Refresh: (save?: boolean, successCallback?: any, errorCallback?: any) => Promise<void> | void;
    public Close: () => void;
    public SetFormNotification: (message: string, level: string, uniqueId: string) => boolean;
    public ClearFormNotification: (uniqueId: string) => boolean;
    public RefreshRibbon: (refreshAll?: boolean) => void;
    public UiAddLoaded: (callback: (context: any) => void) => void;
    public UiRemoveLoaded: (callback: (context: any) => void) => void;
    public UiAddOnLoad: (callback: (context: any) => void) => void;
    public UiRemoveOnLoad: (callback: (context: any) => void) => void;
    public AddOnPostSave: (callback: (context: any) => void) => void;
    public AddOnSave: (callback: (context: any) => void) => void;
    public RemoveOnPostSave: (callback: (context: any) => void) => void;
    public RemoveOnSave: (callback: (context: any) => void) => void;
    public DataAddOnLoad: (callback: (context: any) => void) => void;
    public DataRemoveOnLoad: (callback: (context: any) => void) => void;
    public FormIsVisible: (formId: string) => boolean;
    public FormNavigateToFormId: (formId: string) => void;
    public FormNavigateToFormLabel: (formLabel: string) => void;
    public FormSetVisible: (formId: string, visible: boolean) => void;
    public SetFormEntityName: (name: string) => void;
    constructor(
        executionContext: any,
        defaultWebResourceName: string | undefined,
        formConfig: DevKit.IFormConfig
    ) {
        const form = loadFormV3<TBody, THeader, TGrid, TNavigation, TQuickForm, TProcess, TDialog>(
            executionContext,
            defaultWebResourceName,
            formConfig
        );
        this.Body = form.Body;
        this.Header = form.Header;
        this.Grid = form.Grid;
        this.Navigation = form.Navigation;
        this.QuickForm = form.QuickForm;
        this.Process = form.Process;
        this.ExecutionContext = form.ExecutionContext;
        this.FormId = form.FormId;
        this.FormLabel = form.FormLabel;
        this.FormType = form.FormType;
        this.EntityId = form.EntityId;
        this.EntityName = form.EntityName;
        this.DataIsDirty = form.DataIsDirty;
        this.DataIsValid = form.DataIsValid;
        this.Attributes = form.Attributes;
        this.Controls = form.Controls;
        this.DataXml = form.DataXml;
        this.EntityIsDirty = form.EntityIsDirty;
        this.EntityIsValid = form.EntityIsValid;
        this.EntityReference = form.EntityReference;
        this.PrimaryAttributeValue = form.PrimaryAttributeValue;
        this.ViewPortHeight = form.ViewPortHeight;
        this.ViewPortWidth = form.ViewPortWidth;
        this.Save = form.Save;
        this.Refresh = form.Refresh;
        this.Close = form.Close;
        this.SetFormNotification = form.SetFormNotification;
        this.ClearFormNotification = form.ClearFormNotification;
        this.RefreshRibbon = form.RefreshRibbon;
        this.UiAddLoaded = form.UiAddLoaded;
        this.UiRemoveLoaded = form.UiRemoveLoaded;
        this.UiAddOnLoad = form.UiAddOnLoad;
        this.UiRemoveOnLoad = form.UiRemoveOnLoad;
        this.AddOnPostSave = form.AddOnPostSave;
        this.AddOnSave = form.AddOnSave;
        this.RemoveOnPostSave = form.RemoveOnPostSave;
        this.RemoveOnSave = form.RemoveOnSave;
        this.DataAddOnLoad = form.DataAddOnLoad;
        this.DataRemoveOnLoad = form.DataRemoveOnLoad;
        this.FormIsVisible = form.FormIsVisible;
        this.FormNavigateToFormId = form.FormNavigateToFormId;
        this.FormNavigateToFormLabel = form.FormNavigateToFormLabel;
        this.FormSetVisible = form.FormSetVisible;
        this.SetFormEntityName = form.SetFormEntityName;
        this.Utility = form.Utility;
        this.SidePanes = form.SidePanes;
        this.WebApi = form.WebApi;
        this.Copilot = form.Copilot;
        this.Dialog = form.Dialog;
    }
}
export function defineWebApiField(obj: any, fieldName: string, entity: Record<string, any>, config: DevKit.IWebApiFieldConfig, upsertEntity: Record<string, any>): void {
    const { logicalName, schemaName, entityCollectionName, entityLogicalName, readOnly, type } = config;
    const getFormattedValue = (): string | string[] => {
        const formattedKey = logicalName + '@OData.Community.Display.V1.FormattedValue';
        if (entity?.[formattedKey] === undefined || entity?.[formattedKey] === null) {
            return '';
        }
        if (entityCollectionName !== undefined && entityCollectionName.length > 0) {
            const lookupKey = logicalName + '@Microsoft.Dynamics.CRM.lookuplogicalname';
            if (entity?.[lookupKey] === entityLogicalName) {
                return entity?.[formattedKey];
            }
            return '';
        }
        if (type === 'MultiOptionSet') {
            // Note: formattedKey is already validated not null at line 1178, so ?? [] is not needed
            return entity[formattedKey].toString().split(';').map((item: string) => item.trim());
        }
        return entity?.[formattedKey];
    };
    const getValue = (): any => {
        if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
            return null;
        }
        if (entityCollectionName !== undefined && entityCollectionName.length > 0) {
            const lookupKey = logicalName + '@Microsoft.Dynamics.CRM.lookuplogicalname';
            if (entity?.[lookupKey] === undefined || entity?.[lookupKey] === entityLogicalName) {
                return webApiReturnGet(entity?.[logicalName], type);
            }
            return null;
        }
        if (type === 'MultiOptionSet') {
            // Note: logicalName is already validated not null at line 1194, so ?? [] is not needed
            return entity[logicalName].toString().split(',').map((item: string) => parseInt(item, 10));
        }
        return webApiReturnGet(entity?.[logicalName], type);
    };
    const setValue = (value: any): void => {
        if (type === 'MultiOptionSet') value = value?.join(',');
        if (entityCollectionName !== undefined && entityCollectionName?.length > 0) {
            const bindingName = (schemaName ?? logicalName) + '@odata.bind';
            if (value === null) {
                upsertEntity[bindingName] = null;
            } else {
                const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
                upsertEntity[bindingName] = '/' + entityCollectionName + '(' + cleanValue + ')';
            }
        } else {
            upsertEntity[logicalName] = value;
        }
        entity[logicalName] = value;
    };
    Object.defineProperty(obj.FormattedValue, fieldName, {
        get: getFormattedValue
    });
    if (readOnly) {
        Object.defineProperty(obj, fieldName, {
            get: getValue
        });
    } else {
        Object.defineProperty(obj, fieldName, {
            get: getValue,
            set: setValue
        });
    }
}
export function createWebApiEntity<T extends DevKit.IWebApiEntity>(entity: Record<string, any> | undefined, entityName: string, entityCollectionName: string, fieldConfigMap: DevKit.IWebApiFieldConfigMap): T {
    const e = entity ?? {};
    const upsertEntity: Record<string, any> = {};
    const webApiEntity: any = {
        ODataEntity: e,
        FormattedValue: {},
        Entity: upsertEntity,
        EntityName: entityName,
        EntityCollectionName: entityCollectionName,
        '@odata.etag': e?.['@odata.etag'],
        getAliasedValue(alias: string, isMultiOptionSet = false): any {
            if (e?.[alias] === undefined || e?.[alias] === null) {
                return null;
            }
            if (isMultiOptionSet) {
                return e?.[alias].toString().split(',').map((item: string) => parseInt(item, 10));
            }
            return e?.[alias];
        },
        getAliasedFormattedValue(alias: string, isMultiOptionSet = false): string | string[] {
            const key = alias + '@OData.Community.Display.V1.FormattedValue';
            if (e?.[key] === undefined || e?.[key] === null) {
                return '';
            }
            if (isMultiOptionSet) {
                // Note: key is already validated not null at line 1259, so ?? [] is not needed
                return e[key].toString().split(';').map((item: string) => item.trim());
            }
            return e?.[key];
        }
    };
    for (const fieldName in fieldConfigMap) {
        defineWebApiField(webApiEntity, fieldName, e, fieldConfigMap[fieldName], upsertEntity);
    }
    return webApiEntity as T;
}
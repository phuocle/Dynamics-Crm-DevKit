/**
 * DevKit TypeScript Module
 * 
 * Đây là phiên bản TypeScript của lib/devkit.js, tập trung vào LoadFormV2 function
 * để hỗ trợ form scripting với đầy đủ IntelliSense.
 * 
 * File gốc lib/devkit.js có nhiều tính năng hơn (WebApi, Utility, Copilot, SidePanes...),
 * file này chỉ cần LoadFormV2 cho use case chính là form scripting.
 * 
 * Các tính năng khác nếu cần có thể thêm sau hoặc gọi trực tiếp từ Xrm object.
 * 
 * @requires @types/xrm - Đã được cài trong devDependencies
 */

// ============================================================================
// Note: @types/xrm đã cài đặt, Xrm global có đầy đủ IntelliSense
// Nếu TypeScript báo lỗi Xrm not found, có thể uncomment dòng dưới:
// declare const Xrm: any;
// ============================================================================

// ============================================================================
// Base Control Interfaces - Định nghĩa các interfaces cho controls
// ============================================================================

/** Interface cho Field control cơ bản */
export interface IFieldControl {
    /** Giá trị của field */
    Value: any;
    /** Tên attribute */
    readonly AttributeName: string;
    /** Tên control */
    readonly ControlName: string;
    /** Kiểu attribute */
    readonly AttributeType: string;
    /** Kiểu control */
    readonly ControlType: string;
    /** Enable/Disable control */
    Disabled: boolean;
    /** Visible/Hidden control */
    Visible: boolean;
    /** Label của control */
    Label: string;
    /** Required level: none, required, recommended */
    RequiredLevel: string;
    /** Submit mode: always, never, dirty */
    SubmitMode: string;
    /** Check if value is dirty */
    readonly IsDirty: boolean;
    /** Check if value is valid */
    readonly IsValid: boolean;

    /** Add onChange event handler */
    AddOnChange(callback: (context: any) => void): void;
    /** Remove onChange event handler */
    RemoveOnChange(callback: (context: any) => void): void;
    /** Add onOutputChange event handler for modern controls */
    AddOnOutputChange(callback: (context: any) => void): void;
    /** Remove onOutputChange event handler */
    RemoveOnOutputChange(callback: (context: any) => void): void;
    /** Fire onChange event */
    FireOnChange(): void;
    /** Set focus to control */
    Focus(): void;
    /** Set notification */
    SetNotification(message: string, uniqueId: string): boolean;
    /** Clear notification */
    ClearNotification(uniqueId: string): boolean;
    /** Add notification with options */
    AddNotification(notification: { messages: string[]; notificationLevel?: 'ERROR' | 'RECOMMENDATION'; uniqueId: string; actions?: { message?: string; actions: Function[] }[] }): void;
    /** Set control validity */
    SetIsValid(valid: boolean, message?: string): void;
}

/** Interface cho String control */
export interface IStringControl extends IFieldControl {
    Value: string | null;
    readonly MaxLength: number;
    readonly Format: string;
}

/** Interface cho Number/Integer control */
export interface INumberControl extends IFieldControl {
    Value: number | null;
    readonly Max: number;
    readonly Min: number;
    readonly Precision: number;
}

/** Interface cho Boolean control */
export interface IBooleanControl extends IFieldControl {
    Value: boolean | null;
}

/** Interface cho OptionSet control */
export interface IOptionSetControl extends IFieldControl {
    Value: number | null;
    readonly Options: { text: string; value: number }[];
    readonly SelectedOption: { text: string; value: number } | null;
    readonly Text: string;

    AddOption(text: string, value: number, index?: number): void;
    RemoveOption(value: number): void;
    ClearOptions(): void;
}

/** Interface cho Lookup control */
export interface ILookupControl extends IFieldControl {
    Value: { id: string; name: string; entityType: string }[] | null;
    readonly EntityTypes: string[];

    AddPreSearch(callback: () => void): void;
    RemovePreSearch(callback: () => void): void;
    AddCustomFilter(filter: string, entityLogicalName?: string): void;
    AddCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
    DefaultView: string;
}

/** Interface cho Date control */
export interface IDateControl extends IFieldControl {
    Value: Date | null;
    ShowTime: boolean;
}

/** Interface cho Money control */
export interface IMoneyControl extends INumberControl {
    // Money kế thừa từ Number
}

// ============================================================================
// Form Interfaces
// ============================================================================

/** Interface cho Form */
export interface IForm {
    /** Form ID */
    readonly FormId: string;
    /** Form Label */
    readonly FormLabel: string;
    /** Form Type: Create (1), Update (2), ReadOnly (3), Disabled (4), QuickCreate (5), BulkEdit (6) */
    readonly FormType: number;
    /** Entity ID */
    readonly EntityId: string;
    /** Entity Name - logical name của entity */
    readonly EntityName: string;
    /** Check if form data is dirty */
    readonly DataIsDirty: boolean;
    /** Check if form data is valid */
    readonly DataIsValid: boolean;
    /** Primary attribute value */
    readonly PrimaryAttributeValue: string;

    /** Save the form */
    Save(saveOptions?: { saveMode: number }): Promise<void>;
    /** Refresh form data */
    Refresh(save?: boolean): Promise<void>;
    /** Close the form */
    Close(): void;
    /** Set form notification */
    SetFormNotification(message: string, level: "ERROR" | "WARNING" | "INFO", uniqueId: string): boolean;
    /** Clear form notification */
    ClearFormNotification(uniqueId: string): boolean;
    /** Refresh ribbon */
    RefreshRibbon(refreshAll?: boolean): void;
}

/** Interface cho Tab */
export interface ITab {
    /** Tab Name */
    readonly Name: string;
    /** Tab Label */
    Label: string;
    /** Tab Visible */
    Visible: boolean;
    /** Tab Display State */
    DisplayState: "expanded" | "collapsed";

    /** Add tab state change handler */
    AddTabStateChange(callback: (context: any) => void): void;
    /** Remove tab state change handler */
    RemoveTabStateChange(callback: (context: any) => void): void;
    /** Set focus to tab */
    Focus(): void;
}

/** Interface cho Section */
export interface ISection {
    /** Section Name */
    readonly Name: string;
    /** Section Label */
    Label: string;
    /** Section Visible */
    Visible: boolean;
}

/** Interface cho Navigation Item */
export interface INavigationItem {
    /** Navigation ID */
    readonly Id: string;
    /** Navigation Label */
    Label: string;
    /** Navigation Visible */
    Visible: boolean;

    /** Set focus to navigation item */
    Focus(): void;
}

/** Interface cho Grid */
export interface IGrid {
    /** Grid Entity Name */
    readonly EntityName: string;
    /** Grid FetchXml */
    readonly FetchXml: string;
    /** Total record count */
    readonly TotalRecordCount: number;
    /** Grid Visible */
    Visible: boolean;

    /** Add onLoad handler */
    AddOnLoad(callback: (context: any) => void): void;
    /** Remove onLoad handler */
    RemoveOnLoad(callback: (context: any) => void): void;
    /** Refresh grid */
    Refresh(): void;
}

/** Interface cho Execution Context */
export interface IExecutionContext {
    /** Get the depth of the execution context (for plugin-like scenarios) */
    readonly Depth: number;
    /** Get the entity reference from event args */
    readonly EntityReference: any;
    /** Get the event arguments */
    readonly EventArgs: any;
    /** Get the event source */
    readonly EventSource: any;
    /** Get form context */
    readonly FormContext: any;
    /** Check if save was successful (for OnSave event) */
    readonly IsSaveSuccess: boolean;
    /** Get save error info (for OnSave event) */
    readonly SaveErrorInfo: any;
    /** Get save mode (for OnSave event): 1=Save, 2=SaveAndClose, etc. */
    readonly SaveMode: number;

    /** Disable async timeout for long-running operations */
    DisableAsyncTimeout(): void;
    /** Get a shared variable by key */
    GetSharedVariable(key: string): any;
    /** Check if default behavior is prevented */
    IsDefaultPrevented(): boolean;
    /** Check if this is the initial form load */
    IsInitialLoad(): boolean;
    /** Prevent default behavior */
    SetPreventDefault(): void;
    /** Prevent default on error */
    SetPreventDefaultOnError(): void;
    /** Set a shared variable */
    SetSharedVariable(key: string, value: any): void;
}

// ============================================================================
// Helper Functions - Các hàm helper để load form
// ============================================================================

function getXrm(): typeof Xrm | undefined {
    // Check window.Xrm first (normal form scenario)
    if (typeof window !== 'undefined' && (window as any).Xrm !== undefined) {
        return (window as any).Xrm;
    }
    // Check parent.window.Xrm (HTML WebResource in iframe)
    if (typeof parent !== 'undefined' && typeof parent.window !== 'undefined' && (parent.window as any).Xrm !== undefined) {
        return (parent.window as any).Xrm;
    }
    // Check parent.parent.window.Xrm (nested iframe scenario)
    if (typeof parent !== 'undefined' && typeof parent.parent !== 'undefined' && typeof parent.parent.window !== 'undefined' && (parent.parent.window as any).Xrm !== undefined) {
        return (parent.parent.window as any).Xrm;
    }
    // Return undefined if not found (safe optional chaining)
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

// ============================================================================
// Field Loading Function
// ============================================================================

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
    field.Option = (value: number) => attribute?.getOption(value);
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

// ============================================================================
// Helper Functions (matching devkit.js exactly)
// ============================================================================

function loadFields(formContext: any, body: any, type?: string): any {
    Object.keys(body).forEach(field => {
        const logicalName = type === undefined ? field?.toLowerCase() : (type + field)?.toLowerCase();
        const control = formContext?.getControl(logicalName) ?? formContext?.getControl(field);
        let attribute = formContext?.getAttribute(logicalName);
        if (!attribute && control?.getAttribute) {
            attribute = control.getAttribute();
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

function loadTabs(formContext: any, tabs: any): void {
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
}

function loadNavigations(formContext: any, navigations: any): void {
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
}

function loadQuickForms(formContext: any, quickForms: any): void {
    const excludedFields = new Set(["Body", "Controls", "IsLoaded", "Refresh", "Focus", "ControlType", "Disabled", "Label", "ControlName", "ControlParent", "Visible"]);
    const loadQuickForm = (formContext: any, quickForms: any, quickForm: string) => {
        const fields = Object.keys(quickForms[quickForm]).filter(field => !excludedFields.has(field));
        const quick = formContext?.ui?.quickForms?.get(quickForm);
        getter(quickForms[quickForm], 'Body', () => LoadFormDialog(quick, fields));
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
}

function loadGrids(formContext: any, grids: any): void {
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
}

// ============================================================================
// Form Loading Functions (matching devkit.js exactly)
// ============================================================================

function LoadForm(formContext: any): any {
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
    return form;
}

function LoadExecutionContext(executionContext: any): any {
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

function LoadSidePanes(): any {
    const sidePanes: any = {};
    const xrm = getXrm();
    getterSetter(sidePanes, 'DisplayState', () => (xrm as any)?.App?.sidePanes?.state, (value: any) => { const x = getXrm(); if ((x as any)?.App?.sidePanes) (x as any).App.sidePanes.state = value; });
    sidePanes.Create = function (paneOptions: any, successCallback?: any) { (xrm as any)?.App?.sidePanes?.createPane(paneOptions)?.then(successCallback); };
    sidePanes.Get = (paneId: string) => (xrm as any)?.App?.sidePanes?.getPane(paneId);
    sidePanes.GetAll = () => (xrm as any)?.App?.sidePanes?.getAllPanes();
    sidePanes.GetSelected = () => (xrm as any)?.App?.sidePanes?.getSelectedPane();
    return sidePanes;
}

function LoadWebApi(): any {
    const obj: any = {};
    const xrm = getXrm();
    const getWebApi = xrm?.WebApi;
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
    obj.RetrieveRecord = function (entityLogicalName: string, id: string, options?: string, successCallback?: any, errorCallback?: any) {
        const promise = getWebApi?.retrieveRecord(entityLogicalName, id, options);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
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
        const promise = getWebApi?.execute(request);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    obj.ExecuteMultiple = function (requests: any[], successCallback?: any, errorCallback?: any) {
        const promise = getWebApi?.executeMultiple(requests);
        if (successCallback) {
            promise?.then(successCallback, errorCallback);
        } else {
            return promise;
        }
    };
    return obj;
}

function LoadCopilot(): any {
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

function loadOthers(formContext: any, form: any, defaultWebResourceName: string | undefined): void {
    form.SidePanes = LoadSidePanes();
    form.WebApi = LoadWebApi();
    form.Copilot = LoadCopilot();
}

// ============================================================================
// DevKit Module Export
// ============================================================================

/**
 * Load Form V2 - Hàm chính để load form với các fields
 * @param executionContext Execution context từ form
 * @param defaultWebResourceName Tên web resource mặc định
 * @param formConfig Cấu hình form bao gồm body, header, tab, grid, navigation, quick, bpf
 */
export function LoadFormV2<TBody = Record<string, any>, THeader = Record<string, any>, TTab = Record<string, any>, TGrid = Record<string, any>, TNavigation = Record<string, any>, TQuickForm = Record<string, any>, TProcess = any>(
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
    }
): {
    ExecutionContext: IExecutionContext;
    Body: TBody;
    Header: THeader;
    Tab: TTab;
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
    Save: (saveOptions?: any) => Promise<void>;
    Refresh: (save?: boolean) => Promise<void>;
    Close: () => void;
    SetFormNotification: (message: string, level: string, uniqueId: string) => boolean;
    ClearFormNotification: (uniqueId: string) => boolean;
    RefreshRibbon: (refreshAll?: boolean) => void;
    UiAddLoaded: (callback: (context: any) => void) => void;
    UiRemoveLoaded: (callback: (context: any) => void) => void;
    Process: TProcess;
} {
    const formContext = executionContext?.getFormContext?.() ?? executionContext ?? null;
    const form = LoadForm(formContext);
    const { body = [], tab = [], header = [], bpf = [], quick = [], grid = [], navigation = [], dialog = [] } = formConfig as any;
    const bodyObj: any = {};
    body.forEach((field: string) => bodyObj[field] = {});
    loadFields(formContext, bodyObj);
    const tabObj: any = {};
    tab.forEach((item: string) => {
        const [tabName, sectionName] = item.split('___');
        if (!tabObj[tabName]) {
            tabObj[tabName] = { Section: {} };
        }
        tabObj[tabName].Section[sectionName] = {};
    });
    loadTabs(formContext, tabObj);
    bodyObj.Tab = tabObj;
    form.Body = bodyObj;
    const headerObj: any = {};
    header.forEach((field: string) => headerObj[field] = {});
    loadFields(formContext, headerObj, 'header_');
    form.Header = headerObj;
    const process = LoadProcess(formContext);
    if (bpf.length > 0) {
        const bpfObj: any = {};
        let bpfProcessName: string | null = null;
        bpf.forEach((item: string) => {
            const [processName, fieldName] = item.split('___');
            if (!bpfProcessName) {
                bpfProcessName = processName;
            }
            bpfObj[fieldName] = {};
        });
        loadFields(formContext, bpfObj, 'header_process_');
        if (bpfProcessName) {
            process[bpfProcessName] = bpfObj;
        }
    }
    form.Process = process;
    const quickFormObj: any = {};
    quick.forEach((item: string) => {
        const [quickFormName, fieldName] = item.split('___');
        if (!quickFormObj[quickFormName]) {
            quickFormObj[quickFormName] = {};
        }
        if (fieldName) {
            quickFormObj[quickFormName][fieldName] = {};
        }
    });
    loadQuickForms(formContext, quickFormObj);
    form.QuickForm = quickFormObj;
    const gridObj: any = {};
    grid.forEach((item: string) => gridObj[item] = {});
    loadGrids(formContext, gridObj);
    form.Grid = gridObj;
    const navigationObj: any = {};
    navigation.forEach((item: string) => navigationObj[item] = {});
    loadNavigations(formContext, navigationObj);
    form.Navigation = navigationObj;
    if (dialog.length > 0) {
        form.Dialog = LoadFormDialog(formContext, dialog);
    }
    form.Utility = LoadUtility(defaultWebResourceName);
    form.ExecutionContext = LoadExecutionContext(executionContext);
    loadOthers(formContext, form, defaultWebResourceName);
    return form;
}

// ============================================================================
// Process (Business Process Flow) Functions
// ============================================================================

/**
 * Load Business Process Flow wrapper
 * @param formContext The form context
 */
export function LoadProcess(formContext: any): any {
    const process: any = {};
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

// ============================================================================
// FormBase Class - Base class for all entity forms
// Entity forms extend this class to inherit common properties and methods
// ============================================================================

/**
 * Form configuration interface for LoadFormV2
 */
export interface IFormConfig {
    body?: string[];
    header?: string[];
    tab?: string[];
    grid?: string[];
    navigation?: string[];
    quick?: string[];
    bpf?: string[];
}

/**
 * Base class for all entity forms
 * Provides common properties and methods shared across all forms
 * 
 * @template TBody - Entity-specific body interface
 * @template THeader - Entity-specific header interface
 * @template TTab - Entity-specific tabs interface
 * @template TGrid - Entity-specific grid interface
 * @template TNavigation - Entity-specific navigation interface
 * @template TQuickForm - Entity-specific quick form interface
 * @template TProcess - Entity-specific process/BPF interface
 * 
 * @example
 * ```typescript
 * export class AccountForm extends FormBase<IAccountFormBody, IAccountFormHeader, ..., IAccountFormProcess> {
 *     constructor(executionContext: any, defaultWebResourceName?: string) {
 *         super(executionContext, defaultWebResourceName, {
 *             body: ["Name", "Description", ...],
 *             header: ["OwnerId"],
 *             ...
 *         });
 *     }
 * }
 * ```
 */
export class FormBase<TBody, THeader, TTab, TGrid, TNavigation, TQuickForm, TProcess = any> {
    // ========== Entity-Specific Properties ==========
    /** Form body fields */
    public Body: TBody;
    /** Form header fields */
    public Header: THeader;
    /** Form tabs and sections */
    public Tab: TTab;
    /** Form grids/subgrids */
    public Grid: TGrid;
    /** Form navigation items */
    public Navigation: TNavigation;
    /** Quick view forms */
    public QuickForm: TQuickForm;

    // ========== Common Properties ==========
    /** Business Process Flow */
    public Process: TProcess;
    /** Execution context wrapper */
    public ExecutionContext: IExecutionContext;

    /** Form GUID */
    public readonly FormId: string;
    /** Form label/name */
    public readonly FormLabel: string;
    /** Form type (Create=1, Update=2, ReadOnly=3, Disabled=4, BulkEdit=6) */
    public readonly FormType: number;
    /** Entity record GUID */
    public readonly EntityId: string;
    /** Entity logical name */
    public readonly EntityName: string;
    /** Whether form has unsaved changes */
    public readonly DataIsDirty: boolean;
    /** Whether all form data is valid */
    public readonly DataIsValid: boolean;

    // ========== Common Methods ==========
    /** Save the record */
    public Save: (saveOptions?: any) => Promise<void>;
    /** Refresh the form data */
    public Refresh: (save?: boolean) => Promise<void>;
    /** Close the form */
    public Close: () => void;
    /** Set form-level notification */
    public SetFormNotification: (message: string, level: string, uniqueId: string) => boolean;
    /** Clear form-level notification */
    public ClearFormNotification: (uniqueId: string) => boolean;
    /** Refresh the command bar/ribbon */
    public RefreshRibbon: (refreshAll?: boolean) => void;
    /** Add handler for form loaded event */
    public UiAddLoaded: (callback: (context: any) => void) => void;
    /** Remove handler for form loaded event */
    public UiRemoveLoaded: (callback: (context: any) => void) => void;

    /**
     * Create a new form instance
     * @param executionContext Execution context from Dataverse
     * @param defaultWebResourceName Default web resource name for localization
     * @param formConfig Form configuration with field names
     */
    constructor(
        executionContext: any,
        defaultWebResourceName: string | undefined,
        formConfig: IFormConfig
    ) {
        const form = LoadFormV2<TBody, THeader, TTab, TGrid, TNavigation, TQuickForm, TProcess>(
            executionContext,
            defaultWebResourceName,
            formConfig
        );

        // Entity-specific
        this.Body = form.Body;
        this.Header = form.Header;
        this.Tab = form.Tab;
        this.Grid = form.Grid;
        this.Navigation = form.Navigation;
        this.QuickForm = form.QuickForm;

        // Common
        this.Process = form.Process;
        this.ExecutionContext = form.ExecutionContext;
        this.FormId = form.FormId;
        this.FormLabel = form.FormLabel;
        this.FormType = form.FormType;
        this.EntityId = form.EntityId;
        this.EntityName = form.EntityName;
        this.DataIsDirty = form.DataIsDirty;
        this.DataIsValid = form.DataIsValid;
        this.Save = form.Save;
        this.Refresh = form.Refresh;
        this.Close = form.Close;
        this.SetFormNotification = form.SetFormNotification;
        this.ClearFormNotification = form.ClearFormNotification;
        this.RefreshRibbon = form.RefreshRibbon;
        this.UiAddLoaded = form.UiAddLoaded;
        this.UiRemoveLoaded = form.UiRemoveLoaded;
    }
}


// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Load Utility wrapper for common Xrm operations
 * @param defaultWebResourceName Default web resource name for Resource strings
 */
export function LoadUtility(defaultWebResourceName?: string): any {
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
    getter(utility, 'IsOnPremises', () => getGlobalContext?.isOnPremises());
    getter(utility, 'LearningPathAttributeName', () => getUtility?.getLearningPathAttributeName());
    getter(utility, 'OrganizationSettings', () => {
        const obj: any = {};
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
    utility.AdvancedConfigSetting = (setting: string) => getGlobalContext?.getAdvancedConfigSetting(setting);
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
    utility.Resource = (key: string) => getUtility?.getResourceString(defaultWebResourceName, key);
    utility.ResourceString = (webResourceName: string, key: string) => getUtility?.getResourceString(webResourceName, key);
    utility.ShowProgressIndicator = (message: string) => getUtility?.showProgressIndicator(message);
    utility.WebResourceUrl = (webResourceName: string) => getGlobalContext?.getWebResourceUrl(webResourceName);
    utility.XmlAttributeEncode = (arg: string) => getEncoding?.xmlAttributeEncode(arg);
    utility.XmlEncode = (arg: string) => getEncoding?.xmlEncode(arg);

    return utility;
}

// ============================================================================
// FormDialog Functions
// ============================================================================

/**
 * Load Form Dialog wrapper for dialog forms
 * @param formContext The form context
 * @param fields Array of field names to load
 * @returns Dialog form object with field controls and Close method
 */
export function LoadFormDialog(formContext: any, fields: string[]): any {
    const form: any = {};
    const fieldsLength = fields?.length || 0;

    for (let i = 0; i < fieldsLength; i++) {
        const fieldName = fields[i];
        const attribute = formContext?.data?.entity?.attributes?.get(fieldName);
        const control = formContext?.getControl(fieldName);
        form[fieldName] = {};
        loadField(formContext, form[fieldName], attribute, control);
    }

    // Add Close method for dialog
    form.Close = () => formContext?.ui?.close();

    return form;
}

// ============================================================================
// Global OptionSet - Using declare global for namespace merging
// Entity files can extend this with their specific OptionSets
// ============================================================================

// Define global OptionSet values
const GlobalOptionSetValues = {
    AdvancedConfigSetting: Object.freeze({ MaxChildIncidentNumber: 'MaxChildIncidentNumber', MaxIncidentMergeNumber: 'MaxIncidentMergeNumber' }),
    ClientName: Object.freeze({ Web: 'Web', Outlook: 'Outlook', Mobile: 'Mobile' }),
    ClientState: Object.freeze({ Online: 'Online', Offline: 'Offline' }),
    FieldAttributeType: Object.freeze({ Boolean: 'boolean', DateTime: 'datetime', Decimal: 'decimal', Double: 'double', Integer: 'integer', Lookup: 'lookup', Memo: 'memo', Money: 'money', MultiOptionSet: 'multioptionset', OptionSet: 'optionset', String: 'string' }),
    FieldControlType: Object.freeze({ Standard: 'standard', Iframe: 'iframe', KbSearch: 'kbsearch', Lookup: 'lookup', MultiSelectOptionset: 'multiselectoptionset', Notes: 'notes', OptionSet: 'optionset', QuickForm: 'quickform', SubGrid: 'subgrid', TimerControl: 'timercontrol', TimelineWall: 'timelinewall', WebResource: 'webresource' }),
    FieldFormat: Object.freeze({ Date: 'date', DateTime: 'datetime', Duration: 'duration', Email: 'email', Language: 'language', None: 'none', TextArea: 'textarea', Text: 'text', TickerSymbol: 'tickersymbol', Phone: 'phone', TimeZone: 'timezone', Url: 'url' }),
    FieldNotificationLevel: Object.freeze({ Error: 'ERROR', Recommendation: 'RECOMMENDATION' }),
    FieldRequiredLevel: Object.freeze({ None: 'none', Required: 'required', Recommended: 'recommended' }),
    FieldSubmitMode: Object.freeze({ Always: 'always', Never: 'never', Dirty: 'dirty' }),
    FormFactor: Object.freeze({ Unknown: 0, Desktop: 1, Tablet: 2, Phone: 3 }),
    FormNotificationLevel: Object.freeze({ Error: 'ERROR', Warning: 'WARNING', Info: 'INFO' }),
    FormType: Object.freeze({ Undefined: 0, Create: 1, Update: 2, ReadOnly: 3, Disabled: 4, BulkEdit: 5 }),
    FullNameConventionCode: Object.freeze({ LastName_Comma_FirstName: 0, FirstName_LastName: 1, LastName_Comma_FirstName_MiddleInitial: 2, FirstName_MiddleInitial_LastName: 3, LastName_Comma_FirstName_MiddleName: 4, FirstName_MiddleName_LastName: 5, LastName_FirstName: 6, LastNameFirstName: 7 }),
    GridType: Object.freeze({ HomePageGrid: 1, Subgrid: 2 }),
    OpenFileOption: Object.freeze({ Open: 1, Save: 2 }),
    ProcessCategory: Object.freeze({ Qualify: 0, Develop: 1, Propose: 2, Close: 3, Identify: 4, Research: 5, Resolve: 6 }),
    ProcessDisplayState: Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed', Floating: 'floating' }),
    ProcessStatus: Object.freeze({ Active: 'active', Aborted: 'aborted', Finished: 'finished' }),
    SaveMode: Object.freeze({ Save: 1, SaveAndClose: 2, Deactivate: 5, Reactivate: 6, Email: 7, Disqualify: 15, Qualify: 16, Assign: 47, SaveAsCompleted: 58, SaveAndNew: 59, AutoSave: 70 }),
    SaveOption: Object.freeze({ SaveAndClose: 'saveandclose', SaveAndNew: 'saveandnew' }),
    SidePaneState: Object.freeze({ Collapsed: 0, Expanded: 1 }),
    TabContentType: Object.freeze({ CardSections: 'cardSections', SingleComponent: 'singleComponent' }),
    TabDisplayState: Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed' }),
    TimerState: Object.freeze({ NotSet: 1, InProgress: 2, Warning: 3, Violated: 4, Success: 5, Expired: 6, Canceled: 7, Paused: 8 }),
} as const;

// Populate global OptionSet at runtime
(globalThis as any).OptionSet = (globalThis as any).OptionSet || {};
Object.assign((globalThis as any).OptionSet, GlobalOptionSetValues);

// Declare global namespace for TypeScript IntelliSense
declare global {
    namespace OptionSet {
        const AdvancedConfigSetting: typeof GlobalOptionSetValues.AdvancedConfigSetting;
        const ClientName: typeof GlobalOptionSetValues.ClientName;
        const ClientState: typeof GlobalOptionSetValues.ClientState;
        const FieldAttributeType: typeof GlobalOptionSetValues.FieldAttributeType;
        const FieldControlType: typeof GlobalOptionSetValues.FieldControlType;
        const FieldFormat: typeof GlobalOptionSetValues.FieldFormat;
        const FieldNotificationLevel: typeof GlobalOptionSetValues.FieldNotificationLevel;
        const FieldRequiredLevel: typeof GlobalOptionSetValues.FieldRequiredLevel;
        const FieldSubmitMode: typeof GlobalOptionSetValues.FieldSubmitMode;
        const FormFactor: typeof GlobalOptionSetValues.FormFactor;
        const FormNotificationLevel: typeof GlobalOptionSetValues.FormNotificationLevel;
        const FormType: typeof GlobalOptionSetValues.FormType;
        const FullNameConventionCode: typeof GlobalOptionSetValues.FullNameConventionCode;
        const GridType: typeof GlobalOptionSetValues.GridType;
        const OpenFileOption: typeof GlobalOptionSetValues.OpenFileOption;
        const ProcessCategory: typeof GlobalOptionSetValues.ProcessCategory;
        const ProcessDisplayState: typeof GlobalOptionSetValues.ProcessDisplayState;
        const ProcessStatus: typeof GlobalOptionSetValues.ProcessStatus;
        const SaveMode: typeof GlobalOptionSetValues.SaveMode;
        const SaveOption: typeof GlobalOptionSetValues.SaveOption;
        const SidePaneState: typeof GlobalOptionSetValues.SidePaneState;
        const TabContentType: typeof GlobalOptionSetValues.TabContentType;
        const TabDisplayState: typeof GlobalOptionSetValues.TabDisplayState;
        const TimerState: typeof GlobalOptionSetValues.TimerState;
    }
}

// Also export for module usage (backward compatibility)
export { GlobalOptionSetValues as OptionSet };

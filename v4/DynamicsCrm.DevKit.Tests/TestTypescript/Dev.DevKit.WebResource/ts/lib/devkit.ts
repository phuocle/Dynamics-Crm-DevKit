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

function getXrm(): typeof Xrm {
    if (typeof window !== 'undefined' && (window as any).Xrm !== undefined) {
        return (window as any).Xrm;
    }
    if (typeof parent !== 'undefined' && (parent as any).Xrm !== undefined) {
        return (parent as any).Xrm;
    }
    throw new Error('Not found Xrm in the current context');
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
    getter(field, 'AttributeType', () => attribute?.getAttributeType());
    getter(field, 'ControlName', () => control?.getName());
    getter(field, 'ControlType', () => control?.getControlType());
    getter(field, 'Format', () => attribute?.getFormat());
    getter(field, 'IsDirty', () => attribute?.getIsDirty());
    getter(field, 'IsValid', () => attribute?.isValid());
    getter(field, 'Max', () => attribute?.getMax());
    getter(field, 'MaxLength', () => attribute?.getMaxLength());
    getter(field, 'Min', () => attribute?.getMin());
    getter(field, 'Options', () => attribute?.getOptions());
    getter(field, 'SelectedOption', () => attribute?.getSelectedOption());
    getter(field, 'Text', () => attribute?.getText());

    getterSetter(field, 'Disabled', () => control?.getDisabled(), (value: boolean) => {
        if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
        control?.setDisabled(value);
    });
    getterSetter(field, 'Label', () => control?.getLabel(), (value: string) => { control?.setLabel(value); });
    getterSetter(field, 'RequiredLevel', () => attribute?.getRequiredLevel(), (value: string) => { attribute?.setRequiredLevel(value); });
    getterSetter(field, 'SubmitMode', () => attribute?.getSubmitMode(), (value: string) => { attribute?.setSubmitMode(value); });
    getterSetter(field, 'Value', () => attribute?.getValue(), (value: any) => {
        if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
        attribute?.setValue(value);
    });
    getterSetter(field, 'Visible', () => control?.getVisible(), (value: boolean) => { control?.setVisible(value); });

    field.AddOnChange = (callback: (context: any) => void) => attribute?.addOnChange(callback);
    field.RemoveOnChange = (callback: (context: any) => void) => attribute?.removeOnChange(callback);
    field.AddOnOutputChange = (callback: (context: any) => void) => control?.addOnOutputChange?.(callback);
    field.RemoveOnOutputChange = (callback: (context: any) => void) => control?.removeOnOutputChange?.(callback);
    field.FireOnChange = () => attribute?.fireOnChange();
    field.Focus = () => control?.setFocus();
    field.SetNotification = (message: string, uniqueId: string) => control?.setNotification(message, uniqueId);
    field.ClearNotification = (uniqueId: string) => control?.clearNotification(uniqueId);
    field.AddNotification = (notification: any) => control?.addNotification(notification);
    field.SetIsValid = (valid: boolean, message?: string) => attribute?.setIsValid(valid, message);
}

// ============================================================================
// DevKit Module Export
// ============================================================================

/**
 * Load Form V2 - Hàm chính để load form với các fields
 * @param executionContext Execution context từ form
 * @param defaultWebResourceName Tên web resource mặc định
 * @param formConfig Cấu hình form bao gồm body, header, tab, grid, navigation, quick
 */
export function LoadFormV2<TBody, THeader, TTab, TGrid, TNavigation, TQuickForm>(
    executionContext: any,
    defaultWebResourceName: string | undefined,
    formConfig: {
        body?: string[];
        header?: string[];
        tab?: string[];
        grid?: string[];
        navigation?: string[];
        quick?: string[];
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
} {
    const formContext = executionContext?.getFormContext?.() ?? executionContext;
    const contextData = formContext?.data;
    const contextDataEntity = formContext?.data?.entity;
    const contextUi = formContext?.ui;
    const contextUiFormSelector = formContext?.ui?.formSelector;

    // Build Body
    const body: any = {};
    if (formConfig.body) {
        formConfig.body.forEach(fieldName => {
            body[fieldName] = {};
            const logicalName = fieldName.toLowerCase();
            const control = formContext?.getControl(logicalName) ?? formContext?.getControl(fieldName);
            let attribute = formContext?.getAttribute(logicalName);
            if (!attribute && control?.getAttribute) {
                attribute = control.getAttribute();
            }
            loadField(formContext, body[fieldName], attribute, control);
        });
    }

    // Build Header
    const header: any = {};
    if (formConfig.header) {
        formConfig.header.forEach(fieldName => {
            header[fieldName] = {};
            const logicalName = ("header_" + fieldName).toLowerCase();
            const control = formContext?.getControl(logicalName) ?? formContext?.getControl(fieldName);
            let attribute = formContext?.getAttribute(fieldName.toLowerCase());
            if (!attribute && control?.getAttribute) {
                attribute = control.getAttribute();
            }
            loadField(formContext, header[fieldName], attribute, control);
        });
    }

    // Build Tabs (simplified)
    const tab: any = {};
    if (formConfig.tab) {
        formConfig.tab.forEach(tabConfig => {
            const parts = tabConfig.split("___");
            const tabName = parts[0];
            const sectionName = parts.length > 1 ? parts[1] : null;

            if (!tab[tabName]) {
                tab[tabName] = { Section: {} };
                const tabObject = formContext?.ui?.tabs?.get(tabName);
                getter(tab[tabName], 'Name', () => tabObject?.getName());
                getterSetter(tab[tabName], 'Label', () => tabObject?.getLabel(), (value: string) => { tabObject?.setLabel(value); });
                getterSetter(tab[tabName], 'Visible', () => tabObject?.getVisible(), (value: boolean) => { tabObject?.setVisible(value); });
                getterSetter(tab[tabName], 'DisplayState', () => tabObject?.getDisplayState(), (value: string) => { tabObject?.setDisplayState(value); });
                tab[tabName].AddTabStateChange = (callback: any) => tabObject?.addTabStateChange(callback);
                tab[tabName].RemoveTabStateChange = (callback: any) => tabObject?.removeTabStateChange(callback);
                tab[tabName].Focus = () => tabObject?.setFocus();
            }

            if (sectionName) {
                const tabObject = formContext?.ui?.tabs?.get(tabName);
                const sectionObject = tabObject?.sections?.get(sectionName);
                tab[tabName].Section[sectionName] = {};
                getter(tab[tabName].Section[sectionName], 'Name', () => sectionObject?.getName());
                getterSetter(tab[tabName].Section[sectionName], 'Label', () => sectionObject?.getLabel(), (value: string) => sectionObject?.setLabel(value));
                getterSetter(tab[tabName].Section[sectionName], 'Visible', () => sectionObject?.getVisible(), (value: boolean) => sectionObject?.setVisible(value));
            }
        });
    }

    // Build Grid (enhanced with Rows, SelectedRows, ViewSelector)
    const grid: any = {};
    if (formConfig.grid) {
        // Helper to create grid column object
        const loadGridColumn = (col: any) => {
            const colObj: any = {};
            getter(colObj, 'Label', () => col?.controls?.get(0)?.getLabel());
            getter(colObj, 'Name', () => col?.getName());
            getterSetter(colObj, 'Disabled', () => col?.controls?.get(0)?.getDisabled(), (value: boolean) => { col?.controls?.get(0)?.setDisabled(value); });
            getterSetter(colObj, 'RequiredLevel', () => col?.getRequiredLevel(), (value: string) => { col?.setRequiredLevel(value); });
            getterSetter(colObj, 'Value', () => col?.getValue(), (value: any) => { col?.setValue(value); });
            colObj.ClearNotification = (uniqueId: string) => col?.controls?.get(0)?.clearNotification(uniqueId);
            colObj.SetNotification = (message: string, uniqueId: string) => col?.controls?.get(0)?.setNotification(message, uniqueId);
            return colObj;
        };

        // Helper to create grid row object
        const loadGridRow = (row: any) => {
            const rowObj: any = {};
            getter(rowObj, 'Columns', () => {
                const columnsObj: any = {};
                columnsObj.getLength = () => row?.data?.entity?.attributes?.getLength();
                columnsObj.get = (index: number) => {
                    const column = row?.data?.entity?.attributes?.get(index);
                    return loadGridColumn(column);
                };
                columnsObj.forEach = (callback: (col: any, index: number) => void) => {
                    const columns = row?.data?.entity?.attributes;
                    const length = columns?.getLength() || 0;
                    for (let index = 0; index < length; index++) {
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
        };

        // Helper to create collection object
        const createCollectionObject = (getItemsFn: () => any, processItemFn: (item: any) => any) => {
            const obj: any = {};
            obj.getLength = () => getItemsFn()?.getLength();
            obj.get = (index: number) => processItemFn(getItemsFn()?.get(index));
            obj.forEach = (callback: (item: any, index: number) => void) => {
                const items = getItemsFn();
                const length = items?.getLength() || 0;
                for (let index = 0; index < length; index++) {
                    callback(processItemFn(items.get(index)), index);
                }
            };
            return obj;
        };

        formConfig.grid.forEach(gridName => {
            grid[gridName] = {};
            const gridControl = formContext?.getControl(gridName);

            getter(grid[gridName], 'EntityName', () => gridControl?.getEntityName());
            getter(grid[gridName], 'FetchXml', () => gridControl?.getFetchXml());
            getter(grid[gridName], 'GridType', () => gridControl?.getGridType());
            getter(grid[gridName], 'Relationship', () => gridControl?.getRelationship());
            getter(grid[gridName], 'TotalRecordCount', () => gridControl?.getGrid()?.getTotalRecordCount());

            // Rows collection
            getter(grid[gridName], 'Rows', () => {
                const gridInstance = formContext?.getControl(gridName)?.getGrid();
                return createCollectionObject(
                    () => gridInstance?.getRows(),
                    (row: any) => loadGridRow(row)
                );
            });

            // SelectedRows collection
            getter(grid[gridName], 'SelectedRows', () => {
                const gridInstance = formContext?.getControl(gridName)?.getGrid();
                return createCollectionObject(
                    () => gridInstance?.getSelectedRows(),
                    (row: any) => loadGridRow(row?.getData())
                );
            });

            // ViewSelector
            getter(grid[gridName], 'ViewSelector', () => {
                const viewSelector = gridControl?.getViewSelector();
                const viewObj: any = {};
                getter(viewObj, 'Visible', () => viewSelector?.isVisible());
                getterSetter(viewObj, 'CurrentView', () => viewSelector?.getCurrentView(), (value: any) => viewSelector?.setCurrentView(value));
                return viewObj;
            });

            getterSetter(grid[gridName], 'Visible', () => gridControl?.getVisible(), (value: boolean) => { gridControl?.setVisible(value); });
            grid[gridName].AddOnLoad = (callback: any) => gridControl?.addOnLoad(callback);
            grid[gridName].RemoveOnLoad = (callback: any) => gridControl?.removeOnLoad(callback);
            grid[gridName].OpenRelatedGrid = () => gridControl?.openRelatedGrid();
            grid[gridName].Refresh = () => gridControl?.refresh();
            grid[gridName].RefreshRibbon = () => gridControl?.refreshRibbon();
            grid[gridName].Url = (client: number) => gridControl?.getUrl(client);
        });
    }

    // Build Navigation (simplified)
    const navigation: any = {};
    if (formConfig.navigation) {
        formConfig.navigation.forEach(navName => {
            navigation[navName] = {};
            const navItems = formContext?.ui?.navigation?.items;
            let navigationItem: any = null;
            if (navItems) {
                const length = navItems.getLength();
                for (let i = 0; i < length; i++) {
                    const item = navItems.get(i);
                    if (item?.getId() === navName) {
                        navigationItem = item;
                        break;
                    }
                }
            }
            getter(navigation[navName], 'Id', () => navigationItem?.getId());
            getterSetter(navigation[navName], 'Label', () => navigationItem?.getLabel(), (value: string) => navigationItem?.setLabel(value));
            getterSetter(navigation[navName], 'Visible', () => navigationItem?.getVisible(), (value: boolean) => navigationItem?.setVisible(value));
            navigation[navName].Focus = () => navigationItem?.setFocus();
        });
    }

    // Build QuickForm (simplified)
    const quickForm: any = {};
    if (formConfig.quick) {
        formConfig.quick.forEach(quickConfig => {
            const parts = quickConfig.split("___");
            const quickFormName = parts[0];
            const fieldName = parts.length > 1 ? parts[1] : null;

            if (!quickForm[quickFormName]) {
                quickForm[quickFormName] = { Body: {} };
                const quick = formContext?.ui?.quickForms?.get(quickFormName);
                getter(quickForm[quickFormName], 'ControlName', () => quick?.getName());
                getter(quickForm[quickFormName], 'ControlType', () => quick?.getControlType());
                getterSetter(quickForm[quickFormName], 'Disabled', () => quick?.getDisabled(), (value: boolean) => { quick?.setDisabled(value); });
                getterSetter(quickForm[quickFormName], 'Label', () => quick?.getLabel(), (value: string) => { quick?.setLabel(value); });
                getterSetter(quickForm[quickFormName], 'Visible', () => quick?.getVisible(), (value: boolean) => { quick?.setVisible(value); });
                quickForm[quickFormName].IsLoaded = () => quick?.isLoaded();
                quickForm[quickFormName].Refresh = () => quick?.refresh();
                quickForm[quickFormName].Focus = () => quick?.setFocus();
            }

            if (fieldName) {
                quickForm[quickFormName].Body[fieldName] = {};
            }
        });
    }

    // Create ExecutionContext wrapper (complete implementation)
    const executionContextWrapper: any = {};
    getter(executionContextWrapper, 'Depth', () => executionContext?.getDepth());
    getter(executionContextWrapper, 'EntityReference', () => executionContext?.getEventArgs()?.getEntityReference());
    getter(executionContextWrapper, 'EventArgs', () => executionContext?.getEventArgs());
    getter(executionContextWrapper, 'EventSource', () => executionContext?.getEventSource());
    getter(executionContextWrapper, 'FormContext', () => executionContext?.getFormContext());
    getter(executionContextWrapper, 'IsSaveSuccess', () => executionContext?.getEventArgs()?.getIsSaveSuccess());
    getter(executionContextWrapper, 'SaveErrorInfo', () => executionContext?.getEventArgs()?.getSaveErrorInfo());
    getter(executionContextWrapper, 'SaveMode', () => executionContext?.getEventArgs()?.getSaveMode());
    executionContextWrapper.DisableAsyncTimeout = () => executionContext?.getEventArgs()?.disableAsyncTimeout();
    executionContextWrapper.GetSharedVariable = (key: string) => executionContext?.getSharedVariable(key);
    executionContextWrapper.IsDefaultPrevented = () => executionContext?.getEventArgs()?.isDefaultPrevented();
    executionContextWrapper.IsInitialLoad = () => executionContext?.getEventArgs()?.getDataLoadState() === 1;
    executionContextWrapper.SetPreventDefault = () => executionContext?.getEventArgs()?.preventDefault();
    executionContextWrapper.SetPreventDefaultOnError = () => executionContext?.getEventArgs()?.preventDefaultOnError();
    executionContextWrapper.SetSharedVariable = (key: string, value: any) => executionContext?.setSharedVariable(key, value);

    return {
        ExecutionContext: executionContextWrapper,
        Body: body as TBody,
        Header: header as THeader,
        Tab: tab as TTab,
        Grid: grid as TGrid,
        Navigation: navigation as TNavigation,
        QuickForm: quickForm as TQuickForm,
        FormId: contextUiFormSelector?.getCurrentItem()?.getId(),
        FormLabel: contextUiFormSelector?.getCurrentItem()?.getLabel(),
        FormType: contextUi?.getFormType(),
        EntityId: contextDataEntity?.getId(),
        EntityName: contextDataEntity?.getEntityName(),
        DataIsDirty: contextData?.getIsDirty(),
        DataIsValid: contextData?.isValid(),
        Save: (saveOptions?: any) => contextData?.save(saveOptions),
        Refresh: (save?: boolean) => contextData?.refresh(save),
        Close: () => contextUi?.close(),
        SetFormNotification: (message: string, level: string, uniqueId: string) => contextUi?.setFormNotification(message, level, uniqueId),
        ClearFormNotification: (uniqueId: string) => contextUi?.clearFormNotification(uniqueId),
        RefreshRibbon: (refreshAll?: boolean) => contextUi?.refreshRibbon(refreshAll),
        UiAddLoaded: (callback: (context: any) => void) => contextUi?.addLoaded(callback),
        UiRemoveLoaded: (callback: (context: any) => void) => contextUi?.removeLoaded(callback),
    };
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
// Utility Functions
// ============================================================================

/**
 * Load Utility wrapper for common Xrm operations
 * @param defaultWebResourceName Default web resource name for Resource strings
 */
export function LoadUtility(defaultWebResourceName?: string): any {
    const utility: any = {};
    const getApp = (window as any).Xrm?.App;
    const getDevice = (window as any).Xrm?.Device;
    const getEncoding = (window as any).Xrm?.Encoding;
    const getGlobalContext = (window as any).Xrm?.Utility?.getGlobalContext();
    const getNavigation = (window as any).Xrm?.Navigation;
    const getPanel = (window as any).Xrm?.Panel;
    const getUtility = (window as any).Xrm?.Utility;

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
// SidePanes Functions
// ============================================================================

/**
 * Load SidePanes wrapper
 */
export function LoadSidePanes(): any {
    const sidePanes: any = {};
    getterSetter(sidePanes, 'DisplayState', () => (window as any).Xrm?.App?.sidePanes?.state, (value: number) => { (window as any).Xrm.App.sidePanes.state = value; });
    sidePanes.Create = function (paneOptions: any, successCallback?: (result: any) => void) {
        (window as any).Xrm?.App?.sidePanes?.createPane(paneOptions)?.then(successCallback);
    };
    sidePanes.Get = (paneId: string) => (window as any).Xrm?.App?.sidePanes?.getPane(paneId);
    sidePanes.GetAll = () => (window as any).Xrm?.App?.sidePanes?.getAllPanes();
    sidePanes.GetSelected = () => (window as any).Xrm?.App?.sidePanes?.getSelectedPane();
    return sidePanes;
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
// OptionSet Constants
// ============================================================================

export namespace OptionSet {
    export const AdvancedConfigSetting = Object.freeze({ MaxChildIncidentNumber: 'MaxChildIncidentNumber', MaxIncidentMergeNumber: 'MaxIncidentMergeNumber' });
    export const ClientName = Object.freeze({ Web: 'Web', Outlook: 'Outlook', Mobile: 'Mobile' });
    export const ClientState = Object.freeze({ Online: 'Online', Offline: 'Offline' });
    export const FieldAttributeType = Object.freeze({ Boolean: 'boolean', DateTime: 'datetime', Decimal: 'decimal', Double: 'double', Integer: 'integer', Lookup: 'lookup', Memo: 'memo', Money: 'money', MultiOptionSet: 'multioptionset', OptionSet: 'optionset', String: 'string' });
    export const FieldControlType = Object.freeze({ Standard: 'standard', Iframe: 'iframe', KbSearch: 'kbsearch', Lookup: 'lookup', MultiSelectOptionset: 'multiselectoptionset', Notes: 'notes', OptionSet: 'optionset', QuickForm: 'quickform', SubGrid: 'subgrid', TimerControl: 'timercontrol', TimelineWall: 'timelinewall', WebResource: 'webresource' });
    export const FieldFormat = Object.freeze({ Date: 'date', DateTime: 'datetime', Duration: 'duration', Email: 'email', Language: 'language', None: 'none', TextArea: 'textarea', Text: 'text', TickerSymbol: 'tickersymbol', Phone: 'phone', TimeZone: 'timezone', Url: 'url' });
    export const FieldNotificationLevel = Object.freeze({ Error: 'ERROR', Recommendation: 'RECOMMENDATION' });
    export const FieldRequiredLevel = Object.freeze({ None: 'none', Required: 'required', Recommended: 'recommended' });
    export const FieldSubmitMode = Object.freeze({ Always: 'always', Never: 'never', Dirty: 'dirty' });
    export const FormFactor = Object.freeze({ Unknown: 0, Desktop: 1, Tablet: 2, Phone: 3 });
    export const FormNotificationLevel = Object.freeze({ Error: 'ERROR', Warning: 'WARNING', Info: 'INFO' });
    export const FormType = Object.freeze({ Undefined: 0, Create: 1, Update: 2, ReadOnly: 3, Disabled: 4, BulkEdit: 5 });
    export const FullNameConventionCode = Object.freeze({ LastName_Comma_FirstName: 0, FirstName_LastName: 1, LastName_Comma_FirstName_MiddleInitial: 2, FirstName_MiddleInitial_LastName: 3, LastName_Comma_FirstName_MiddleName: 4, FirstName_MiddleName_LastName: 5, LastName_FirstName: 6, LastNameFirstName: 7 });
    export const GridType = Object.freeze({ HomePageGrid: 1, Subgrid: 2 });
    export const OpenFileOption = Object.freeze({ Open: 1, Save: 2 });
    export const ProcessCategory = Object.freeze({ Qualify: 0, Develop: 1, Propose: 2, Close: 3, Identify: 4, Research: 5, Resolve: 6 });
    export const ProcessDisplayState = Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed', Floating: 'floating' });
    export const ProcessStatus = Object.freeze({ Active: 'active', Aborted: 'aborted', Finished: 'finished' });
    export const SaveMode = Object.freeze({ Save: 1, SaveAndClose: 2, Deactivate: 5, Reactivate: 6, Email: 7, Disqualify: 15, Qualify: 16, Assign: 47, SaveAsCompleted: 58, SaveAndNew: 59, AutoSave: 70 });
    export const SaveOption = Object.freeze({ SaveAndClose: 'saveandclose', SaveAndNew: 'saveandnew' });
    export const SidePaneState = Object.freeze({ Collapsed: 0, Expanded: 1 });
    export const TabContentType = Object.freeze({ CardSections: 'cardSections', SingleComponent: 'singleComponent' });
    export const TabDisplayState = Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed' });
    export const TimerState = Object.freeze({ NotSet: 1, InProgress: 2, Warning: 3, Violated: 4, Success: 5, Expired: 6, Canceled: 7, Paused: 8 });
}

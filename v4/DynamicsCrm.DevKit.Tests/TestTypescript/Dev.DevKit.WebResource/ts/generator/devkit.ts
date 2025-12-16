/**
 * DevKit TypeScript Module
 * Đây là phiên bản TypeScript của lib/devkit.js
 * Chỉ convert một phần để chứng minh quá trình convert từ JS sang TS là khả thi
 */

// ============================================================================
// Global Xrm Declaration - Khai báo Xrm từ Dynamics 365
// ============================================================================

// Khai báo Xrm global để TypeScript không báo lỗi
// Trong production, nên cài @types/xrm để có đầy đủ types
declare const Xrm: any;

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
    /** Fire onChange event */
    FireOnChange(): void;
    /** Set focus to control */
    Focus(): void;
    /** Set notification */
    SetNotification(message: string, uniqueId: string): boolean;
    /** Clear notification */
    ClearNotification(uniqueId: string): boolean;
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
    /** Get form context */
    getFormContext(): any;
    /** Check if this is initial load */
    IsInitialLoad(): boolean;
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
    field.FireOnChange = () => attribute?.fireOnChange();
    field.Focus = () => control?.setFocus();
    field.SetNotification = (message: string, uniqueId: string) => control?.setNotification(message, uniqueId);
    field.ClearNotification = (uniqueId: string) => control?.clearNotification(uniqueId);
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

    // Build Grid (simplified)
    const grid: any = {};
    if (formConfig.grid) {
        formConfig.grid.forEach(gridName => {
            grid[gridName] = {};
            const gridControl = formContext?.getControl(gridName);
            getter(grid[gridName], 'EntityName', () => gridControl?.getEntityName());
            getter(grid[gridName], 'FetchXml', () => gridControl?.getFetchXml());
            getter(grid[gridName], 'TotalRecordCount', () => gridControl?.getGrid()?.getTotalRecordCount());
            getterSetter(grid[gridName], 'Visible', () => gridControl?.getVisible(), (value: boolean) => { gridControl?.setVisible(value); });
            grid[gridName].AddOnLoad = (callback: any) => gridControl?.addOnLoad(callback);
            grid[gridName].RemoveOnLoad = (callback: any) => gridControl?.removeOnLoad(callback);
            grid[gridName].Refresh = () => gridControl?.refresh();
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

    // Create ExecutionContext wrapper
    const executionContextWrapper: IExecutionContext = {
        getFormContext: () => formContext,
        IsInitialLoad: () => {
            // Check if this is initial load based on form type
            return contextUi?.getFormType() === 1;
        }
    };

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

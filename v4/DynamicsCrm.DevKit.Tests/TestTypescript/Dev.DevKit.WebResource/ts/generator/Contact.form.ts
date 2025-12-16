/**
 * Contact Form TypeScript Module
 * File này được generator tự động tạo ra
 */

import { LoadFormV2, IStringControl, INumberControl, IBooleanControl, IOptionSetControl, ILookupControl, ITab, ISection, IGrid, INavigationItem } from './devkit';

// ============================================================================
// Contact Form Interfaces
// ============================================================================

/** Interface cho các field trong Body của Contact form */
export interface IContactFormBody {
    /** First Name */
    FirstName: IStringControl;
    /** Last Name */
    LastName: IStringControl;
    /** Full Name */
    FullName: IStringControl;
    /** Email */
    EMailAddress1: IStringControl;
    /** Business Phone */
    Telephone1: IStringControl;
    /** Mobile Phone */
    MobilePhone: IStringControl;
    /** Job Title */
    JobTitle: IStringControl;
    /** Parent Customer (Account or Contact) */
    ParentCustomerId: ILookupControl;
    /** Owner */
    OwnerId: ILookupControl;
    /** Currency */
    TransactionCurrencyId: ILookupControl;
    /** Do Not Email */
    DoNotEMail: IBooleanControl;
    /** Do Not Phone */
    DoNotPhone: IBooleanControl;
    /** Address 1: Street 1 */
    Address1_Line1: IStringControl;
    /** Address 1: City */
    Address1_City: IStringControl;
    /** Address 1: State/Province */
    Address1_StateOrProvince: IStringControl;
    /** Address 1: ZIP/Postal Code */
    Address1_PostalCode: IStringControl;
    /** Address 1: Country/Region */
    Address1_Country: IStringControl;
}

/** Interface cho Header */
export interface IContactFormHeader {
    OwnerId: ILookupControl;
}

/** Interface cho Tabs */
export interface IContactFormTabs {
    [key: string]: ITab & { Section: { [key: string]: ISection } };
}

/** Interface cho Grid */
export interface IContactFormGrid {
    [key: string]: IGrid;
}

/** Interface cho Navigation */
export interface IContactFormNavigation {
    [key: string]: INavigationItem;
}

/** Interface cho QuickForm */
export interface IContactFormQuickForm {
    [key: string]: any;
}

// ============================================================================
// Contact Form Class
// ============================================================================

export class ContactForm {
    public Body: IContactFormBody;
    public Header: IContactFormHeader;
    public Tab: IContactFormTabs;
    public Grid: IContactFormGrid;
    public Navigation: IContactFormNavigation;
    public QuickForm: IContactFormQuickForm;
    public readonly FormId: string;
    public readonly FormLabel: string;
    public readonly FormType: number;
    public readonly EntityId: string;
    public readonly EntityName: string;
    public readonly DataIsDirty: boolean;
    public readonly DataIsValid: boolean;
    public ExecutionContext: any;
    public Save: (saveOptions?: any) => Promise<void>;
    public Refresh: (save?: boolean) => Promise<void>;
    public Close: () => void;
    public SetFormNotification: (message: string, level: string, uniqueId: string) => boolean;
    public ClearFormNotification: (uniqueId: string) => boolean;
    public RefreshRibbon: (refreshAll?: boolean) => void;
    public UiAddLoaded: (callback: (context: any) => void) => void;
    public UiRemoveLoaded: (callback: (context: any) => void) => void;

    constructor(executionContext: any, defaultWebResourceName?: string) {
        const formConfig = {
            body: [
                "FirstName", "LastName", "FullName", "EMailAddress1", "Telephone1",
                "MobilePhone", "JobTitle", "ParentCustomerId", "OwnerId", "TransactionCurrencyId",
                "DoNotEMail", "DoNotPhone", "Address1_Line1", "Address1_City",
                "Address1_StateOrProvince", "Address1_PostalCode", "Address1_Country"
            ],
            header: ["OwnerId"],
            tab: [],
            grid: [],
            navigation: [],
            quick: []
        };

        const form = LoadFormV2<IContactFormBody, IContactFormHeader, IContactFormTabs, IContactFormGrid, IContactFormNavigation, IContactFormQuickForm>(
            executionContext,
            defaultWebResourceName,
            formConfig
        );

        this.ExecutionContext = form.ExecutionContext;
        this.Body = form.Body;
        this.Header = form.Header;
        this.Tab = form.Tab;
        this.Grid = form.Grid;
        this.Navigation = form.Navigation;
        this.QuickForm = form.QuickForm;
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
// OptionSet
// ============================================================================

export namespace OptionSet {
    export namespace Contact {
        export const GenderCode = {
            Male: 1,
            Female: 2
        } as const;

        export const StateCode = {
            Active: 0,
            Inactive: 1
        } as const;

        export const StatusCode = {
            Active: 1,
            Inactive: 2
        } as const;
    }
}

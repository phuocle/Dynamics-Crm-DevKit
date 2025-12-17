/**
 * Account Form - Simplified for Testing
 * Mỗi control type chỉ có 1 field để dễ test
 * @description Uses real Dataverse Account field logical names
 */

/// <reference path="../../lib/devkit.d.ts" />
import { LoadFormV2 } from '../../lib/devkit';

// ============================================================================
// Body Interface - Matches formConfig.body
// All DevKit control types with at least 1 field each
// ============================================================================
export interface IAccountFormBody {
    /** String: Account Name */
    Name: DevKit.Controls.String;
    /** Memo: Description */
    Description: DevKit.Controls.Memo;
    /** Integer: Number of Employees */
    NumberOfEmployees: DevKit.Controls.Integer;
    /** Money: Annual Revenue */
    Revenue: DevKit.Controls.Money;
    /** Boolean: Credit On Hold */
    CreditOnHold: DevKit.Controls.Boolean;
    /** OptionSet: Industry Code */
    IndustryCode: DevKit.Controls.OptionSet;
    /** Lookup: Primary Contact */
    PrimaryContactId: DevKit.Controls.Lookup;
    /** Date (DateOnly): Custom Birthday field */
    v4_Birthday: DevKit.Controls.Date;
    /** DateTime: Custom Appointment Time field */
    v4_AppointmentTime: DevKit.Controls.DateTime;
    /** Decimal: Custom Latitude field */
    v4_Latitude: DevKit.Controls.Decimal;
    /** Double: Custom Discount Percentage field */
    v4_DiscountPercentage: DevKit.Controls.Double;
    /** MultiOptionSet: Custom Categories field */
    v4_Categories: DevKit.Controls.MultiOptionSet;
}

// ============================================================================
// Header Interface - Matches formConfig.header
// ============================================================================
export interface IAccountFormHeader {
    /** Lookup: Owner */
    OwnerId: DevKit.Controls.Lookup;
}

// ============================================================================
// Tab and Section Interfaces - Matches formConfig.tab
// ============================================================================
export interface IDetailsTabSections {
    BILLING: DevKit.Controls.Section;
}

export interface IDetailsTab extends DevKit.Controls.ITab {
    Section: IDetailsTabSections;
}

export interface IAccountFormTabs {
    DETAILS_TAB: IDetailsTab;
}

// ============================================================================
// Grid Interface
// ============================================================================
export interface IAccountFormGrid {
    Contacts: DevKit.Controls.Grid;
}

// ============================================================================
// Navigation Interface - Matches formConfig.navigation
// ============================================================================
export interface IAccountFormNavigation {
    Account_Tasks: DevKit.Controls.NavigationItem;
}

// ============================================================================
// QuickForm Interface - Matches formConfig.quick
// ============================================================================
export interface IAccountFormQuickForm {
    contactquickform: DevKit.Controls.IQuickView & {
        Body: {
            EMailAddress1: DevKit.Controls.QuickView;
        };
    };
}

// ============================================================================
// Account Form Class
// ============================================================================
export class AccountForm {
    public Body: IAccountFormBody;
    public Header: IAccountFormHeader;
    public Tab: IAccountFormTabs;
    public Grid: IAccountFormGrid;
    public Navigation: IAccountFormNavigation;
    public QuickForm: IAccountFormQuickForm;

    public readonly FormId: string;
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
                "Name",                 // String
                "Description",          // Memo
                "NumberOfEmployees",    // Integer
                "Revenue",              // Money
                "CreditOnHold",         // Boolean
                "IndustryCode",         // OptionSet
                "PrimaryContactId",     // Lookup
                "v4_Birthday",          // Date (DateOnly)
                "v4_AppointmentTime",   // DateTime
                "v4_Latitude",          // Decimal
                "v4_DiscountPercentage",// Double
                "v4_Categories",        // MultiOptionSet
            ],
            header: ["OwnerId"],
            tab: ["DETAILS_TAB___BILLING"],
            grid: ["Contacts"],
            navigation: ["Account_Tasks"],
            quick: ["contactquickform___EMailAddress1"]
        };

        const form = LoadFormV2<IAccountFormBody, IAccountFormHeader, IAccountFormTabs, IAccountFormGrid, IAccountFormNavigation, IAccountFormQuickForm>(
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
// OptionSet Values
// ============================================================================
export namespace OptionSet {
    export namespace Account {
        export const IndustryCode = {
            Accounting: 1,
            Consulting: 7,
            Financial: 16,
            Insurance: 20,
            Technology: 12
        } as const;

        /** Custom MultiOptionSet - v4_Categories */
        export const v4_Categories = {
            Category_A: 100000000,
            Category_B: 100000001,
            Category_C: 100000002,
            Category_D: 100000003
        } as const;
    }
}

/**
 * Account Forms - Organized by Namespace
 * @description Supports multiple forms (AccountForm, AnotherAccountForm) with shared OptionSets
 * Uses namespace pattern for better organization and maintainability
 */

/// <reference path="../../lib/devkit.d.ts" />
import { FormBase } from '../../lib/devkit';

// ============================================================================
// NAMESPACE: AccountForm - Main Account Form
// ============================================================================
export namespace AccountForm {
    // Body Interface - ALL DevKit control types
    export interface IBody {
        // ========== Standard Field Controls ==========
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

        // ========== Custom v4_ Field Controls ==========
        /** Date (DateOnly): Custom Birthday field */
        v4_Birthday: DevKit.Controls.DateOnly;
        /** DateTime: Custom Appointment Time field */
        v4_AppointmentTime: DevKit.Controls.DateTime;
        /** Decimal: Custom Latitude field */
        v4_Latitude: DevKit.Controls.Decimal;
        /** Double: Custom Discount Percentage field */
        v4_DiscountPercentage: DevKit.Controls.Double;
        /** MultiOptionSet: Custom Categories field */
        v4_Categories: DevKit.Controls.MultiOptionSet;

        // ========== Specialty Controls ==========
        /** WebResource: Custom Help Web Resource */
        v4_WebResourceHelp: DevKit.Controls.WebResource;
        /** IFrame: Custom External Page */
        v4_IFrameExternal: DevKit.Controls.IFrame;
        /** Timer: Custom SLA Timer */
        v4_TimerSLA: DevKit.Controls.Timer;
        /** Knowledge: Knowledge Base Search */
        v4_KnowledgeSearch: DevKit.Controls.Knowledge;
    }

    // Header Interface
    export interface IHeader {
        /** Lookup: Owner */
        OwnerId: DevKit.Controls.Lookup;
        /** Integer: Number of Employees */
        NumberOfEmployees: DevKit.Controls.Integer;
    }

    // Tab and Section Interfaces
    export interface IDetailsTabSections {
        BILLING: DevKit.Controls.Section;
    }

    export interface IDetailsTab extends DevKit.Controls.ITab {
        Section: IDetailsTabSections;
    }

    export interface ITabs {
        DETAILS_TAB: IDetailsTab;
    }

    // Grid Interface
    export interface IGrid {
        Contacts: DevKit.Controls.Grid;
    }

    // Navigation Interface
    export interface INavigation {
        Account_Tasks: DevKit.Controls.NavigationItem;
    }

    // QuickForm Interface
    export interface IQuickForm {
        contactquickform: DevKit.Controls.IQuickView & {
            Body: {
                EMailAddress1: DevKit.Controls.QuickView;
            };
        };
    }

    // Business Process Flow Interface
    export interface IBPF {
        /** BPF Field: Account Name (Stage 1: Qualify) */
        Name: DevKit.Controls.String;
        /** BPF Field: Industry Code (Stage 1: Qualify) */
        IndustryCode: DevKit.Controls.OptionSet;
        /** BPF Field: Revenue (Stage 2: Develop) */
        Revenue: DevKit.Controls.Money;
        /** BPF Field: Primary Contact (Stage 2: Develop) */
        PrimaryContactId: DevKit.Controls.Lookup;
    }

    // Process Interface
    export interface IProcess extends DevKit.Controls.IProcess {
        /** v4_AccountBPF - Custom Account Business Process Flow */
        v4_AccountBPF: IBPF;
    }

    // Form Class
    export class Form extends FormBase<IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess> {
        constructor(executionContext: any, defaultWebResourceName?: string) {
            super(executionContext, defaultWebResourceName, {
                body: [
                    "Name", "Description", "NumberOfEmployees", "Revenue", "CreditOnHold",
                    "IndustryCode", "PrimaryContactId", "v4_Birthday", "v4_AppointmentTime",
                    "v4_Latitude", "v4_DiscountPercentage", "v4_Categories",
                    "v4_WebResourceHelp", "v4_IFrameExternal", "v4_TimerSLA", "v4_KnowledgeSearch"
                ],
                header: ["OwnerId", "NumberOfEmployees"],
                tab: ["DETAILS_TAB___BILLING"],
                grid: ["Contacts"],
                navigation: ["Account_Tasks"],
                quick: ["contactquickform___EMailAddress1"],
                bpf: [
                    "v4_AccountBPF___Name", "v4_AccountBPF___IndustryCode",
                    "v4_AccountBPF___Revenue", "v4_AccountBPF___PrimaryContactId"
                ]
            });
        }
    }
}

// ============================================================================
// NAMESPACE: AnotherAccountForm - Alternative Account Form
// ============================================================================
export namespace AnotherAccountForm {
    // Body Interface - Different fields for this form
    export interface IBody {
        /** String: Account Name */
        Name: DevKit.Controls.String;
        /** String: Account Number */
        AccountNumber: DevKit.Controls.String;
        /** Memo: Description */
        Description: DevKit.Controls.Memo;
        /** OptionSet: Industry Code */
        IndustryCode: DevKit.Controls.OptionSet;
        /** Lookup: Primary Contact */
        PrimaryContactId: DevKit.Controls.Lookup;
        /** String: Phone */
        Telephone1: DevKit.Controls.String;
        /** String: Email */
        EMailAddress1: DevKit.Controls.String;
    }

    // Header Interface
    export interface IHeader {
        /** Lookup: Owner */
        OwnerId: DevKit.Controls.Lookup;
    }

    // Tab and Section Interfaces
    export interface IGeneralTabSections {
        GENERAL_INFO: DevKit.Controls.Section;
        CONTACT_INFO: DevKit.Controls.Section;
    }

    export interface IGeneralTab extends DevKit.Controls.ITab {
        Section: IGeneralTabSections;
    }

    export interface ITabs {
        GENERAL_TAB: IGeneralTab;
    }

    // Grid Interface
    export interface IGrid {
        Opportunities: DevKit.Controls.Grid;
    }

    // Navigation Interface
    export interface INavigation {
        Account_Emails: DevKit.Controls.NavigationItem;
    }

    // QuickForm Interface - Empty for this form
    export interface IQuickForm {}

    // Process Interface - No BPF for this form
    export interface IProcess extends DevKit.Controls.IProcess {}

    // Form Class
    export class Form extends FormBase<IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess> {
        constructor(executionContext: any, defaultWebResourceName?: string) {
            super(executionContext, defaultWebResourceName, {
                body: [
                    "Name", "AccountNumber", "Description", "IndustryCode",
                    "PrimaryContactId", "Telephone1", "EMailAddress1"
                ],
                header: ["OwnerId"],
                tab: ["GENERAL_TAB___GENERAL_INFO", "GENERAL_TAB___CONTACT_INFO"],
                grid: ["Opportunities"],
                navigation: ["Account_Emails"],
                quick: [],
                bpf: []
            });
        }
    }
}

// ============================================================================
// NAMESPACE: Account.OptionSet - Shared OptionSets for ALL Account Forms
// ============================================================================
export namespace Account {
    export namespace OptionSet {
        /** Industry Code OptionSet */
        export const IndustryCode = Object.freeze({
            Accounting: 1,
            Consulting: 7,
            Financial: 16,
            Insurance: 20,
            Technology: 12
        });

        /** Custom MultiOptionSet - v4_Categories */
        export const v4_Categories = Object.freeze({
            Category_A: 100000000,
            Category_B: 100000001,
            Category_C: 100000002,
            Category_D: 100000003
        });
    }
}

// Populate global OptionSet.Account at runtime for backward compatibility
(globalThis as any).OptionSet = (globalThis as any).OptionSet || {};
(globalThis as any).OptionSet.Account = Account.OptionSet;

// Declare global namespace extension for TypeScript IntelliSense
declare global {
    namespace OptionSet {
        namespace Account {
            const IndustryCode: {
                readonly Accounting: 1;
                readonly Consulting: 7;
                readonly Financial: 16;
                readonly Insurance: 20;
                readonly Technology: 12;
            };
            const v4_Categories: {
                readonly Category_A: 100000000;
                readonly Category_B: 100000001;
                readonly Category_C: 100000002;
                readonly Category_D: 100000003;
            };
        }
    }
}

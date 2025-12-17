/**
 * Account Form - Comprehensive Testing
 * Includes ALL DevKit control types for complete testing coverage
 * @description Uses real Dataverse Account field logical names + custom v4_ fields
 */

/// <reference path="../../lib/devkit.d.ts" />
import { FormBase } from '../../lib/devkit';

// ============================================================================
// Body Interface - ALL DevKit control types
// ============================================================================
export interface IAccountFormBody {
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

    // ========== Custom v4_ Field Controls (Missing in Account entity) ==========
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

    // ========== Specialty Controls (Non-attribute bound) ==========
    /** WebResource: Custom Help Web Resource */
    v4_WebResourceHelp: DevKit.Controls.WebResource;
    /** IFrame: Custom External Page */
    v4_IFrameExternal: DevKit.Controls.IFrame;
    /** Timer: Custom SLA Timer */
    v4_TimerSLA: DevKit.Controls.Timer;
    /** Knowledge: Knowledge Base Search */
    v4_KnowledgeSearch: DevKit.Controls.Knowledge;
}

// ============================================================================
// Header Interface - Matches formConfig.header
// ============================================================================
export interface IAccountFormHeader {
    /** Lookup: Owner */
    OwnerId: DevKit.Controls.Lookup;
    /** Integer: Number of Employees */
    NumberOfEmployees: DevKit.Controls.Integer;
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
// Business Process Flow Interface - v4_AccountBPF
// Stage 1: Qualify (Name, IndustryCode)
// Stage 2: Develop (Revenue, PrimaryContactId)
// ============================================================================
export interface IAccountFormBPF {
    /** BPF Field: Account Name (Stage 1: Qualify) */
    Name: DevKit.Controls.String;
    /** BPF Field: Industry Code (Stage 1: Qualify) */
    IndustryCode: DevKit.Controls.OptionSet;
    /** BPF Field: Revenue (Stage 2: Develop) */
    Revenue: DevKit.Controls.Money;
    /** BPF Field: Primary Contact (Stage 2: Develop) */
    PrimaryContactId: DevKit.Controls.Lookup;
}

// ============================================================================
// Process Interface - Extends IProcess with BPF fields
// ============================================================================
export interface IAccountFormProcess extends DevKit.Controls.IProcess {
    /** v4_AccountBPF - Custom Account Business Process Flow */
    v4_AccountBPF: IAccountFormBPF;
}

// ============================================================================
// Account Form Class - Extends FormBase
// All common properties are inherited from FormBase
// ============================================================================
export class AccountForm extends FormBase<
    IAccountFormBody,
    IAccountFormHeader,
    IAccountFormTabs,
    IAccountFormGrid,
    IAccountFormNavigation,
    IAccountFormQuickForm,
    IAccountFormProcess
> {

    constructor(executionContext: any, defaultWebResourceName?: string) {
        super(executionContext, defaultWebResourceName, {
            body: [
                // Standard Field Controls
                "Name",                 // String
                "Description",          // Memo
                "NumberOfEmployees",    // Integer
                "Revenue",              // Money
                "CreditOnHold",         // Boolean
                "IndustryCode",         // OptionSet
                "PrimaryContactId",     // Lookup
                // Custom v4_ Field Controls
                "v4_Birthday",          // Date (DateOnly)
                "v4_AppointmentTime",   // DateTime
                "v4_Latitude",          // Decimal
                "v4_DiscountPercentage",// Double
                "v4_Categories",        // MultiOptionSet
                // Specialty Controls (control names on form)
                "v4_WebResourceHelp",   // WebResource
                "v4_IFrameExternal",    // IFrame
                "v4_TimerSLA",          // Timer
                "v4_KnowledgeSearch",   // Knowledge Base
            ],
            header: ["OwnerId", "NumberOfEmployees"],
            tab: ["DETAILS_TAB___BILLING"],
            grid: ["Contacts"],
            navigation: ["Account_Tasks"],
            quick: ["contactquickform___EMailAddress1"],
            // Business Process Flow: ProcessName___FieldName
            // v4_AccountBPF has 2 stages: Qualify and Develop
            bpf: [
                // Stage 1: Qualify - Fields shown in BPF header
                "v4_AccountBPF___Name",           // Account Name
                "v4_AccountBPF___IndustryCode",   // Industry
                // Stage 2: Develop - More fields in BPF header
                "v4_AccountBPF___Revenue",        // Revenue
                "v4_AccountBPF___PrimaryContactId" // Primary Contact
            ]
        });
    }
}

// ============================================================================
// OptionSet.Account - Entity-specific OptionSets
// Extends global OptionSet namespace from devkit.ts
// ============================================================================

// Account-specific OptionSet values
const AccountOptionSetValues = {
    IndustryCode: Object.freeze({
        Accounting: 1,
        Consulting: 7,
        Financial: 16,
        Insurance: 20,
        Technology: 12
    }),

    /** Custom MultiOptionSet - v4_Categories */
    v4_Categories: Object.freeze({
        Category_A: 100000000,
        Category_B: 100000001,
        Category_C: 100000002,
        Category_D: 100000003
    })
} as const;

// Populate global OptionSet.Account at runtime
(globalThis as any).OptionSet = (globalThis as any).OptionSet || {};
(globalThis as any).OptionSet.Account = AccountOptionSetValues;

// Declare global namespace extension for TypeScript IntelliSense
declare global {
    namespace OptionSet {
        namespace Account {
            const IndustryCode: typeof AccountOptionSetValues.IndustryCode;
            const v4_Categories: typeof AccountOptionSetValues.v4_Categories;
        }
    }
}

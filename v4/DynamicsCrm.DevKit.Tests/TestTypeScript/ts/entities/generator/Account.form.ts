/**
 * Account Form - TypeScript Implementation
 * @description AccountForm with shared OptionSets
 * Uses namespace pattern for better organization and maintainability
 */

/// <reference path="../../lib/devkit.d.ts" />
import { FormBase } from '../../lib/devkit';
import './OptionSet'; // Import centralized OptionSets

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

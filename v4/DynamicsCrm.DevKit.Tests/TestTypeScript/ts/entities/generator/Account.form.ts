/**
 * Account.form.ts - Account Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 * 
 * Structure:
 * 1. Imports
 * 2. Types - IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess
 * 3. Runtime - Form class with field configurations
 */

/// <reference path="../../lib/devkit.d.ts" />
import { FormBase } from '../../lib/devkit';
import './OptionSet';

// ============================================================================
// 1. Types
// ============================================================================

export namespace AccountForm {

    /**
     * Body controls interface
     * Contains all controls on the form body
     */
    export interface IBody {
        /** Type the company or business name. */
        Name: DevKit.Controls.String;
        /** Type additional information to describe the account. */
        Description: DevKit.Controls.Memo;
        /** Type the number of employees that work at the account. */
        NumberOfEmployees: DevKit.Controls.Integer;
        /** Select whether the credit for the account is on hold. */
        CreditOnHold: DevKit.Controls.Boolean;
        /** Select the account's primary industry. */
        IndustryCode: DevKit.Controls.OptionSet;
        /** Choose the primary contact for the account. */
        PrimaryContactId: DevKit.Controls.Lookup;
        /** Custom Birthday field */
        v4_Birthday: DevKit.Controls.DateOnly;
        /** Custom Appointment Time field */
        v4_AppointmentTime: DevKit.Controls.DateTime;
        /** Custom Latitude field */
        v4_Latitude: DevKit.Controls.Decimal;
        /** Custom Discount Percentage field */
        v4_DiscountPercentage: DevKit.Controls.Double;
        /** Custom Categories field */
        v4_Categories: DevKit.Controls.MultiOptionSet;
        /** Custom Help Web Resource */
        v4_WebResourceHelp: DevKit.Controls.WebResource;
        /** Custom External Page */
        v4_IFrameExternal: DevKit.Controls.IFrame;
        /** Custom SLA Timer */
        v4_TimerSLA: DevKit.Controls.Timer;
        /** Knowledge Base Search */
        v4_KnowledgeSearch: DevKit.Controls.Knowledge;
    }

    /**
     * Header controls interface
     * Contains controls displayed in the form header
     */
    export interface IHeader {
        /** Enter the user or team who is assigned to manage the record. */
        OwnerId: DevKit.Controls.Lookup;
        /** Type the number of employees that work at the account. */
        NumberOfEmployees: DevKit.Controls.Integer;
        /** Type the annual revenue for the account. */
        Revenue: DevKit.Controls.Money;
    }

    /**
     * Details tab sections interface
     */
    export interface IDetailsTabSections {
        BILLING: DevKit.Controls.Section;
    }

    /**
     * Details tab interface
     */
    export interface IDetailsTab extends DevKit.Controls.ITab {
        Section: IDetailsTabSections;
    }

    /**
     * Tabs interface
     * Contains all tabs on the form
     */
    export interface ITabs {
        DETAILS_TAB: IDetailsTab;
    }

    /**
     * Grid controls interface
     * Contains all subgrid controls on the form
     */
    export interface IGrid {
        Contacts: DevKit.Controls.Grid;
    }

    /**
     * Navigation interface
     * Contains navigation items
     */
    export interface INavigation {
        Account_Tasks: DevKit.Controls.NavigationItem;
    }

    /**
     * QuickForm interface
     * Contains quick view form controls
     */
    export interface IQuickForm {
        contactquickform: DevKit.Controls.IQuickView & {
            Body: {
                EMailAddress1: DevKit.Controls.QuickView;
            };
        };
    }

    /**
     * Business Process Flow fields interface
     * v4_AccountBPF - Custom Account Business Process Flow
     */
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

    /**
     * Process interface
     * Contains business process flow definitions
     */
    export interface IProcess extends DevKit.Controls.IProcess {
        /** v4_AccountBPF - Custom Account Business Process Flow */
        v4_AccountBPF: IBPF;
    }

    // ============================================================================
    // 2. Runtime - Form Class
    // ============================================================================

    /**
     * Account Form class
     * Provides typed access to all form controls
     */
    export class Form extends FormBase<IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess> {
        /**
         * Creates an Account Form instance
         * @param executionContext The execution context from form event
         * @param defaultWebResourceName Optional default web resource name
         */
        constructor(executionContext: any, defaultWebResourceName?: string) {
            super(executionContext, defaultWebResourceName, {
                body: [
                    'Name',
                    'Description',
                    'NumberOfEmployees',
                    'CreditOnHold',
                    'IndustryCode',
                    'PrimaryContactId',
                    'v4_Birthday',
                    'v4_AppointmentTime',
                    'v4_Latitude',
                    'v4_DiscountPercentage',
                    'v4_Categories',
                    'v4_WebResourceHelp',
                    'v4_IFrameExternal',
                    'v4_TimerSLA',
                    'v4_KnowledgeSearch'
                ],
                header: [
                    'OwnerId',
                    'NumberOfEmployees',
                    'Revenue',
                ],
                tab: [
                    'DETAILS_TAB___BILLING'
                ],
                grid: [
                    'Contacts'
                ],
                navigation: [
                    'Account_Tasks'
                ],
                quick: [
                    'contactquickform___EMailAddress1'
                ],
                bpf: [
                    'v4_AccountBPF___Name',
                    'v4_AccountBPF___IndustryCode',
                    'v4_AccountBPF___Revenue',
                    'v4_AccountBPF___PrimaryContactId'
                ]
            });
        }
    }
}

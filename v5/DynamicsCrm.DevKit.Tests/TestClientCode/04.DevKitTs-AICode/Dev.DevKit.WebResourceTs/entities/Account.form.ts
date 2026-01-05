/**
 * Account.form.ts - Account Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 * 
 * Structure:
 * 1. Imports
 * 2. Types - IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess
 * 3. Runtime - Form class with field configurations
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

// ============================================================================
// 1. Types
// ============================================================================

export namespace FormAccount_DevKitV4 {

    /**
     * Body controls interface
     * Contains all controls on the form body
     */
    export interface IBody {
        /** Contacts subgrid */
        Contacts: DevKit.Controls.Grid;
        /** External IFrame - PhuocLe */
        IFRAME_PhuocLe: DevKit.Controls.IFrame;
        /** Enter the user or team who is assigned to manage the record. */
        OwnerId: DevKit.Controls.Lookup;
        /** Enter the user or team who is assigned to manage the record (2nd control). */
        OwnerId1: DevKit.Controls.Lookup;
        /** Custom Boolean field */
        v4_Boolean: DevKit.Controls.Boolean;
        /** Custom DateOnly field */
        v4_DateOnly: DevKit.Controls.DateOnly;
        /** Custom DateTime field */
        v4_DateTime: DevKit.Controls.DateTime;
        /** Custom Decimal field */
        v4_Decimal: DevKit.Controls.Decimal;
        /** Custom Double field */
        v4_Double: DevKit.Controls.Double;
        /** Custom Integer field */
        v4_Integer: DevKit.Controls.Integer;
        /** Custom Lookup field */
        v4_Lookup: DevKit.Controls.Lookup;
        /** Custom Lookup field (2nd control) */
        v4_Lookup1: DevKit.Controls.Lookup;
        /** Custom Lookup field (3rd control) */
        v4_Lookup2: DevKit.Controls.Lookup;
        /** Custom Memo field */
        v4_Memo: DevKit.Controls.Memo;
        /** Custom Money field */
        v4_Money: DevKit.Controls.Money;
        /** Custom MultiOptionSet field */
        v4_MultiOptionSet: DevKit.Controls.MultiOptionSet;
        /** Custom OptionSet field */
        v4_OptionSet: DevKit.Controls.OptionSet;
        /** Custom String field */
        v4_String: DevKit.Controls.String;
        /** Custom String field (2nd control) */
        v4_String1: DevKit.Controls.String;
        /** Custom String field (3rd control) */
        v4_String2: DevKit.Controls.String;
        /** WebResource control */
        WebResource_DevKitV4: DevKit.Controls.WebResource;
        /** Form Tabs */
        Tab: ITabs;
    }

    /**
     * Header controls interface
     * Contains controls displayed in the form header
     */
    export interface IHeader {
        /** Custom Integer field */
        v4_Integer: DevKit.Controls.Integer;
        /** Custom Integer field (2nd control) */
        v4_Integer1: DevKit.Controls.Integer;
        /** Custom OptionSet field */
        v4_OptionSet: DevKit.Controls.OptionSet;
        /** Custom String field */
        v4_String: DevKit.Controls.String;
    }

    /**
     * TAB_1_SECTION_1 sections interface
     */
    export interface ITAB_1TabSections {
        TAB_1_SECTION_1: DevKit.Controls.Section;
        TAB_1_SECTION_2: DevKit.Controls.Section;
        TAB_1_SECTION_3: DevKit.Controls.Section;
        TAB_1_SECTION_4: DevKit.Controls.Section;
    }

    /**
     * TAB_2 sections interface
     */
    export interface ITAB_2TabSections {
        TAB_2_SECTION_1: DevKit.Controls.Section;
        TAB_2_SECTION_2: DevKit.Controls.Section;
    }

    /**
     * TAB_1 tab interface
     */
    export interface ITAB_1Tab extends DevKit.Controls.ITab {
        Section: ITAB_1TabSections;
    }

    /**
     * TAB_2 tab interface
     */
    export interface ITAB_2Tab extends DevKit.Controls.ITab {
        Section: ITAB_2TabSections;
    }

    /**
     * Tabs interface
     * Contains all tabs on the form
     */
    export interface ITabs {
        TAB_1: ITAB_1Tab;
        TAB_2: ITAB_2Tab;
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
        navActivities: DevKit.Controls.NavigationItem;
        navContacts: DevKit.Controls.NavigationItem;
        account_adx_inviteredemptions: DevKit.Controls.NavigationItem;
        account_adx_portalcomments: DevKit.Controls.NavigationItem;
        Account_Appointments: DevKit.Controls.NavigationItem;
        account_DeletedItemReferences: DevKit.Controls.NavigationItem;
        Account_Email_EmailSender: DevKit.Controls.NavigationItem;
        Account_Email_SendersAccount: DevKit.Controls.NavigationItem;
        Account_Emails: DevKit.Controls.NavigationItem;
        account_parent_account: DevKit.Controls.NavigationItem;
        Account_Phonecalls: DevKit.Controls.NavigationItem;
        Account_Tasks: DevKit.Controls.NavigationItem;
        adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
        bpf_account_v4_accountbpf: DevKit.Controls.NavigationItem;
        contact_customer_accounts: DevKit.Controls.NavigationItem;
        msa_account_managingpartner: DevKit.Controls.NavigationItem;
        msa_contact_managingpartner: DevKit.Controls.NavigationItem;
    }

    /**
     * ContactQuickForm quick view control body interface
     */
    export interface IContactQuickFormBody {
        EMailAddress1: DevKit.Controls.QuickView;
        FirstName: DevKit.Controls.QuickView;
        LastName: DevKit.Controls.QuickView;
        MobilePhone: DevKit.Controls.QuickView;
        ParentCustomerId: DevKit.Controls.QuickView;
    }

    /**
     * QuickForm interface
     * Contains quick view form controls
     */
    export interface IQuickForm {
        ContactQuickForm: DevKit.Controls.IQuickView & {
            Body: IContactQuickFormBody;
        };
    }

    /**
     * AccountBPF Business Process Flow fields interface
     */
    export interface IAccountBPF {
        /** BPF Field: Industry Code */
        IndustryCode: DevKit.Controls.OptionSet;
        /** BPF Field: Name */
        Name: DevKit.Controls.String;
        /** BPF Field: Primary Contact */
        PrimaryContactId: DevKit.Controls.Lookup;
        /** BPF Field: Revenue */
        Revenue: DevKit.Controls.Money;
    }

    /**
     * Process interface
     * Contains business process flow definitions
     */
    export interface IProcess extends DevKit.Controls.IProcess {
        /** AccountBPF - Account Business Process Flow */
        AccountBPF: IAccountBPF;
    }

    /**
     * Dialog interface
     * For quick create dialogs or other dialog forms
     */
    export interface IDialog extends DevKit.IDialog {
        /** Telephone1 field for dialog */
        Telephone1: DevKit.Controls.String;
    }

    // ============================================================================
    // 2. Runtime - Form Class
    // ============================================================================

    /**
     * Account Form class
     * Provides typed access to all form controls
     */
    export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
        /**
         * Creates an Account Form instance
         * @param executionContext The execution context from form event
         * @param defaultWebResourceName Optional default web resource name
         */
        constructor(executionContext: any, defaultWebResourceName?: string) {
            super(executionContext, defaultWebResourceName, {
                body: [
                    'Contacts',
                    'IFRAME_PhuocLe',
                    'OwnerId',
                    'OwnerId1',
                    'v4_Boolean',
                    'v4_DateOnly',
                    'v4_DateTime',
                    'v4_Decimal',
                    'v4_Double',
                    'v4_Integer',
                    'v4_Lookup',
                    'v4_Lookup1',
                    'v4_Lookup2',
                    'v4_Memo',
                    'v4_Money',
                    'v4_MultiOptionSet',
                    'v4_OptionSet',
                    'v4_String',
                    'v4_String1',
                    'v4_String2',
                    'WebResource_DevKitV4'
                ],
                header: [
                    'v4_Integer',
                    'v4_Integer1',
                    'v4_OptionSet',
                    'v4_String'
                ],
                tab: [
                    'TAB_1___TAB_1_SECTION_1',
                    'TAB_1___TAB_1_SECTION_2',
                    'TAB_1___TAB_1_SECTION_3',
                    'TAB_1___TAB_1_SECTION_4',
                    'TAB_2___TAB_2_SECTION_1',
                    'TAB_2___TAB_2_SECTION_2'
                ],
                grid: [
                    'Contacts'
                ],
                navigation: [
                    'navActivities',
                    'navContacts',
                    'account_adx_inviteredemptions',
                    'account_adx_portalcomments',
                    'Account_Appointments',
                    'account_DeletedItemReferences',
                    'Account_Email_EmailSender',
                    'Account_Email_SendersAccount',
                    'Account_Emails',
                    'account_parent_account',
                    'Account_Phonecalls',
                    'Account_Tasks',
                    'adx_invitation_assigntoaccount',
                    'bpf_account_v4_accountbpf',
                    'contact_customer_accounts',
                    'msa_account_managingpartner',
                    'msa_contact_managingpartner'
                ],
                quick: [
                    'ContactQuickForm___EMailAddress1',
                    'ContactQuickForm___FirstName',
                    'ContactQuickForm___LastName',
                    'ContactQuickForm___MobilePhone',
                    'ContactQuickForm___ParentCustomerId'
                ],
                bpf: [
                    'AccountBPF___IndustryCode',
                    'AccountBPF___Name',
                    'AccountBPF___PrimaryContactId',
                    'AccountBPF___Revenue'
                ],
                dialog: [
                    'Telephone1'
                ]
            });
        }
    }
}
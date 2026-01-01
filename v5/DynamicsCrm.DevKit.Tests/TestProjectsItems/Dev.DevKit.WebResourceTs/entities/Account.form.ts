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
		/** Form Tabs */
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader {
		v4_Integer: DevKit.Controls.Integer;
		v4_Integer1: DevKit.Controls.Integer;
		v4_OptionSet: DevKit.Controls.OptionSet;
		v4_String: DevKit.Controls.String;
	}
	/**
	 * TAB_1 sections interface
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
		nav_adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
		nav_msa_account_managingpartner: DevKit.Controls.NavigationItem;
		nav_msa_contact_managingpartner: DevKit.Controls.NavigationItem;
		navActivities: DevKit.Controls.NavigationItem;
		navAddresses: DevKit.Controls.NavigationItem;
		navAsyncOperations: DevKit.Controls.NavigationItem;
		navAudit: DevKit.Controls.NavigationItem;
		navCampaignsInSFA: DevKit.Controls.NavigationItem;
		navConnections: DevKit.Controls.NavigationItem;
		navContacts: DevKit.Controls.NavigationItem;
		navProcessSessions: DevKit.Controls.NavigationItem;
		navRelationships: DevKit.Controls.NavigationItem;
		navSocialprofiles: DevKit.Controls.NavigationItem;
		navSubAccts: DevKit.Controls.NavigationItem;
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
	 * Process interface
	 * Contains business process flow definitions
	 */
	export interface IProcess extends DevKit.Controls.IProcess {
		/** AccountBPF - AccountBPF */
		AccountBPF: IAccountBPF;
	}

	/**
	 * AccountBPF Business Process Flow fields interface
	 */
	export interface IAccountBPF {
		/** BPF Field: Industry */
		IndustryCode: DevKit.Controls.OptionSet;
		/** BPF Field: Account Name */
		Name: DevKit.Controls.String;
		/** BPF Field: Primary Contact */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** BPF Field: Annual Revenue */
		Revenue: DevKit.Controls.Money;
	}

	/**
	 * Dialog interface
	 * For quick create dialogs or other dialog forms
	 */
	export interface IDialog extends DevKit.IDialog {
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
					'ownerid',
					'v4_boolean',
					'v4_dateonly',
					'v4_datetime',
					'v4_decimal',
					'v4_double',
					'v4_integer',
					'v4_lookup',
					'v4_memo',
					'v4_money',
					'v4_multioptionset',
					'v4_optionset',
					'v4_string',
					'WebResource_DevKitV4'
				],
				header: [
					'v4_integer',
					'v4_integer',
					'v4_optionset',
					'v4_string'
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
					'nav_adx_invitation_assigntoaccount',
					'nav_msa_account_managingpartner',
					'nav_msa_contact_managingpartner',
					'navActivities',
					'navAddresses',
					'navAsyncOperations',
					'navAudit',
					'navCampaignsInSFA',
					'navConnections',
					'navContacts',
					'navProcessSessions',
					'navRelationships',
					'navSocialprofiles',
					'navSubAccts'
				],
				quick: [
					'ContactQuickForm___EMailAddress1',
					'ContactQuickForm___FirstName',
					'ContactQuickForm___LastName',
					'ContactQuickForm___MobilePhone',
					'ContactQuickForm___ParentCustomerId'
				],
				bpf: [
					'AccountBPF___IndustryCode_1',
					'AccountBPF___Name',
					'AccountBPF___PrimaryContactId',
					'AccountBPF___Revenue_1'
				],
				dialog: [
					
				]
			});
		}
	}
}


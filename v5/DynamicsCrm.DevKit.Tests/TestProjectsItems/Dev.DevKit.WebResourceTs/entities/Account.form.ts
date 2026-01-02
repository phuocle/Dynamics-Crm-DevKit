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

	export interface IBody {
		OwnerId: DevKit.Controls.Lookup;
		IFRAME_PhuocLe: DevKit.Controls.IFrame;
		OwnerId1: DevKit.Controls.Lookup;
		OwnerId2: DevKit.Controls.Lookup;
		OwnerId3: DevKit.Controls.Lookup;
		v4_Boolean: DevKit.Controls.Boolean;
		v4_DateOnly: DevKit.Controls.DateOnly;
		v4_DateTime: DevKit.Controls.DateTime;
		v4_Decimal: DevKit.Controls.Decimal;
		v4_Double: DevKit.Controls.Double;
		v4_Integer: DevKit.Controls.Integer;
		v4_Lookup: DevKit.Controls.Lookup;
		v4_Lookup1: DevKit.Controls.Lookup;
		v4_Memo: DevKit.Controls.Memo;
		v4_Money: DevKit.Controls.Money;
		v4_MultiOptionSet: DevKit.Controls.MultiOptionSet;
		v4_OptionSet: DevKit.Controls.OptionSet;
		v4_String: DevKit.Controls.String;
		v4_String1: DevKit.Controls.String;
		v4_String2: DevKit.Controls.String;
		WebResource_DevKitV4: DevKit.Controls.WebResource;
		Tab: ITabs;
	}

	export interface IHeader {
		v4_Integer: DevKit.Controls.Integer;
		v4_Integer1: DevKit.Controls.Integer;
		v4_OptionSet: DevKit.Controls.OptionSet;
		v4_String: DevKit.Controls.String;
	}
	export interface ITAB_1TabSections {
		TAB_1_SECTION_1: DevKit.Controls.Section;
		TAB_1_SECTION_2: DevKit.Controls.Section;
		TAB_1_SECTION_3: DevKit.Controls.Section;
		TAB_1_SECTION_4: DevKit.Controls.Section;
	}

	export interface ITAB_2TabSections {
		TAB_2_SECTION_1: DevKit.Controls.Section;
		TAB_2_SECTION_2: DevKit.Controls.Section;
	}

	export interface ITAB_1Tab extends DevKit.Controls.ITab {
		Section: ITAB_1TabSections;
	}

	export interface ITAB_2Tab extends DevKit.Controls.ITab {
		Section: ITAB_2TabSections;
	}

	export interface ITabs {
		TAB_1: ITAB_1Tab;
		TAB_2: ITAB_2Tab;
	}

	export interface IGrid {
		Contacts: DevKit.Controls.Grid;
	}

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

	export interface IQuickForm {
		ContactQuickForm: DevKit.Controls.IQuickView & {
			Body: IContactQuickFormBody;
		};
	}

	export interface IContactQuickFormBody {
		EMailAddress1: DevKit.Controls.QuickView;
		FirstName: DevKit.Controls.QuickView;
		LastName: DevKit.Controls.QuickView;
		MobilePhone: DevKit.Controls.QuickView;
		ParentCustomerId: DevKit.Controls.QuickView;
	}

	export interface IProcess extends DevKit.Controls.IProcess {
		AccountBPF: IAccountBPF;
	}

	export interface IAccountBPF {
		IndustryCode: DevKit.Controls.OptionSet;
		Name: DevKit.Controls.String;
		PrimaryContactId: DevKit.Controls.Lookup;
		Revenue: DevKit.Controls.Money;
	}

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
					'OwnerId',
					'IFRAME_PhuocLe',
					'OwnerId1',
					'OwnerId2',
					'OwnerId3',
					'v4_Boolean',
					'v4_DateOnly',
					'v4_DateTime',
					'v4_Decimal',
					'v4_Double',
					'v4_Integer',
					'v4_Lookup',
					'v4_Lookup1',
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


/**
 * Publisher.form.ts - Publisher Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Publisher containing form classes: Publisher.FormClassName
 * 3. Aggregate Form class: Publisher.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Publisher {

	// ========================================================================
	// Form: Publisher_Information
	// ========================================================================

	export namespace Publisher_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** City name for address 1. */
			Address1_City: DevKit.Controls.String;
			/** Country/region name for address 1. */
			Address1_Country: DevKit.Controls.String;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Controls.String;
			/** Second line for entering address 1 information. */
			Address1_Line2: DevKit.Controls.String;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Default option value prefix used for newly created options for solutions associated with this publisher. */
			CustomizationOptionValuePrefix: DevKit.Controls.Integer;
			/** Prefix used for new entities, attributes, and entity relationships for solutions associated with this publisher. */
			CustomizationPrefix: DevKit.Controls.String;
			/** Description of the solution. */
			Description: DevKit.Controls.String;
			/** Email address for the publisher. */
			EMailAddress: DevKit.Controls.String;
			/** User display name for this publisher. */
			FriendlyName: DevKit.Controls.String;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** URL for the supporting website of this publisher. */
			SupportingWebsiteUrl: DevKit.Controls.String;
			/** The unique name of this publisher. */
			UniqueName: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_70098AD5_4956_11DD_982E_00188B01DCE6TabSections {
			_70098AD6_4956_11DD_982E_00188B01DCE6: DevKit.Controls.Section;
			/** Set the prefix name for custom entities and fields */
			_EAF2EDB4_7C5E_DD11_940F_00155D8AC303: DevKit.Controls.Section;
			/** Description */
			description: DevKit.Controls.Section;
		}

		export interface I_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343TabSections {
			/** Address */
			_6FE75F79_0CA8_4DBE_8C7B_6E68C17DE013: DevKit.Controls.Section;
			/** Use this information to contact the company responsible for solutions related to this publisher */
			_CBF04024_5749_444C_BC51_CFAF839688BF: DevKit.Controls.Section;
		}

		export interface Isolutions_marketplaceTabSections {
			/** Marketplace */
			marketplacesection: DevKit.Controls.Section;
		}

		/** General */
		export interface I_70098AD5_4956_11DD_982E_00188B01DCE6Tab extends DevKit.Controls.ITab {
			Section: I_70098AD5_4956_11DD_982E_00188B01DCE6TabSections;
		}

		/** Contact Details */
		export interface I_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343Tab extends DevKit.Controls.ITab {
			Section: I_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343TabSections;
		}

		/** Marketplace */
		export interface Isolutions_marketplaceTab extends DevKit.Controls.ITab {
			Section: Isolutions_marketplaceTabSections;
		}

		export interface ITabs {
			/** General */
			_70098AD5_4956_11DD_982E_00188B01DCE6: I_70098AD5_4956_11DD_982E_00188B01DCE6Tab;
			/** Contact Details */
			_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343: I_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343Tab;
			/** Marketplace */
			solutions_marketplace: Isolutions_marketplaceTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
		}

		/**
		 * QuickForm interface
		 * Contains quick view form controls
		 */
		export interface IQuickForm {
		}

		/**
		 * Process interface
		 * Contains business process flow definitions
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

		/**
		 * Dialog interface
		 * For quick create dialogs or other dialog forms
		 */
		export interface IDialog extends DevKit.IDialog {
		}
	}

	/**
	 * Publisher_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Publisher.Publisher_Information(executionContext)
	 */
	export class Publisher_Information extends FormBase<Publisher_Information.IBody, Publisher_Information.IHeader, Publisher_Information.IGrid, Publisher_Information.INavigation, Publisher_Information.IQuickForm, Publisher_Information.IProcess, Publisher_Information.IDialog> {
		/**
		 * Creates a Publisher_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Address1_City', 'Address1_Country', 'Address1_Line1', 'Address1_Line2', 'Address1_PostalCode', 'Address1_StateOrProvince', 'Address1_Telephone1', 'CustomizationOptionValuePrefix', 'CustomizationPrefix', 'Description', 'EMailAddress', 'FriendlyName', 'IFRAME_SolutionsMarketplace', 'SupportingWebsiteUrl', 'UniqueName'],
				header: [],
				tab: ['_70098AD5_4956_11DD_982E_00188B01DCE6____70098AD6_4956_11DD_982E_00188B01DCE6', '_70098AD5_4956_11DD_982E_00188B01DCE6____EAF2EDB4_7C5E_DD11_940F_00155D8AC303', '_70098AD5_4956_11DD_982E_00188B01DCE6___description', '_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343____6FE75F79_0CA8_4DBE_8C7B_6E68C17DE013', '_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343____CBF04024_5749_444C_BC51_CFAF839688BF', 'solutions_marketplace___marketplacesection'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Aggregate Form: Form (contains all fields from all forms)
	// ========================================================================

	export namespace AllInOne {

		/**
		 * Aggregate Body controls interface
		 * Contains all controls from all forms on the entity
		 */
		export interface IBody {
			/** City name for address 1. */
			Address1_City: DevKit.Controls.String;
			/** Country/region name for address 1. */
			Address1_Country: DevKit.Controls.String;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Controls.String;
			/** Second line for entering address 1 information. */
			Address1_Line2: DevKit.Controls.String;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Default option value prefix used for newly created options for solutions associated with this publisher. */
			CustomizationOptionValuePrefix: DevKit.Controls.Integer;
			/** Prefix used for new entities, attributes, and entity relationships for solutions associated with this publisher. */
			CustomizationPrefix: DevKit.Controls.String;
			/** Description of the solution. */
			Description: DevKit.Controls.String;
			/** Email address for the publisher. */
			EMailAddress: DevKit.Controls.String;
			/** User display name for this publisher. */
			FriendlyName: DevKit.Controls.String;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** URL for the supporting website of this publisher. */
			SupportingWebsiteUrl: DevKit.Controls.String;
			/** The unique name of this publisher. */
			UniqueName: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
		}

		/**
		 * Aggregate QuickForm interface
		 */
		export interface IQuickForm {
		}

		/**
		 * Aggregate Process interface
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

	}

	/**
	 * Aggregate Form class
	 * Contains all fields from all forms - useful when form type is unknown at compile time
	 * Usage: new Publisher.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Publisher Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Address1_City', 'Address1_Country', 'Address1_Line1', 'Address1_Line2', 'Address1_PostalCode', 'Address1_StateOrProvince', 'Address1_Telephone1', 'CustomizationOptionValuePrefix', 'CustomizationPrefix', 'Description', 'EMailAddress', 'FriendlyName', 'IFRAME_SolutionsMarketplace', 'SupportingWebsiteUrl', 'UniqueName'],
				header: [],
				tab: ['{70098AD5-4956-11DD-982E-00188B01DCE6}___{70098AD6-4956-11DD-982E-00188B01DCE6}', '{70098AD5-4956-11DD-982E-00188B01DCE6}___{eaf2edb4-7c5e-dd11-940f-00155d8ac303}', '{70098AD5-4956-11DD-982E-00188B01DCE6}___description', '{E1F7A9C9-A0E6-4C8B-ACBD-C6610FBD2343}___{6FE75F79-0CA8-4DBE-8C7B-6E68C17DE013}', '{E1F7A9C9-A0E6-4C8B-ACBD-C6610FBD2343}___{CBF04024-5749-444C-BC51-CFAF839688BF}', 'solutions marketplace___marketplacesection'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * BusinessUnit.form.ts - BusinessUnit Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace BusinessUnit containing form classes: BusinessUnit.FormClassName
 * 3. Aggregate Form class: BusinessUnit.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace BusinessUnit {

	// ========================================================================
	// Form: BusinessUnit_Information
	// ========================================================================

	export namespace BusinessUnit_Information {

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
			/** Third line for entering address 1 information. */
			Address1_Line3: DevKit.Controls.String;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** City name for address 2. */
			Address2_City: DevKit.Controls.String;
			/** Country/region name for address 2. */
			Address2_Country: DevKit.Controls.String;
			/** First line for entering address 2 information. */
			Address2_Line1: DevKit.Controls.String;
			/** Second line for entering address 2 information. */
			Address2_Line2: DevKit.Controls.String;
			/** Third line for entering address 2 information. */
			Address2_Line3: DevKit.Controls.String;
			/** ZIP Code or postal code for address 2. */
			Address2_PostalCode: DevKit.Controls.String;
			/** State or province for address 2. */
			Address2_StateOrProvince: DevKit.Controls.String;
			/** Name of the division to which the business unit belongs. */
			DivisionName: DevKit.Controls.String;
			/** Email address for the business unit. */
			EMailAddress: DevKit.Controls.String;
			/** Name of the business unit. */
			Name: DevKit.Controls.String;
			/** Unique identifier for the parent business unit. */
			ParentBusinessUnitId: DevKit.Controls.Lookup;
			/** Website URL for the business unit. */
			WebSiteUrl: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IaddressesTabSections {
			/** Bill To Address */
			bill_to_address: DevKit.Controls.Section;
			/** Ship To Address */
			ship_to_address: DevKit.Controls.Section;
		}

		export interface IgeneralTabSections {
			/** Section 1 */
			section_1: DevKit.Controls.Section;
		}

		/** Addresses */
		export interface IaddressesTab extends DevKit.Controls.ITab {
			Section: IaddressesTabSections;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			/** Addresses */
			addresses: IaddressesTab;
			/** General */
			general: IgeneralTab;
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
	 * BusinessUnit_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new BusinessUnit.BusinessUnit_Information(executionContext)
	 */
	export class BusinessUnit_Information extends FormBase<BusinessUnit_Information.IBody, BusinessUnit_Information.IHeader, BusinessUnit_Information.IGrid, BusinessUnit_Information.INavigation, BusinessUnit_Information.IQuickForm, BusinessUnit_Information.IProcess, BusinessUnit_Information.IDialog> {
		/**
		 * Creates a BusinessUnit_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Address1_City', 'Address1_Country', 'Address1_Line1', 'Address1_Line2', 'Address1_Line3', 'Address1_PostalCode', 'Address1_StateOrProvince', 'Address1_Telephone1', 'Address1_Telephone2', 'Address1_Telephone3', 'Address2_City', 'Address2_Country', 'Address2_Line1', 'Address2_Line2', 'Address2_Line3', 'Address2_PostalCode', 'Address2_StateOrProvince', 'DivisionName', 'EMailAddress', 'Name', 'ParentBusinessUnitId', 'WebSiteUrl'],
				header: [],
				tab: ['addresses___bill_to_address', 'addresses___ship_to_address', 'general___section_1'],
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
			/** Third line for entering address 1 information. */
			Address1_Line3: DevKit.Controls.String;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** City name for address 2. */
			Address2_City: DevKit.Controls.String;
			/** Country/region name for address 2. */
			Address2_Country: DevKit.Controls.String;
			/** First line for entering address 2 information. */
			Address2_Line1: DevKit.Controls.String;
			/** Second line for entering address 2 information. */
			Address2_Line2: DevKit.Controls.String;
			/** Third line for entering address 2 information. */
			Address2_Line3: DevKit.Controls.String;
			/** ZIP Code or postal code for address 2. */
			Address2_PostalCode: DevKit.Controls.String;
			/** State or province for address 2. */
			Address2_StateOrProvince: DevKit.Controls.String;
			/** Name of the division to which the business unit belongs. */
			DivisionName: DevKit.Controls.String;
			/** Email address for the business unit. */
			EMailAddress: DevKit.Controls.String;
			/** Name of the business unit. */
			Name: DevKit.Controls.String;
			/** Unique identifier for the parent business unit. */
			ParentBusinessUnitId: DevKit.Controls.Lookup;
			/** Website URL for the business unit. */
			WebSiteUrl: DevKit.Controls.String;
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
	 * Usage: new BusinessUnit.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate BusinessUnit Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Address1_City', 'Address1_Country', 'Address1_Line1', 'Address1_Line2', 'Address1_Line3', 'Address1_PostalCode', 'Address1_StateOrProvince', 'Address1_Telephone1', 'Address1_Telephone2', 'Address1_Telephone3', 'Address2_City', 'Address2_Country', 'Address2_Line1', 'Address2_Line2', 'Address2_Line3', 'Address2_PostalCode', 'Address2_StateOrProvince', 'DivisionName', 'EMailAddress', 'Name', 'ParentBusinessUnitId', 'WebSiteUrl'],
				header: [],
				tab: ['addresses___bill to address', 'addresses___ship to address', 'general___section 1'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

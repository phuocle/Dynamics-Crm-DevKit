/**
 * CustomerAddress.form.ts - CustomerAddress Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace CustomerAddress containing form classes: CustomerAddress.FormClassName
 * 3. Aggregate Form class: CustomerAddress.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace CustomerAddress {

	// ========================================================================
	// Form: CustomerAddress_Information
	// ========================================================================

	export namespace CustomerAddress_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Select the address type, such as primary or billing. */
			AddressTypeCode: DevKit.Controls.OptionSet;
			/** Type the city for the customer's address to help identify the location. */
			City: DevKit.Controls.String;
			/** Type the country or region for the customer's address. */
			Country: DevKit.Controls.String;
			/** Type the fax number associated with the customer's address. */
			Fax: DevKit.Controls.String;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the customer's address to help identify the location. */
			Line1: DevKit.Controls.String;
			/** Type the second line of the customer's address. */
			Line2: DevKit.Controls.String;
			/** Type the third line of the customer's address. */
			Line3: DevKit.Controls.String;
			/** Type a descriptive name for the customer's address, such as Corporate Headquarters. */
			Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the address. */
			PostalCode: DevKit.Controls.String;
			/** Type the name of the primary contact person for the customer's address. */
			PrimaryContactName: DevKit.Controls.String;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the state or province of the customer's address. */
			StateOrProvince: DevKit.Controls.String;
			/** Type the primary phone number for the customer's address. */
			Telephone1: DevKit.Controls.String;
			/** Type a second phone number for the customer's address. */
			Telephone2: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Additional Information */
			additional_information: DevKit.Controls.Section;
			/** Customer Address Information */
			customer_address_information: DevKit.Controls.Section;
			/** Phone Numbers */
			phone_numbers: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
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
	 * CustomerAddress_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new CustomerAddress.CustomerAddress_Information(executionContext)
	 */
	export class CustomerAddress_Information extends FormBase<CustomerAddress_Information.IBody, CustomerAddress_Information.IHeader, CustomerAddress_Information.IGrid, CustomerAddress_Information.INavigation, CustomerAddress_Information.IQuickForm, CustomerAddress_Information.IProcess, CustomerAddress_Information.IDialog> {
		/**
		 * Creates a CustomerAddress_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AddressTypeCode', 'City', 'Country', 'Fax', 'FreightTermsCode', 'Line1', 'Line2', 'Line3', 'Name', 'PostalCode', 'PrimaryContactName', 'ShippingMethodCode', 'StateOrProvince', 'Telephone1', 'Telephone2'],
				header: [],
				tab: ['general___additional_information', 'general___customer_address_information', 'general___phone_numbers'],
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
			/** Select the address type, such as primary or billing. */
			AddressTypeCode: DevKit.Controls.OptionSet;
			/** Type the city for the customer's address to help identify the location. */
			City: DevKit.Controls.String;
			/** Type the country or region for the customer's address. */
			Country: DevKit.Controls.String;
			/** Type the fax number associated with the customer's address. */
			Fax: DevKit.Controls.String;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the customer's address to help identify the location. */
			Line1: DevKit.Controls.String;
			/** Type the second line of the customer's address. */
			Line2: DevKit.Controls.String;
			/** Type the third line of the customer's address. */
			Line3: DevKit.Controls.String;
			/** Type a descriptive name for the customer's address, such as Corporate Headquarters. */
			Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the address. */
			PostalCode: DevKit.Controls.String;
			/** Type the name of the primary contact person for the customer's address. */
			PrimaryContactName: DevKit.Controls.String;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the state or province of the customer's address. */
			StateOrProvince: DevKit.Controls.String;
			/** Type the primary phone number for the customer's address. */
			Telephone1: DevKit.Controls.String;
			/** Type a second phone number for the customer's address. */
			Telephone2: DevKit.Controls.String;
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
	 * Usage: new CustomerAddress.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate CustomerAddress Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AddressTypeCode', 'City', 'Country', 'Fax', 'FreightTermsCode', 'Line1', 'Line2', 'Line3', 'Name', 'PostalCode', 'PrimaryContactName', 'ShippingMethodCode', 'StateOrProvince', 'Telephone1', 'Telephone2'],
				header: [],
				tab: ['general___additional information', 'general___customer address information', 'general___phone numbers'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

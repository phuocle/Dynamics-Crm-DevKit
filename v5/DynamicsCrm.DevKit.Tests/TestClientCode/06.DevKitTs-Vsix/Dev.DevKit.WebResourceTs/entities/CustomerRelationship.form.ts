/**
 * CustomerRelationship.form.ts - CustomerRelationship Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace CustomerRelationship containing form classes: CustomerRelationship.FormClassName
 * 3. Aggregate Form class: CustomerRelationship.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace CustomerRelationship {

	// ========================================================================
	// Form: CustomerRelationship_Information
	// ========================================================================

	export namespace CustomerRelationship_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Select the primary account or contact involved in the customer relationship. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
			CustomerRoleDescription: DevKit.Controls.Memo;
			/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			CustomerRoleId: DevKit.Controls.Lookup;
			/** Select the secondary account or contact involved in the customer relationship. */
			PartnerId: DevKit.Controls.Lookup;
			/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
			PartnerRoleDescription: DevKit.Controls.Memo;
			/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			PartnerRoleId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Information */
			information: DevKit.Controls.Section;
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
	 * CustomerRelationship_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new CustomerRelationship.CustomerRelationship_Information(executionContext)
	 */
	export class CustomerRelationship_Information extends FormBase<CustomerRelationship_Information.IBody, CustomerRelationship_Information.IHeader, CustomerRelationship_Information.IGrid, CustomerRelationship_Information.INavigation, CustomerRelationship_Information.IQuickForm, CustomerRelationship_Information.IProcess, CustomerRelationship_Information.IDialog> {
		/**
		 * Creates a CustomerRelationship_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CustomerId', 'CustomerRoleDescription', 'CustomerRoleId', 'PartnerId', 'PartnerRoleDescription', 'PartnerRoleId'],
				header: [],
				tab: ['general___information'],
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
			/** Select the primary account or contact involved in the customer relationship. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
			CustomerRoleDescription: DevKit.Controls.Memo;
			/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			CustomerRoleId: DevKit.Controls.Lookup;
			/** Select the secondary account or contact involved in the customer relationship. */
			PartnerId: DevKit.Controls.Lookup;
			/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
			PartnerRoleDescription: DevKit.Controls.Memo;
			/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			PartnerRoleId: DevKit.Controls.Lookup;
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
	 * Usage: new CustomerRelationship.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate CustomerRelationship Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CustomerId', 'CustomerRoleDescription', 'CustomerRoleId', 'PartnerId', 'PartnerRoleDescription', 'PartnerRoleId'],
				header: [],
				tab: ['general___information'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

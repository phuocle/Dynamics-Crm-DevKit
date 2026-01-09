/**
 * ExternalParty.form.ts - ExternalParty Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ExternalParty containing form classes: ExternalParty.FormClassName
 * 3. Aggregate Form class: ExternalParty.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ExternalParty {

	// ========================================================================
	// Form: ExternalParty_Information
	// ========================================================================

	export namespace ExternalParty_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Contains the value that is used to detect and avoid duplicate external party records. */
			CorrelationKey: DevKit.Controls.String;
			/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
			EmailAddress: DevKit.Controls.String;
			/** Type the full name of the external party. */
			FullName: DevKit.Controls.String;
			/** Shows the date when the external party was last disabled on. */
			LastDisabledOn: DevKit.Controls.DateOnly;
			/** Shows the date when the external party was last enabled on. */
			LastEnabledOn: DevKit.Controls.DateOnly;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the external party status */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface ITabs {
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Associated External Party Items */
			externalPartyItemsGrid: DevKit.Controls.Grid;
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
	 * ExternalParty_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new ExternalParty.ExternalParty_Information(executionContext)
	 */
	export class ExternalParty_Information extends FormBase<ExternalParty_Information.IBody, ExternalParty_Information.IHeader, ExternalParty_Information.IGrid, ExternalParty_Information.INavigation, ExternalParty_Information.IQuickForm, ExternalParty_Information.IProcess, ExternalParty_Information.IDialog> {
		/**
		 * Creates a ExternalParty_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CorrelationKey', 'EmailAddress', 'FullName', 'LastDisabledOn', 'LastEnabledOn'],
				header: ['OwnerId', 'StatusCode'],
				tab: [],
				grid: ['externalPartyItemsGrid'],
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
			/** Contains the value that is used to detect and avoid duplicate external party records. */
			CorrelationKey: DevKit.Controls.String;
			/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
			EmailAddress: DevKit.Controls.String;
			/** Type the full name of the external party. */
			FullName: DevKit.Controls.String;
			/** Shows the date when the external party was last disabled on. */
			LastDisabledOn: DevKit.Controls.DateOnly;
			/** Shows the date when the external party was last enabled on. */
			LastEnabledOn: DevKit.Controls.DateOnly;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the external party status */
			StatusCode: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** Associated External Party Items */
			externalPartyItemsGrid: DevKit.Controls.Grid;
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
	 * Usage: new ExternalParty.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ExternalParty Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CorrelationKey', 'EmailAddress', 'FullName', 'LastDisabledOn', 'LastEnabledOn'],
				header: ['OwnerId', 'StatusCode'],
				tab: [],
				grid: ['externalPartyItemsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

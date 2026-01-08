/**
 * adx_webformsession.form.ts - adx_webformsession Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace adx_webformsession containing form classes: adx_webformsession.FormClassName
 * 3. Aggregate Form class: adx_webformsession.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace adx_webformsession {

	// ========================================================================
	// Form: Information_Enhanced
	// ========================================================================

	export namespace Information_Enhanced {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Anonymous Identification */
			adx_anonymousidentification: DevKit.Controls.String;
			/** Unique identifier for Contact associated with Multistep Form Session. */
			adx_contact: DevKit.Controls.Lookup;
			/** The index of the current step the user last visited. */
			adx_currentstepindex: DevKit.Controls.Integer;
			/** Type the name of the custom entity. */
			adx_name: DevKit.Controls.String;
			/** Primary Record Entity Primary Key Logical Name */
			adx_primaryrecordentitykeyname: DevKit.Controls.String;
			/** Primary Record Table name */
			adx_primaryrecordentitylogicalname: DevKit.Controls.String;
			/** Shows the ID of the primary record created by the multistep form.  Used to retrieve the appropriate session record. */
			adx_primaryrecordid: DevKit.Controls.String;
			/** History of steps in JSON */
			adx_stephistory: DevKit.Controls.Memo;
			/** Unique identifier for User associated with Multistep Form Session. */
			adx_systemuser: DevKit.Controls.Lookup;
			/** User Host Address */
			adx_userhostaddress: DevKit.Controls.String;
			/** User Identity Name */
			adx_useridentityname: DevKit.Controls.String;
			/** Unique identifier for Web Form associated with Web Form Session. */
			mspp_webformid: DevKit.Controls.Lookup;
			/** Unique identifier for entity instances */
			mspp_webformstepid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ITabs {
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
	 * Information_Enhanced Form class
	 * Provides typed access to all form controls
	 * Usage: new adx_webformsession.Information_Enhanced(executionContext)
	 */
	export class Information_Enhanced extends FormBase<Information_Enhanced.IBody, Information_Enhanced.IHeader, Information_Enhanced.IGrid, Information_Enhanced.INavigation, Information_Enhanced.IQuickForm, Information_Enhanced.IProcess, Information_Enhanced.IDialog> {
		/**
		 * Creates a Information_Enhanced Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['adx_anonymousidentification', 'adx_contact', 'adx_currentstepindex', 'adx_name', 'adx_primaryrecordentitykeyname', 'adx_primaryrecordentitylogicalname', 'adx_primaryrecordid', 'adx_stephistory', 'adx_systemuser', 'adx_userhostaddress', 'adx_useridentityname', 'mspp_webformid', 'mspp_webformstepid'],
				header: [],
				tab: [],
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
			/** Anonymous Identification */
			adx_anonymousidentification: DevKit.Controls.String;
			/** Unique identifier for Contact associated with Multistep Form Session. */
			adx_contact: DevKit.Controls.Lookup;
			/** The index of the current step the user last visited. */
			adx_currentstepindex: DevKit.Controls.Integer;
			/** Type the name of the custom entity. */
			adx_name: DevKit.Controls.String;
			/** Primary Record Entity Primary Key Logical Name */
			adx_primaryrecordentitykeyname: DevKit.Controls.String;
			/** Primary Record Table name */
			adx_primaryrecordentitylogicalname: DevKit.Controls.String;
			/** Shows the ID of the primary record created by the multistep form.  Used to retrieve the appropriate session record. */
			adx_primaryrecordid: DevKit.Controls.String;
			/** History of steps in JSON */
			adx_stephistory: DevKit.Controls.Memo;
			/** Unique identifier for User associated with Multistep Form Session. */
			adx_systemuser: DevKit.Controls.Lookup;
			/** User Host Address */
			adx_userhostaddress: DevKit.Controls.String;
			/** User Identity Name */
			adx_useridentityname: DevKit.Controls.String;
			/** Unique identifier for Web Form associated with Web Form Session. */
			mspp_webformid: DevKit.Controls.Lookup;
			/** Unique identifier for entity instances */
			mspp_webformstepid: DevKit.Controls.Lookup;
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
	 * Usage: new adx_webformsession.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate adx_webformsession Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['adx_anonymousidentification', 'adx_contact', 'adx_currentstepindex', 'adx_name', 'adx_primaryrecordentitykeyname', 'adx_primaryrecordentitylogicalname', 'adx_primaryrecordid', 'adx_stephistory', 'adx_systemuser', 'adx_userhostaddress', 'adx_useridentityname', 'mspp_webformid', 'mspp_webformstepid'],
				header: [],
				tab: [],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

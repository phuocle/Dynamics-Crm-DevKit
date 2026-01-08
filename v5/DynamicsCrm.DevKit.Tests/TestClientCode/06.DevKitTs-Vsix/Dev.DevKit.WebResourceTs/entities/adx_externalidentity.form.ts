/**
 * adx_externalidentity.form.ts - adx_externalidentity Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace adx_externalidentity containing form classes: adx_externalidentity.FormClassName
 * 3. Aggregate Form class: adx_externalidentity.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace adx_externalidentity {

	// ========================================================================
	// Form: adx_externalidentity_Information
	// ========================================================================

	export namespace adx_externalidentity_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier for Contact associated with External Identity. */
			adx_contactid: DevKit.Controls.Lookup;
			/** Identity Provider */
			adx_identityprovidername: DevKit.Controls.String;
			/** Shows the name of the custom entity. */
			adx_username: DevKit.Controls.String;
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
	 * adx_externalidentity_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new adx_externalidentity.adx_externalidentity_Information(executionContext)
	 */
	export class adx_externalidentity_Information extends FormBase<adx_externalidentity_Information.IBody, adx_externalidentity_Information.IHeader, adx_externalidentity_Information.IGrid, adx_externalidentity_Information.INavigation, adx_externalidentity_Information.IQuickForm, adx_externalidentity_Information.IProcess, adx_externalidentity_Information.IDialog> {
		/**
		 * Creates a adx_externalidentity_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['adx_contactid', 'adx_identityprovidername', 'adx_username'],
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
			/** Unique identifier for Contact associated with External Identity. */
			adx_contactid: DevKit.Controls.Lookup;
			/** Identity Provider */
			adx_identityprovidername: DevKit.Controls.String;
			/** Shows the name of the custom entity. */
			adx_username: DevKit.Controls.String;
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
	 * Usage: new adx_externalidentity.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate adx_externalidentity Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['adx_contactid', 'adx_identityprovidername', 'adx_username'],
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

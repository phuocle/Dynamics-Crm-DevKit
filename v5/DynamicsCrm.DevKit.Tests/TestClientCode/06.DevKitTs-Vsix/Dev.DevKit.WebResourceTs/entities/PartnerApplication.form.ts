/**
 * PartnerApplication.form.ts - PartnerApplication Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace PartnerApplication containing form classes: PartnerApplication.FormClassName
 * 3. Aggregate Form class: PartnerApplication.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace PartnerApplication {

	// ========================================================================
	// Form: Partner_Application_Main_Form
	// ========================================================================

	export namespace Partner_Application_Main_Form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Indicates the application role. */
			ApplicationRole: DevKit.Controls.OptionSet;
			/** Name of Partner Application. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Principal ID of the partner application. */
			PrincipalId: DevKit.Controls.String;
			/** Select whether the partner application uses an authorization server. */
			UseAuthorizationServer: DevKit.Controls.Boolean;
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
	 * Partner_Application_Main_Form Form class
	 * Provides typed access to all form controls
	 * Usage: new PartnerApplication.Partner_Application_Main_Form(executionContext)
	 */
	export class Partner_Application_Main_Form extends FormBase<Partner_Application_Main_Form.IBody, Partner_Application_Main_Form.IHeader, Partner_Application_Main_Form.IGrid, Partner_Application_Main_Form.INavigation, Partner_Application_Main_Form.IQuickForm, Partner_Application_Main_Form.IProcess, Partner_Application_Main_Form.IDialog> {
		/**
		 * Creates a Partner_Application_Main_Form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ApplicationRole', 'Name', 'notescontrol', 'PrincipalId', 'UseAuthorizationServer'],
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
			/** Indicates the application role. */
			ApplicationRole: DevKit.Controls.OptionSet;
			/** Name of Partner Application. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Principal ID of the partner application. */
			PrincipalId: DevKit.Controls.String;
			/** Select whether the partner application uses an authorization server. */
			UseAuthorizationServer: DevKit.Controls.Boolean;
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
	 * Usage: new PartnerApplication.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate PartnerApplication Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ApplicationRole', 'Name', 'notescontrol', 'PrincipalId', 'UseAuthorizationServer'],
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

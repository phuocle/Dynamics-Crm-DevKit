/**
 * Audit.form.ts - Audit Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Audit containing form classes: Audit.FormClassName
 * 3. Aggregate Form class: Audit.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Audit {

	// ========================================================================
	// Form: Audit_Information
	// ========================================================================

	export namespace Audit_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Date and time when the audit record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the entity that is being audited */
			ObjectTypeCode: DevKit.Controls.String;
			/** Unique identifier of the user who caused a change */
			UserId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGeneralTabSections {
			/** Feedback Contacts */
			Section1: DevKit.Controls.Section;
		}

		export interface IGeneralTab extends DevKit.Controls.ITab {
			Section: IGeneralTabSections;
		}

		export interface ITabs {
			General: IGeneralTab;
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
	 * Audit_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Audit.Audit_Information(executionContext)
	 */
	export class Audit_Information extends FormBase<Audit_Information.IBody, Audit_Information.IHeader, Audit_Information.IGrid, Audit_Information.INavigation, Audit_Information.IQuickForm, Audit_Information.IProcess, Audit_Information.IDialog> {
		/**
		 * Creates a Audit_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'ObjectTypeCode', 'UserId'],
				header: [],
				tab: ['General___Section1'],
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
			/** Date and time when the audit record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the entity that is being audited */
			ObjectTypeCode: DevKit.Controls.String;
			/** Unique identifier of the user who caused a change */
			UserId: DevKit.Controls.Lookup;
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
	 * Usage: new Audit.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Audit Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'ObjectTypeCode', 'UserId'],
				header: [],
				tab: ['General___Section1'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * DisplayString.form.ts - DisplayString Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace DisplayString containing form classes: DisplayString.FormClassName
 * 3. Aggregate Form class: DisplayString.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace DisplayString {

	// ========================================================================
	// Form: DisplayString_Information
	// ========================================================================

	export namespace DisplayString_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Comment for a customized display string. */
			CustomComment: DevKit.Controls.String;
			/** Customized display string. */
			CustomDisplayString: DevKit.Controls.String;
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
	 * DisplayString_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new DisplayString.DisplayString_Information(executionContext)
	 */
	export class DisplayString_Information extends FormBase<DisplayString_Information.IBody, DisplayString_Information.IHeader, DisplayString_Information.IGrid, DisplayString_Information.INavigation, DisplayString_Information.IQuickForm, DisplayString_Information.IProcess, DisplayString_Information.IDialog> {
		/**
		 * Creates a DisplayString_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CustomComment', 'CustomDisplayString'],
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
			/** Comment for a customized display string. */
			CustomComment: DevKit.Controls.String;
			/** Customized display string. */
			CustomDisplayString: DevKit.Controls.String;
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
	 * Usage: new DisplayString.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate DisplayString Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CustomComment', 'CustomDisplayString'],
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

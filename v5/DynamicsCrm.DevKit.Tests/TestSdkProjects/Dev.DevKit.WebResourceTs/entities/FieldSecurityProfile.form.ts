/**
 * FieldSecurityProfile.form.ts - FieldSecurityProfile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace FieldSecurityProfile containing form classes: FieldSecurityProfile.FormClassName
 * 3. Aggregate Form class: FieldSecurityProfile.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace FieldSecurityProfile {

	// ========================================================================
	// Form: FieldSecurityProfile_Information
	// ========================================================================

	export namespace FieldSecurityProfile_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description of the Profile */
			Description: DevKit.Controls.Memo;
			/** Name of the profile. */
			Name: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Description */
			desc: DevKit.Controls.Section;
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
	 * FieldSecurityProfile_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new FieldSecurityProfile.FieldSecurityProfile_Information(executionContext)
	 */
	export class FieldSecurityProfile_Information extends FormBase<FieldSecurityProfile_Information.IBody, FieldSecurityProfile_Information.IHeader, FieldSecurityProfile_Information.IGrid, FieldSecurityProfile_Information.INavigation, FieldSecurityProfile_Information.IQuickForm, FieldSecurityProfile_Information.IProcess, FieldSecurityProfile_Information.IDialog> {
		/**
		 * Creates a FieldSecurityProfile_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name'],
				header: [],
				tab: ['general___desc'],
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
			/** Description of the Profile */
			Description: DevKit.Controls.Memo;
			/** Name of the profile. */
			Name: DevKit.Controls.String;
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
	 * Usage: new FieldSecurityProfile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate FieldSecurityProfile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name'],
				header: [],
				tab: ['general___desc'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

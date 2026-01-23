/**
 * v4_accountbpf.form.ts - v4_accountbpf Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace v4_accountbpf containing form classes: v4_accountbpf.FormClassName
 * 3. Aggregate Form class: v4_accountbpf.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace v4_accountbpf {

	// ========================================================================
	// Form: v4_accountbpf_Information
	// ========================================================================

	export namespace v4_accountbpf_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IStageStep3TabSections {
			/** Stage 1 */
			StageStep3_section1: DevKit.Controls.Section;
		}

		export interface IStageStep9TabSections {
			/** Stage 2 */
			StageStep9_section1: DevKit.Controls.Section;
		}

		/** Stage 1 */
		export interface IStageStep3Tab extends DevKit.Controls.ITab {
			Section: IStageStep3TabSections;
		}

		/** Stage 2 */
		export interface IStageStep9Tab extends DevKit.Controls.ITab {
			Section: IStageStep9TabSections;
		}

		export interface ITabs {
			/** Stage 1 */
			StageStep3: IStageStep3Tab;
			/** Stage 2 */
			StageStep9: IStageStep9Tab;
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
	 * v4_accountbpf_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new v4_accountbpf.v4_accountbpf_Information(executionContext)
	 */
	export class v4_accountbpf_Information extends FormBase<v4_accountbpf_Information.IBody, v4_accountbpf_Information.IHeader, v4_accountbpf_Information.IGrid, v4_accountbpf_Information.INavigation, v4_accountbpf_Information.IQuickForm, v4_accountbpf_Information.IProcess, v4_accountbpf_Information.IDialog> {
		/**
		 * Creates a v4_accountbpf_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [],
				header: [],
				tab: ['StageStep3___StageStep3_section1', 'StageStep9___StageStep9_section1'],
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
	 * Usage: new v4_accountbpf.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate v4_accountbpf Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [],
				header: [],
				tab: ['StageStep3___StageStep3_section1', 'StageStep9___StageStep9_section1'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

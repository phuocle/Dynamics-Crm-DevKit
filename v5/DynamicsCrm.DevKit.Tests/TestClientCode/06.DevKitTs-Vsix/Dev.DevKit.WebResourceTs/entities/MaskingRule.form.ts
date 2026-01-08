/**
 * MaskingRule.form.ts - MaskingRule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace MaskingRule containing form classes: MaskingRule.FormClassName
 * 3. Aggregate Form class: MaskingRule.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace MaskingRule {

	// ========================================================================
	// Form: MaskingRule_Information
	// ========================================================================

	export namespace MaskingRule_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description of the secured masking rule */
			Description: DevKit.Controls.String;
			/** The display name of the secured masking rule. */
			DisplayName: DevKit.Controls.String;
			/** Character used to mask */
			MaskedCharacter: DevKit.Controls.String;
			/** Rich text test data evaluated by a secured masking rule */
			MaskedRichTestData: DevKit.Controls.String;
			/** Test data evaluated by a secured masking rule */
			MaskedTestData: DevKit.Controls.String;
			/** The unique name of the secured masking rule. */
			Name: DevKit.Controls.String;
			/** Regular Expression in C# */
			RegularExpression: DevKit.Controls.String;
			/** Rich text test data to evaluate a secured masking rule */
			RichTestData: DevKit.Controls.String;
			/** Test data to evaluate a secured masking rule */
			TestData: DevKit.Controls.String;
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
	 * MaskingRule_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new MaskingRule.MaskingRule_Information(executionContext)
	 */
	export class MaskingRule_Information extends FormBase<MaskingRule_Information.IBody, MaskingRule_Information.IHeader, MaskingRule_Information.IGrid, MaskingRule_Information.INavigation, MaskingRule_Information.IQuickForm, MaskingRule_Information.IProcess, MaskingRule_Information.IDialog> {
		/**
		 * Creates a MaskingRule_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'DisplayName', 'MaskedCharacter', 'MaskedRichTestData', 'MaskedTestData', 'Name', 'RegularExpression', 'RichTestData', 'TestData'],
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
			/** Description of the secured masking rule */
			Description: DevKit.Controls.String;
			/** The display name of the secured masking rule. */
			DisplayName: DevKit.Controls.String;
			/** Character used to mask */
			MaskedCharacter: DevKit.Controls.String;
			/** Rich text test data evaluated by a secured masking rule */
			MaskedRichTestData: DevKit.Controls.String;
			/** Test data evaluated by a secured masking rule */
			MaskedTestData: DevKit.Controls.String;
			/** The unique name of the secured masking rule. */
			Name: DevKit.Controls.String;
			/** Regular Expression in C# */
			RegularExpression: DevKit.Controls.String;
			/** Rich text test data to evaluate a secured masking rule */
			RichTestData: DevKit.Controls.String;
			/** Test data to evaluate a secured masking rule */
			TestData: DevKit.Controls.String;
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
	 * Usage: new MaskingRule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate MaskingRule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'DisplayName', 'MaskedCharacter', 'MaskedRichTestData', 'MaskedTestData', 'Name', 'RegularExpression', 'RichTestData', 'TestData'],
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

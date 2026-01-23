/**
 * AttributeMaskingRule.form.ts - AttributeMaskingRule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace AttributeMaskingRule containing form classes: AttributeMaskingRule.FormClassName
 * 3. Aggregate Form class: AttributeMaskingRule.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace AttributeMaskingRule {

	// ========================================================================
	// Form: AttributeMaskingRule_Information
	// ========================================================================

	export namespace AttributeMaskingRule_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Logical name of the column for which the secured masking rule is used */
			AttributeLogicalName: DevKit.Controls.String;
			/** Name of the Entity for attribute */
			EntityName: DevKit.Controls.String;
			/** Masking Rule of Attribute */
			MaskingRuleId: DevKit.Controls.Lookup;
			/** The unique name of the masking rule for attribute. */
			UniqueName: DevKit.Controls.String;
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
	 * AttributeMaskingRule_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new AttributeMaskingRule.AttributeMaskingRule_Information(executionContext)
	 */
	export class AttributeMaskingRule_Information extends FormBase<AttributeMaskingRule_Information.IBody, AttributeMaskingRule_Information.IHeader, AttributeMaskingRule_Information.IGrid, AttributeMaskingRule_Information.INavigation, AttributeMaskingRule_Information.IQuickForm, AttributeMaskingRule_Information.IProcess, AttributeMaskingRule_Information.IDialog> {
		/**
		 * Creates a AttributeMaskingRule_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AttributeLogicalName', 'EntityName', 'MaskingRuleId', 'UniqueName'],
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
			/** Logical name of the column for which the secured masking rule is used */
			AttributeLogicalName: DevKit.Controls.String;
			/** Name of the Entity for attribute */
			EntityName: DevKit.Controls.String;
			/** Masking Rule of Attribute */
			MaskingRuleId: DevKit.Controls.Lookup;
			/** The unique name of the masking rule for attribute. */
			UniqueName: DevKit.Controls.String;
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
	 * Usage: new AttributeMaskingRule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate AttributeMaskingRule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AttributeLogicalName', 'EntityName', 'MaskingRuleId', 'UniqueName'],
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

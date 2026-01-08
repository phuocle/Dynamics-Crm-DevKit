/**
 * ConvertRuleItem.form.ts - ConvertRuleItem Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ConvertRuleItem containing form classes: ConvertRuleItem.FormClassName
 * 3. Aggregate Form class: ConvertRuleItem.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ConvertRuleItem {

	// ========================================================================
	// Form: Record_Creation_and_Update_Rule_Item
	// ========================================================================

	export namespace Record_Creation_and_Update_Rule_Item {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
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
			/** Case Properties */
			CaseProperties: DevKit.Controls.Section;
			/** Condition */
			ConditionControl: DevKit.Controls.Section;
			Name: DevKit.Controls.Section;
			/** Create record and set as the regarding of the source activity */
			primaryactionsection: DevKit.Controls.Section;
			/** Create record and set as the regarding of the source activity */
			RegardingSettingsection: DevKit.Controls.Section;
			/** SPECIFY OTHER ACTIONS */
			secondaryactionsection: DevKit.Controls.Section;
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
	 * Record_Creation_and_Update_Rule_Item Form class
	 * Provides typed access to all form controls
	 * Usage: new ConvertRuleItem.Record_Creation_and_Update_Rule_Item(executionContext)
	 */
	export class Record_Creation_and_Update_Rule_Item extends FormBase<Record_Creation_and_Update_Rule_Item.IBody, Record_Creation_and_Update_Rule_Item.IHeader, Record_Creation_and_Update_Rule_Item.IGrid, Record_Creation_and_Update_Rule_Item.INavigation, Record_Creation_and_Update_Rule_Item.IQuickForm, Record_Creation_and_Update_Rule_Item.IProcess, Record_Creation_and_Update_Rule_Item.IDialog> {
		/**
		 * Creates a Record_Creation_and_Update_Rule_Item Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name'],
				header: [],
				tab: ['general___CaseProperties', 'general___ConditionControl', 'general___Name', 'general___primaryactionsection', 'general___RegardingSettingsection', 'general___secondaryactionsection'],
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
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
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
	 * Usage: new ConvertRuleItem.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ConvertRuleItem Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name'],
				header: [],
				tab: ['general___CaseProperties', 'general___ConditionControl', 'general___Name', 'general___primaryactionsection', 'general___RegardingSettingsection', 'general___secondaryactionsection'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

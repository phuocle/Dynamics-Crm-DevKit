/**
 * RoutingRuleItem.form.ts - RoutingRuleItem Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace RoutingRuleItem containing form classes: RoutingRuleItem.FormClassName
 * 3. Aggregate Form class: RoutingRuleItem.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace RoutingRuleItem {

	// ========================================================================
	// Form: Rule_Item
	// ========================================================================

	export namespace Rule_Item {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Show who is assigned on item. */
			AssignObjectId: DevKit.Controls.Lookup;
			/** Type additional information to describe the rule item. */
			Description: DevKit.Controls.Memo;
			/** Name of the Routing Rule Item. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the Queue that the item is assigned to. */
			RoutedQueueId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Rule Item Information */
			rule_item_information: DevKit.Controls.Section;
		}

		export interface InotesTabSections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}

		export interface IRuleCriteriaTabSections {
			/** If Conditions */
			ConditionControl: DevKit.Controls.Section;
			/** Then Conditions */
			rule_then_conditions: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		/** Notes */
		export interface InotesTab extends DevKit.Controls.ITab {
			Section: InotesTabSections;
		}

		/** Rule Criteria */
		export interface IRuleCriteriaTab extends DevKit.Controls.ITab {
			Section: IRuleCriteriaTabSections;
		}

		export interface ITabs {
			/** General */
			general: IgeneralTab;
			/** Notes */
			notes: InotesTab;
			/** Rule Criteria */
			RuleCriteria: IRuleCriteriaTab;
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
	 * Rule_Item Form class
	 * Provides typed access to all form controls
	 * Usage: new RoutingRuleItem.Rule_Item(executionContext)
	 */
	export class Rule_Item extends FormBase<Rule_Item.IBody, Rule_Item.IHeader, Rule_Item.IGrid, Rule_Item.INavigation, Rule_Item.IQuickForm, Rule_Item.IProcess, Rule_Item.IDialog> {
		/**
		 * Creates a Rule_Item Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AssignObjectId', 'Description', 'Name', 'notescontrol', 'RoutedQueueId'],
				header: [],
				tab: ['general___rule_item_information', 'notes___notes', 'RuleCriteria___ConditionControl', 'RuleCriteria___rule_then_conditions'],
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
			/** Show who is assigned on item. */
			AssignObjectId: DevKit.Controls.Lookup;
			/** Type additional information to describe the rule item. */
			Description: DevKit.Controls.Memo;
			/** Name of the Routing Rule Item. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the Queue that the item is assigned to. */
			RoutedQueueId: DevKit.Controls.Lookup;
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
	 * Usage: new RoutingRuleItem.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate RoutingRuleItem Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AssignObjectId', 'Description', 'Name', 'notescontrol', 'RoutedQueueId'],
				header: [],
				tab: ['general___rule item information', 'notes___notes', 'RuleCriteria___ConditionControl', 'RuleCriteria___rule then conditions'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

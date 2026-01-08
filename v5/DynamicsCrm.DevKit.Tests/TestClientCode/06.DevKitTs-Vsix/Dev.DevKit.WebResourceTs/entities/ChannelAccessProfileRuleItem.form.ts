/**
 * ChannelAccessProfileRuleItem.form.ts - ChannelAccessProfileRuleItem Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ChannelAccessProfileRuleItem containing form classes: ChannelAccessProfileRuleItem.FormClassName
 * 3. Aggregate Form class: ChannelAccessProfileRuleItem.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ChannelAccessProfileRuleItem {

	// ========================================================================
	// Form: ChannelAccessProfileRuleItem_Information
	// ========================================================================

	export namespace ChannelAccessProfileRuleItem_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Choose the channel access profile that the item is assigned to. */
			AssociatedChannelAccessProfile: DevKit.Controls.Lookup;
			/** Type additional information to describe the channel access profile rule item. */
			Description: DevKit.Controls.Memo;
			/** Type a descriptive name for the channel access profile rule item. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
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

		/** Notes */
		export interface InotesTab extends DevKit.Controls.ITab {
			Section: InotesTabSections;
		}

		/** Rule Criteria */
		export interface IRuleCriteriaTab extends DevKit.Controls.ITab {
			Section: IRuleCriteriaTabSections;
		}

		export interface ITabs {
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
	 * ChannelAccessProfileRuleItem_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new ChannelAccessProfileRuleItem.ChannelAccessProfileRuleItem_Information(executionContext)
	 */
	export class ChannelAccessProfileRuleItem_Information extends FormBase<ChannelAccessProfileRuleItem_Information.IBody, ChannelAccessProfileRuleItem_Information.IHeader, ChannelAccessProfileRuleItem_Information.IGrid, ChannelAccessProfileRuleItem_Information.INavigation, ChannelAccessProfileRuleItem_Information.IQuickForm, ChannelAccessProfileRuleItem_Information.IProcess, ChannelAccessProfileRuleItem_Information.IDialog> {
		/**
		 * Creates a ChannelAccessProfileRuleItem_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AssociatedChannelAccessProfile', 'Description', 'Name', 'notescontrol'],
				header: [],
				tab: ['notes___notes', 'RuleCriteria___ConditionControl', 'RuleCriteria___rule_then_conditions'],
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
			/** Choose the channel access profile that the item is assigned to. */
			AssociatedChannelAccessProfile: DevKit.Controls.Lookup;
			/** Type additional information to describe the channel access profile rule item. */
			Description: DevKit.Controls.Memo;
			/** Type a descriptive name for the channel access profile rule item. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
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
	 * Usage: new ChannelAccessProfileRuleItem.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ChannelAccessProfileRuleItem Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AssociatedChannelAccessProfile', 'Description', 'Name', 'notescontrol'],
				header: [],
				tab: ['notes___notes', 'RuleCriteria___ConditionControl', 'RuleCriteria___rule then conditions'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

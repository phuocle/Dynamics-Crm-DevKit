/**
 * RoutingRule.form.ts - RoutingRule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace RoutingRule containing form classes: RoutingRule.FormClassName
 * 3. Aggregate Form class: RoutingRule.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace RoutingRule {

	// ========================================================================
	// Form: Routing_Rule_Set
	// ========================================================================

	export namespace Routing_Rule_Set {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type a short description about the objective of the routing rule. */
			Description: DevKit.Controls.Memo;
			/** Name of the Routing Rule. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** For internal use only. */
			OwnerId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Routing Rule Set Information */
			routing_rule_set_information: DevKit.Controls.Section;
		}

		export interface InotesTabSections {
			notes: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface InotesTab extends DevKit.Controls.ITab {
			Section: InotesTabSections;
		}

		export interface ITabs {
			/** General */
			general: IgeneralTab;
			notes: InotesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Rule Items */
			RuleItems: DevKit.Controls.Grid;
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
	 * Routing_Rule_Set Form class
	 * Provides typed access to all form controls
	 * Usage: new RoutingRule.Routing_Rule_Set(executionContext)
	 */
	export class Routing_Rule_Set extends FormBase<Routing_Rule_Set.IBody, Routing_Rule_Set.IHeader, Routing_Rule_Set.IGrid, Routing_Rule_Set.INavigation, Routing_Rule_Set.IQuickForm, Routing_Rule_Set.IProcess, Routing_Rule_Set.IDialog> {
		/**
		 * Creates a Routing_Rule_Set Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name', 'notescontrol', 'OwnerId'],
				header: [],
				tab: ['general___routing_rule_set_information', 'notes___notes'],
				grid: ['RuleItems'],
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
			/** Type a short description about the objective of the routing rule. */
			Description: DevKit.Controls.Memo;
			/** Name of the Routing Rule. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** For internal use only. */
			OwnerId: DevKit.Controls.Lookup;
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
			/** Rule Items */
			RuleItems: DevKit.Controls.Grid;
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
	 * Usage: new RoutingRule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate RoutingRule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name', 'notescontrol', 'OwnerId'],
				header: [],
				tab: ['general___routing rule set information', 'notes___notes'],
				grid: ['RuleItems'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

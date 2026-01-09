/**
 * GoalRollupQuery.form.ts - GoalRollupQuery Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace GoalRollupQuery containing form classes: GoalRollupQuery.FormClassName
 * 3. Aggregate Form class: GoalRollupQuery.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace GoalRollupQuery {

	// ========================================================================
	// Form: GoalRollupQuery_Information
	// ========================================================================

	export namespace GoalRollupQuery_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type a descriptive name for the goal rollup query. */
			Name: DevKit.Controls.String;
			/** Type a descriptive name for the goal rollup query. */
			Name1: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			queryeditor_uc: DevKit.Controls.ActionCards;
			/** Enter the record type of the rollup query. */
			QueryEntityType: DevKit.Controls.String;
			/** Enter the record type of the rollup query. */
			queryentitytype_uc: DevKit.Controls.ActionCards;
			ruleconditioncontrol: DevKit.Controls.IFrame;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IruleTabSections {
			/** Query */
			criteria: DevKit.Controls.Section;
			/** You cannot customize the rollup query section. */
			Rule_Conditions: DevKit.Controls.Section;
			/** Section 1 */
			section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface IruleTab extends DevKit.Controls.ITab {
			Section: IruleTabSections;
		}

		export interface ITabs {
			/** General */
			rule: IruleTab;
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
	 * GoalRollupQuery_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new GoalRollupQuery.GoalRollupQuery_Information(executionContext)
	 */
	export class GoalRollupQuery_Information extends FormBase<GoalRollupQuery_Information.IBody, GoalRollupQuery_Information.IHeader, GoalRollupQuery_Information.IGrid, GoalRollupQuery_Information.INavigation, GoalRollupQuery_Information.IQuickForm, GoalRollupQuery_Information.IProcess, GoalRollupQuery_Information.IDialog> {
		/**
		 * Creates a GoalRollupQuery_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name', 'Name1', 'OwnerId', 'queryeditor_uc', 'QueryEntityType', 'queryentitytype_uc', 'ruleconditioncontrol'],
				header: [],
				tab: ['rule___criteria', 'rule___Rule_Conditions', 'rule___section_1'],
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
			/** Type a descriptive name for the goal rollup query. */
			Name: DevKit.Controls.String;
			/** Type a descriptive name for the goal rollup query. */
			Name1: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			queryeditor_uc: DevKit.Controls.ActionCards;
			/** Enter the record type of the rollup query. */
			QueryEntityType: DevKit.Controls.String;
			/** Enter the record type of the rollup query. */
			queryentitytype_uc: DevKit.Controls.ActionCards;
			ruleconditioncontrol: DevKit.Controls.IFrame;
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
	 * Usage: new GoalRollupQuery.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate GoalRollupQuery Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name', 'Name1', 'OwnerId', 'queryeditor_uc', 'QueryEntityType', 'queryentitytype_uc', 'ruleconditioncontrol'],
				header: [],
				tab: ['rule___criteria', 'rule___Rule Conditions', 'rule___section 1'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

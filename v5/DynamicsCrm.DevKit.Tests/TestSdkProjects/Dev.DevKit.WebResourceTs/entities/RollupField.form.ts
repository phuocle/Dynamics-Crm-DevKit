/**
 * RollupField.form.ts - RollupField Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace RollupField containing form classes: RollupField.FormClassName
 * 3. Aggregate Form class: RollupField.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace RollupField {

	// ========================================================================
	// Form: RollupField_Information
	// ========================================================================

	export namespace RollupField_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Select a date field for the selected record type, such as Actual Closed Date for the Opportunity record type. A record participates in the goal rollup, if the selected date falls between the start date and the end date for the goal. */
			dateattribute_UC: DevKit.Controls.ActionCards;
			/** Select the record type that contains the date field that will be considered while rolling up data to the goal. */
			entityfordateattribute_UC: DevKit.Controls.ActionCards;
			/** Select a rollup field where the metric rollup data will be displayed in the goal. The options are an integer or money, depending on the Metric Type you chose for the goal metric. */
			goalattribute_UC: DevKit.Controls.ActionCards;
			/** Type the name of the field that the data for the goal rolls up from. */
			sourceattribute_UC: DevKit.Controls.ActionCards;
			/** Type the name of the record type (entity) that the data for the goal must roll up from. */
			SourceEntity: DevKit.Controls.String;
			/** Type the name of the record type (entity) that the data for the goal must roll up from. */
			sourceentity_UC: DevKit.Controls.ActionCards;
			/** Select the state of the records you want to use as the source of the rollup data for the metric. */
			sourcestate_UC: DevKit.Controls.ActionCards;
			/** Select the status of the records you want to use as the source of the rollup data for the metric. */
			sourcestatus_UC: DevKit.Controls.ActionCards;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Step 2: Specify the details about the source data that rolls up */
			_27578C24_6DCB_7649_BA95_913C229C39EB: DevKit.Controls.Section;
			/** Step 1: Specify the rollup field to track against goals */
			_41A22D3A_56EC_4317_812A_AC5C92764CD5: DevKit.Controls.Section;
			/** Section4 */
			_6AD1C698_2E2E_8A08_B43A_B66815B9EB06: DevKit.Controls.Section;
			/** Step 3: Specify the date field that determines the goal period that the records will roll up into */
			_D65A4472_A959_3B9C_C416_D79C56E4A44B: DevKit.Controls.Section;
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
	 * RollupField_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new RollupField.RollupField_Information(executionContext)
	 */
	export class RollupField_Information extends FormBase<RollupField_Information.IBody, RollupField_Information.IHeader, RollupField_Information.IGrid, RollupField_Information.INavigation, RollupField_Information.IQuickForm, RollupField_Information.IProcess, RollupField_Information.IDialog> {
		/**
		 * Creates a RollupField_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['dateattribute_UC', 'entityfordateattribute_UC', 'goalattribute_UC', 'sourceattribute_UC', 'SourceEntity', 'sourceentity_UC', 'sourcestate_UC', 'sourcestatus_UC'],
				header: [],
				tab: ['general____27578C24_6DCB_7649_BA95_913C229C39EB', 'general____41A22D3A_56EC_4317_812A_AC5C92764CD5', 'general____6AD1C698_2E2E_8A08_B43A_B66815B9EB06', 'general____D65A4472_A959_3B9C_C416_D79C56E4A44B'],
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
			/** Select a date field for the selected record type, such as Actual Closed Date for the Opportunity record type. A record participates in the goal rollup, if the selected date falls between the start date and the end date for the goal. */
			dateattribute_UC: DevKit.Controls.ActionCards;
			/** Select the record type that contains the date field that will be considered while rolling up data to the goal. */
			entityfordateattribute_UC: DevKit.Controls.ActionCards;
			/** Select a rollup field where the metric rollup data will be displayed in the goal. The options are an integer or money, depending on the Metric Type you chose for the goal metric. */
			goalattribute_UC: DevKit.Controls.ActionCards;
			/** Type the name of the field that the data for the goal rolls up from. */
			sourceattribute_UC: DevKit.Controls.ActionCards;
			/** Type the name of the record type (entity) that the data for the goal must roll up from. */
			SourceEntity: DevKit.Controls.String;
			/** Type the name of the record type (entity) that the data for the goal must roll up from. */
			sourceentity_UC: DevKit.Controls.ActionCards;
			/** Select the state of the records you want to use as the source of the rollup data for the metric. */
			sourcestate_UC: DevKit.Controls.ActionCards;
			/** Select the status of the records you want to use as the source of the rollup data for the metric. */
			sourcestatus_UC: DevKit.Controls.ActionCards;
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
	 * Usage: new RollupField.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate RollupField Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['dateattribute_UC', 'entityfordateattribute_UC', 'goalattribute_UC', 'sourceattribute_UC', 'SourceEntity', 'sourceentity_UC', 'sourcestate_UC', 'sourcestatus_UC'],
				header: [],
				tab: ['general___{27578c24-6dcb-7649-ba95-913c229c39eb}', 'general___{41a22d3a-56ec-4317-812a-ac5c92764cd5}', 'general___{6ad1c698-2e2e-8a08-b43a-b66815b9eb06}', 'general___{d65a4472-a959-3b9c-c416-d79c56e4a44b}'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

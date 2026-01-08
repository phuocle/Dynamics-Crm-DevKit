/**
 * Goal.form.ts - Goal Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Goal containing form classes: Goal.FormClassName
 * 3. Aggregate Form class: Goal.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Goal {

	// ========================================================================
	// Form: Goal_Information
	// ========================================================================

	export namespace Goal_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the actual value (Decimal type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Decimal. */
			ActualDecimal: DevKit.Controls.Decimal;
			/** Shows the actual value (integer) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount or Count and the amount data type is Integer. */
			ActualInteger: DevKit.Controls.Integer;
			/** Shows the actual value (Money type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Money. */
			ActualMoney: DevKit.Controls.Money;
			/** Select whether only the goal owner's records, or all records, should be rolled up for goal results. */
			ConsiderOnlyGoalOwnersRecords: DevKit.Controls.Boolean;
			/** Indicates a placeholder rollup field for a decimal value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldDecimal: DevKit.Controls.Decimal;
			/** Indicates a placeholder rollup field for an integer value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldInteger: DevKit.Controls.Integer;
			/** Indicates a placeholder rollup field for a money value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldMoney: DevKit.Controls.Money;
			/** Select the fiscal period for the goal. */
			FiscalPeriod: DevKit.Controls.OptionSet;
			/** Select the fiscal year for the goal that's being tracked. */
			FiscalYear: DevKit.Controls.OptionSet;
			/** Enter the date when the goal ends. */
			GoalEndDate: DevKit.Controls.DateOnly;
			/** Choose the user or team responsible for meeting the goal. */
			GoalOwnerId: DevKit.Controls.Lookup;
			/** Enter the date and time when the period for tracking the goal begins. */
			GoalStartDate: DevKit.Controls.DateOnly;
			/** Shows the in-progress value (decimal) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressDecimal: DevKit.Controls.Decimal;
			/** Shows the in-progress value (integer) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressInteger: DevKit.Controls.Integer;
			/** Shows the in-progress value (money) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressMoney: DevKit.Controls.Money;
			/** Select whether the goal period is a fiscal period or custom period. */
			IsFiscalPeriodGoal: DevKit.Controls.Boolean;
			/** Shows the date and time when the goal was last rolled up. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			LastRolledupDate: DevKit.Controls.DateTime;
			/** Choose the metric for the goal. This metric determines how the goal is tracked. */
			MetricId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose a parent goal if the current goal is a child goal. This sets up a parent-child relationship for reporting and analytics. */
			ParentGoalId: DevKit.Controls.Lookup;
			/** Choose the metric for the goal. This metric determines how the goal is tracked. */
			participatingrecordcontrol: DevKit.Controls.ActionCards;
			/** Shows the percentage achieved against the target goal. */
			Percentage: DevKit.Controls.Decimal;
			/** Shows the percentage achieved against the target goal. */
			Percentage1: DevKit.Controls.Decimal;
			/** Shows the percentage achieved against the target goal. */
			Percentage2: DevKit.Controls.Decimal;
			/** Select whether the data should be rolled up only from the child goals. */
			RollupOnlyFromChildGoals: DevKit.Controls.Boolean;
			/** Choose the query that will be used to calculate the actual data for the goal (decimal). */
			RollUpQueryActualDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate the actual data for the goal (integer). */
			RollupQueryActualIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate the actual data for the goal (money). */
			RollUpQueryActualMoneyId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (decimal). */
			RollUpQueryCustomDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (integer). */
			RollUpQueryCustomIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (money). */
			RollUpQueryCustomMoneyId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (decimal). */
			RollUpQueryInprogressDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (integer). */
			RollUpQueryInprogressIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (money). */
			RollUpQueryInprogressMoneyId: DevKit.Controls.Lookup;
			/** Select a stretch target (decimal) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetDecimal: DevKit.Controls.Decimal;
			/** Select the stretch target (integer) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetInteger: DevKit.Controls.Integer;
			/** Select stretch target (money) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetMoney: DevKit.Controls.Money;
			/** Select a goal target of the decimal type to use for tracking data that include partial numbers, such as pounds sold of a product sold by weight. */
			TargetDecimal: DevKit.Controls.Decimal;
			/** Select a goal target of the integer type to use for tracking anything countable in whole numbers, such as units sold. */
			TargetInteger: DevKit.Controls.Integer;
			/** Select a goal target (money) to track a monetary amount such as revenue from a product. */
			TargetMoney: DevKit.Controls.Money;
			/** Type a title or name that describes the goal. */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_242FCD83_2A50_478E_922A_F4641920DDE0TabSections {
			/** Participating Records */
			_8ECDE6CB_085B_46D1_97A9_E357C5799076: DevKit.Controls.Section;
		}

		export interface I_349A439D_6ED5_BAE8_7C7D_3721869367CATabSections {
			/** Time Period */
			_3A5C2DC2_2EE7_848C_83EB_A2B1E4D1C703: DevKit.Controls.Section;
		}

		export interface IgeneralTabSections {
			/** Information */
			information: DevKit.Controls.Section;
		}

		export interface InotesTabSections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}

		/** Participating Records */
		export interface I_242FCD83_2A50_478E_922A_F4641920DDE0Tab extends DevKit.Controls.ITab {
			Section: I_242FCD83_2A50_478E_922A_F4641920DDE0TabSections;
		}

		/** Time Period */
		export interface I_349A439D_6ED5_BAE8_7C7D_3721869367CATab extends DevKit.Controls.ITab {
			Section: I_349A439D_6ED5_BAE8_7C7D_3721869367CATabSections;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		/** Notes */
		export interface InotesTab extends DevKit.Controls.ITab {
			Section: InotesTabSections;
		}

		export interface ITabs {
			/** Participating Records */
			_242FCD83_2A50_478E_922A_F4641920DDE0: I_242FCD83_2A50_478E_922A_F4641920DDE0Tab;
			/** Time Period */
			_349A439D_6ED5_BAE8_7C7D_3721869367CA: I_349A439D_6ED5_BAE8_7C7D_3721869367CATab;
			/** General */
			general: IgeneralTab;
			/** Notes */
			notes: InotesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Goals */
			child_goals: DevKit.Controls.Grid;
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
	 * Goal_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Goal.Goal_Information(executionContext)
	 */
	export class Goal_Information extends FormBase<Goal_Information.IBody, Goal_Information.IHeader, Goal_Information.IGrid, Goal_Information.INavigation, Goal_Information.IQuickForm, Goal_Information.IProcess, Goal_Information.IDialog> {
		/**
		 * Creates a Goal_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDecimal', 'ActualInteger', 'ActualMoney', 'ConsiderOnlyGoalOwnersRecords', 'CustomRollupFieldDecimal', 'CustomRollupFieldInteger', 'CustomRollupFieldMoney', 'FiscalPeriod', 'FiscalYear', 'GoalEndDate', 'GoalOwnerId', 'GoalStartDate', 'InProgressDecimal', 'InProgressInteger', 'InProgressMoney', 'IsFiscalPeriodGoal', 'LastRolledupDate', 'MetricId', 'notescontrol', 'OwnerId', 'ParentGoalId', 'participatingrecordcontrol', 'Percentage', 'Percentage1', 'Percentage2', 'RollupOnlyFromChildGoals', 'RollUpQueryActualDecimalId', 'RollupQueryActualIntegerId', 'RollUpQueryActualMoneyId', 'RollUpQueryCustomDecimalId', 'RollUpQueryCustomIntegerId', 'RollUpQueryCustomMoneyId', 'RollUpQueryInprogressDecimalId', 'RollUpQueryInprogressIntegerId', 'RollUpQueryInprogressMoneyId', 'StretchTargetDecimal', 'StretchTargetInteger', 'StretchTargetMoney', 'TargetDecimal', 'TargetInteger', 'TargetMoney', 'Title'],
				header: [],
				tab: ['_242FCD83_2A50_478E_922A_F4641920DDE0____8ECDE6CB_085B_46D1_97A9_E357C5799076', '_349A439D_6ED5_BAE8_7C7D_3721869367CA____3A5C2DC2_2EE7_848C_83EB_A2B1E4D1C703', 'general___information', 'notes___notes'],
				grid: ['child_goals'],
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
			/** Shows the actual value (Decimal type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Decimal. */
			ActualDecimal: DevKit.Controls.Decimal;
			/** Shows the actual value (integer) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount or Count and the amount data type is Integer. */
			ActualInteger: DevKit.Controls.Integer;
			/** Shows the actual value (Money type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Money. */
			ActualMoney: DevKit.Controls.Money;
			/** Select whether only the goal owner's records, or all records, should be rolled up for goal results. */
			ConsiderOnlyGoalOwnersRecords: DevKit.Controls.Boolean;
			/** Indicates a placeholder rollup field for a decimal value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldDecimal: DevKit.Controls.Decimal;
			/** Indicates a placeholder rollup field for an integer value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldInteger: DevKit.Controls.Integer;
			/** Indicates a placeholder rollup field for a money value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldMoney: DevKit.Controls.Money;
			/** Select the fiscal period for the goal. */
			FiscalPeriod: DevKit.Controls.OptionSet;
			/** Select the fiscal year for the goal that's being tracked. */
			FiscalYear: DevKit.Controls.OptionSet;
			/** Enter the date when the goal ends. */
			GoalEndDate: DevKit.Controls.DateOnly;
			/** Choose the user or team responsible for meeting the goal. */
			GoalOwnerId: DevKit.Controls.Lookup;
			/** Enter the date and time when the period for tracking the goal begins. */
			GoalStartDate: DevKit.Controls.DateOnly;
			/** Shows the in-progress value (decimal) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressDecimal: DevKit.Controls.Decimal;
			/** Shows the in-progress value (integer) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressInteger: DevKit.Controls.Integer;
			/** Shows the in-progress value (money) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressMoney: DevKit.Controls.Money;
			/** Select whether the goal period is a fiscal period or custom period. */
			IsFiscalPeriodGoal: DevKit.Controls.Boolean;
			/** Shows the date and time when the goal was last rolled up. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			LastRolledupDate: DevKit.Controls.DateTime;
			/** Choose the metric for the goal. This metric determines how the goal is tracked. */
			MetricId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose a parent goal if the current goal is a child goal. This sets up a parent-child relationship for reporting and analytics. */
			ParentGoalId: DevKit.Controls.Lookup;
			/** Choose the metric for the goal. This metric determines how the goal is tracked. */
			participatingrecordcontrol: DevKit.Controls.ActionCards;
			/** Shows the percentage achieved against the target goal. */
			Percentage: DevKit.Controls.Decimal;
			/** Shows the percentage achieved against the target goal. */
			Percentage1: DevKit.Controls.Decimal;
			/** Shows the percentage achieved against the target goal. */
			Percentage2: DevKit.Controls.Decimal;
			/** Select whether the data should be rolled up only from the child goals. */
			RollupOnlyFromChildGoals: DevKit.Controls.Boolean;
			/** Choose the query that will be used to calculate the actual data for the goal (decimal). */
			RollUpQueryActualDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate the actual data for the goal (integer). */
			RollupQueryActualIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate the actual data for the goal (money). */
			RollUpQueryActualMoneyId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (decimal). */
			RollUpQueryCustomDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (integer). */
			RollUpQueryCustomIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (money). */
			RollUpQueryCustomMoneyId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (decimal). */
			RollUpQueryInprogressDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (integer). */
			RollUpQueryInprogressIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (money). */
			RollUpQueryInprogressMoneyId: DevKit.Controls.Lookup;
			/** Select a stretch target (decimal) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetDecimal: DevKit.Controls.Decimal;
			/** Select the stretch target (integer) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetInteger: DevKit.Controls.Integer;
			/** Select stretch target (money) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetMoney: DevKit.Controls.Money;
			/** Select a goal target of the decimal type to use for tracking data that include partial numbers, such as pounds sold of a product sold by weight. */
			TargetDecimal: DevKit.Controls.Decimal;
			/** Select a goal target of the integer type to use for tracking anything countable in whole numbers, such as units sold. */
			TargetInteger: DevKit.Controls.Integer;
			/** Select a goal target (money) to track a monetary amount such as revenue from a product. */
			TargetMoney: DevKit.Controls.Money;
			/** Type a title or name that describes the goal. */
			Title: DevKit.Controls.String;
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
			/** Goals */
			child_goals: DevKit.Controls.Grid;
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
	 * Usage: new Goal.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Goal Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDecimal', 'ActualInteger', 'ActualMoney', 'ConsiderOnlyGoalOwnersRecords', 'CustomRollupFieldDecimal', 'CustomRollupFieldInteger', 'CustomRollupFieldMoney', 'FiscalPeriod', 'FiscalYear', 'GoalEndDate', 'GoalOwnerId', 'GoalStartDate', 'InProgressDecimal', 'InProgressInteger', 'InProgressMoney', 'IsFiscalPeriodGoal', 'LastRolledupDate', 'MetricId', 'notescontrol', 'OwnerId', 'ParentGoalId', 'participatingrecordcontrol', 'Percentage', 'Percentage1', 'Percentage2', 'RollupOnlyFromChildGoals', 'RollUpQueryActualDecimalId', 'RollupQueryActualIntegerId', 'RollUpQueryActualMoneyId', 'RollUpQueryCustomDecimalId', 'RollUpQueryCustomIntegerId', 'RollUpQueryCustomMoneyId', 'RollUpQueryInprogressDecimalId', 'RollUpQueryInprogressIntegerId', 'RollUpQueryInprogressMoneyId', 'StretchTargetDecimal', 'StretchTargetInteger', 'StretchTargetMoney', 'TargetDecimal', 'TargetInteger', 'TargetMoney', 'Title'],
				header: [],
				tab: ['{242FCD83-2A50-478E-922A-F4641920DDE0}___{8ECDE6CB-085B-46D1-97A9-E357C5799076}', '{349a439d-6ed5-bae8-7c7d-3721869367ca}___{3a5c2dc2-2ee7-848c-83eb-a2b1e4d1c703}', 'general___information', 'notes___notes'],
				grid: ['child_goals'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

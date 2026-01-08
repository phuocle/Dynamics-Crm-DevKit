/**
 * DataPerformance.form.ts - DataPerformance Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace DataPerformance containing form classes: DataPerformance.FormClassName
 * 3. Aggregate Form class: DataPerformance.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace DataPerformance {

	// ========================================================================
	// Form: DataPerformance_Information
	// ========================================================================

	export namespace DataPerformance_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** An internal state which indicates whether at least one optimization is applied. */
			AnyOptimizationApplied: DevKit.Controls.Boolean;
			/** An internal state which indicates whether at least one optimization is available for this record. */
			AnyOptimizationAvailable: DevKit.Controls.Boolean;
			/** Number of times a queries were executed (Aggregated) */
			Count: DevKit.Controls.Integer;
			/** Primary entity */
			Entity: DevKit.Controls.String;
			/** An internal state which shows the result of the last action that was taken on this record. */
			LastActionResult: DevKit.Controls.String;
			/** Maximum execution time in seconds. (Aggregated) */
			MaxTime: DevKit.Controls.Decimal;
			/** Average execution time in seconds. (Aggregated) */
			MedianTime: DevKit.Controls.Decimal;
			/** Minimum execution time in seconds. (Aggregated) */
			MinTime: DevKit.Controls.Decimal;
			/** Data operation that triggered the query (Retrieve Multiple, etc.) */
			Operation: DevKit.Controls.String;
			/** Current optimization status of the record, showed to the customer. */
			OptimizationStatus: DevKit.Controls.String;
			/** Query Weight of the component. Factored with the Optimization Impact to determine the overall importance of applying an optimization. (P2) */
			Weight: DevKit.Controls.Decimal;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IPerformance_ImprovementTabSections {
			Performance_Improvement: DevKit.Controls.Section;
		}

		export interface IPerformance_ImprovementTab extends DevKit.Controls.ITab {
			Section: IPerformance_ImprovementTabSections;
		}

		export interface ITabs {
			Performance_Improvement: IPerformance_ImprovementTab;
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
	 * DataPerformance_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new DataPerformance.DataPerformance_Information(executionContext)
	 */
	export class DataPerformance_Information extends FormBase<DataPerformance_Information.IBody, DataPerformance_Information.IHeader, DataPerformance_Information.IGrid, DataPerformance_Information.INavigation, DataPerformance_Information.IQuickForm, DataPerformance_Information.IProcess, DataPerformance_Information.IDialog> {
		/**
		 * Creates a DataPerformance_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AnyOptimizationApplied', 'AnyOptimizationAvailable', 'Count', 'Entity', 'LastActionResult', 'MaxTime', 'MedianTime', 'MinTime', 'Operation', 'OptimizationStatus', 'Weight'],
				header: [],
				tab: ['Performance_Improvement___Performance_Improvement'],
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
			/** An internal state which indicates whether at least one optimization is applied. */
			AnyOptimizationApplied: DevKit.Controls.Boolean;
			/** An internal state which indicates whether at least one optimization is available for this record. */
			AnyOptimizationAvailable: DevKit.Controls.Boolean;
			/** Number of times a queries were executed (Aggregated) */
			Count: DevKit.Controls.Integer;
			/** Primary entity */
			Entity: DevKit.Controls.String;
			/** An internal state which shows the result of the last action that was taken on this record. */
			LastActionResult: DevKit.Controls.String;
			/** Maximum execution time in seconds. (Aggregated) */
			MaxTime: DevKit.Controls.Decimal;
			/** Average execution time in seconds. (Aggregated) */
			MedianTime: DevKit.Controls.Decimal;
			/** Minimum execution time in seconds. (Aggregated) */
			MinTime: DevKit.Controls.Decimal;
			/** Data operation that triggered the query (Retrieve Multiple, etc.) */
			Operation: DevKit.Controls.String;
			/** Current optimization status of the record, showed to the customer. */
			OptimizationStatus: DevKit.Controls.String;
			/** Query Weight of the component. Factored with the Optimization Impact to determine the overall importance of applying an optimization. (P2) */
			Weight: DevKit.Controls.Decimal;
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
	 * Usage: new DataPerformance.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate DataPerformance Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AnyOptimizationApplied', 'AnyOptimizationAvailable', 'Count', 'Entity', 'LastActionResult', 'MaxTime', 'MedianTime', 'MinTime', 'Operation', 'OptimizationStatus', 'Weight'],
				header: [],
				tab: ['Performance Improvement___Performance Improvement'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

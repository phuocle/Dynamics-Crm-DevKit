/**
 * Metric.form.ts - Metric Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Metric containing form classes: Metric.FormClassName
 * 3. Aggregate Form class: Metric.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Metric {

	// ========================================================================
	// Form: Metric_Information
	// ========================================================================

	export namespace Metric_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Data type of the amount. */
			AmountDataType: DevKit.Controls.OptionSet;
			/** Description of the goal metric. */
			Description: DevKit.Controls.Memo;
			/** Information that indicates whether the metric type is Count or Amount. */
			IsAmount: DevKit.Controls.Boolean;
			/** Indicates whether the goal metric tracks stretch targets. */
			IsStretchTracked: DevKit.Controls.Boolean;
			/** Name of the goal metric. */
			Name: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IdescriptionTabSections {
			/** Description */
			description: DevKit.Controls.Section;
		}

		export interface IgeneralTabSections {
			/** Step1 : Define the metric */
			_379F3DB8_82DF_4E44_930A_C7A22C0E5206: DevKit.Controls.Section;
		}

		export interface IRollup_AttributesTabSections {
			/** Step2 : Define the rollup fields for this metric to track the target's actual and in-progress values */
			_CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB: DevKit.Controls.Section;
		}

		/** Description */
		export interface IdescriptionTab extends DevKit.Controls.ITab {
			Section: IdescriptionTabSections;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		/** Rollup Fields */
		export interface IRollup_AttributesTab extends DevKit.Controls.ITab {
			Section: IRollup_AttributesTabSections;
		}

		export interface ITabs {
			/** Description */
			description: IdescriptionTab;
			/** General */
			general: IgeneralTab;
			/** Rollup Fields */
			Rollup_Attributes: IRollup_AttributesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Rollup Attributes */
			MetricLineItemSubGrid: DevKit.Controls.Grid;
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
	 * Metric_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Metric.Metric_Information(executionContext)
	 */
	export class Metric_Information extends FormBase<Metric_Information.IBody, Metric_Information.IHeader, Metric_Information.IGrid, Metric_Information.INavigation, Metric_Information.IQuickForm, Metric_Information.IProcess, Metric_Information.IDialog> {
		/**
		 * Creates a Metric_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AmountDataType', 'Description', 'IsAmount', 'IsStretchTracked', 'Name'],
				header: [],
				tab: ['description___description', 'general____379F3DB8_82DF_4E44_930A_C7A22C0E5206', 'Rollup_Attributes____CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB'],
				grid: ['MetricLineItemSubGrid'],
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
			/** Data type of the amount. */
			AmountDataType: DevKit.Controls.OptionSet;
			/** Description of the goal metric. */
			Description: DevKit.Controls.Memo;
			/** Information that indicates whether the metric type is Count or Amount. */
			IsAmount: DevKit.Controls.Boolean;
			/** Indicates whether the goal metric tracks stretch targets. */
			IsStretchTracked: DevKit.Controls.Boolean;
			/** Name of the goal metric. */
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
			/** Rollup Attributes */
			MetricLineItemSubGrid: DevKit.Controls.Grid;
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
	 * Usage: new Metric.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Metric Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AmountDataType', 'Description', 'IsAmount', 'IsStretchTracked', 'Name'],
				header: [],
				tab: ['description___description', 'general___{379F3DB8-82DF-4e44-930A-C7A22C0E5206}', 'Rollup Attributes___{CEBD8001-3DD4-4abb-99DE-9A3F2FD250EB}'],
				grid: ['MetricLineItemSubGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

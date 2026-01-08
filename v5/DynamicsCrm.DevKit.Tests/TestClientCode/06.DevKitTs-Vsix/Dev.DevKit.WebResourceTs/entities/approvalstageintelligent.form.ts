/**
 * approvalstageintelligent.form.ts - approvalstageintelligent Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace approvalstageintelligent containing form classes: approvalstageintelligent.FormClassName
 * 3. Aggregate Form class: approvalstageintelligent.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace approvalstageintelligent {

	// ========================================================================
	// Form: approvalstageintelligent_Information
	// ========================================================================

	export namespace approvalstageintelligent_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The prompt id. */
			AiModelId: DevKit.Controls.String;
			/** Inputs to intelligent approval stage. */
			Inputs: DevKit.Controls.String;
			/** Next steps for the AI stage. */
			NextSteps: DevKit.Controls.String;
			/** Next steps result. */
			NextStepsResult: DevKit.Controls.OptionSet;
			/** Next steps result value */
			NextStepsResultValue: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Rationale for the AI stage's decision. */
			PredictionRationale: DevKit.Controls.String;
			/** Prediction response. */
			PredictionResponse: DevKit.Controls.String;
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
	 * approvalstageintelligent_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new approvalstageintelligent.approvalstageintelligent_Information(executionContext)
	 */
	export class approvalstageintelligent_Information extends FormBase<approvalstageintelligent_Information.IBody, approvalstageintelligent_Information.IHeader, approvalstageintelligent_Information.IGrid, approvalstageintelligent_Information.INavigation, approvalstageintelligent_Information.IQuickForm, approvalstageintelligent_Information.IProcess, approvalstageintelligent_Information.IDialog> {
		/**
		 * Creates a approvalstageintelligent_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AiModelId', 'Inputs', 'NextSteps', 'NextStepsResult', 'NextStepsResultValue', 'OwnerId', 'PredictionRationale', 'PredictionResponse'],
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
			/** The prompt id. */
			AiModelId: DevKit.Controls.String;
			/** Inputs to intelligent approval stage. */
			Inputs: DevKit.Controls.String;
			/** Next steps for the AI stage. */
			NextSteps: DevKit.Controls.String;
			/** Next steps result. */
			NextStepsResult: DevKit.Controls.OptionSet;
			/** Next steps result value */
			NextStepsResultValue: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Rationale for the AI stage's decision. */
			PredictionRationale: DevKit.Controls.String;
			/** Prediction response. */
			PredictionResponse: DevKit.Controls.String;
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
	 * Usage: new approvalstageintelligent.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate approvalstageintelligent Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AiModelId', 'Inputs', 'NextSteps', 'NextStepsResult', 'NextStepsResultValue', 'OwnerId', 'PredictionRationale', 'PredictionResponse'],
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

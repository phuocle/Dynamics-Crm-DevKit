/**
 * msdyn_analysiscomponent.form.ts - msdyn_analysiscomponent Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_analysiscomponent containing form classes: msdyn_analysiscomponent.FormClassName
 * 3. Aggregate Form class: msdyn_analysiscomponent.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_analysiscomponent {

	// ========================================================================
	// Form: msdyn_analysiscomponent_Information
	// ========================================================================

	export namespace msdyn_analysiscomponent_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Analysis Component Type */
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** The parent Analysis Job that analyzed this particular Analysis Component. */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			/** Component Id */
			msdyn_ComponentId: DevKit.Controls.String;
			/** Component Name */
			msdyn_ComponentName: DevKit.Controls.String;
			/** Component Type */
			msdyn_ComponentType: DevKit.Controls.OptionSet;
			/** Error Count */
			msdyn_ErrorCount: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Retry Count */
			msdyn_RetryCount: DevKit.Controls.Integer;
			/** Rule Fail Count */
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount: DevKit.Controls.Integer;
			/** Rule Pass Rate */
			msdyn_RulePassRate: DevKit.Controls.Integer;
			/** The Solution Health Rule Set for which this is analysis component is for. */
			msdyn_SolutionHealthRuleSetId: DevKit.Controls.Lookup;
			/** Warning Count */
			msdyn_WarningCount: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Analysis Component */
			statuscode: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_2TabSections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
			/** Section */
			tab_2_section_2: DevKit.Controls.Section;
		}

		/** Summary */
		export interface Itab_2Tab extends DevKit.Controls.ITab {
			Section: Itab_2TabSections;
		}

		export interface ITabs {
			/** Summary */
			tab_2: Itab_2Tab;
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
	 * msdyn_analysiscomponent_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_analysiscomponent.msdyn_analysiscomponent_Information(executionContext)
	 */
	export class msdyn_analysiscomponent_Information extends FormBase<msdyn_analysiscomponent_Information.IBody, msdyn_analysiscomponent_Information.IHeader, msdyn_analysiscomponent_Information.IGrid, msdyn_analysiscomponent_Information.INavigation, msdyn_analysiscomponent_Information.IQuickForm, msdyn_analysiscomponent_Information.IProcess, msdyn_analysiscomponent_Information.IDialog> {
		/**
		 * Creates a msdyn_analysiscomponent_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AnalysisComponentType', 'msdyn_AnalysisJobId', 'msdyn_ComponentId', 'msdyn_ComponentName', 'msdyn_ComponentType', 'msdyn_ErrorCount', 'msdyn_name', 'msdyn_RetryCount', 'msdyn_RuleFailCount', 'msdyn_RulePassCount', 'msdyn_RulePassRate', 'msdyn_SolutionHealthRuleSetId', 'msdyn_WarningCount', 'OwnerId', 'statuscode'],
				header: [],
				tab: ['tab_2___tab_2_section_1', 'tab_2___tab_2_section_2'],
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
			/** Analysis Component Type */
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** The parent Analysis Job that analyzed this particular Analysis Component. */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			/** Component Id */
			msdyn_ComponentId: DevKit.Controls.String;
			/** Component Name */
			msdyn_ComponentName: DevKit.Controls.String;
			/** Component Type */
			msdyn_ComponentType: DevKit.Controls.OptionSet;
			/** Error Count */
			msdyn_ErrorCount: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Retry Count */
			msdyn_RetryCount: DevKit.Controls.Integer;
			/** Rule Fail Count */
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount: DevKit.Controls.Integer;
			/** Rule Pass Rate */
			msdyn_RulePassRate: DevKit.Controls.Integer;
			/** The Solution Health Rule Set for which this is analysis component is for. */
			msdyn_SolutionHealthRuleSetId: DevKit.Controls.Lookup;
			/** Warning Count */
			msdyn_WarningCount: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Analysis Component */
			statuscode: DevKit.Controls.OptionSet;
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
	 * Usage: new msdyn_analysiscomponent.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_analysiscomponent Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AnalysisComponentType', 'msdyn_AnalysisJobId', 'msdyn_ComponentId', 'msdyn_ComponentName', 'msdyn_ComponentType', 'msdyn_ErrorCount', 'msdyn_name', 'msdyn_RetryCount', 'msdyn_RuleFailCount', 'msdyn_RulePassCount', 'msdyn_RulePassRate', 'msdyn_SolutionHealthRuleSetId', 'msdyn_WarningCount', 'OwnerId', 'statuscode'],
				header: [],
				tab: ['tab_2___tab_2_section_1', 'tab_2___tab_2_section_2'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

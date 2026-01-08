/**
 * msdyn_analysisjob.form.ts - msdyn_analysisjob Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_analysisjob containing form classes: msdyn_analysisjob.FormClassName
 * 3. Aggregate Form class: msdyn_analysisjob.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_analysisjob {

	// ========================================================================
	// Form: msdyn_analysisjob_Information
	// ========================================================================

	export namespace msdyn_analysisjob_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** End Time */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Error Count */
			msdyn_ErrorCount: DevKit.Controls.Integer;
			/** Error Count */
			msdyn_ErrorCount1: DevKit.Controls.Integer;
			/** Exception */
			msdyn_Exception: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Rule Fail Count */
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			/** Rule Fail Count */
			msdyn_RuleFailCount1: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount1: DevKit.Controls.Integer;
			/** Rule Run Count */
			msdyn_RuleRunCount: DevKit.Controls.Integer;
			/** Rule Run Count */
			msdyn_RuleRunCount1: DevKit.Controls.Integer;
			/** Start Time */
			msdyn_StartTime: DevKit.Controls.DateTime;
			/** Suggestion Count */
			msdyn_SuggestionCount: DevKit.Controls.Integer;
			/** Suggestion Count */
			msdyn_SuggestionCount1: DevKit.Controls.Integer;
			/** Warning Count */
			msdyn_WarningCount: DevKit.Controls.Integer;
			/** Warning Count */
			msdyn_WarningCount1: DevKit.Controls.Integer;
			/** Status of the Analysis Job */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Analysis Job */
			statuscode: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}

		export interface I_F1A26849_5CBD_4343_BE37_A5447D0EA5A6TabSections {
			/** General */
			_BFA242F2_7FBF_468A_85CA_6D52BD4193D1: DevKit.Controls.Section;
			/** System */
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_2: DevKit.Controls.Section;
			/** Section */
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_3: DevKit.Controls.Section;
		}

		export interface Isummary_tabTabSections {
			/** Count of Failures by Severity */
			_E6707165_9B00_4ABC_9DF3_D04E06FEC0F2_SECTION_4: DevKit.Controls.Section;
			/** Overview */
			tab_3_section_overview: DevKit.Controls.Section;
		}

		export interface Itab_2TabSections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
		}

		/** Job Details */
		export interface I_F1A26849_5CBD_4343_BE37_A5447D0EA5A6Tab extends DevKit.Controls.ITab {
			Section: I_F1A26849_5CBD_4343_BE37_A5447D0EA5A6TabSections;
		}

		/** Summary */
		export interface Isummary_tabTab extends DevKit.Controls.ITab {
			Section: Isummary_tabTabSections;
		}

		/** Exception Details */
		export interface Itab_2Tab extends DevKit.Controls.ITab {
			Section: Itab_2TabSections;
		}

		export interface ITabs {
			/** Job Details */
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6: I_F1A26849_5CBD_4343_BE37_A5447D0EA5A6Tab;
			/** Summary */
			summary_tab: Isummary_tabTab;
			/** Exception Details */
			tab_2: Itab_2Tab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Analysis Results(Analysis Job) */
			AssociatedAnalysisResults: DevKit.Controls.Grid;
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
	 * msdyn_analysisjob_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_analysisjob.msdyn_analysisjob_Information(executionContext)
	 */
	export class msdyn_analysisjob_Information extends FormBase<msdyn_analysisjob_Information.IBody, msdyn_analysisjob_Information.IHeader, msdyn_analysisjob_Information.IGrid, msdyn_analysisjob_Information.INavigation, msdyn_analysisjob_Information.IQuickForm, msdyn_analysisjob_Information.IProcess, msdyn_analysisjob_Information.IDialog> {
		/**
		 * Creates a msdyn_analysisjob_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_EndTime', 'msdyn_ErrorCount', 'msdyn_ErrorCount1', 'msdyn_Exception', 'msdyn_name', 'msdyn_RuleFailCount', 'msdyn_RuleFailCount1', 'msdyn_RulePassCount', 'msdyn_RulePassCount1', 'msdyn_RuleRunCount', 'msdyn_RuleRunCount1', 'msdyn_StartTime', 'msdyn_SuggestionCount', 'msdyn_SuggestionCount1', 'msdyn_WarningCount', 'msdyn_WarningCount1', 'statecode', 'statuscode'],
				header: ['OwnerId'],
				tab: ['_F1A26849_5CBD_4343_BE37_A5447D0EA5A6____BFA242F2_7FBF_468A_85CA_6D52BD4193D1', '_F1A26849_5CBD_4343_BE37_A5447D0EA5A6____F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_2', '_F1A26849_5CBD_4343_BE37_A5447D0EA5A6____F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_3', 'summary_tab____E6707165_9B00_4ABC_9DF3_D04E06FEC0F2_SECTION_4', 'summary_tab___tab_3_section_overview', 'tab_2___tab_2_section_1'],
				grid: ['AssociatedAnalysisResults'],
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
			/** End Time */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Error Count */
			msdyn_ErrorCount: DevKit.Controls.Integer;
			/** Error Count */
			msdyn_ErrorCount1: DevKit.Controls.Integer;
			/** Exception */
			msdyn_Exception: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Rule Fail Count */
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			/** Rule Fail Count */
			msdyn_RuleFailCount1: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount1: DevKit.Controls.Integer;
			/** Rule Run Count */
			msdyn_RuleRunCount: DevKit.Controls.Integer;
			/** Rule Run Count */
			msdyn_RuleRunCount1: DevKit.Controls.Integer;
			/** Start Time */
			msdyn_StartTime: DevKit.Controls.DateTime;
			/** Suggestion Count */
			msdyn_SuggestionCount: DevKit.Controls.Integer;
			/** Suggestion Count */
			msdyn_SuggestionCount1: DevKit.Controls.Integer;
			/** Warning Count */
			msdyn_WarningCount: DevKit.Controls.Integer;
			/** Warning Count */
			msdyn_WarningCount1: DevKit.Controls.Integer;
			/** Status of the Analysis Job */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Analysis Job */
			statuscode: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** Analysis Results(Analysis Job) */
			AssociatedAnalysisResults: DevKit.Controls.Grid;
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
	 * Usage: new msdyn_analysisjob.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_analysisjob Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_EndTime', 'msdyn_ErrorCount', 'msdyn_ErrorCount1', 'msdyn_Exception', 'msdyn_name', 'msdyn_RuleFailCount', 'msdyn_RuleFailCount1', 'msdyn_RulePassCount', 'msdyn_RulePassCount1', 'msdyn_RuleRunCount', 'msdyn_RuleRunCount1', 'msdyn_StartTime', 'msdyn_SuggestionCount', 'msdyn_SuggestionCount1', 'msdyn_WarningCount', 'msdyn_WarningCount1', 'statecode', 'statuscode'],
				header: ['OwnerId'],
				tab: ['{f1a26849-5cbd-4343-be37-a5447d0ea5a6}___{bfa242f2-7fbf-468a-85ca-6d52bd4193d1}', '{f1a26849-5cbd-4343-be37-a5447d0ea5a6}___{f1a26849-5cbd-4343-be37-a5447d0ea5a6}_section_2', '{f1a26849-5cbd-4343-be37-a5447d0ea5a6}___{f1a26849-5cbd-4343-be37-a5447d0ea5a6}_section_3', 'summary_tab___{e6707165-9b00-4abc-9df3-d04e06fec0f2}_section_4', 'summary_tab___tab_3_section_overview', 'tab_2___tab_2_section_1'],
				grid: ['AssociatedAnalysisResults'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

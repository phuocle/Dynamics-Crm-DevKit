/**
 * msdyn_analysisresult.form.ts - msdyn_analysisresult Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_analysisresult containing form classes: msdyn_analysisresult.FormClassName
 * 3. Aggregate Form class: msdyn_analysisresult.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_analysisresult {

	// ========================================================================
	// Form: msdyn_analysisresult_Information
	// ========================================================================

	export namespace msdyn_analysisresult_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** AnalysisComponentType */
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** The parent Analysis Job that produced the Analysis Result */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			/** Category */
			msdyn_Category: DevKit.Controls.OptionSet;
			/** Entity Name */
			msdyn_EntityName: DevKit.Controls.String;
			/** File Uri */
			msdyn_FileUri: DevKit.Controls.String;
			/** Help Link */
			msdyn_helplink: DevKit.Controls.String;
			/** Level */
			msdyn_Level: DevKit.Controls.OptionSet;
			/** Line */
			msdyn_Line: DevKit.Controls.Integer;
			/** Member */
			msdyn_Member: DevKit.Controls.String;
			/** Message */
			msdyn_Message: DevKit.Controls.String;
			/** Module */
			msdyn_Module: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The return status of a rule run: pass, fail, or configuration error */
			msdyn_ReturnStatus: DevKit.Controls.OptionSet;
			/** Rule Id */
			msdyn_RuleId: DevKit.Controls.String;
			/** Rule Reference Uri */
			msdyn_RuleReferenceUri: DevKit.Controls.String;
			/** Severity */
			msdyn_Severity: DevKit.Controls.OptionSet;
			/** Snippet */
			msdyn_Snippet: DevKit.Controls.String;
			/** Message */
			msdyn_SolutionHealthMessage: DevKit.Controls.Memo;
			/** Type */
			msdyn_Type: DevKit.Controls.String;
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

		export interface ITabs {
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Analysis Result Details (Analysis Result) */
			AnalysisResultDetails: DevKit.Controls.Grid;
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
	 * msdyn_analysisresult_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_analysisresult.msdyn_analysisresult_Information(executionContext)
	 */
	export class msdyn_analysisresult_Information extends FormBase<msdyn_analysisresult_Information.IBody, msdyn_analysisresult_Information.IHeader, msdyn_analysisresult_Information.IGrid, msdyn_analysisresult_Information.INavigation, msdyn_analysisresult_Information.IQuickForm, msdyn_analysisresult_Information.IProcess, msdyn_analysisresult_Information.IDialog> {
		/**
		 * Creates a msdyn_analysisresult_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AnalysisComponentType', 'msdyn_AnalysisJobId', 'msdyn_Category', 'msdyn_EntityName', 'msdyn_FileUri', 'msdyn_helplink', 'msdyn_Level', 'msdyn_Line', 'msdyn_Member', 'msdyn_Message', 'msdyn_Module', 'msdyn_name', 'msdyn_ReturnStatus', 'msdyn_RuleId', 'msdyn_RuleReferenceUri', 'msdyn_Severity', 'msdyn_Snippet', 'msdyn_SolutionHealthMessage', 'msdyn_Type'],
				header: ['OwnerId'],
				tab: [],
				grid: ['AnalysisResultDetails'],
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
			/** AnalysisComponentType */
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** The parent Analysis Job that produced the Analysis Result */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			/** Category */
			msdyn_Category: DevKit.Controls.OptionSet;
			/** Entity Name */
			msdyn_EntityName: DevKit.Controls.String;
			/** File Uri */
			msdyn_FileUri: DevKit.Controls.String;
			/** Help Link */
			msdyn_helplink: DevKit.Controls.String;
			/** Level */
			msdyn_Level: DevKit.Controls.OptionSet;
			/** Line */
			msdyn_Line: DevKit.Controls.Integer;
			/** Member */
			msdyn_Member: DevKit.Controls.String;
			/** Message */
			msdyn_Message: DevKit.Controls.String;
			/** Module */
			msdyn_Module: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The return status of a rule run: pass, fail, or configuration error */
			msdyn_ReturnStatus: DevKit.Controls.OptionSet;
			/** Rule Id */
			msdyn_RuleId: DevKit.Controls.String;
			/** Rule Reference Uri */
			msdyn_RuleReferenceUri: DevKit.Controls.String;
			/** Severity */
			msdyn_Severity: DevKit.Controls.OptionSet;
			/** Snippet */
			msdyn_Snippet: DevKit.Controls.String;
			/** Message */
			msdyn_SolutionHealthMessage: DevKit.Controls.Memo;
			/** Type */
			msdyn_Type: DevKit.Controls.String;
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
			/** Analysis Result Details (Analysis Result) */
			AnalysisResultDetails: DevKit.Controls.Grid;
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
	 * Usage: new msdyn_analysisresult.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_analysisresult Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AnalysisComponentType', 'msdyn_AnalysisJobId', 'msdyn_Category', 'msdyn_EntityName', 'msdyn_FileUri', 'msdyn_helplink', 'msdyn_Level', 'msdyn_Line', 'msdyn_Member', 'msdyn_Message', 'msdyn_Module', 'msdyn_name', 'msdyn_ReturnStatus', 'msdyn_RuleId', 'msdyn_RuleReferenceUri', 'msdyn_Severity', 'msdyn_Snippet', 'msdyn_SolutionHealthMessage', 'msdyn_Type'],
				header: ['OwnerId'],
				tab: [],
				grid: ['AnalysisResultDetails'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

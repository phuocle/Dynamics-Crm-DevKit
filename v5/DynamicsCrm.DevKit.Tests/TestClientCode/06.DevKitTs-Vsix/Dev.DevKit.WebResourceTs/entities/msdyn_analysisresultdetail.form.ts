/**
 * msdyn_analysisresultdetail.form.ts - msdyn_analysisresultdetail Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_analysisresultdetail containing form classes: msdyn_analysisresultdetail.FormClassName
 * 3. Aggregate Form class: msdyn_analysisresultdetail.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_analysisresultdetail {

	// ========================================================================
	// Form: msdyn_analysisresultdetail_Information
	// ========================================================================

	export namespace msdyn_analysisresultdetail_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Analysis Result */
			msdyn_AnalysisResult: DevKit.Controls.Lookup;
			/** Can open entity record */
			msdyn_CanOpenEntityRecord: DevKit.Controls.Boolean;
			/** Record Name */
			msdyn_EntityName: DevKit.Controls.Memo;
			/** Message */
			msdyn_Message: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Record Id */
			msdyn_ResultEntityId: DevKit.Controls.String;
			/** Entity Logical Name */
			msdyn_ResultEntityLogicalName: DevKit.Controls.String;
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
	 * msdyn_analysisresultdetail_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_analysisresultdetail.msdyn_analysisresultdetail_Information(executionContext)
	 */
	export class msdyn_analysisresultdetail_Information extends FormBase<msdyn_analysisresultdetail_Information.IBody, msdyn_analysisresultdetail_Information.IHeader, msdyn_analysisresultdetail_Information.IGrid, msdyn_analysisresultdetail_Information.INavigation, msdyn_analysisresultdetail_Information.IQuickForm, msdyn_analysisresultdetail_Information.IProcess, msdyn_analysisresultdetail_Information.IDialog> {
		/**
		 * Creates a msdyn_analysisresultdetail_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AnalysisResult', 'msdyn_CanOpenEntityRecord', 'msdyn_EntityName', 'msdyn_Message', 'msdyn_name', 'msdyn_ResultEntityId', 'msdyn_ResultEntityLogicalName'],
				header: ['OwnerId'],
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
			/** Analysis Result */
			msdyn_AnalysisResult: DevKit.Controls.Lookup;
			/** Can open entity record */
			msdyn_CanOpenEntityRecord: DevKit.Controls.Boolean;
			/** Record Name */
			msdyn_EntityName: DevKit.Controls.Memo;
			/** Message */
			msdyn_Message: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Record Id */
			msdyn_ResultEntityId: DevKit.Controls.String;
			/** Entity Logical Name */
			msdyn_ResultEntityLogicalName: DevKit.Controls.String;
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
	 * Usage: new msdyn_analysisresultdetail.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_analysisresultdetail Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AnalysisResult', 'msdyn_CanOpenEntityRecord', 'msdyn_EntityName', 'msdyn_Message', 'msdyn_name', 'msdyn_ResultEntityId', 'msdyn_ResultEntityLogicalName'],
				header: ['OwnerId'],
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

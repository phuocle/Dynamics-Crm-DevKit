/**
 * PowerPagesSiteAIFeedback.form.ts - PowerPagesSiteAIFeedback Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace PowerPagesSiteAIFeedback containing form classes: PowerPagesSiteAIFeedback.FormClassName
 * 3. Aggregate Form class: PowerPagesSiteAIFeedback.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace PowerPagesSiteAIFeedback {

	// ========================================================================
	// Form: Submit_Feedback
	// ========================================================================

	export namespace Submit_Feedback {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Feedback */
			Feedback: DevKit.Controls.OptionSet;
			/** Name */
			Name: DevKit.Controls.String;
			/** Origin */
			Origin: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for down */
			Reason: DevKit.Controls.Memo;
			/** Response */
			Response: DevKit.Controls.Memo;
			/** User Prompt */
			UserPrompt: DevKit.Controls.Memo;
			/** Website Domain */
			WebsiteDomain: DevKit.Controls.String;
			/** Website Id */
			WebsiteId: DevKit.Controls.String;
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
	 * Submit_Feedback Form class
	 * Provides typed access to all form controls
	 * Usage: new PowerPagesSiteAIFeedback.Submit_Feedback(executionContext)
	 */
	export class Submit_Feedback extends FormBase<Submit_Feedback.IBody, Submit_Feedback.IHeader, Submit_Feedback.IGrid, Submit_Feedback.INavigation, Submit_Feedback.IQuickForm, Submit_Feedback.IProcess, Submit_Feedback.IDialog> {
		/**
		 * Creates a Submit_Feedback Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Feedback', 'Name', 'Origin', 'OwnerId', 'Reason', 'Response', 'UserPrompt', 'WebsiteDomain', 'WebsiteId'],
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
			/** Feedback */
			Feedback: DevKit.Controls.OptionSet;
			/** Name */
			Name: DevKit.Controls.String;
			/** Origin */
			Origin: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for down */
			Reason: DevKit.Controls.Memo;
			/** Response */
			Response: DevKit.Controls.Memo;
			/** User Prompt */
			UserPrompt: DevKit.Controls.Memo;
			/** Website Domain */
			WebsiteDomain: DevKit.Controls.String;
			/** Website Id */
			WebsiteId: DevKit.Controls.String;
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
	 * Usage: new PowerPagesSiteAIFeedback.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate PowerPagesSiteAIFeedback Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Feedback', 'Name', 'Origin', 'OwnerId', 'Reason', 'Response', 'UserPrompt', 'WebsiteDomain', 'WebsiteId'],
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

/**
 * TextAnalyticsEntityMapping.form.ts - TextAnalyticsEntityMapping Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace TextAnalyticsEntityMapping containing form classes: TextAnalyticsEntityMapping.FormClassName
 * 3. Aggregate Form class: TextAnalyticsEntityMapping.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace TextAnalyticsEntityMapping {

	// ========================================================================
	// Form: TextAnalyticsEntityMapping_Information
	// ========================================================================

	export namespace TextAnalyticsEntityMapping_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Select Entity */
			EntityPickList: DevKit.Controls.OptionSet;
			/** Select Field */
			FieldPickList: DevKit.Controls.OptionSet;
			/** Specify if the mapping is for text match or exact match */
			IsTextMatchMapping: DevKit.Controls.Boolean;
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
	 * TextAnalyticsEntityMapping_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new TextAnalyticsEntityMapping.TextAnalyticsEntityMapping_Information(executionContext)
	 */
	export class TextAnalyticsEntityMapping_Information extends FormBase<TextAnalyticsEntityMapping_Information.IBody, TextAnalyticsEntityMapping_Information.IHeader, TextAnalyticsEntityMapping_Information.IGrid, TextAnalyticsEntityMapping_Information.INavigation, TextAnalyticsEntityMapping_Information.IQuickForm, TextAnalyticsEntityMapping_Information.IProcess, TextAnalyticsEntityMapping_Information.IDialog> {
		/**
		 * Creates a TextAnalyticsEntityMapping_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['EntityPickList', 'FieldPickList', 'IsTextMatchMapping'],
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
			/** Select Entity */
			EntityPickList: DevKit.Controls.OptionSet;
			/** Select Field */
			FieldPickList: DevKit.Controls.OptionSet;
			/** Specify if the mapping is for text match or exact match */
			IsTextMatchMapping: DevKit.Controls.Boolean;
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
	 * Usage: new TextAnalyticsEntityMapping.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate TextAnalyticsEntityMapping Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['EntityPickList', 'FieldPickList', 'IsTextMatchMapping'],
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

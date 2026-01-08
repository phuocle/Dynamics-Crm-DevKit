/**
 * mspp_webtemplate.form.ts - mspp_webtemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_webtemplate containing form classes: mspp_webtemplate.FormClassName
 * 3. Aggregate Form class: mspp_webtemplate.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_webtemplate {

	// ========================================================================
	// Form: mspp_webtemplate_Information
	// ========================================================================

	export namespace mspp_webtemplate_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the MIME type of the web template content. */
			mspp_mimetype: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Source */
			mspp_source: DevKit.Controls.Memo;
			/** Source */
			mspp_source1: DevKit.Controls.Memo;
			/** Unique identifier for Website associated with Web Template */
			mspp_websiteid: DevKit.Controls.Lookup;
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
	 * mspp_webtemplate_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_webtemplate.mspp_webtemplate_Information(executionContext)
	 */
	export class mspp_webtemplate_Information extends FormBase<mspp_webtemplate_Information.IBody, mspp_webtemplate_Information.IHeader, mspp_webtemplate_Information.IGrid, mspp_webtemplate_Information.INavigation, mspp_webtemplate_Information.IQuickForm, mspp_webtemplate_Information.IProcess, mspp_webtemplate_Information.IDialog> {
		/**
		 * Creates a mspp_webtemplate_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_mimetype', 'mspp_name', 'mspp_source', 'mspp_source1', 'mspp_websiteid'],
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
			/** Shows the MIME type of the web template content. */
			mspp_mimetype: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Source */
			mspp_source: DevKit.Controls.Memo;
			/** Source */
			mspp_source1: DevKit.Controls.Memo;
			/** Unique identifier for Website associated with Web Template */
			mspp_websiteid: DevKit.Controls.Lookup;
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
	 * Usage: new mspp_webtemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_webtemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_mimetype', 'mspp_name', 'mspp_source', 'mspp_source1', 'mspp_websiteid'],
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

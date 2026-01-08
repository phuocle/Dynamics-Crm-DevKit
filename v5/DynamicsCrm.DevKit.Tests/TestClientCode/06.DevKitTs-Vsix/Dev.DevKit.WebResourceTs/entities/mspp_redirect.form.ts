/**
 * mspp_redirect.form.ts - mspp_redirect Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_redirect containing form classes: mspp_redirect.FormClassName
 * 3. Aggregate Form class: mspp_redirect.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_redirect {

	// ========================================================================
	// Form: mspp_redirect_Information
	// ========================================================================

	export namespace mspp_redirect_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The path to redirect visitors from */
			mspp_inboundurl: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** The path to redirect visitors to */
			mspp_redirecturl: DevKit.Controls.String;
			/** Unique identifier for Site Marker associated with Redirect. */
			mspp_sitemarkerid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Redirect. */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Redirect. */
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
	 * mspp_redirect_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_redirect.mspp_redirect_Information(executionContext)
	 */
	export class mspp_redirect_Information extends FormBase<mspp_redirect_Information.IBody, mspp_redirect_Information.IHeader, mspp_redirect_Information.IGrid, mspp_redirect_Information.INavigation, mspp_redirect_Information.IQuickForm, mspp_redirect_Information.IProcess, mspp_redirect_Information.IDialog> {
		/**
		 * Creates a mspp_redirect_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_inboundurl', 'mspp_name', 'mspp_redirecturl', 'mspp_sitemarkerid', 'mspp_webpageid', 'mspp_websiteid'],
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
			/** The path to redirect visitors from */
			mspp_inboundurl: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** The path to redirect visitors to */
			mspp_redirecturl: DevKit.Controls.String;
			/** Unique identifier for Site Marker associated with Redirect. */
			mspp_sitemarkerid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Redirect. */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Redirect. */
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
	 * Usage: new mspp_redirect.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_redirect Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_inboundurl', 'mspp_name', 'mspp_redirecturl', 'mspp_sitemarkerid', 'mspp_webpageid', 'mspp_websiteid'],
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

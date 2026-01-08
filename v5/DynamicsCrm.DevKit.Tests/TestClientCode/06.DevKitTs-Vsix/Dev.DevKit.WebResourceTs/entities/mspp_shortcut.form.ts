/**
 * mspp_shortcut.form.ts - mspp_shortcut Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_shortcut containing form classes: mspp_shortcut.FormClassName
 * 3. Aggregate Form class: mspp_shortcut.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_shortcut {

	// ========================================================================
	// Form: mspp_shortcut_Information
	// ========================================================================

	export namespace mspp_shortcut_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Description */
			mspp_description1: DevKit.Controls.Memo;
			/** Disable Shortcut Target Validation */
			mspp_disabletargetvalidation: DevKit.Controls.Boolean;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** External URL */
			mspp_externalurl: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Page associated with Shortcut. */
			mspp_parentpage_webpageid: DevKit.Controls.Lookup;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** Web File that is pointed to by the shortcut */
			mspp_webfileid: DevKit.Controls.Lookup;
			/** The web page that the shortcut points to */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Shortcut. */
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
	 * mspp_shortcut_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_shortcut.mspp_shortcut_Information(executionContext)
	 */
	export class mspp_shortcut_Information extends FormBase<mspp_shortcut_Information.IBody, mspp_shortcut_Information.IHeader, mspp_shortcut_Information.IGrid, mspp_shortcut_Information.INavigation, mspp_shortcut_Information.IQuickForm, mspp_shortcut_Information.IProcess, mspp_shortcut_Information.IDialog> {
		/**
		 * Creates a mspp_shortcut_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_description1', 'mspp_disabletargetvalidation', 'mspp_displayorder', 'mspp_externalurl', 'mspp_name', 'mspp_parentpage_webpageid', 'mspp_title', 'mspp_webfileid', 'mspp_webpageid', 'mspp_websiteid'],
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
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Description */
			mspp_description1: DevKit.Controls.Memo;
			/** Disable Shortcut Target Validation */
			mspp_disabletargetvalidation: DevKit.Controls.Boolean;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** External URL */
			mspp_externalurl: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Page associated with Shortcut. */
			mspp_parentpage_webpageid: DevKit.Controls.Lookup;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** Web File that is pointed to by the shortcut */
			mspp_webfileid: DevKit.Controls.Lookup;
			/** The web page that the shortcut points to */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Shortcut. */
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
	 * Usage: new mspp_shortcut.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_shortcut Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_description1', 'mspp_disabletargetvalidation', 'mspp_displayorder', 'mspp_externalurl', 'mspp_name', 'mspp_parentpage_webpageid', 'mspp_title', 'mspp_webfileid', 'mspp_webpageid', 'mspp_websiteid'],
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

/**
 * mspp_websitelanguage.form.ts - mspp_websitelanguage Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_websitelanguage containing form classes: mspp_websitelanguage.FormClassName
 * 3. Aggregate Form class: mspp_websitelanguage.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_websitelanguage {

	// ========================================================================
	// Form: mspp_websitelanguage_Information
	// ========================================================================

	export namespace mspp_websitelanguage_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Localized display name of the portal language */
			mspp_displayname: DevKit.Controls.String;
			/** Locale or language identifier that appears in the URL to indicate the portal language */
			mspp_languagecode: DevKit.Controls.String;
			/** Locale ID that is assigned to the portal language */
			mspp_lcid: DevKit.Controls.Integer;
			/** Name of the portal language */
			mspp_name: DevKit.Controls.String;
			/** Lookup to Publishing State - publishing state of this website/language instance (draft/published) */
			mspp_publishingstate: DevKit.Controls.Lookup;
			/** The system language determines which portal languages are available */
			mspp_systemlanguage: DevKit.Controls.Integer;
			/** Lookup to Website */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** This attribute is used only in Power Pages Management App, and only for UI purpose. It's value is mapped to mspp_systemlanguage. */
			mspp_websitelcid: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_6FA2C0DC_1585_4CA4_86A7_285DB3B27222TabSections {
			/** General */
			_8F9F4F14_3F39_499E_AAD1_E161FABE27C6: DevKit.Controls.Section;
		}

		/** General */
		export interface I_6FA2C0DC_1585_4CA4_86A7_285DB3B27222Tab extends DevKit.Controls.ITab {
			Section: I_6FA2C0DC_1585_4CA4_86A7_285DB3B27222TabSections;
		}

		export interface ITabs {
			/** General */
			_6FA2C0DC_1585_4CA4_86A7_285DB3B27222: I_6FA2C0DC_1585_4CA4_86A7_285DB3B27222Tab;
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
	 * mspp_websitelanguage_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_websitelanguage.mspp_websitelanguage_Information(executionContext)
	 */
	export class mspp_websitelanguage_Information extends FormBase<mspp_websitelanguage_Information.IBody, mspp_websitelanguage_Information.IHeader, mspp_websitelanguage_Information.IGrid, mspp_websitelanguage_Information.INavigation, mspp_websitelanguage_Information.IQuickForm, mspp_websitelanguage_Information.IProcess, mspp_websitelanguage_Information.IDialog> {
		/**
		 * Creates a mspp_websitelanguage_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_displayname', 'mspp_languagecode', 'mspp_lcid', 'mspp_name', 'mspp_publishingstate', 'mspp_systemlanguage', 'mspp_websiteid', 'mspp_websitelcid'],
				header: [],
				tab: ['_6FA2C0DC_1585_4CA4_86A7_285DB3B27222____8F9F4F14_3F39_499E_AAD1_E161FABE27C6'],
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
			/** Localized display name of the portal language */
			mspp_displayname: DevKit.Controls.String;
			/** Locale or language identifier that appears in the URL to indicate the portal language */
			mspp_languagecode: DevKit.Controls.String;
			/** Locale ID that is assigned to the portal language */
			mspp_lcid: DevKit.Controls.Integer;
			/** Name of the portal language */
			mspp_name: DevKit.Controls.String;
			/** Lookup to Publishing State - publishing state of this website/language instance (draft/published) */
			mspp_publishingstate: DevKit.Controls.Lookup;
			/** The system language determines which portal languages are available */
			mspp_systemlanguage: DevKit.Controls.Integer;
			/** Lookup to Website */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** This attribute is used only in Power Pages Management App, and only for UI purpose. It's value is mapped to mspp_systemlanguage. */
			mspp_websitelcid: DevKit.Controls.OptionSet;
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
	 * Usage: new mspp_websitelanguage.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_websitelanguage Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_displayname', 'mspp_languagecode', 'mspp_lcid', 'mspp_name', 'mspp_publishingstate', 'mspp_systemlanguage', 'mspp_websiteid', 'mspp_websitelcid'],
				header: [],
				tab: ['{6fa2c0dc-1585-4ca4-86a7-285db3b27222}___{8f9f4f14-3f39-499e-aad1-e161fabe27c6}'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

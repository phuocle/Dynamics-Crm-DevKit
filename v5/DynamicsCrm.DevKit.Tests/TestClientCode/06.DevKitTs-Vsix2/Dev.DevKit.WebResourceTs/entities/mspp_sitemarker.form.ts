/**
 * mspp_sitemarker.form.ts - mspp_sitemarker Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_sitemarker containing form classes: mspp_sitemarker.FormClassName
 * 3. Aggregate Form class: mspp_sitemarker.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_sitemarker {

	// ========================================================================
	// Form: mspp_sitemarker_Information
	// ========================================================================

	export namespace mspp_sitemarker_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Page associated with Site Marker. */
			mspp_pageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Site Marker. */
			mspp_websiteid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_C16501FB_8133_4680_93CC_6D336467DB8ATabSections {
			/** General */
			_08093FD5_01F7_4883_9E42_E7C2EE2F356D: DevKit.Controls.Section;
		}

		/** General */
		export interface I_C16501FB_8133_4680_93CC_6D336467DB8ATab extends DevKit.Controls.ITab {
			Section: I_C16501FB_8133_4680_93CC_6D336467DB8ATabSections;
		}

		export interface ITabs {
			/** General */
			_C16501FB_8133_4680_93CC_6D336467DB8A: I_C16501FB_8133_4680_93CC_6D336467DB8ATab;
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
	 * mspp_sitemarker_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_sitemarker.mspp_sitemarker_Information(executionContext)
	 */
	export class mspp_sitemarker_Information extends FormBase<mspp_sitemarker_Information.IBody, mspp_sitemarker_Information.IHeader, mspp_sitemarker_Information.IGrid, mspp_sitemarker_Information.INavigation, mspp_sitemarker_Information.IQuickForm, mspp_sitemarker_Information.IProcess, mspp_sitemarker_Information.IDialog> {
		/**
		 * Creates a mspp_sitemarker_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_name', 'mspp_pageid', 'mspp_websiteid'],
				header: [],
				tab: ['_C16501FB_8133_4680_93CC_6D336467DB8A____08093FD5_01F7_4883_9E42_E7C2EE2F356D'],
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
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Page associated with Site Marker. */
			mspp_pageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Site Marker. */
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
	 * Usage: new mspp_sitemarker.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_sitemarker Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_name', 'mspp_pageid', 'mspp_websiteid'],
				header: [],
				tab: ['{c16501fb-8133-4680-93cc-6d336467db8a}___{08093fd5-01f7-4883-9e42-e7c2ee2f356d}'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

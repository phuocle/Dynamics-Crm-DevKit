/**
 * msdyn_kmfederatedsearchconfig.form.ts - msdyn_kmfederatedsearchconfig Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_kmfederatedsearchconfig containing form classes: msdyn_kmfederatedsearchconfig.FormClassName
 * 3. Aggregate Form class: msdyn_kmfederatedsearchconfig.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_kmfederatedsearchconfig {

	// ========================================================================
	// Form: Search_provider_Main_form
	// ========================================================================

	export namespace Search_provider_Main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier when you create a connector in Microsoft search, please check the documentation above. */
			ConnectionId: DevKit.Controls.String;
			/** This field specifies the description of Search provider record */
			msdyn_Description: DevKit.Controls.Memo;
			/** The name of the search provider */
			msdyn_Name: DevKit.Controls.String;
			/** Organization */
			organization: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Search Type */
			SearchType: DevKit.Controls.OptionSet;
			/** Sharepoint URL */
			SharepointURL: DevKit.Controls.String;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_AB87433A_5CC0_4BCF_B306_F697B6B56F37TabSections {
			/** General */
			_2D5C8850_749F_4FCA_807A_E58949695F92: DevKit.Controls.Section;
			/** Details */
			_AB87433A_5CC0_4BCF_B306_F697B6B56F37_SECTION_3: DevKit.Controls.Section;
		}

		/** General */
		export interface I_AB87433A_5CC0_4BCF_B306_F697B6B56F37Tab extends DevKit.Controls.ITab {
			Section: I_AB87433A_5CC0_4BCF_B306_F697B6B56F37TabSections;
		}

		export interface ITabs {
			/** General */
			_AB87433A_5CC0_4BCF_B306_F697B6B56F37: I_AB87433A_5CC0_4BCF_B306_F697B6B56F37Tab;
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
	 * Search_provider_Main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_kmfederatedsearchconfig.Search_provider_Main_form(executionContext)
	 */
	export class Search_provider_Main_form extends FormBase<Search_provider_Main_form.IBody, Search_provider_Main_form.IHeader, Search_provider_Main_form.IGrid, Search_provider_Main_form.INavigation, Search_provider_Main_form.IQuickForm, Search_provider_Main_form.IProcess, Search_provider_Main_form.IDialog> {
		/**
		 * Creates a Search_provider_Main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ConnectionId', 'msdyn_Description', 'msdyn_Name', 'organization', 'OwnerId', 'SearchType', 'SharepointURL', 'WebResource_Disclaimer'],
				header: [],
				tab: ['_AB87433A_5CC0_4BCF_B306_F697B6B56F37____2D5C8850_749F_4FCA_807A_E58949695F92', '_AB87433A_5CC0_4BCF_B306_F697B6B56F37____AB87433A_5CC0_4BCF_B306_F697B6B56F37_SECTION_3'],
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
			/** Unique identifier when you create a connector in Microsoft search, please check the documentation above. */
			ConnectionId: DevKit.Controls.String;
			/** This field specifies the description of Search provider record */
			msdyn_Description: DevKit.Controls.Memo;
			/** The name of the search provider */
			msdyn_Name: DevKit.Controls.String;
			/** Organization */
			organization: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Search Type */
			SearchType: DevKit.Controls.OptionSet;
			/** Sharepoint URL */
			SharepointURL: DevKit.Controls.String;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
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
	 * Usage: new msdyn_kmfederatedsearchconfig.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_kmfederatedsearchconfig Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ConnectionId', 'msdyn_Description', 'msdyn_Name', 'organization', 'OwnerId', 'SearchType', 'SharepointURL', 'WebResource_Disclaimer'],
				header: [],
				tab: ['{ab87433a-5cc0-4bcf-b306-f697b6b56f37}___{2d5c8850-749f-4fca-807a-e58949695f92}', '{ab87433a-5cc0-4bcf-b306-f697b6b56f37}___{ab87433a-5cc0-4bcf-b306-f697b6b56f37}_section_3'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

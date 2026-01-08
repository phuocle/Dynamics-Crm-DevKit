/**
 * AppEntitySearchView.form.ts - AppEntitySearchView Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace AppEntitySearchView containing form classes: AppEntitySearchView.FormClassName
 * 3. Aggregate Form class: AppEntitySearchView.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace AppEntitySearchView {

	// ========================================================================
	// Form: Create_form_for_app_entity_search_view
	// ========================================================================

	export namespace Create_form_for_app_entity_search_view {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Identifies the application this saved query view applies for. */
			ApplicationId: DevKit.Controls.String;
			/** Entity */
			Entity: DevKit.Controls.Lookup;
			/** Name */
			Name: DevKit.Controls.String;
			/** Identifies the saved query view to use for search within an application */
			SavedQueryId: DevKit.Controls.String;
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
	 * Create_form_for_app_entity_search_view Form class
	 * Provides typed access to all form controls
	 * Usage: new AppEntitySearchView.Create_form_for_app_entity_search_view(executionContext)
	 */
	export class Create_form_for_app_entity_search_view extends FormBase<Create_form_for_app_entity_search_view.IBody, Create_form_for_app_entity_search_view.IHeader, Create_form_for_app_entity_search_view.IGrid, Create_form_for_app_entity_search_view.INavigation, Create_form_for_app_entity_search_view.IQuickForm, Create_form_for_app_entity_search_view.IProcess, Create_form_for_app_entity_search_view.IDialog> {
		/**
		 * Creates a Create_form_for_app_entity_search_view Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ApplicationId', 'Entity', 'Name', 'SavedQueryId'],
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
			/** Identifies the application this saved query view applies for. */
			ApplicationId: DevKit.Controls.String;
			/** Entity */
			Entity: DevKit.Controls.Lookup;
			/** Name */
			Name: DevKit.Controls.String;
			/** Identifies the saved query view to use for search within an application */
			SavedQueryId: DevKit.Controls.String;
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
	 * Usage: new AppEntitySearchView.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate AppEntitySearchView Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ApplicationId', 'Entity', 'Name', 'SavedQueryId'],
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

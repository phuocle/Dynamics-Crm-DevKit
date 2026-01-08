/**
 * Catalog.form.ts - Catalog Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Catalog containing form classes: Catalog.FormClassName
 * 3. Aggregate Form class: Catalog.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Catalog {

	// ========================================================================
	// Form: Catalog_Information
	// ========================================================================

	export namespace Catalog_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Localized description for catalog instances */
			Description: DevKit.Controls.String;
			/** Localized display name for catalog instances */
			DisplayName: DevKit.Controls.String;
			/** The primary name of the catalog */
			Name: DevKit.Controls.String;
			/** Unique identifier for the Parent Catalog */
			ParentCatalogId: DevKit.Controls.Lookup;
			/** Unique name for the catalog */
			UniqueName: DevKit.Controls.String;
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
	 * Catalog_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Catalog.Catalog_Information(executionContext)
	 */
	export class Catalog_Information extends FormBase<Catalog_Information.IBody, Catalog_Information.IHeader, Catalog_Information.IGrid, Catalog_Information.INavigation, Catalog_Information.IQuickForm, Catalog_Information.IProcess, Catalog_Information.IDialog> {
		/**
		 * Creates a Catalog_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'DisplayName', 'Name', 'ParentCatalogId', 'UniqueName'],
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
			/** Localized description for catalog instances */
			Description: DevKit.Controls.String;
			/** Localized display name for catalog instances */
			DisplayName: DevKit.Controls.String;
			/** The primary name of the catalog */
			Name: DevKit.Controls.String;
			/** Unique identifier for the Parent Catalog */
			ParentCatalogId: DevKit.Controls.Lookup;
			/** Unique name for the catalog */
			UniqueName: DevKit.Controls.String;
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
	 * Usage: new Catalog.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Catalog Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'DisplayName', 'Name', 'ParentCatalogId', 'UniqueName'],
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

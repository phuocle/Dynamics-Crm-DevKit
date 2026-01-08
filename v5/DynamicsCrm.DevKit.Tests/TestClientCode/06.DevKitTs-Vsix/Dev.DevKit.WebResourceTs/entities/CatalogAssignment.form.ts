/**
 * CatalogAssignment.form.ts - CatalogAssignment Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace CatalogAssignment containing form classes: CatalogAssignment.FormClassName
 * 3. Aggregate Form class: CatalogAssignment.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace CatalogAssignment {

	// ========================================================================
	// Form: CatalogAssignment_Information
	// ========================================================================

	export namespace CatalogAssignment_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier for the catalog associated with the catalog assignment */
			CatalogId: DevKit.Controls.Lookup;
			/** The primary name of the catalog assignment */
			Name: DevKit.Controls.String;
			/** Unique identifier for the object associated with the catalog assignment */
			Object: DevKit.Controls.Lookup;
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
	 * CatalogAssignment_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new CatalogAssignment.CatalogAssignment_Information(executionContext)
	 */
	export class CatalogAssignment_Information extends FormBase<CatalogAssignment_Information.IBody, CatalogAssignment_Information.IHeader, CatalogAssignment_Information.IGrid, CatalogAssignment_Information.INavigation, CatalogAssignment_Information.IQuickForm, CatalogAssignment_Information.IProcess, CatalogAssignment_Information.IDialog> {
		/**
		 * Creates a CatalogAssignment_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CatalogId', 'Name', 'Object'],
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
			/** Unique identifier for the catalog associated with the catalog assignment */
			CatalogId: DevKit.Controls.Lookup;
			/** The primary name of the catalog assignment */
			Name: DevKit.Controls.String;
			/** Unique identifier for the object associated with the catalog assignment */
			Object: DevKit.Controls.Lookup;
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
	 * Usage: new CatalogAssignment.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate CatalogAssignment Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CatalogId', 'Name', 'Object'],
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

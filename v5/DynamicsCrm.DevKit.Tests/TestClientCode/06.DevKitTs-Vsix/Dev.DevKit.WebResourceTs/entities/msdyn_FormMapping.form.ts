/**
 * msdyn_FormMapping.form.ts - msdyn_FormMapping Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_FormMapping containing form classes: msdyn_FormMapping.FormClassName
 * 3. Aggregate Form class: msdyn_FormMapping.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_FormMapping {

	// ========================================================================
	// Form: msdyn_FormMapping_Information
	// ========================================================================

	export namespace msdyn_FormMapping_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The base entity that will be created or updated. Relationships to other entities will be described with respect to this entity. */
			BaseEntity: DevKit.Controls.String;
			/** Power Card Id */
			CardId: DevKit.Controls.Lookup;
			/** Custom API Id */
			CustomApiId: DevKit.Controls.Lookup;
			/** Form Name */
			msdyn_formname: DevKit.Controls.String;
			/** Form columns to predict */
			msdyn_RequestedColumns: DevKit.Controls.String;
			/** The type of operation to be performed. */
			Operation: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
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
	 * msdyn_FormMapping_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_FormMapping.msdyn_FormMapping_Information(executionContext)
	 */
	export class msdyn_FormMapping_Information extends FormBase<msdyn_FormMapping_Information.IBody, msdyn_FormMapping_Information.IHeader, msdyn_FormMapping_Information.IGrid, msdyn_FormMapping_Information.INavigation, msdyn_FormMapping_Information.IQuickForm, msdyn_FormMapping_Information.IProcess, msdyn_FormMapping_Information.IDialog> {
		/**
		 * Creates a msdyn_FormMapping_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['BaseEntity', 'CardId', 'CustomApiId', 'msdyn_formname', 'msdyn_RequestedColumns', 'Operation', 'OwnerId'],
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
			/** The base entity that will be created or updated. Relationships to other entities will be described with respect to this entity. */
			BaseEntity: DevKit.Controls.String;
			/** Power Card Id */
			CardId: DevKit.Controls.Lookup;
			/** Custom API Id */
			CustomApiId: DevKit.Controls.Lookup;
			/** Form Name */
			msdyn_formname: DevKit.Controls.String;
			/** Form columns to predict */
			msdyn_RequestedColumns: DevKit.Controls.String;
			/** The type of operation to be performed. */
			Operation: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
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
	 * Usage: new msdyn_FormMapping.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_FormMapping Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['BaseEntity', 'CardId', 'CustomApiId', 'msdyn_formname', 'msdyn_RequestedColumns', 'Operation', 'OwnerId'],
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

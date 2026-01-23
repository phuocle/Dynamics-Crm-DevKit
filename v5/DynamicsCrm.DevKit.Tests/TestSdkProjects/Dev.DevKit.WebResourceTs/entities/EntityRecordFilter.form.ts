/**
 * EntityRecordFilter.form.ts - EntityRecordFilter Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace EntityRecordFilter containing form classes: EntityRecordFilter.FormClassName
 * 3. Aggregate Form class: EntityRecordFilter.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace EntityRecordFilter {

	// ========================================================================
	// Form: EntityRecordFilter_Information
	// ========================================================================

	export namespace EntityRecordFilter_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The display name of the record. */
			Name: DevKit.Controls.String;
			/** Related Entity */
			ObjectTypeCode: DevKit.Controls.String;
			/** Unique identifier for RecordFilter associated with EntityRecordFilter. */
			RecordFilterId: DevKit.Controls.Lookup;
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
	 * EntityRecordFilter_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new EntityRecordFilter.EntityRecordFilter_Information(executionContext)
	 */
	export class EntityRecordFilter_Information extends FormBase<EntityRecordFilter_Information.IBody, EntityRecordFilter_Information.IHeader, EntityRecordFilter_Information.IGrid, EntityRecordFilter_Information.INavigation, EntityRecordFilter_Information.IQuickForm, EntityRecordFilter_Information.IProcess, EntityRecordFilter_Information.IDialog> {
		/**
		 * Creates a EntityRecordFilter_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name', 'ObjectTypeCode', 'RecordFilterId'],
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
			/** The display name of the record. */
			Name: DevKit.Controls.String;
			/** Related Entity */
			ObjectTypeCode: DevKit.Controls.String;
			/** Unique identifier for RecordFilter associated with EntityRecordFilter. */
			RecordFilterId: DevKit.Controls.Lookup;
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
	 * Usage: new EntityRecordFilter.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate EntityRecordFilter Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name', 'ObjectTypeCode', 'RecordFilterId'],
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

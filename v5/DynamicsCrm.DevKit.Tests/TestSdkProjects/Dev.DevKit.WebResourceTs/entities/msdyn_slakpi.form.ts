/**
 * msdyn_slakpi.form.ts - msdyn_slakpi Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_slakpi containing form classes: msdyn_slakpi.FormClassName
 * 3. Aggregate Form class: msdyn_slakpi.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_slakpi {

	// ========================================================================
	// Form: msdyn_slakpi_Information
	// ========================================================================

	export namespace msdyn_slakpi_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Override entity pause configurations? */
			msdyn_AdvancedPauseConfiguration: DevKit.Controls.Boolean;
			/** Applicable From */
			msdyn_ApplicableFromField: DevKit.Controls.String;
			/** Entity */
			msdyn_EntityName: DevKit.Controls.String;
			/** KPI Field */
			msdyn_KPIField: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** PauseConfigurationXml */
			msdyn_pauseconfigurationxml: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_preview: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGeneralTabSections {
			/** Pause Conditions */
			PauseConfiguration: DevKit.Controls.Section;
		}

		/** General */
		export interface IGeneralTab extends DevKit.Controls.ITab {
			Section: IGeneralTabSections;
		}

		export interface ITabs {
			/** General */
			General: IGeneralTab;
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
	 * msdyn_slakpi_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_slakpi.msdyn_slakpi_Information(executionContext)
	 */
	export class msdyn_slakpi_Information extends FormBase<msdyn_slakpi_Information.IBody, msdyn_slakpi_Information.IHeader, msdyn_slakpi_Information.IGrid, msdyn_slakpi_Information.INavigation, msdyn_slakpi_Information.IQuickForm, msdyn_slakpi_Information.IProcess, msdyn_slakpi_Information.IDialog> {
		/**
		 * Creates a msdyn_slakpi_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AdvancedPauseConfiguration', 'msdyn_ApplicableFromField', 'msdyn_EntityName', 'msdyn_KPIField', 'msdyn_name', 'msdyn_pauseconfigurationxml', 'OwnerId', 'WebResource_preview'],
				header: [],
				tab: ['General___PauseConfiguration'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: msdyn_slakpi_New_Form
	// ========================================================================

	export namespace msdyn_slakpi_New_Form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Applicable From */
			msdyn_ApplicableFromField: DevKit.Controls.String;
			/** Entity */
			msdyn_EntityName: DevKit.Controls.String;
			/** KPI Field */
			msdyn_KPIField: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Form Tabs */
			Tab: ITabs;
		}

		export interface Itab_1TabSections {
			/** Pause Conditions */
			PauseConfiguration: DevKit.Controls.Section;
			/** section */
			tab_1_column_1_section_1: DevKit.Controls.Section;
			/** section */
			tab_1_column_2_section_1: DevKit.Controls.Section;
			/** section */
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}

		/** Tab */
		export interface Itab_1Tab extends DevKit.Controls.ITab {
			Section: Itab_1TabSections;
		}

		export interface ITabs {
			/** Tab */
			tab_1: Itab_1Tab;
		}

	}

	/**
	 * msdyn_slakpi_New_Form Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_slakpi.msdyn_slakpi_New_Form(executionContext)
	 */
	export class msdyn_slakpi_New_Form extends FormBase<msdyn_slakpi_New_Form.IBody, undefined, undefined, undefined, undefined, undefined, undefined> {
		/**
		 * Creates a msdyn_slakpi_New_Form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_ApplicableFromField', 'msdyn_EntityName', 'msdyn_KPIField', 'msdyn_name', 'OwnerId'],
				header: [],
				tab: ['tab_1___PauseConfiguration', 'tab_1___tab_1_column_1_section_1', 'tab_1___tab_1_column_2_section_1', 'tab_1___tab_1_column_3_section_1'],
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
			/** Override entity pause configurations? */
			msdyn_AdvancedPauseConfiguration: DevKit.Controls.Boolean;
			/** Applicable From */
			msdyn_ApplicableFromField: DevKit.Controls.String;
			/** Entity */
			msdyn_EntityName: DevKit.Controls.String;
			/** KPI Field */
			msdyn_KPIField: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** PauseConfigurationXml */
			msdyn_pauseconfigurationxml: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_preview: DevKit.Controls.WebResource;
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
	 * Usage: new msdyn_slakpi.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_slakpi Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AdvancedPauseConfiguration', 'msdyn_ApplicableFromField', 'msdyn_EntityName', 'msdyn_KPIField', 'msdyn_name', 'msdyn_pauseconfigurationxml', 'OwnerId', 'WebResource_preview'],
				header: [],
				tab: ['General___PauseConfiguration'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * Territory.form.ts - Territory Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Territory containing form classes: Territory.FormClassName
 * 3. Aggregate Form class: Territory.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Territory {

	// ========================================================================
	// Form: Territory_Information
	// ========================================================================

	export namespace Territory_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description of the territory. */
			Description: DevKit.Controls.Memo;
			/** Unique identifier of the manager of the territory. */
			ManagerId: DevKit.Controls.Lookup;
			/** Name of the territory. */
			Name: DevKit.Controls.String;
			/** Choose the parent for this territory. */
			ParentTerritoryId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Description */
			description: DevKit.Controls.Section;
			/** Territory Information */
			territory_information: DevKit.Controls.Section;
		}

		export interface Isubterritories_tabTabSections {
			/** Sub-territories */
			territory_tab1_section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		/** Sub-territories */
		export interface Isubterritories_tabTab extends DevKit.Controls.ITab {
			Section: Isubterritories_tabTabSections;
		}

		export interface ITabs {
			/** General */
			general: IgeneralTab;
			/** Sub-territories */
			subterritories_tab: Isubterritories_tabTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Territories (Parent) */
			territories_subgrid: DevKit.Controls.Grid;
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
	 * Territory_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Territory.Territory_Information(executionContext)
	 */
	export class Territory_Information extends FormBase<Territory_Information.IBody, Territory_Information.IHeader, Territory_Information.IGrid, Territory_Information.INavigation, Territory_Information.IQuickForm, Territory_Information.IProcess, Territory_Information.IDialog> {
		/**
		 * Creates a Territory_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'ManagerId', 'Name', 'ParentTerritoryId'],
				header: [],
				tab: ['general___description', 'general___territory_information', 'subterritories_tab___territory_tab1_section_1'],
				grid: ['territories_subgrid'],
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
			/** Description of the territory. */
			Description: DevKit.Controls.Memo;
			/** Unique identifier of the manager of the territory. */
			ManagerId: DevKit.Controls.Lookup;
			/** Name of the territory. */
			Name: DevKit.Controls.String;
			/** Choose the parent for this territory. */
			ParentTerritoryId: DevKit.Controls.Lookup;
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
			/** Territories (Parent) */
			territories_subgrid: DevKit.Controls.Grid;
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
	 * Usage: new Territory.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Territory Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'ManagerId', 'Name', 'ParentTerritoryId'],
				header: [],
				tab: ['general___description', 'general___territory information', 'subterritories_tab___territory_tab1_section_1'],
				grid: ['territories_subgrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

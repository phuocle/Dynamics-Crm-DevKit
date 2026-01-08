/**
 * Solution.form.ts - Solution Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Solution containing form classes: Solution.FormClassName
 * 3. Aggregate Form class: Solution.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Solution {

	// ========================================================================
	// Form: Solution_Information
	// ========================================================================

	export namespace Solution_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** A link to an optional configuration page for this solution. */
			ConfigurationPageId: DevKit.Controls.Lookup;
			/** Description of the solution. */
			Description: DevKit.Controls.String;
			/** User display name for the solution. */
			FriendlyName: DevKit.Controls.String;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** Date and time when the solution was installed/upgraded. */
			InstalledOn: DevKit.Controls.DateOnly;
			/** Indicates whether the solution is managed or unmanaged. */
			IsManaged: DevKit.Controls.Boolean;
			/** Unique identifier of the publisher. */
			PublisherId: DevKit.Controls.Lookup;
			/** The unique name of this solution */
			UniqueName: DevKit.Controls.String;
			/** Solution version, used to identify a solution for upgrades and hotfixes. */
			Version: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_9129B06A_8446_77D8_2BD2_027C5006BE41TabSections {
			/** Marketplace */
			solutionmarketplacesection: DevKit.Controls.Section;
		}

		export interface IgeneralTabSections {
			/** Description */
			description: DevKit.Controls.Section;
			/** General */
			solution_information: DevKit.Controls.Section;
		}

		/** Marketplace */
		export interface I_9129B06A_8446_77D8_2BD2_027C5006BE41Tab extends DevKit.Controls.ITab {
			Section: I_9129B06A_8446_77D8_2BD2_027C5006BE41TabSections;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			/** Marketplace */
			_9129B06A_8446_77D8_2BD2_027C5006BE41: I_9129B06A_8446_77D8_2BD2_027C5006BE41Tab;
			/** General */
			general: IgeneralTab;
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
	 * Solution_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Solution.Solution_Information(executionContext)
	 */
	export class Solution_Information extends FormBase<Solution_Information.IBody, Solution_Information.IHeader, Solution_Information.IGrid, Solution_Information.INavigation, Solution_Information.IQuickForm, Solution_Information.IProcess, Solution_Information.IDialog> {
		/**
		 * Creates a Solution_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ConfigurationPageId', 'Description', 'FriendlyName', 'IFRAME_SolutionsMarketplace', 'InstalledOn', 'IsManaged', 'PublisherId', 'UniqueName', 'Version'],
				header: [],
				tab: ['_9129B06A_8446_77D8_2BD2_027C5006BE41___solutionmarketplacesection', 'general___description', 'general___solution_information'],
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
			/** A link to an optional configuration page for this solution. */
			ConfigurationPageId: DevKit.Controls.Lookup;
			/** Description of the solution. */
			Description: DevKit.Controls.String;
			/** User display name for the solution. */
			FriendlyName: DevKit.Controls.String;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** Date and time when the solution was installed/upgraded. */
			InstalledOn: DevKit.Controls.DateOnly;
			/** Indicates whether the solution is managed or unmanaged. */
			IsManaged: DevKit.Controls.Boolean;
			/** Unique identifier of the publisher. */
			PublisherId: DevKit.Controls.Lookup;
			/** The unique name of this solution */
			UniqueName: DevKit.Controls.String;
			/** Solution version, used to identify a solution for upgrades and hotfixes. */
			Version: DevKit.Controls.String;
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
	 * Usage: new Solution.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Solution Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ConfigurationPageId', 'Description', 'FriendlyName', 'IFRAME_SolutionsMarketplace', 'InstalledOn', 'IsManaged', 'PublisherId', 'UniqueName', 'Version'],
				header: [],
				tab: ['{9129b06a-8446-77d8-2bd2-027c5006be41}___solutionmarketplacesection', 'general___description', 'general___solution information'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

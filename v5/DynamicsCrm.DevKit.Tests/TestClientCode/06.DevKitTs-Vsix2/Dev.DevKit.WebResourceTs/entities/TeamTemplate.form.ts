/**
 * TeamTemplate.form.ts - TeamTemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace TeamTemplate containing form classes: TeamTemplate.FormClassName
 * 3. Aggregate Form class: TeamTemplate.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace TeamTemplate {

	// ========================================================================
	// Form: Team_Templates_main_form
	// ========================================================================

	export namespace Team_Templates_main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Default access rights mask for the access teams associated with entity instances. */
			DefaultAccessRightsMask: DevKit.Controls.Integer;
			/** Type additional information that describes the team. */
			Description: DevKit.Controls.Memo;
			/** Object type code of entity which is enabled for access teams */
			ObjectTypeCode: DevKit.Controls.Integer;
			/** Type the name of the team template. */
			TeamTemplateName: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** General */
			Access_Rights: DevKit.Controls.Section;
			/** Description */
			Description: DevKit.Controls.Section;
			/** General */
			General: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
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
	 * Team_Templates_main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new TeamTemplate.Team_Templates_main_form(executionContext)
	 */
	export class Team_Templates_main_form extends FormBase<Team_Templates_main_form.IBody, Team_Templates_main_form.IHeader, Team_Templates_main_form.IGrid, Team_Templates_main_form.INavigation, Team_Templates_main_form.IQuickForm, Team_Templates_main_form.IProcess, Team_Templates_main_form.IDialog> {
		/**
		 * Creates a Team_Templates_main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DefaultAccessRightsMask', 'Description', 'ObjectTypeCode', 'TeamTemplateName'],
				header: [],
				tab: ['general___Access_Rights', 'general___Description', 'general___General'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: TeamTemplate
	// ========================================================================

	export namespace TeamTemplate {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Default access rights mask for the access teams associated with entity instances. */
			DefaultAccessRightsMask: DevKit.Controls.Integer;
			/** Type additional information that describes the team. */
			Description: DevKit.Controls.Memo;
			/** Object type code of entity which is enabled for access teams */
			ObjectTypeCode: DevKit.Controls.Integer;
			/** Type the name of the team template. */
			TeamTemplateName: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** General */
			Access_Rights: DevKit.Controls.Section;
			/** Description */
			Description: DevKit.Controls.Section;
			/** General */
			General: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
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
	 * TeamTemplate Form class
	 * Provides typed access to all form controls
	 * Usage: new TeamTemplate.TeamTemplate(executionContext)
	 */
	export class TeamTemplate extends FormBase<TeamTemplate.IBody, TeamTemplate.IHeader, TeamTemplate.IGrid, TeamTemplate.INavigation, TeamTemplate.IQuickForm, TeamTemplate.IProcess, TeamTemplate.IDialog> {
		/**
		 * Creates a TeamTemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DefaultAccessRightsMask', 'Description', 'ObjectTypeCode', 'TeamTemplateName'],
				header: [],
				tab: ['general___Access_Rights', 'general___Description', 'general___General'],
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
			/** Default access rights mask for the access teams associated with entity instances. */
			DefaultAccessRightsMask: DevKit.Controls.Integer;
			/** Type additional information that describes the team. */
			Description: DevKit.Controls.Memo;
			/** Object type code of entity which is enabled for access teams */
			ObjectTypeCode: DevKit.Controls.Integer;
			/** Type the name of the team template. */
			TeamTemplateName: DevKit.Controls.String;
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
	 * Usage: new TeamTemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate TeamTemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DefaultAccessRightsMask', 'Description', 'ObjectTypeCode', 'TeamTemplateName'],
				header: [],
				tab: ['general___Access Rights', 'general___Description', 'general___General'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

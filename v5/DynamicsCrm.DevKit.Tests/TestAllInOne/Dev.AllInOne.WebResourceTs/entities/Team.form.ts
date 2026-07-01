/**
 * Team.form.ts - Team Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Team containing form classes: Team.FormClassName
 * 3. Aggregate Form class: Team.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Team {

	// ========================================================================
	// Form: Team
	// ========================================================================

	export namespace Team {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** The object Id for a group. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.Memo;
			/** Membership Type */
			MembershipType: DevKit.Controls.OptionSet;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the default queue for the team. */
			QueueId: DevKit.Controls.Lookup;
		}

		export interface IgeneralTabSections {
			/** DESCRIPTION */
			Description: DevKit.Controls.Section;
			/** GENERAL */
			General: DevKit.Controls.Section;
			/** TEAM MEMBERS */
			TeamMembers: DevKit.Controls.Section;
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
			/** MEMBERS */
			Members: DevKit.Controls.Grid;
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
	 * Team Form class
	 * Provides typed access to all form controls
	 * Usage: new Team.Team(executionContext)
	 */
	export class Team extends FormBase<Team.IBody, Team.IHeader, Team.IGrid, Team.INavigation, Team.IQuickForm, Team.IProcess, Team.IDialog> {
		/**
		 * Creates a Team Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AdministratorId', 'AzureActiveDirectoryObjectId', 'BusinessUnitId', 'Description', 'MembershipType', 'Name', 'TeamType'],
				header: ['QueueId'],
				tab: ['general___Description', 'general___General', 'general___TeamMembers'],
				grid: ['Members'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Team_form_Business
	// ========================================================================

	export namespace Team_form_Business {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.Memo;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** DESCRIPTION */
			Description: DevKit.Controls.Section;
			/** GENERAL */
			General: DevKit.Controls.Section;
			/** TEAM MEMBERS */
			TeamMembers: DevKit.Controls.Section;
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
			/** MEMBERS */
			Members: DevKit.Controls.Grid;
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
			/** Background Processes */
			navAsyncOperations: DevKit.Controls.NavigationItem;
			/** Audit History */
			navAudit: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
			/** Field Security Profiles */
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem;
			/** Members */
			navMembers: DevKit.Controls.NavigationItem;
			/** Process Sessions */
			navProcessSessions: DevKit.Controls.NavigationItem;
			/** Security Roles */
			navRoles: DevKit.Controls.NavigationItem;
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
	 * Team_form_Business Form class
	 * Provides typed access to all form controls
	 * Usage: new Team.Team_form_Business(executionContext)
	 */
	export class Team_form_Business extends FormBase<Team_form_Business.IBody, Team_form_Business.IHeader, Team_form_Business.IGrid, Team_form_Business.INavigation, Team_form_Business.IQuickForm, Team_form_Business.IProcess, Team_form_Business.IDialog> {
		/**
		 * Creates a Team_form_Business Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AdministratorId', 'BusinessUnitId', 'Description', 'Name', 'TeamType'],
				header: [],
				tab: ['general___Description', 'general___General', 'general___TeamMembers'],
				grid: ['Members'],
				navigation: ['navAsyncOperations', 'navAudit', 'navConnections', 'navFieldSecurityProfiles', 'navMembers', 'navProcessSessions', 'navRoles'],
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
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** The object Id for a group. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.Memo;
			/** Membership Type */
			MembershipType: DevKit.Controls.OptionSet;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the default queue for the team. */
			QueueId: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** MEMBERS */
			Members: DevKit.Controls.Grid;
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
			/** Background Processes */
			navAsyncOperations: DevKit.Controls.NavigationItem;
			/** Audit History */
			navAudit: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
			/** Field Security Profiles */
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem;
			/** Members */
			navMembers: DevKit.Controls.NavigationItem;
			/** Process Sessions */
			navProcessSessions: DevKit.Controls.NavigationItem;
			/** Security Roles */
			navRoles: DevKit.Controls.NavigationItem;
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
	 * Usage: new Team.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Team Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AdministratorId', 'AzureActiveDirectoryObjectId', 'BusinessUnitId', 'Description', 'MembershipType', 'Name', 'TeamType'],
				header: ['QueueId'],
				tab: ['general___Description', 'general___General', 'general___TeamMembers'],
				grid: ['Members'],
				navigation: ['navAsyncOperations', 'navAudit', 'navConnections', 'navFieldSecurityProfiles', 'navMembers', 'navProcessSessions', 'navRoles'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

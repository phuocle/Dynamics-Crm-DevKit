/**
 * Team.form.ts - Team Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Types - IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess
 * 3. Runtime - Form class with field configurations
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

// ============================================================================
// 1. Types
// ============================================================================

export namespace FormTeam {

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
	export interface IHeader {
		/** Unique identifier of the default queue for the team. */
		QueueId: DevKit.Controls.Lookup;
	}

	export interface IgeneralTabSections {
		Description: DevKit.Controls.Section;
		General: DevKit.Controls.Section;
		TeamMembers: DevKit.Controls.Section;
	}

	export interface IgeneralTab extends DevKit.Controls.ITab {
		Section: IgeneralTabSections;
	}

	export interface ITabs {
		general: IgeneralTab;
	}

	/**
	 * Grid controls interface
	 * Contains all subgrid controls on the form
	 */
	export interface IGrid {
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

	// ============================================================================
	// 2. Runtime - Form Class
	// ============================================================================

	/**
	 * Team Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Team Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'AdministratorId',
					'AzureActiveDirectoryObjectId',
					'BusinessUnitId',
					'Description',
					'MembershipType',
					'Name',
					'TeamType'
				],
				header: [
					'QueueId'
				],
				tab: [
					'general___Description',
					'general___General',
					'general___TeamMembers'
				],
				grid: [
					'Members'
				],
				navigation: [
					
				],
				quick: [
					
				],
				bpf: [
					
				],
				dialog: [
					
				]
			});
		}
	}
}

export namespace FormTeam_form_Business {

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
	export interface IHeader {
	}

	export interface IgeneralTabSections {
		Description: DevKit.Controls.Section;
		General: DevKit.Controls.Section;
		TeamMembers: DevKit.Controls.Section;
	}

	export interface IgeneralTab extends DevKit.Controls.ITab {
		Section: IgeneralTabSections;
	}

	export interface ITabs {
		general: IgeneralTab;
	}

	/**
	 * Grid controls interface
	 * Contains all subgrid controls on the form
	 */
	export interface IGrid {
		Members: DevKit.Controls.Grid;
	}

	/**
	 * Navigation interface
	 * Contains navigation items
	 */
	export interface INavigation {
		navAsyncOperations: DevKit.Controls.NavigationItem;
		navAudit: DevKit.Controls.NavigationItem;
		navConnections: DevKit.Controls.NavigationItem;
		navFieldSecurityProfiles: DevKit.Controls.NavigationItem;
		navMembers: DevKit.Controls.NavigationItem;
		navProcessSessions: DevKit.Controls.NavigationItem;
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

	// ============================================================================
	// 2. Runtime - Form Class
	// ============================================================================

	/**
	 * Team Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Team Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'AdministratorId',
					'BusinessUnitId',
					'Description',
					'Name',
					'TeamType'
				],
				header: [
					
				],
				tab: [
					'general___Description',
					'general___General',
					'general___TeamMembers'
				],
				grid: [
					'Members'
				],
				navigation: [
					'navAsyncOperations',
					'navAudit',
					'navConnections',
					'navFieldSecurityProfiles',
					'navMembers',
					'navProcessSessions',
					'navRoles'
				],
				quick: [
					
				],
				bpf: [
					
				],
				dialog: [
					
				]
			});
		}
	}
}


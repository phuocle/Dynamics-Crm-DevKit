/**
 * ConnectionRole.form.ts - ConnectionRole Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ConnectionRole containing form classes: ConnectionRole.FormClassName
 * 3. Aggregate Form class: ConnectionRole.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ConnectionRole {

	// ========================================================================
	// Form: ConnectionRole_Information
	// ========================================================================

	export namespace ConnectionRole_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Categories for connection roles. */
			Category: DevKit.Controls.OptionSet;
			/** Description of the connection role. */
			Description: DevKit.Controls.String;
			/** Name of the connection role. */
			Name: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Section1 */
			_B0A70B0D_568C_10D3_1A3D_01C997A061C1: DevKit.Controls.Section;
			/** Step 1: Describe the connection role */
			step1: DevKit.Controls.Section;
			/** Step 2: Select record types */
			step2: DevKit.Controls.Section;
		}

		export interface IreciprocalrolesTabSections {
			/** Step 3: List matching connection roles (optional) */
			roleGrid: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		/** Matching Connection Roles */
		export interface IreciprocalrolesTab extends DevKit.Controls.ITab {
			Section: IreciprocalrolesTabSections;
		}

		export interface ITabs {
			/** General */
			general: IgeneralTab;
			/** Matching Connection Roles */
			reciprocalroles: IreciprocalrolesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Connection Roles */
			reciprocalRoleGrid: DevKit.Controls.Grid;
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
	 * ConnectionRole_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new ConnectionRole.ConnectionRole_Information(executionContext)
	 */
	export class ConnectionRole_Information extends FormBase<ConnectionRole_Information.IBody, ConnectionRole_Information.IHeader, ConnectionRole_Information.IGrid, ConnectionRole_Information.INavigation, ConnectionRole_Information.IQuickForm, ConnectionRole_Information.IProcess, ConnectionRole_Information.IDialog> {
		/**
		 * Creates a ConnectionRole_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Category', 'Description', 'Name'],
				header: [],
				tab: ['general____B0A70B0D_568C_10D3_1A3D_01C997A061C1', 'general___step1', 'general___step2', 'reciprocalroles___roleGrid'],
				grid: ['reciprocalRoleGrid'],
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
			/** Categories for connection roles. */
			Category: DevKit.Controls.OptionSet;
			/** Description of the connection role. */
			Description: DevKit.Controls.String;
			/** Name of the connection role. */
			Name: DevKit.Controls.String;
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
			/** Connection Roles */
			reciprocalRoleGrid: DevKit.Controls.Grid;
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
	 * Usage: new ConnectionRole.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ConnectionRole Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Category', 'Description', 'Name'],
				header: [],
				tab: ['general___{b0a70b0d-568c-10d3-1a3d-01c997a061c1}', 'general___step1', 'general___step2', 'reciprocalroles___roleGrid'],
				grid: ['reciprocalRoleGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * RoleEditorLayout.form.ts - RoleEditorLayout Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace RoleEditorLayout containing form classes: RoleEditorLayout.FormClassName
 * 3. Aggregate Form class: RoleEditorLayout.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace RoleEditorLayout {

	// ========================================================================
	// Form: RoleEditorLayout_Information
	// ========================================================================

	export namespace RoleEditorLayout_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** For ItemType Entity: the logicalname of the entity. */
			EntityLogicalName: DevKit.Controls.String;
			/** The type of role editor layout item. */
			ItemType: DevKit.Controls.OptionSet;
			/** The name of the role editor layout item. */
			Name: DevKit.Controls.String;
			/** For ItemType Privilege: Name of the privilege */
			PrivilegeName: DevKit.Controls.String;
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
	 * RoleEditorLayout_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new RoleEditorLayout.RoleEditorLayout_Information(executionContext)
	 */
	export class RoleEditorLayout_Information extends FormBase<RoleEditorLayout_Information.IBody, RoleEditorLayout_Information.IHeader, RoleEditorLayout_Information.IGrid, RoleEditorLayout_Information.INavigation, RoleEditorLayout_Information.IQuickForm, RoleEditorLayout_Information.IProcess, RoleEditorLayout_Information.IDialog> {
		/**
		 * Creates a RoleEditorLayout_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['EntityLogicalName', 'ItemType', 'Name', 'PrivilegeName'],
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
			/** For ItemType Entity: the logicalname of the entity. */
			EntityLogicalName: DevKit.Controls.String;
			/** The type of role editor layout item. */
			ItemType: DevKit.Controls.OptionSet;
			/** The name of the role editor layout item. */
			Name: DevKit.Controls.String;
			/** For ItemType Privilege: Name of the privilege */
			PrivilegeName: DevKit.Controls.String;
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
	 * Usage: new RoleEditorLayout.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate RoleEditorLayout Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['EntityLogicalName', 'ItemType', 'Name', 'PrivilegeName'],
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

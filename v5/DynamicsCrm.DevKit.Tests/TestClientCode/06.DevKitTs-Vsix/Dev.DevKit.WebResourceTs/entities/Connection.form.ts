/**
 * Connection.form.ts - Connection Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Connection containing form classes: Connection.FormClassName
 * 3. Aggregate Form class: Connection.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Connection {

	// ========================================================================
	// Form: Connection_Information
	// ========================================================================

	export namespace Connection_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type additional information to describe the connection, such as the length or quality of the relationship. */
			Description: DevKit.Controls.Memo;
			/** Enter the end date of the connection. */
			EffectiveEnd: DevKit.Controls.DateOnly;
			/** Enter the start date of the connection. */
			EffectiveStart: DevKit.Controls.DateOnly;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the primary account, contact, or other record involved in the connection. */
			Record1Id: DevKit.Controls.Lookup;
			/** Choose the primary party's role or relationship with the second party. */
			Record1RoleId: DevKit.Controls.Lookup;
			/** Select the secondary account, contact, or other record involved in the connection. */
			Record2Id: DevKit.Controls.Lookup;
			/** Choose the secondary party's role or relationship with the primary party. */
			Record2RoleId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Choose the primary account, contact, or other record involved in the connection. */
			Record1Id: DevKit.Controls.Lookup;
		}

		export interface IdetailsTabSections {
			/** Connected From */
			connect_from: DevKit.Controls.Section;
			/** Details */
			details: DevKit.Controls.Section;
		}

		export interface IinfoTabSections {
			/** Description */
			description: DevKit.Controls.Section;
			/** Connect To */
			info_s: DevKit.Controls.Section;
		}

		/** Details */
		export interface IdetailsTab extends DevKit.Controls.ITab {
			Section: IdetailsTabSections;
		}

		/** Connect To */
		export interface IinfoTab extends DevKit.Controls.ITab {
			Section: IinfoTabSections;
		}

		export interface ITabs {
			/** Details */
			details: IdetailsTab;
			/** Connect To */
			info: IinfoTab;
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
	 * Connection_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Connection.Connection_Information(executionContext)
	 */
	export class Connection_Information extends FormBase<Connection_Information.IBody, Connection_Information.IHeader, Connection_Information.IGrid, Connection_Information.INavigation, Connection_Information.IQuickForm, Connection_Information.IProcess, Connection_Information.IDialog> {
		/**
		 * Creates a Connection_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'EffectiveEnd', 'EffectiveStart', 'OwnerId', 'Record1Id', 'Record1RoleId', 'Record2Id', 'Record2RoleId'],
				header: ['Record1Id'],
				tab: ['details___connect_from', 'details___details', 'info___description', 'info___info_s'],
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
			/** Type additional information to describe the connection, such as the length or quality of the relationship. */
			Description: DevKit.Controls.Memo;
			/** Enter the end date of the connection. */
			EffectiveEnd: DevKit.Controls.DateOnly;
			/** Enter the start date of the connection. */
			EffectiveStart: DevKit.Controls.DateOnly;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the primary account, contact, or other record involved in the connection. */
			Record1Id: DevKit.Controls.Lookup;
			/** Choose the primary party's role or relationship with the second party. */
			Record1RoleId: DevKit.Controls.Lookup;
			/** Select the secondary account, contact, or other record involved in the connection. */
			Record2Id: DevKit.Controls.Lookup;
			/** Choose the secondary party's role or relationship with the primary party. */
			Record2RoleId: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Choose the primary account, contact, or other record involved in the connection. */
			Record1Id: DevKit.Controls.Lookup;
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
	 * Usage: new Connection.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Connection Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'EffectiveEnd', 'EffectiveStart', 'OwnerId', 'Record1Id', 'Record1RoleId', 'Record2Id', 'Record2RoleId'],
				header: ['Record1Id'],
				tab: ['details___connect_from', 'details___details', 'info___description', 'info___info_s'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

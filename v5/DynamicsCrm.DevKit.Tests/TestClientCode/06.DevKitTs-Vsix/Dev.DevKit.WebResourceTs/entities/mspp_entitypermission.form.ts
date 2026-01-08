/**
 * mspp_entitypermission.form.ts - mspp_entitypermission Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_entitypermission containing form classes: mspp_entitypermission.FormClassName
 * 3. Aggregate Form class: mspp_entitypermission.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_entitypermission {

	// ========================================================================
	// Form: mspp_entitypermission_Information
	// ========================================================================

	export namespace mspp_entitypermission_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Account Relationship */
			mspp_accountrelationship: DevKit.Controls.String;
			/** Controls whether the user can attach another record to the specified record. The Append and Append To permissions work in combination. */
			mspp_append: DevKit.Controls.Boolean;
			/** Controls whether the user can append the specified record to another record. The Append and Append To permissions work in combination. */
			mspp_appendto: DevKit.Controls.Boolean;
			/** Contact Relationship */
			mspp_contactrelationship: DevKit.Controls.String;
			/** The Create privilege controls whether you can create a record. */
			mspp_create: DevKit.Controls.Boolean;
			/** Controls whether the user can delete a record. */
			mspp_delete: DevKit.Controls.Boolean;
			/** Table Name */
			mspp_entitylogicalname: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_entityname: DevKit.Controls.String;
			/** Parent Table Permission */
			mspp_parententitypermission: DevKit.Controls.Lookup;
			/** Parent Relationship */
			mspp_parentrelationship: DevKit.Controls.String;
			/** Controls whether the user can read a record. */
			mspp_read: DevKit.Controls.Boolean;
			/** Access Type */
			mspp_scope: DevKit.Controls.OptionSet;
			/** Unique identifier for Website associated with Entity Permission */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Controls whether the user can update a record. */
			mspp_write: DevKit.Controls.Boolean;
			WebResource_mspp_accountrelationshipname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_contactrelationship_selector: DevKit.Controls.WebResource;
			WebResource_mspp_entitylogicalname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_parentrelationship_selector: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Imspp_entitypermission_generalTabSections {
			/** Account Access Type */
			mspp_entitypermission_account: DevKit.Controls.Section;
			/** Child Table Permissions */
			mspp_entitypermission_children: DevKit.Controls.Section;
			/** Contact Access Type */
			mspp_entitypermission_contact: DevKit.Controls.Section;
			/** General */
			mspp_entitypermission_general: DevKit.Controls.Section;
			/** Parent Access Type */
			mspp_entitypermission_parent: DevKit.Controls.Section;
			/** Privileges */
			mspp_entitypermission_privileges: DevKit.Controls.Section;
			/** Web Roles */
			mspp_entitypermission_webroles: DevKit.Controls.Section;
		}

		/** General */
		export interface Imspp_entitypermission_generalTab extends DevKit.Controls.ITab {
			Section: Imspp_entitypermission_generalTabSections;
		}

		export interface ITabs {
			/** General */
			mspp_entitypermission_general: Imspp_entitypermission_generalTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Table Permissions (Parent Table Permission) */
			subgrid_childentitypermissions: DevKit.Controls.Grid;
			/** Web Roles */
			subgrid_webroles: DevKit.Controls.Grid;
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
	 * mspp_entitypermission_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_entitypermission.mspp_entitypermission_Information(executionContext)
	 */
	export class mspp_entitypermission_Information extends FormBase<mspp_entitypermission_Information.IBody, mspp_entitypermission_Information.IHeader, mspp_entitypermission_Information.IGrid, mspp_entitypermission_Information.INavigation, mspp_entitypermission_Information.IQuickForm, mspp_entitypermission_Information.IProcess, mspp_entitypermission_Information.IDialog> {
		/**
		 * Creates a mspp_entitypermission_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_accountrelationship', 'mspp_append', 'mspp_appendto', 'mspp_contactrelationship', 'mspp_create', 'mspp_delete', 'mspp_entitylogicalname', 'mspp_entityname', 'mspp_parententitypermission', 'mspp_parentrelationship', 'mspp_read', 'mspp_scope', 'mspp_websiteid', 'mspp_write', 'WebResource_mspp_accountrelationshipname_selector', 'WebResource_mspp_contactrelationship_selector', 'WebResource_mspp_entitylogicalname_selector', 'WebResource_mspp_parentrelationship_selector'],
				header: [],
				tab: ['mspp_entitypermission_general___mspp_entitypermission_account', 'mspp_entitypermission_general___mspp_entitypermission_children', 'mspp_entitypermission_general___mspp_entitypermission_contact', 'mspp_entitypermission_general___mspp_entitypermission_general', 'mspp_entitypermission_general___mspp_entitypermission_parent', 'mspp_entitypermission_general___mspp_entitypermission_privileges', 'mspp_entitypermission_general___mspp_entitypermission_webroles'],
				grid: ['subgrid_childentitypermissions', 'subgrid_webroles'],
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
			/** Account Relationship */
			mspp_accountrelationship: DevKit.Controls.String;
			/** Controls whether the user can attach another record to the specified record. The Append and Append To permissions work in combination. */
			mspp_append: DevKit.Controls.Boolean;
			/** Controls whether the user can append the specified record to another record. The Append and Append To permissions work in combination. */
			mspp_appendto: DevKit.Controls.Boolean;
			/** Contact Relationship */
			mspp_contactrelationship: DevKit.Controls.String;
			/** The Create privilege controls whether you can create a record. */
			mspp_create: DevKit.Controls.Boolean;
			/** Controls whether the user can delete a record. */
			mspp_delete: DevKit.Controls.Boolean;
			/** Table Name */
			mspp_entitylogicalname: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_entityname: DevKit.Controls.String;
			/** Parent Table Permission */
			mspp_parententitypermission: DevKit.Controls.Lookup;
			/** Parent Relationship */
			mspp_parentrelationship: DevKit.Controls.String;
			/** Controls whether the user can read a record. */
			mspp_read: DevKit.Controls.Boolean;
			/** Access Type */
			mspp_scope: DevKit.Controls.OptionSet;
			/** Unique identifier for Website associated with Entity Permission */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Controls whether the user can update a record. */
			mspp_write: DevKit.Controls.Boolean;
			WebResource_mspp_accountrelationshipname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_contactrelationship_selector: DevKit.Controls.WebResource;
			WebResource_mspp_entitylogicalname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_parentrelationship_selector: DevKit.Controls.WebResource;
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
			/** Table Permissions (Parent Table Permission) */
			subgrid_childentitypermissions: DevKit.Controls.Grid;
			/** Web Roles */
			subgrid_webroles: DevKit.Controls.Grid;
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
	 * Usage: new mspp_entitypermission.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_entitypermission Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_accountrelationship', 'mspp_append', 'mspp_appendto', 'mspp_contactrelationship', 'mspp_create', 'mspp_delete', 'mspp_entitylogicalname', 'mspp_entityname', 'mspp_parententitypermission', 'mspp_parentrelationship', 'mspp_read', 'mspp_scope', 'mspp_websiteid', 'mspp_write', 'WebResource_mspp_accountrelationshipname_selector', 'WebResource_mspp_contactrelationship_selector', 'WebResource_mspp_entitylogicalname_selector', 'WebResource_mspp_parentrelationship_selector'],
				header: [],
				tab: ['mspp_entitypermission_general___mspp_entitypermission_account', 'mspp_entitypermission_general___mspp_entitypermission_children', 'mspp_entitypermission_general___mspp_entitypermission_contact', 'mspp_entitypermission_general___mspp_entitypermission_general', 'mspp_entitypermission_general___mspp_entitypermission_parent', 'mspp_entitypermission_general___mspp_entitypermission_privileges', 'mspp_entitypermission_general___mspp_entitypermission_webroles'],
				grid: ['subgrid_childentitypermissions', 'subgrid_webroles'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

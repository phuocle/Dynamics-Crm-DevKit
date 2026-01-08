/**
 * mspp_columnpermissionprofile.form.ts - mspp_columnpermissionprofile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_columnpermissionprofile containing form classes: mspp_columnpermissionprofile.FormClassName
 * 3. Aggregate Form class: mspp_columnpermissionprofile.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_columnpermissionprofile {

	// ========================================================================
	// Form: mspp_columnpermissionprofile_Information
	// ========================================================================

	export namespace mspp_columnpermissionprofile_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** All Column Permissions */
			mspp_allcolumnpermissions: DevKit.Controls.MultiOptionSet;
			/** Profile Name */
			mspp_profilename: DevKit.Controls.String;
			/** Table Name */
			mspp_tablename: DevKit.Controls.String;
			/** Website */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_mspp_tablenameselector: DevKit.Controls.WebResource;
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
			/** Column Permissions */
			subgrid_columnpermissions: DevKit.Controls.Grid;
			/** Webroles */
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
	 * mspp_columnpermissionprofile_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_columnpermissionprofile.mspp_columnpermissionprofile_Information(executionContext)
	 */
	export class mspp_columnpermissionprofile_Information extends FormBase<mspp_columnpermissionprofile_Information.IBody, mspp_columnpermissionprofile_Information.IHeader, mspp_columnpermissionprofile_Information.IGrid, mspp_columnpermissionprofile_Information.INavigation, mspp_columnpermissionprofile_Information.IQuickForm, mspp_columnpermissionprofile_Information.IProcess, mspp_columnpermissionprofile_Information.IDialog> {
		/**
		 * Creates a mspp_columnpermissionprofile_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_allcolumnpermissions', 'mspp_profilename', 'mspp_tablename', 'mspp_websiteid', 'WebResource_mspp_tablenameselector'],
				header: [],
				tab: [],
				grid: ['subgrid_columnpermissions', 'subgrid_webroles'],
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
			/** All Column Permissions */
			mspp_allcolumnpermissions: DevKit.Controls.MultiOptionSet;
			/** Profile Name */
			mspp_profilename: DevKit.Controls.String;
			/** Table Name */
			mspp_tablename: DevKit.Controls.String;
			/** Website */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_mspp_tablenameselector: DevKit.Controls.WebResource;
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
			/** Column Permissions */
			subgrid_columnpermissions: DevKit.Controls.Grid;
			/** Webroles */
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
	 * Usage: new mspp_columnpermissionprofile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_columnpermissionprofile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_allcolumnpermissions', 'mspp_profilename', 'mspp_tablename', 'mspp_websiteid', 'WebResource_mspp_tablenameselector'],
				header: [],
				tab: [],
				grid: ['subgrid_columnpermissions', 'subgrid_webroles'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

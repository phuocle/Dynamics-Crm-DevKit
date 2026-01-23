/**
 * powerpagecomponent.form.ts - powerpagecomponent Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace powerpagecomponent containing form classes: powerpagecomponent.FormClassName
 * 3. Aggregate Form class: powerpagecomponent.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace powerpagecomponent {

	// ========================================================================
	// Form: powerpagecomponent_Information
	// ========================================================================

	export namespace powerpagecomponent_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Content */
			content: DevKit.Controls.Memo;
			/** File Content column contains portal web files e.g. png, css etc. */
			filecontent: DevKit.Controls.File;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Component Type */
			powerpagecomponenttype: DevKit.Controls.OptionSet;
			/** Power Pages Site id */
			powerpagesiteid: DevKit.Controls.Lookup;
			/** Power Pages Site Language Id */
			powerpagesitelanguageid: DevKit.Controls.Lookup;
			/** Status of the Power Pages Component */
			statecode: DevKit.Controls.OptionSet;
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
	 * powerpagecomponent_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new powerpagecomponent.powerpagecomponent_Information(executionContext)
	 */
	export class powerpagecomponent_Information extends FormBase<powerpagecomponent_Information.IBody, powerpagecomponent_Information.IHeader, powerpagecomponent_Information.IGrid, powerpagecomponent_Information.INavigation, powerpagecomponent_Information.IQuickForm, powerpagecomponent_Information.IProcess, powerpagecomponent_Information.IDialog> {
		/**
		 * Creates a powerpagecomponent_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['content', 'filecontent', 'name', 'OwnerId', 'powerpagecomponenttype', 'powerpagesiteid', 'powerpagesitelanguageid', 'statecode'],
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
			/** Content */
			content: DevKit.Controls.Memo;
			/** File Content column contains portal web files e.g. png, css etc. */
			filecontent: DevKit.Controls.File;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Component Type */
			powerpagecomponenttype: DevKit.Controls.OptionSet;
			/** Power Pages Site id */
			powerpagesiteid: DevKit.Controls.Lookup;
			/** Power Pages Site Language Id */
			powerpagesitelanguageid: DevKit.Controls.Lookup;
			/** Status of the Power Pages Component */
			statecode: DevKit.Controls.OptionSet;
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
	 * Usage: new powerpagecomponent.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate powerpagecomponent Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['content', 'filecontent', 'name', 'OwnerId', 'powerpagecomponenttype', 'powerpagesiteid', 'powerpagesitelanguageid', 'statecode'],
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

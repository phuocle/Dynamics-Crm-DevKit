/**
 * ActivityMimeAttachment.form.ts - ActivityMimeAttachment Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ActivityMimeAttachment containing form classes: ActivityMimeAttachment.FormClassName
 * 3. Aggregate Form class: ActivityMimeAttachment.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ActivityMimeAttachment {

	// ========================================================================
	// Form: ActivityMimeAttachment_Information
	// ========================================================================

	export namespace ActivityMimeAttachment_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** File name of the attachment. */
			FileName: DevKit.Controls.String;
			/** File size of the attachment. */
			FileSize: DevKit.Controls.Integer;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ItestTabSections {
			/** File Information */
			test: DevKit.Controls.Section;
		}

		/** File Information */
		export interface ItestTab extends DevKit.Controls.ITab {
			Section: ItestTabSections;
		}

		export interface ITabs {
			/** File Information */
			test: ItestTab;
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
	 * ActivityMimeAttachment_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new ActivityMimeAttachment.ActivityMimeAttachment_Information(executionContext)
	 */
	export class ActivityMimeAttachment_Information extends FormBase<ActivityMimeAttachment_Information.IBody, ActivityMimeAttachment_Information.IHeader, ActivityMimeAttachment_Information.IGrid, ActivityMimeAttachment_Information.INavigation, ActivityMimeAttachment_Information.IQuickForm, ActivityMimeAttachment_Information.IProcess, ActivityMimeAttachment_Information.IDialog> {
		/**
		 * Creates a ActivityMimeAttachment_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['FileName', 'FileSize'],
				header: [],
				tab: ['test___test'],
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
			/** File name of the attachment. */
			FileName: DevKit.Controls.String;
			/** File size of the attachment. */
			FileSize: DevKit.Controls.Integer;
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
	 * Usage: new ActivityMimeAttachment.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ActivityMimeAttachment Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['FileName', 'FileSize'],
				header: [],
				tab: ['test___test'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

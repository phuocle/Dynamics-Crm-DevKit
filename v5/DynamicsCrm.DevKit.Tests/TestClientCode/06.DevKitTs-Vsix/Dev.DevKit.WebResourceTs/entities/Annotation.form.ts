/**
 * Annotation.form.ts - Annotation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Annotation containing form classes: Annotation.FormClassName
 * 3. Aggregate Form class: Annotation.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Annotation {

	// ========================================================================
	// Form: Annotation_Information
	// ========================================================================

	export namespace Annotation_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user who created the note. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the note was created. */
			CreatedOn: DevKit.Controls.DateTime;
			filenameattachment: DevKit.Controls.ActionCards;
			/** File size of the note. */
			FileSize: DevKit.Controls.Integer;
			/** Specifies whether the note is an attachment. */
			IsDocument: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the note. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the note was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Text of the note. */
			notetext: DevKit.Controls.ActionCards;
			/** Unique identifier of the user or team who owns the note. */
			OwnerId: DevKit.Controls.Lookup;
			regardingobject: DevKit.Controls.ActionCards;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Account Information */
			account_information: DevKit.Controls.Section;
			/** Attachment Information */
			attachment_information: DevKit.Controls.Section;
			/** Note Content */
			content_information: DevKit.Controls.Section;
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
	 * Annotation_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Annotation.Annotation_Information(executionContext)
	 */
	export class Annotation_Information extends FormBase<Annotation_Information.IBody, Annotation_Information.IHeader, Annotation_Information.IGrid, Annotation_Information.INavigation, Annotation_Information.IQuickForm, Annotation_Information.IProcess, Annotation_Information.IDialog> {
		/**
		 * Creates a Annotation_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'filenameattachment', 'FileSize', 'IsDocument', 'ModifiedBy', 'ModifiedOn', 'notetext', 'OwnerId', 'regardingobject'],
				header: [],
				tab: ['general___account_information', 'general___attachment_information', 'general___content_information'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Note_Quick_Create_Form
	// ========================================================================

	export namespace Note_Quick_Create_Form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Text of the note. */
			notetext: DevKit.Controls.Memo;
			/** Subject associated with the note. */
			subject: DevKit.Controls.String;
			/** Form Tabs */
			Tab: ITabs;
		}

		export interface IgeneralTabSections {
			/** Notes Information */
			notes_information: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			/** General */
			general: IgeneralTab;
		}

	}

	/**
	 * Note_Quick_Create_Form Form class
	 * Provides typed access to all form controls
	 * Usage: new Annotation.Note_Quick_Create_Form(executionContext)
	 */
	export class Note_Quick_Create_Form extends FormBase<Note_Quick_Create_Form.IBody, undefined, undefined, undefined, undefined, undefined, undefined> {
		/**
		 * Creates a Note_Quick_Create_Form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['NoteText', 'Subject'],
				header: [],
				tab: ['general___notes_information'],
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
			/** Unique identifier of the user who created the note. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the note was created. */
			CreatedOn: DevKit.Controls.DateTime;
			filenameattachment: DevKit.Controls.ActionCards;
			/** File size of the note. */
			FileSize: DevKit.Controls.Integer;
			/** Specifies whether the note is an attachment. */
			IsDocument: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the note. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the note was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Text of the note. */
			notetext: DevKit.Controls.ActionCards;
			/** Unique identifier of the user or team who owns the note. */
			OwnerId: DevKit.Controls.Lookup;
			regardingobject: DevKit.Controls.ActionCards;
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
	 * Usage: new Annotation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Annotation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'filenameattachment', 'FileSize', 'IsDocument', 'ModifiedBy', 'ModifiedOn', 'notetext', 'OwnerId', 'regardingobject'],
				header: [],
				tab: ['general___account information', 'general___attachment information', 'general___content information'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

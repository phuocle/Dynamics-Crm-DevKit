/**
 * Feedback.form.ts - Feedback Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Feedback containing form classes: Feedback.FormClassName
 * 3. Aggregate Form class: Feedback.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Feedback {

	// ========================================================================
	// Form: Feedback
	// ========================================================================

	export namespace Feedback {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows who closed the record. */
			ClosedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ClosedOn: DevKit.Controls.DateTime;
			/** Type the feedback comments. */
			Comments: DevKit.Controls.Memo;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Controls.Integer;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Controls.Integer;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Controls.OptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface IgeneralTabSections {
			/** Feedback Contacts */
			feedback_Contacts: DevKit.Controls.Section;
			/** Feedback Details */
			feedback_Details: DevKit.Controls.Section;
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
	 * Feedback Form class
	 * Provides typed access to all form controls
	 * Usage: new Feedback.Feedback(executionContext)
	 */
	export class Feedback extends FormBase<Feedback.IBody, Feedback.IHeader, Feedback.IGrid, Feedback.INavigation, Feedback.IQuickForm, Feedback.IProcess, Feedback.IDialog> {
		/**
		 * Creates a Feedback Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ClosedBy', 'ClosedOn', 'Comments', 'CreatedBy', 'CreatedByContact', 'CreatedOn', 'MaxRating', 'MinRating', 'Rating', 'RegardingObjectId', 'Source', 'Title'],
				header: ['NormalizedRating', 'OwnerId', 'StatusCode'],
				tab: ['general___feedback_Contacts', 'general___feedback_Details'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Feedback_MainIC
	// ========================================================================

	export namespace Feedback_MainIC {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows who closed the record. */
			ClosedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ClosedOn: DevKit.Controls.DateTime;
			/** Type the feedback comments. */
			Comments: DevKit.Controls.Memo;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Controls.Integer;
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Controls.Integer;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Controls.OptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the feedback is open, rejected or closed. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface IgeneralTabSections {
			/** COMMENTS */
			Content: DevKit.Controls.Section;
			/** RESOLUTION */
			Content_2: DevKit.Controls.Section;
			/** GENERAL */
			General_Info: DevKit.Controls.Section;
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
	 * Feedback_MainIC Form class
	 * Provides typed access to all form controls
	 * Usage: new Feedback.Feedback_MainIC(executionContext)
	 */
	export class Feedback_MainIC extends FormBase<Feedback_MainIC.IBody, Feedback_MainIC.IHeader, Feedback_MainIC.IGrid, Feedback_MainIC.INavigation, Feedback_MainIC.IQuickForm, Feedback_MainIC.IProcess, Feedback_MainIC.IDialog> {
		/**
		 * Creates a Feedback_MainIC Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ClosedBy', 'ClosedOn', 'Comments', 'CreatedBy', 'CreatedByContact', 'MaxRating', 'MinRating', 'NormalizedRating', 'Rating', 'RegardingObjectId', 'Source', 'Title'],
				header: ['CreatedOn', 'OwnerId', 'StateCode', 'StatusCode'],
				tab: ['general___Content', 'general___Content_2', 'general___General_Info'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: New_Comment_Form
	// ========================================================================

	export namespace New_Comment_Form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the feedback comments. */
			Comments: DevKit.Controls.Memo;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Feedback Details */
			feedback_Details: DevKit.Controls.Section;
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
	 * New_Comment_Form Form class
	 * Provides typed access to all form controls
	 * Usage: new Feedback.New_Comment_Form(executionContext)
	 */
	export class New_Comment_Form extends FormBase<New_Comment_Form.IBody, New_Comment_Form.IHeader, New_Comment_Form.IGrid, New_Comment_Form.INavigation, New_Comment_Form.IQuickForm, New_Comment_Form.IProcess, New_Comment_Form.IDialog> {
		/**
		 * Creates a New_Comment_Form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Comments'],
				header: [],
				tab: ['general___feedback_Details'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: simple_contact_us_form
	// ========================================================================

	export namespace simple_contact_us_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Email of the contact who created the record. */
			Adx_ContactEmail: DevKit.Controls.String;
			/** Name of the contact who created the record. */
			Adx_CreatedByContact: DevKit.Controls.String;
			/** Type the feedback comments. */
			Comments: DevKit.Controls.Memo;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface IYour_detailsTabSections {
			/** Contact Information */
			CONTACT_INFORMATION: DevKit.Controls.Section;
		}

		/** Fill in your details */
		export interface IYour_detailsTab extends DevKit.Controls.ITab {
			Section: IYour_detailsTabSections;
		}

		export interface ITabs {
			/** Fill in your details */
			Your_details: IYour_detailsTab;
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
	 * simple_contact_us_form Form class
	 * Provides typed access to all form controls
	 * Usage: new Feedback.simple_contact_us_form(executionContext)
	 */
	export class simple_contact_us_form extends FormBase<simple_contact_us_form.IBody, simple_contact_us_form.IHeader, simple_contact_us_form.IGrid, simple_contact_us_form.INavigation, simple_contact_us_form.IQuickForm, simple_contact_us_form.IProcess, simple_contact_us_form.IDialog> {
		/**
		 * Creates a simple_contact_us_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Adx_ContactEmail', 'Adx_CreatedByContact', 'Comments', 'Title'],
				header: ['NormalizedRating', 'OwnerId', 'StatusCode'],
				tab: ['Your_details___CONTACT_INFORMATION'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Feedback_Quick_Create
	// ========================================================================

	export namespace Feedback_Quick_Create {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the feedback comments. */
			comments: DevKit.Controls.Memo;
			/** Shows the contact who created the record. */
			createdbycontact: DevKit.Controls.Lookup;
			/** Enter the maximum rating value. */
			maxrating: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			minrating: DevKit.Controls.Integer;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			ownerid: DevKit.Controls.Lookup;
			/** Specifies how helpful the related record was. */
			rating: DevKit.Controls.Integer;
			/** Shows the record that the feedback is associated with. */
			regardingobjectid: DevKit.Controls.Lookup;
			/** Shows where the feedback was submitted from. */
			source: DevKit.Controls.OptionSet;
			/** Select the feedback's status. */
			statuscode: DevKit.Controls.OptionSet;
			/** Type a title for the feedback. */
			title: DevKit.Controls.String;
			/** Form Tabs */
			Tab: ITabs;
		}

		export interface IgeneralTabSections {
			/** Feedback Contacts */
			feedback_Contacts: DevKit.Controls.Section;
			/** Feedback Details */
			feedback_Details: DevKit.Controls.Section;
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
	 * Feedback_Quick_Create Form class
	 * Provides typed access to all form controls
	 * Usage: new Feedback.Feedback_Quick_Create(executionContext)
	 */
	export class Feedback_Quick_Create extends FormBase<Feedback_Quick_Create.IBody, undefined, undefined, undefined, undefined, undefined, undefined> {
		/**
		 * Creates a Feedback_Quick_Create Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Comments', 'CreatedByContact', 'MaxRating', 'MinRating', 'OwnerId', 'Rating', 'RegardingObjectId', 'Source', 'StatusCode', 'Title'],
				header: [],
				tab: ['general___feedback_Contacts', 'general___feedback_Details'],
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
			/** Email of the contact who created the record. */
			Adx_ContactEmail: DevKit.Controls.String;
			/** Name of the contact who created the record. */
			Adx_CreatedByContact: DevKit.Controls.String;
			/** Shows who closed the record. */
			ClosedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ClosedOn: DevKit.Controls.DateTime;
			/** Type the feedback comments. */
			Comments: DevKit.Controls.Memo;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Controls.Integer;
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Controls.Integer;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Controls.OptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the feedback is open, rejected or closed. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
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
	 * Usage: new Feedback.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Feedback Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Adx_ContactEmail', 'Adx_CreatedByContact', 'ClosedBy', 'ClosedOn', 'Comments', 'CreatedBy', 'CreatedByContact', 'CreatedOn', 'MaxRating', 'MinRating', 'NormalizedRating', 'Rating', 'RegardingObjectId', 'Source', 'Title'],
				header: ['CreatedOn', 'NormalizedRating', 'OwnerId', 'StateCode', 'StatusCode'],
				tab: ['general___Content', 'general___Content_2', 'general___feedback Contacts', 'general___feedback Details', 'general___General Info', 'Your details___CONTACT_INFORMATION'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

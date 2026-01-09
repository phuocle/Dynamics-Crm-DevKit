/**
 * Template.form.ts - Template Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Template containing form classes: Template.FormClassName
 * 3. Aggregate Form class: Template.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Template {

	// ========================================================================
	// Form: Template_Information
	// ========================================================================

	export namespace Template_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Subject associated with the email template. */
			Subject: DevKit.Controls.Memo;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Email Template Information */
			email_template_information: DevKit.Controls.Section;
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
	 * Template_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Template.Template_Information(executionContext)
	 */
	export class Template_Information extends FormBase<Template_Information.IBody, Template_Information.IHeader, Template_Information.IGrid, Template_Information.INavigation, Template_Information.IQuickForm, Template_Information.IProcess, Template_Information.IDialog> {
		/**
		 * Creates a Template_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Subject'],
				header: [],
				tab: ['general___email_template_information'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Template
	// ========================================================================

	export namespace Template {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type of email template. */
			category: DevKit.Controls.ActionCards;
			/** Description of the email template. */
			Description: DevKit.Controls.Memo;
			/** Information about whether the template is personal or is available to all users. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Language of the email template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Safe html of email template. */
			SafeHtml: DevKit.Controls.Memo;
			/** Safe html of email template subject. */
			SubjectSafeHtml: DevKit.Controls.Memo;
			/** Title of the template. */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the template for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
		}

		export interface ITemplateTabSections {
			/** Details */
			Details: DevKit.Controls.Section;
			/** Template editor */
			Template_editor: DevKit.Controls.Section;
		}

		/** Template */
		export interface ITemplateTab extends DevKit.Controls.ITab {
			Section: ITemplateTabSections;
		}

		export interface ITabs {
			/** Template */
			Template: ITemplateTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
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
	 * Template Form class
	 * Provides typed access to all form controls
	 * Usage: new Template.Template(executionContext)
	 */
	export class Template extends FormBase<Template.IBody, Template.IHeader, Template.IGrid, Template.INavigation, Template.IQuickForm, Template.IProcess, Template.IDialog> {
		/**
		 * Creates a Template Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['category', 'Description', 'IsPersonal', 'LanguageCode', 'SafeHtml', 'SubjectSafeHtml', 'Title'],
				header: ['OwnerId'],
				tab: ['Template___Details', 'Template___Template_editor'],
				grid: ['attachmentsGrid'],
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
			/** Type of email template. */
			category: DevKit.Controls.ActionCards;
			/** Description of the email template. */
			Description: DevKit.Controls.Memo;
			/** Information about whether the template is personal or is available to all users. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Language of the email template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Safe html of email template. */
			SafeHtml: DevKit.Controls.Memo;
			/** Subject associated with the email template. */
			Subject: DevKit.Controls.Memo;
			/** Safe html of email template subject. */
			SubjectSafeHtml: DevKit.Controls.Memo;
			/** Title of the template. */
			Title: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the template for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
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
	 * Usage: new Template.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Template Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['category', 'Description', 'IsPersonal', 'LanguageCode', 'SafeHtml', 'Subject', 'SubjectSafeHtml', 'Title'],
				header: ['OwnerId'],
				tab: ['general___email template information', 'Template___Details', 'Template___Template editor'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

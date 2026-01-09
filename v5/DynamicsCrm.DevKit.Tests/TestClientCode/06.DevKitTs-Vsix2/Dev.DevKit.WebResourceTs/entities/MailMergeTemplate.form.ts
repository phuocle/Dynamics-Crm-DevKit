/**
 * MailMergeTemplate.form.ts - MailMergeTemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace MailMergeTemplate containing form classes: MailMergeTemplate.FormClassName
 * 3. Aggregate Form class: MailMergeTemplate.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace MailMergeTemplate {

	// ========================================================================
	// Form: MailMergeTemplate_Information
	// ========================================================================

	export namespace MailMergeTemplate_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description of the mail merge template. */
			Description: DevKit.Controls.String;
			/** Information about whether the mail merge template is personal or is available to all users. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Language of the mail merge template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Name of the mail merge template. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the mail merge template. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type of mail merge template. */
			TemplateTypeCode: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Categorization */
			Categorization: DevKit.Controls.Section;
			/** Details */
			Details: DevKit.Controls.Section;
			/** Language */
			Language: DevKit.Controls.Section;
			/** Ownership */
			Ownership: DevKit.Controls.Section;
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
	 * MailMergeTemplate_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new MailMergeTemplate.MailMergeTemplate_Information(executionContext)
	 */
	export class MailMergeTemplate_Information extends FormBase<MailMergeTemplate_Information.IBody, MailMergeTemplate_Information.IHeader, MailMergeTemplate_Information.IGrid, MailMergeTemplate_Information.INavigation, MailMergeTemplate_Information.IQuickForm, MailMergeTemplate_Information.IProcess, MailMergeTemplate_Information.IDialog> {
		/**
		 * Creates a MailMergeTemplate_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'IsPersonal', 'LanguageCode', 'Name', 'OwnerId', 'TemplateTypeCode'],
				header: [],
				tab: ['general___Categorization', 'general___Details', 'general___Language', 'general___Ownership'],
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
			/** Description of the mail merge template. */
			Description: DevKit.Controls.String;
			/** Information about whether the mail merge template is personal or is available to all users. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Language of the mail merge template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Name of the mail merge template. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the mail merge template. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type of mail merge template. */
			TemplateTypeCode: DevKit.Controls.String;
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
	 * Usage: new MailMergeTemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate MailMergeTemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'IsPersonal', 'LanguageCode', 'Name', 'OwnerId', 'TemplateTypeCode'],
				header: [],
				tab: ['general___Categorization', 'general___Details', 'general___Language', 'general___Ownership'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

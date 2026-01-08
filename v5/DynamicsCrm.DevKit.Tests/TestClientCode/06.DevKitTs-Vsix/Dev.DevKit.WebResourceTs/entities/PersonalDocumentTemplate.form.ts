/**
 * PersonalDocumentTemplate.form.ts - PersonalDocumentTemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace PersonalDocumentTemplate containing form classes: PersonalDocumentTemplate.FormClassName
 * 3. Aggregate Form class: PersonalDocumentTemplate.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace PersonalDocumentTemplate {

	// ========================================================================
	// Form: PersonalDocumentTemplate_Information
	// ========================================================================

	export namespace PersonalDocumentTemplate_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Associated Entity Type Code. */
			AssociatedEntityTypeCode: DevKit.Controls.String;
			/** Unique identifier of the user who created the personal document template. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the personal document template was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Additional information to describe the Personal Document Template */
			Description: DevKit.Controls.String;
			/** Option set for selecting the type of the personal document template */
			DocumentType: DevKit.Controls.OptionSet;
			/** Language of Personal Document Template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the personal document template. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the personal document template was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the personal document template. */
			Name: DevKit.Controls.String;
			/** Information about whether the personal document template is active. */
			Status: DevKit.Controls.Boolean;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Details */
			Details: DevKit.Controls.Section;
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
	 * PersonalDocumentTemplate_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new PersonalDocumentTemplate.PersonalDocumentTemplate_Information(executionContext)
	 */
	export class PersonalDocumentTemplate_Information extends FormBase<PersonalDocumentTemplate_Information.IBody, PersonalDocumentTemplate_Information.IHeader, PersonalDocumentTemplate_Information.IGrid, PersonalDocumentTemplate_Information.INavigation, PersonalDocumentTemplate_Information.IQuickForm, PersonalDocumentTemplate_Information.IProcess, PersonalDocumentTemplate_Information.IDialog> {
		/**
		 * Creates a PersonalDocumentTemplate_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AssociatedEntityTypeCode', 'CreatedBy', 'CreatedOn', 'Description', 'DocumentType', 'LanguageCode', 'ModifiedBy', 'ModifiedOn', 'Name', 'Status'],
				header: [],
				tab: ['general___Details'],
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
			/** Associated Entity Type Code. */
			AssociatedEntityTypeCode: DevKit.Controls.String;
			/** Unique identifier of the user who created the personal document template. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the personal document template was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Additional information to describe the Personal Document Template */
			Description: DevKit.Controls.String;
			/** Option set for selecting the type of the personal document template */
			DocumentType: DevKit.Controls.OptionSet;
			/** Language of Personal Document Template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the personal document template. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the personal document template was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the personal document template. */
			Name: DevKit.Controls.String;
			/** Information about whether the personal document template is active. */
			Status: DevKit.Controls.Boolean;
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
	 * Usage: new PersonalDocumentTemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate PersonalDocumentTemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AssociatedEntityTypeCode', 'CreatedBy', 'CreatedOn', 'Description', 'DocumentType', 'LanguageCode', 'ModifiedBy', 'ModifiedOn', 'Name', 'Status'],
				header: [],
				tab: ['general___Details'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * DocumentTemplate.form.ts - DocumentTemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace DocumentTemplate containing form classes: DocumentTemplate.FormClassName
 * 3. Aggregate Form class: DocumentTemplate.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace DocumentTemplate {

	// ========================================================================
	// Form: DocumentTemplate_Information
	// ========================================================================

	export namespace DocumentTemplate_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Associated Entity Type Code. */
			AssociatedEntityTypeCode: DevKit.Controls.String;
			/** Unique identifier of the user who created the document template. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the document template was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Additional information to describe the Document Template */
			Description: DevKit.Controls.String;
			/** Option set for selecting the type of the document template */
			DocumentType: DevKit.Controls.OptionSet;
			/** Language of Document Template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the document template. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the document template was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the document template. */
			Name: DevKit.Controls.String;
			/** Information about whether the document template is active. */
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
	 * DocumentTemplate_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new DocumentTemplate.DocumentTemplate_Information(executionContext)
	 */
	export class DocumentTemplate_Information extends FormBase<DocumentTemplate_Information.IBody, DocumentTemplate_Information.IHeader, DocumentTemplate_Information.IGrid, DocumentTemplate_Information.INavigation, DocumentTemplate_Information.IQuickForm, DocumentTemplate_Information.IProcess, DocumentTemplate_Information.IDialog> {
		/**
		 * Creates a DocumentTemplate_Information Form instance
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
			/** Unique identifier of the user who created the document template. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the document template was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Additional information to describe the Document Template */
			Description: DevKit.Controls.String;
			/** Option set for selecting the type of the document template */
			DocumentType: DevKit.Controls.OptionSet;
			/** Language of Document Template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the document template. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the document template was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the document template. */
			Name: DevKit.Controls.String;
			/** Information about whether the document template is active. */
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
	 * Usage: new DocumentTemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate DocumentTemplate Form instance
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

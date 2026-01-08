/**
 * KbArticleComment.form.ts - KbArticleComment Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace KbArticleComment containing form classes: KbArticleComment.FormClassName
 * 3. Aggregate Form class: KbArticleComment.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace KbArticleComment {

	// ========================================================================
	// Form: KbArticleComment_Information
	// ========================================================================

	export namespace KbArticleComment_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user who created the knowledge base article comment. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the knowledge base article comment was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who last modified the knowledge base article comment. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the knowledge base article comment was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Title of the knowledge base article comment. */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** KB Comment */
			kb_comment: DevKit.Controls.Section;
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
	 * KbArticleComment_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new KbArticleComment.KbArticleComment_Information(executionContext)
	 */
	export class KbArticleComment_Information extends FormBase<KbArticleComment_Information.IBody, KbArticleComment_Information.IHeader, KbArticleComment_Information.IGrid, KbArticleComment_Information.INavigation, KbArticleComment_Information.IQuickForm, KbArticleComment_Information.IProcess, KbArticleComment_Information.IDialog> {
		/**
		 * Creates a KbArticleComment_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'ModifiedBy', 'ModifiedOn', 'Title'],
				header: [],
				tab: ['general___kb_comment'],
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
			/** Unique identifier of the user who created the knowledge base article comment. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the knowledge base article comment was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who last modified the knowledge base article comment. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the knowledge base article comment was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Title of the knowledge base article comment. */
			Title: DevKit.Controls.String;
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
	 * Usage: new KbArticleComment.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate KbArticleComment Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'ModifiedBy', 'ModifiedOn', 'Title'],
				header: [],
				tab: ['general___kb comment'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

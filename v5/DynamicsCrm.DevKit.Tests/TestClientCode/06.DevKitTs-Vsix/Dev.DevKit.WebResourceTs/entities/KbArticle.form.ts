/**
 * KbArticle.form.ts - KbArticle Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace KbArticle containing form classes: KbArticle.FormClassName
 * 3. Aggregate Form class: KbArticle.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace KbArticle {

	// ========================================================================
	// Form: KbArticle_Information
	// ========================================================================

	export namespace KbArticle_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the article content and formatting, stored as XML. */
			ArticleXml: DevKit.Controls.Memo;
			/** Keywords to be used for searches in knowledge base articles. */
			KeyWords: DevKit.Controls.Memo;
			/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
			LanguageCode: DevKit.Controls.Integer;
			/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
			msa_publishtoweb: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name for the article to assist with article searches. */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_B641B7D4_753C_C99A_5978_977E6912E856TabSections {
			/** Comments */
			_493D7206_6935_E73D_75CC_44DC53D021E8: DevKit.Controls.Section;
		}

		export interface IgeneralTabSections {
			/** Article Information */
			article_information: DevKit.Controls.Section;
			/** Article Keywords */
			Article_Keywords: DevKit.Controls.Section;
			/** Web Portal Display */
			general_section_4: DevKit.Controls.Section;
			/** KB Article Data */
			kb_article_description: DevKit.Controls.Section;
		}

		export interface InotesTabSections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}

		/** Comments */
		export interface I_B641B7D4_753C_C99A_5978_977E6912E856Tab extends DevKit.Controls.ITab {
			Section: I_B641B7D4_753C_C99A_5978_977E6912E856TabSections;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		/** Notes */
		export interface InotesTab extends DevKit.Controls.ITab {
			Section: InotesTabSections;
		}

		export interface ITabs {
			/** Comments */
			_B641B7D4_753C_C99A_5978_977E6912E856: I_B641B7D4_753C_C99A_5978_977E6912E856Tab;
			/** General */
			general: IgeneralTab;
			/** Notes */
			notes: InotesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Article Comments (Article) */
			ArticleComments: DevKit.Controls.Grid;
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
	 * KbArticle_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new KbArticle.KbArticle_Information(executionContext)
	 */
	export class KbArticle_Information extends FormBase<KbArticle_Information.IBody, KbArticle_Information.IHeader, KbArticle_Information.IGrid, KbArticle_Information.INavigation, KbArticle_Information.IQuickForm, KbArticle_Information.IProcess, KbArticle_Information.IDialog> {
		/**
		 * Creates a KbArticle_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ArticleXml', 'KeyWords', 'LanguageCode', 'msa_publishtoweb', 'notescontrol', 'SubjectId', 'Title'],
				header: [],
				tab: ['_B641B7D4_753C_C99A_5978_977E6912E856____493D7206_6935_E73D_75CC_44DC53D021E8', 'general___article_information', 'general___Article_Keywords', 'general___general_section_4', 'general___kb_article_description', 'notes___notes'],
				grid: ['ArticleComments'],
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
			/** Shows the article content and formatting, stored as XML. */
			ArticleXml: DevKit.Controls.Memo;
			/** Keywords to be used for searches in knowledge base articles. */
			KeyWords: DevKit.Controls.Memo;
			/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
			LanguageCode: DevKit.Controls.Integer;
			/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
			msa_publishtoweb: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name for the article to assist with article searches. */
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
			/** Article Comments (Article) */
			ArticleComments: DevKit.Controls.Grid;
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
	 * Usage: new KbArticle.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate KbArticle Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ArticleXml', 'KeyWords', 'LanguageCode', 'msa_publishtoweb', 'notescontrol', 'SubjectId', 'Title'],
				header: [],
				tab: ['{b641b7d4-753c-c99a-5978-977e6912e856}___{493d7206-6935-e73d-75cc-44dc53d021e8}', 'general___article information', 'general___Article Keywords', 'general___general_section_4', 'general___kb-article description', 'notes___notes'],
				grid: ['ArticleComments'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

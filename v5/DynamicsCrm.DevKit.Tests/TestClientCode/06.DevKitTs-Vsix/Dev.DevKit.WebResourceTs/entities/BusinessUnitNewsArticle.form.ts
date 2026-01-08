/**
 * BusinessUnitNewsArticle.form.ts - BusinessUnitNewsArticle Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace BusinessUnitNewsArticle containing form classes: BusinessUnitNewsArticle.FormClassName
 * 3. Aggregate Form class: BusinessUnitNewsArticle.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace BusinessUnitNewsArticle {

	// ========================================================================
	// Form: BusinessUnitNewsArticle_Information
	// ========================================================================

	export namespace BusinessUnitNewsArticle_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Date and time of the last day the announcement is active. */
			ActiveUntil: DevKit.Controls.DateOnly;
			/** Title of the announcement. */
			ArticleTitle: DevKit.Controls.String;
			/** URL for the Website on which the announcement is located. */
			ArticleUrl: DevKit.Controls.String;
			/** Text for the announcement. */
			NewsArticle: DevKit.Controls.Memo;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IannouncementTabSections {
			/** Additional Settings */
			additional_settings: DevKit.Controls.Section;
			/** Announcement Information */
			announcement_information: DevKit.Controls.Section;
		}

		/** Announcement */
		export interface IannouncementTab extends DevKit.Controls.ITab {
			Section: IannouncementTabSections;
		}

		export interface ITabs {
			/** Announcement */
			announcement: IannouncementTab;
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
	 * BusinessUnitNewsArticle_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new BusinessUnitNewsArticle.BusinessUnitNewsArticle_Information(executionContext)
	 */
	export class BusinessUnitNewsArticle_Information extends FormBase<BusinessUnitNewsArticle_Information.IBody, BusinessUnitNewsArticle_Information.IHeader, BusinessUnitNewsArticle_Information.IGrid, BusinessUnitNewsArticle_Information.INavigation, BusinessUnitNewsArticle_Information.IQuickForm, BusinessUnitNewsArticle_Information.IProcess, BusinessUnitNewsArticle_Information.IDialog> {
		/**
		 * Creates a BusinessUnitNewsArticle_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActiveUntil', 'ArticleTitle', 'ArticleUrl', 'NewsArticle'],
				header: [],
				tab: ['announcement___additional_settings', 'announcement___announcement_information'],
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
			/** Date and time of the last day the announcement is active. */
			ActiveUntil: DevKit.Controls.DateOnly;
			/** Title of the announcement. */
			ArticleTitle: DevKit.Controls.String;
			/** URL for the Website on which the announcement is located. */
			ArticleUrl: DevKit.Controls.String;
			/** Text for the announcement. */
			NewsArticle: DevKit.Controls.Memo;
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
	 * Usage: new BusinessUnitNewsArticle.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate BusinessUnitNewsArticle Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActiveUntil', 'ArticleTitle', 'ArticleUrl', 'NewsArticle'],
				header: [],
				tab: ['announcement___additional settings', 'announcement___announcement information'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

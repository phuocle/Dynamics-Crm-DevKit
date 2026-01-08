/**
 * mspp_webfile.form.ts - mspp_webfile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_webfile containing form classes: mspp_webfile.FormClassName
 * 3. Aggregate Form class: mspp_webfile.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_webfile {

	// ========================================================================
	// Form: mspp_webfile_Information
	// ========================================================================

	export namespace mspp_webfile_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			mspp_alloworigin: DevKit.Controls.String;
			/** Cloud Blob Address */
			mspp_cloudblobaddress: DevKit.Controls.String;
			/** Shows the value to be applied to the HTTP Response Headers Content-Disposition. */
			mspp_contentdisposition: DevKit.Controls.OptionSet;
			/** Display Date */
			mspp_displaydate: DevKit.Controls.DateTime;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Shows whether the web file is excluded from the portal search. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			/** Expiration Date */
			mspp_expirationdate: DevKit.Controls.DateTime;
			/** Hidden From Sitemap */
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Unique identifier for Web File associated with Web File. */
			mspp_masterwebfileid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Page associated with Web File. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			/** Partial URL */
			mspp_partialurl: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web File. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Release Date */
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Summary */
			mspp_summary: DevKit.Controls.Memo;
			/** Summary */
			mspp_summary1: DevKit.Controls.Memo;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web File. */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_file_attachment_html: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_FBAB524E_5B3C_4DB1_8A8A_74366B17D549TabSections {
			/** General */
			_2B6A953D_2F2F_4CA4_8D4E_7637C1C9A42F: DevKit.Controls.Section;
			/** Content */
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_2: DevKit.Controls.Section;
			/** File Options */
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_3: DevKit.Controls.Section;
			/** Miscellaneous */
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_4: DevKit.Controls.Section;
			/** Summary (HTML) */
			mspp_webfile_summary_monacoEditor: DevKit.Controls.Section;
		}

		/** General */
		export interface I_FBAB524E_5B3C_4DB1_8A8A_74366B17D549Tab extends DevKit.Controls.ITab {
			Section: I_FBAB524E_5B3C_4DB1_8A8A_74366B17D549TabSections;
		}

		export interface ITabs {
			/** General */
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549: I_FBAB524E_5B3C_4DB1_8A8A_74366B17D549Tab;
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
	 * mspp_webfile_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_webfile.mspp_webfile_Information(executionContext)
	 */
	export class mspp_webfile_Information extends FormBase<mspp_webfile_Information.IBody, mspp_webfile_Information.IHeader, mspp_webfile_Information.IGrid, mspp_webfile_Information.INavigation, mspp_webfile_Information.IQuickForm, mspp_webfile_Information.IProcess, mspp_webfile_Information.IDialog> {
		/**
		 * Creates a mspp_webfile_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_alloworigin', 'mspp_cloudblobaddress', 'mspp_contentdisposition', 'mspp_displaydate', 'mspp_displayorder', 'mspp_excludefromsearch', 'mspp_expirationdate', 'mspp_hiddenfromsitemap', 'mspp_masterwebfileid', 'mspp_name', 'mspp_parentpageid', 'mspp_partialurl', 'mspp_publishingstateid', 'mspp_releasedate', 'mspp_summary', 'mspp_summary1', 'mspp_title', 'mspp_websiteid', 'WebResource_file_attachment_html'],
				header: [],
				tab: ['_FBAB524E_5B3C_4DB1_8A8A_74366B17D549____2B6A953D_2F2F_4CA4_8D4E_7637C1C9A42F', '_FBAB524E_5B3C_4DB1_8A8A_74366B17D549____FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_2', '_FBAB524E_5B3C_4DB1_8A8A_74366B17D549____FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_3', '_FBAB524E_5B3C_4DB1_8A8A_74366B17D549____FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_4', '_FBAB524E_5B3C_4DB1_8A8A_74366B17D549___mspp_webfile_summary_monacoEditor'],
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
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			mspp_alloworigin: DevKit.Controls.String;
			/** Cloud Blob Address */
			mspp_cloudblobaddress: DevKit.Controls.String;
			/** Shows the value to be applied to the HTTP Response Headers Content-Disposition. */
			mspp_contentdisposition: DevKit.Controls.OptionSet;
			/** Display Date */
			mspp_displaydate: DevKit.Controls.DateTime;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Shows whether the web file is excluded from the portal search. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			/** Expiration Date */
			mspp_expirationdate: DevKit.Controls.DateTime;
			/** Hidden From Sitemap */
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Unique identifier for Web File associated with Web File. */
			mspp_masterwebfileid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Page associated with Web File. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			/** Partial URL */
			mspp_partialurl: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web File. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Release Date */
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Summary */
			mspp_summary: DevKit.Controls.Memo;
			/** Summary */
			mspp_summary1: DevKit.Controls.Memo;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web File. */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_file_attachment_html: DevKit.Controls.WebResource;
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
	 * Usage: new mspp_webfile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_webfile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_alloworigin', 'mspp_cloudblobaddress', 'mspp_contentdisposition', 'mspp_displaydate', 'mspp_displayorder', 'mspp_excludefromsearch', 'mspp_expirationdate', 'mspp_hiddenfromsitemap', 'mspp_masterwebfileid', 'mspp_name', 'mspp_parentpageid', 'mspp_partialurl', 'mspp_publishingstateid', 'mspp_releasedate', 'mspp_summary', 'mspp_summary1', 'mspp_title', 'mspp_websiteid', 'WebResource_file_attachment_html'],
				header: [],
				tab: ['{fbab524e-5b3c-4db1-8a8a-74366b17d549}___{2b6a953d-2f2f-4ca4-8d4e-7637c1c9a42f}', '{fbab524e-5b3c-4db1-8a8a-74366b17d549}___{fbab524e-5b3c-4db1-8a8a-74366b17d549}_section_2', '{fbab524e-5b3c-4db1-8a8a-74366b17d549}___{fbab524e-5b3c-4db1-8a8a-74366b17d549}_section_3', '{fbab524e-5b3c-4db1-8a8a-74366b17d549}___{fbab524e-5b3c-4db1-8a8a-74366b17d549}_section_4', '{fbab524e-5b3c-4db1-8a8a-74366b17d549}___mspp_webfile_summary_monacoEditor'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

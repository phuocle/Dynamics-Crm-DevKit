/**
 * mspp_webpage.form.ts - mspp_webpage Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_webpage containing form classes: mspp_webpage.FormClassName
 * 3. Aggregate Form class: mspp_webpage.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_webpage {

	// ========================================================================
	// Form: Content_Page
	// ========================================================================

	export namespace Content_Page {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			mspp_alloworigin: DevKit.Controls.String;
			/** Category */
			mspp_category: DevKit.Controls.OptionSet;
			/** Copy */
			mspp_copy: DevKit.Controls.Memo;
			/** Copy */
			mspp_copy1: DevKit.Controls.Memo;
			/** Custom CSS */
			mspp_customcss: DevKit.Controls.Memo;
			/** Custom CSS */
			mspp_customcss1: DevKit.Controls.Memo;
			/** Custom JavaScript */
			mspp_customjavascript: DevKit.Controls.Memo;
			/** Custom JavaScript */
			mspp_customjavascript1: DevKit.Controls.Memo;
			/** Display Date */
			mspp_displaydate: DevKit.Controls.DateTime;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Editorial Comments */
			mspp_editorialcomments: DevKit.Controls.Memo;
			/** Setting this value to 'Yes' will allow users to rate the web page. */
			mspp_enablerating: DevKit.Controls.Boolean;
			/** Unique identifier for Entity Form associated with Web Page. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Unique identifier for Entity List associated with Web Page. */
			mspp_entitylist: DevKit.Controls.Lookup;
			/** Shows whether the webpage is excluded from the portal search. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			/** Expiration Date */
			mspp_expirationdate: DevKit.Controls.DateTime;
			/** Comment Policy */
			mspp_feedbackpolicy: DevKit.Controls.OptionSet;
			/** Hidden From Sitemap */
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Unique identifier for Web File associated with Web Page. */
			mspp_image: DevKit.Controls.Lookup;
			/** Image URL */
			mspp_imageurl: DevKit.Controls.String;
			/** Defines whether this is the "root" record of this translated group of Web Pages. */
			mspp_isroot: DevKit.Controls.Boolean;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_masterwebpageid: DevKit.Controls.Lookup;
			/** Description */
			mspp_meta_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Link Set associated with Web Page. */
			mspp_navigation: DevKit.Controls.Lookup;
			/** Unique identifier for Page Template associated with Web Page. */
			mspp_pagetemplateid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			/** Partial URL */
			mspp_partialurl: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web Page. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Release Date */
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Lookup to root WebPage. */
			mspp_rootwebpageid: DevKit.Controls.Lookup;
			/** Summary */
			mspp_summary: DevKit.Controls.Memo;
			/** Summary */
			mspp_summary1: DevKit.Controls.Memo;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Multistep Form associated with Web Page. */
			mspp_webform: DevKit.Controls.Lookup;
			/** Language of this web page. */
			mspp_webpagelanguageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Web Page. */
			mspp_websiteid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0TabSections {
			/** Content */
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_2: DevKit.Controls.Section;
			/** Page Options */
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3: DevKit.Controls.Section;
			/** Miscellaneous */
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4: DevKit.Controls.Section;
			/** General */
			_CC6684CC_049C_4371_9AE1_58682459A75F: DevKit.Controls.Section;
			/** Copy (HTML) */
			mspp_webpage_copy_monacoEditor_text_section: DevKit.Controls.Section;
			/** Summary (HTML) */
			mspp_webpage_summary_monacoEditor_text_section: DevKit.Controls.Section;
			/** Localized Content */
			section_localized_content: DevKit.Controls.Section;
		}

		export interface Itab_7TabSections {
			/** Custom CSS */
			mspp_customcss_MonacoEditor_mspp_webpage_text_section: DevKit.Controls.Section;
			/** Custom JavaScript */
			tab_7_section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface I_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0Tab extends DevKit.Controls.ITab {
			Section: I_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0TabSections;
		}

		/** Advanced */
		export interface Itab_7Tab extends DevKit.Controls.ITab {
			Section: Itab_7TabSections;
		}

		export interface ITabs {
			/** General */
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0: I_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0Tab;
			/** Advanced */
			tab_7: Itab_7Tab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Localized Content */
			subgrid_localized_content: DevKit.Controls.Grid;
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
	 * Content_Page Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_webpage.Content_Page(executionContext)
	 */
	export class Content_Page extends FormBase<Content_Page.IBody, Content_Page.IHeader, Content_Page.IGrid, Content_Page.INavigation, Content_Page.IQuickForm, Content_Page.IProcess, Content_Page.IDialog> {
		/**
		 * Creates a Content_Page Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_alloworigin', 'mspp_category', 'mspp_copy', 'mspp_copy1', 'mspp_customcss', 'mspp_customcss1', 'mspp_customjavascript', 'mspp_customjavascript1', 'mspp_displaydate', 'mspp_displayorder', 'mspp_editorialcomments', 'mspp_enablerating', 'mspp_entityform', 'mspp_entitylist', 'mspp_excludefromsearch', 'mspp_expirationdate', 'mspp_feedbackpolicy', 'mspp_hiddenfromsitemap', 'mspp_image', 'mspp_imageurl', 'mspp_isroot', 'mspp_masterwebpageid', 'mspp_meta_description', 'mspp_name', 'mspp_navigation', 'mspp_pagetemplateid', 'mspp_parentpageid', 'mspp_partialurl', 'mspp_publishingstateid', 'mspp_releasedate', 'mspp_rootwebpageid', 'mspp_summary', 'mspp_summary1', 'mspp_title', 'mspp_webform', 'mspp_webpagelanguageid', 'mspp_websiteid'],
				header: [],
				tab: ['_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_2', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____CC6684CC_049C_4371_9AE1_58682459A75F', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0___mspp_webpage_copy_monacoEditor_text_section', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0___mspp_webpage_summary_monacoEditor_text_section', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0___section_localized_content', 'tab_7___mspp_customcss_MonacoEditor_mspp_webpage_text_section', 'tab_7___tab_7_section_1'],
				grid: ['subgrid_localized_content'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: mspp_webpage_Information
	// ========================================================================

	export namespace mspp_webpage_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			mspp_alloworigin: DevKit.Controls.String;
			/** Category */
			mspp_category: DevKit.Controls.OptionSet;
			/** Custom CSS */
			mspp_customcss: DevKit.Controls.Memo;
			/** Custom CSS */
			mspp_customcss1: DevKit.Controls.Memo;
			/** Custom JavaScript */
			mspp_customjavascript: DevKit.Controls.Memo;
			/** Custom JavaScript */
			mspp_customjavascript1: DevKit.Controls.Memo;
			/** Display Date */
			mspp_displaydate: DevKit.Controls.DateTime;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Editorial Comments */
			mspp_editorialcomments: DevKit.Controls.Memo;
			/** Setting this value to 'Yes' will allow users to rate the web page. */
			mspp_enablerating: DevKit.Controls.Boolean;
			/** Unique identifier for Entity Form associated with Web Page. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Unique identifier for Entity List associated with Web Page. */
			mspp_entitylist: DevKit.Controls.Lookup;
			/** Shows whether the webpage is excluded from the portal search. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			/** Expiration Date */
			mspp_expirationdate: DevKit.Controls.DateTime;
			/** Comment Policy */
			mspp_feedbackpolicy: DevKit.Controls.OptionSet;
			/** Hidden From Sitemap */
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Unique identifier for Web File associated with Web Page. */
			mspp_image: DevKit.Controls.Lookup;
			/** Image URL */
			mspp_imageurl: DevKit.Controls.String;
			/** Defines whether this is the "root" record of this translated group of Web Pages. */
			mspp_isroot: DevKit.Controls.Boolean;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_masterwebpageid: DevKit.Controls.Lookup;
			/** Description */
			mspp_meta_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Page Template associated with Web Page. */
			mspp_pagetemplateid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			/** Partial URL */
			mspp_partialurl: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web Page. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Release Date */
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Lookup to root WebPage. */
			mspp_rootwebpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Multistep Form associated with Web Page. */
			mspp_webform: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Web Page. */
			mspp_websiteid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0TabSections {
			/** Page Options */
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3: DevKit.Controls.Section;
			/** Miscellaneous */
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4: DevKit.Controls.Section;
			/** General */
			_CC6684CC_049C_4371_9AE1_58682459A75F: DevKit.Controls.Section;
			/** Localized Content */
			section_localized_content: DevKit.Controls.Section;
		}

		export interface Itab_5TabSections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
		}

		export interface Itab_7TabSections {
			/** Custom CSS */
			mspp_webpage_customcss_MonacoEditor: DevKit.Controls.Section;
			/** Custom JavaScript */
			tab_7_section_1: DevKit.Controls.Section;
		}

		export interface Itab_accesscontrolrulesTabSections {
			/** Section */
			tab_6_section_2: DevKit.Controls.Section;
		}

		export interface Itab_childfilesTabSections {
			/** Section */
			tab_6_section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface I_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0Tab extends DevKit.Controls.ITab {
			Section: I_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0TabSections;
		}

		/** Child Pages */
		export interface Itab_5Tab extends DevKit.Controls.ITab {
			Section: Itab_5TabSections;
		}

		/** Advanced */
		export interface Itab_7Tab extends DevKit.Controls.ITab {
			Section: Itab_7TabSections;
		}

		/** Access Control Rules */
		export interface Itab_accesscontrolrulesTab extends DevKit.Controls.ITab {
			Section: Itab_accesscontrolrulesTabSections;
		}

		/** Child Files */
		export interface Itab_childfilesTab extends DevKit.Controls.ITab {
			Section: Itab_childfilesTabSections;
		}

		export interface ITabs {
			/** General */
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0: I_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0Tab;
			/** Child Pages */
			tab_5: Itab_5Tab;
			/** Advanced */
			tab_7: Itab_7Tab;
			/** Access Control Rules */
			tab_accesscontrolrules: Itab_accesscontrolrulesTab;
			/** Child Files */
			tab_childfiles: Itab_childfilesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			childPages: DevKit.Controls.Grid;
			grid_accesscontrolrules: DevKit.Controls.Grid;
			grid_childfiles: DevKit.Controls.Grid;
			/** Localized Content */
			subgrid_localized_content: DevKit.Controls.Grid;
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
	 * mspp_webpage_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_webpage.mspp_webpage_Information(executionContext)
	 */
	export class mspp_webpage_Information extends FormBase<mspp_webpage_Information.IBody, mspp_webpage_Information.IHeader, mspp_webpage_Information.IGrid, mspp_webpage_Information.INavigation, mspp_webpage_Information.IQuickForm, mspp_webpage_Information.IProcess, mspp_webpage_Information.IDialog> {
		/**
		 * Creates a mspp_webpage_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_alloworigin', 'mspp_category', 'mspp_customcss', 'mspp_customcss1', 'mspp_customjavascript', 'mspp_customjavascript1', 'mspp_displaydate', 'mspp_displayorder', 'mspp_editorialcomments', 'mspp_enablerating', 'mspp_entityform', 'mspp_entitylist', 'mspp_excludefromsearch', 'mspp_expirationdate', 'mspp_feedbackpolicy', 'mspp_hiddenfromsitemap', 'mspp_image', 'mspp_imageurl', 'mspp_isroot', 'mspp_masterwebpageid', 'mspp_meta_description', 'mspp_name', 'mspp_pagetemplateid', 'mspp_parentpageid', 'mspp_partialurl', 'mspp_publishingstateid', 'mspp_releasedate', 'mspp_rootwebpageid', 'mspp_webform', 'mspp_websiteid'],
				header: [],
				tab: ['_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____CC6684CC_049C_4371_9AE1_58682459A75F', '_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0___section_localized_content', 'tab_5___tab_5_section_1', 'tab_7___mspp_webpage_customcss_MonacoEditor', 'tab_7___tab_7_section_1', 'tab_accesscontrolrules___tab_6_section_2', 'tab_childfiles___tab_6_section_1'],
				grid: ['childPages', 'grid_accesscontrolrules', 'grid_childfiles', 'subgrid_localized_content'],
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
			/** Category */
			mspp_category: DevKit.Controls.OptionSet;
			/** Copy */
			mspp_copy: DevKit.Controls.Memo;
			/** Copy */
			mspp_copy1: DevKit.Controls.Memo;
			/** Custom CSS */
			mspp_customcss: DevKit.Controls.Memo;
			/** Custom CSS */
			mspp_customcss1: DevKit.Controls.Memo;
			/** Custom JavaScript */
			mspp_customjavascript: DevKit.Controls.Memo;
			/** Custom JavaScript */
			mspp_customjavascript1: DevKit.Controls.Memo;
			/** Display Date */
			mspp_displaydate: DevKit.Controls.DateTime;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Editorial Comments */
			mspp_editorialcomments: DevKit.Controls.Memo;
			/** Setting this value to 'Yes' will allow users to rate the web page. */
			mspp_enablerating: DevKit.Controls.Boolean;
			/** Unique identifier for Entity Form associated with Web Page. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Unique identifier for Entity List associated with Web Page. */
			mspp_entitylist: DevKit.Controls.Lookup;
			/** Shows whether the webpage is excluded from the portal search. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			/** Expiration Date */
			mspp_expirationdate: DevKit.Controls.DateTime;
			/** Comment Policy */
			mspp_feedbackpolicy: DevKit.Controls.OptionSet;
			/** Hidden From Sitemap */
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Unique identifier for Web File associated with Web Page. */
			mspp_image: DevKit.Controls.Lookup;
			/** Image URL */
			mspp_imageurl: DevKit.Controls.String;
			/** Defines whether this is the "root" record of this translated group of Web Pages. */
			mspp_isroot: DevKit.Controls.Boolean;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_masterwebpageid: DevKit.Controls.Lookup;
			/** Description */
			mspp_meta_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Link Set associated with Web Page. */
			mspp_navigation: DevKit.Controls.Lookup;
			/** Unique identifier for Page Template associated with Web Page. */
			mspp_pagetemplateid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			/** Partial URL */
			mspp_partialurl: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web Page. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Release Date */
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Lookup to root WebPage. */
			mspp_rootwebpageid: DevKit.Controls.Lookup;
			/** Summary */
			mspp_summary: DevKit.Controls.Memo;
			/** Summary */
			mspp_summary1: DevKit.Controls.Memo;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Multistep Form associated with Web Page. */
			mspp_webform: DevKit.Controls.Lookup;
			/** Language of this web page. */
			mspp_webpagelanguageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Web Page. */
			mspp_websiteid: DevKit.Controls.Lookup;
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
			childPages: DevKit.Controls.Grid;
			grid_accesscontrolrules: DevKit.Controls.Grid;
			grid_childfiles: DevKit.Controls.Grid;
			/** Localized Content */
			subgrid_localized_content: DevKit.Controls.Grid;
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
	 * Usage: new mspp_webpage.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_webpage Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_alloworigin', 'mspp_category', 'mspp_copy', 'mspp_copy1', 'mspp_customcss', 'mspp_customcss1', 'mspp_customjavascript', 'mspp_customjavascript1', 'mspp_displaydate', 'mspp_displayorder', 'mspp_editorialcomments', 'mspp_enablerating', 'mspp_entityform', 'mspp_entitylist', 'mspp_excludefromsearch', 'mspp_expirationdate', 'mspp_feedbackpolicy', 'mspp_hiddenfromsitemap', 'mspp_image', 'mspp_imageurl', 'mspp_isroot', 'mspp_masterwebpageid', 'mspp_meta_description', 'mspp_name', 'mspp_navigation', 'mspp_pagetemplateid', 'mspp_parentpageid', 'mspp_partialurl', 'mspp_publishingstateid', 'mspp_releasedate', 'mspp_rootwebpageid', 'mspp_summary', 'mspp_summary1', 'mspp_title', 'mspp_webform', 'mspp_webpagelanguageid', 'mspp_websiteid'],
				header: [],
				tab: ['{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}___{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}_section_2', '{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}___{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}_section_3', '{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}___{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}_section_4', '{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}___{cc6684cc-049c-4371-9ae1-58682459a75f}', '{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}___mspp_webpage_copy_monacoEditor_text_section', '{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}___mspp_webpage_summary_monacoEditor_text_section', '{2f9f8f11-ec96-46b3-a8aa-b5020da0eac0}___section_localized_content', 'tab_5___tab_5_section_1', 'tab_7___mspp_customcss_MonacoEditor_mspp_webpage_text_section', 'tab_7___mspp_webpage_customcss_MonacoEditor', 'tab_7___tab_7_section_1', 'tab_accesscontrolrules___tab_6_section_2', 'tab_childfiles___tab_6_section_1'],
				grid: ['childPages', 'grid_accesscontrolrules', 'grid_childfiles', 'subgrid_localized_content'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

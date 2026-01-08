/**
 * mspp_website.form.ts - mspp_website Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_website containing form classes: mspp_website.FormClassName
 * 3. Aggregate Form class: mspp_website.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_website {

	// ========================================================================
	// Form: mspp_website_Information
	// ========================================================================

	export namespace mspp_website_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Lookup to Website Language - the current default language of the website */
			mspp_defaultlanguage: DevKit.Controls.Lookup;
			/** Web Template to use as Website footer content. */
			mspp_footerwebtemplateid: DevKit.Controls.Lookup;
			/** Web Template to use as Website header content. */
			mspp_headerwebtemplateid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Website. */
			mspp_parentwebsiteid: DevKit.Controls.Lookup;
			/** Partial URL */
			mspp_partialurl: DevKit.Controls.String;
			/** Tracks the primary domain name of the Portal */
			mspp_primarydomainname: DevKit.Controls.String;
			/** Language */
			mspp_website_language: DevKit.Controls.Integer;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_A36E3E44_6924_4722_8D78_44175EAD950BTabSections {
			/** General */
			_139917FD_C4F2_411C_BCAB_D810AD4B3A5A: DevKit.Controls.Section;
			/** Options */
			_A36E3E44_6924_4722_8D78_44175EAD950B_SECTION_2: DevKit.Controls.Section;
			/** Section */
			tab_13_section_2: DevKit.Controls.Section;
		}

		export interface Itab_advancedformsTabSections {
			/** Section */
			tab_12_section_3: DevKit.Controls.Section;
		}

		export interface Itab_basicformsTabSections {
			/** Section */
			tab_11_section_2: DevKit.Controls.Section;
		}

		export interface Itab_childpagesTabSections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
		}

		export interface Itab_listsTabSections {
			/** Section */
			tab_10_section_2: DevKit.Controls.Section;
		}

		export interface Itab_pagetemplatesTabSections {
			/** Section */
			tab_10_section_1: DevKit.Controls.Section;
		}

		export interface Itab_rootpagesTabSections {
			/** Section */
			tab_12_section_2: DevKit.Controls.Section;
		}

		export interface Itab_sitemarkersTabSections {
			/** Section */
			tab_9_section_1: DevKit.Controls.Section;
		}

		export interface Itab_sitesettingsTabSections {
			/** Section */
			tab_8_section_1: DevKit.Controls.Section;
		}

		export interface Itab_websiteaccesspermissionsTabSections {
			/** Section */
			tab_12_section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface I_A36E3E44_6924_4722_8D78_44175EAD950BTab extends DevKit.Controls.ITab {
			Section: I_A36E3E44_6924_4722_8D78_44175EAD950BTabSections;
		}

		/** Multistep Forms */
		export interface Itab_advancedformsTab extends DevKit.Controls.ITab {
			Section: Itab_advancedformsTabSections;
		}

		/** Basic Forms */
		export interface Itab_basicformsTab extends DevKit.Controls.ITab {
			Section: Itab_basicformsTabSections;
		}

		/** Child Pages */
		export interface Itab_childpagesTab extends DevKit.Controls.ITab {
			Section: Itab_childpagesTabSections;
		}

		/** Lists */
		export interface Itab_listsTab extends DevKit.Controls.ITab {
			Section: Itab_listsTabSections;
		}

		/** Page Templates */
		export interface Itab_pagetemplatesTab extends DevKit.Controls.ITab {
			Section: Itab_pagetemplatesTabSections;
		}

		/** Root Pages */
		export interface Itab_rootpagesTab extends DevKit.Controls.ITab {
			Section: Itab_rootpagesTabSections;
		}

		/** Site Markers */
		export interface Itab_sitemarkersTab extends DevKit.Controls.ITab {
			Section: Itab_sitemarkersTabSections;
		}

		/** Site Settings */
		export interface Itab_sitesettingsTab extends DevKit.Controls.ITab {
			Section: Itab_sitesettingsTabSections;
		}

		/** Website Access Permissions */
		export interface Itab_websiteaccesspermissionsTab extends DevKit.Controls.ITab {
			Section: Itab_websiteaccesspermissionsTabSections;
		}

		export interface ITabs {
			/** General */
			_A36E3E44_6924_4722_8D78_44175EAD950B: I_A36E3E44_6924_4722_8D78_44175EAD950BTab;
			/** Multistep Forms */
			tab_advancedforms: Itab_advancedformsTab;
			/** Basic Forms */
			tab_basicforms: Itab_basicformsTab;
			/** Child Pages */
			tab_childpages: Itab_childpagesTab;
			/** Lists */
			tab_lists: Itab_listsTab;
			/** Page Templates */
			tab_pagetemplates: Itab_pagetemplatesTab;
			/** Root Pages */
			tab_rootpages: Itab_rootpagesTab;
			/** Site Markers */
			tab_sitemarkers: Itab_sitemarkersTab;
			/** Site Settings */
			tab_sitesettings: Itab_sitesettingsTab;
			/** Website Access Permissions */
			tab_websiteaccesspermissions: Itab_websiteaccesspermissionsTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			grid_advancedforms: DevKit.Controls.Grid;
			grid_basicforms: DevKit.Controls.Grid;
			grid_childpages: DevKit.Controls.Grid;
			grid_lists: DevKit.Controls.Grid;
			grid_pagetemplates: DevKit.Controls.Grid;
			grid_rootpages: DevKit.Controls.Grid;
			grid_sitemarkers: DevKit.Controls.Grid;
			grid_sitesettings: DevKit.Controls.Grid;
			grid_websiteaccesspermissions: DevKit.Controls.Grid;
			/** Supported Languages */
			SupportedLanguagesSubgrid: DevKit.Controls.Grid;
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
	 * mspp_website_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_website.mspp_website_Information(executionContext)
	 */
	export class mspp_website_Information extends FormBase<mspp_website_Information.IBody, mspp_website_Information.IHeader, mspp_website_Information.IGrid, mspp_website_Information.INavigation, mspp_website_Information.IQuickForm, mspp_website_Information.IProcess, mspp_website_Information.IDialog> {
		/**
		 * Creates a mspp_website_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_defaultlanguage', 'mspp_footerwebtemplateid', 'mspp_headerwebtemplateid', 'mspp_name', 'mspp_parentwebsiteid', 'mspp_partialurl', 'mspp_primarydomainname', 'mspp_website_language'],
				header: [],
				tab: ['_A36E3E44_6924_4722_8D78_44175EAD950B____139917FD_C4F2_411C_BCAB_D810AD4B3A5A', '_A36E3E44_6924_4722_8D78_44175EAD950B____A36E3E44_6924_4722_8D78_44175EAD950B_SECTION_2', '_A36E3E44_6924_4722_8D78_44175EAD950B___tab_13_section_2', 'tab_advancedforms___tab_12_section_3', 'tab_basicforms___tab_11_section_2', 'tab_childpages___tab_5_section_1', 'tab_lists___tab_10_section_2', 'tab_pagetemplates___tab_10_section_1', 'tab_rootpages___tab_12_section_2', 'tab_sitemarkers___tab_9_section_1', 'tab_sitesettings___tab_8_section_1', 'tab_websiteaccesspermissions___tab_12_section_1'],
				grid: ['grid_advancedforms', 'grid_basicforms', 'grid_childpages', 'grid_lists', 'grid_pagetemplates', 'grid_rootpages', 'grid_sitemarkers', 'grid_sitesettings', 'grid_websiteaccesspermissions', 'SupportedLanguagesSubgrid'],
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
			/** Lookup to Website Language - the current default language of the website */
			mspp_defaultlanguage: DevKit.Controls.Lookup;
			/** Web Template to use as Website footer content. */
			mspp_footerwebtemplateid: DevKit.Controls.Lookup;
			/** Web Template to use as Website header content. */
			mspp_headerwebtemplateid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Website. */
			mspp_parentwebsiteid: DevKit.Controls.Lookup;
			/** Partial URL */
			mspp_partialurl: DevKit.Controls.String;
			/** Tracks the primary domain name of the Portal */
			mspp_primarydomainname: DevKit.Controls.String;
			/** Language */
			mspp_website_language: DevKit.Controls.Integer;
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
			grid_advancedforms: DevKit.Controls.Grid;
			grid_basicforms: DevKit.Controls.Grid;
			grid_childpages: DevKit.Controls.Grid;
			grid_lists: DevKit.Controls.Grid;
			grid_pagetemplates: DevKit.Controls.Grid;
			grid_rootpages: DevKit.Controls.Grid;
			grid_sitemarkers: DevKit.Controls.Grid;
			grid_sitesettings: DevKit.Controls.Grid;
			grid_websiteaccesspermissions: DevKit.Controls.Grid;
			/** Supported Languages */
			SupportedLanguagesSubgrid: DevKit.Controls.Grid;
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
	 * Usage: new mspp_website.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_website Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_defaultlanguage', 'mspp_footerwebtemplateid', 'mspp_headerwebtemplateid', 'mspp_name', 'mspp_parentwebsiteid', 'mspp_partialurl', 'mspp_primarydomainname', 'mspp_website_language'],
				header: [],
				tab: ['{a36e3e44-6924-4722-8d78-44175ead950b}___{139917fd-c4f2-411c-bcab-d810ad4b3a5a}', '{a36e3e44-6924-4722-8d78-44175ead950b}___{a36e3e44-6924-4722-8d78-44175ead950b}_section_2', '{a36e3e44-6924-4722-8d78-44175ead950b}___tab_13_section_2', 'tab_advancedforms___tab_12_section_3', 'tab_basicforms___tab_11_section_2', 'tab_childpages___tab_5_section_1', 'tab_lists___tab_10_section_2', 'tab_pagetemplates___tab_10_section_1', 'tab_rootpages___tab_12_section_2', 'tab_sitemarkers___tab_9_section_1', 'tab_sitesettings___tab_8_section_1', 'tab_websiteaccesspermissions___tab_12_section_1'],
				grid: ['grid_advancedforms', 'grid_basicforms', 'grid_childpages', 'grid_lists', 'grid_pagetemplates', 'grid_rootpages', 'grid_sitemarkers', 'grid_sitesettings', 'grid_websiteaccesspermissions', 'SupportedLanguagesSubgrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

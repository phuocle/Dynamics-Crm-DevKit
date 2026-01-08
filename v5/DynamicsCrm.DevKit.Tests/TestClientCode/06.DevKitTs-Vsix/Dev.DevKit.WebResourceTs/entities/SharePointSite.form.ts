/**
 * SharePointSite.form.ts - SharePointSite Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SharePointSite containing form classes: SharePointSite.FormClassName
 * 3. Aggregate Form class: SharePointSite.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SharePointSite {

	// ========================================================================
	// Form: SharePointSite_Information
	// ========================================================================

	export namespace SharePointSite_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Absolute URL of the SharePoint site. */
			AbsoluteURL: DevKit.Controls.String;
			/** Description of the SharePoint site record. */
			Description: DevKit.Controls.Memo;
			/** Indicates if SharePoint Grid is present or not. */
			IsGridPresent: DevKit.Controls.Boolean;
			/** Allows embedding of Power BI Reports available in this SharePoint site. */
			IsPowerBISite: DevKit.Controls.Boolean;
			/** Date and time when the SharePoint site URL was last validated. */
			LastValidated: DevKit.Controls.DateTime;
			/** Name of the SharePoint site record. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the SharePoint site. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the parent SharePoint site. */
			ParentSite: DevKit.Controls.Lookup;
			/** Relative URL of the SharePoint site. */
			RelativeUrl: DevKit.Controls.String;
			/** Validation status of the SharePoint site URL. */
			ValidationStatus: DevKit.Controls.OptionSet;
			/** Reason for validation status of the URL */
			ValidationStatusErrorCode: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Section 1 */
			section_1: DevKit.Controls.Section;
			/** URL Options */
			url_option: DevKit.Controls.Section;
			/** URL Validation */
			url_validation: DevKit.Controls.Section;
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
			navSharePointSubSites: DevKit.Controls.NavigationItem;
			navSubDocumentLocations: DevKit.Controls.NavigationItem;
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
	 * SharePointSite_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new SharePointSite.SharePointSite_Information(executionContext)
	 */
	export class SharePointSite_Information extends FormBase<SharePointSite_Information.IBody, SharePointSite_Information.IHeader, SharePointSite_Information.IGrid, SharePointSite_Information.INavigation, SharePointSite_Information.IQuickForm, SharePointSite_Information.IProcess, SharePointSite_Information.IDialog> {
		/**
		 * Creates a SharePointSite_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AbsoluteURL', 'Description', 'IsGridPresent', 'IsPowerBISite', 'LastValidated', 'Name', 'OwnerId', 'ParentSite', 'RelativeUrl', 'ValidationStatus', 'ValidationStatusErrorCode'],
				header: [],
				tab: ['general___section_1', 'general___url_option', 'general___url_validation'],
				grid: [],
				navigation: ['navSharePointSubSites', 'navSubDocumentLocations'],
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
			/** Absolute URL of the SharePoint site. */
			AbsoluteURL: DevKit.Controls.String;
			/** Description of the SharePoint site record. */
			Description: DevKit.Controls.Memo;
			/** Indicates if SharePoint Grid is present or not. */
			IsGridPresent: DevKit.Controls.Boolean;
			/** Allows embedding of Power BI Reports available in this SharePoint site. */
			IsPowerBISite: DevKit.Controls.Boolean;
			/** Date and time when the SharePoint site URL was last validated. */
			LastValidated: DevKit.Controls.DateTime;
			/** Name of the SharePoint site record. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the SharePoint site. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the parent SharePoint site. */
			ParentSite: DevKit.Controls.Lookup;
			/** Relative URL of the SharePoint site. */
			RelativeUrl: DevKit.Controls.String;
			/** Validation status of the SharePoint site URL. */
			ValidationStatus: DevKit.Controls.OptionSet;
			/** Reason for validation status of the URL */
			ValidationStatusErrorCode: DevKit.Controls.OptionSet;
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
			navSharePointSubSites: DevKit.Controls.NavigationItem;
			navSubDocumentLocations: DevKit.Controls.NavigationItem;
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
	 * Usage: new SharePointSite.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SharePointSite Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AbsoluteURL', 'Description', 'IsGridPresent', 'IsPowerBISite', 'LastValidated', 'Name', 'OwnerId', 'ParentSite', 'RelativeUrl', 'ValidationStatus', 'ValidationStatusErrorCode'],
				header: [],
				tab: ['general___section 1', 'general___url option', 'general___url validation'],
				grid: [],
				navigation: ['navSharePointSubSites', 'navSubDocumentLocations'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

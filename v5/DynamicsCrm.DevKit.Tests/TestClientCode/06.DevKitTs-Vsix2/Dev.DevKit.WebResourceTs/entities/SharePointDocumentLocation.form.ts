/**
 * SharePointDocumentLocation.form.ts - SharePointDocumentLocation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SharePointDocumentLocation containing form classes: SharePointDocumentLocation.FormClassName
 * 3. Aggregate Form class: SharePointDocumentLocation.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SharePointDocumentLocation {

	// ========================================================================
	// Form: SharePointDocumentLocation_Information
	// ========================================================================

	export namespace SharePointDocumentLocation_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Absolute URL of the SharePoint document location. */
			AbsoluteURL: DevKit.Controls.String;
			/** Description of the SharePoint document location record. */
			Description: DevKit.Controls.Memo;
			/** Location type of the SharePoint document location. */
			LocationType: DevKit.Controls.OptionSet;
			/** Name of the SharePoint document location record. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the SharePoint document location record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the parent site or location. */
			ParentSiteOrLocation: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the SharePoint document location record is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Relative URL of the SharePoint document location. */
			RelativeUrl: DevKit.Controls.String;
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
			_272EB814_0769_5EBE_3ED1_E95A0B16853E: DevKit.Controls.Section;
			/** URL Options */
			url_option: DevKit.Controls.Section;
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
	 * SharePointDocumentLocation_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new SharePointDocumentLocation.SharePointDocumentLocation_Information(executionContext)
	 */
	export class SharePointDocumentLocation_Information extends FormBase<SharePointDocumentLocation_Information.IBody, SharePointDocumentLocation_Information.IHeader, SharePointDocumentLocation_Information.IGrid, SharePointDocumentLocation_Information.INavigation, SharePointDocumentLocation_Information.IQuickForm, SharePointDocumentLocation_Information.IProcess, SharePointDocumentLocation_Information.IDialog> {
		/**
		 * Creates a SharePointDocumentLocation_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AbsoluteURL', 'Description', 'LocationType', 'Name', 'OwnerId', 'ParentSiteOrLocation', 'RegardingObjectId', 'RelativeUrl'],
				header: [],
				tab: ['general____272EB814_0769_5EBE_3ED1_E95A0B16853E', 'general___url_option'],
				grid: [],
				navigation: ['navSubDocumentLocations'],
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
			/** Absolute URL of the SharePoint document location. */
			AbsoluteURL: DevKit.Controls.String;
			/** Description of the SharePoint document location record. */
			Description: DevKit.Controls.Memo;
			/** Location type of the SharePoint document location. */
			LocationType: DevKit.Controls.OptionSet;
			/** Name of the SharePoint document location record. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the SharePoint document location record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the parent site or location. */
			ParentSiteOrLocation: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the SharePoint document location record is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Relative URL of the SharePoint document location. */
			RelativeUrl: DevKit.Controls.String;
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
	 * Usage: new SharePointDocumentLocation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SharePointDocumentLocation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AbsoluteURL', 'Description', 'LocationType', 'Name', 'OwnerId', 'ParentSiteOrLocation', 'RegardingObjectId', 'RelativeUrl'],
				header: [],
				tab: ['general___{272eb814-0769-5ebe-3ed1-e95a0b16853e}', 'general___url option'],
				grid: [],
				navigation: ['navSubDocumentLocations'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

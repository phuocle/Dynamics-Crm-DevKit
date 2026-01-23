/**
 * MobileOfflineProfileItem.form.ts - MobileOfflineProfileItem Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace MobileOfflineProfileItem containing form classes: MobileOfflineProfileItem.FormClassName
 * 3. Aggregate Form class: MobileOfflineProfileItem.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace MobileOfflineProfileItem {

	// ========================================================================
	// Form: Mobile_Offline_Profile_Item
	// ========================================================================

	export namespace Mobile_Offline_Profile_Item {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the name of the mobile offline profile item. */
			Name: DevKit.Controls.String;
			/** Specify data download filter for selected entity */
			RecordDistributionCriteria: DevKit.Controls.OptionSet;
			/** Download my records */
			RecordsOwnedByMe: DevKit.Controls.Boolean;
			/** Download my business unit's records */
			RecordsOwnedByMyBusinessUnit: DevKit.Controls.Boolean;
			/** Download my team's records */
			RecordsOwnedByMyTeam: DevKit.Controls.Boolean;
			/** Mobile offline enabled entity */
			SelectedEntityTypeCode: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGENERALINFORMATION_TABTabSections {
			Entity_Selection: DevKit.Controls.Section;
			MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS: DevKit.Controls.Section;
		}

		/** General Information */
		export interface IGENERALINFORMATION_TABTab extends DevKit.Controls.ITab {
			Section: IGENERALINFORMATION_TABTabSections;
		}

		export interface ITabs {
			/** General Information */
			GENERALINFORMATION_TAB: IGENERALINFORMATION_TABTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** MOBILE OFFLINE PROFILE ITEM ASSOCIATION DETAILS */
			profileassociationgrid: DevKit.Controls.Grid;
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
	 * Mobile_Offline_Profile_Item Form class
	 * Provides typed access to all form controls
	 * Usage: new MobileOfflineProfileItem.Mobile_Offline_Profile_Item(executionContext)
	 */
	export class Mobile_Offline_Profile_Item extends FormBase<Mobile_Offline_Profile_Item.IBody, Mobile_Offline_Profile_Item.IHeader, Mobile_Offline_Profile_Item.IGrid, Mobile_Offline_Profile_Item.INavigation, Mobile_Offline_Profile_Item.IQuickForm, Mobile_Offline_Profile_Item.IProcess, Mobile_Offline_Profile_Item.IDialog> {
		/**
		 * Creates a Mobile_Offline_Profile_Item Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'Name', 'RecordDistributionCriteria', 'RecordsOwnedByMe', 'RecordsOwnedByMyBusinessUnit', 'RecordsOwnedByMyTeam', 'SelectedEntityTypeCode'],
				header: [],
				tab: ['GENERALINFORMATION_TAB___Entity_Selection', 'GENERALINFORMATION_TAB___MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS'],
				grid: ['profileassociationgrid'],
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
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the name of the mobile offline profile item. */
			Name: DevKit.Controls.String;
			/** Specify data download filter for selected entity */
			RecordDistributionCriteria: DevKit.Controls.OptionSet;
			/** Download my records */
			RecordsOwnedByMe: DevKit.Controls.Boolean;
			/** Download my business unit's records */
			RecordsOwnedByMyBusinessUnit: DevKit.Controls.Boolean;
			/** Download my team's records */
			RecordsOwnedByMyTeam: DevKit.Controls.Boolean;
			/** Mobile offline enabled entity */
			SelectedEntityTypeCode: DevKit.Controls.String;
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
			/** MOBILE OFFLINE PROFILE ITEM ASSOCIATION DETAILS */
			profileassociationgrid: DevKit.Controls.Grid;
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
	 * Usage: new MobileOfflineProfileItem.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate MobileOfflineProfileItem Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'Name', 'RecordDistributionCriteria', 'RecordsOwnedByMe', 'RecordsOwnedByMyBusinessUnit', 'RecordsOwnedByMyTeam', 'SelectedEntityTypeCode'],
				header: [],
				tab: ['GENERALINFORMATION_TAB___Entity Selection', 'GENERALINFORMATION_TAB___MOBILE OFFLINE PROFILE ITEM ASSOCIATIONS'],
				grid: ['profileassociationgrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

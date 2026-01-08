/**
 * MobileOfflineProfileItemAssociation.form.ts - MobileOfflineProfileItemAssociation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace MobileOfflineProfileItemAssociation containing form classes: MobileOfflineProfileItemAssociation.FormClassName
 * 3. Aggregate Form class: MobileOfflineProfileItemAssociation.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace MobileOfflineProfileItemAssociation {

	// ========================================================================
	// Form: Mobile_Offline_Profile_Item_Association
	// ========================================================================

	export namespace Mobile_Offline_Profile_Item_Association {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the name of the mobile offline profile item association. */
			Name: DevKit.Controls.String;
			/** Display name of entity relationship */
			RelationshipName: DevKit.Controls.String;
			/** List of relationships of entity selected in parent profile item */
			SelectedRelationShipsSchema: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGENERALINFORMATION_TABTabSections {
			General: DevKit.Controls.Section;
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
	 * Mobile_Offline_Profile_Item_Association Form class
	 * Provides typed access to all form controls
	 * Usage: new MobileOfflineProfileItemAssociation.Mobile_Offline_Profile_Item_Association(executionContext)
	 */
	export class Mobile_Offline_Profile_Item_Association extends FormBase<Mobile_Offline_Profile_Item_Association.IBody, Mobile_Offline_Profile_Item_Association.IHeader, Mobile_Offline_Profile_Item_Association.IGrid, Mobile_Offline_Profile_Item_Association.INavigation, Mobile_Offline_Profile_Item_Association.IQuickForm, Mobile_Offline_Profile_Item_Association.IProcess, Mobile_Offline_Profile_Item_Association.IDialog> {
		/**
		 * Creates a Mobile_Offline_Profile_Item_Association Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'Name', 'RelationshipName', 'SelectedRelationShipsSchema'],
				header: [],
				tab: ['GENERALINFORMATION_TAB___General'],
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
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the name of the mobile offline profile item association. */
			Name: DevKit.Controls.String;
			/** Display name of entity relationship */
			RelationshipName: DevKit.Controls.String;
			/** List of relationships of entity selected in parent profile item */
			SelectedRelationShipsSchema: DevKit.Controls.OptionSet;
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
	 * Usage: new MobileOfflineProfileItemAssociation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate MobileOfflineProfileItemAssociation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'Name', 'RelationshipName', 'SelectedRelationShipsSchema'],
				header: [],
				tab: ['GENERALINFORMATION_TAB___General'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

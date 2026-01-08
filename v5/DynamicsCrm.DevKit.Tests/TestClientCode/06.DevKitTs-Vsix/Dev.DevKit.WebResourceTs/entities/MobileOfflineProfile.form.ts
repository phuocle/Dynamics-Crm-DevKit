/**
 * MobileOfflineProfile.form.ts - MobileOfflineProfile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace MobileOfflineProfile containing form classes: MobileOfflineProfile.FormClassName
 * 3. Aggregate Form class: MobileOfflineProfile.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace MobileOfflineProfile {

	// ========================================================================
	// Form: Mobile_Offline_Profile
	// ========================================================================

	export namespace Mobile_Offline_Profile {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Enter a description of the mobile offline profile. */
			Description: DevKit.Controls.Memo;
			/** Enter the name of the mobile offline profile. */
			Name: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGENERALINFORMATION_TABTabSections {
			MOBILE_OFFLINE_PROFILE_ITEMS: DevKit.Controls.Section;
			profile_users: DevKit.Controls.Section;
			/** GENERAL INFORMATION */
			property_bag_properties_1: DevKit.Controls.Section;
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
			/** MOBILE OFFLINE PROFILE ITEM DETAILS */
			profileitemgrid: DevKit.Controls.Grid;
			/** USERS */
			SystemUserGrid: DevKit.Controls.Grid;
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
	 * Mobile_Offline_Profile Form class
	 * Provides typed access to all form controls
	 * Usage: new MobileOfflineProfile.Mobile_Offline_Profile(executionContext)
	 */
	export class Mobile_Offline_Profile extends FormBase<Mobile_Offline_Profile.IBody, Mobile_Offline_Profile.IHeader, Mobile_Offline_Profile.IGrid, Mobile_Offline_Profile.INavigation, Mobile_Offline_Profile.IQuickForm, Mobile_Offline_Profile.IProcess, Mobile_Offline_Profile.IDialog> {
		/**
		 * Creates a Mobile_Offline_Profile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name'],
				header: [],
				tab: ['GENERALINFORMATION_TAB___MOBILE_OFFLINE_PROFILE_ITEMS', 'GENERALINFORMATION_TAB___profile_users', 'GENERALINFORMATION_TAB___property_bag_properties_1'],
				grid: ['profileitemgrid', 'SystemUserGrid'],
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
			/** Enter a description of the mobile offline profile. */
			Description: DevKit.Controls.Memo;
			/** Enter the name of the mobile offline profile. */
			Name: DevKit.Controls.String;
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
			/** MOBILE OFFLINE PROFILE ITEM DETAILS */
			profileitemgrid: DevKit.Controls.Grid;
			/** USERS */
			SystemUserGrid: DevKit.Controls.Grid;
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
	 * Usage: new MobileOfflineProfile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate MobileOfflineProfile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name'],
				header: [],
				tab: ['GENERALINFORMATION_TAB___MOBILE OFFLINE PROFILE ITEMS', 'GENERALINFORMATION_TAB___profile_users', 'GENERALINFORMATION_TAB___property_bag_properties_1'],
				grid: ['profileitemgrid', 'SystemUserGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

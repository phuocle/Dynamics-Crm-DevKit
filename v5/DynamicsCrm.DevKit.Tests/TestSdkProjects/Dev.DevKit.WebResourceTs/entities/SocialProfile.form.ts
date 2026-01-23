/**
 * SocialProfile.form.ts - SocialProfile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SocialProfile containing form classes: SocialProfile.FormClassName
 * 3. Aggregate Form class: SocialProfile.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SocialProfile {

	// ========================================================================
	// Form: Social_Profile
	// ========================================================================

	export namespace Social_Profile {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Controls.Boolean;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Controls.Lookup;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Controls.String;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Controls.Double;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}

		export interface ITabs {
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
	 * Social_Profile Form class
	 * Provides typed access to all form controls
	 * Usage: new SocialProfile.Social_Profile(executionContext)
	 */
	export class Social_Profile extends FormBase<Social_Profile.IBody, Social_Profile.IHeader, Social_Profile.IGrid, Social_Profile.INavigation, Social_Profile.IQuickForm, Social_Profile.IProcess, Social_Profile.IDialog> {
		/**
		 * Creates a Social_Profile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Blocked', 'CustomerId', 'ProfileLink', 'ProfileName'],
				header: ['Community', 'InfluenceScore', 'OwnerId'],
				tab: [],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Social_Profile_for_Interactive_experience
	// ========================================================================

	export namespace Social_Profile_for_Interactive_experience {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Controls.Boolean;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Controls.Lookup;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Controls.String;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Controls.Double;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}

		export interface Itab_2TabSections {
			/** GENERAL INFORMATION */
			tab_2_section_1: DevKit.Controls.Section;
			/** SOCIAL PROFILE */
			tab_2_section_2: DevKit.Controls.Section;
			/** CASES */
			tab_2_section_3: DevKit.Controls.Section;
			tab_2_section_4: DevKit.Controls.Section;
		}

		/** SOCIAL PROFILE */
		export interface Itab_2Tab extends DevKit.Controls.ITab {
			Section: Itab_2TabSections;
		}

		export interface ITabs {
			/** SOCIAL PROFILE */
			tab_2: Itab_2Tab;
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
			customer_qfc: DevKit.Controls.IQuickView & {
				Body: Icustomer_qfcBody;
			};
		}

		/**
		 * customer_qfc quick view control body interface
		 */
		export interface Icustomer_qfcBody {
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.QuickView;
			/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.QuickView;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.QuickView;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.QuickView;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.QuickView;
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
	 * Social_Profile_for_Interactive_experience Form class
	 * Provides typed access to all form controls
	 * Usage: new SocialProfile.Social_Profile_for_Interactive_experience(executionContext)
	 */
	export class Social_Profile_for_Interactive_experience extends FormBase<Social_Profile_for_Interactive_experience.IBody, Social_Profile_for_Interactive_experience.IHeader, Social_Profile_for_Interactive_experience.IGrid, Social_Profile_for_Interactive_experience.INavigation, Social_Profile_for_Interactive_experience.IQuickForm, Social_Profile_for_Interactive_experience.IProcess, Social_Profile_for_Interactive_experience.IDialog> {
		/**
		 * Creates a Social_Profile_for_Interactive_experience Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Blocked', 'CustomerId', 'ProfileLink', 'ProfileName'],
				header: ['Community', 'InfluenceScore', 'OwnerId'],
				tab: ['tab_2___tab_2_section_1', 'tab_2___tab_2_section_2', 'tab_2___tab_2_section_3', 'tab_2___tab_2_section_4'],
				grid: [],
				navigation: [],
				quick: ['customer_qfc___EMailAddress1', 'customer_qfc___FullName', 'customer_qfc___MobilePhone', 'customer_qfc___ParentCustomerId', 'customer_qfc___Telephone1'],
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
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Controls.Boolean;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Controls.Lookup;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Controls.String;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Controls.Double;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
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
			customer_qfc: DevKit.Controls.IQuickView & {
				Body: Icustomer_qfcBody;
			};
		}

		export interface Icustomer_qfcBody {
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.QuickView;
			/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.QuickView;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.QuickView;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.QuickView;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.QuickView;
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
	 * Usage: new SocialProfile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SocialProfile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Blocked', 'CustomerId', 'ProfileLink', 'ProfileName'],
				header: ['Community', 'InfluenceScore', 'OwnerId'],
				tab: ['tab_2___tab_2_section_1', 'tab_2___tab_2_section_2', 'tab_2___tab_2_section_3', 'tab_2___tab_2_section_4'],
				grid: [],
				navigation: [],
				quick: ['customer_qfc___EMailAddress1', 'customer_qfc___FullName', 'customer_qfc___MobilePhone', 'customer_qfc___ParentCustomerId', 'customer_qfc___Telephone1'],
				bpf: [],
				dialog: []
			});
		}
	}

}

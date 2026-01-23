/**
 * SocialActivity.form.ts - SocialActivity Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SocialActivity containing form classes: SocialActivity.FormClassName
 * 3. Aggregate Form class: SocialActivity.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SocialActivity {

	// ========================================================================
	// Form: Social_Activity
	// ========================================================================

	export namespace Social_Activity {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Date and time when the activity was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Controls.Memo;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** For internal use only. */
			PostedOn: DevKit.Controls.DateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Controls.Lookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Controls.OptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Controls.String;
			/** Shows the URL of the post. */
			PostURL: DevKit.Controls.String;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Controls.Double;
			/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
			StatusCode: DevKit.Controls.OptionSet;
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
	 * Social_Activity Form class
	 * Provides typed access to all form controls
	 * Usage: new SocialActivity.Social_Activity(executionContext)
	 */
	export class Social_Activity extends FormBase<Social_Activity.IBody, Social_Activity.IHeader, Social_Activity.IGrid, Social_Activity.INavigation, Social_Activity.IQuickForm, Social_Activity.IProcess, Social_Activity.IDialog> {
		/**
		 * Creates a Social_Activity Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'Description', 'ModifiedOn', 'OwnerId', 'PostedOn', 'PostFromProfileId', 'PostMessageType', 'PostToProfileId', 'PostURL', 'RegardingObjectId', 'Subject'],
				header: ['Community', 'PriorityCode', 'SentimentValue', 'StatusCode'],
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
	// Form: Social_Activity_for_Interactive_experience
	// ========================================================================

	export namespace Social_Activity_for_Interactive_experience {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Controls.Memo;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** For internal use only. */
			PostedOn: DevKit.Controls.DateTime;
			/** For internal use only. */
			PostedOn1: DevKit.Controls.DateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Controls.Lookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Controls.OptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Controls.String;
			/** Shows the URL of the post. */
			PostURL: DevKit.Controls.String;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Controls.Double;
			/** Shows whether the social activity completed. This field is read-only. */
			StateCode: DevKit.Controls.OptionSet;
		}

		export interface Itab_2TabSections {
			/** Post Description */
			Description: DevKit.Controls.Section;
			/** GENERAL INFORMATION */
			tab_2_section_1: DevKit.Controls.Section;
			/** DETAILS */
			tab_2_section_2: DevKit.Controls.Section;
		}

		/** Social Activity */
		export interface Itab_2Tab extends DevKit.Controls.ITab {
			Section: Itab_2TabSections;
		}

		export interface ITabs {
			/** Social Activity */
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
	 * Social_Activity_for_Interactive_experience Form class
	 * Provides typed access to all form controls
	 * Usage: new SocialActivity.Social_Activity_for_Interactive_experience(executionContext)
	 */
	export class Social_Activity_for_Interactive_experience extends FormBase<Social_Activity_for_Interactive_experience.IBody, Social_Activity_for_Interactive_experience.IHeader, Social_Activity_for_Interactive_experience.IGrid, Social_Activity_for_Interactive_experience.INavigation, Social_Activity_for_Interactive_experience.IQuickForm, Social_Activity_for_Interactive_experience.IProcess, Social_Activity_for_Interactive_experience.IDialog> {
		/**
		 * Creates a Social_Activity_for_Interactive_experience Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'ModifiedOn', 'OwnerId', 'PostedOn', 'PostedOn1', 'PostFromProfileId', 'PostMessageType', 'PostToProfileId', 'PostURL', 'RegardingObjectId', 'RegardingObjectId1', 'Subject'],
				header: ['Community', 'PriorityCode', 'SentimentValue', 'StateCode'],
				tab: ['tab_2___Description', 'tab_2___tab_2_section_1', 'tab_2___tab_2_section_2'],
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
			/** Date and time when the activity was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Controls.Memo;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** For internal use only. */
			PostedOn: DevKit.Controls.DateTime;
			/** For internal use only. */
			PostedOn1: DevKit.Controls.DateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Controls.Lookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Controls.OptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Controls.String;
			/** Shows the URL of the post. */
			PostURL: DevKit.Controls.String;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Controls.Double;
			/** Shows whether the social activity completed. This field is read-only. */
			StateCode: DevKit.Controls.OptionSet;
			/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
			StatusCode: DevKit.Controls.OptionSet;
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
	 * Usage: new SocialActivity.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SocialActivity Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'Description', 'ModifiedOn', 'OwnerId', 'PostedOn', 'PostedOn1', 'PostFromProfileId', 'PostMessageType', 'PostToProfileId', 'PostURL', 'RegardingObjectId', 'RegardingObjectId1', 'Subject'],
				header: ['Community', 'PriorityCode', 'SentimentValue', 'StateCode', 'StatusCode'],
				tab: ['tab_2___Description', 'tab_2___tab_2_section_1', 'tab_2___tab_2_section_2'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

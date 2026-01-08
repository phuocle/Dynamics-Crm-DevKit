/**
 * ChannelAccessProfile.form.ts - ChannelAccessProfile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ChannelAccessProfile containing form classes: ChannelAccessProfile.FormClassName
 * 3. Aggregate Form class: ChannelAccessProfile.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ChannelAccessProfile {

	// ========================================================================
	// Form: ChannelAccessProfile_Information
	// ========================================================================

	export namespace ChannelAccessProfile_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Select whether access to the email channel is allowed. */
			EmailAccess: DevKit.Controls.Boolean;
			/** Select whether access to the Facebook channel is allowed. */
			FacebookAccess: DevKit.Controls.Boolean;
			/** Type a descriptive name for the channel access profile. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select whether access to the phone channel is allowed. */
			PhoneAccess: DevKit.Controls.Boolean;
			/** Select whether access to rate a knowledge article is allowed. */
			RateKnowledgeArticles: DevKit.Controls.Boolean;
			Role_Control: DevKit.Controls.IFrame;
			/** Select whether access to submit feedback on knowledge articles is allowed. */
			SubmitFeedback: DevKit.Controls.Boolean;
			/** Select whether access to the Twitter channel is allowed. */
			TwitterAccess: DevKit.Controls.Boolean;
			/** Select whether access to view a knowledge article rating is allowed. */
			ViewArticleRating: DevKit.Controls.Boolean;
			/** Select whether access to view knowledge articles is allowed. */
			ViewKnowledgeArticles: DevKit.Controls.Boolean;
			/** Select whether access to the web channel is allowed. */
			WebAccess: DevKit.Controls.Boolean;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Select the the channel access profiles status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface IChannelAccessTabSections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
			/** Section */
			tab_3_section_2: DevKit.Controls.Section;
		}

		export interface IEntityPermissionsTabSections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
		}

		export interface IKnowledgeSettingsTabSections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
			/** Section */
			tab_4_section_2: DevKit.Controls.Section;
		}

		export interface INoteTabSections {
			/** NOTES */
			notes: DevKit.Controls.Section;
		}

		/** Channel Access */
		export interface IChannelAccessTab extends DevKit.Controls.ITab {
			Section: IChannelAccessTabSections;
		}

		/** Entity Permissions */
		export interface IEntityPermissionsTab extends DevKit.Controls.ITab {
			Section: IEntityPermissionsTabSections;
		}

		/** Knowledge Settings */
		export interface IKnowledgeSettingsTab extends DevKit.Controls.ITab {
			Section: IKnowledgeSettingsTabSections;
		}

		/** Notes */
		export interface INoteTab extends DevKit.Controls.ITab {
			Section: INoteTabSections;
		}

		export interface ITabs {
			/** Channel Access */
			ChannelAccess: IChannelAccessTab;
			/** Entity Permissions */
			EntityPermissions: IEntityPermissionsTab;
			/** Knowledge Settings */
			KnowledgeSettings: IKnowledgeSettingsTab;
			/** Notes */
			Note: INoteTab;
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
	 * ChannelAccessProfile_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new ChannelAccessProfile.ChannelAccessProfile_Information(executionContext)
	 */
	export class ChannelAccessProfile_Information extends FormBase<ChannelAccessProfile_Information.IBody, ChannelAccessProfile_Information.IHeader, ChannelAccessProfile_Information.IGrid, ChannelAccessProfile_Information.INavigation, ChannelAccessProfile_Information.IQuickForm, ChannelAccessProfile_Information.IProcess, ChannelAccessProfile_Information.IDialog> {
		/**
		 * Creates a ChannelAccessProfile_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['EmailAccess', 'FacebookAccess', 'Name', 'notescontrol', 'OwnerId', 'PhoneAccess', 'RateKnowledgeArticles', 'Role_Control', 'SubmitFeedback', 'TwitterAccess', 'ViewArticleRating', 'ViewKnowledgeArticles', 'WebAccess'],
				header: ['StatusCode'],
				tab: ['ChannelAccess___tab_3_section_1', 'ChannelAccess___tab_3_section_2', 'EntityPermissions___tab_2_section_1', 'KnowledgeSettings___tab_4_section_1', 'KnowledgeSettings___tab_4_section_2', 'Note___notes'],
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
			/** Select whether access to the email channel is allowed. */
			EmailAccess: DevKit.Controls.Boolean;
			/** Select whether access to the Facebook channel is allowed. */
			FacebookAccess: DevKit.Controls.Boolean;
			/** Type a descriptive name for the channel access profile. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select whether access to the phone channel is allowed. */
			PhoneAccess: DevKit.Controls.Boolean;
			/** Select whether access to rate a knowledge article is allowed. */
			RateKnowledgeArticles: DevKit.Controls.Boolean;
			Role_Control: DevKit.Controls.IFrame;
			/** Select whether access to submit feedback on knowledge articles is allowed. */
			SubmitFeedback: DevKit.Controls.Boolean;
			/** Select whether access to the Twitter channel is allowed. */
			TwitterAccess: DevKit.Controls.Boolean;
			/** Select whether access to view a knowledge article rating is allowed. */
			ViewArticleRating: DevKit.Controls.Boolean;
			/** Select whether access to view knowledge articles is allowed. */
			ViewKnowledgeArticles: DevKit.Controls.Boolean;
			/** Select whether access to the web channel is allowed. */
			WebAccess: DevKit.Controls.Boolean;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Select the the channel access profiles status. */
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
	 * Usage: new ChannelAccessProfile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ChannelAccessProfile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['EmailAccess', 'FacebookAccess', 'Name', 'notescontrol', 'OwnerId', 'PhoneAccess', 'RateKnowledgeArticles', 'Role_Control', 'SubmitFeedback', 'TwitterAccess', 'ViewArticleRating', 'ViewKnowledgeArticles', 'WebAccess'],
				header: ['StatusCode'],
				tab: ['ChannelAccess___tab_3_section_1', 'ChannelAccess___tab_3_section_2', 'EntityPermissions___tab_2_section_1', 'KnowledgeSettings___tab_4_section_1', 'KnowledgeSettings___tab_4_section_2', 'Note___notes'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

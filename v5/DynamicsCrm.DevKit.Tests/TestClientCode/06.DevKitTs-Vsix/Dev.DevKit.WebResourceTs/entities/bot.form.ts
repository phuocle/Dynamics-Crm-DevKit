/**
 * bot.form.ts - bot Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace bot containing form classes: bot.FormClassName
 * 3. Aggregate Form class: bot.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace bot {

	// ========================================================================
	// Form: bot_Information
	// ========================================================================

	export namespace bot_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Defines which users may interact with the bot. */
			accesscontrolpolicy: DevKit.Controls.OptionSet;
			/** Stores information with application manifest data such as Teams application information. */
			applicationmanifestinformation: DevKit.Controls.Memo;
			/** Stores information for the authentication configuration. */
			authenticationconfiguration: DevKit.Controls.Memo;
			/** Defines how the bot should be authenticated to the user. */
			authenticationmode: DevKit.Controls.OptionSet;
			/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
			authenticationtrigger: DevKit.Controls.OptionSet;
			/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
			authorizedsecuritygroupids: DevKit.Controls.String;
			/** Used to store content of bot configuration data. */
			Configuration: DevKit.Controls.Memo;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 100KB in size. This value can be changed at any time. */
			iconbase64: DevKit.Controls.Memo;
			/** The language identifier (LCID) of this Copilot. */
			Language: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The display name of the Copilot. */
			name: DevKit.Controls.String;
			/** Used to identify the origin used to create the bot. */
			Origin: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Unique identifier for Connection Reference associated with Copilot. */
			ProviderConnectionReferenceId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who last published the bot. */
			publishedby: DevKit.Controls.Lookup;
			/** Date and time when the Copilot was last published */
			publishedon: DevKit.Controls.DateTime;
			/** Runtime provider */
			RuntimeProvider: DevKit.Controls.OptionSet;
			/** Unique name identifying the Copilot. */
			SchemaName: DevKit.Controls.String;
			/** Status of the Copilot */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Copilot */
			statuscode: DevKit.Controls.OptionSet;
			/** The list of supported languages by this bot */
			SupportedLanguages: DevKit.Controls.MultiOptionSet;
			/** Used to store information about the synchronization operations of the bot */
			SynchronizationStatus: DevKit.Controls.Memo;
			/** Used to identify the template and version used for the bot default content */
			Template: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ITabs {
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Related chat bot components */
			BotComponents: DevKit.Controls.Grid;
			/** Linked component collections */
			ComponentCollections: DevKit.Controls.Grid;
			/** Related chat bot conversation transcripts */
			ConversationTranscripts: DevKit.Controls.Grid;
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
	 * bot_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new bot.bot_Information(executionContext)
	 */
	export class bot_Information extends FormBase<bot_Information.IBody, bot_Information.IHeader, bot_Information.IGrid, bot_Information.INavigation, bot_Information.IQuickForm, bot_Information.IProcess, bot_Information.IDialog> {
		/**
		 * Creates a bot_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['accesscontrolpolicy', 'applicationmanifestinformation', 'authenticationconfiguration', 'authenticationmode', 'authenticationtrigger', 'authorizedsecuritygroupids', 'Configuration', 'CreatedBy', 'CreatedOn', 'iconbase64', 'Language', 'ModifiedBy', 'ModifiedOn', 'name', 'Origin', 'OwnerId', 'OwningBusinessUnit', 'ProviderConnectionReferenceId', 'publishedby', 'publishedon', 'RuntimeProvider', 'SchemaName', 'statecode', 'statuscode', 'SupportedLanguages', 'SynchronizationStatus', 'Template'],
				header: [],
				tab: [],
				grid: ['BotComponents', 'ComponentCollections', 'ConversationTranscripts'],
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
			/** Defines which users may interact with the bot. */
			accesscontrolpolicy: DevKit.Controls.OptionSet;
			/** Stores information with application manifest data such as Teams application information. */
			applicationmanifestinformation: DevKit.Controls.Memo;
			/** Stores information for the authentication configuration. */
			authenticationconfiguration: DevKit.Controls.Memo;
			/** Defines how the bot should be authenticated to the user. */
			authenticationmode: DevKit.Controls.OptionSet;
			/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
			authenticationtrigger: DevKit.Controls.OptionSet;
			/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
			authorizedsecuritygroupids: DevKit.Controls.String;
			/** Used to store content of bot configuration data. */
			Configuration: DevKit.Controls.Memo;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 100KB in size. This value can be changed at any time. */
			iconbase64: DevKit.Controls.Memo;
			/** The language identifier (LCID) of this Copilot. */
			Language: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The display name of the Copilot. */
			name: DevKit.Controls.String;
			/** Used to identify the origin used to create the bot. */
			Origin: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Unique identifier for Connection Reference associated with Copilot. */
			ProviderConnectionReferenceId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who last published the bot. */
			publishedby: DevKit.Controls.Lookup;
			/** Date and time when the Copilot was last published */
			publishedon: DevKit.Controls.DateTime;
			/** Runtime provider */
			RuntimeProvider: DevKit.Controls.OptionSet;
			/** Unique name identifying the Copilot. */
			SchemaName: DevKit.Controls.String;
			/** Status of the Copilot */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Copilot */
			statuscode: DevKit.Controls.OptionSet;
			/** The list of supported languages by this bot */
			SupportedLanguages: DevKit.Controls.MultiOptionSet;
			/** Used to store information about the synchronization operations of the bot */
			SynchronizationStatus: DevKit.Controls.Memo;
			/** Used to identify the template and version used for the bot default content */
			Template: DevKit.Controls.String;
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
			/** Related chat bot components */
			BotComponents: DevKit.Controls.Grid;
			/** Linked component collections */
			ComponentCollections: DevKit.Controls.Grid;
			/** Related chat bot conversation transcripts */
			ConversationTranscripts: DevKit.Controls.Grid;
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
	 * Usage: new bot.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate bot Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['accesscontrolpolicy', 'applicationmanifestinformation', 'authenticationconfiguration', 'authenticationmode', 'authenticationtrigger', 'authorizedsecuritygroupids', 'Configuration', 'CreatedBy', 'CreatedOn', 'iconbase64', 'Language', 'ModifiedBy', 'ModifiedOn', 'name', 'Origin', 'OwnerId', 'OwningBusinessUnit', 'ProviderConnectionReferenceId', 'publishedby', 'publishedon', 'RuntimeProvider', 'SchemaName', 'statecode', 'statuscode', 'SupportedLanguages', 'SynchronizationStatus', 'Template'],
				header: [],
				tab: [],
				grid: ['BotComponents', 'ComponentCollections', 'ConversationTranscripts'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formbot_Information {
		interface Tabs {
		}
		interface Body {
			/** Defines which users may interact with the bot. */
			accesscontrolpolicy: DevKit.Controls.OptionSet;
			/** Stores information with application manifest data such as Teams application information. */
			applicationmanifestinformation: DevKit.Controls.String;
			/** Stores information for the authentication configuration. */
			authenticationconfiguration: DevKit.Controls.String;
			/** Defines how the bot should be authenticated to the user. */
			authenticationmode: DevKit.Controls.OptionSet;
			/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
			authenticationtrigger: DevKit.Controls.OptionSet;
			/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
			authorizedsecuritygroupids: DevKit.Controls.String;
			/** Used to store content of bot configuration data. */
			Configuration: DevKit.Controls.String;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 30K in size. This value can be changed at any time. */
			iconbase64: DevKit.Controls.String;
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
			SynchronizationStatus: DevKit.Controls.String;
			/** Used to identify the template and version used for the bot default content */
			Template: DevKit.Controls.String;
		}
		interface Navigation {
			bot_conversationtranscript: DevKit.Controls.NavigationItem,
			bot_msdyn_microsoftcopilotstudiobot: DevKit.Controls.NavigationItem,
			botcomponent_parent_bot: DevKit.Controls.NavigationItem,
			Comment_Artifact_Bot: DevKit.Controls.NavigationItem,
			msdyn_bot_msfp_survey_microsoftcopilotstudiobot: DevKit.Controls.NavigationItem,
			msdyn_msdyn_botsession_botid_bot: DevKit.Controls.NavigationItem
		}
		interface Grid {
			BotComponents: DevKit.Controls.Grid;
			ComponentCollections: DevKit.Controls.Grid;
			ConversationTranscripts: DevKit.Controls.Grid;
		}
	}
	class Formbot_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form bot_Information */
		Body: DevKit.Formbot_Information.Body;
		/** The Navigation of form bot_Information */
		Navigation: DevKit.Formbot_Information.Navigation;
		/** The Grid of form bot_Information */
		Grid: DevKit.Formbot_Information.Grid;
		/** The SidePanes of form bot_Information */
		SidePanes: DevKit.SidePanes;
	}
	class botApi {
		/**
		* DynamicsCrm.DevKit botApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Defines which users may interact with the bot. */
		accesscontrolpolicy: OptionSet.bot.accesscontrolpolicy;
		/** Stores information with application manifest data such as Teams application information. */
		applicationmanifestinformation: string;
		/** Stores information for the authentication configuration. */
		authenticationconfiguration: string;
		/** Defines how the bot should be authenticated to the user. */
		authenticationmode: OptionSet.bot.authenticationmode;
		/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
		authenticationtrigger: OptionSet.bot.authenticationtrigger;
		/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
		authorizedsecuritygroupids: string;
		/** Unique identifier of the Copilot. */
		botId: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.bot.ComponentState;
		/** Used to store content of bot configuration data. */
		Configuration: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 30K in size. This value can be changed at any time. */
		iconbase64: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** The language identifier (LCID) of this Copilot. */
		Language: OptionSet.bot.Language;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The display name of the Copilot. */
		name: string;
		/** Used to identify the origin used to create the bot. */
		Origin: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier for Connection Reference associated with Copilot. */
		ProviderConnectionReferenceId: string;
		/** Unique identifier of the user who last published the bot. */
		publishedby: string;
		/** Date and time when the Copilot was last published */
		publishedon_UtcDateAndTime: Date;
		RuntimeProvider: OptionSet.bot.RuntimeProvider;
		/** Unique name identifying the Copilot. */
		SchemaName: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Copilot */
		statecode: OptionSet.bot.statecode;
		/** Reason for the status of the Copilot */
		statuscode: OptionSet.bot.statuscode;
		/** The list of supported languages by this bot */
		SupportedLanguages: Array<OptionSet.bot.SupportedLanguages>;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Used to store information about the synchronization operations of the bot */
		SynchronizationStatus: string;
		/** Used to identify the template and version used for the bot default content */
		Template: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Defines which users may interact with the bot. */
			readonly accesscontrolpolicy: string;
			/** Stores information with application manifest data such as Teams application information. */
			readonly applicationmanifestinformation: string;
			/** Stores information for the authentication configuration. */
			readonly authenticationconfiguration: string;
			/** Defines how the bot should be authenticated to the user. */
			readonly authenticationmode: string;
			/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
			readonly authenticationtrigger: string;
			/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
			readonly authorizedsecuritygroupids: string;
			/** Unique identifier of the Copilot. */
			readonly botId: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Used to store content of bot configuration data. */
			readonly Configuration: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 30K in size. This value can be changed at any time. */
			readonly iconbase64: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** The language identifier (LCID) of this Copilot. */
			readonly Language: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The display name of the Copilot. */
			readonly name: string;
			/** Used to identify the origin used to create the bot. */
			readonly Origin: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier for Connection Reference associated with Copilot. */
			readonly ProviderConnectionReferenceId: string;
			/** Unique identifier of the user who last published the bot. */
			readonly publishedby: string;
			/** Date and time when the Copilot was last published */
			readonly publishedon_UtcDateAndTime: string;
			readonly RuntimeProvider: string;
			/** Unique name identifying the Copilot. */
			readonly SchemaName: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Copilot */
			readonly statecode: string;
			/** Reason for the status of the Copilot */
			readonly statuscode: string;
			/** The list of supported languages by this bot */
			readonly SupportedLanguages: Array<string>;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Used to store information about the synchronization operations of the bot */
			readonly SynchronizationStatus: string;
			/** Used to identify the template and version used for the bot default content */
			readonly Template: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace bot {
		enum accesscontrolpolicy {
			/** 0 */
			Any,
			/** 1 */
			Copilot_readers,
			/** 2 */
			Group_membership
		}
		enum authenticationmode {
			/** 3 */
			Custom_Azure_Active_Directory,
			/** 4 */
			Generic_OAuth2,
			/** 2 */
			Integrated,
			/** 1 */
			None,
			/** 0 */
			Unspecified
		}
		enum authenticationtrigger {
			/** 1 */
			Always,
			/** 0 */
			As_Needed
		}
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum Language {
			/** 1025 */
			Arabic,
			/** 2052 */
			Chinese_Simplified,
			/** 1028 */
			Chinese_Traditional,
			/** 1029 */
			Czech,
			/** 1030 */
			Danish,
			/** 1043 */
			Dutch,
			/** 1033 */
			English,
			/** 3081 */
			English_Australia,
			/** 2057 */
			English_United_Kingdom,
			/** 1035 */
			Finnish,
			/** 1036 */
			French,
			/** 3084 */
			French_Canada,
			/** 1031 */
			German,
			/** 1032 */
			Greek,
			/** 1037 */
			Hebrew,
			/** 1081 */
			Hindi,
			/** 1057 */
			Indonesian,
			/** 1040 */
			Italian,
			/** 1041 */
			Japanese,
			/** 1042 */
			Korean,
			/** 1044 */
			Norwegian,
			/** 1045 */
			Polish,
			/** 1046 */
			Portuguese_Brazilian,
			/** 1049 */
			Russian,
			/** 1034 */
			Spanish,
			/** 21514 */
			Spanish_United_States,
			/** 1053 */
			Swedish,
			/** 1054 */
			Thai,
			/** 1055 */
			Turkish
		}
		enum RuntimeProvider {
			/** 1 */
			Nuance_Mix_Shell,
			/** 0 */
			Power_Virtual_Agents
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 2 */
			Deprovisioned,
			/** 5 */
			MissingLicense,
			/** 1 */
			Provisioned,
			/** 4 */
			ProvisionFailed,
			/** 3 */
			Provisioning
		}
		enum SupportedLanguages {
			/** 1025 */
			Arabic,
			/** 2052 */
			Chinese_Simplified,
			/** 1028 */
			Chinese_Traditional,
			/** 1029 */
			Czech,
			/** 1030 */
			Danish,
			/** 1043 */
			Dutch,
			/** 1033 */
			English,
			/** 3081 */
			English_Australia,
			/** 2057 */
			English_United_Kingdom,
			/** 1035 */
			Finnish,
			/** 1036 */
			French,
			/** 3084 */
			French_Canada,
			/** 1031 */
			German,
			/** 1032 */
			Greek,
			/** 1037 */
			Hebrew,
			/** 1081 */
			Hindi,
			/** 1057 */
			Indonesian,
			/** 1040 */
			Italian,
			/** 1041 */
			Japanese,
			/** 1042 */
			Korean,
			/** 1044 */
			Norwegian,
			/** 1045 */
			Polish,
			/** 1046 */
			Portuguese_Brazilian,
			/** 1049 */
			Russian,
			/** 1034 */
			Spanish,
			/** 21514 */
			Spanish_United_States,
			/** 1053 */
			Swedish,
			/** 1054 */
			Thai,
			/** 1055 */
			Turkish
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
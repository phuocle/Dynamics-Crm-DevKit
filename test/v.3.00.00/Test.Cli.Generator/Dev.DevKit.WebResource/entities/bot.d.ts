//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formbot_Information {
		interface Tabs {
		}
		interface Body {
			/** The language identifier (LCID) of this Chatbot. */
			Language: DevKit.Controls.OptionSet;
			/** The display name of the Chatbot. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Chatbot */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			BotComponents: DevKit.Controls.Grid;
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
		/** The Process of form bot_Information */
		Process: DevKit.Formbot_Information.Process;
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
		/** Defines how the bot should be authenticated to the user. */
		authenticationmode: OptionSet.bot.authenticationmode;
		/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
		authenticationtrigger: OptionSet.bot.authenticationtrigger;
		/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
		authorizedsecuritygroupids: string;
		/** Unique identifier of the Chatbot. */
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
		/** The language identifier (LCID) of this Chatbot. */
		Language: OptionSet.bot.Language;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The display name of the Chatbot. */
		name: string;
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
		/** Unique identifier of the user who last published the bot. */
		publishedby: string;
		/** Date and time when the Chatbot was last published */
		publishedon_UtcDateAndTime: Date;
		/** Unique name identifying the Chatbot. */
		SchemaName: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Chatbot */
		statecode: OptionSet.bot.statecode;
		/** Reason for the status of the Chatbot */
		statuscode: OptionSet.bot.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Used to store information about the synchronization operations of the bot */
		SynchronizationStatus: string;
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
			/** Defines how the bot should be authenticated to the user. */
			readonly authenticationmode: string;
			/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
			readonly authenticationtrigger: string;
			/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
			readonly authorizedsecuritygroupids: string;
			/** Unique identifier of the Chatbot. */
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
			/** The language identifier (LCID) of this Chatbot. */
			readonly Language: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The display name of the Chatbot. */
			readonly name: string;
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
			/** Unique identifier of the user who last published the bot. */
			readonly publishedby: string;
			/** Date and time when the Chatbot was last published */
			readonly publishedon_UtcDateAndTime: string;
			/** Unique name identifying the Chatbot. */
			readonly SchemaName: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Chatbot */
			readonly statecode: string;
			/** Reason for the status of the Chatbot */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Used to store information about the synchronization operations of the bot */
			readonly SynchronizationStatus: string;
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
			Chatbot_readers,
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
			/** 1035 */
			Finnish,
			/** 1036 */
			French,
			/** 1031 */
			German,
			/** 1032 */
			Greek,
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
			/** 1053 */
			Swedish,
			/** 1054 */
			Thai,
			/** 1055 */
			Turkish
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formbot_Information {
		interface Tabs {
		}
		interface Body {
			BotComponents: DevKit.Form.Controls.ControlGrid;
			ConversationTranscripts: DevKit.Form.Controls.ControlGrid;
			/** The language identifier (LCID) of this Chatbot. */
			Language: DevKit.Form.Controls.ControlOptionSet;
			/** The display name of the Chatbot. */
			name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the Chatbot */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class Formbot_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form bot_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form bot_Information */
		Body: MyDog.Formbot_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Defines which users may interact with the bot. */
		accesscontrolpolicy: DevKit.WebApi.OptionSetValue;
		/** Stores information with application manifest data such as Teams application information. */
		applicationmanifestinformation: DevKit.WebApi.StringValue;
		/** Defines how the bot should be authenticated to the user. */
		authenticationmode: DevKit.WebApi.OptionSetValue;
		/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
		authenticationtrigger: DevKit.WebApi.OptionSetValue;
		/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
		authorizedsecuritygroupids: DevKit.WebApi.StringValue;
		/** Unique identifier of the Chatbot. */
		botId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Used to store content of bot configuration data. */
		Configuration: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 30K in size. This value can be changed at any time. */
		iconbase64: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** The language identifier (LCID) of this Chatbot. */
		Language: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The display name of the Chatbot. */
		name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who last published the bot. */
		publishedby: DevKit.WebApi.LookupValue;
		/** Date and time when the Chatbot was last published */
		publishedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique name identifying the Chatbot. */
		SchemaName: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Chatbot */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Chatbot */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
			/** 0 */
			Unspecified,
			/** 1 */
			None,
			/** 2 */
			Integrated,
			/** 3 */
			Custom_Azure_Active_Directory,
			/** 4 */
			Generic_OAuth2
		}
		enum authenticationtrigger {
			/** 0 */
			As_Needed,
			/** 1 */
			Always
		}
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum Language {
			/** 1033 */
			English,
			/** 1034 */
			Spanish,
			/** 1046 */
			Portuguese_Brazilian,
			/** 1036 */
			French,
			/** 1043 */
			Dutch,
			/** 1044 */
			Norwegian,
			/** 1030 */
			Danish,
			/** 1053 */
			Swedish,
			/** 1040 */
			Italian,
			/** 1031 */
			German,
			/** 2052 */
			Chinese_Simplified,
			/** 1028 */
			Chinese_Traditional,
			/** 1025 */
			Arabic,
			/** 1041 */
			Japanese,
			/** 1042 */
			Korean,
			/** 1081 */
			Hindi,
			/** 1057 */
			Indonesian,
			/** 1049 */
			Russian,
			/** 1045 */
			Polish,
			/** 1055 */
			Turkish
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Provisioned,
			/** 2 */
			Deprovisioned,
			/** 3 */
			Provisioning,
			/** 4 */
			ProvisionFailed,
			/** 5 */
			MissingLicense
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}
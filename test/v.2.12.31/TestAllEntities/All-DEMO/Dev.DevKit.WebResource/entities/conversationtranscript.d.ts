//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formconversationtranscript_Information {
		interface Tabs {
		}
		interface Body {
			/** Content of the conversation */
			Content: DevKit.Controls.String;
			/** The actual start time of the conversation (not the time it was written to the data store) */
			ConversationStartTime: DevKit.Controls.DateTime;
			/** Any metadata about the conversation being captured such as the schema version, state, agents, participants, etc if applicable. */
			metadata: DevKit.Controls.String;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** This defines the type of schema used for the conversation based on format used by the application writing this conversation (PVA, Omni-Channel, OBI, etc) */
			SchemaType: DevKit.Controls.String;
			/** The version of the conversation transcript content schema that is used. */
			SchemaVersion: DevKit.Controls.String;
		}
	}
	class Formconversationtranscript_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form conversationtranscript_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form conversationtranscript_Information */
		Body: DevKit.Formconversationtranscript_Information.Body;
	}
	class conversationtranscriptApi {
		/**
		* DynamicsCrm.DevKit conversationtranscriptApi
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
		/** Conversation Transcripts related to customer interactions with a Bot */
		bot_conversationtranscriptId: DevKit.WebApi.LookupValue;
		/** Content of the conversation */
		Content: DevKit.WebApi.StringValue;
		/** The actual start time of the conversation (not the time it was written to the data store) */
		ConversationStartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier for entity instances */
		conversationtranscriptId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Any metadata about the conversation being captured such as the schema version, state, agents, participants, etc if applicable. */
		metadata: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the custom entity. */
		name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
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
		/** This defines the type of schema used for the conversation based on format used by the application writing this conversation (PVA, Omni-Channel, OBI, etc) */
		SchemaType: DevKit.WebApi.StringValue;
		/** The version of the conversation transcript content schema that is used. */
		SchemaVersion: DevKit.WebApi.StringValue;
		/** Status of the conversationtranscript */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the conversationtranscript */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace conversationtranscript {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
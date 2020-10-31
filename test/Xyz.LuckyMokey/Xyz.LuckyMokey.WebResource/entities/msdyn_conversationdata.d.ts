//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_conversationdata_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_conversationdata_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_conversationdata_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_conversationdata_Information */
		Body: LuckyMokey.Formmsdyn_conversationdata_Information.Body;
	}
	class msdyn_conversationdataApi {
		/**
		* DynamicsCrm.DevKit msdyn_conversationdataApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Account unique identifier */
		msdyn_AccountId: DevKit.WebApi.StringValue;
		/** Additional data related to the conversation */
		msdyn_AdditionalData: DevKit.WebApi.StringValue;
		/** Conversation channel */
		msdyn_Channel: DevKit.WebApi.StringValue;
		/** Contact unique identifier */
		msdyn_ContactId: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_conversationdataId: DevKit.WebApi.GuidValue;
		/** Conversation identifier */
		msdyn_ConversationId: DevKit.WebApi.StringValue;
		/** Conversation started time */
		msdyn_ConversationTimestamp_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Custom Attribute 1 */
		msdyn_CustomAttribute1: DevKit.WebApi.StringValue;
		/** Custom Attribute 2 */
		msdyn_CustomAttribute2: DevKit.WebApi.StringValue;
		/** Custom Attribute 3 */
		msdyn_CustomAttribute3: DevKit.WebApi.StringValue;
		/** Custom Attribute 4 */
		msdyn_CustomAttribute4: DevKit.WebApi.StringValue;
		/** Custom Attribute 5 */
		msdyn_CustomAttribute5: DevKit.WebApi.StringValue;
		msdyn_customerCity: DevKit.WebApi.StringValue;
		msdyn_customerCountry: DevKit.WebApi.StringValue;
		msdyn_customerState: DevKit.WebApi.StringValue;
		msdyn_customerZip: DevKit.WebApi.StringValue;
		/** External System Correlation Id */
		msdyn_ExternalCorrelationId: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Name of the primary entity to which this work item belongs to */
		msdyn_PrimaryRelatedEntityName: DevKit.WebApi.StringValue;
		/** Id of the primary entity to which this work item belongs to */
		msdyn_PrimaryRelatedEntityRecordId: DevKit.WebApi.StringValue;
		/** Channel Integration Framework Provider Id */
		msdyn_ProviderId: DevKit.WebApi.StringValue;
		/** Channel Integration Framework Provider Name */
		msdyn_ProviderName: DevKit.WebApi.StringValue;
		/** Conversation origin region information */
		msdyn_Region: DevKit.WebApi.StringValue;
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
		/** Status of the ConversationData */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the ConversationData */
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
	namespace msdyn_conversationdata {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
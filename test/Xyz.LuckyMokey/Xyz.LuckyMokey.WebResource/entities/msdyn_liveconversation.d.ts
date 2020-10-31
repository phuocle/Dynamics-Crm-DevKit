//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_liveconversation_Information {
		interface Tabs {
		}
		interface Body {
			/** Subject associated with the conversation record */
			msdyn_subject: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the conversation record. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_liveconversation_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_liveconversation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_liveconversation_Information */
		Body: LuckyMokey.Formmsdyn_liveconversation_Information.Body;
	}
	class msdyn_liveconversationApi {
		/**
		* DynamicsCrm.DevKit msdyn_liveconversationApi
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
		/** Unique identifier of the user who created the Ongoing Conversation. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Ongoing Conversation was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the Ongoing Conversation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of user who last modified the Ongoing Conversation. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when Ongoing Conversation was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the Ongoing Conversation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_activeagentassignedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_activeagentid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Queue associated with Conversation. */
		msdyn_cdsqueueid: DevKit.WebApi.LookupValue;
		/** The channel(s) in the conversation. */
		msdyn_channel: DevKit.WebApi.MultiOptionSetValue;
		msdyn_closedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_createdon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_customer_msdyn_liveconversation_account: DevKit.WebApi.LookupValue;
		msdyn_customer_msdyn_liveconversation_contact: DevKit.WebApi.LookupValue;
		/** Customer Sentiment Label powered by Sentiment Service */
		msdyn_customersentimentlabel: DevKit.WebApi.OptionSetValue;
		msdyn_escalationcount: DevKit.WebApi.IntegerValue;
		msdyn_initiatedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_liveconversationId: DevKit.WebApi.GuidValue;
		msdyn_liveworkstreamid: DevKit.WebApi.LookupValue;
		msdyn_modifiedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_oclastsessionid: DevKit.WebApi.StringValue;
		/** Unique identifier for msdyn_omnichannelqueue associated with Conversation */
		msdyn_queueid: DevKit.WebApi.LookupValue;
		msdyn_startedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** State of the conversation record */
		msdyn_statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of Ongoing conversation record */
		msdyn_statuscode: DevKit.WebApi.OptionSetValue;
		msdyn_statusupdatedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Subject associated with the conversation record */
		msdyn_subject: DevKit.WebApi.StringValue;
		msdyn_title: DevKit.WebApi.StringValue;
		msdyn_transfercount: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the Ongoing Conversation. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the Ongoing Conversation. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the Ongoing Conversation. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Ongoing conversation record */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of Ongoing conversation record */
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
	namespace msdyn_liveconversation {
		enum msdyn_channel {
			/** 192350000 */
			Entity_Records,
			/** 192360000 */
			Live_chat,
			/** 192370000 */
			Voice,
			/** 192380000 */
			Video,
			/** 192390000 */
			Co_browse,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192330000 */
			Facebook
		}
		enum msdyn_customersentimentlabel {
			/** 0 */
			NA,
			/** 7 */
			Very_negative,
			/** 8 */
			Negative,
			/** 9 */
			Slightly_negative,
			/** 10 */
			Neutral,
			/** 11 */
			Slightly_positive,
			/** 12 */
			Positive,
			/** 13 */
			Very_positive
		}
		enum msdyn_statecode {
			/** 0 */
			Open,
			/** 1 */
			Active,
			/** 2 */
			Waiting,
			/** 3 */
			Closed,
			/** 4 */
			Wrap_up
		}
		enum msdyn_statuscode {
			/** 1 */
			Open,
			/** 2 */
			Active,
			/** 3 */
			Waiting,
			/** 4 */
			Closed,
			/** 5 */
			Wrap_up
		}
		enum statecode {
			/** 0 */
			Open,
			/** 1 */
			Active,
			/** 2 */
			Waiting,
			/** 3 */
			Closed,
			/** 4 */
			Wrap_up
		}
		enum statuscode {
			/** 1 */
			Open,
			/** 2 */
			Active,
			/** 3 */
			Waiting,
			/** 4 */
			Closed,
			/** 5 */
			Wrap_up
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
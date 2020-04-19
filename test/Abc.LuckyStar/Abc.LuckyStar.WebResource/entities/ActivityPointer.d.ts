//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class ActivityPointerApi {
		/**
		* DynamicsCrm.DevKit ActivityPointerApi
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
		/** Additional information provided by the external application as JSON. For internal use only. */
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Actual duration of the activity in minutes. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Actual end time of the activity. */
		ActualEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Actual start time of the activity. */
		ActualStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the activity. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the activitypointer. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the delivery of the activity was last attempted. */
		DeliveryLastAttemptedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Description of the activity. */
		Description: DevKit.WebApi.StringValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** Unique identifier of user who last modified the activity. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when activity was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		PostponeActivityProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of the activity. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Status of the activity. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the activity. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Subject associated with the activity. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace ActivityPointer {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 1 */
			Recurring_Master,
			/** 2 */
			Recurring_Instance,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Completed,
			/** 3 */
			Canceled,
			/** 4 */
			Scheduled
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
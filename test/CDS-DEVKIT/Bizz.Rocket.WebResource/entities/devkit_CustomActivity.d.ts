///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class devkit_CustomActivityApi {
		/**
		* PL.DynamicsCrm.DevKit devkit_CustomActivityApi
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
		/** ReadOnly - Unique identifier of the user who created the activity. */
		CreatedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Date and time when the activity was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who created the activitypointer. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Date and time when the delivery of the activity was last attempted. */
		DeliveryLastAttemptedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Description of the activity. */
		Description: DevKit.WebApi.StringValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** ReadOnly - Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValue;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Unique identifier of user who last modified the activity. */
		ModifiedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Date and time when activity was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who last modified the activitypointer. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the business unit that owns the activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team that owns the activity. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user that owns the activity. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** ReadOnly - For internal use only. */
		PostponeActivityProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Priority of the activity. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_devkit_customactivity: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValue;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValue;
		/** ReadOnly */
		SLAName: DevKit.WebApi.StringValue;
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
		/** ReadOnly - Version number of the activity. */
		VersionNumber: DevKit.WebApi.BigIntValue;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace devkit_CustomActivity {
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
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
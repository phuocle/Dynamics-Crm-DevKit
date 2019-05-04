///<reference path='devkit.d.ts' />
declare namespace Rocket {
	interface devkit_CustomActivityOptionSet {
		RollupState: {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated: number,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated: number,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError: number,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError: number,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded: number,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached: number,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected: number
		},
		Community: {
			/** 1 */
			Facebook: number,
			/** 2 */
			Twitter: number,
			/** 0 */
			Other: number
		},
		DeliveryPriorityCode: {
			/** 0 */
			Low: number,
			/** 1 */
			Normal: number,
			/** 2 */
			High: number
		},
		InstanceTypeCode: {
			/** 0 */
			Not_Recurring: number,
			/** 1 */
			Recurring_Master: number,
			/** 2 */
			Recurring_Instance: number,
			/** 3 */
			Recurring_Exception: number,
			/** 4 */
			Recurring_Future_Exception: number
		},
		PriorityCode: {
			/** 0 */
			Low: number,
			/** 1 */
			Normal: number,
			/** 2 */
			High: number
		},
		StateCode: {
			/** 0 */
			Open: number,
			/** 1 */
			Completed: number,
			/** 2 */
			Canceled: number,
			/** 3 */
			Scheduled: number
		},
		StatusCode: {
			/** 1 */
			Open: number,
			/** 2 */
			Completed: number,
			/** 3 */
			Canceled: number,
			/** 4 */
			Scheduled: number
		}
	}
	class devkit_CustomActivityApi {
		constructor(entity?: object);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): object;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity of ODATA */
		Entity: object;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** A collection OptionSet of devkit_CustomActivity enttiy */
		OptionSet: devkit_CustomActivityOptionSet;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Additional information provided by the external application as JSON. For internal use only. */
		ActivityAdditionalParams: WebApi.StringValue;
		/** Unique identifier of the activity. */
		ActivityId: WebApi.GuidValue;
		/** Actual duration of the activity in minutes. */
		ActualDurationMinutes: WebApi.IntegerValue;
		/** Actual end time of the activity. */
		ActualEnd_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Actual start time of the activity. */
		ActualStart_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: WebApi.OptionSetValue;
		/** ReadOnly - Unique identifier of the user who created the activity. */
		CreatedBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedByYomiName: WebApi.StringValue;
		/** ReadOnly - Date and time when the activity was created. */
		CreatedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who created the activitypointer. */
		CreatedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedOnBehalfByYomiName: WebApi.StringValue;
		/** ReadOnly - Date and time when the delivery of the activity was last attempted. */
		DeliveryLastAttemptedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: WebApi.OptionSetValue;
		/** Description of the activity. */
		Description: WebApi.StringValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: WebApi.StringValue;
		/** ReadOnly - Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		ExchangeRate: WebApi.DecimalValue;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: WebApi.IntegerValue;
		/** ReadOnly - Type of instance of a recurring series. */
		InstanceTypeCode: WebApi.OptionSetValue;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: WebApi.BooleanValue;
		/** ReadOnly - Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: WebApi.BooleanValue;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: WebApi.BooleanValue;
		/** ReadOnly - Unique identifier of user who last modified the activity. */
		ModifiedBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedByYomiName: WebApi.StringValue;
		/** ReadOnly - Date and time when activity was last modified. */
		ModifiedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who last modified the activitypointer. */
		ModifiedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedOnBehalfByYomiName: WebApi.StringValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: WebApi.LookupValue;
		/** ReadOnly */
		OwnerIdYomiName: WebApi.StringValue;
		/** ReadOnly - Unique identifier of the business unit that owns the activity. */
		OwningBusinessUnit: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team that owns the activity. */
		OwningTeam: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user that owns the activity. */
		OwningUser: WebApi.LookupValue;
		/** ReadOnly - For internal use only. */
		PostponeActivityProcessingUntil_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Priority of the activity. */
		PriorityCode: WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: WebApi.GuidValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_devkit_customactivity: WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact_devkit_customactivity: WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_devkit_customactivity: WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_devkit_customactivity: WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_devkit_customactivity: WebApi.LookupValue;
		RegardingObjectIdYomiName: WebApi.StringValue;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: WebApi.IntegerValue;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: WebApi.LookupValue;
		/** ReadOnly - Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: WebApi.GuidValue;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: WebApi.LookupValue;
		/** ReadOnly */
		SLAName: WebApi.StringValue;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: WebApi.GuidValue;
		/** Status of the activity. */
		StateCode: WebApi.OptionSetValue;
		/** Reason for the status of the activity. */
		StatusCode: WebApi.OptionSetValue;
		/** Subject associated with the activity. */
		Subject: WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: WebApi.IntegerValue;
		/** ReadOnly - Version number of the activity. */
		VersionNumber: WebApi.BigIntValue;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<object>;
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
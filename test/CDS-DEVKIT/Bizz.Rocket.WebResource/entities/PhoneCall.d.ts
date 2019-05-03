///<reference path='devkit.d.ts' />
declare namespace Rocket {
	interface PhoneCallOptionSet {
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
			Canceled: number
		},
		StatusCode: {
			/** 1 */
			Open: number,
			/** 2 */
			Made: number,
			/** 3 */
			Canceled: number,
			/** 4 */
			Received: number
		}
	}
	class PhoneCallApi {
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
		/** A collection OptionSet of PhoneCall enttiy */
		OptionSet: PhoneCallOptionSet;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ActivityAdditionalParams: WebApi.StringValue;
		/** Unique identifier of the phone call activity. */
		ActivityId: WebApi.GuidValue;
		/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
		ActualDurationMinutes: WebApi.IntegerValue;
		/** Enter the actual end date and time of the phone call. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the phone call. */
		ActualEnd_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the phone call. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the phone call. */
		ActualStart_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Type a category to identify the phone call type, such as lead gathering or customer follow-up, to tie the phone call to a business group or function. */
		Category: WebApi.StringValue;
		/** ReadOnly - Shows who created the record. */
		CreatedBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedByName: WebApi.StringValue;
		/** ReadOnly */
		CreatedByYomiName: WebApi.StringValue;
		/** ReadOnly - Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedOnBehalfByName: WebApi.StringValue;
		/** ReadOnly */
		CreatedOnBehalfByYomiName: WebApi.StringValue;
		/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
		Description: WebApi.StringValue;
		/** Select the direction of the phone call as incoming or outbound. */
		DirectionCode: WebApi.BooleanValue;
		/** ReadOnly - Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: WebApi.DecimalValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: WebApi.IntegerValue;
		/** Information which specifies whether the phone call activity was billed as part of resolving a case. */
		IsBilled: WebApi.BooleanValue;
		/** ReadOnly - Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: WebApi.BooleanValue;
		/** Indication which specifies if the phone call activity was created by a workflow rule. */
		IsWorkflowCreated: WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Select whether a voice mail was left for the person. */
		LeftVoiceMail: WebApi.BooleanValue;
		/** ReadOnly - Shows who last updated the record. */
		ModifiedBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedByName: WebApi.StringValue;
		/** ReadOnly */
		ModifiedByYomiName: WebApi.StringValue;
		/** ReadOnly - Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedOnBehalfByName: WebApi.StringValue;
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
		OwnerIdName: WebApi.StringValue;
		/** ReadOnly */
		OwnerIdYomiName: WebApi.StringValue;
		/** ReadOnly - Unique identifier of the business unit that owns the phone call activity. */
		OwningBusinessUnit: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team that owns the phone call activity. */
		OwningTeam: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user that owns the phone call activity. */
		OwningUser: WebApi.LookupValue;
		/** Type the phone number. */
		PhoneNumber: WebApi.StringValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: WebApi.GuidValue;
		/** Choose the record that the phone call relates to. */
		RegardingObjectId: WebApi.LookupValue;
		/** ReadOnly */
		RegardingObjectIdName: WebApi.StringValue;
		/** ReadOnly */
		RegardingObjectIdYomiName: WebApi.StringValue;
		/** ReadOnly - Scheduled duration of the phone call activity, specified in minutes. */
		ScheduledDurationMinutes: WebApi.IntegerValue;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Phone Call record. */
		SLAId: WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this Phone Call. This field is for internal use only. */
		SLAInvokedId: WebApi.LookupValue;
		/** ReadOnly */
		SLAInvokedIdName: WebApi.StringValue;
		/** ReadOnly */
		SLAName: WebApi.StringValue;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: WebApi.GuidValue;
		/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
		StateCode: WebApi.OptionSetValue;
		/** Select the phone call's status. */
		StatusCode: WebApi.OptionSetValue;
		/** Type a subcategory to identify the phone call type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the phone call. */
		Subject: WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: WebApi.LookupValue;
		/** ReadOnly */
		TransactionCurrencyIdName: WebApi.StringValue;
		/** For internal use only. */
		TraversedPath: WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: WebApi.IntegerValue;
		/** ReadOnly - Version number of the phone call activity. */
		VersionNumber: WebApi.BigIntValue;
	}
}
//{'JsForm':['Phone Call'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
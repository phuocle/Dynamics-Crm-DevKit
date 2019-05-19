///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class PhoneCallApi {
		/**
		* PL.DynamicsCrm.DevKit PhoneCallApi
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
		/** For internal use only. */
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the phone call activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the phone call. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the phone call. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the phone call. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the phone call. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type a category to identify the phone call type, such as lead gathering or customer follow-up, to tie the phone call to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** ReadOnly - Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the phone call as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information which specifies whether the phone call activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValue;
		/** Indication which specifies if the phone call activity was created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select whether a voice mail was left for the person. */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the business unit that owns the phone call activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team that owns the phone call activity. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user that owns the phone call activity. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Type the phone number. */
		PhoneNumber: DevKit.WebApi.StringValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_account_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_contact_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_knowledgearticle_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_knowledgebaserecord_phonecall: DevKit.WebApi.LookupValue;
		/** ReadOnly - Scheduled duration of the phone call activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Phone Call record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this Phone Call. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValue;
		/** ReadOnly */
		SLAName: DevKit.WebApi.StringValue;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the phone call's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the phone call type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the phone call. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Version number of the phone call activity. */
		VersionNumber: DevKit.WebApi.BigIntValue;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace PhoneCall {
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
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Made,
			/** 3 */
			Canceled,
			/** 4 */
			Received
		}
	}
}
//{'JsForm':['Phone Call'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
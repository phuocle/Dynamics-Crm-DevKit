//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SocialActivityApi {
		/**
		* DynamicsCrm.DevKit SocialActivityApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** For internal use only. */
		ActivityAdditionalParams: string | null;
		/** Unique identifier of the activity. */
		ActivityId: string | null;
		/** Actual duration of the activity in minutes. */
		ActualDurationMinutes: number | null;
		/** Actual end time of the activity. */
		ActualEnd_UtcDateAndTime: Date | null;
		/** Actual start time of the activity. */
		ActualStart_UtcDateAndTime: Date | null;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.SocialActivity.Community | null;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string | null;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows information about the social post content. This field is read-only. */
		Description: string | null;
		/** Select the direction of the post as incoming or outbound. */
		DirectionCode: boolean | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier for the responses to a post. For internal use only. */
		InResponseTo: string | null;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: boolean | null;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean | null;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: boolean | null;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date | null;
		/** For internal use only. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** For internal use only. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the activity. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team that owns the activity. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the Activity. */
		readonly OwningUser: string | null;
		/** For internal use only. */
		PostedOn_UtcDateAndTime: Date | null;
		/** Shows the author of the post on the corresponding social channel. */
		PostFromProfileId: string | null;
		/** Unique identifier of the post. For internal use only. */
		PostId: string | null;
		/** Shows if the social post originated as a private or public message. */
		PostMessageType: OptionSet.SocialActivity.PostMessageType | null;
		/** Shows the recipients of the social post. */
		PostToProfileId: string | null;
		/** Shows the URL of the post. */
		PostURL: string | null;
		/** Shows the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.SocialActivity.PriorityCode | null;
		/** Unique identifier of the Process. */
		ProcessId: string | null;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: number | null;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: Date | null;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: Date | null;
		/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
		SentimentValue: number | null;
		/** Choose the service level agreement (SLA) that you want to apply to the Social Activity record. */
		SLAId: string | null;
		/** Last SLA that was applied to this Social Activity. This field is for internal use only. */
		readonly SLAInvokedId: string | null;
		/** For internal use only. */
		SocialAdditionalParams: string | null;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date | null;
		/** Unique identifier of the Stage. */
		StageId: string | null;
		/** Shows whether the social activity completed. This field is read-only. */
		StateCode: OptionSet.SocialActivity.StateCode | null;
		/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
		StatusCode: OptionSet.SocialActivity.StatusCode | null;
		/** Subject associated with the activity. */
		Subject: string | null;
		/** Unique identifier of the social conversation. For internal use only. */
		ThreadId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the social activity. */
		readonly VersionNumber: number | null;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<Record<string, any>> | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the activity. */
			readonly ActivityId: string;
			/** Actual duration of the activity in minutes. */
			readonly ActualDurationMinutes: string;
			/** Actual end time of the activity. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Actual start time of the activity. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			readonly Community: string;
			/** Unique identifier of the user who created the activity. */
			readonly CreatedBy: string;
			/** Date and time when the activity was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the activitypointer. */
			readonly CreatedOnBehalfBy: string;
			/** Shows information about the social post content. This field is read-only. */
			readonly Description: string;
			/** Select the direction of the post as incoming or outbound. */
			readonly DirectionCode: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier for the responses to a post. For internal use only. */
			readonly InResponseTo: string;
			/** Information regarding whether the activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information regarding whether the activity was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the activity. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the activity. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the Activity. */
			readonly OwningUser: string;
			/** For internal use only. */
			readonly PostedOn_UtcDateAndTime: string;
			/** Shows the author of the post on the corresponding social channel. */
			readonly PostFromProfileId: string;
			/** Unique identifier of the post. For internal use only. */
			readonly PostId: string;
			/** Shows if the social post originated as a private or public message. */
			readonly PostMessageType: string;
			/** Shows the recipients of the social post. */
			readonly PostToProfileId: string;
			/** Shows the URL of the post. */
			readonly PostURL: string;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Unique identifier of the Process. */
			readonly ProcessId: string;
			/** Scheduled duration of the activity, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Scheduled end time of the activity. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Scheduled start time of the activity. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			readonly SentimentValue: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Social Activity record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this Social Activity. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** For internal use only. */
			readonly SocialAdditionalParams: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** Shows whether the social activity completed. This field is read-only. */
			readonly StateCode: string;
			/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
			readonly StatusCode: string;
			/** Subject associated with the activity. */
			readonly Subject: string;
			/** Unique identifier of the social conversation. For internal use only. */
			readonly ThreadId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the social activity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SocialActivity {
		enum ActivityTypeCode {
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Email = 4202*/
			Email = 4202,
			/** Fax = 4204*/
			Fax = 4204,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Letter = 4207*/
			Letter = 4207,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Portal_Comment = 10408*/
			Portal_Comment = 10408,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Task = 4212*/
			Task = 4212,
			/** Teams_chat = 10253*/
			Teams_chat = 10253
		}
		enum Community {
			/** Facebook = 1*/
			Facebook = 1,
			/** Other = 0*/
			Other = 0,
			/** Twitter = 2*/
			Twitter = 2
		}
		enum PostAuthorAccountType {
		}
		enum PostAuthorType {
		}
		enum PostMessageType {
			/** Private_Message = 1*/
			Private_Message = 1,
			/** Public_Message = 0*/
			Public_Message = 0
		}
		enum PriorityCode {
			/** High = 2*/
			High = 2,
			/** Low = 0*/
			Low = 0,
			/** Normal = 1*/
			Normal = 1
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Canceled = 2*/
			Canceled = 2,
			/** Completed = 1*/
			Completed = 1,
			/** Open = 0*/
			Open = 0
		}
		enum StatusCode {
			/** Canceled = 5*/
			Canceled = 5,
			/** Completed = 1*/
			Completed = 1,
			/** Failed = 2*/
			Failed = 2,
			/** Open = 4*/
			Open = 4,
			/** Processing = 3*/
			Processing = 3
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPortal_Comment {
		interface Header extends DevKit.Controls.IHeader {
			/** Specifies whether the WebActivity created by Portal User or Dynamics 365 User. */
			adx_PortalCommentDirectionCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the activity. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the activity. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab__54373510_FFDA_4801_B39B_1D305942D8D6_Sections {
			/** Web Activity description */
			_54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_2: DevKit.Controls.Section;
			/** Section */
			_54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_4: DevKit.Controls.Section;
		}
		/** General */
		interface tab__54373510_FFDA_4801_B39B_1D305942D8D6 extends DevKit.Controls.ITab {
			Section: tab__54373510_FFDA_4801_B39B_1D305942D8D6_Sections;
		}
		interface Tabs {
			/** General */
			_54373510_FFDA_4801_B39B_1D305942D8D6: tab__54373510_FFDA_4801_B39B_1D305942D8D6;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the activity. */
			Description: DevKit.Controls.String;
			/** Person who the activity is from. */
			From: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
			/** Person who is the receiver of the activity. */
			To: DevKit.Controls.Lookup;
		}
	}
	export class FormPortal_Comment extends DevKit.IForm {
		/**
		* Portal Comment [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Portal_Comment */
		Body: DevKit.FormPortal_Comment.Body;
		/** The Header section of form Portal_Comment */
		Header: DevKit.FormPortal_Comment.Header;
	}
	export class adx_portalcommentApi {
		/**
		* DynamicsCrm.DevKit adx_portalcommentApi
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
		/** Additional information provided by the external application as JSON. For internal use only. */
		ActivityAdditionalParams: string | null;
		/** Unique identifier of the activity. */
		ActivityId: string | null;
		/** Actual duration of the activity in minutes. */
		ActualDurationMinutes: number | null;
		/** Actual end time of the activity. */
		ActualEnd_UtcDateAndTime: Date | null;
		/** Actual start time of the activity. */
		ActualStart_UtcDateAndTime: Date | null;
		/** Specifies whether the WebActivity created by Portal User or Dynamics 365 User. */
		adx_PortalCommentDirectionCode: OptionSet.adx_portalcomment.adx_PortalCommentDirectionCode | null;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.adx_portalcomment.Community | null;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string | null;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string | null;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date | null;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.adx_portalcomment.DeliveryPriorityCode | null;
		/** Description of the activity. */
		Description: string | null;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string | null;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.adx_portalcomment.InstanceTypeCode | null;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: boolean | null;
		/** For internal use only. */
		IsMapiPrivate: boolean | null;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean | null;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: boolean | null;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date | null;
		/** Left the voice mail */
		LeftVoiceMail: boolean | null;
		/** Unique identifier of user who last modified the activity. */
		readonly ModifiedBy: string | null;
		/** Date and time when activity was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
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
		/** Unique identifier of the user that owns the activity. */
		readonly OwningUser: string | null;
		/** For internal use only. */
		readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date | null;
		/** Priority of the activity. */
		PriorityCode: OptionSet.adx_portalcomment.PriorityCode | null;
		/** Unique identifier of the Process. */
		ProcessId: string | null;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: number | null;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: Date | null;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: Date | null;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string | null;
		/** Date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date | null;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		readonly SeriesId: string | null;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string | null;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string | null;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date | null;
		/** Unique identifier of the Stage. */
		StageId: string | null;
		/** Status of the activity. */
		StateCode: OptionSet.adx_portalcomment.StateCode | null;
		/** Reason for the status of the activity. */
		StatusCode: OptionSet.adx_portalcomment.StatusCode | null;
		/** Subject associated with the activity. */
		Subject: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the activity. */
		readonly VersionNumber: number | null;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<Record<string, any>> | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Additional information provided by the external application as JSON. For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the activity. */
			readonly ActivityId: string;
			/** Actual duration of the activity in minutes. */
			readonly ActualDurationMinutes: string;
			/** Actual end time of the activity. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Actual start time of the activity. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Specifies whether the WebActivity created by Portal User or Dynamics 365 User. */
			readonly adx_PortalCommentDirectionCode: string;
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			readonly Community: string;
			/** Unique identifier of the user who created the activity. */
			readonly CreatedBy: string;
			/** Date and time when the activity was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the activitypointer. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the delivery of the activity was last attempted. */
			readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
			/** Priority of delivery of the activity to the email server. */
			readonly DeliveryPriorityCode: string;
			/** Description of the activity. */
			readonly Description: string;
			/** The message id of activity which is returned from Exchange Server. */
			readonly ExchangeItemId: string;
			/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the web link of Activity of type email. */
			readonly ExchangeWebLink: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Information regarding whether the activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information regarding whether the activity was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Left the voice mail */
			readonly LeftVoiceMail: string;
			/** Unique identifier of user who last modified the activity. */
			readonly ModifiedBy: string;
			/** Date and time when activity was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the activitypointer. */
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
			/** Unique identifier of the user that owns the activity. */
			readonly OwningUser: string;
			/** For internal use only. */
			readonly PostponeActivityProcessingUntil_UtcDateAndTime: string;
			/** Priority of the activity. */
			readonly PriorityCode: string;
			/** Unique identifier of the Process. */
			readonly ProcessId: string;
			/** Scheduled duration of the activity, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Scheduled end time of the activity. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Scheduled start time of the activity. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Unique identifier of the mailbox associated with the sender of the email message. */
			readonly SenderMailboxId: string;
			/** Date and time when the activity was sent. */
			readonly SentOn_UtcDateAndTime: string;
			/** Uniqueidentifier specifying the id of recurring series of an instance. */
			readonly SeriesId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the case record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** Status of the activity. */
			readonly StateCode: string;
			/** Reason for the status of the activity. */
			readonly StatusCode: string;
			/** Subject associated with the activity. */
			readonly Subject: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the activitypointer. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the activity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_portalcomment {
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
		enum adx_PortalCommentDirectionCode {
			/** Incoming = 1*/
			Incoming = 1,
			/** Outgoing = 2*/
			Outgoing = 2
		}
		enum Community {
			/** Facebook = 1*/
			Facebook = 1,
			/** Other = 0*/
			Other = 0,
			/** Twitter = 2*/
			Twitter = 2
		}
		enum DeliveryPriorityCode {
			/** High = 2*/
			High = 2,
			/** Low = 0*/
			Low = 0,
			/** Normal = 1*/
			Normal = 1
		}
		enum InstanceTypeCode {
			/** Not_Recurring = 0*/
			Not_Recurring = 0,
			/** Recurring_Exception = 3*/
			Recurring_Exception = 3,
			/** Recurring_Future_Exception = 4*/
			Recurring_Future_Exception = 4,
			/** Recurring_Instance = 2*/
			Recurring_Instance = 2,
			/** Recurring_Master = 1*/
			Recurring_Master = 1
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
			Open = 0,
			/** Scheduled = 3*/
			Scheduled = 3
		}
		enum StatusCode {
			/** Canceled = 4*/
			Canceled = 4,
			/** Open = 1*/
			Open = 1,
			/** Received = 3*/
			Received = 3,
			/** Scheduled = 5*/
			Scheduled = 5,
			/** Sent = 2*/
			Sent = 2
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
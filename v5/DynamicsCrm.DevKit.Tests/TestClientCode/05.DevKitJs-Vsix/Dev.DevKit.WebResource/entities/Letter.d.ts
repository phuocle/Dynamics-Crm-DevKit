//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormLetter {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			general_information: DevKit.Controls.Section;
			/** Description */
			Letter_description: DevKit.Controls.Section;
			/** Letter Details */
			Letter_details: DevKit.Controls.Section;
			/** Section */
			tab_2_section_2: DevKit.Controls.Section;
		}
		/** Summary */
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			/** Summary */
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent creating and sending the letter. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type the complete recipient address for the letter to ensure timely delivery. */
			Address: DevKit.Controls.String;
			/** Type the letter body or additional information to describe the letter, such as the primary message or the products and services described. */
			Description: DevKit.Controls.String;
			/** Select the direction of the letter as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Enter the account, contact, lead, or user who sent the letter. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the letter relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the letter. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, or user recipients for the letter. */
			to: DevKit.Controls.Lookup;
		}
	}
	export class FormLetter extends DevKit.IForm {
		/**
		* Letter [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Letter */
		Body: DevKit.FormLetter.Body;
		/** The Header section of form Letter */
		Header: DevKit.FormLetter.Header;
	}
	export class LetterApi {
		/**
		* DynamicsCrm.DevKit LetterApi
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
		/** Unique identifier of the letter activity. */
		ActivityId: string | null;
		/** Type the number of minutes spent creating and sending the letter. The duration is used in reporting. */
		ActualDurationMinutes: number | null;
		/** Enter the actual end date and time of the letter. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the letter. */
		ActualEnd_UtcDateOnly: Date | null;
		/** Enter the actual start date and time for the letter. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the letter. */
		ActualStart_UtcDateOnly: Date | null;
		/** Type the complete recipient address for the letter to ensure timely delivery. */
		Address: string | null;
		/** Type a category to identify the letter type, such as sales offer or past due notice, to tie the letter to a business group or function. */
		Category: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type the letter body or additional information to describe the letter, such as the primary message or the products and services described. */
		Description: string | null;
		/** Select the direction of the letter as incoming or outbound. */
		DirectionCode: boolean | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Shows whether the letter activity was billed as part of resolving a case. */
		IsBilled: boolean | null;
		/** Shows whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean | null;
		/** Shows whether the letter activity was created by a workflow rule. */
		IsWorkflowCreated: boolean | null;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the letter activity. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team that owns the letter activity. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user that owns the letter activity. */
		readonly OwningUser: string | null;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Letter.PriorityCode | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Scheduled duration of the letter activity, specified in minutes. */
		readonly ScheduledDurationMinutes: number | null;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: Date | null;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: Date | null;
		/** Choose the service level agreement (SLA) that you want to apply to the Letter record. */
		SLAId: string | null;
		/** Last SLA that was applied to this Letter. This field is for internal use only. */
		readonly SLAInvokedId: string | null;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited. */
		StateCode: OptionSet.Letter.StateCode | null;
		/** Select the letter's status. */
		StatusCode: OptionSet.Letter.StatusCode | null;
		/** Type a subcategory to identify the letter type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string | null;
		/** Type a short description about the objective or primary topic of the letter. */
		Subject: string | null;
		/** For internal use only. */
		SubscriptionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the letter. */
		readonly VersionNumber: number | null;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<Record<string, any>> | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the letter activity. */
			readonly ActivityId: string;
			/** Type the number of minutes spent creating and sending the letter. The duration is used in reporting. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end date and time of the letter. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the letter. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the letter. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the letter. */
			readonly ActualStart_UtcDateOnly: string;
			/** Type the complete recipient address for the letter to ensure timely delivery. */
			readonly Address: string;
			/** Type a category to identify the letter type, such as sales offer or past due notice, to tie the letter to a business group or function. */
			readonly Category: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type the letter body or additional information to describe the letter, such as the primary message or the products and services described. */
			readonly Description: string;
			/** Select the direction of the letter as incoming or outbound. */
			readonly DirectionCode: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows whether the letter activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Shows whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Shows whether the letter activity was created by a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the letter activity. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the letter activity. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the letter activity. */
			readonly OwningUser: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Scheduled duration of the letter activity, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected due date and time. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Letter record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this Letter. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the letter's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the letter type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the letter. */
			readonly Subject: string;
			/** For internal use only. */
			readonly SubscriptionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the letter. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Letter {
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
			/** Draft = 2*/
			Draft = 2,
			/** Open = 1*/
			Open = 1,
			/** Received = 3*/
			Received = 3,
			/** Sent = 4*/
			Sent = 4
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
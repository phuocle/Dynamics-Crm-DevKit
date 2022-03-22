//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormOrderClose_Information {
		interface tab_resolution_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_resolution extends DevKit.Controls.ITab {
			Section: tab_resolution_Sections;
		}
		interface Tabs {
			resolution: tab_resolution;
		}
		interface Body {
			Tab: Tabs;
			/** Actual end time of the order close activity. */
			ActualEnd: DevKit.Controls.Date;
			/** Activity generated automatically when an order is closed. */
			Description: DevKit.Controls.String;
			/** Subject associated with the order close activity. */
			Subject: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormOrderClose_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OrderClose_Information */
		Body: DevKit.FormOrderClose_Information.Body;
		/** The Process of form OrderClose_Information */
		Process: DevKit.FormOrderClose_Information.Process;
		/** The SidePanes of form OrderClose_Information */
		SidePanes: DevKit.SidePanes;
	}
	class OrderCloseApi {
		/**
		* DynamicsCrm.DevKit OrderCloseApi
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Additional information provided by the external application as JSON. For internal use only. */
		ActivityAdditionalParams: string;
		/** Unique identifier of the order close activity. */
		ActivityId: string;
		/** Actual duration of the order close activity in minutes. */
		ActualDurationMinutes: number;
		/** Actual end time of the order close activity. */
		ActualEnd_UtcDateOnly: Date;
		/** Actual start time of the order close activity. */
		ActualStart_UtcDateOnly: Date;
		/** Category of the order close activity. */
		Category: string;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.OrderClose.Community;
		/** Unique identifier of the user who created the order close activity. */
		readonly CreatedBy: string;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string;
		/** Date and time when the order close activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the orderclose. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.OrderClose.DeliveryPriorityCode;
		/** Activity generated automatically when an order is closed. */
		Description: string;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.OrderClose.InstanceTypeCode;
		/** Information about whether the order close activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Information that specifies if the order close activity was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Left the voice mail */
		LeftVoiceMail: boolean;
		/** Unique identifier of the user who last modified the order close activity. */
		readonly ModifiedBy: string;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string;
		/** Date and time when the order close activity was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the orderclose. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Order number. */
		OrderNumber: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the activity. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the activity. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the activity. */
		readonly OwningUser: string;
		/** For internal use only. */
		readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date;
		/** Priority of the activity. */
		PriorityCode: OptionSet.OrderClose.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebooking_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebookingheader_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bulkoperation_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaign_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaignactivity_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlement_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlementtemplate_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_incident_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_lead_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_customerasset_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_playbookinstance_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_opportunity_orderclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_orderclose: string;
		/** Order revision number. */
		Revision: number;
		/** Unique identifier of the order with which the order close activity is associated. */
		SalesOrderId: string;
		/** Scheduled duration of the order close activity, specified in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Scheduled end time of the order close activity. */
		ScheduledEnd_UtcDateOnly: Date;
		/** Scheduled start time of the order close activity. */
		ScheduledStart_UtcDateOnly: Date;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		readonly SeriesId: string;
		/** Unique identifier of the service with which the order close activity is associated. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** Shows whether the order close activity is open, completed, or canceled.  By default, order close activities are completed. */
		StateCode: OptionSet.OrderClose.StateCode;
		/** Reason for the status of the order close activity. */
		StatusCode: OptionSet.OrderClose.StatusCode;
		/** Subcategory of the order close activity. */
		Subcategory: string;
		/** Subject associated with the order close activity. */
		Subject: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the activity. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
	}
}
declare namespace OptionSet {
	namespace OrderClose {
		enum ActivityTypeCode {
			/** 10086 */
			Activity_record_for_the_Teams_chat,
			/** 4201 */
			Appointment,
			/** 10404 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10707 */
			Conversation,
			/** 10313 */
			Customer_Voice_alert,
			/** 10323 */
			Customer_Voice_survey_invite,
			/** 10325 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 10817 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10434 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10721 */
			Session,
			/** 4212 */
			Task
		}
		enum Community {
			/** 5 */
			Cortana,
			/** 6 */
			Direct_Line,
			/** 8 */
			Direct_Line_Speech,
			/** 9 */
			Email,
			/** 1 */
			Facebook,
			/** 10 */
			GroupMe,
			/** 11 */
			Kik,
			/** 3 */
			Line,
			/** 7 */
			Microsoft_Teams,
			/** 0 */
			Other,
			/** 13 */
			Skype,
			/** 14 */
			Slack,
			/** 12 */
			Telegram,
			/** 2 */
			Twitter,
			/** 4 */
			Wechat,
			/** 15 */
			WhatsApp
		}
		enum DeliveryPriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum StateCode {
			/** 2 */
			Canceled,
			/** 1 */
			Completed,
			/** 0 */
			Open
		}
		enum StatusCode {
			/** 3 */
			Canceled,
			/** 2 */
			Completed,
			/** 1 */
			Open
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
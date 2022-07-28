//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormQueueItem_Information {
		interface tab_general_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date the record was assigned to the queue. */
			EnteredOn: DevKit.Controls.DateTime;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Choose the queue that the item is assigned to. */
			QueueId: DevKit.Controls.Lookup;
			/** Shows who is working on the queue item. */
			WorkerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormQueueItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form QueueItem_Information */
		Body: DevKit.FormQueueItem_Information.Body;
		/** The Footer section of form QueueItem_Information */
		Footer: DevKit.FormQueueItem_Information.Footer;
		/** The Process of form QueueItem_Information */
		Process: DevKit.FormQueueItem_Information.Process;
		/** The SidePanes of form QueueItem_Information */
		SidePanes: DevKit.SidePanes;
	}
	class QueueItemApi {
		/**
		* DynamicsCrm.DevKit QueueItemApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the date the record was assigned to the queue. */
		readonly EnteredOn_UtcDateAndTime: Date;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the queueitem. */
		readonly ModifiedOnBehalfBy: string;
		/** Liveworkstream this queue item belongs to */
		msdyn_liveworkstreamid: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_activitypointer: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_appointment: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_bulkoperation: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_campaignactivity: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_campaignresponse: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_chat: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_email: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_fax: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_incident: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_knowledgearticle: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_letter: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_agreementbookingdate: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_agreementbookingsetup: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_agreementinvoicedate: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_agreementinvoicesetup: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_approval: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_bookingalert: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_inventoryadjustment: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_inventorytransfer: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_iotalert: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_knowledgearticletemplate: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_liveconversation: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_ocliveworkitem: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_ocoutboundmessage: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_ocsession: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_overflowactionconfig: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_project: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_projecttask: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_resourcerequest: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_timegroup: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_timegroupdetail: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_workorder: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_workorderincident: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_workorderservice: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_workorderservicetask: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msfp_alert: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msfp_surveyinvite: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msfp_surveyresponse: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_phonecall: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_recurringappointmentmaster: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_serviceappointment: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_socialactivity: string;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_task: string;
		/** Select the type of the queue item, such as activity, case, or appointment. */
		readonly ObjectTypeCode: OptionSet.QueueItem.ObjectTypeCode;
		/** Unique identifier of the organization with which the queue item is associated. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the queue item. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the queue item. */
		readonly OwningUser: string;
		/** Priority of the queue item. */
		Priority: number;
		/** Choose the queue that the item is assigned to. */
		QueueId: string;
		/** Unique identifier of the queue item. */
		QueueItemId: string;
		/** Sender who created the queue item. */
		Sender: string;
		/** Status of the queue item. */
		State: number;
		/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.QueueItem.StateCode;
		/** Reason for the status of the queue item. */
		Status: number;
		/** Select the item's status. */
		StatusCode: OptionSet.QueueItem.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue. */
		readonly Title: string;
		/** Recipients listed on the To line of the message for email queue items. */
		ToRecipients: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the queue item. */
		readonly VersionNumber: number;
		/** Shows who is working on the queue item. */
		workerid_systemuser: string;
		/** Shows who is working on the queue item. */
		workerid_team: string;
		/** Shows the date and time when the queue item was last assigned to a user. */
		readonly WorkerIdModifiedOn_UtcDateOnly: Date;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the date the record was assigned to the queue. */
			readonly EnteredOn_UtcDateAndTime: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the queueitem. */
			readonly ModifiedOnBehalfBy: string;
			/** Liveworkstream this queue item belongs to */
			readonly msdyn_liveworkstreamid: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_activitypointer: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_appointment: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_bulkoperation: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_campaignactivity: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_campaignresponse: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_chat: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_email: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_fax: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_incident: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_knowledgearticle: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_letter: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_agreementbookingdate: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_agreementbookingsetup: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_agreementinvoicedate: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_agreementinvoicesetup: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_approval: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_bookingalert: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_inventoryadjustment: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_inventorytransfer: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_iotalert: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_knowledgearticletemplate: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_liveconversation: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_ocliveworkitem: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_ocoutboundmessage: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_ocsession: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_overflowactionconfig: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_project: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_projecttask: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_resourcerequest: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_timegroup: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_timegroupdetail: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_workorder: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_workorderincident: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_workorderservice: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msdyn_workorderservicetask: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msfp_alert: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msfp_surveyinvite: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_msfp_surveyresponse: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_phonecall: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_recurringappointmentmaster: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_serviceappointment: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_socialactivity: string;
			/** Choose the activity, case, or article assigned to the queue. */
			readonly objectid_task: string;
			/** Select the type of the queue item, such as activity, case, or appointment. */
			readonly ObjectTypeCode: string;
			/** Unique identifier of the organization with which the queue item is associated. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the queue item. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the queue item. */
			readonly OwningUser: string;
			/** Priority of the queue item. */
			readonly Priority: string;
			/** Choose the queue that the item is assigned to. */
			readonly QueueId: string;
			/** Unique identifier of the queue item. */
			readonly QueueItemId: string;
			/** Sender who created the queue item. */
			readonly Sender: string;
			/** Status of the queue item. */
			readonly State: string;
			/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Reason for the status of the queue item. */
			readonly Status: string;
			/** Select the item's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue. */
			readonly Title: string;
			/** Recipients listed on the To line of the message for email queue items. */
			readonly ToRecipients: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the queue item. */
			readonly VersionNumber: string;
			/** Shows who is working on the queue item. */
			readonly workerid_systemuser: string;
			/** Shows who is working on the queue item. */
			readonly workerid_team: string;
			/** Shows the date and time when the queue item was last assigned to a user. */
			readonly WorkerIdModifiedOn_UtcDateOnly: string;
		}
	}
}
declare namespace OptionSet {
	namespace QueueItem {
		enum ObjectIdTypeCode {
		}
		enum ObjectTypeCode {
			/** 4200 */
			Activity,
			/** 10580 */
			Agreement_Booking_Date,
			/** 10585 */
			Agreement_Booking_Setup,
			/** 10586 */
			Agreement_Invoice_Date,
			/** 10588 */
			Agreement_Invoice_Setup,
			/** 4201 */
			Appointment,
			/** 10473 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 112 */
			Case,
			/** 10743 */
			Conversation,
			/** 10330 */
			Customer_Voice_alert,
			/** 10340 */
			Customer_Voice_survey_invite,
			/** 10342 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 10484 */
			Fulfillment_Preference,
			/** 10608 */
			Inventory_Adjustment,
			/** 10611 */
			Inventory_Transfer,
			/** 10165 */
			IoT_Alert,
			/** 9953 */
			Knowledge_Article,
			/** 10101 */
			Knowledge_Article_Template,
			/** 4207 */
			Letter,
			/** 10733 */
			Ongoing_conversation_Deprecated,
			/** 10857 */
			Outbound_message,
			/** 10714 */
			Overflow_Action_Config,
			/** 4210 */
			Phone_Call,
			/** 10528 */
			Project,
			/** 10489 */
			Project_Service_Approval,
			/** 10533 */
			Project_Task,
			/** 4406 */
			Quick_Campaign,
			/** 4251 */
			Recurring_Appointment,
			/** 10551 */
			Resource_Request,
			/** 4214 */
			Service_Activity,
			/** 10760 */
			Session,
			/** 4216 */
			Social_Activity,
			/** 4212 */
			Task,
			/** 10088 */
			Teams_chat,
			/** 10485 */
			Time_Group_Detail,
			/** 10651 */
			Work_Order,
			/** 10654 */
			Work_Order_Incident,
			/** 10657 */
			Work_Order_Service,
			/** 10658 */
			Work_Order_Service_Task
		}
		enum OwnerIdType {
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum WorkerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormQueueItem_Information {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date the record was assigned to the queue. */
			EnteredOn: DevKit.Form.Controls.ControlDateTime;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Choose the activity, case, or article assigned to the queue. */
			ObjectId: DevKit.Form.Controls.ControlLookup;
			/** Choose the queue that the item is assigned to. */
			QueueId: DevKit.Form.Controls.ControlLookup;
			/** Shows who is working on the queue item. */
			WorkerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormQueueItem_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form QueueItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form QueueItem_Information */
		Body: LuckyMokey.FormQueueItem_Information.Body;
		/** The Footer section of form QueueItem_Information */
		Footer: LuckyMokey.FormQueueItem_Information.Footer;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date the record was assigned to the queue. */
		EnteredOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the queueitem. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_activitypointer: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_incident: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_approval: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_project: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_projecttask: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_resourcerequest: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Select the type of the queue item, such as activity, case, or appointment. */
		ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the organization with which the queue item is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the queue item. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the queue item. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the queue that the item is assigned to. */
		QueueId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the queue item. */
		QueueItemId: DevKit.WebApi.GuidValue;
		/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the item's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue. */
		Title: DevKit.WebApi.StringValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the queue item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Shows who is working on the queue item. */
		workerid_systemuser: DevKit.WebApi.LookupValue;
		/** Shows who is working on the queue item. */
		workerid_team: DevKit.WebApi.LookupValue;
		/** Shows the date and time when the queue item was last assigned to a user. */
		WorkerIdModifiedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
	}
}
declare namespace OptionSet {
	namespace QueueItem {
		enum ObjectTypeCode {
			/** 4402 */
			Campaign_Activity,
			/** 10227 */
			Inventory_Adjustment,
			/** 10273 */
			Work_Order_Incident,
			/** 10154 */
			Project,
			/** 10087 */
			Booking_Alert,
			/** 10277 */
			Work_Order_Service_Task,
			/** 10338 */
			Conversation,
			/** 112 */
			Case,
			/** 4207 */
			Letter,
			/** 4406 */
			Quick_Campaign,
			/** 4201 */
			Appointment,
			/** 10079 */
			Forms_Pro_survey_response,
			/** 10197 */
			Agreement_Booking_Date,
			/** 9953 */
			Knowledge_Article,
			/** 10177 */
			Resource_Request,
			/** 10115 */
			Project_Service_Approval,
			/** 4212 */
			Task,
			/** 4401 */
			Campaign_Response,
			/** 4214 */
			Service_Activity,
			/** 4216 */
			Social_Activity,
			/** 10202 */
			Agreement_Booking_Setup,
			/** 10110 */
			Fulfillment_Preference,
			/** 10011 */
			Knowledge_Article_Template,
			/** 10270 */
			Work_Order,
			/** 10332 */
			Ongoing_conversation,
			/** 4202 */
			Email,
			/** 4200 */
			Activity,
			/** 4251 */
			Recurring_Appointment,
			/** 10205 */
			Agreement_Invoice_Setup,
			/** 10078 */
			Forms_Pro_survey_invite,
			/** 10203 */
			Agreement_Invoice_Date,
			/** 10111 */
			Time_Group_Detail,
			/** 10230 */
			Inventory_Transfer,
			/** 4204 */
			Fax,
			/** 10347 */
			Session,
			/** 4210 */
			Phone_Call,
			/** 10281 */
			IoT_Alert,
			/** 10159 */
			Project_Task,
			/** 10276 */
			Work_Order_Service
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 2 */
			Inactive,
			/** 1 */
			Active
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
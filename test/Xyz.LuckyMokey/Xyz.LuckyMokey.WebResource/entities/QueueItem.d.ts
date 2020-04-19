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
}
declare namespace OptionSet {
	namespace QueueItem {
		enum ObjectTypeCode {
			/** 10202 */
			Agreement_Booking_Setup,
			/** 10197 */
			Agreement_Booking_Date,
			/** 10205 */
			Agreement_Invoice_Setup,
			/** 10203 */
			Agreement_Invoice_Date,
			/** 10177 */
			Resource_Request,
			/** 10115 */
			Project_Service_Approval,
			/** 10111 */
			Time_Group_Detail,
			/** 10159 */
			Project_Task,
			/** 10154 */
			Project,
			/** 10227 */
			Inventory_Adjustment,
			/** 10332 */
			Ongoing_conversation,
			/** 10281 */
			IoT_Alert,
			/** 10347 */
			Session,
			/** 10338 */
			Conversation,
			/** 10277 */
			Work_Order_Service_Task,
			/** 10270 */
			Work_Order,
			/** 10230 */
			Inventory_Transfer,
			/** 10276 */
			Work_Order_Service,
			/** 10273 */
			Work_Order_Incident,
			/** 10110 */
			Fulfillment_Preference,
			/** 4251 */
			Recurring_Appointment,
			/** 4200 */
			Activity,
			/** 4212 */
			Task,
			/** 4210 */
			Phone_Call,
			/** 4207 */
			Letter,
			/** 4201 */
			Appointment,
			/** 4204 */
			Fax,
			/** 9953 */
			Knowledge_Article,
			/** 4216 */
			Social_Activity,
			/** 4202 */
			Email,
			/** 10078 */
			Forms_Pro_survey_invite,
			/** 4214 */
			Service_Activity,
			/** 10087 */
			Booking_Alert,
			/** 10079 */
			Forms_Pro_survey_response,
			/** 112 */
			Case,
			/** 4402 */
			Campaign_Activity,
			/** 10011 */
			Knowledge_Article_Template,
			/** 4406 */
			Quick_Campaign,
			/** 4401 */
			Campaign_Response
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
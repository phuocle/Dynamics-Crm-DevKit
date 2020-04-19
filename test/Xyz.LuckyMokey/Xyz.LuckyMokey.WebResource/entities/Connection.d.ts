//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormConnection_Information {
		interface Header {
			/** Unique identifier of the source record. */
			Record1Id: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_info_Sections {
			info_s: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_Sections {
			connect_from: DevKit.Form.Controls.ControlSection;
			details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_info extends DevKit.Form.Controls.IControlTab {
			Section: tab_info_Sections;
		}
		interface tab_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_Sections;
		}
		interface Tabs {
			info: tab_info;
			details: tab_details;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the connection, such as the length or quality of the relationship. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the end date of the connection. */
			EffectiveEnd: DevKit.Form.Controls.ControlDate;
			/** Enter the start date of the connection. */
			EffectiveStart: DevKit.Form.Controls.ControlDate;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the source record. */
			Record1Id: DevKit.Form.Controls.ControlLookup;
			/** Choose the primary party's role or relationship with the second party. */
			Record1RoleId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the target record. */
			Record2Id: DevKit.Form.Controls.ControlLookup;
			/** Choose the secondary party's role or relationship with the primary party. */
			Record2RoleId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormConnection_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Connection_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Connection_Information */
		Body: LuckyMokey.FormConnection_Information.Body;
		/** The Footer section of form Connection_Information */
		Footer: LuckyMokey.FormConnection_Information.Footer;
		/** The Header section of form Connection_Information */
		Header: LuckyMokey.FormConnection_Information.Header;
	}
}
declare namespace OptionSet {
	namespace Connection {
		enum Record1ObjectTypeCode {
			/** 10245 */
			Purchase_Order_Receipt_Product,
			/** 10246 */
			Purchase_Order_SubStatus,
			/** 10247 */
			Quote_Booking_Incident,
			/** 10244 */
			Purchase_Order_Receipt,
			/** 10241 */
			Purchase_Order,
			/** 10242 */
			Purchase_Order_Bill,
			/** 10243 */
			Purchase_Order_Product,
			/** 10248 */
			Quote_Booking_Product,
			/** 10257 */
			RMA_Receipt,
			/** 10258 */
			RMA_Receipt_Product,
			/** 10259 */
			RMA_SubStatus,
			/** 10256 */
			RMA_Product,
			/** 10249 */
			Quote_Booking_Service,
			/** 10250 */
			Quote_Booking_Service_Task,
			/** 10255 */
			RMA,
			/** 10223 */
			Incident_Type_Service,
			/** 10227 */
			Inventory_Adjustment,
			/** 10228 */
			Inventory_Adjustment_Product,
			/** 10222 */
			Incident_Type_Product,
			/** 10208 */
			Booking_Timestamp,
			/** 10213 */
			Customer_Asset,
			/** 10221 */
			Incident_Type_Characteristic,
			/** 10229 */
			Inventory_Journal,
			/** 10238 */
			Payment_Term,
			/** 10239 */
			Postal_Code,
			/** 10240 */
			Product_Inventory,
			/** 10237 */
			Payment_Method,
			/** 10230 */
			Inventory_Transfer,
			/** 10235 */
			Payment,
			/** 10236 */
			Payment_Detail,
			/** 10332 */
			Ongoing_conversation,
			/** 10338 */
			Conversation,
			/** 10347 */
			Session,
			/** 10288 */
			IoT_Device_Registration_History,
			/** 10282 */
			IoT_Device,
			/** 10283 */
			IoT_Device_Category,
			/** 10284 */
			IoT_Device_Command,
			/** 10401 */
			migrated_record,
			/** 1 */
			Account,
			/** 2 */
			Contact,
			/** 112 */
			Case,
			/** 8 */
			User,
			/** 10403 */
			Document,
			/** 10413 */
			Option,
			/** 10436 */
			Toolbar_Button,
			/** 10265 */
			Tax_Code,
			/** 10267 */
			Time_Off_Request,
			/** 10269 */
			Warehouse,
			/** 10264 */
			Ship_Via,
			/** 10260 */
			RTV,
			/** 10261 */
			RTV_Product,
			/** 10262 */
			RTV_Substatus,
			/** 10270 */
			Work_Order,
			/** 10276 */
			Work_Order_Service,
			/** 10277 */
			Work_Order_Service_Task,
			/** 10281 */
			IoT_Alert,
			/** 10275 */
			Resource_Restriction_Deprecated,
			/** 10271 */
			Work_Order_Characteristic_Deprecated,
			/** 10273 */
			Work_Order_Incident,
			/** 10274 */
			Work_Order_Product,
			/** 10205 */
			Agreement_Invoice_Setup,
			/** 1022 */
			Price_List,
			/** 1024 */
			Product,
			/** 4400 */
			Campaign,
			/** 4 */
			Lead,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 4710 */
			Process_Session,
			/** 2013 */
			Territory,
			/** 4402 */
			Campaign_Activity,
			/** 9701 */
			Entitlement_Channel,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 4000 */
			FacilityEquipment,
			/** 9700 */
			Entitlement,
			/** 4300 */
			Marketing_List,
			/** 4007 */
			Resource_Group,
			/** 1010 */
			Contract,
			/** 4216 */
			Social_Activity,
			/** 9930 */
			Knowledge_Base_Record,
			/** 50 */
			Position,
			/** 9600 */
			Goal,
			/** 9953 */
			Knowledge_Article,
			/** 4207 */
			Letter,
			/** 4200 */
			Activity,
			/** 4201 */
			Appointment,
			/** 99 */
			Social_Profile,
			/** 4210 */
			Phone_Call,
			/** 9 */
			Team,
			/** 4212 */
			Task,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4251 */
			Recurring_Appointment,
			/** 10154 */
			Project,
			/** 10162 */
			Project_Team_Member,
			/** 10196 */
			Agreement,
			/** 10153 */
			Process_Notes,
			/** 10110 */
			Fulfillment_Preference,
			/** 10111 */
			Time_Group_Detail,
			/** 10115 */
			Project_Service_Approval,
			/** 10197 */
			Agreement_Booking_Date,
			/** 10202 */
			Agreement_Booking_Setup,
			/** 10203 */
			Agreement_Invoice_Date,
			/** 10204 */
			Agreement_Invoice_Product,
			/** 10201 */
			Agreement_Booking_Service_Task,
			/** 10198 */
			Agreement_Booking_Incident,
			/** 10199 */
			Agreement_Booking_Product,
			/** 10200 */
			Agreement_Booking_Service,
			/** 1084 */
			Quote,
			/** 1088 */
			Order,
			/** 123 */
			Competitor,
			/** 3 */
			Opportunity,
			/** 4005 */
			Scheduling_Group,
			/** 4214 */
			Service_Activity,
			/** 1090 */
			Invoice,
			/** 10069 */
			Profile_Album,
			/** 10090 */
			Booking_Rule,
			/** 10106 */
			Resource_Territory,
			/** 10109 */
			System_User_Scheduler_Setting,
			/** 10088 */
			Booking_Alert_Status,
			/** 10078 */
			Forms_Pro_survey_invite,
			/** 10079 */
			Forms_Pro_survey_response,
			/** 10087 */
			Booking_Alert
		}
		enum Record2ObjectTypeCode {
			/** 10245 */
			Purchase_Order_Receipt_Product,
			/** 10246 */
			Purchase_Order_SubStatus,
			/** 10247 */
			Quote_Booking_Incident,
			/** 10244 */
			Purchase_Order_Receipt,
			/** 10241 */
			Purchase_Order,
			/** 10242 */
			Purchase_Order_Bill,
			/** 10243 */
			Purchase_Order_Product,
			/** 10248 */
			Quote_Booking_Product,
			/** 10257 */
			RMA_Receipt,
			/** 10258 */
			RMA_Receipt_Product,
			/** 10259 */
			RMA_SubStatus,
			/** 10256 */
			RMA_Product,
			/** 10249 */
			Quote_Booking_Service,
			/** 10250 */
			Quote_Booking_Service_Task,
			/** 10255 */
			RMA,
			/** 10223 */
			Incident_Type_Service,
			/** 10227 */
			Inventory_Adjustment,
			/** 10228 */
			Inventory_Adjustment_Product,
			/** 10222 */
			Incident_Type_Product,
			/** 10208 */
			Booking_Timestamp,
			/** 10213 */
			Customer_Asset,
			/** 10221 */
			Incident_Type_Characteristic,
			/** 10229 */
			Inventory_Journal,
			/** 10238 */
			Payment_Term,
			/** 10239 */
			Postal_Code,
			/** 10240 */
			Product_Inventory,
			/** 10237 */
			Payment_Method,
			/** 10230 */
			Inventory_Transfer,
			/** 10235 */
			Payment,
			/** 10236 */
			Payment_Detail,
			/** 10332 */
			Ongoing_conversation,
			/** 10338 */
			Conversation,
			/** 10347 */
			Session,
			/** 10288 */
			IoT_Device_Registration_History,
			/** 10282 */
			IoT_Device,
			/** 10283 */
			IoT_Device_Category,
			/** 10284 */
			IoT_Device_Command,
			/** 10401 */
			migrated_record,
			/** 1 */
			Account,
			/** 2 */
			Contact,
			/** 112 */
			Case,
			/** 8 */
			User,
			/** 10403 */
			Document,
			/** 10413 */
			Option,
			/** 10436 */
			Toolbar_Button,
			/** 10265 */
			Tax_Code,
			/** 10267 */
			Time_Off_Request,
			/** 10269 */
			Warehouse,
			/** 10264 */
			Ship_Via,
			/** 10260 */
			RTV,
			/** 10261 */
			RTV_Product,
			/** 10262 */
			RTV_Substatus,
			/** 10270 */
			Work_Order,
			/** 10276 */
			Work_Order_Service,
			/** 10277 */
			Work_Order_Service_Task,
			/** 10281 */
			IoT_Alert,
			/** 10275 */
			Resource_Restriction_Deprecated,
			/** 10271 */
			Work_Order_Characteristic_Deprecated,
			/** 10273 */
			Work_Order_Incident,
			/** 10274 */
			Work_Order_Product,
			/** 10205 */
			Agreement_Invoice_Setup,
			/** 1024 */
			Product,
			/** 4400 */
			Campaign,
			/** 4402 */
			Campaign_Activity,
			/** 1022 */
			Price_List,
			/** 9953 */
			Knowledge_Article,
			/** 4216 */
			Social_Activity,
			/** 4 */
			Lead,
			/** 4300 */
			Marketing_List,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 4000 */
			FacilityEquipment,
			/** 4005 */
			Scheduling_Group,
			/** 9701 */
			Entitlement_Channel,
			/** 4007 */
			Resource_Group,
			/** 1010 */
			Contract,
			/** 9700 */
			Entitlement,
			/** 9930 */
			Knowledge_Base_Record,
			/** 4212 */
			Task,
			/** 4710 */
			Process_Session,
			/** 4201 */
			Appointment,
			/** 99 */
			Social_Profile,
			/** 9600 */
			Goal,
			/** 4200 */
			Activity,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9 */
			Team,
			/** 4207 */
			Letter,
			/** 4202 */
			Email,
			/** 4210 */
			Phone_Call,
			/** 50 */
			Position,
			/** 4204 */
			Fax,
			/** 4251 */
			Recurring_Appointment,
			/** 10154 */
			Project,
			/** 10162 */
			Project_Team_Member,
			/** 10196 */
			Agreement,
			/** 10153 */
			Process_Notes,
			/** 10110 */
			Fulfillment_Preference,
			/** 10111 */
			Time_Group_Detail,
			/** 10115 */
			Project_Service_Approval,
			/** 10197 */
			Agreement_Booking_Date,
			/** 10202 */
			Agreement_Booking_Setup,
			/** 10203 */
			Agreement_Invoice_Date,
			/** 10204 */
			Agreement_Invoice_Product,
			/** 10201 */
			Agreement_Booking_Service_Task,
			/** 10198 */
			Agreement_Booking_Incident,
			/** 10199 */
			Agreement_Booking_Product,
			/** 10200 */
			Agreement_Booking_Service,
			/** 1088 */
			Order,
			/** 123 */
			Competitor,
			/** 2013 */
			Territory,
			/** 1084 */
			Quote,
			/** 4214 */
			Service_Activity,
			/** 1090 */
			Invoice,
			/** 3 */
			Opportunity,
			/** 10069 */
			Profile_Album,
			/** 10090 */
			Booking_Rule,
			/** 10106 */
			Resource_Territory,
			/** 10109 */
			System_User_Scheduler_Setting,
			/** 10088 */
			Booking_Alert_Status,
			/** 10078 */
			Forms_Pro_survey_invite,
			/** 10079 */
			Forms_Pro_survey_response,
			/** 10087 */
			Booking_Alert
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
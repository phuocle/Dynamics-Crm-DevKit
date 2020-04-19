//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormPhone_Call {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_phonecall_Sections {
			general_information: DevKit.Form.Controls.ControlSection;
			phone_call_description: DevKit.Form.Controls.ControlSection;
			phone_call_details: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_phonecall extends DevKit.Form.Controls.IControlTab {
			Section: tab_phonecall_Sections;
		}
		interface Tabs {
			phonecall: tab_phonecall;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the object with which the phone call activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormPhone_Call extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Phone_Call
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Phone_Call */
		Body: LuckyMokey.FormPhone_Call.Body;
		/** The Header section of form Phone_Call */
		Header: LuckyMokey.FormPhone_Call.Header;
	}
	namespace FormPhone_Call_for_Interactive_experience {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_4: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the object with which the phone call activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the phone call activity is associated. */
			RegardingObjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormPhone_Call_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Phone_Call_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Phone_Call_for_Interactive_experience */
		Body: LuckyMokey.FormPhone_Call_for_Interactive_experience.Body;
		/** The Header section of form Phone_Call_for_Interactive_experience */
		Header: LuckyMokey.FormPhone_Call_for_Interactive_experience.Header;
	}
	namespace FormPhone_call_quick_create_form {
		interface tab_PhoneCall_Tab_1_Sections {
			PhoneCall_Description: DevKit.Form.Controls.ControlSection;
			PhoneCall_Description_2: DevKit.Form.Controls.ControlSection;
			PhoneCall_Description_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_PhoneCall_Tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_PhoneCall_Tab_1_Sections;
		}
		interface Tabs {
			PhoneCall_Tab_1: tab_PhoneCall_Tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Form.Controls.ControlString;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the object with which the phone call activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormPhone_call_quick_create_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Phone_call_quick_create_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Phone_call_quick_create_form */
		Body: LuckyMokey.FormPhone_call_quick_create_form.Body;
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
//{'JsForm':['Phone Call','Phone Call for Interactive experience','Phone call quick create form.'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormChannel_Property_Group {
		interface tab_property_bag_summary_Sections {
			property_bag_properties_1: DevKit.Form.Controls.ControlSection;
			property_bag_items_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_property_bag_summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_property_bag_summary_Sections;
		}
		interface Tabs {
			property_bag_summary: tab_property_bag_summary;
		}
		interface Body {
			Tab: Tabs;
			propertiesGrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type the name of the channel property group. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the activity that the property group is associated with. */
			RegardingTypeCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormChannel_Property_Group extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Channel_Property_Group
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Channel_Property_Group */
		Body: LuckyMokey.FormChannel_Property_Group.Body;
	}
}
declare namespace OptionSet {
	namespace ChannelPropertyGroup {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum RegardingTypeCode {
			/** 4210 */
			Phone_Call,
			/** 4202 */
			Email,
			/** 4201 */
			Appointment,
			/** 4212 */
			Task,
			/** 4216 */
			Social_Activity,
			/** 4214 */
			Service_Activity,
			/** 10078 */
			Forms_Pro_survey_invite,
			/** 10079 */
			Forms_Pro_survey_response,
			/** 10087 */
			Booking_Alert,
			/** 10115 */
			Project_Service_Approval,
			/** 10338 */
			Conversation,
			/** 10347 */
			Session
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
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
//{'JsForm':['Channel Property Group'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
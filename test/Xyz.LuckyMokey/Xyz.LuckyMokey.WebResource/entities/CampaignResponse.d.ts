//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCampaign_Response {
		interface tab_new_campaign_response_Sections {
			summary: DevKit.Form.Controls.ControlSection;
			details: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_new_campaign_response extends DevKit.Form.Controls.IControlTab {
			Section: tab_new_campaign_response_Sections;
		}
		interface Tabs {
			new_campaign_response: tab_new_campaign_response;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the account, contact, or lead that submitted the campaign response, if it was received from an existing prospect or customer. */
			Customer: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the campaign response, such as key discussion points or objectives. */
			Description: DevKit.Form.Controls.ControlString;
			/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Select the type of response from the prospect or customer to indicate their interest in the campaign. */
			ResponseCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a short description about the objective or primary topic of the campaign response. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCampaign_Response extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Campaign_Response
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Campaign_Response */
		Body: LuckyMokey.FormCampaign_Response.Body;
	}
}
declare namespace OptionSet {
	namespace CampaignResponse {
		enum ChannelTypeCode {
			/** 1 */
			Email,
			/** 2 */
			Phone,
			/** 3 */
			Fax,
			/** 4 */
			Letter,
			/** 5 */
			Appointment,
			/** 6 */
			Others
		}
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 1 */
			Recurring_Master,
			/** 2 */
			Recurring_Instance,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum ResponseCode {
			/** 1 */
			Interested,
			/** 2 */
			Not_Interested,
			/** 3 */
			Do_Not_Send_Marketing_Materials,
			/** 4 */
			Error
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Closed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Closed,
			/** 3 */
			Canceled
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
//{'JsForm':['Campaign Response'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
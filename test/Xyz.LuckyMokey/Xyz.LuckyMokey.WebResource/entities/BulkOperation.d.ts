//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormQuick_Campaign {
		interface Header {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Choose the activity to create that determines how target prospects or customers in this quick campaign are contacted. */
			CreatedRecordTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the quick campaign's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the type of records targeted in the quick campaign to identify the target audience. */
			TargetedRecordTypeCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Summary_Sections {
			Information: DevKit.Form.Controls.ControlSection;
			RELATED_PANE: DevKit.Form.Controls.ControlSection;
			selectedMembers: DevKit.Form.Controls.ControlSection;
			excludedMembers: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Responses_Sections {
			Responses: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_Responses extends DevKit.Form.Controls.IControlTab {
			Section: tab_Responses_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
			Responses: tab_Responses;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			selected_accounts: DevKit.Form.Controls.ControlGrid;
			selected_contacts: DevKit.Form.Controls.ControlGrid;
			selected_leads: DevKit.Form.Controls.ControlGrid;
			excluded_accounts: DevKit.Form.Controls.ControlGrid;
			excluded_contacts: DevKit.Form.Controls.ControlGrid;
			excluded_leads: DevKit.Form.Controls.ControlGrid;
			Responses: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the quick campaign, such as the products or services offered. */
			Description: DevKit.Form.Controls.ControlString;
			/** Number of records which failed in the bulk operation. */
			FailureCount: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the quick campaign. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Number of records which succeeded in the bulk operation. */
			SuccessCount: DevKit.Form.Controls.ControlInteger;
		}
		interface Navigation {
			navRelationshipActivities: DevKit.Form.Controls.ControlNavigationItem,
			navRelationshipBulkOperationLogs: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormQuick_Campaign extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Campaign
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_Campaign */
		Body: LuckyMokey.FormQuick_Campaign.Body;
		/** The Header section of form Quick_Campaign */
		Header: LuckyMokey.FormQuick_Campaign.Header;
		/** The Navigation of form Quick_Campaign */
		Navigation: LuckyMokey.FormQuick_Campaign.Navigation;
	}
	namespace FormQuick_Campaign_deprecated {
		interface Header {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Choose the activity to create that determines how target prospects or customers in this quick campaign are contacted. */
			CreatedRecordTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the quick campaign's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the type of records targeted in the quick campaign to identify the target audience. */
			TargetedRecordTypeCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Summary_Sections {
			Information: DevKit.Form.Controls.ControlSection;
			RELATED_PANE: DevKit.Form.Controls.ControlSection;
			selectedMembers: DevKit.Form.Controls.ControlSection;
			excludedMembers: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Responses_Sections {
			Responses: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_Responses extends DevKit.Form.Controls.IControlTab {
			Section: tab_Responses_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
			Responses: tab_Responses;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			accounts: DevKit.Form.Controls.ControlGrid;
			contacts: DevKit.Form.Controls.ControlGrid;
			leads: DevKit.Form.Controls.ControlGrid;
			leads_uci: DevKit.Form.Controls.ControlGrid;
			accounts_uci: DevKit.Form.Controls.ControlGrid;
			contacts_uci: DevKit.Form.Controls.ControlGrid;
			excluded_contacts_uci: DevKit.Form.Controls.ControlGrid;
			excluded_accounts_uci: DevKit.Form.Controls.ControlGrid;
			excluded_leads_uci: DevKit.Form.Controls.ControlGrid;
			Responses: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the quick campaign, such as the products or services offered. */
			Description: DevKit.Form.Controls.ControlString;
			/** Number of records which failed in the bulk operation. */
			FailureCount: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the quick campaign. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Number of records which succeeded in the bulk operation. */
			SuccessCount: DevKit.Form.Controls.ControlInteger;
		}
		interface Navigation {
			navRelationshipActivities: DevKit.Form.Controls.ControlNavigationItem,
			navRelationshipBulkOperationLogs: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormQuick_Campaign_deprecated extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Campaign_deprecated
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_Campaign_deprecated */
		Body: LuckyMokey.FormQuick_Campaign_deprecated.Body;
		/** The Header section of form Quick_Campaign_deprecated */
		Header: LuckyMokey.FormQuick_Campaign_deprecated.Header;
		/** The Navigation of form Quick_Campaign_deprecated */
		Navigation: LuckyMokey.FormQuick_Campaign_deprecated.Navigation;
	}
}
declare namespace OptionSet {
	namespace BulkOperation {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum CreatedRecordTypeCode {
			/** 1 */
			Phone_Call,
			/** 2 */
			Fax,
			/** 3 */
			Letter,
			/** 4 */
			Email,
			/** 5 */
			Appointment,
			/** 6 */
			Send_Direct_Email
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
		enum OperationTypeCode {
			/** 1 */
			Create_Opportunities,
			/** 2 */
			Create_Activities,
			/** 3 */
			Send_Direct_Mail,
			/** 4 */
			Distribute,
			/** 5 */
			Execute,
			/** 7 */
			Quick_Campaign
		}
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
			Closed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Pending,
			/** 2 */
			In_Progress,
			/** 3 */
			Aborted,
			/** 4 */
			Completed,
			/** 5 */
			Canceled
		}
		enum TargetedRecordTypeCode {
			/** 1 */
			Account,
			/** 2 */
			Contact,
			/** 4 */
			Lead
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
//{'JsForm':['Quick Campaign','Quick Campaign (deprecated)'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
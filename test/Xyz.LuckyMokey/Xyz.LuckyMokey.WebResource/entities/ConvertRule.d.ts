//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRecord_Creation_and_Update_Rule {
		interface tab_general_Sections {
			ConvertToCaseSettings: DevKit.Form.Controls.ControlSection;
			ChannelProperties: DevKit.Form.Controls.ControlSection;
			SocialMonitoringCaseConditions: DevKit.Form.Controls.ControlSection;
			EmailCaseConditions: DevKit.Form.Controls.ControlSection;
			AutoResponseSettings: DevKit.Form.Controls.ControlSection;
			CaseDetails: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			ConvertRuleItemsGrid: DevKit.Form.Controls.ControlGrid;
			/** Choose whether items from unknown senders should be converted to records. */
			AllowUnknownSender: DevKit.Form.Controls.ControlBoolean;
			/** channel property group associated with the convert rule. */
			ChannelPropertyGroupId: DevKit.Form.Controls.ControlLookup;
			/** Choose whether cases should be created for customers with active entitlements. */
			CheckActiveEntitlement: DevKit.Form.Controls.ControlBoolean;
			/** Information whether record needs to be created for black listed social profiles. */
			CheckBlockedSocialProfile: DevKit.Form.Controls.ControlBoolean;
			/** Information whether record needs to be created for direct messages. */
			CheckDirectMessages: DevKit.Form.Controls.ControlBoolean;
			/** Choose whether an item related to a resolved case should be converted to a case. */
			CheckIfResolved: DevKit.Form.Controls.ControlBoolean;
			/** Type a title or name of the queue for which the setting is defined. */
			Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the queue that the rule is assigned to. */
			QueueId: DevKit.Form.Controls.ControlLookup;
			/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
			ResolvedSince: DevKit.Form.Controls.ControlInteger;
			/** Choose the email template to use to create an automatic response to the customer. */
			ResponseTemplateId: DevKit.Form.Controls.ControlLookup;
			/** Choose whether to send an automatic email response to the customer after a record is created. */
			SendAutomaticResponse: DevKit.Form.Controls.ControlBoolean;
			/** Identifies the Dynamics 365 activity that's the source of the record. */
			SourceChannelTypeCode: DevKit.Form.Controls.ControlString;
			/** Source of the record. */
			SourceTypeCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormRecord_Creation_and_Update_Rule extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Record_Creation_and_Update_Rule
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Record_Creation_and_Update_Rule */
		Body: LuckyMokey.FormRecord_Creation_and_Update_Rule.Body;
	}
	namespace FormRecord_Creation_and_Update_Rule_UCI {
		interface Header {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Reason for the status of the Convert Rule */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Basic_Sections {
			Details: DevKit.Form.Controls.ControlSection;
			Conditions_To_Evaluate: DevKit.Form.Controls.ControlSection;
			Frequently_Used_Configurations: DevKit.Form.Controls.ControlSection;
			Basic_empty_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Advanced_Sections {
			Before_Evaluating_Conditions: DevKit.Form.Controls.ControlSection;
			Advanced_Settings: DevKit.Form.Controls.ControlSection;
			Advanced_empty_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Basic extends DevKit.Form.Controls.IControlTab {
			Section: tab_Basic_Sections;
		}
		interface tab_Advanced extends DevKit.Form.Controls.IControlTab {
			Section: tab_Advanced_Sections;
		}
		interface Tabs {
			Basic: tab_Basic;
			Advanced: tab_Advanced;
		}
		interface Body {
			Tab: Tabs;
			ConvertRuleItemsGrid: DevKit.Form.Controls.ControlGrid;
			/** Choose whether items from unknown senders should be converted to records. */
			AllowUnknownSender: DevKit.Form.Controls.ControlBoolean;
			/** Choose whether cases should be created for customers with active entitlements. */
			CheckActiveEntitlement: DevKit.Form.Controls.ControlBoolean;
			/** Choose whether an item related to a resolved case should be converted to a case. */
			CheckIfResolved: DevKit.Form.Controls.ControlBoolean;
			/** Choose whether an ARC rule is modern or legacy. */
			ConvertRuleType: DevKit.Form.Controls.ControlBoolean;
			/** Type a title or name of the queue for which the setting is defined. */
			Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the queue that the rule is assigned to. */
			QueueId: DevKit.Form.Controls.ControlLookup;
			/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
			ResolvedSince: DevKit.Form.Controls.ControlInteger;
			/** Choose the email template to use to create an automatic response to the customer. */
			ResponseTemplateId: DevKit.Form.Controls.ControlLookup;
			/** Choose whether to send an automatic email response to the customer after a record is created. */
			SendAutomaticResponse: DevKit.Form.Controls.ControlBoolean;
			sourcechanneltypecode: DevKit.Form.Controls.ControlActionCards;
		}
	}
	class FormRecord_Creation_and_Update_Rule_UCI extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Record_Creation_and_Update_Rule_UCI
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Record_Creation_and_Update_Rule_UCI */
		Body: LuckyMokey.FormRecord_Creation_and_Update_Rule_UCI.Body;
		/** The Header section of form Record_Creation_and_Update_Rule_UCI */
		Header: LuckyMokey.FormRecord_Creation_and_Update_Rule_UCI.Header;
	}
}
declare namespace OptionSet {
	namespace ConvertRule {
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
		enum SourceTypeCode {
			/** 1 */
			Social_Monitoring,
			/** 2 */
			Email
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
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
//{'JsForm':['Record Creation and Update Rule','Record Creation and Update Rule - UCI'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
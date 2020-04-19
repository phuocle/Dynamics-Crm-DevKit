//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormFeedback {
		interface Header {
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Form.Controls.ControlDecimal;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the feedback's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			feedback_Details: DevKit.Form.Controls.ControlSection;
			feedback_Contacts: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows who closed the record. */
			ClosedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ClosedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type the feedback comments. */
			Comments: DevKit.Form.Controls.ControlString;
			/** Shows who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Form.Controls.ControlInteger;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Form.Controls.ControlInteger;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Form.Controls.ControlInteger;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Form.Controls.ControlOptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormFeedback extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Feedback
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Feedback */
		Body: LuckyMokey.FormFeedback.Body;
		/** The Header section of form Feedback */
		Header: LuckyMokey.FormFeedback.Header;
	}
	namespace FormFeedback_MainIC {
		interface Header {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows whether the feedback is open, rejected or closed. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the feedback's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			General_Info: DevKit.Form.Controls.ControlSection;
			Content: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows who closed the record. */
			ClosedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ClosedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type the feedback comments. */
			Comments: DevKit.Form.Controls.ControlString;
			/** Shows who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Form.Controls.ControlLookup;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Form.Controls.ControlInteger;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Form.Controls.ControlInteger;
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Form.Controls.ControlDecimal;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Form.Controls.ControlInteger;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Form.Controls.ControlOptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormFeedback_MainIC extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Feedback_MainIC
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Feedback_MainIC */
		Body: LuckyMokey.FormFeedback_MainIC.Body;
		/** The Header section of form Feedback_MainIC */
		Header: LuckyMokey.FormFeedback_MainIC.Header;
	}
}
declare namespace OptionSet {
	namespace Feedback {
		enum Source {
			/** 0 */
			Internal,
			/** 1 */
			Portal
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Closed
		}
		enum StatusCode {
			/** 1 */
			Proposed,
			/** 2 */
			Accepted,
			/** 3 */
			Closed,
			/** 4 */
			Rejected
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
//{'JsForm':['Feedback','Feedback MainIC'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
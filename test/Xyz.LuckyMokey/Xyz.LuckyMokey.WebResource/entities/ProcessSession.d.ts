//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormProcessSession_Information {
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections {
			Details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary_Sections {
			Summary: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Comments_Sections {
			Comments: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Linked_Sessions_Sections {
			Linked_Sessions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Details_Sections {
			Details_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417 extends DevKit.Form.Controls.IControlTab {
			Section: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_Comments extends DevKit.Form.Controls.IControlTab {
			Section: tab_Comments_Sections;
		}
		interface tab_Linked_Sessions extends DevKit.Form.Controls.IControlTab {
			Section: tab_Linked_Sessions_Sections;
		}
		interface tab_Details extends DevKit.Form.Controls.IControlTab {
			Section: tab_Details_Sections;
		}
		interface Tabs {
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417;
			Summary: tab_Summary;
			Comments: tab_Comments;
			Linked_Sessions: tab_Linked_Sessions;
			Details: tab_Details;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who canceled the dialog session. */
			CanceledBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was canceled. */
			CanceledOn: DevKit.Form.Controls.ControlDateTime;
			/** User comments. */
			Comments: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user who completed the dialog session. */
			CompletedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was completed. */
			CompletedOn: DevKit.Form.Controls.ControlDateTime;
			/** Date and time when the dialog session was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Name of the dialog session. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the succeeding linked dialog session. */
			NextLinkedSessionId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the originating dialog session. */
			OriginatingSessionId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the user or team who owns the dialog session. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the preceding linked dialog session. */
			PreviousLinkedSessionId: DevKit.Form.Controls.ControlLookup;
			/** Select the process activation record that is related to the dialog session. */
			ProcessId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the dialog session is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Form.Controls.ControlDateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Footer {
			/** Status of the dialog session. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormProcessSession_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ProcessSession_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ProcessSession_Information */
		Body: LuckyMokey.FormProcessSession_Information.Body;
		/** The Footer section of form ProcessSession_Information */
		Footer: LuckyMokey.FormProcessSession_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace ProcessSession {
		enum StateCode {
			/** 0 */
			Incomplete,
			/** 1 */
			Complete
		}
		enum StatusCode {
			/** 1 */
			Not_Started,
			/** 2 */
			In_Progress,
			/** 3 */
			Paused,
			/** 4 */
			Completed,
			/** 5 */
			Canceled,
			/** 6 */
			Failed
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
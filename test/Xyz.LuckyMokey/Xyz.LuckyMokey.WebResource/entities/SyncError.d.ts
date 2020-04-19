//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSync_Error {
		interface Header {
			/** Unique identifier of the user or team who owns the sync error. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the sync error status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_General_Tab_Sections {
			SYNCERROR_INFORMATION: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Details_Sections {
		}
		interface tab_General_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Tab_Sections;
		}
		interface tab_Details extends DevKit.Form.Controls.IControlTab {
			Section: tab_Details_Sections;
		}
		interface Tabs {
			General_Tab: tab_General_Tab;
			Details: tab_Details;
		}
		interface Body {
			Tab: Tabs;
			/** Action Name for which sync error has occurred */
			Action: DevKit.Form.Controls.ControlString;
			/** Enter a short description of the sync error. */
			Description: DevKit.Form.Controls.ControlString;
			/** Displays the error code. */
			ErrorCode: DevKit.Form.Controls.ControlString;
			/** Error description from the exception */
			ErrorDetail: DevKit.Form.Controls.ControlString;
			/** Error Message of the exception */
			ErrorMessage: DevKit.Form.Controls.ControlString;
			/** Date and time when the upsync request was executed on CRM server */
			ErrorTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the preferred error type. */
			ErrorType: DevKit.Form.Controls.ControlOptionSet;
			/** Entity name of the record for which sync error has occurred */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the record that the sync error relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormSync_Error extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Sync_Error
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Sync_Error */
		Body: LuckyMokey.FormSync_Error.Body;
		/** The Header section of form Sync_Error */
		Header: LuckyMokey.FormSync_Error.Header;
	}
}
declare namespace OptionSet {
	namespace SyncError {
		enum ErrorType {
			/** 0 */
			Conflict,
			/** 1 */
			Record_not_found,
			/** 2 */
			Record_already_exists,
			/** 3 */
			Others
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Resolved
		}
		enum StatusCode {
			/** 0 */
			Active,
			/** 1 */
			Fixed
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
//{'JsForm':['Sync Error'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
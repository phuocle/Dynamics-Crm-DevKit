//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBulkDeleteOperation_Information {
		interface tab_properties_Sections {
			details: DevKit.Form.Controls.ControlSection;
			querydetails: DevKit.Form.Controls.ControlSection;
		}
		interface tab_properties extends DevKit.Form.Controls.IControlTab {
			Section: tab_properties_Sections;
		}
		interface Tabs {
			properties: tab_properties;
		}
		interface Body {
			Tab: Tabs;
			advfindcontrol: DevKit.Form.Controls.ControlIFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Form.Controls.ControlInteger;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Form.Controls.ControlBoolean;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Name of the bulk deletion job. */
			Name: DevKit.Form.Controls.ControlString;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Form.Controls.ControlDateTime;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormBulkDeleteOperation_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BulkDeleteOperation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BulkDeleteOperation_Information */
		Body: LuckyMokey.FormBulkDeleteOperation_Information.Body;
	}
}
declare namespace OptionSet {
	namespace BulkDeleteOperation {
		enum StateCode {
			/** 0 */
			Ready,
			/** 1 */
			Suspended,
			/** 2 */
			Locked,
			/** 3 */
			Completed
		}
		enum StatusCode {
			/** 0 */
			Waiting_For_Resources,
			/** 10 */
			Waiting,
			/** 11 */
			Retrying,
			/** 12 */
			Paused,
			/** 20 */
			In_Progress,
			/** 21 */
			Pausing,
			/** 22 */
			Canceling,
			/** 30 */
			Succeeded,
			/** 31 */
			Failed,
			/** 32 */
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
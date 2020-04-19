//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSLA_KPI_Instance {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
			Status: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
			FailureTime: DevKit.Form.Controls.ControlDateTime;
			/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
			Regarding: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
			SucceededOn: DevKit.Form.Controls.ControlDateTime;
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
			WarningTime: DevKit.Form.Controls.ControlDateTime;
		}
	}
	class FormSLA_KPI_Instance extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form SLA_KPI_Instance
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SLA_KPI_Instance */
		Body: LuckyMokey.FormSLA_KPI_Instance.Body;
		/** The Header section of form SLA_KPI_Instance */
		Header: LuckyMokey.FormSLA_KPI_Instance.Header;
	}
}
declare namespace OptionSet {
	namespace SLAKPIInstance {
		enum Status {
			/** 0 */
			In_Progress,
			/** 1 */
			Noncompliant,
			/** 2 */
			Nearing_Noncompliance,
			/** 3 */
			Paused,
			/** 4 */
			Succeeded,
			/** 5 */
			Canceled
		}
		enum WarningTimeReached {
			/** 0 */
			No,
			/** 1 */
			Yes
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
//{'JsForm':['SLA KPI Instance'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
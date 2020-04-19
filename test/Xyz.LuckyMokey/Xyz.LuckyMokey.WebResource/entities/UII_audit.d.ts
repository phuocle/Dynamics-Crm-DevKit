//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormUII_audit_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the UII Audit */
			statecode: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the UII Audit */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
			/** Action Data */
			Uii_ActionData: DevKit.Form.Controls.ControlString;
			/** Name of the Action. */
			UII_ActionName: DevKit.Form.Controls.ControlString;
			/** Audit log assigned activity Id. */
			UII_ActivityID: DevKit.Form.Controls.ControlInteger;
			/** Presence information of an Agent. */
			UII_AgentState: DevKit.Form.Controls.ControlString;
			/** Application Id. */
			uii_applicationid: DevKit.Form.Controls.ControlLookup;
			/** Client time zone detail. */
			UII_ClientTimeZone: DevKit.Form.Controls.ControlInteger;
			/** Context Guid. */
			UII_ContextID: DevKit.Form.Controls.ControlString;
			/** Current time. */
			UII_CurrentTime: DevKit.Form.Controls.ControlDateTime;
			/** Account or Contact Guid. */
			UII_CustomerID: DevKit.Form.Controls.ControlString;
			/** Agent's Machine name. */
			UII_MachineName: DevKit.Form.Controls.ControlString;
			/** This attribute is a general Name which is not used for Log Data. */
			UII_name: DevKit.Form.Controls.ControlString;
			/** Target Hosted Application. */
			UII_TargetApplication: DevKit.Form.Controls.ControlString;
			/** Workflow Active Step Id. */
			uii_workflowactivestepid: DevKit.Form.Controls.ControlLookup;
			/** Workflow Id. */
			uii_workflowid: DevKit.Form.Controls.ControlLookup;
			/** Status of the Workflow */
			UII_WorkflowStatus: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the UII Audit */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormUII_audit_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form UII_audit_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UII_audit_Information */
		Body: LuckyMokey.FormUII_audit_Information.Body;
		/** The Footer section of form UII_audit_Information */
		Footer: LuckyMokey.FormUII_audit_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace UII_audit {
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
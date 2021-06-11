//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUII_audit_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the UII Audit */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the UII Audit */
			statuscode: DevKit.Controls.OptionSet;
			/** Action Data */
			Uii_ActionData: DevKit.Controls.String;
			/** Name of the Action. */
			UII_ActionName: DevKit.Controls.String;
			/** Audit log assigned activity Id. */
			UII_ActivityID: DevKit.Controls.Integer;
			/** Presence information of an Agent. */
			UII_AgentState: DevKit.Controls.String;
			/** Application Id. */
			uii_applicationid: DevKit.Controls.Lookup;
			/** Client time zone detail. */
			UII_ClientTimeZone: DevKit.Controls.Integer;
			/** Context Guid. */
			UII_ContextID: DevKit.Controls.String;
			/** Current time. */
			UII_CurrentTime: DevKit.Controls.DateTime;
			/** Account or Contact Guid. */
			UII_CustomerID: DevKit.Controls.String;
			/** Agent's Machine name. */
			UII_MachineName: DevKit.Controls.String;
			/** This attribute is a general Name which is not used for Log Data. */
			UII_name: DevKit.Controls.String;
			/** Target Hosted Application. */
			UII_TargetApplication: DevKit.Controls.String;
			/** Workflow Active Step Id. */
			uii_workflowactivestepid: DevKit.Controls.Lookup;
			/** Workflow Id. */
			uii_workflowid: DevKit.Controls.Lookup;
			/** Status of the Workflow */
			UII_WorkflowStatus: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Audit */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	class FormUII_audit_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form UII_audit_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UII_audit_Information */
		Body: DevKit.FormUII_audit_Information.Body;
		/** The Footer section of form UII_audit_Information */
		Footer: DevKit.FormUII_audit_Information.Footer;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
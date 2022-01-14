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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormUII_audit_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form UII_audit_Information Main Form
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
		/** The Process of form UII_audit_Information */
		Process: DevKit.FormUII_audit_Information.Process;
		/** The SidePanes of form UII_audit_Information */
		SidePanes: DevKit.SidePanes;
	}
	class UII_auditApi {
		/**
		* DynamicsCrm.DevKit UII_auditApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the UII Audit */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UII Audit */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Action Data */
		Uii_ActionData: DevKit.WebApi.StringValue;
		/** Name of the Action. */
		UII_ActionName: DevKit.WebApi.StringValue;
		/** Audit log assigned activity Id. */
		UII_ActivityID: DevKit.WebApi.IntegerValue;
		/** Presence information of an Agent. */
		UII_AgentState: DevKit.WebApi.StringValue;
		/** Application Id. */
		uii_applicationid: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		UII_auditId: DevKit.WebApi.GuidValue;
		/** Client time zone detail. */
		UII_ClientTimeZone: DevKit.WebApi.IntegerValue;
		/** Context Guid. */
		UII_ContextID: DevKit.WebApi.StringValue;
		/** Current time. */
		UII_CurrentTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Account or Contact Guid. */
		UII_CustomerID: DevKit.WebApi.StringValue;
		/** Agent's Machine name. */
		UII_MachineName: DevKit.WebApi.StringValue;
		/** This attribute is a general Name which is not used for Log Data. */
		UII_name: DevKit.WebApi.StringValue;
		/** Target Hosted Application. */
		UII_TargetApplication: DevKit.WebApi.StringValue;
		/** Workflow Active Step Id. */
		uii_workflowactivestepid: DevKit.WebApi.LookupValue;
		/** Workflow Id. */
		uii_workflowid: DevKit.WebApi.LookupValue;
		/** Status of the Workflow */
		UII_WorkflowStatus: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
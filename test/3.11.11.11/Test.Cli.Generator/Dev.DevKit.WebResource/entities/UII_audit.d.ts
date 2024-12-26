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
		* Information [Main Form]
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the UII Audit */
		statecode: OptionSet.UII_audit.statecode;
		/** Reason for the status of the UII Audit */
		statuscode: OptionSet.UII_audit.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Action Data */
		Uii_ActionData: string;
		/** Name of the Action. */
		UII_ActionName: string;
		/** Audit log assigned activity Id. */
		UII_ActivityID: number;
		/** Presence information of an Agent. */
		UII_AgentState: string;
		/** Application Id. */
		uii_applicationid: string;
		/** Unique identifier for entity instances */
		UII_auditId: string;
		/** Client time zone detail. */
		UII_ClientTimeZone: number;
		/** Context Guid. */
		UII_ContextID: string;
		/** Current time. */
		UII_CurrentTime_UtcDateAndTime: Date;
		/** Account or Contact Guid. */
		UII_CustomerID: string;
		/** Agent's Machine name. */
		UII_MachineName: string;
		/** This attribute is a general Name which is not used for Log Data. */
		UII_name: string;
		/** Target Hosted Application. */
		UII_TargetApplication: string;
		/** Workflow Active Step Id. */
		uii_workflowactivestepid: string;
		/** Workflow Id. */
		uii_workflowid: string;
		/** Status of the Workflow */
		UII_WorkflowStatus: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the UII Audit */
			readonly statecode: string;
			/** Reason for the status of the UII Audit */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Action Data */
			readonly Uii_ActionData: string;
			/** Name of the Action. */
			readonly UII_ActionName: string;
			/** Audit log assigned activity Id. */
			readonly UII_ActivityID: string;
			/** Presence information of an Agent. */
			readonly UII_AgentState: string;
			/** Application Id. */
			readonly uii_applicationid: string;
			/** Unique identifier for entity instances */
			readonly UII_auditId: string;
			/** Client time zone detail. */
			readonly UII_ClientTimeZone: string;
			/** Context Guid. */
			readonly UII_ContextID: string;
			/** Current time. */
			readonly UII_CurrentTime_UtcDateAndTime: string;
			/** Account or Contact Guid. */
			readonly UII_CustomerID: string;
			/** Agent's Machine name. */
			readonly UII_MachineName: string;
			/** This attribute is a general Name which is not used for Log Data. */
			readonly UII_name: string;
			/** Target Hosted Application. */
			readonly UII_TargetApplication: string;
			/** Workflow Active Step Id. */
			readonly uii_workflowactivestepid: string;
			/** Workflow Id. */
			readonly uii_workflowid: string;
			/** Status of the Workflow */
			readonly UII_WorkflowStatus: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UII_audit {
		enum OwnerIdType {
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
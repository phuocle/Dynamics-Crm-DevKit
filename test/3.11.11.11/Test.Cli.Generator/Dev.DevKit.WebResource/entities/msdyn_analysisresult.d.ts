//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_analysisresult_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** The parent Analysis Job that produced the Analysis Result */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			msdyn_Category: DevKit.Controls.OptionSet;
			msdyn_EntityName: DevKit.Controls.String;
			msdyn_FileUri: DevKit.Controls.String;
			msdyn_helplink: DevKit.Controls.String;
			msdyn_Level: DevKit.Controls.OptionSet;
			msdyn_Line: DevKit.Controls.Integer;
			msdyn_Member: DevKit.Controls.String;
			msdyn_Message: DevKit.Controls.String;
			msdyn_Module: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The return status of a rule run: pass, fail, or configuration error */
			msdyn_ReturnStatus: DevKit.Controls.OptionSet;
			msdyn_RuleId: DevKit.Controls.String;
			msdyn_RuleReferenceUri: DevKit.Controls.String;
			msdyn_Severity: DevKit.Controls.OptionSet;
			msdyn_Snippet: DevKit.Controls.String;
			msdyn_SolutionHealthMessage: DevKit.Controls.String;
			msdyn_Type: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			AnalysisResultDetails: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_analysisresult_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_analysisresult_Information */
		Body: DevKit.Formmsdyn_analysisresult_Information.Body;
		/** The Header section of form msdyn_analysisresult_Information */
		Header: DevKit.Formmsdyn_analysisresult_Information.Header;
		/** The Process of form msdyn_analysisresult_Information */
		Process: DevKit.Formmsdyn_analysisresult_Information.Process;
		/** The Grid of form msdyn_analysisresult_Information */
		Grid: DevKit.Formmsdyn_analysisresult_Information.Grid;
		/** The SidePanes of form msdyn_analysisresult_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_analysisresultApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysisresultApi
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
		/** The associated Analysis Component that contains the issue described by the Analysis Result. */
		msdyn_AnalysisComponentId: string;
		msdyn_AnalysisComponentType: OptionSet.msdyn_analysisresult.msdyn_AnalysisComponentType;
		/** The parent Analysis Job that produced the Analysis Result */
		msdyn_AnalysisJobId: string;
		/** Unique identifier for entity instances */
		msdyn_analysisresultId: string;
		msdyn_Category: OptionSet.msdyn_analysisresult.msdyn_Category;
		msdyn_ComponentType: OptionSet.msdyn_analysisresult.msdyn_ComponentType;
		msdyn_EntityName: string;
		msdyn_FileUri: string;
		msdyn_HasResolution: boolean;
		msdyn_helplink: string;
		msdyn_Level: OptionSet.msdyn_analysisresult.msdyn_Level;
		msdyn_Line: number;
		msdyn_Member: string;
		msdyn_Message: string;
		msdyn_MessageArguments: string;
		msdyn_MessageId: string;
		msdyn_Module: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Type of issue that needs to be repaired. Same as IssueType Input Parameter for Solution Health Rule. */
		msdyn_RepairIssueType: string;
		/** The return status of a rule run: pass, fail, or configuration error */
		msdyn_ReturnStatus: OptionSet.msdyn_analysisresult.msdyn_ReturnStatus;
		msdyn_RuleId: string;
		msdyn_RuleReferenceUri: string;
		msdyn_Severity: OptionSet.msdyn_analysisresult.msdyn_Severity;
		msdyn_Snippet: string;
		msdyn_SolutionHealthMessage: string;
		msdyn_Type: string;
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
		/** Status of the Analysis Result */
		statecode: OptionSet.msdyn_analysisresult.statecode;
		/** Reason for the status of the Analysis Result */
		statuscode: OptionSet.msdyn_analysisresult.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** The associated Analysis Component that contains the issue described by the Analysis Result. */
			readonly msdyn_AnalysisComponentId: string;
			readonly msdyn_AnalysisComponentType: string;
			/** The parent Analysis Job that produced the Analysis Result */
			readonly msdyn_AnalysisJobId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_analysisresultId: string;
			readonly msdyn_Category: string;
			readonly msdyn_ComponentType: string;
			readonly msdyn_EntityName: string;
			readonly msdyn_FileUri: string;
			readonly msdyn_HasResolution: string;
			readonly msdyn_helplink: string;
			readonly msdyn_Level: string;
			readonly msdyn_Line: string;
			readonly msdyn_Member: string;
			readonly msdyn_Message: string;
			readonly msdyn_MessageArguments: string;
			readonly msdyn_MessageId: string;
			readonly msdyn_Module: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Type of issue that needs to be repaired. Same as IssueType Input Parameter for Solution Health Rule. */
			readonly msdyn_RepairIssueType: string;
			/** The return status of a rule run: pass, fail, or configuration error */
			readonly msdyn_ReturnStatus: string;
			readonly msdyn_RuleId: string;
			readonly msdyn_RuleReferenceUri: string;
			readonly msdyn_Severity: string;
			readonly msdyn_Snippet: string;
			readonly msdyn_SolutionHealthMessage: string;
			readonly msdyn_Type: string;
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
			/** Status of the Analysis Result */
			readonly statecode: string;
			/** Reason for the status of the Analysis Result */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_analysisresult {
		enum msdyn_AnalysisComponentType {
			/** 192350001 */
			Component_Health,
			/** 192350000 */
			Organization_Health
		}
		enum msdyn_Category {
			/** 192350008 */
			Accessibility,
			/** 192350004 */
			Design,
			/** 192350006 */
			Maintainability,
			/** 192350005 */
			Online_Migration,
			/** 192350000 */
			Performance,
			/** 192350003 */
			Security,
			/** 192350007 */
			Supportability,
			/** 192350001 */
			Upgrade_Readiness,
			/** 192350002 */
			Usage
		}
		enum msdyn_ComponentType {
			/** 192350002 */
			Configuration,
			/** 192350001 */
			Plug_In,
			/** 192350000 */
			Web_Resources
		}
		enum msdyn_Level {
			/** 192350000 */
			Error,
			/** 192350001 */
			Warning
		}
		enum msdyn_ReturnStatus {
			/** 192350002 */
			Config_Error,
			/** 192350005 */
			Error,
			/** 192350001 */
			Fail,
			/** 192350000 */
			Pass,
			/** 192350003 */
			Resolved,
			/** 192350006 */
			Suggestion,
			/** 192350004 */
			Warning
		}
		enum msdyn_Severity {
			/** 192350003 */
			Critical,
			/** 192350002 */
			High,
			/** 192350000 */
			Low,
			/** 192350001 */
			Medium
		}
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
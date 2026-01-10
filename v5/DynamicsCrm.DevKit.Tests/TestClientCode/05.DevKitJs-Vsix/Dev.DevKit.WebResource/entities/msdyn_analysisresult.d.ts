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
			/** AnalysisComponentType */
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** The parent Analysis Job that produced the Analysis Result */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			/** Category */
			msdyn_Category: DevKit.Controls.OptionSet;
			/** Entity Name */
			msdyn_EntityName: DevKit.Controls.String;
			/** File Uri */
			msdyn_FileUri: DevKit.Controls.String;
			/** Help Link */
			msdyn_helplink: DevKit.Controls.String;
			/** Level */
			msdyn_Level: DevKit.Controls.OptionSet;
			/** Line */
			msdyn_Line: DevKit.Controls.Integer;
			/** Member */
			msdyn_Member: DevKit.Controls.String;
			/** Message */
			msdyn_Message: DevKit.Controls.String;
			/** Module */
			msdyn_Module: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The return status of a rule run: pass, fail, or configuration error */
			msdyn_ReturnStatus: DevKit.Controls.OptionSet;
			/** Rule Id */
			msdyn_RuleId: DevKit.Controls.String;
			/** Rule Reference Uri */
			msdyn_RuleReferenceUri: DevKit.Controls.String;
			/** Severity */
			msdyn_Severity: DevKit.Controls.OptionSet;
			/** Snippet */
			msdyn_Snippet: DevKit.Controls.String;
			/** Message */
			msdyn_SolutionHealthMessage: DevKit.Controls.String;
			/** Type */
			msdyn_Type: DevKit.Controls.String;
		}
		interface Grid {
			/** Analysis Result Details (Analysis Result) */
			AnalysisResultDetails: DevKit.Controls.Grid;
		}
	}
	export class Formmsdyn_analysisresult_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_analysisresult_Information */
		Body: DevKit.Formmsdyn_analysisresult_Information.Body;
		/** The Header section of form msdyn_analysisresult_Information */
		Header: DevKit.Formmsdyn_analysisresult_Information.Header;
		/** The Grid of form msdyn_analysisresult_Information */
		Grid: DevKit.Formmsdyn_analysisresult_Information.Grid;
	}
	export class msdyn_analysisresultApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysisresultApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The associated Analysis Component that contains the issue described by the Analysis Result. */
		msdyn_AnalysisComponentId: string | null;
		msdyn_AnalysisComponentType: OptionSet.msdyn_analysisresult.msdyn_AnalysisComponentType | null;
		/** The parent Analysis Job that produced the Analysis Result */
		msdyn_AnalysisJobId: string | null;
		/** Unique identifier for entity instances */
		msdyn_analysisresultId: string | null;
		msdyn_Category: OptionSet.msdyn_analysisresult.msdyn_Category | null;
		msdyn_ComponentType: OptionSet.msdyn_analysisresult.msdyn_ComponentType | null;
		msdyn_EntityName: string | null;
		msdyn_FileUri: string | null;
		msdyn_HasResolution: boolean | null;
		msdyn_helplink: string | null;
		msdyn_Level: OptionSet.msdyn_analysisresult.msdyn_Level | null;
		msdyn_Line: number | null;
		msdyn_Member: string | null;
		msdyn_Message: string | null;
		msdyn_MessageArguments: string | null;
		msdyn_MessageId: string | null;
		msdyn_Module: string | null;
		/** The name of the custom entity. */
		msdyn_name: string | null;
		/** Type of issue that needs to be repaired. Same as IssueType Input Parameter for Solution Health Rule. */
		msdyn_RepairIssueType: string | null;
		/** The return status of a rule run: pass, fail, or configuration error */
		msdyn_ReturnStatus: OptionSet.msdyn_analysisresult.msdyn_ReturnStatus | null;
		msdyn_RuleId: string | null;
		msdyn_RuleReferenceUri: string | null;
		msdyn_Severity: OptionSet.msdyn_analysisresult.msdyn_Severity | null;
		msdyn_Snippet: string | null;
		msdyn_SolutionHealthMessage: string | null;
		msdyn_Type: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Status of the Analysis Result */
		statecode: OptionSet.msdyn_analysisresult.statecode | null;
		/** Reason for the status of the Analysis Result */
		statuscode: OptionSet.msdyn_analysisresult.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Component_Health = 192350001*/
			Component_Health = 192350001,
			/** Organization_Health = 192350000*/
			Organization_Health = 192350000
		}
		enum msdyn_Category {
			/** Accessibility = 192350008*/
			Accessibility = 192350008,
			/** Design = 192350004*/
			Design = 192350004,
			/** Licensing = 192350009*/
			Licensing = 192350009,
			/** Maintainability = 192350006*/
			Maintainability = 192350006,
			/** Online_Migration = 192350005*/
			Online_Migration = 192350005,
			/** Performance = 192350000*/
			Performance = 192350000,
			/** Security = 192350003*/
			Security = 192350003,
			/** Supportability = 192350007*/
			Supportability = 192350007,
			/** Upgrade_Readiness = 192350001*/
			Upgrade_Readiness = 192350001,
			/** Usage = 192350002*/
			Usage = 192350002
		}
		enum msdyn_ComponentType {
			/** Configuration = 192350002*/
			Configuration = 192350002,
			/** Plug_In = 192350001*/
			Plug_In = 192350001,
			/** Web_Resources = 192350000*/
			Web_Resources = 192350000
		}
		enum msdyn_Level {
			/** Error = 192350000*/
			Error = 192350000,
			/** Warning = 192350001*/
			Warning = 192350001
		}
		enum msdyn_ReturnStatus {
			/** Config_Error = 192350002*/
			Config_Error = 192350002,
			/** Error = 192350005*/
			Error = 192350005,
			/** Fail = 192350001*/
			Fail = 192350001,
			/** Pass = 192350000*/
			Pass = 192350000,
			/** Resolved = 192350003*/
			Resolved = 192350003,
			/** Suggestion = 192350006*/
			Suggestion = 192350006,
			/** Warning = 192350004*/
			Warning = 192350004
		}
		enum msdyn_Severity {
			/** Critical = 192350003*/
			Critical = 192350003,
			/** High = 192350002*/
			High = 192350002,
			/** Low = 192350000*/
			Low = 192350000,
			/** Medium = 192350001*/
			Medium = 192350001
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
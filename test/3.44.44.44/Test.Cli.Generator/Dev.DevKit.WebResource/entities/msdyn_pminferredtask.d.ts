﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_pminferredtask_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_pminferredtask_msdyn_pmanalysishistory_parenttask: DevKit.Controls.NavigationItem,
			msdyn_msdyn_pminferredtask_msdyn_pmbusinessruleautomationconfig_PMInferredTaskId: DevKit.Controls.NavigationItem,
			msdyn_msdyn_pminferredtask_msdyn_pmprocesstemplate_pmnferredtaskid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask: DevKit.Controls.NavigationItem,
			msdyn_pminferredtask_msdyn_pmprocessusersettings_parenttask: DevKit.Controls.NavigationItem,
			msdyn_pminferredtask_msdyn_pmprocessversion: DevKit.Controls.NavigationItem,
			msdyn_pmsimulation_pminferredtaskid_msdyn_pminferredtask: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_pminferredtask_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_pminferredtask_Information */
		Body: DevKit.Formmsdyn_pminferredtask_Information.Body;
		/** The Navigation of form msdyn_pminferredtask_Information */
		Navigation: DevKit.Formmsdyn_pminferredtask_Information.Navigation;
		/** The SidePanes of form msdyn_pminferredtask_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_pminferredtaskApi {
		/**
		* DynamicsCrm.DevKit msdyn_pminferredtaskApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_pminferredtask.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Information about the analysis schedule. */
		msdyn_analysisschedule: string;
		/** Computed data to drive automation for this task. */
		msdyn_automationdata: string;
		/** The status of automation for this task. */
		msdyn_automationstatus: OptionSet.msdyn_pminferredtask.msdyn_automationstatus;
		/** Information about the data validation for the data source. */
		msdyn_datavalidation: string;
		msdyn_description: string;
		/** Location of the data used as input for Task Analysis. */
		msdyn_inputdatabinding: string;
		/** Surfaces whether the analysis report is currently available. */
		msdyn_isreportavailable: boolean;
		/** Identifies uniquely the last successful processing of the task. */
		msdyn_iterationid: string;
		msdyn_lasterrors: string;
		readonly msdyn_lasterrorsreport_name: string;
		/** Date and time when the corresponding report was last refreshed. */
		msdyn_lastreportrefreshdate_TimezoneDateAndTime: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_outputdata: string;
		/** Unique identifier for entity instances */
		msdyn_pminferredtaskId: string;
		/** Data related to the report for this task. */
		msdyn_reportdata: string;
		/** The current status of the provisioning operation for the report associated to this task. */
		msdyn_reportprovisioningstatus: OptionSet.msdyn_pminferredtask.msdyn_reportprovisioningstatus;
		msdyn_sharedrecordingmetadata: string;
		/** The data source of this Pm Inferred Task. */
		msdyn_source: OptionSet.msdyn_pminferredtask.msdyn_source;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the PM Inferred Task */
		statecode: OptionSet.msdyn_pminferredtask.statecode;
		/** Reason for the status of the PM Inferred Task */
		statuscode: OptionSet.msdyn_pminferredtask.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Information about the analysis schedule. */
			readonly msdyn_analysisschedule: string;
			/** Computed data to drive automation for this task. */
			readonly msdyn_automationdata: string;
			/** The status of automation for this task. */
			readonly msdyn_automationstatus: string;
			/** Information about the data validation for the data source. */
			readonly msdyn_datavalidation: string;
			readonly msdyn_description: string;
			/** Location of the data used as input for Task Analysis. */
			readonly msdyn_inputdatabinding: string;
			/** Surfaces whether the analysis report is currently available. */
			readonly msdyn_isreportavailable: string;
			/** Identifies uniquely the last successful processing of the task. */
			readonly msdyn_iterationid: string;
			readonly msdyn_lasterrors: string;
			readonly msdyn_lasterrorsreport_name: string;
			/** Date and time when the corresponding report was last refreshed. */
			readonly msdyn_lastreportrefreshdate_TimezoneDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_outputdata: string;
			/** Unique identifier for entity instances */
			readonly msdyn_pminferredtaskId: string;
			/** Data related to the report for this task. */
			readonly msdyn_reportdata: string;
			/** The current status of the provisioning operation for the report associated to this task. */
			readonly msdyn_reportprovisioningstatus: string;
			readonly msdyn_sharedrecordingmetadata: string;
			/** The data source of this Pm Inferred Task. */
			readonly msdyn_source: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the PM Inferred Task */
			readonly statecode: string;
			/** Reason for the status of the PM Inferred Task */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_pminferredtask {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_automationstatus {
			/** 200000003 */
			Complete,
			/** 200000002 */
			InProgress,
			/** 200000001 */
			NotRecommended,
			/** 200000000 */
			NotStarted
		}
		enum msdyn_reportprovisioningstatus {
			/** 193350003 */
			Failed,
			/** 193350000 */
			NotStarted,
			/** 193350002 */
			Provisioned,
			/** 193350001 */
			Provisioning,
			/** 193350004 */
			Skipped
		}
		enum msdyn_source {
			/** 1 */
			DataLake,
			/** 0 */
			Recording
		}
		enum statecode {
			/** 2 */
			Done,
			/** 0 */
			Draft,
			/** 3 */
			Failed,
			/** 4 */
			Imported,
			/** 1 */
			InProgress
		}
		enum statuscode {
			/** 4 */
			Analyzed,
			/** 5 */
			AnalyzeFailed,
			/** 2 */
			Analyzing,
			/** 6 */
			DeleteFailed,
			/** 3 */
			Deleting,
			/** 0 */
			Draft,
			/** 7 */
			Imported,
			/** 1 */
			Queued
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
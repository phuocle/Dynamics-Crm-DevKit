//@ts-check
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
	}
	export class Formmsdyn_pminferredtask_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_pminferredtask_Information */
		Body: DevKit.Formmsdyn_pminferredtask_Information.Body;
	}
	export class msdyn_pminferredtaskApi {
		/**
		* DynamicsCrm.DevKit msdyn_pminferredtaskApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_pminferredtask.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Information about the analysis schedule. */
		msdyn_analysisschedule: string | null;
		/** Computed data to drive automation for this task. */
		msdyn_automationdata: string | null;
		/** The status of automation for this task. */
		msdyn_automationstatus: OptionSet.msdyn_pminferredtask.msdyn_automationstatus | null;
		msdyn_businessprocessid: string | null;
		/** Information about the data validation for the data source. */
		msdyn_datavalidation: string | null;
		msdyn_description: string | null;
		/** Location of the data used as input for Task Analysis. */
		msdyn_inputdatabinding: string | null;
		/** Surfaces whether the analysis report is currently available. */
		msdyn_isreportavailable: boolean | null;
		/** Identifies uniquely the last successful processing of the task. */
		msdyn_iterationid: string | null;
		msdyn_lasterrors: string | null;
		readonly msdyn_lasterrorsreport_name: string | null;
		/** Date and time when the corresponding report was last refreshed. */
		msdyn_lastreportrefreshdate_TimezoneDateAndTime: Date | null;
		/** The name of the custom entity. */
		msdyn_name: string | null;
		msdyn_outputdata: string | null;
		/** Unique identifier for entity instances */
		msdyn_pminferredtaskId: string | null;
		/** Data related to the report for this task. */
		msdyn_reportdata: string | null;
		/** The current status of the provisioning operation for the report associated to this task. */
		msdyn_reportprovisioningstatus: OptionSet.msdyn_pminferredtask.msdyn_reportprovisioningstatus | null;
		msdyn_sharedrecordingmetadata: string | null;
		/** The data source of this Pm Inferred Task. */
		msdyn_source: OptionSet.msdyn_pminferredtask.msdyn_source | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the PM Inferred Task */
		statecode: OptionSet.msdyn_pminferredtask.statecode | null;
		/** Reason for the status of the PM Inferred Task */
		statuscode: OptionSet.msdyn_pminferredtask.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
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
			readonly msdyn_businessprocessid: string;
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum msdyn_automationstatus {
			/** Complete = 200000003*/
			Complete = 200000003,
			/** InProgress = 200000002*/
			InProgress = 200000002,
			/** NotRecommended = 200000001*/
			NotRecommended = 200000001,
			/** NotStarted = 200000000*/
			NotStarted = 200000000
		}
		enum msdyn_reportprovisioningstatus {
			/** Failed = 193350003*/
			Failed = 193350003,
			/** NotStarted = 193350000*/
			NotStarted = 193350000,
			/** Provisioned = 193350002*/
			Provisioned = 193350002,
			/** Provisioning = 193350001*/
			Provisioning = 193350001,
			/** Skipped = 193350004*/
			Skipped = 193350004
		}
		enum msdyn_source {
			/** DataLake = 1*/
			DataLake = 1,
			/** ObjectCentric = 2*/
			ObjectCentric = 2,
			/** Recording = 0*/
			Recording = 0
		}
		enum statecode {
			/** Done = 2*/
			Done = 2,
			/** Draft = 0*/
			Draft = 0,
			/** Failed = 3*/
			Failed = 3,
			/** Imported = 4*/
			Imported = 4,
			/** InProgress = 1*/
			InProgress = 1
		}
		enum statuscode {
			/** Analyzed = 4*/
			Analyzed = 4,
			/** AnalyzeFailed = 5*/
			AnalyzeFailed = 5,
			/** Analyzing = 2*/
			Analyzing = 2,
			/** DeleteFailed = 6*/
			DeleteFailed = 6,
			/** Deleting = 3*/
			Deleting = 3,
			/** Draft = 0*/
			Draft = 0,
			/** Imported = 7*/
			Imported = 7,
			/** Ingesting = 8*/
			Ingesting = 8,
			/** Queued = 1*/
			Queued = 1
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
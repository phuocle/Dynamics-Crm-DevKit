//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_pmsimulation_Information {
		interface Tabs {
		}
		interface Body {
			/** Description of custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** The end of the simulation. */
			msdyn_end: DevKit.Controls.DateTime;
			/** Indicates if the simulation log will be generated during the simulation. */
			msdyn_generatelog: DevKit.Controls.Boolean;
			/** The name of custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The Guid of PSE simulation. */
			msdyn_psesimulationid: DevKit.Controls.String;
			/** The result of simulation. */
			msdyn_result: DevKit.Controls.String;
			/** The settings of simulation. */
			msdyn_setting: DevKit.Controls.String;
			/** The start of simulation. */
			msdyn_start: DevKit.Controls.DateTime;
			/** The state of simulation. */
			msdyn_state: DevKit.Controls.OptionSet;
			/** The version number of entity. */
			msdyn_version: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class Formmsdyn_pmsimulation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_pmsimulation_Information */
		Body: DevKit.Formmsdyn_pmsimulation_Information.Body;
	}
	export class msdyn_pmsimulationApi {
		/**
		* DynamicsCrm.DevKit msdyn_pmsimulationApi
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
		readonly ComponentState: OptionSet.msdyn_pmsimulation.ComponentState | null;
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
		/** Description of custom entity. */
		msdyn_description: string | null;
		/** The end of the simulation. */
		msdyn_end_UtcDateAndTime: Date | null;
		/** Indicates if the simulation log will be generated during the simulation. */
		msdyn_generatelog: boolean | null;
		/** The name of custom entity. */
		msdyn_name: string | null;
		/** Unique identifier for PM Inferred Task associated with PM Simulation. The imported process from simulation log. */
		msdyn_pminferredtaskid: string | null;
		/** Unique identifier for entity instances */
		msdyn_pmsimulationId: string | null;
		/** Unique identifier from PM View associated with PM Simulation. */
		msdyn_pmviewid: string | null;
		/** The Guid of PSE simulation. */
		msdyn_psesimulationid: string | null;
		/** The result of simulation. */
		msdyn_result: string | null;
		/** The settings of simulation. */
		msdyn_setting: string | null;
		/** The start of simulation. */
		msdyn_start_UtcDateAndTime: Date | null;
		/** The state of simulation. */
		msdyn_state: OptionSet.msdyn_pmsimulation.msdyn_state | null;
		/** The version number of entity. */
		msdyn_version: number | null;
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
		/** Status of the PM Simulation */
		statecode: OptionSet.msdyn_pmsimulation.statecode | null;
		/** Reason for the status of the PM Simulation */
		statuscode: OptionSet.msdyn_pmsimulation.statuscode | null;
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
			/** Description of custom entity. */
			readonly msdyn_description: string;
			/** The end of the simulation. */
			readonly msdyn_end_UtcDateAndTime: string;
			/** Indicates if the simulation log will be generated during the simulation. */
			readonly msdyn_generatelog: string;
			/** The name of custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for PM Inferred Task associated with PM Simulation. The imported process from simulation log. */
			readonly msdyn_pminferredtaskid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_pmsimulationId: string;
			/** Unique identifier from PM View associated with PM Simulation. */
			readonly msdyn_pmviewid: string;
			/** The Guid of PSE simulation. */
			readonly msdyn_psesimulationid: string;
			/** The result of simulation. */
			readonly msdyn_result: string;
			/** The settings of simulation. */
			readonly msdyn_setting: string;
			/** The start of simulation. */
			readonly msdyn_start_UtcDateAndTime: string;
			/** The state of simulation. */
			readonly msdyn_state: string;
			/** The version number of entity. */
			readonly msdyn_version: string;
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
			/** Status of the PM Simulation */
			readonly statecode: string;
			/** Reason for the status of the PM Simulation */
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
	namespace msdyn_pmsimulation {
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
		enum msdyn_state {
			/** Cancelled = 4*/
			Cancelled = 4,
			/** Completed = 3*/
			Completed = 3,
			/** Failed = 5*/
			Failed = 5,
			/** InProgress = 2*/
			InProgress = 2,
			/** NotStarted = 1*/
			NotStarted = 1,
			/** QueuedForStart = 6*/
			QueuedForStart = 6
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
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
		interface Navigation {

		}
	}
	class Formmsdyn_pmsimulation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_pmsimulation_Information */
		Body: DevKit.Formmsdyn_pmsimulation_Information.Body;
		/** The Navigation of form msdyn_pmsimulation_Information */
		Navigation: DevKit.Formmsdyn_pmsimulation_Information.Navigation;
		/** The SidePanes of form msdyn_pmsimulation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_pmsimulationApi {
		/**
		* DynamicsCrm.DevKit msdyn_pmsimulationApi
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
		/** Description of custom entity. */
		msdyn_description: string;
		/** The end of the simulation. */
		msdyn_end_UtcDateAndTime: Date;
		/** Indicates if the simulation log will be generated during the simulation. */
		msdyn_generatelog: boolean;
		/** The name of custom entity. */
		msdyn_name: string;
		/** Unique identifier for PM Inferred Task associated with PM Simulation. The imported process from simulation log. */
		msdyn_pminferredtaskid: string;
		/** Unique identifier for entity instances */
		msdyn_pmsimulationId: string;
		/** Unique identifier from PM View associated with PM Simulation. */
		msdyn_pmviewid: string;
		/** The Guid of PSE simulation. */
		msdyn_psesimulationid: string;
		/** The result of simulation. */
		msdyn_result: string;
		/** The settings of simulation. */
		msdyn_setting: string;
		/** The start of simulation. */
		msdyn_start_UtcDateAndTime: Date;
		/** The state of simulation. */
		msdyn_state: OptionSet.msdyn_pmsimulation.msdyn_state;
		/** The version number of entity. */
		msdyn_version: number;
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
		/** Status of the PM Simulation */
		statecode: OptionSet.msdyn_pmsimulation.statecode;
		/** Reason for the status of the PM Simulation */
		statuscode: OptionSet.msdyn_pmsimulation.statuscode;
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
			/** Status of the PM Simulation */
			readonly statecode: string;
			/** Reason for the status of the PM Simulation */
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
	namespace msdyn_pmsimulation {
		enum msdyn_state {
			/** 4 */
			Cancelled,
			/** 3 */
			Completed,
			/** 5 */
			Failed,
			/** 2 */
			InProgress,
			/** 1 */
			NotStarted,
			/** 6 */
			QueuedForStart
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
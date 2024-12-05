//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_sequence_Information {
		interface tab_Cadence_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_SequenceSummary_Sections {
			SequenceDetails: DevKit.Controls.Section;
		}
		interface tab_Cadence extends DevKit.Controls.ITab {
			Section: tab_Cadence_Sections;
		}
		interface tab_SequenceSummary extends DevKit.Controls.ITab {
			Section: tab_SequenceSummary_Sections;
		}
		interface Tabs {
			Cadence: tab_Cadence;
			SequenceSummary: tab_SequenceSummary;
		}
		interface Body {
			Tab: Tabs;
			msdyn_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The display name information about record to which this sequence could be associated */
			msdyn_regardingentitydisplayname: DevKit.Controls.String;
			/** The logical name of regarding entity */
			msdyn_regardingEntityName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Sequence */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyn_msdyn_sequence_msdyn_segment_Sequence: DevKit.Controls.NavigationItem,
			msdyn_sequence_appliedsequenceinstance: DevKit.Controls.NavigationItem,
			msdyn_sequence_parentsequence: DevKit.Controls.NavigationItem,
			msdyn_sequence_sequencestat: DevKit.Controls.NavigationItem,
			msdyn_sequenceparent: DevKit.Controls.NavigationItem
		}
		interface Grid {
			related_records: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_sequence_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sequence_Information */
		Body: DevKit.Formmsdyn_sequence_Information.Body;
		/** The Navigation of form msdyn_sequence_Information */
		Navigation: DevKit.Formmsdyn_sequence_Information.Navigation;
		/** The Grid of form msdyn_sequence_Information */
		Grid: DevKit.Formmsdyn_sequence_Information.Grid;
		/** The SidePanes of form msdyn_sequence_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sequenceApi {
		/**
		* DynamicsCrm.DevKit msdyn_sequenceApi
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
		readonly ComponentState: OptionSet.msdyn_sequence.ComponentState;
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
		msdyn_AnalyticsAvailable: boolean;
		/** Information about analytics version of the sequence */
		msdyn_analyticsversion: string;
		msdyn_assignsequencecondition: string;
		msdyn_assignsequencefieldname: string;
		msdyn_assignsequencetype: OptionSet.msdyn_sequence.msdyn_assignsequencetype;
		msdyn_cjodefinition: string;
		/** Depicts whether CJO definition is updated or not */
		msdyn_cjodefinitionstate: boolean;
		msdyn_definition: string;
		msdyn_description: string;
		/** Indicates whether wait time computation setting is enabled for the sequence to honor seller availability based on bussiness days. */
		msdyn_iswaittimecomputationenabledatsequencelevel: boolean;
		/** The max step count for the sequence. */
		msdyn_maxstepcount: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Select version of sequence orchestrator */
		msdyn_orchestratorversion: OptionSet.msdyn_sequence.msdyn_orchestratorversion;
		/** For internal use only */
		msdyn_ParentSequence: string;
		/** The display name information about record to which this sequence could be associated */
		msdyn_regardingentitydisplayname: string;
		/** The logical name of regarding entity */
		msdyn_regardingEntityName: string;
		/** Information about various exit criterion for a sequence */
		msdyn_SequenceExitCriterion: string;
		/** Unique identifier for entity instances */
		msdyn_sequenceId: string;
		readonly msdyn_SequenceRecords: string;
		/** Sequence Stats 180d */
		msdyn_SequenceStats180d: string;
		/** Sequence Stats 1y */
		msdyn_SequenceStats1y: string;
		/** Sequence Stats 2y */
		msdyn_SequenceStats2y: string;
		/** Sequence Stats 30d */
		msdyn_SequenceStats30d: string;
		/** Sequence Stats 90d */
		msdyn_SequenceStats90d: string;
		/** Sequence template id */
		msdyn_template: string;
		/** Total task count of sequence record */
		msdyn_totaltasks: number;
		/** For internal use only */
		msdyn_Type: OptionSet.msdyn_sequence.msdyn_Type;
		/** Version of the sequence */
		msdyn_Version: number;
		/** Information about this version of the sequence */
		msdyn_VersionDescription: string;
		/** Workflow identifier */
		msdyn_workflowid: string;
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
		/** Status of the Sequence */
		statecode: OptionSet.msdyn_sequence.statecode;
		/** Reason for the status of the Sequence */
		statuscode: OptionSet.msdyn_sequence.statuscode;
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
			readonly msdyn_AnalyticsAvailable: string;
			/** Information about analytics version of the sequence */
			readonly msdyn_analyticsversion: string;
			readonly msdyn_assignsequencecondition: string;
			readonly msdyn_assignsequencefieldname: string;
			readonly msdyn_assignsequencetype: string;
			readonly msdyn_cjodefinition: string;
			/** Depicts whether CJO definition is updated or not */
			readonly msdyn_cjodefinitionstate: string;
			readonly msdyn_definition: string;
			readonly msdyn_description: string;
			/** Indicates whether wait time computation setting is enabled for the sequence to honor seller availability based on bussiness days. */
			readonly msdyn_iswaittimecomputationenabledatsequencelevel: string;
			/** The max step count for the sequence. */
			readonly msdyn_maxstepcount: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Select version of sequence orchestrator */
			readonly msdyn_orchestratorversion: string;
			/** For internal use only */
			readonly msdyn_ParentSequence: string;
			/** The display name information about record to which this sequence could be associated */
			readonly msdyn_regardingentitydisplayname: string;
			/** The logical name of regarding entity */
			readonly msdyn_regardingEntityName: string;
			/** Information about various exit criterion for a sequence */
			readonly msdyn_SequenceExitCriterion: string;
			/** Unique identifier for entity instances */
			readonly msdyn_sequenceId: string;
			readonly msdyn_SequenceRecords: string;
			/** Sequence Stats 180d */
			readonly msdyn_SequenceStats180d: string;
			/** Sequence Stats 1y */
			readonly msdyn_SequenceStats1y: string;
			/** Sequence Stats 2y */
			readonly msdyn_SequenceStats2y: string;
			/** Sequence Stats 30d */
			readonly msdyn_SequenceStats30d: string;
			/** Sequence Stats 90d */
			readonly msdyn_SequenceStats90d: string;
			/** Sequence template id */
			readonly msdyn_template: string;
			/** Total task count of sequence record */
			readonly msdyn_totaltasks: string;
			/** For internal use only */
			readonly msdyn_Type: string;
			/** Version of the sequence */
			readonly msdyn_Version: string;
			/** Information about this version of the sequence */
			readonly msdyn_VersionDescription: string;
			/** Workflow identifier */
			readonly msdyn_workflowid: string;
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
			/** Status of the Sequence */
			readonly statecode: string;
			/** Reason for the status of the Sequence */
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
	namespace msdyn_sequence {
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
		enum msdyn_assignsequencetype {
			/** 3 */
			AccessTeam,
			/** 4 */
			CurrentUser,
			/** 2 */
			OwnerTeam,
			/** 1 */
			RecordField,
			/** 0 */
			RecordOwner
		}
		enum msdyn_orchestratorversion {
			/** 1 */
			V1,
			/** 2 */
			V2
		}
		enum msdyn_Type {
			/** 1 */
			Activation,
			/** 0 */
			Definition
		}
		enum statecode {
			/** 1 */
			Active,
			/** 0 */
			Inactive
		}
		enum statuscode {
			/** 2 */
			Active,
			/** 1 */
			Inactive,
			/** 3 */
			Revision
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
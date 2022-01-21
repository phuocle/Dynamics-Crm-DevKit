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
			nav_msdyn_sequenceparent: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
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
		/** The Process of form msdyn_sequence_Information */
		Process: DevKit.Formmsdyn_sequence_Information.Process;
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
		msdyn_cjodefinition: DevKit.WebApi.StringValue;
		/** Depicts whether CJO definition is updated or not */
		msdyn_cjodefinitionstate: DevKit.WebApi.BooleanValue;
		msdyn_definition: DevKit.WebApi.StringValue;
		msdyn_description: DevKit.WebApi.StringValue;
		/** The max step count for the sequence. */
		msdyn_maxstepcount: DevKit.WebApi.IntegerValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Select version of sequence orchestrator */
		msdyn_orchestratorversion: DevKit.WebApi.OptionSetValue;
		/** For internal use only */
		msdyn_ParentSequence: DevKit.WebApi.LookupValue;
		/** The display name information about record to which this sequence could be associated */
		msdyn_regardingentitydisplayname: DevKit.WebApi.StringValue;
		/** The logical name of regarding entity */
		msdyn_regardingEntityName: DevKit.WebApi.StringValue;
		/** Information about various exit criterion for a sequence */
		msdyn_SequenceExitCriterion: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_sequenceId: DevKit.WebApi.GuidValue;
		msdyn_SequenceRecords: DevKit.WebApi.StringValueReadonly;
		/** Sequence Stats 180d */
		msdyn_SequenceStats180d: DevKit.WebApi.StringValue;
		/** Sequence Stats 1y */
		msdyn_SequenceStats1y: DevKit.WebApi.StringValue;
		/** Sequence Stats 2y */
		msdyn_SequenceStats2y: DevKit.WebApi.StringValue;
		/** Sequence Stats 30d */
		msdyn_SequenceStats30d: DevKit.WebApi.StringValue;
		/** Sequence Stats 90d */
		msdyn_SequenceStats90d: DevKit.WebApi.StringValue;
		/** Total task count of sequence record */
		msdyn_totaltasks: DevKit.WebApi.IntegerValue;
		/** For internal use only */
		msdyn_Type: DevKit.WebApi.OptionSetValue;
		/** Version of the sequence */
		msdyn_Version: DevKit.WebApi.IntegerValue;
		/** Information about this version of the sequence */
		msdyn_VersionDescription: DevKit.WebApi.StringValue;
		/** Workflow identifier */
		msdyn_workflowid: DevKit.WebApi.GuidValue;
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
		/** Status of the Sequence */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Sequence */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_sequence {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
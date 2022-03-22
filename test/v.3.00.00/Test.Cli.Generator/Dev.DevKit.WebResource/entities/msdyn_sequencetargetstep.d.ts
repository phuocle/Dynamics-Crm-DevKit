//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_sequencetargetstep_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the Sequence Target step entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_sequencetargetstep_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sequencetargetstep_Information */
		Body: DevKit.Formmsdyn_sequencetargetstep_Information.Body;
		/** The Process of form msdyn_sequencetargetstep_Information */
		Process: DevKit.Formmsdyn_sequencetargetstep_Information.Process;
		/** The SidePanes of form msdyn_sequencetargetstep_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sequencetargetstepApi {
		/**
		* DynamicsCrm.DevKit msdyn_sequencetargetstepApi
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
		/** Date and time when the record was marked completed. */
		msdyn_completedon_UtcDateAndTime: Date;
		/** Shows which msdyn_sequencestep_type this was before it was converted to current step type */
		msdyn_convertedtomanualfrom: OptionSet.msdyn_sequencetargetstep.msdyn_convertedtomanualfrom;
		/** Description for Sequence target step */
		msdyn_description: string;
		/** Actual due time for Sequence target step */
		msdyn_duetime_UtcDateAndTime: Date;
		/** Select the error state for sequence step */
		msdyn_errorstate: OptionSet.msdyn_sequencetargetstep.msdyn_errorstate;
		/** Unique identifier of the activity linked to the sequence step */
		msdyn_linkedactivityid: string;
		/** The name of the Sequence Target step entity. */
		msdyn_name: string;
		/** Parameter for operation in Sequence target step */
		msdyn_operationparameter: string;
		/** Sequence proposed due time for Sequence target step */
		msdyn_sequenceduetime_UtcDateAndTime: Date;
		/** Unique Identifier for step in Sequence entity */
		msdyn_sequencestepId: string;
		/** Related Sequence Target */
		msdyn_sequencetarget: string;
		/** Unique identifier for entity Sequence Target Step */
		msdyn_sequencetargetstepId: string;
		/** Number of times sequence step is snoozed. */
		msdyn_snoozecount: number;
		/** Shows the sub type of sequence target step */
		msdyn_subtype: OptionSet.msdyn_sequencetargetstep.msdyn_subtype;
		msdyn_type: OptionSet.msdyn_sequencetargetstep.msdyn_type;
		/** Select whether wait step is pending or skipped */
		msdyn_waitstate: OptionSet.msdyn_sequencetargetstep.msdyn_waitstate;
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
		/** Status of the Sequence Target Step */
		statecode: OptionSet.msdyn_sequencetargetstep.statecode;
		/** Reason for the status of the Sequence Target Step */
		statuscode: OptionSet.msdyn_sequencetargetstep.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_sequencetargetstep {
		enum msdyn_convertedtomanualfrom {
			/** 4 */
			Auto_action,
			/** 3 */
			Automated_Email,
			/** 4202 */
			Email,
			/** 5 */
			LinkedIn_action,
			/** 4210 */
			Phone_call,
			/** 1 */
			Simple_Condition,
			/** 4212 */
			Task,
			/** 0 */
			Wait
		}
		enum msdyn_errorstate {
			/** 1 */
			Field_update_failed,
			/** 0 */
			NA
		}
		enum msdyn_subtype {
			/** 0 */
			Default,
			/** 3 */
			LinkedInConnect,
			/** 2 */
			LinkedInGetIntroduced,
			/** 4 */
			LinkedInMail,
			/** 1 */
			LinkedInResearch
		}
		enum msdyn_type {
			/** 4 */
			Auto_action,
			/** 3 */
			Automated_Email,
			/** 4202 */
			Email,
			/** 5 */
			LinkedIn_action,
			/** 4210 */
			Phone_call,
			/** 1 */
			Simple_Condition,
			/** 4212 */
			Task,
			/** 0 */
			Wait
		}
		enum msdyn_waitstate {
			/** 0 */
			NA,
			/** 2 */
			Skipped,
			/** 1 */
			Waiting,
			/** 3 */
			Waiting_for_update
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 4 */
			Cancelled,
			/** 2 */
			Completed,
			/** 1 */
			Open,
			/** 3 */
			Skipped
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
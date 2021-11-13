//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WorkflowLogApi {
		/**
		* DynamicsCrm.DevKit WorkflowLogApi
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
		/** Name of the activity which the process step is currently processing. */
		ActivityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the parent record. */
		asyncoperationid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the parent record. */
		asyncoperationid_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the system job. */
		childworkflowinstanceid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the system job. */
		childworkflowinstanceid_processsession: DevKit.WebApi.LookupValue;
		/** Date and time when the operation was completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who created the process log entry. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the process log entry was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the process log. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the process step. */
		Description: DevKit.WebApi.StringValue;
		/** Duration between completed on and started on, used by business process flow. */
		Duration: DevKit.WebApi.IntegerValueReadonly;
		/** Error code related to process. */
		ErrorCode: DevKit.WebApi.IntegerValue;
		/** The string representation of the error. */
		ErrorText: DevKit.WebApi.StringValue;
		Inputs_Name: DevKit.WebApi.StringValueReadonly;
		/** String specifying the result of an interaction activity. */
		InteractionActivityResult: DevKit.WebApi.StringValue;
		/** The iteration count for the action when in a do until loop. */
		IterationCount: DevKit.WebApi.IntegerValue;
		/** Message related to process. */
		Message: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the process log entry. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the process log entry was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the process log. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		Outputs_Name: DevKit.WebApi.StringValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the process. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the process log. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the process. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated record. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** The count of repetitions of the action when in a loop. */
		RepetitionCount: DevKit.WebApi.IntegerValue;
		/** The string representation of the repetition and iteration / level of the action. */
		RepetitionId: DevKit.WebApi.StringValue;
		/** Name of the process stage. */
		StageName: DevKit.WebApi.StringValue;
		/** Date and time when the operation was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Status of the process step for which process log record has been created: In Progress, Successfully Completed, or Failed. */
		Status: DevKit.WebApi.OptionSetValue;
		/** Name of the process step. */
		StepName: DevKit.WebApi.StringValue;
		/** Unique identifier of the process log entry. */
		WorkflowLogId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace WorkflowLog {
		enum Status {
			/** 4 */
			Canceled,
			/** 3 */
			Failed,
			/** 1 */
			In_Progress,
			/** 2 */
			Succeeded,
			/** 5 */
			Waiting
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information {
		interface Tabs {
		}
		interface Body {
			/** Description */
			bpf_name: DevKit.Controls.String;
		}
		interface Navigation {
			msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_WorkflowLogs: DevKit.Controls.NavigationItem
		}
	}
	class Formmsevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information */
		Body: DevKit.Formmsevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information.Body;
		/** The Navigation of form msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information */
		Navigation: DevKit.Formmsevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information.Navigation;
		/** The SidePanes of form msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99Api {
		/**
		* DynamicsCrm.DevKit msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99Api
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
		/** Unique identifier of the active stage for the business process flow instance */
		ActiveStageId: string;
		/** The date and time when current active stage was started */
		ActiveStageStartedOn_UtcDateOnly: Date;
		/** Business process flow duration */
		readonly bpf_Duration: number;
		bpf_msevtmgt_eventid: string;
		/** Description */
		bpf_name: string;
		/** Unique identifier for entity instances */
		BusinessProcessFlowInstanceId: string;
		/** The date and time when business process flow instance was completed */
		CompletedOn_UtcDateOnly: Date;
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the workflow associated with the business process flow instance */
		ProcessId: string;
		/** Status of the event main business process flow */
		statecode: OptionSet.msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99.statecode;
		/** Reason for the status of the event main business process flow */
		statuscode: OptionSet.msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** A comma-delimited string of process stage IDs, which represents visited stages of the business process flow instance. */
		TraversedPath: string;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the active stage for the business process flow instance */
			readonly ActiveStageId: string;
			/** The date and time when current active stage was started */
			readonly ActiveStageStartedOn_UtcDateOnly: string;
			/** Business process flow duration */
			readonly bpf_Duration: string;
			readonly bpf_msevtmgt_eventid: string;
			/** Description */
			readonly bpf_name: string;
			/** Unique identifier for entity instances */
			readonly BusinessProcessFlowInstanceId: string;
			/** The date and time when business process flow instance was completed */
			readonly CompletedOn_UtcDateOnly: string;
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the workflow associated with the business process flow instance */
			readonly ProcessId: string;
			/** Status of the event main business process flow */
			readonly statecode: string;
			/** Reason for the status of the event main business process flow */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** A comma-delimited string of process stage IDs, which represents visited stages of the business process flow instance. */
			readonly TraversedPath: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99 {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 3 */
			Aborted,
			/** 1 */
			Active,
			/** 2 */
			Finished
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
﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class BusinessProcessFlowInstanceApi {
		/**
		* DynamicsCrm.DevKit BusinessProcessFlowInstanceApi
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
		/** Date and time when the active stage was started. */
		readonly ActiveStageStartedOn_UtcDateAndTime: Date;
		/** Unique identifier of the business process flow instance. */
		BusinessProcessFlowInstanceId: string;
		/** Date and time when the process completed. */
		readonly CompletedOn_UtcDateAndTime: Date;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the first entity instance. */
		Entity1Id: string;
		/** Unique identifier of the second entity instance. */
		Entity2Id: string;
		/** Unique identifier of the third entity instance. */
		Entity3Id: string;
		/** Unique identifier of the fourth entity instance. */
		Entity4Id: string;
		/** Unique identifier of the fifth entity instance. */
		Entity5Id: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive name for the instance. */
		Name: string;
		/** Unique identifier of the business process flow. */
		ProcessId: string;
		/** Unique identifier of active stage in the business process flow instance. */
		ProcessStageId: string;
		/** Shows whether the business process flow instance is active or inactive. */
		StateCode: OptionSet.BusinessProcessFlowInstance.StateCode;
		/** Business process flow instance's status. */
		StatusCode: OptionSet.BusinessProcessFlowInstance.StatusCode;
		/** For internal use only. */
		TraversedPath: string;
		/** Version number of the business process flow instance. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace BusinessProcessFlowInstance {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
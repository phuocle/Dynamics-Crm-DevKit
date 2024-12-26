//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_predictionscheduledoperation_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_predictionscheduledoperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_predictionscheduledoperation_Information */
		Body: DevKit.Formmsdyn_predictionscheduledoperation_Information.Body;
		/** The Navigation of form msdyn_predictionscheduledoperation_Information */
		Navigation: DevKit.Formmsdyn_predictionscheduledoperation_Information.Navigation;
		/** The SidePanes of form msdyn_predictionscheduledoperation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_predictionscheduledoperationApi {
		/**
		* DynamicsCrm.DevKit msdyn_predictionscheduledoperationApi
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
		/** Stores additional details for the scheduled job */
		msdyn_AdditionalDetails: string;
		/** Stores the created on time for the scheduled job */
		msdyn_Created_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Stores the next scheduled time for scheduled operation. */
		msdyn_NextScheduledTime_UtcDateAndTime: Date;
		/** Stores config for the scheduled operation */
		msdyn_OperationConfig: string;
		/** Stores unique identifier for the operation */
		msdyn_OperationId: string;
		/** Stores type of scheduled operation */
		msdyn_OperationType: string;
		/** Unique identifier for entity instances */
		msdyn_predictionscheduledoperationId: string;
		/** Stores the id of the prediction for which scheduled operation needs to be performed. */
		msdyn_RegardingObjectId: string;
		/** Stores count of retries when submit job fails in service */
		msdyn_RetryCounter: number;
		/** Stores the scheduled interval in minutes which will be used to update next scheduled time */
		msdyn_ScheduledIntervalInMinutes: number;
		/** Stores the count of scheduled operation runs. */
		msdyn_SchedulingCount: number;
		/** Stores status of the scheduled operation. */
		msdyn_Status: string;
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
		/** Status of the Prediction Scheduled Operation */
		statecode: OptionSet.msdyn_predictionscheduledoperation.statecode;
		/** Reason for the status of the Prediction Scheduled Operation */
		statuscode: OptionSet.msdyn_predictionscheduledoperation.statuscode;
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
			/** Stores additional details for the scheduled job */
			readonly msdyn_AdditionalDetails: string;
			/** Stores the created on time for the scheduled job */
			readonly msdyn_Created_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Stores the next scheduled time for scheduled operation. */
			readonly msdyn_NextScheduledTime_UtcDateAndTime: string;
			/** Stores config for the scheduled operation */
			readonly msdyn_OperationConfig: string;
			/** Stores unique identifier for the operation */
			readonly msdyn_OperationId: string;
			/** Stores type of scheduled operation */
			readonly msdyn_OperationType: string;
			/** Unique identifier for entity instances */
			readonly msdyn_predictionscheduledoperationId: string;
			/** Stores the id of the prediction for which scheduled operation needs to be performed. */
			readonly msdyn_RegardingObjectId: string;
			/** Stores count of retries when submit job fails in service */
			readonly msdyn_RetryCounter: string;
			/** Stores the scheduled interval in minutes which will be used to update next scheduled time */
			readonly msdyn_ScheduledIntervalInMinutes: string;
			/** Stores the count of scheduled operation runs. */
			readonly msdyn_SchedulingCount: string;
			/** Stores status of the scheduled operation. */
			readonly msdyn_Status: string;
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
			/** Status of the Prediction Scheduled Operation */
			readonly statecode: string;
			/** Reason for the status of the Prediction Scheduled Operation */
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
	namespace msdyn_predictionscheduledoperation {
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
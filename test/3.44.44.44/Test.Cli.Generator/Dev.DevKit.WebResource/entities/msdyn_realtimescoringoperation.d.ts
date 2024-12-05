//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_realtimescoringoperation_Information {
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
	class Formmsdyn_realtimescoringoperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_realtimescoringoperation_Information */
		Body: DevKit.Formmsdyn_realtimescoringoperation_Information.Body;
		/** The Navigation of form msdyn_realtimescoringoperation_Information */
		Navigation: DevKit.Formmsdyn_realtimescoringoperation_Information.Navigation;
		/** The SidePanes of form msdyn_realtimescoringoperation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_realtimescoringoperationApi {
		/**
		* DynamicsCrm.DevKit msdyn_realtimescoringoperationApi
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
		/** Stores created time for the record creation in sql. */
		msdyn_Created_UtcDateAndTime: Date;
		/** Stores docker image name which will be used to perform real time scoring. */
		msdyn_DockerImageName: string;
		/** Stores the expiry time after which record can be cleared off. */
		msdyn_ExpiryDateTime_UtcDateAndTime: Date;
		/** Stores path where explanation files are stored. */
		msdyn_ExplanationPath: string;
		/** Stores boolean value indicating if the batch job is finished or not. */
		msdyn_Finished: boolean;
		/** Stores island url where the real time scoring job gets submitted. */
		msdyn_IslandUrl: string;
		/** Stores id of azure batch job. */
		msdyn_JobId: string;
		/** Stores model id. */
		msdyn_ModelId: string;
		/** Stores path where model files are stored. */
		msdyn_ModelPath: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Stores guid for each real time scoring operation entry. */
		msdyn_OperationGuid: string;
		/** Stores task id for the azure batch task */
		msdyn_OperationId: string;
		/** Stores guid for prediction. */
		msdyn_PredictionGuid: string;
		/** Stores name of the prediction. */
		msdyn_PredictionName: string;
		/** Unique identifier for entity instances */
		msdyn_realtimescoringoperationId: string;
		/** Stores the counts of retries done in case submit to azure batch is failing. */
		msdyn_RetryCounter: number;
		/** Stores parameters for real time scoring. */
		msdyn_RtsAdditionalParameters: string;
		/** Stores unique identifier for each real time scoring trigger from solution. */
		msdyn_RtsTriggerId: string;
		/** Stores state of the azure batch task. */
		msdyn_State: string;
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
		/** Status of the Real Time Scoring Operation */
		statecode: OptionSet.msdyn_realtimescoringoperation.statecode;
		/** Reason for the status of the Real Time Scoring Operation */
		statuscode: OptionSet.msdyn_realtimescoringoperation.statuscode;
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
			/** Stores created time for the record creation in sql. */
			readonly msdyn_Created_UtcDateAndTime: string;
			/** Stores docker image name which will be used to perform real time scoring. */
			readonly msdyn_DockerImageName: string;
			/** Stores the expiry time after which record can be cleared off. */
			readonly msdyn_ExpiryDateTime_UtcDateAndTime: string;
			/** Stores path where explanation files are stored. */
			readonly msdyn_ExplanationPath: string;
			/** Stores boolean value indicating if the batch job is finished or not. */
			readonly msdyn_Finished: string;
			/** Stores island url where the real time scoring job gets submitted. */
			readonly msdyn_IslandUrl: string;
			/** Stores id of azure batch job. */
			readonly msdyn_JobId: string;
			/** Stores model id. */
			readonly msdyn_ModelId: string;
			/** Stores path where model files are stored. */
			readonly msdyn_ModelPath: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Stores guid for each real time scoring operation entry. */
			readonly msdyn_OperationGuid: string;
			/** Stores task id for the azure batch task */
			readonly msdyn_OperationId: string;
			/** Stores guid for prediction. */
			readonly msdyn_PredictionGuid: string;
			/** Stores name of the prediction. */
			readonly msdyn_PredictionName: string;
			/** Unique identifier for entity instances */
			readonly msdyn_realtimescoringoperationId: string;
			/** Stores the counts of retries done in case submit to azure batch is failing. */
			readonly msdyn_RetryCounter: string;
			/** Stores parameters for real time scoring. */
			readonly msdyn_RtsAdditionalParameters: string;
			/** Stores unique identifier for each real time scoring trigger from solution. */
			readonly msdyn_RtsTriggerId: string;
			/** Stores state of the azure batch task. */
			readonly msdyn_State: string;
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
			/** Status of the Real Time Scoring Operation */
			readonly statecode: string;
			/** Reason for the status of the Real Time Scoring Operation */
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
	namespace msdyn_realtimescoringoperation {
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
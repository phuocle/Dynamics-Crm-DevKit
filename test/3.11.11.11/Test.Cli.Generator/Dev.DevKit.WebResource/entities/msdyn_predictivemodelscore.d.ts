﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_predictivemodelscore_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_predictivemodelscore_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_predictivemodelscore_Information */
		Body: DevKit.Formmsdyn_predictivemodelscore_Information.Body;
		/** The Process of form msdyn_predictivemodelscore_Information */
		Process: DevKit.Formmsdyn_predictivemodelscore_Information.Process;
		/** The SidePanes of form msdyn_predictivemodelscore_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_predictivemodelscoreApi {
		/**
		* DynamicsCrm.DevKit msdyn_predictivemodelscoreApi
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
		/** Date and time when the record was created. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Entity ID of primary entity. */
		msdyn_EntityId: string;
		/** Entity type of primary entity. */
		msdyn_EntityType: string;
		/** Grade of prediction score. */
		msdyn_Grade: OptionSet.msdyn_predictivemodelscore.msdyn_Grade;
		/** Prediction model name. */
		msdyn_ModelName: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Prediction model definition ID. */
		msdyn_PredictionID: string;
		/** Unique identifier for entity instances. */
		msdyn_predictivemodelscoreId: string;
		/** Unique identifier for Predictive Score associated with Predictive Model Score. */
		msdyn_PredictiveScoreId: string;
		/** Prediction score. */
		msdyn_Score: number;
		/** Scored on. */
		msdyn_ScoredOn_UtcDateOnly: Date;
		/** Score history. */
		msdyn_ScoreHistory: string;
		/** Score reasons. */
		msdyn_ScoreReasons: string;
		/** Score trend. */
		msdyn_ScoreTrend: OptionSet.msdyn_predictivemodelscore.msdyn_ScoreTrend;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Predictive Model Score. */
		statecode: OptionSet.msdyn_predictivemodelscore.statecode;
		/** Reason for the status of the Predictive Model Score. */
		statuscode: OptionSet.msdyn_predictivemodelscore.statuscode;
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
			/** Date and time when the record was created. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Entity ID of primary entity. */
			readonly msdyn_EntityId: string;
			/** Entity type of primary entity. */
			readonly msdyn_EntityType: string;
			/** Grade of prediction score. */
			readonly msdyn_Grade: string;
			/** Prediction model name. */
			readonly msdyn_ModelName: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Prediction model definition ID. */
			readonly msdyn_PredictionID: string;
			/** Unique identifier for entity instances. */
			readonly msdyn_predictivemodelscoreId: string;
			/** Unique identifier for Predictive Score associated with Predictive Model Score. */
			readonly msdyn_PredictiveScoreId: string;
			/** Prediction score. */
			readonly msdyn_Score: string;
			/** Scored on. */
			readonly msdyn_ScoredOn_UtcDateOnly: string;
			/** Score history. */
			readonly msdyn_ScoreHistory: string;
			/** Score reasons. */
			readonly msdyn_ScoreReasons: string;
			/** Score trend. */
			readonly msdyn_ScoreTrend: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Predictive Model Score. */
			readonly statecode: string;
			/** Reason for the status of the Predictive Model Score. */
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
	namespace msdyn_predictivemodelscore {
		enum msdyn_Grade {
			/** 0 */
			Grade_A,
			/** 1 */
			Grade_B,
			/** 2 */
			Grade_C,
			/** 3 */
			Grade_D
		}
		enum msdyn_ScoreTrend {
			/** 2 */
			Declining,
			/** 0 */
			Improving,
			/** 3 */
			Not_enough_info,
			/** 1 */
			Steady
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
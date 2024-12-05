//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_predictionmodelstatus_Information {
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
	class Formmsdyn_predictionmodelstatus_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_predictionmodelstatus_Information */
		Body: DevKit.Formmsdyn_predictionmodelstatus_Information.Body;
		/** The Navigation of form msdyn_predictionmodelstatus_Information */
		Navigation: DevKit.Formmsdyn_predictionmodelstatus_Information.Navigation;
		/** The SidePanes of form msdyn_predictionmodelstatus_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_predictionmodelstatusApi {
		/**
		* DynamicsCrm.DevKit msdyn_predictionmodelstatusApi
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
		/** Stores boolean value to tell if grades should be updated after training or not. */
		msdyn_ChangeGradesOnRetrain: boolean;
		/** Stores computation config of the model */
		msdyn_ComputationConfig: string;
		/** Stores computation frequence for the model. */
		msdyn_ComputationFrequency: number;
		/** Stores version for the config used. */
		msdyn_ConfigVersion: string;
		/** Stores the Created time for the model */
		msdyn_Created_UtcDateAndTime: Date;
		/** Stores the docker image that will be used to train the model */
		msdyn_DockerImageName: string;
		/** Stores path of the explanation file after training. */
		msdyn_ExplanationPath: string;
		/** Stores grade definition for the model. */
		msdyn_GradeDefinition: string;
		/** Stores bool value which tells if the model is current model or not on UX. */
		msdyn_IsCurrent: boolean;
		/** Stores island url where the job was submitted. */
		msdyn_IslandUrl: string;
		/** Tells if new Entity Addition is opted or not */
		msdyn_isnewentityadditionopted: boolean;
		/** Stores boolean variable to tell if predictive model is scheduled or not. */
		msdyn_IsScheduled: boolean;
		/** Stores intermediate training message */
		msdyn_Message: string;
		/** Stores guid for each predictive model. */
		msdyn_ModelId: string;
		/** Stores the path where model is stored after training. */
		msdyn_ModelPath: string;
		/** Stores version of the model. */
		msdyn_ModelVersion: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Stores the time when next computation to be run. */
		msdyn_NextComputation_UtcDateAndTime: Date;
		/** Stores unique guid for prediction */
		msdyn_PredictionGuid: string;
		/** Unique identifier for entity instances */
		msdyn_predictionmodelstatusId: string;
		/** Stores name of prediction */
		msdyn_PredictionName: string;
		/** Type of prediction - lead or opportunity */
		msdyn_PredictionType: OptionSet.msdyn_predictionmodelstatus.msdyn_PredictionType;
		/** Tells if per stage modeling is opted or not. */
		msdyn_PsmOpted: boolean;
		/** Stores boolean variable to tell if model needs to be published automatically after training or not. */
		msdyn_PublishOnTrain: boolean;
		/** Stores number of times the training is retried after submit was failed in service. */
		msdyn_RetryCounter: number;
		/** Stores training metrics related data. */
		msdyn_SignalsUsed: number;
		/** Stores status of predictive model */
		msdyn_Status: string;
		/** Stores training metrics data. */
		msdyn_TestSetCount: number;
		/** Tells the status check scheduler when it should consider some submitted job as "Terminated" */
		msdyn_TimeoutPeriodInMinutes: number;
		/** Stores training accuracy for predictive model. */
		msdyn_TrainingAccuracy: number;
		/** Stores training AUC for predictive models. */
		msdyn_TrainingAuc: number;
		/** Stores training config of the model */
		msdyn_TrainingConfig: string;
		/** Stores training metrics data. */
		msdyn_TrainingSetCount: number;
		/** Stores boolean value to tell if BPF should be used as filter criteria or not. */
		msdyn_UseBPFAsFilter: boolean;
		/** Stores training metrics related data. */
		msdyn_ValidationSetCount: number;
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
		/** Status of the Prediction Model Status */
		statecode: OptionSet.msdyn_predictionmodelstatus.statecode;
		/** Reason for the status of the Prediction Model Status */
		statuscode: OptionSet.msdyn_predictionmodelstatus.statuscode;
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
			/** Stores boolean value to tell if grades should be updated after training or not. */
			readonly msdyn_ChangeGradesOnRetrain: string;
			/** Stores computation config of the model */
			readonly msdyn_ComputationConfig: string;
			/** Stores computation frequence for the model. */
			readonly msdyn_ComputationFrequency: string;
			/** Stores version for the config used. */
			readonly msdyn_ConfigVersion: string;
			/** Stores the Created time for the model */
			readonly msdyn_Created_UtcDateAndTime: string;
			/** Stores the docker image that will be used to train the model */
			readonly msdyn_DockerImageName: string;
			/** Stores path of the explanation file after training. */
			readonly msdyn_ExplanationPath: string;
			/** Stores grade definition for the model. */
			readonly msdyn_GradeDefinition: string;
			/** Stores bool value which tells if the model is current model or not on UX. */
			readonly msdyn_IsCurrent: string;
			/** Stores island url where the job was submitted. */
			readonly msdyn_IslandUrl: string;
			/** Tells if new Entity Addition is opted or not */
			readonly msdyn_isnewentityadditionopted: string;
			/** Stores boolean variable to tell if predictive model is scheduled or not. */
			readonly msdyn_IsScheduled: string;
			/** Stores intermediate training message */
			readonly msdyn_Message: string;
			/** Stores guid for each predictive model. */
			readonly msdyn_ModelId: string;
			/** Stores the path where model is stored after training. */
			readonly msdyn_ModelPath: string;
			/** Stores version of the model. */
			readonly msdyn_ModelVersion: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Stores the time when next computation to be run. */
			readonly msdyn_NextComputation_UtcDateAndTime: string;
			/** Stores unique guid for prediction */
			readonly msdyn_PredictionGuid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_predictionmodelstatusId: string;
			/** Stores name of prediction */
			readonly msdyn_PredictionName: string;
			/** Type of prediction - lead or opportunity */
			readonly msdyn_PredictionType: string;
			/** Tells if per stage modeling is opted or not. */
			readonly msdyn_PsmOpted: string;
			/** Stores boolean variable to tell if model needs to be published automatically after training or not. */
			readonly msdyn_PublishOnTrain: string;
			/** Stores number of times the training is retried after submit was failed in service. */
			readonly msdyn_RetryCounter: string;
			/** Stores training metrics related data. */
			readonly msdyn_SignalsUsed: string;
			/** Stores status of predictive model */
			readonly msdyn_Status: string;
			/** Stores training metrics data. */
			readonly msdyn_TestSetCount: string;
			/** Tells the status check scheduler when it should consider some submitted job as "Terminated" */
			readonly msdyn_TimeoutPeriodInMinutes: string;
			/** Stores training accuracy for predictive model. */
			readonly msdyn_TrainingAccuracy: string;
			/** Stores training AUC for predictive models. */
			readonly msdyn_TrainingAuc: string;
			/** Stores training config of the model */
			readonly msdyn_TrainingConfig: string;
			/** Stores training metrics data. */
			readonly msdyn_TrainingSetCount: string;
			/** Stores boolean value to tell if BPF should be used as filter criteria or not. */
			readonly msdyn_UseBPFAsFilter: string;
			/** Stores training metrics related data. */
			readonly msdyn_ValidationSetCount: string;
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
			/** Status of the Prediction Model Status */
			readonly statecode: string;
			/** Reason for the status of the Prediction Model Status */
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
	namespace msdyn_predictionmodelstatus {
		enum msdyn_PredictionType {
			/** 192350000 */
			LeadScoring,
			/** 192350001 */
			OpportunityScoring,
			/** 192350002 */
			SimilarOpportunity
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
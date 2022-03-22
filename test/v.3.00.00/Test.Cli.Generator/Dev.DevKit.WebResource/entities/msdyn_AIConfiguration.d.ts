//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_AIConfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_AIConfigurationApi
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
		readonly ComponentState: OptionSet.msdyn_AIConfiguration.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Tells whether the component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for entity instances */
		msdyn_AIConfigurationId: string;
		/** For internal use only. */
		readonly msdyn_AIConfigurationIdUnique: string;
		/** Unique identifier for AIModel associated with AIConfiguration. */
		msdyn_AIModelId: string;
		/** Unique identifier for Connection Reference associated with AIConfiguration. */
		msdyn_ConnectionReferenceId: string;
		msdyn_CreatedFromConfigurationId: string;
		msdyn_CustomConfiguration: string;
		msdyn_DataBinding: string;
		msdyn_lasterrors: string;
		msdyn_lasttrainorrundate_TimezoneDateAndTime: Date;
		msdyn_MajorIterationNumber: number;
		msdyn_MinorIterationNumber: number;
		/** This is a file type attribute to store Ai builder Model. */
		readonly msdyn_Model: string;
		msdyn_ModelData: string;
		msdyn_modelglobalexplainability: string;
		msdyn_ModelPerformance: string;
		/** Model Provisioning Metadata */
		msdyn_ModelProvisioningMetadata: string;
		/** Model Provisioning Status */
		msdyn_ModelProvisioningStatus: string;
		msdyn_ModelRunDataSpecification: string;
		/** The name of the custom entity. */
		msdyn_Name: string;
		msdyn_ResourceInfo: string;
		/** Run Configuration */
		msdyn_RunConfiguration: string;
		msdyn_SchedulingOptions: string;
		/** Template Version */
		msdyn_TemplateVersion: number;
		/** Unique identifier for AIConfiguration associated with AIConfiguration. */
		msdyn_TrainedModelAIConfigurationPareId: string;
		msdyn_Type: OptionSet.msdyn_AIConfiguration.msdyn_Type;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
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
		/** Status of the AIConfiguration */
		statecode: OptionSet.msdyn_AIConfiguration.statecode;
		/** Reason for the status of the AIConfiguration */
		statuscode: OptionSet.msdyn_AIConfiguration.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_AIConfiguration {
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
		enum msdyn_Type {
			/** 190690001 */
			RunConfiguration,
			/** 190690000 */
			TrainingConfiguration
		}
		enum statecode {
			/** 2 */
			Done,
			/** 0 */
			Draft,
			/** 3 */
			Failed,
			/** 1 */
			InProgress
		}
		enum statuscode {
			/** 12 */
			CancelFailed,
			/** 2 */
			Cancelling,
			/** 13 */
			DeleteFailed,
			/** 5 */
			Deleting,
			/** 0 */
			Draft,
			/** 7 */
			Published,
			/** 10 */
			PublishFailed,
			/** 3 */
			Publishing,
			/** 8 */
			Scheduled,
			/** 6 */
			Trained,
			/** 9 */
			TrainFailed,
			/** 1 */
			Training,
			/** 11 */
			UnpublishFailed,
			/** 4 */
			Unpublishing,
			/** 14 */
			UnsuccessfulTraining
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
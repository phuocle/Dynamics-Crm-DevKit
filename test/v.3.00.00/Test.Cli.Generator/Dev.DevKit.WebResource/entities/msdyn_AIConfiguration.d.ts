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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Tells whether the component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for entity instances */
		msdyn_AIConfigurationId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		msdyn_AIConfigurationIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for AIModel associated with AIConfiguration. */
		msdyn_AIModelId: DevKit.WebApi.LookupValue;
		/** Unique identifier for Connection Reference associated with AIConfiguration. */
		msdyn_ConnectionReferenceId: DevKit.WebApi.LookupValue;
		msdyn_CreatedFromConfigurationId: DevKit.WebApi.LookupValue;
		msdyn_CustomConfiguration: DevKit.WebApi.StringValue;
		msdyn_DataBinding: DevKit.WebApi.StringValue;
		msdyn_lasterrors: DevKit.WebApi.StringValue;
		msdyn_lasttrainorrundate_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		msdyn_MajorIterationNumber: DevKit.WebApi.IntegerValue;
		msdyn_MinorIterationNumber: DevKit.WebApi.IntegerValue;
		/** This is a file type attribute to store Ai builder Model. */
		msdyn_Model: DevKit.WebApi.StringValueReadonly;
		msdyn_ModelData: DevKit.WebApi.StringValue;
		msdyn_modelglobalexplainability: DevKit.WebApi.StringValue;
		msdyn_ModelPerformance: DevKit.WebApi.StringValue;
		/** Model Provisioning Metadata */
		msdyn_ModelProvisioningMetadata: DevKit.WebApi.StringValue;
		/** Model Provisioning Status */
		msdyn_ModelProvisioningStatus: DevKit.WebApi.StringValue;
		msdyn_ModelRunDataSpecification: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_Name: DevKit.WebApi.StringValue;
		msdyn_ResourceInfo: DevKit.WebApi.StringValue;
		/** Run Configuration */
		msdyn_RunConfiguration: DevKit.WebApi.StringValue;
		msdyn_SchedulingOptions: DevKit.WebApi.StringValue;
		/** Template Version */
		msdyn_TemplateVersion: DevKit.WebApi.IntegerValue;
		/** Unique identifier for AIConfiguration associated with AIConfiguration. */
		msdyn_TrainedModelAIConfigurationPareId: DevKit.WebApi.LookupValue;
		msdyn_Type: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
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
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the AIConfiguration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the AIConfiguration */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class msdyn_AIConfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_AIConfigurationApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_AIConfiguration.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Tells whether the component can be customized. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier for entity instances */
		msdyn_AIConfigurationId: string | null;
		/** For internal use only. */
		readonly msdyn_AIConfigurationIdUnique: string | null;
		/** Unique identifier for AIModel associated with AIConfiguration. */
		msdyn_AIModelId: string | null;
		/** Unique identifier for Connection Reference associated with AIConfiguration. */
		msdyn_ConnectionReferenceId: string | null;
		msdyn_CreatedFromConfigurationId: string | null;
		msdyn_CustomConfiguration: string | null;
		msdyn_DataBinding: string | null;
		msdyn_lasterrors: string | null;
		msdyn_lasttrainorrundate_TimezoneDateAndTime: Date | null;
		msdyn_MajorIterationNumber: number | null;
		msdyn_MinorIterationNumber: number | null;
		/** This is a file type attribute to store Ai builder Model. */
		readonly msdyn_Model_name: string | null;
		/** Model Action */
		msdyn_ModelAction: string | null;
		msdyn_ModelData: string | null;
		msdyn_modelglobalexplainability: string | null;
		msdyn_ModelPerformance: string | null;
		/** Model Provisioning Metadata */
		msdyn_ModelProvisioningMetadata: string | null;
		/** Model Provisioning Status */
		msdyn_ModelProvisioningStatus: string | null;
		msdyn_ModelRunDataSpecification: string | null;
		/** The name of the custom entity. */
		msdyn_Name: string | null;
		msdyn_ResourceInfo: string | null;
		/** Run Configuration */
		msdyn_RunConfiguration: string | null;
		msdyn_SchedulingOptions: string | null;
		/** Template Version */
		msdyn_TemplateVersion: number | null;
		/** Unique identifier for AIConfiguration associated with AIConfiguration. */
		msdyn_TrainedModelAIConfigurationPareId: string | null;
		msdyn_Type: OptionSet.msdyn_AIConfiguration.msdyn_Type | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		readonly OwnerIdType: number | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the AIConfiguration */
		statecode: OptionSet.msdyn_AIConfiguration.statecode | null;
		/** Reason for the status of the AIConfiguration */
		statuscode: OptionSet.msdyn_AIConfiguration.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Tells whether the component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for entity instances */
			readonly msdyn_AIConfigurationId: string;
			/** For internal use only. */
			readonly msdyn_AIConfigurationIdUnique: string;
			/** Unique identifier for AIModel associated with AIConfiguration. */
			readonly msdyn_AIModelId: string;
			/** Unique identifier for Connection Reference associated with AIConfiguration. */
			readonly msdyn_ConnectionReferenceId: string;
			readonly msdyn_CreatedFromConfigurationId: string;
			readonly msdyn_CustomConfiguration: string;
			readonly msdyn_DataBinding: string;
			readonly msdyn_lasterrors: string;
			readonly msdyn_lasttrainorrundate_TimezoneDateAndTime: string;
			readonly msdyn_MajorIterationNumber: string;
			readonly msdyn_MinorIterationNumber: string;
			/** This is a file type attribute to store Ai builder Model. */
			readonly msdyn_Model_name: string;
			/** Model Action */
			readonly msdyn_ModelAction: string;
			readonly msdyn_ModelData: string;
			readonly msdyn_modelglobalexplainability: string;
			readonly msdyn_ModelPerformance: string;
			/** Model Provisioning Metadata */
			readonly msdyn_ModelProvisioningMetadata: string;
			/** Model Provisioning Status */
			readonly msdyn_ModelProvisioningStatus: string;
			readonly msdyn_ModelRunDataSpecification: string;
			/** The name of the custom entity. */
			readonly msdyn_Name: string;
			readonly msdyn_ResourceInfo: string;
			/** Run Configuration */
			readonly msdyn_RunConfiguration: string;
			readonly msdyn_SchedulingOptions: string;
			/** Template Version */
			readonly msdyn_TemplateVersion: string;
			/** Unique identifier for AIConfiguration associated with AIConfiguration. */
			readonly msdyn_TrainedModelAIConfigurationPareId: string;
			readonly msdyn_Type: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			readonly OwnerIdType: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the AIConfiguration */
			readonly statecode: string;
			/** Reason for the status of the AIConfiguration */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_AIConfiguration {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum msdyn_Type {
			/** RunConfiguration = 190690001*/
			RunConfiguration = 190690001,
			/** TrainingConfiguration = 190690000*/
			TrainingConfiguration = 190690000
		}
		enum statecode {
			/** Done = 2*/
			Done = 2,
			/** Draft = 0*/
			Draft = 0,
			/** Failed = 3*/
			Failed = 3,
			/** InProgress = 1*/
			InProgress = 1
		}
		enum statuscode {
			/** CancelFailed = 12*/
			CancelFailed = 12,
			/** Cancelling = 2*/
			Cancelling = 2,
			/** DeleteFailed = 13*/
			DeleteFailed = 13,
			/** Deleting = 5*/
			Deleting = 5,
			/** Draft = 0*/
			Draft = 0,
			/** Published = 7*/
			Published = 7,
			/** PublishFailed = 10*/
			PublishFailed = 10,
			/** Publishing = 3*/
			Publishing = 3,
			/** Scheduled = 8*/
			Scheduled = 8,
			/** Trained = 6*/
			Trained = 6,
			/** TrainFailed = 9*/
			TrainFailed = 9,
			/** Training = 1*/
			Training = 1,
			/** UnpublishFailed = 11*/
			UnpublishFailed = 11,
			/** Unpublishing = 4*/
			Unpublishing = 4,
			/** UnsuccessfulTraining = 14*/
			UnsuccessfulTraining = 14
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
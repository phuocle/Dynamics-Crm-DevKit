//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageFilterApi {
		/**
		* DynamicsCrm.DevKit SdkMessageFilterApi
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
		/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
		Availability: number;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageFilter.ComponentState;
		/** Unique identifier of the user who created the SDK message filter. */
		readonly CreatedBy: string;
		/** Date and time when the SDK message filter was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sdkmessagefilter. */
		readonly CreatedOnBehalfBy: string;
		/** Customization level of the SDK message filter. */
		readonly CustomizationLevel: number;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Indicates whether a custom SDK message processing step is allowed. */
		IsCustomProcessingStepAllowed: boolean;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Indicates whether the filter should be visible. */
		readonly IsVisible: boolean;
		/** Unique identifier of the user who last modified the SDK message filter. */
		readonly ModifiedBy: string;
		/** Date and time when the SDK message filter was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sdkmessagefilter. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the SDK message filter. */
		Name: string;
		/** Unique identifier of the organization with which the SDK message filter is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** For internal use only. */
		RestrictionLevel: number;
		/** Unique identifier of the SDK message filter entity. */
		SdkMessageFilterId: string;
		/** Unique identifier of the SDK message filter. */
		readonly SdkMessageFilterIdUnique: string;
		/** Unique identifier of the related SDK message. */
		SdkMessageId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		/** Whether or not the SDK message can be called from a workflow. */
		readonly WorkflowSdkStepEnabled: boolean;
		readonly FormattedValue: {
			/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
			readonly Availability: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the SDK message filter. */
			readonly CreatedBy: string;
			/** Date and time when the SDK message filter was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sdkmessagefilter. */
			readonly CreatedOnBehalfBy: string;
			/** Customization level of the SDK message filter. */
			readonly CustomizationLevel: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Indicates whether a custom SDK message processing step is allowed. */
			readonly IsCustomProcessingStepAllowed: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Indicates whether the filter should be visible. */
			readonly IsVisible: string;
			/** Unique identifier of the user who last modified the SDK message filter. */
			readonly ModifiedBy: string;
			/** Date and time when the SDK message filter was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sdkmessagefilter. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the SDK message filter. */
			readonly Name: string;
			/** Unique identifier of the organization with which the SDK message filter is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** For internal use only. */
			readonly RestrictionLevel: string;
			/** Unique identifier of the SDK message filter entity. */
			readonly SdkMessageFilterId: string;
			/** Unique identifier of the SDK message filter. */
			readonly SdkMessageFilterIdUnique: string;
			/** Unique identifier of the related SDK message. */
			readonly SdkMessageId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
			/** Whether or not the SDK message can be called from a workflow. */
			readonly WorkflowSdkStepEnabled: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageFilter {
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
		enum PrimaryObjectTypeCode {
		}
		enum SecondaryObjectTypeCode {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SdkMessageFilterApi {
		/**
		* DynamicsCrm.DevKit SdkMessageFilterApi
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
		/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
		Availability: number | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageFilter.ComponentState | null;
		/** Unique identifier of the user who created the SDK message filter. */
		readonly CreatedBy: string | null;
		/** Date and time when the SDK message filter was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the sdkmessagefilter. */
		readonly CreatedOnBehalfBy: string | null;
		/** Customization level of the SDK message filter. */
		readonly CustomizationLevel: number | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Indicates whether a custom SDK message processing step is allowed. */
		IsCustomProcessingStepAllowed: boolean | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Indicates whether the filter should be visible. */
		readonly IsVisible: boolean | null;
		/** Unique identifier of the user who last modified the SDK message filter. */
		readonly ModifiedBy: string | null;
		/** Date and time when the SDK message filter was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the sdkmessagefilter. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the SDK message filter. */
		Name: string | null;
		/** Unique identifier of the organization with which the SDK message filter is associated. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** For internal use only. */
		RestrictionLevel: number | null;
		/** Unique identifier of the SDK message filter entity. */
		SdkMessageFilterId: string | null;
		/** Unique identifier of the SDK message filter. */
		readonly SdkMessageFilterIdUnique: string | null;
		/** Unique identifier of the related SDK message. */
		SdkMessageId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		readonly VersionNumber: number | null;
		/** Whether or not the SDK message can be called from a workflow. */
		readonly WorkflowSdkStepEnabled: boolean | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum PrimaryObjectTypeCode {
		}
		enum SecondaryObjectTypeCode {
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
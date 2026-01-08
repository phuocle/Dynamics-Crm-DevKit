//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SdkMessageProcessingStepImageApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepImageApi
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
		/** Comma-separated list of attributes that are to be passed into the SDK message processing step image. */
		Attributes: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageProcessingStepImage.ComponentState | null;
		/** Unique identifier of the user who created the SDK message processing step image. */
		readonly CreatedBy: string | null;
		/** Date and time when the SDK message processing step image was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstepimage. */
		readonly CreatedOnBehalfBy: string | null;
		/** Customization level of the SDK message processing step image. */
		readonly CustomizationLevel: number | null;
		/** Description of the SDK message processing step image. */
		Description: string | null;
		/** Key name used to access the pre-image or post-image property bags in a step. */
		EntityAlias: string | null;
		/** Type of image requested. */
		ImageType: OptionSet.SdkMessageProcessingStepImage.ImageType | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		readonly IsManaged: boolean | null;
		/** Name of the property on the Request message. */
		MessagePropertyName: string | null;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		readonly ModifiedBy: string | null;
		/** Date and time when the SDK message processing step was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepimage. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of SdkMessage processing step image. */
		Name: string | null;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Name of the related entity. */
		RelatedAttributeName: string | null;
		/** Unique identifier of the SDK message processing step. */
		SdkMessageProcessingStepId: string | null;
		/** Unique identifier of the SDK message processing step image entity. */
		SdkMessageProcessingStepImageId: string | null;
		/** Unique identifier of the SDK message processing step image. */
		readonly SdkMessageProcessingStepImageIdUnique: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Number that identifies a specific revision of the step image.  */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Comma-separated list of attributes that are to be passed into the SDK message processing step image. */
			readonly Attributes: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the SDK message processing step image. */
			readonly CreatedBy: string;
			/** Date and time when the SDK message processing step image was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sdkmessageprocessingstepimage. */
			readonly CreatedOnBehalfBy: string;
			/** Customization level of the SDK message processing step image. */
			readonly CustomizationLevel: string;
			/** Description of the SDK message processing step image. */
			readonly Description: string;
			/** Key name used to access the pre-image or post-image property bags in a step. */
			readonly EntityAlias: string;
			/** Type of image requested. */
			readonly ImageType: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Name of the property on the Request message. */
			readonly MessagePropertyName: string;
			/** Unique identifier of the user who last modified the SDK message processing step. */
			readonly ModifiedBy: string;
			/** Date and time when the SDK message processing step was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepimage. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of SdkMessage processing step image. */
			readonly Name: string;
			/** Unique identifier of the organization with which the SDK message processing step is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Name of the related entity. */
			readonly RelatedAttributeName: string;
			/** Unique identifier of the SDK message processing step. */
			readonly SdkMessageProcessingStepId: string;
			/** Unique identifier of the SDK message processing step image entity. */
			readonly SdkMessageProcessingStepImageId: string;
			/** Unique identifier of the SDK message processing step image. */
			readonly SdkMessageProcessingStepImageIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Number that identifies a specific revision of the step image.  */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStepImage {
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
		enum ImageType {
			/** Both = 2*/
			Both = 2,
			/** PostImage = 1*/
			PostImage = 1,
			/** PreImage = 0*/
			PreImage = 0
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
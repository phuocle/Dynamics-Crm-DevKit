//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageProcessingStepImageApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepImageApi
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
		/** Comma-separated list of attributes that are to be passed into the SDK message processing step image. */
		Attributes: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageProcessingStepImage.ComponentState;
		/** Unique identifier of the user who created the SDK message processing step image. */
		readonly CreatedBy: string;
		/** Date and time when the SDK message processing step image was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstepimage. */
		readonly CreatedOnBehalfBy: string;
		/** Customization level of the SDK message processing step image. */
		readonly CustomizationLevel: number;
		/** Description of the SDK message processing step image. */
		Description: string;
		/** Key name used to access the pre-image or post-image property bags in a step. */
		EntityAlias: string;
		/** Type of image requested. */
		ImageType: OptionSet.SdkMessageProcessingStepImage.ImageType;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Name of the property on the Request message. */
		MessagePropertyName: string;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		readonly ModifiedBy: string;
		/** Date and time when the SDK message processing step was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepimage. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of SdkMessage processing step image. */
		Name: string;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Name of the related entity. */
		RelatedAttributeName: string;
		/** Unique identifier of the SDK message processing step. */
		SdkMessageProcessingStepId: string;
		/** Unique identifier of the SDK message processing step image entity. */
		SdkMessageProcessingStepImageId: string;
		/** Unique identifier of the SDK message processing step image. */
		readonly SdkMessageProcessingStepImageIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Number that identifies a specific revision of the step image.  */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStepImage {
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
		enum ImageType {
			/** 2 */
			Both,
			/** 1 */
			PostImage,
			/** 0 */
			PreImage
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
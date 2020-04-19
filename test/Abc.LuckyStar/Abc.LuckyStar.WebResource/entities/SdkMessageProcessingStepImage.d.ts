//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Comma-separated list of attributes that are to be passed into the SDK message processing step image. */
		Attributes: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the SDK message processing step image. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message processing step image was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstepimage. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customization level of the SDK message processing step image. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Description of the SDK message processing step image. */
		Description: DevKit.WebApi.StringValue;
		/** Key name used to access the pre-image or post-image property bags in a step. */
		EntityAlias: DevKit.WebApi.StringValue;
		/** Type of image requested. */
		ImageType: DevKit.WebApi.OptionSetValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Name of the property on the Request message. */
		MessagePropertyName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message processing step was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepimage. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of SdkMessage processing step image. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Name of the related entity. */
		RelatedAttributeName: DevKit.WebApi.StringValue;
		/** Unique identifier of the SDK message processing step. */
		SdkMessageProcessingStepId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the SDK message processing step image entity. */
		SdkMessageProcessingStepImageId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the SDK message processing step image. */
		SdkMessageProcessingStepImageIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Number that identifies a specific revision of the step image.  */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStepImage {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum ImageType {
			/** 0 */
			PreImage,
			/** 1 */
			PostImage,
			/** 2 */
			Both
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
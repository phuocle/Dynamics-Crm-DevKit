﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageProcessingStepSecureConfigApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepSecureConfigApi
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
		/** Unique identifier of the user who created the SDK message processing step. */
		readonly CreatedBy: string;
		/** Date and time when the SDK message processing step was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstepsecureconfig. */
		readonly CreatedOnBehalfBy: string;
		/** Customization level of the SDK message processing step secure configuration. */
		readonly CustomizationLevel: number;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		readonly ModifiedBy: string;
		/** Date and time when the SDK message processing step was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepsecureconfig. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		readonly OrganizationId: string;
		/** Unique identifier of the SDK message processing step secure configuration. */
		SdkMessageProcessingStepSecureConfigId: string;
		/** Unique identifier of the SDK message processing step. */
		readonly SdkMessageProcessingStepSecureConfigIdUnique: string;
		/** Secure step-specific configuration for the plug-in type that is passed to the plug-in's constructor at run time. */
		SecureConfig: string;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the SDK message processing step. */
			readonly CreatedBy: string;
			/** Date and time when the SDK message processing step was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sdkmessageprocessingstepsecureconfig. */
			readonly CreatedOnBehalfBy: string;
			/** Customization level of the SDK message processing step secure configuration. */
			readonly CustomizationLevel: string;
			/** Unique identifier of the user who last modified the SDK message processing step. */
			readonly ModifiedBy: string;
			/** Date and time when the SDK message processing step was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepsecureconfig. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization with which the SDK message processing step is associated. */
			readonly OrganizationId: string;
			/** Unique identifier of the SDK message processing step secure configuration. */
			readonly SdkMessageProcessingStepSecureConfigId: string;
			/** Unique identifier of the SDK message processing step. */
			readonly SdkMessageProcessingStepSecureConfigIdUnique: string;
			/** Secure step-specific configuration for the plug-in type that is passed to the plug-in's constructor at run time. */
			readonly SecureConfig: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStepSecureConfig {
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
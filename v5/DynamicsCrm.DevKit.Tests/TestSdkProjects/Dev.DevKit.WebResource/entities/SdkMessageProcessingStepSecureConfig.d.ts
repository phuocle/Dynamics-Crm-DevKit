//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SdkMessageProcessingStepSecureConfigApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepSecureConfigApi
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
		/** Unique identifier of the user who created the SDK message processing step. */
		readonly CreatedBy: string | null;
		/** Date and time when the SDK message processing step was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstepsecureconfig. */
		readonly CreatedOnBehalfBy: string | null;
		/** Customization level of the SDK message processing step secure configuration. */
		readonly CustomizationLevel: number | null;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		readonly ModifiedBy: string | null;
		/** Date and time when the SDK message processing step was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepsecureconfig. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		readonly OrganizationId: string | null;
		/** Unique identifier of the SDK message processing step secure configuration. */
		SdkMessageProcessingStepSecureConfigId: string | null;
		/** Unique identifier of the SDK message processing step. */
		readonly SdkMessageProcessingStepSecureConfigIdUnique: string | null;
		/** Secure step-specific configuration for the plug-in type that is passed to the plug-in's constructor at run time. */
		SecureConfig: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SdkMessageRequestFieldApi {
		/**
		* DynamicsCrm.DevKit SdkMessageRequestFieldApi
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
		/** Common language runtime (CLR)-based parser for the SDK message request field. */
		ClrParser: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageRequestField.ComponentState | null;
		/** Unique identifier of the user who created the SDK message request field. */
		readonly CreatedBy: string | null;
		/** Date and time when the SDK message request field was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the sdkmessagerequestfield. */
		readonly CreatedOnBehalfBy: string | null;
		/** Customization level of the SDK message request field. */
		readonly CustomizationLevel: number | null;
		/** Indicates how field contents are used during message processing. 1 - Primary entity, 2- Secondary entity */
		readonly FieldMask: number | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who last modified the SDK message request field. */
		readonly ModifiedBy: string | null;
		/** Date and time when the SDK message request field was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the sdkmessagerequestfield. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the SDK message request field. */
		Name: string | null;
		/** Information about whether SDK message request field is optional. */
		Optional: boolean | null;
		/** Unique identifier of the organization with which the SDK message request field is associated. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		ParameterBindingInformation: string | null;
		/** Parser for the SDK message request field. */
		Parser: string | null;
		/** Position of the Sdk message request field */
		readonly Position: number | null;
		/** Public name of the SDK message request field. */
		PublicName: string | null;
		/** Unique identifier of the SDK message request field entity. */
		SdkMessageRequestFieldId: string | null;
		/** Entity identifier of the SDK message request field. */
		readonly SdkMessageRequestFieldIdUnique: string | null;
		/** Unique identifier of the message request with which the SDK message request field is associated. */
		readonly SdkMessageRequestId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Common language runtime (CLR)-based parser for the SDK message request field. */
			readonly ClrParser: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the SDK message request field. */
			readonly CreatedBy: string;
			/** Date and time when the SDK message request field was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sdkmessagerequestfield. */
			readonly CreatedOnBehalfBy: string;
			/** Customization level of the SDK message request field. */
			readonly CustomizationLevel: string;
			/** Indicates how field contents are used during message processing. 1 - Primary entity, 2- Secondary entity */
			readonly FieldMask: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the SDK message request field. */
			readonly ModifiedBy: string;
			/** Date and time when the SDK message request field was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sdkmessagerequestfield. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the SDK message request field. */
			readonly Name: string;
			/** Information about whether SDK message request field is optional. */
			readonly Optional: string;
			/** Unique identifier of the organization with which the SDK message request field is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly ParameterBindingInformation: string;
			/** Parser for the SDK message request field. */
			readonly Parser: string;
			/** Position of the Sdk message request field */
			readonly Position: string;
			/** Public name of the SDK message request field. */
			readonly PublicName: string;
			/** Unique identifier of the SDK message request field entity. */
			readonly SdkMessageRequestFieldId: string;
			/** Entity identifier of the SDK message request field. */
			readonly SdkMessageRequestFieldIdUnique: string;
			/** Unique identifier of the message request with which the SDK message request field is associated. */
			readonly SdkMessageRequestId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageRequestField {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageResponseFieldApi {
		/**
		* DynamicsCrm.DevKit SdkMessageResponseFieldApi
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
		/** Common language runtime (CLR)-based formatter of the SDK message response field. */
		ClrFormatter: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageResponseField.ComponentState;
		/** Unique identifier of the user who created the SDK message response field. */
		readonly CreatedBy: string;
		/** Date and time when the SDK message response field was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sdkmessageresponsefield. */
		readonly CreatedOnBehalfBy: string;
		/** Customization level of the SDK message response field. */
		readonly CustomizationLevel: number;
		/** Formatter for the SDK message response field. */
		Formatter: string;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the SDK message response field. */
		readonly ModifiedBy: string;
		/** Date and time when the SDK message response field was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sdkmessageresponsefield. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the SDK message response field. */
		Name: string;
		/** Unique identifier of the organization with which the SDK message response field is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		ParameterBindingInformation: string;
		/** Position of the Sdk message response field */
		readonly Position: number;
		/** Public name of the SDK message response field. */
		PublicName: string;
		/** Unique identifier of the SDK message response field entity. */
		SdkMessageResponseFieldId: string;
		/** Unique identifier of the SDK message response field. */
		readonly SdkMessageResponseFieldIdUnique: string;
		/** Unique identifier of the message response with which the SDK message response field is associated. */
		readonly SdkMessageResponseId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Actual value of the SDK message response field. */
		Value: string;
		/** For internal use only. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Common language runtime (CLR)-based formatter of the SDK message response field. */
			readonly ClrFormatter: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the SDK message response field. */
			readonly CreatedBy: string;
			/** Date and time when the SDK message response field was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sdkmessageresponsefield. */
			readonly CreatedOnBehalfBy: string;
			/** Customization level of the SDK message response field. */
			readonly CustomizationLevel: string;
			/** Formatter for the SDK message response field. */
			readonly Formatter: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the SDK message response field. */
			readonly ModifiedBy: string;
			/** Date and time when the SDK message response field was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sdkmessageresponsefield. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the SDK message response field. */
			readonly Name: string;
			/** Unique identifier of the organization with which the SDK message response field is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly ParameterBindingInformation: string;
			/** Position of the Sdk message response field */
			readonly Position: string;
			/** Public name of the SDK message response field. */
			readonly PublicName: string;
			/** Unique identifier of the SDK message response field entity. */
			readonly SdkMessageResponseFieldId: string;
			/** Unique identifier of the SDK message response field. */
			readonly SdkMessageResponseFieldIdUnique: string;
			/** Unique identifier of the message response with which the SDK message response field is associated. */
			readonly SdkMessageResponseId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Actual value of the SDK message response field. */
			readonly Value: string;
			/** For internal use only. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageResponseField {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
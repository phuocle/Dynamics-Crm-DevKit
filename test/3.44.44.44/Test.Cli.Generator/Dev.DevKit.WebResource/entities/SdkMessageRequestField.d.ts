﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageRequestFieldApi {
		/**
		* DynamicsCrm.DevKit SdkMessageRequestFieldApi
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
		/** Common language runtime (CLR)-based parser for the SDK message request field. */
		ClrParser: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageRequestField.ComponentState;
		/** Unique identifier of the user who created the SDK message request field. */
		readonly CreatedBy: string;
		/** Date and time when the SDK message request field was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sdkmessagerequestfield. */
		readonly CreatedOnBehalfBy: string;
		/** Customization level of the SDK message request field. */
		readonly CustomizationLevel: number;
		/** Indicates how field contents are used during message processing. 1 - Primary entity, 2- Secondary entity */
		readonly FieldMask: number;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the SDK message request field. */
		readonly ModifiedBy: string;
		/** Date and time when the SDK message request field was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sdkmessagerequestfield. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the SDK message request field. */
		Name: string;
		/** Information about whether SDK message request field is optional. */
		Optional: boolean;
		/** Unique identifier of the organization with which the SDK message request field is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		ParameterBindingInformation: string;
		/** Parser for the SDK message request field. */
		Parser: string;
		/** Position of the Sdk message request field */
		readonly Position: number;
		/** Public name of the SDK message request field. */
		PublicName: string;
		/** Unique identifier of the SDK message request field entity. */
		SdkMessageRequestFieldId: string;
		/** Entity identifier of the SDK message request field. */
		readonly SdkMessageRequestFieldIdUnique: string;
		/** Unique identifier of the message request with which the SDK message request field is associated. */
		readonly SdkMessageRequestId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
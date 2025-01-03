﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessagePairApi {
		/**
		* DynamicsCrm.DevKit SdkMessagePairApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessagePair.ComponentState;
		/** Unique identifier of the user who created the SDK message pair. */
		readonly CreatedBy: string;
		/** Date and time when the SDK message pair was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sdkmessagepair. */
		readonly CreatedOnBehalfBy: string;
		/** Customization level of the SDK message filter. */
		readonly CustomizationLevel: number;
		/** Version in which the component is deprecated. */
		DeprecatedVersion: string;
		/** Endpoint that the message pair is associated with. */
		Endpoint: string;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the SDK message pair. */
		readonly ModifiedBy: string;
		/** Date and time when the SDK message pair was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sdkmessagepair. */
		readonly ModifiedOnBehalfBy: string;
		/** Namespace that the message pair is associated with. */
		Namespace: string;
		/** Unique identifier of the organization with which the SDK message pair is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		SdkMessageBindingInformation: string;
		/** Unique identifier of the message with which the SDK message pair is associated. */
		readonly SdkMessageId: string;
		/** Unique identifier of the SDK message pair entity. */
		SdkMessagePairId: string;
		/** Unique identifier of the SDK message pair. */
		readonly SdkMessagePairIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the SDK message pair. */
			readonly CreatedBy: string;
			/** Date and time when the SDK message pair was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sdkmessagepair. */
			readonly CreatedOnBehalfBy: string;
			/** Customization level of the SDK message filter. */
			readonly CustomizationLevel: string;
			/** Version in which the component is deprecated. */
			readonly DeprecatedVersion: string;
			/** Endpoint that the message pair is associated with. */
			readonly Endpoint: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the SDK message pair. */
			readonly ModifiedBy: string;
			/** Date and time when the SDK message pair was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sdkmessagepair. */
			readonly ModifiedOnBehalfBy: string;
			/** Namespace that the message pair is associated with. */
			readonly Namespace: string;
			/** Unique identifier of the organization with which the SDK message pair is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly SdkMessageBindingInformation: string;
			/** Unique identifier of the message with which the SDK message pair is associated. */
			readonly SdkMessageId: string;
			/** Unique identifier of the SDK message pair entity. */
			readonly SdkMessagePairId: string;
			/** Unique identifier of the SDK message pair. */
			readonly SdkMessagePairIdUnique: string;
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
	namespace SdkMessagePair {
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
﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PrivilegeObjectTypeCodesApi {
		/**
		* DynamicsCrm.DevKit PrivilegeObjectTypeCodesApi
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
		readonly ComponentState: OptionSet.PrivilegeObjectTypeCodes.ComponentState;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** For internal use only. */
		PrivilegeId: string;
		/** For internal use only. */
		PrivilegeObjectTypeCodeId: string;
		/** Unique identifier of the PrivlegeObjectTypeCode used when synchronizing customizations for the Microsoft Dynamics CRM client for Outlook */
		PrivilegeObjectTypeCodeRowId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** For internal use only. */
			readonly PrivilegeId: string;
			/** For internal use only. */
			readonly PrivilegeObjectTypeCodeId: string;
			/** Unique identifier of the PrivlegeObjectTypeCode used when synchronizing customizations for the Microsoft Dynamics CRM client for Outlook */
			readonly PrivilegeObjectTypeCodeRowId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PrivilegeObjectTypeCodes {
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
		enum ObjectTypeCode {
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
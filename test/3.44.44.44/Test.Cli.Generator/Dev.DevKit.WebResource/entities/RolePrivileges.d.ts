//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RolePrivilegesApi {
		/**
		* DynamicsCrm.DevKit RolePrivilegesApi
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
		/** Tells whether the role privilege can be deleted. */
		CanBeDeleted: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.RolePrivileges.ComponentState;
		readonly IsManaged: boolean;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** System-generated attribute that stores the privileges associated with the role. */
		PrivilegeDepthMask: number;
		/** Unique identifier of the privilege associated with the role. */
		readonly PrivilegeId: string;
		/** Unique identifier for Record Filter associated with role privilege. */
		RecordFilterId: string;
		/** Unique identifier of the role that is associated with the role privilege. */
		readonly RoleId: string;
		/** Unique identifier of the role privilege. */
		RolePrivilegeId: string;
		/** For internal use only. */
		readonly RolePrivilegeIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Tells whether the role privilege can be deleted. */
			readonly CanBeDeleted: string;
			/** For internal use only. */
			readonly ComponentState: string;
			readonly IsManaged: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** System-generated attribute that stores the privileges associated with the role. */
			readonly PrivilegeDepthMask: string;
			/** Unique identifier of the privilege associated with the role. */
			readonly PrivilegeId: string;
			/** Unique identifier for Record Filter associated with role privilege. */
			readonly RecordFilterId: string;
			/** Unique identifier of the role that is associated with the role privilege. */
			readonly RoleId: string;
			/** Unique identifier of the role privilege. */
			readonly RolePrivilegeId: string;
			/** For internal use only. */
			readonly RolePrivilegeIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RolePrivileges {
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
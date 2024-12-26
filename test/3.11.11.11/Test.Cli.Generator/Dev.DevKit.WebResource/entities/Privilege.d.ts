//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PrivilegeApi {
		/**
		* DynamicsCrm.DevKit PrivilegeApi
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
		/** Rights a user has to an instance of an entity. */
		AccessRight: number;
		/** Information that specifies whether the privilege applies to the user, the user's team, or objects shared by the user. */
		CanBeBasic: boolean;
		/** Information that specifies whether the privilege applies to child business units of the business unit associated with the user. */
		CanBeDeep: boolean;
		/** Information that specifies whether the privilege applies to the local reference of an external party. */
		CanBeEntityReference: boolean;
		/** Information that specifies whether the privilege applies to the entire organization. */
		CanBeGlobal: boolean;
		/** Information that specifies whether the privilege applies to the user's business unit. */
		CanBeLocal: boolean;
		/** Information that specifies whether the privilege applies to parent reference of the external party. */
		CanBeParentEntityReference: boolean;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Privilege.ComponentState;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Specifies whether the privilege is disabled. */
		readonly IsDisabledWhenIntegrated: boolean;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Name of the privilege. */
		Name: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the privilege. */
		PrivilegeId: string;
		/** Unique identifier of the Privilege used when synchronizing customizations for the Microsoft Dynamics CRM client for Outlook */
		PrivilegeRowId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Rights a user has to an instance of an entity. */
			readonly AccessRight: string;
			/** Information that specifies whether the privilege applies to the user, the user's team, or objects shared by the user. */
			readonly CanBeBasic: string;
			/** Information that specifies whether the privilege applies to child business units of the business unit associated with the user. */
			readonly CanBeDeep: string;
			/** Information that specifies whether the privilege applies to the local reference of an external party. */
			readonly CanBeEntityReference: string;
			/** Information that specifies whether the privilege applies to the entire organization. */
			readonly CanBeGlobal: string;
			/** Information that specifies whether the privilege applies to the user's business unit. */
			readonly CanBeLocal: string;
			/** Information that specifies whether the privilege applies to parent reference of the external party. */
			readonly CanBeParentEntityReference: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Specifies whether the privilege is disabled. */
			readonly IsDisabledWhenIntegrated: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Name of the privilege. */
			readonly Name: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the privilege. */
			readonly PrivilegeId: string;
			/** Unique identifier of the Privilege used when synchronizing customizations for the Microsoft Dynamics CRM client for Outlook */
			readonly PrivilegeRowId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Privilege {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RoleTemplatePrivilegesApi {
		/**
		* DynamicsCrm.DevKit RoleTemplatePrivilegesApi
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
		/** Information about whether the role in the template applies to the user, the user's team, or objects shared by the user. */
		IsBasic: boolean;
		/** Information about whether the role in the template applies to child business units of the business unit associated with the user. */
		IsDeep: boolean;
		/** Information about whether the role in the template applies to the entire organization. */
		IsGlobal: boolean;
		/** Information about whether the role in the template applies to the user's business unit. */
		IsLocal: boolean;
		/** Unique identifier of the privilege assigned to the role template. */
		readonly PrivilegeId: string;
		/** Unique identifier of the role template that is associated with the role privilege. */
		readonly RoleTemplateId: string;
		/** Unique identifier of the role template privileges. */
		RoleTemplatePrivilegeId: string;
		readonly Upgrading: boolean;
		readonly FormattedValue: {
			/** Information about whether the role in the template applies to the user, the user's team, or objects shared by the user. */
			readonly IsBasic: string;
			/** Information about whether the role in the template applies to child business units of the business unit associated with the user. */
			readonly IsDeep: string;
			/** Information about whether the role in the template applies to the entire organization. */
			readonly IsGlobal: string;
			/** Information about whether the role in the template applies to the user's business unit. */
			readonly IsLocal: string;
			/** Unique identifier of the privilege assigned to the role template. */
			readonly PrivilegeId: string;
			/** Unique identifier of the role template that is associated with the role privilege. */
			readonly RoleTemplateId: string;
			/** Unique identifier of the role template privileges. */
			readonly RoleTemplatePrivilegeId: string;
			readonly Upgrading: string;
		}
	}
}
declare namespace OptionSet {
	namespace RoleTemplatePrivileges {
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
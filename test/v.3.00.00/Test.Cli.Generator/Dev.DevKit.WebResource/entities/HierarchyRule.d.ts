//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class HierarchyRuleApi {
		/**
		* DynamicsCrm.DevKit HierarchyRuleApi
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
		readonly ComponentState: OptionSet.HierarchyRule.ComponentState;
		/** Description of the hierarchy rule. */
		Description: string;
		/** Unique identifier of the record type hierarchy rule. */
		HierarchyRuleID: string;
		/** Unique identifier of the hierarchy rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly HierarchyRuleIDUnique: string;
		/** Version in which the hierarchy rule is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Name of the hierarchy rule. */
		Name: string;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Form Id for the Primary Entity */
		PrimaryEntityFormID: string;
		/** Logical Name for the Primary entity. */
		PrimaryEntityLogicalName: string;
		readonly PublishedOn_UtcDateAndTime: Date;
		/** Form Id for the Related Entity. */
		readonly RelatedEntityFormId: string;
		/** Logical Name for the Related entity. */
		readonly RelatedEntityLogicalName: string;
		/** To show disabled records or not. */
		ShowDisabled: boolean;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** columns to sort in the primary entity */
		readonly SortBy: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Version number of the Hierarchy rule. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace HierarchyRule {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
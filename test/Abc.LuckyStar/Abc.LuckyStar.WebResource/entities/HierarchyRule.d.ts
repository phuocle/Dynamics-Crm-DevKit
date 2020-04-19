//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Description of the hierarchy rule. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the record type hierarchy rule. */
		HierarchyRuleID: DevKit.WebApi.GuidValue;
		/** Unique identifier of the hierarchy rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		HierarchyRuleIDUnique: DevKit.WebApi.GuidValueReadonly;
		/** Version in which the hierarchy rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Name of the hierarchy rule. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Form Id for the Primary Entity */
		PrimaryEntityFormID: DevKit.WebApi.GuidValue;
		/** Logical Name for the Primary entity. */
		PrimaryEntityLogicalName: DevKit.WebApi.StringValue;
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Form Id for the Related Entity. */
		RelatedEntityFormId: DevKit.WebApi.GuidValueReadonly;
		/** Logical Name for the Related entity. */
		RelatedEntityLogicalName: DevKit.WebApi.StringValueReadonly;
		/** To show disabled records or not. */
		ShowDisabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** columns to sort in the primary entity */
		SortBy: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the Hierarchy rule. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace HierarchyRule {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
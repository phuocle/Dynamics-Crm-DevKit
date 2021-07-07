//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RibbonDiffApi {
		/**
		* DynamicsCrm.DevKit RibbonDiffApi
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
		/** Unique identifier of the context group for this tab. If this ribbon definition adds a new tab, then it is a contextual tab. */
		ContextGroupId: DevKit.WebApi.GuidValue;
		/** The string ID of this ribbon definition. */
		DiffId: DevKit.WebApi.StringValue;
		/** Indicates the type of ribbon definition. */
		DiffType: DevKit.WebApi.OptionSetValueReadonly;
		/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
		_Entity: DevKit.WebApi.StringValue;
		/** Information about whether the ribbondiff is associated with app module. */
		IsAppAware: DevKit.WebApi.BooleanValueReadonly;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Ribbon definition XML string that contains one change action. */
		RDX: DevKit.WebApi.StringValue;
		/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
		RibbonCustomizationId: DevKit.WebApi.LookupValue;
		/** Unique identifier. */
		RibbonDiffId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		RibbonDiffUniqueId: DevKit.WebApi.GuidValueReadonly;
		/** Sequence in which the definition is to be applied. */
		Sequence: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** The ID of the tab this definition applies to. */
		TabId: DevKit.WebApi.StringValue;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RibbonDiff {
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
		enum DiffType {
			/** 2 */
			Layout_Template,
			/** 3 */
			Localized_Label,
			/** 0 */
			Standard,
			/** 1 */
			Tab
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
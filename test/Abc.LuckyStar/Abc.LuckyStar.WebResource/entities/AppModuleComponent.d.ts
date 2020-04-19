//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class AppModuleComponentApi {
		/**
		* DynamicsCrm.DevKit AppModuleComponentApi
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
		/** Unique identifier for entity instances */
		AppModuleComponentId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Application Component used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AppModuleComponentIdUnique: DevKit.WebApi.GuidValue;
		AppModuleIdName: DevKit.WebApi.StringValueReadonly;
		/** The App Module Id Unique */
		AppModuleIdUnique: DevKit.WebApi.LookupValue;
		/** The object type code of the component. */
		ComponentType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the Application Component with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Version in which the application component record is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is Default */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Is Metadata */
		IsMetadata: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Object Id */
		ObjectId: DevKit.WebApi.GuidValue;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** The parent ID of the subcomponent, which will be a root */
		RootAppModuleComponentId: DevKit.WebApi.GuidValue;
		/** Indicates the include behavior of the root component. */
		RootComponentBehavior: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace AppModuleComponent {
		enum ComponentType {
			/** 1 */
			Entities,
			/** 26 */
			Views,
			/** 29 */
			Business_Process_Flows,
			/** 48 */
			Command_Ribbon_for_Forms_Grids_sub_grids,
			/** 59 */
			Charts,
			/** 60 */
			Forms,
			/** 62 */
			Sitemap
		}
		enum RootComponentBehavior {
			/** 0 */
			Include_Subcomponents,
			/** 1 */
			Do_not_include_subcomponents,
			/** 2 */
			Include_As_Shell_Only
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
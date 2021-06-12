//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_problematicasset_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Lookup field for customer asset */
			msdyn_Asset: DevKit.Controls.Lookup;
			/** Unique identifier of customer asset */
			msdyn_AssetId: DevKit.Controls.String;
			/** Probability of predicting customer asset to be problematic in current date */
			msdyn_Confidence: DevKit.Controls.Double;
			/** The name of the custom entity. */
			msdyn_Name: DevKit.Controls.String;
			/** The option set value indicating how many days the record is preficted from current */
			msdyn_NumberofDays: DevKit.Controls.OptionSet;
			/** Probability of customer asset to be problematic asset */
			msdyn_Score: DevKit.Controls.Double;
			/** Optionset value of suggestions for customer asset */
			msdyn_Suggestion: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_problematicasset_msdyn_customerasset_ProblematicAsset: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_problematicasset_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_problematicasset_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_problematicasset_Information */
		Body: DevKit.Formmsdyn_problematicasset_Information.Body;
		/** The Navigation of form msdyn_problematicasset_Information */
		Navigation: DevKit.Formmsdyn_problematicasset_Information.Navigation;
	}
	class msdyn_problematicassetApi {
		/**
		* DynamicsCrm.DevKit msdyn_problematicassetApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Lookup field for customer asset */
		msdyn_Asset: DevKit.WebApi.LookupValue;
		/** Unique identifier of customer asset */
		msdyn_AssetId: DevKit.WebApi.StringValue;
		/** Value of breakfix cost for customer asset */
		msdyn_BreakfixCost: DevKit.WebApi.MoneyValue;
		/** Value of the Breakfix Cost in base currency. */
		msdyn_breakfixcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Value of breakfix sale of customer asset */
		msdyn_BreakfixSale: DevKit.WebApi.MoneyValue;
		/** Value of the Breakfix Sale in base currency. */
		msdyn_breakfixsale_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Expected break/fix work order count for customer asset */
		msdyn_BreakfixWorkOrderCount: DevKit.WebApi.IntegerValue;
		/** Probability of predicting customer asset to be problematic in current date */
		msdyn_Confidence: DevKit.WebApi.DoubleValue;
		/** Flag value indicating if customer asset has higher total cost than similar assets or not */
		msdyn_HigherTotalCost: DevKit.WebApi.OptionSetValue;
		/** Flag value indicating if customer asset work order count is higher than similar assets or not */
		msdyn_HigherWorkOrderCount: DevKit.WebApi.OptionSetValue;
		/** Value of maintenance cost of customer asset */
		msdyn_MaintenanceCost: DevKit.WebApi.MoneyValue;
		/** Value of the Maintenance Cost in base currency. */
		msdyn_maintenancecost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Value of maintenance sale of customer asset */
		msdyn_MaintenanceSale: DevKit.WebApi.MoneyValue;
		/** Value of the Maintenance Sale in base currency. */
		msdyn_maintenancesale_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Expected maintenance work order count from model output */
		msdyn_MaintenanceWorkOrderCount: DevKit.WebApi.IntegerValue;
		/** The name of the custom entity. */
		msdyn_Name: DevKit.WebApi.StringValue;
		/** The option set value indicating how many days the record is preficted from current */
		msdyn_NumberofDays: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		msdyn_problematicassetId: DevKit.WebApi.GuidValue;
		/** Value of replacement cost of customer asset */
		msdyn_ReplacementCost: DevKit.WebApi.MoneyValue;
		/** Value of the Replacement Cost in base currency. */
		msdyn_replacementcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Value of replacement sale of customer asset */
		msdyn_ReplacementSale: DevKit.WebApi.MoneyValue;
		/** Value of the Replacement Sale in base currency. */
		msdyn_replacementsale_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier of model run id */
		msdyn_RunId: DevKit.WebApi.StringValue;
		/** Probability of customer asset to be problematic asset */
		msdyn_Score: DevKit.WebApi.DoubleValue;
		/** Optionset value of suggestions for customer asset */
		msdyn_Suggestion: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Problematic Asset */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Problematic Asset */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_problematicasset {
		enum msdyn_HigherTotalCost {
			/** 0 */
			No,
			/** 1 */
			Yes
		}
		enum msdyn_HigherWorkOrderCount {
			/** 0 */
			No,
			/** 1 */
			Yes
		}
		enum msdyn_NumberofDays {
			/** 192350000 */
			_0,
			/** 192350001 */
			_15,
			/** 192350002 */
			_30,
			/** 192350003 */
			_60,
			/** 192350004 */
			_90
		}
		enum msdyn_Suggestion {
			/** 192350002 */
			None,
			/** 192350000 */
			Repair,
			/** 192350001 */
			Replace
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
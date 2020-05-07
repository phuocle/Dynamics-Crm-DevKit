//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_quoteinvoicingsetup_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quoteinvoicingsetup_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quoteinvoicingsetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quoteinvoicingsetup_Information */
		Body: LuckyMokey.Formmsdyn_quoteinvoicingsetup_Information.Body;
	}
	namespace Formmsdyn_quoteinvoicingsetup_Information {
		interface tab__39DB6AD7_0591_436C_8508_3F53A96FBA9C_Sections {
			_39DB6AD7_0591_436C_8508_3F53A96FBA9C_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TabProducts_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__39DB6AD7_0591_436C_8508_3F53A96FBA9C extends DevKit.Form.Controls.IControlTab {
			Section: tab__39DB6AD7_0591_436C_8508_3F53A96FBA9C_Sections;
		}
		interface tab_TabProducts extends DevKit.Form.Controls.IControlTab {
			Section: tab_TabProducts_Sections;
		}
		interface Tabs {
			_39DB6AD7_0591_436C_8508_3F53A96FBA9C: tab__39DB6AD7_0591_436C_8508_3F53A96FBA9C;
			TabProducts: tab_TabProducts;
		}
		interface Body {
			Tab: Tabs;
			GridProducts: DevKit.Form.Controls.ControlGrid;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Quote this invoice setup relates to */
			msdyn_Quote: DevKit.Form.Controls.ControlLookup;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_quoteinvoicingsetup_msdyn_quoteinvoicingproduct_QuoteInvoicingSetup: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_quoteinvoicingsetup_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quoteinvoicingsetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quoteinvoicingsetup_Information */
		Body: LuckyMokey.Formmsdyn_quoteinvoicingsetup_Information.Body;
		/** The Navigation of form msdyn_quoteinvoicingsetup_Information */
		Navigation: LuckyMokey.Formmsdyn_quoteinvoicingsetup_Information.Navigation;
	}
	class msdyn_quoteinvoicingsetupApi {
		/**
		* DynamicsCrm.DevKit msdyn_quoteinvoicingsetupApi
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
		/** Summed up Amount Totals of the assigned Quote Invoice Product */
		msdyn_AmountTotals: DevKit.WebApi.MoneyValue;
		/** Value of the Amount Totals in base currency. */
		msdyn_amounttotals_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type a description of this invoice setup. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Number of Occurrences for this Quote Invoicing Setup */
		msdyn_NumberOfOccurrences: DevKit.WebApi.IntegerValue;
		/** Quote this invoice setup relates to */
		msdyn_Quote: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_quoteinvoicingsetupId: DevKit.WebApi.GuidValue;
		/** Stores the invoice recurrence settings. */
		msdyn_RecurrenceSettings: DevKit.WebApi.StringValue;
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
		/** Status of the Quote Invoicing Setup */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Quote Invoicing Setup */
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
	namespace msdyn_quoteinvoicingsetup {
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
//{'JsForm':['Information','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
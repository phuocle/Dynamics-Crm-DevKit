//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_orderinvoicingproduct_Information {
		interface tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F_Sections {
			_78C13C72_F7FB_4F7D_BEBF_B068717AB74F_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F extends DevKit.Controls.ITab {
			Section: tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F_Sections;
		}
		interface Tabs {
			_78C13C72_F7FB_4F7D_BEBF_B068717AB74F: tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F;
		}
		interface Body {
			Tab: Tabs;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Total sales amount for the product line. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Shows the order of this product within the order invoicing setup. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The invoicing setup this product belongs to. */
			msdyn_OrderInvoicingSetup: DevKit.Controls.Lookup;
			/** The product associated with the transaction. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitPrice: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_orderinvoicingproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_orderinvoicingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderinvoicingproduct_Information */
		Body: DevKit.Formmsdyn_orderinvoicingproduct_Information.Body;
		/** The Navigation of form msdyn_orderinvoicingproduct_Information */
		Navigation: DevKit.Formmsdyn_orderinvoicingproduct_Information.Navigation;
	}
	class msdyn_orderinvoicingproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_orderinvoicingproductApi
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
		/** Total sales amount for the product line. */
		msdyn_Amount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** Shows the order of this product within the order invoicing setup. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_orderinvoicingproductId: DevKit.WebApi.GuidValue;
		/** The invoicing setup this product belongs to. */
		msdyn_OrderInvoicingSetup: DevKit.WebApi.LookupValue;
		/** The product associated with the transaction. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Enter the quantity to bill. */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** The unit that determines the pricing for this product */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Enter the amount you want to charge the customer per unit. */
		msdyn_UnitPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Unit Price in base currency. */
		msdyn_unitprice_Base: DevKit.WebApi.MoneyValueReadonly;
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
		/** Status of the Order invoicing product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Order invoicing product */
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
	namespace msdyn_orderinvoicingproduct {
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
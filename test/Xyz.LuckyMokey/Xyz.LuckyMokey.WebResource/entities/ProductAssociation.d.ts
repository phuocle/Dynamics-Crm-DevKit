//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormProduct_Association {
		interface tab_product_association_dynamic_properties_Sections {
			product_association_dynamic_properties_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_product_association_dynamic_properties extends DevKit.Form.Controls.IControlTab {
			Section: tab_product_association_dynamic_properties_Sections;
		}
		interface Tabs {
			product_association_dynamic_properties: tab_product_association_dynamic_properties;
		}
		interface Body {
			Tab: Tabs;
			product_association_dynamic_properties: DevKit.Form.Controls.ControlGrid;
			/** Select a product to add to the bundle or kit. */
			AssociatedProduct: DevKit.Form.Controls.ControlLookup;
			/** Select a bundle or a kit. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the associated product is required or optional. */
			ProductIsRequired: DevKit.Form.Controls.ControlOptionSet;
			/** Type the quantity of the products added to the bundle or kit. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Shows the unit of the product association. */
			UoMId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormProduct_Association extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Product_Association
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Product_Association */
		Body: LuckyMokey.FormProduct_Association.Body;
	}
	class ProductAssociationApi {
		/**
		* DynamicsCrm.DevKit ProductAssociationApi
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
		/** Select a product to add to the bundle or kit. */
		AssociatedProduct: DevKit.WebApi.LookupValue;
		AssociatedProductIdName: DevKit.WebApi.StringValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Internal Use Only */
		DMTImportState: DevKit.WebApi.IntegerValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the unique identifier of the product association. */
		ProductAssociationId: DevKit.WebApi.GuidValue;
		/** Select a bundle or a kit. */
		ProductId: DevKit.WebApi.LookupValue;
		/** Select whether the associated product is required or optional. */
		ProductIsRequired: DevKit.WebApi.OptionSetValue;
		/** Shows whether the item has properties that can be customized. */
		PropertyCustomizationStatus: DevKit.WebApi.OptionSetValue;
		/** Type the quantity of the products added to the bundle or kit. */
		Quantity: DevKit.WebApi.DecimalValue;
		/** Shows whether the associated product is active or inactive. */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Select the associated product's status. */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows the unit of the product association. */
		UoMId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ProductAssociation {
		enum ProductIsRequired {
			/** 0 */
			Optional,
			/** 1 */
			Required
		}
		enum PropertyCustomizationStatus {
			/** 0 */
			Not_Available,
			/** 1 */
			Available
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive,
			/** 2 */
			Draft,
			/** 3 */
			Under_Revision
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive,
			/** 0 */
			Draft,
			/** 3 */
			DraftActive
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
//{'JsForm':['Product Association'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
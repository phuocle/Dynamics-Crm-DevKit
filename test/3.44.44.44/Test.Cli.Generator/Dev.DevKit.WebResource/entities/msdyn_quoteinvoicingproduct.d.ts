﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quoteinvoicingproduct_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_quoteinvoicingproduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quoteinvoicingproduct_Information */
		Body: DevKit.Formmsdyn_quoteinvoicingproduct_Information.Body;
		/** The Navigation of form msdyn_quoteinvoicingproduct_Information */
		Navigation: DevKit.Formmsdyn_quoteinvoicingproduct_Information.Navigation;
		/** The SidePanes of form msdyn_quoteinvoicingproduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quoteinvoicingproduct_Information2 {
		interface tab_General_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Total sales amount for the product line. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Shows the order of this product within the quote invoicing setup. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The product associated with the transaction. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** The invoicing setup this product belongs to. */
			msdyn_QuoteInvoicingSetup: DevKit.Controls.Lookup;
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

		}
	}
	class Formmsdyn_quoteinvoicingproduct_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quoteinvoicingproduct_Information2 */
		Body: DevKit.Formmsdyn_quoteinvoicingproduct_Information2.Body;
		/** The Navigation of form msdyn_quoteinvoicingproduct_Information2 */
		Navigation: DevKit.Formmsdyn_quoteinvoicingproduct_Information2.Navigation;
		/** The SidePanes of form msdyn_quoteinvoicingproduct_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quoteinvoicingproduct_Information3 {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The product associated with the transaction. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitPrice: DevKit.Controls.Money;
		}
	}
	class Formmsdyn_quoteinvoicingproduct_Information3 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quoteinvoicingproduct_Information3 */
		Body: DevKit.Formmsdyn_quoteinvoicingproduct_Information3.Body;
	}
	class msdyn_quoteinvoicingproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_quoteinvoicingproductApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Total sales amount for the product line. */
		readonly msdyn_Amount: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** Shows the order of this product within the quote invoicing setup. */
		msdyn_LineOrder: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** The product associated with the transaction. */
		msdyn_Product: string;
		/** Enter the quantity to bill. */
		msdyn_Quantity: number;
		/** Unique identifier for entity instances */
		msdyn_quoteinvoicingproductId: string;
		/** The invoicing setup this product belongs to. */
		msdyn_QuoteInvoicingSetup: string;
		/** The unit that determines the pricing for this product */
		msdyn_Unit: string;
		/** Enter the amount you want to charge the customer per unit. */
		msdyn_UnitPrice: number;
		/** Value of the Unit Price in base currency. */
		readonly msdyn_unitprice_Base: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Quote Invoicing Produc */
		statecode: OptionSet.msdyn_quoteinvoicingproduct.statecode;
		/** Reason for the status of the Quote Invoicing Produc */
		statuscode: OptionSet.msdyn_quoteinvoicingproduct.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Total sales amount for the product line. */
			readonly msdyn_Amount: string;
			/** Value of the Amount in base currency. */
			readonly msdyn_amount_Base: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			/** Shows the order of this product within the quote invoicing setup. */
			readonly msdyn_LineOrder: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** The product associated with the transaction. */
			readonly msdyn_Product: string;
			/** Enter the quantity to bill. */
			readonly msdyn_Quantity: string;
			/** Unique identifier for entity instances */
			readonly msdyn_quoteinvoicingproductId: string;
			/** The invoicing setup this product belongs to. */
			readonly msdyn_QuoteInvoicingSetup: string;
			/** The unit that determines the pricing for this product */
			readonly msdyn_Unit: string;
			/** Enter the amount you want to charge the customer per unit. */
			readonly msdyn_UnitPrice: string;
			/** Value of the Unit Price in base currency. */
			readonly msdyn_unitprice_Base: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Quote Invoicing Produc */
			readonly statecode: string;
			/** Reason for the status of the Quote Invoicing Produc */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_quoteinvoicingproduct {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
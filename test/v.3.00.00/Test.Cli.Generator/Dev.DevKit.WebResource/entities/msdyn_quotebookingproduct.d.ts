﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quotebookingproduct_Information {
		interface tab__79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_Sections {
			_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_COLUMN_3_SECTION_1: DevKit.Controls.Section;
			_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_SECTION_3: DevKit.Controls.Section;
			_CC746554_B3E2_4B34_89C7_121A8D992983: DevKit.Controls.Section;
		}
		interface tab__79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3 extends DevKit.Controls.ITab {
			Section: tab__79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_Sections;
		}
		interface Tabs {
			_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3: tab__79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3;
		}
		interface Body {
			Tab: Tabs;
			/** The estimated cost of this quote booking product */
			msdyn_EstimatedCost: DevKit.Controls.Money;
			/** The estimated sales amount of this quote booking product */
			msdyn_EstimatedSalesAmount: DevKit.Controls.Money;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Quote Booking Product. */
			msdyn_product: DevKit.Controls.Lookup;
			/** Shows the actual quantity of the product. */
			msdyn_quantity: DevKit.Controls.Double;
			/** Unique identifier for Quote Booking Setup associated with Quote  Booking Product. */
			msdyn_quotebookingsetup: DevKit.Controls.Lookup;
			/** The unit that determines the pricing for this product when Price List is set */
			msdyn_unit: DevKit.Controls.Lookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_unitamount: DevKit.Controls.Money;
			/** Enter the  unit cost amount. This field is optional. */
			msdyn_unitcostamount: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_quotebookingproduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingproduct_Information */
		Body: DevKit.Formmsdyn_quotebookingproduct_Information.Body;
		/** The Process of form msdyn_quotebookingproduct_Information */
		Process: DevKit.Formmsdyn_quotebookingproduct_Information.Process;
		/** The SidePanes of form msdyn_quotebookingproduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotebookingproduct_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_quotebookingproduct_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingproduct_Information2 */
		Body: DevKit.Formmsdyn_quotebookingproduct_Information2.Body;
		/** The Process of form msdyn_quotebookingproduct_Information2 */
		Process: DevKit.Formmsdyn_quotebookingproduct_Information2.Process;
		/** The SidePanes of form msdyn_quotebookingproduct_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotebookingproduct_Information3 {
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
			/** The estimated cost of this quote booking product */
			msdyn_EstimatedCost: DevKit.Controls.Money;
			/** The estimated sales amount of this quote booking product */
			msdyn_EstimatedSalesAmount: DevKit.Controls.Money;
			/** Unique identifier for Product/Service associated with Quote Booking Product. */
			msdyn_product: DevKit.Controls.Lookup;
			/** Shows the actual quantity of the product. */
			msdyn_quantity: DevKit.Controls.Double;
			/** Unique identifier for Quote Booking Setup associated with Quote  Booking Product. */
			msdyn_quotebookingsetup: DevKit.Controls.Lookup;
			/** The unit that determines the pricing for this product when Price List is set */
			msdyn_unit: DevKit.Controls.Lookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_unitamount: DevKit.Controls.Money;
			/** Enter the  unit cost amount. This field is optional. */
			msdyn_unitcostamount: DevKit.Controls.Money;
		}
	}
	class Formmsdyn_quotebookingproduct_Information3 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingproduct_Information3 */
		Body: DevKit.Formmsdyn_quotebookingproduct_Information3.Body;
	}
	class msdyn_quotebookingproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotebookingproductApi
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
		/** The currency that will be used to charge this product */
		msdyn_currency: number;
		/** Value of the Currency in base currency. */
		readonly msdyn_currency_Base: number;
		/** Customer asset related to this Product */
		msdyn_customerasset: string;
		/** The estimated cost of this quote booking product */
		msdyn_EstimatedCost: number;
		/** Value of the EstimatedCost in base currency. */
		readonly msdyn_estimatedcost_Base: number;
		/** The estimated sales amount of this quote booking product */
		msdyn_EstimatedSalesAmount: number;
		/** Value of the EstimatedSalesAmount in base currency. */
		readonly msdyn_estimatedsalesamount_Base: number;
		/** For internal use only. */
		msdyn_Internalflags: string;
		/** Internal use only */
		msdyn_iscopied: boolean;
		/** Shows the order of this task within the quote booking products. */
		msdyn_lineorder: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Optionally set Price List that will determine the pricing for this product on the Work Order */
		msdyn_pricelist: string;
		/** Unique identifier for Product/Service associated with Quote Booking Product. */
		msdyn_product: string;
		/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
		msdyn_qtytobill: number;
		/** Shows the actual quantity of the product. */
		msdyn_quantity: number;
		/** Unique identifier for Quote associated with Quote Booking Product. */
		msdyn_quote: string;
		/** The Quote Booking Incident related to this product */
		msdyn_quotebookingincident: string;
		/** Unique identifier for entity instances */
		msdyn_quotebookingproductId: string;
		/** Unique identifier for Quote Booking Setup associated with Quote  Booking Product. */
		msdyn_quotebookingsetup: string;
		/** The unit that determines the pricing for this product when Price List is set */
		msdyn_unit: string;
		/** Enter the amount you wish to charge the customer per unit. This field is optional. */
		msdyn_unitamount: number;
		/** Value of the Unit Amount in base currency. */
		readonly msdyn_unitamount_Base: number;
		/** Enter the  unit cost amount. This field is optional. */
		msdyn_unitcostamount: number;
		/** Value of the Unit Cost in base currency. */
		readonly msdyn_unitcostamount_Base: number;
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
		/** Status of the Quote Booking Product */
		statecode: OptionSet.msdyn_quotebookingproduct.statecode;
		/** Reason for the status of the Quote Booking Product */
		statuscode: OptionSet.msdyn_quotebookingproduct.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotebookingproduct {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
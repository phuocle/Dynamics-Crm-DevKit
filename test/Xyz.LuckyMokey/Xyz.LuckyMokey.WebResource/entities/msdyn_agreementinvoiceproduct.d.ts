//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAgreement_Invoice_Product_Mobile {
		interface tab_fstab_general_Sections {
			_409A2FFD_D248_4872_A23A_32EFC094082B: DevKit.Form.Controls.ControlSection;
			fstab_general_section_quantity_sale_amount: DevKit.Form.Controls.ControlSection;
			fstab_general_section_products_relates_to: DevKit.Form.Controls.ControlSection;
			fstab_general_section_2: DevKit.Form.Controls.ControlSection;
			fstab_general_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			fstab_other_section: DevKit.Form.Controls.ControlSection;
			fstab_other_section_2: DevKit.Form.Controls.ControlSection;
			fstab_other_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_2: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Agreement associated with Agreement Invoice Product. */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Agreement Invoice Setup associated with Agreement Invoice Product. */
			msdyn_AgreementInvoiceSetup: DevKit.Form.Controls.ControlLookup;
			/** Shows the order of this product within the agreement invoice setup. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Price List associated with Agreement Invoice Product. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Product/Service associated with Agreement Invoice Product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementinvoiceproduct_invoicedetail_AgreementInvoiceProduct: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormAgreement_Invoice_Product_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Agreement_Invoice_Product_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Agreement_Invoice_Product_Mobile */
		Body: LuckyMokey.FormAgreement_Invoice_Product_Mobile.Body;
		/** The Navigation of form Agreement_Invoice_Product_Mobile */
		Navigation: LuckyMokey.FormAgreement_Invoice_Product_Mobile.Navigation;
	}
	namespace Formmsdyn_agreementinvoiceproduct_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Agreement associated with Agreement Invoice Product. */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Agreement Invoice Setup associated with Agreement Invoice Product. */
			msdyn_AgreementInvoiceSetup: DevKit.Form.Controls.ControlLookup;
			/** Shows the order of this product within the agreement invoice setup. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Price List associated with Agreement Invoice Product. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Product/Service associated with Agreement Invoice Product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Agreement Invoice Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementinvoiceproduct_invoicedetail_AgreementInvoiceProduct: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_agreementinvoiceproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_agreementinvoiceproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_agreementinvoiceproduct_Information */
		Body: LuckyMokey.Formmsdyn_agreementinvoiceproduct_Information.Body;
		/** The Footer section of form msdyn_agreementinvoiceproduct_Information */
		Footer: LuckyMokey.Formmsdyn_agreementinvoiceproduct_Information.Footer;
		/** The Navigation of form msdyn_agreementinvoiceproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_agreementinvoiceproduct_Information.Navigation;
	}
	class msdyn_agreementinvoiceproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_agreementinvoiceproductApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for Agreement associated with Agreement Invoice Product. */
		msdyn_Agreement: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_agreementinvoiceproductId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Agreement Invoice Setup associated with Agreement Invoice Product. */
		msdyn_AgreementInvoiceSetup: DevKit.WebApi.LookupValue;
		/** Shows the order of this product within the agreement invoice setup. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Price List associated with Agreement Invoice Product. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Unique identifier for Product/Service associated with Agreement Invoice Product. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Enter the quantity to bill. */
		msdyn_Quantity: DevKit.WebApi.DoubleValue;
		/** The unit that determines the pricing for this product */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Enter the amount you want to charge the customer per unit. */
		msdyn_UnitAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the unit amount in the base currency. */
		msdyn_unitamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the date and time that the record was migrated. */
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
		/** Status of the Agreement Invoice Product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Agreement Invoice Product */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_agreementinvoiceproduct {
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
//{'JsForm':['Agreement Invoice Product - Mobile','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
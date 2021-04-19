//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormAgreement_Booking_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_quanity_sale_amount: DevKit.Controls.Section;
			fstab_general_section_product_relates_to: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			fstab_other_section: DevKit.Controls.Section;
			fstab_other_section_2: DevKit.Controls.Section;
			fstab_other_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier for Agreement associated with Agreement Booking Product. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** The Agreement Booking Incident related to this product */
			msdyn_AgreementBookingIncident: DevKit.Controls.Lookup;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Product. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Customer asset related to this Product */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Shows the order of this task within the agreement booking products. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Optionally set Price List that will determine the pricing for this product on the Work Order */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Unique identifier for Product/Service associated with Agreement Booking Product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_QtyToBill: DevKit.Controls.Double;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** The unit that determines the pricing for this product when Price List is set */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_UnitAmount: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class FormAgreement_Booking_Product_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Agreement_Booking_Product_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Booking_Product_Mobile */
		Body: MyDog.FormAgreement_Booking_Product_Mobile.Body;
		/** The Navigation of form Agreement_Booking_Product_Mobile */
		Navigation: MyDog.FormAgreement_Booking_Product_Mobile.Navigation;
	}
	namespace Formmsdyn_agreementbookingproduct_Information {
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier for Agreement associated with Agreement Booking Product. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** The Agreement Booking Incident related to this product */
			msdyn_AgreementBookingIncident: DevKit.Controls.Lookup;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Product. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Customer asset related to this Product */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Shows the order of this task within the agreement booking products. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Optionally set Price List that will determine the pricing for this product on the Work Order */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Unique identifier for Product/Service associated with Agreement Booking Product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_QtyToBill: DevKit.Controls.Double;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** The unit that determines the pricing for this product when Price List is set */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_UnitAmount: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Agreement Booking Product */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_agreementbookingproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_agreementbookingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agreementbookingproduct_Information */
		Body: MyDog.Formmsdyn_agreementbookingproduct_Information.Body;
		/** The Footer section of form msdyn_agreementbookingproduct_Information */
		Footer: MyDog.Formmsdyn_agreementbookingproduct_Information.Footer;
		/** The Navigation of form msdyn_agreementbookingproduct_Information */
		Navigation: MyDog.Formmsdyn_agreementbookingproduct_Information.Navigation;
	}
	class msdyn_agreementbookingproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_agreementbookingproductApi
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
		/** Unique identifier for Agreement associated with Agreement Booking Product. */
		msdyn_Agreement: DevKit.WebApi.LookupValue;
		/** The Agreement Booking Incident related to this product */
		msdyn_AgreementBookingIncident: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_agreementbookingproductId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Product. */
		msdyn_AgreementBookingSetup: DevKit.WebApi.LookupValue;
		msdyn_Currency: DevKit.WebApi.MoneyValue;
		/** Shows the value of the currency in the base currency. */
		msdyn_currency_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Customer asset related to this Product */
		msdyn_CustomerAsset: DevKit.WebApi.LookupValue;
		msdyn_IsCopied: DevKit.WebApi.BooleanValue;
		/** Shows the order of this task within the agreement booking products. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Optionally set Price List that will determine the pricing for this product on the Work Order */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Unique identifier for Product/Service associated with Agreement Booking Product. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
		msdyn_QtyToBill: DevKit.WebApi.DoubleValue;
		/** Shows the actual quantity of the product. */
		msdyn_Quantity: DevKit.WebApi.DoubleValue;
		/** The unit that determines the pricing for this product when Price List is set */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Enter the amount you wish to charge the customer per unit. This field is optional. */
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
		/** Status of the Agreement Booking Product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Agreement Booking Product */
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
	namespace msdyn_agreementbookingproduct {
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
//{'JsForm':['Agreement Booking Product - Mobile','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
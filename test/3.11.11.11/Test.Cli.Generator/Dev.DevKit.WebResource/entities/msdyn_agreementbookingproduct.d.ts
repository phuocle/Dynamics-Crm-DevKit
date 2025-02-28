﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAgreement_Booking_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_product_relates_to: DevKit.Controls.Section;
			fstab_general_section_quanity_sale_amount: DevKit.Controls.Section;
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
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormAgreement_Booking_Product_Mobile extends DevKit.IForm {
		/**
		* Agreement Booking Product - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Booking_Product_Mobile */
		Body: DevKit.FormAgreement_Booking_Product_Mobile.Body;
		/** The Navigation of form Agreement_Booking_Product_Mobile */
		Navigation: DevKit.FormAgreement_Booking_Product_Mobile.Navigation;
		/** The Process of form Agreement_Booking_Product_Mobile */
		Process: DevKit.FormAgreement_Booking_Product_Mobile.Process;
		/** The SidePanes of form Agreement_Booking_Product_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_agreementbookingproduct_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
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
			notescontrol: DevKit.Controls.Note;
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
			nav_msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_agreementbookingproduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agreementbookingproduct_Information */
		Body: DevKit.Formmsdyn_agreementbookingproduct_Information.Body;
		/** The Footer section of form msdyn_agreementbookingproduct_Information */
		Footer: DevKit.Formmsdyn_agreementbookingproduct_Information.Footer;
		/** The Navigation of form msdyn_agreementbookingproduct_Information */
		Navigation: DevKit.Formmsdyn_agreementbookingproduct_Information.Navigation;
		/** The Process of form msdyn_agreementbookingproduct_Information */
		Process: DevKit.Formmsdyn_agreementbookingproduct_Information.Process;
		/** The SidePanes of form msdyn_agreementbookingproduct_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Agreement associated with Agreement Booking Product. */
		msdyn_Agreement: string;
		/** The Agreement Booking Incident related to this product */
		msdyn_AgreementBookingIncident: string;
		/** Shows the entity instances. */
		msdyn_agreementbookingproductId: string;
		/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Product. */
		msdyn_AgreementBookingSetup: string;
		msdyn_Currency: number;
		/** Shows the value of the currency in the base currency. */
		readonly msdyn_currency_Base: number;
		/** Customer asset related to this Product */
		msdyn_CustomerAsset: string;
		msdyn_IsCopied: boolean;
		/** Shows the order of this task within the agreement booking products. */
		msdyn_LineOrder: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Optionally set Price List that will determine the pricing for this product on the Work Order */
		msdyn_PriceList: string;
		/** Unique identifier for Product/Service associated with Agreement Booking Product. */
		msdyn_Product: string;
		/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
		msdyn_QtyToBill: number;
		/** Shows the actual quantity of the product. */
		msdyn_Quantity: number;
		/** The unit that determines the pricing for this product when Price List is set */
		msdyn_Unit: string;
		/** Enter the amount you wish to charge the customer per unit. This field is optional. */
		msdyn_UnitAmount: number;
		/** Shows the value of the unit amount in the base currency. */
		readonly msdyn_unitamount_Base: number;
		/** Shows the date and time that the record was migrated. */
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
		/** Status of the Agreement Booking Product */
		statecode: OptionSet.msdyn_agreementbookingproduct.statecode;
		/** Reason for the status of the Agreement Booking Product */
		statuscode: OptionSet.msdyn_agreementbookingproduct.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Agreement associated with Agreement Booking Product. */
			readonly msdyn_Agreement: string;
			/** The Agreement Booking Incident related to this product */
			readonly msdyn_AgreementBookingIncident: string;
			/** Shows the entity instances. */
			readonly msdyn_agreementbookingproductId: string;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Product. */
			readonly msdyn_AgreementBookingSetup: string;
			readonly msdyn_Currency: string;
			/** Shows the value of the currency in the base currency. */
			readonly msdyn_currency_Base: string;
			/** Customer asset related to this Product */
			readonly msdyn_CustomerAsset: string;
			readonly msdyn_IsCopied: string;
			/** Shows the order of this task within the agreement booking products. */
			readonly msdyn_LineOrder: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Optionally set Price List that will determine the pricing for this product on the Work Order */
			readonly msdyn_PriceList: string;
			/** Unique identifier for Product/Service associated with Agreement Booking Product. */
			readonly msdyn_Product: string;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			readonly msdyn_QtyToBill: string;
			/** Shows the actual quantity of the product. */
			readonly msdyn_Quantity: string;
			/** The unit that determines the pricing for this product when Price List is set */
			readonly msdyn_Unit: string;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			readonly msdyn_UnitAmount: string;
			/** Shows the value of the unit amount in the base currency. */
			readonly msdyn_unitamount_Base: string;
			/** Shows the date and time that the record was migrated. */
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
			/** Status of the Agreement Booking Product */
			readonly statecode: string;
			/** Reason for the status of the Agreement Booking Product */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_agreementbookingproduct {
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
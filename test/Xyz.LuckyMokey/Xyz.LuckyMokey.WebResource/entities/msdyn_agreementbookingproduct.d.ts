//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAgreement_Booking_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			fstab_general_section_quanity_sale_amount: DevKit.Form.Controls.ControlSection;
			fstab_general_section_product_relates_to: DevKit.Form.Controls.ControlSection;
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
			/** Unique identifier for Agreement associated with Agreement Booking Product. */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** The Agreement Booking Incident related to this product */
			msdyn_AgreementBookingIncident: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Product. */
			msdyn_AgreementBookingSetup: DevKit.Form.Controls.ControlLookup;
			/** Customer asset related to this Product */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Shows the order of this task within the agreement booking products. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Optionally set Price List that will determine the pricing for this product on the Work Order */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Product/Service associated with Agreement Booking Product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_QtyToBill: DevKit.Form.Controls.ControlDouble;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** The unit that determines the pricing for this product when Price List is set */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormAgreement_Booking_Product_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Agreement_Booking_Product_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Agreement_Booking_Product_Mobile */
		Body: LuckyMokey.FormAgreement_Booking_Product_Mobile.Body;
		/** The Navigation of form Agreement_Booking_Product_Mobile */
		Navigation: LuckyMokey.FormAgreement_Booking_Product_Mobile.Navigation;
	}
	namespace Formmsdyn_agreementbookingproduct_Information {
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Agreement associated with Agreement Booking Product. */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** The Agreement Booking Incident related to this product */
			msdyn_AgreementBookingIncident: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Product. */
			msdyn_AgreementBookingSetup: DevKit.Form.Controls.ControlLookup;
			/** Customer asset related to this Product */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Shows the order of this task within the agreement booking products. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Optionally set Price List that will determine the pricing for this product on the Work Order */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Product/Service associated with Agreement Booking Product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_QtyToBill: DevKit.Form.Controls.ControlDouble;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** The unit that determines the pricing for this product when Price List is set */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Agreement Booking Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingproduct_msdyn_workorderproduct_AgreementBookingProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_agreementbookingproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_agreementbookingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_agreementbookingproduct_Information */
		Body: LuckyMokey.Formmsdyn_agreementbookingproduct_Information.Body;
		/** The Footer section of form msdyn_agreementbookingproduct_Information */
		Footer: LuckyMokey.Formmsdyn_agreementbookingproduct_Information.Footer;
		/** The Navigation of form msdyn_agreementbookingproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_agreementbookingproduct_Information.Navigation;
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
//{'JsForm':['Agreement Booking Product - Mobile','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
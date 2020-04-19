//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_workorderservice_Information {
		interface tab_f1tab_estimateinfo_Sections {
			f1tab_3_section_estimatesaleamt: DevKit.Form.Controls.ControlSection;
			f1tab_estimateinfo_section_cost: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_durationsaleamt_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			f1tab_durationsaleamt_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_relatesto_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_actualcost_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_other_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_estimateinfo extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_estimateinfo_Sections;
		}
		interface tab_f1tab_durationsaleamt extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_durationsaleamt_Sections;
		}
		interface tab_f1tab_relatesto extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_relatesto_Sections;
		}
		interface tab_f1tab_actualcost extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_actualcost_Sections;
		}
		interface tab_f1tab_other extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_other_Sections;
		}
		interface Tabs {
			f1tab_estimateinfo: tab_f1tab_estimateinfo;
			f1tab_durationsaleamt: tab_f1tab_durationsaleamt;
			f1tab_relatesto: tab_f1tab_relatesto;
			f1tab_actualcost: tab_f1tab_actualcost;
			f1tab_other: tab_f1tab_other;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter any additional costs associated with this service. The values are manually entered. Note: additional cost is not unit dependent. */
			msdyn_AdditionalCost: DevKit.Form.Controls.ControlMoney;
			/** Agreement Booking Service linked to this Work Order Service */
			msdyn_AgreementBookingService: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource booking detail where this product was added. */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Enter the commission costs associated with this service. The value is manually specified and isn't automatically calculated. */
			msdyn_CommissionCosts: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Customer Asset associated with Work Order Service. */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Choose whether to disable entitlement selection for this work order service. */
			msdyn_DisableEntitlement: DevKit.Form.Controls.ControlBoolean;
			/** Specify any discount amount on this service. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Specify any discount % on this service. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_DiscountPercent: DevKit.Form.Controls.ControlDouble;
			/** Shows the actual duration of service. */
			msdyn_Duration: DevKit.Form.Controls.ControlInteger;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_DurationToBill: DevKit.Form.Controls.ControlInteger;
			/** Entitlement to apply to the Work Order Service. */
			msdyn_Entitlement: DevKit.Form.Controls.ControlLookup;
			/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_EstimateDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_EstimateDiscountPercent: DevKit.Form.Controls.ControlDouble;
			/** Enter the estimated duration of this service. */
			msdyn_EstimateDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows the total amount for this service, excluding discounts. */
			msdyn_EstimateSubtotal: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated total amount of this service, including discounts. */
			msdyn_EstimateTotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated total cost of this service. */
			msdyn_EstimateTotalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated sale amount per unit. */
			msdyn_EstimateUnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated cost amount per unit. */
			msdyn_EstimateUnitCost: DevKit.Form.Controls.ControlMoney;
			/** Enter any internal notes you want to track on this service. */
			msdyn_InternalDescription: DevKit.Form.Controls.ControlString;
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the current status of the line, estimate or used. */
			msdyn_LineStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the amount charged as a minimum charge. */
			msdyn_MinimumChargeAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the duration of up to how long the minimum charge applies. */
			msdyn_MinimumChargeDuration: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Price List that determines the pricing for this service */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Service proposed or used for this work order */
			msdyn_Service: DevKit.Form.Controls.ControlLookup;
			/** Enter the total amount excluding discounts. */
			msdyn_Subtotal: DevKit.Form.Controls.ControlMoney;
			/** Specify if service is taxable. If you do not wish to charge tax set this field to No. */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total cost of this service. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** The unit that determines the final quantity for this service */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the actual cost per unit. */
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** The work order this service relates to */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** The Incident related to this product */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Work Order Service */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_workorderservice_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workorderservice_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_workorderservice_Information */
		Body: LuckyMokey.Formmsdyn_workorderservice_Information.Body;
		/** The Footer section of form msdyn_workorderservice_Information */
		Footer: LuckyMokey.Formmsdyn_workorderservice_Information.Footer;
		/** The Navigation of form msdyn_workorderservice_Information */
		Navigation: LuckyMokey.Formmsdyn_workorderservice_Information.Navigation;
	}
	namespace FormWork_Order_Service_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			fstab_general_section_description: DevKit.Form.Controls.ControlSection;
			fstab_general_section_misc: DevKit.Form.Controls.ControlSection;
			fstab_general_section_5: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_estimate_Sections {
			fstab_estimate_section_sale: DevKit.Form.Controls.ControlSection;
			fstab_estimate_section_cost: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_pricing_Sections {
			fstab_pricing_section_sale: DevKit.Form.Controls.ControlSection;
			fstab_pricing_section_minimum_charge: DevKit.Form.Controls.ControlSection;
			fstab_pricing_section_cost: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_estimate extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_estimate_Sections;
		}
		interface tab_fstab_pricing extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_pricing_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_estimate: tab_fstab_estimate;
			fstab_pricing: tab_fstab_pricing;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter any additional costs associated with this service. The values are manually entered. Note: additional cost is not unit dependent. */
			msdyn_AdditionalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the resource booking detail where this product was added. */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Enter the commission costs associated with this service. The value is manually specified and isn't automatically calculated. */
			msdyn_CommissionCosts: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Customer Asset associated with Work Order Service. */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Choose whether to disable entitlement selection for this work order service. */
			msdyn_DisableEntitlement: DevKit.Form.Controls.ControlBoolean;
			/** Specify any discount amount on this service. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Specify any discount % on this service. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_DiscountPercent: DevKit.Form.Controls.ControlDouble;
			/** Shows the actual duration of service. */
			msdyn_Duration: DevKit.Form.Controls.ControlInteger;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_DurationToBill: DevKit.Form.Controls.ControlInteger;
			/** Entitlement to apply to the Work Order Service. */
			msdyn_Entitlement: DevKit.Form.Controls.ControlLookup;
			/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_EstimateDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_EstimateDiscountPercent: DevKit.Form.Controls.ControlDouble;
			/** Enter the estimated duration of this service. */
			msdyn_EstimateDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows the total amount for this service, excluding discounts. */
			msdyn_EstimateSubtotal: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated total amount of this service, including discounts. */
			msdyn_EstimateTotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated total cost of this service. */
			msdyn_EstimateTotalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated sale amount per unit. */
			msdyn_EstimateUnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated cost amount per unit. */
			msdyn_EstimateUnitCost: DevKit.Form.Controls.ControlMoney;
			/** Enter any internal notes you want to track on this service. */
			msdyn_InternalDescription: DevKit.Form.Controls.ControlString;
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the current status of the line, estimate or used. */
			msdyn_LineStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the amount charged as a minimum charge. */
			msdyn_MinimumChargeAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the duration of up to how long the minimum charge applies. */
			msdyn_MinimumChargeDuration: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Price List that determines the pricing for this service */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Service proposed or used for this work order */
			msdyn_Service: DevKit.Form.Controls.ControlLookup;
			/** Enter the total amount excluding discounts. */
			msdyn_Subtotal: DevKit.Form.Controls.ControlMoney;
			/** Specify if service is taxable. If you do not wish to charge tax set this field to No. */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total cost of this service. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** The unit that determines the final quantity for this service */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the actual cost per unit. */
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** The work order this service relates to */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** The Incident related to this product */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderservice_invoicedetail: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormWork_Order_Service_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Service_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Work_Order_Service_Mobile */
		Body: LuckyMokey.FormWork_Order_Service_Mobile.Body;
		/** The Navigation of form Work_Order_Service_Mobile */
		Navigation: LuckyMokey.FormWork_Order_Service_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_workorderservice {
		enum msdyn_LineStatus {
			/** 690970000 */
			Estimated,
			/** 690970001 */
			Used
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
//{'JsForm':['Information','Work Order Service - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
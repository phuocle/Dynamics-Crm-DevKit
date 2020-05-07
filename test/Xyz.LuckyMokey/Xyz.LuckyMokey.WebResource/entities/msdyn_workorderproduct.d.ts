//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_workorderproduct_Information {
		interface tab_f1tab_general_Sections {
			_A490AE2A_B9CE_4B27_8103_C8D177EF9C0D: DevKit.Form.Controls.ControlSection;
			f1generaltab_section_2: DevKit.Form.Controls.ControlSection;
			f1generaltab_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_estimateinfo_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			f1tab_estimateinfo_section_cost: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_actualqtysaleamt_Sections {
			f1tabgeneral_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_relatedinfo_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_actualcost_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_other_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_general_Sections;
		}
		interface tab_f1tab_estimateinfo extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_estimateinfo_Sections;
		}
		interface tab_f1tab_actualqtysaleamt extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_actualqtysaleamt_Sections;
		}
		interface tab_f1tab_relatedinfo extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_relatedinfo_Sections;
		}
		interface tab_f1tab_actualcost extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_actualcost_Sections;
		}
		interface tab_f1tab_other extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_other_Sections;
		}
		interface Tabs {
			f1tab_general: tab_f1tab_general;
			f1tab_estimateinfo: tab_f1tab_estimateinfo;
			f1tab_actualqtysaleamt: tab_f1tab_actualqtysaleamt;
			f1tab_relatedinfo: tab_f1tab_relatedinfo;
			f1tab_actualcost: tab_f1tab_actualcost;
			f1tab_other: tab_f1tab_other;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter any additional costs associated with this product. The values are manually entered. Note: additional cost is not unit dependent. */
			msdyn_AdditionalCost: DevKit.Form.Controls.ControlMoney;
			/** Agreement Booking Product linked to this Work Order Product */
			msdyn_AgreementBookingProduct: DevKit.Form.Controls.ControlLookup;
			msdyn_Allocated: DevKit.Form.Controls.ControlBoolean;
			/** The booking where this product was added */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Enter the commission costs associated with this product. The value is manually specified and isn't automatically calculated. */
			msdyn_CommissionCosts: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Customer Asset associated with Work Order Product. */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Choose whether to disable entitlement selection for this work order product. */
			msdyn_DisableEntitlement: DevKit.Form.Controls.ControlBoolean;
			/** Specify any discount amount on this product. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Specify any discount % on this product. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_DiscountPercent: DevKit.Form.Controls.ControlDouble;
			/** Entitlement to apply to the Work Order Product. */
			msdyn_Entitlement: DevKit.Form.Controls.ControlLookup;
			/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_EstimateDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_EstimateDiscountPercent: DevKit.Form.Controls.ControlDouble;
			/** Enter the estimated required quantity of this product. */
			msdyn_EstimateQuantity: DevKit.Form.Controls.ControlDouble;
			/** Shows the total amount for this product, excluding discounts. */
			msdyn_EstimateSubtotal: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated total amount of this product, including discounts. */
			msdyn_EstimateTotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated total cost of this product. */
			msdyn_EstimateTotalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated sale amount per unit. */
			msdyn_EstimateUnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated cost amount per unit. */
			msdyn_EstimateUnitCost: DevKit.Form.Controls.ControlMoney;
			/** Enter any internal notes you want to track on this product. */
			msdyn_InternalDescription: DevKit.Form.Controls.ControlString;
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the current status of the line, estimate or used. */
			msdyn_LineStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Price List that determines the pricing for this product */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Product to use */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Purchase Order Receipt Product linked to this Work Order Product */
			msdyn_PurchaseOrderReceiptProduct: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_QtyToBill: DevKit.Form.Controls.ControlDouble;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Enter the total amount excluding discounts. */
			msdyn_Subtotal: DevKit.Form.Controls.ControlMoney;
			/** Specify if product is taxable. If you do not wish to charge tax set this field to No. */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			/** Enter the total amount charged to the customer. */
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** The unit that determines the pricing and final quantity for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the actual cost per unit. */
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Warehouse this product is being retrieved from */
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Work Order Product. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** The Incident related to this product */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Work Order Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorderproduct_msdyn_rmaproduct_WOProduct: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderproduct_msdyn_rtvproduct_WorkOrderProduct: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderproduct_msdyn_customerasset_WorkOrderProduct: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderproduct_msdyn_inventoryjournal_WorkOrderProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_workorderproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workorderproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_workorderproduct_Information */
		Body: LuckyMokey.Formmsdyn_workorderproduct_Information.Body;
		/** The Footer section of form msdyn_workorderproduct_Information */
		Footer: LuckyMokey.Formmsdyn_workorderproduct_Information.Footer;
		/** The Navigation of form msdyn_workorderproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_workorderproduct_Information.Navigation;
	}
	namespace FormWork_Order_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			fstab_general_section_description: DevKit.Form.Controls.ControlSection;
			fstab_general_section_INVENTORY: DevKit.Form.Controls.ControlSection;
			fstab_general_section_6: DevKit.Form.Controls.ControlSection;
			fstab_general_section_misc: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_estimate_Sections {
			fstab_estimate_section_sale_amount: DevKit.Form.Controls.ControlSection;
			fstab_estimate_cost_amount: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_pricing_Sections {
			fstab_pricing_section_sale_amount: DevKit.Form.Controls.ControlSection;
			fstab_pricing_section_cost_amount: DevKit.Form.Controls.ControlSection;
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
			/** Enter any additional costs associated with this product. The values are manually entered. Note: additional cost is not unit dependent. */
			msdyn_AdditionalCost: DevKit.Form.Controls.ControlMoney;
			msdyn_Allocated: DevKit.Form.Controls.ControlBoolean;
			/** The booking where this product was added */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Enter the commission costs associated with this product. The value is manually specified and isn't automatically calculated. */
			msdyn_CommissionCosts: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Customer Asset associated with Work Order Product. */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Choose whether to disable entitlement selection for this work order product. */
			msdyn_DisableEntitlement: DevKit.Form.Controls.ControlBoolean;
			/** Specify any discount amount on this product. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Specify any discount % on this product. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_DiscountPercent: DevKit.Form.Controls.ControlDouble;
			/** Entitlement to apply to the Work Order Product. */
			msdyn_Entitlement: DevKit.Form.Controls.ControlLookup;
			/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_EstimateDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_EstimateDiscountPercent: DevKit.Form.Controls.ControlDouble;
			/** Enter the estimated required quantity of this product. */
			msdyn_EstimateQuantity: DevKit.Form.Controls.ControlDouble;
			/** Shows the total amount for this product, excluding discounts. */
			msdyn_EstimateSubtotal: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated total amount of this product, including discounts. */
			msdyn_EstimateTotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated total cost of this product. */
			msdyn_EstimateTotalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated sale amount per unit. */
			msdyn_EstimateUnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated cost amount per unit. */
			msdyn_EstimateUnitCost: DevKit.Form.Controls.ControlMoney;
			/** Enter any internal notes you want to track on this product. */
			msdyn_InternalDescription: DevKit.Form.Controls.ControlString;
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the current status of the line, estimate or used. */
			msdyn_LineStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Price List that determines the pricing for this product */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Product to use */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Purchase Order Receipt Product linked to this Work Order Product */
			msdyn_PurchaseOrderReceiptProduct: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_QtyToBill: DevKit.Form.Controls.ControlDouble;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Enter the total amount excluding discounts. */
			msdyn_Subtotal: DevKit.Form.Controls.ControlMoney;
			/** Specify if product is taxable. If you do not wish to charge tax set this field to No. */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			/** Enter the total amount charged to the customer. */
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** The unit that determines the pricing and final quantity for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the actual cost per unit. */
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Warehouse this product is being retrieved from */
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Work Order Product. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** The Incident related to this product */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorderproduct_msdyn_rmaproduct_WOProduct: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderproduct_msdyn_rtvproduct_WorkOrderProduct: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderproduct_invoicedetail: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderproduct_msdyn_customerasset_WorkOrderProduct: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderproduct_msdyn_inventoryjournal_WorkOrderProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormWork_Order_Product_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Product_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Work_Order_Product_Mobile */
		Body: LuckyMokey.FormWork_Order_Product_Mobile.Body;
		/** The Navigation of form Work_Order_Product_Mobile */
		Navigation: LuckyMokey.FormWork_Order_Product_Mobile.Navigation;
	}
	class msdyn_workorderproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_workorderproductApi
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
		/** Enter any additional costs associated with this product. The values are manually entered. Note: additional cost is not unit dependent. */
		msdyn_AdditionalCost: DevKit.WebApi.MoneyValue;
		/** Shows the value of the additional cost in the base currency. */
		msdyn_additionalcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Agreement Booking Product linked to this Work Order Product */
		msdyn_AgreementBookingProduct: DevKit.WebApi.LookupValue;
		msdyn_Allocated: DevKit.WebApi.BooleanValue;
		/** The booking where this product was added */
		msdyn_Booking: DevKit.WebApi.LookupValue;
		/** Enter the commission costs associated with this product. The value is manually specified and isn't automatically calculated. */
		msdyn_CommissionCosts: DevKit.WebApi.MoneyValue;
		/** Shows the value of the commission costs in the base currency. */
		msdyn_commissioncosts_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier for Customer Asset associated with Work Order Product. */
		msdyn_CustomerAsset: DevKit.WebApi.LookupValue;
		/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** Choose whether to disable entitlement selection for this work order product. */
		msdyn_DisableEntitlement: DevKit.WebApi.BooleanValue;
		/** Specify any discount amount on this product. Note: If you enter a discount amount you cannot enter a discount % */
		msdyn_DiscountAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the discount amount in the base currency. */
		msdyn_discountamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Specify any discount % on this product. Note: If you enter a discount % it will overwrite the discount $ */
		msdyn_DiscountPercent: DevKit.WebApi.DoubleValue;
		/** Entitlement to apply to the Work Order Product. */
		msdyn_Entitlement: DevKit.WebApi.LookupValue;
		/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
		msdyn_EstimateDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the estimate discount amount in the base currency. */
		msdyn_estimatediscountamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
		msdyn_EstimateDiscountPercent: DevKit.WebApi.DoubleValue;
		/** Enter the estimated required quantity of this product. */
		msdyn_EstimateQuantity: DevKit.WebApi.DoubleValue;
		/** Shows the total amount for this product, excluding discounts. */
		msdyn_EstimateSubtotal: DevKit.WebApi.MoneyValue;
		/** Shows the value of the estimate subtotal in the base currency. */
		msdyn_estimatesubtotal_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the estimated total amount of this product, including discounts. */
		msdyn_EstimateTotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the estimate total amount in the base currency. */
		msdyn_estimatetotalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the estimated total cost of this product. */
		msdyn_EstimateTotalCost: DevKit.WebApi.MoneyValue;
		/** Shows the value of the estimate total cost in the base currency. */
		msdyn_estimatetotalcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the estimated sale amount per unit. */
		msdyn_EstimateUnitAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the estimate unit amount in the base currency. */
		msdyn_estimateunitamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the estimated cost amount per unit. */
		msdyn_EstimateUnitCost: DevKit.WebApi.MoneyValue;
		/** Shows the value of the estimate unit cost in the base currency. */
		msdyn_estimateunitcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter any internal notes you want to track on this product. */
		msdyn_InternalDescription: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** Enter the current status of the line, estimate or used. */
		msdyn_LineStatus: DevKit.WebApi.OptionSetValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Price List that determines the pricing for this product */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Product to use */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Purchase Order Receipt Product linked to this Work Order Product */
		msdyn_PurchaseOrderReceiptProduct: DevKit.WebApi.LookupValue;
		/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
		msdyn_QtyToBill: DevKit.WebApi.DoubleValue;
		/** Shows the actual quantity of the product. */
		msdyn_Quantity: DevKit.WebApi.DoubleValue;
		/** Enter the total amount excluding discounts. */
		msdyn_Subtotal: DevKit.WebApi.MoneyValue;
		/** Shows the value of the subtotal in the base currency. */
		msdyn_subtotal_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Specify if product is taxable. If you do not wish to charge tax set this field to No. */
		msdyn_Taxable: DevKit.WebApi.BooleanValue;
		/** Enter the total amount charged to the customer. */
		msdyn_TotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total amount in the base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
		msdyn_TotalCost: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total cost in the base currency. */
		msdyn_totalcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The unit that determines the pricing and final quantity for this product */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
		msdyn_UnitAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the unit amount in the base currency. */
		msdyn_unitamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the actual cost per unit. */
		msdyn_UnitCost: DevKit.WebApi.MoneyValue;
		/** Shows the value of the unit cost in the base currency. */
		msdyn_unitcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Warehouse this product is being retrieved from */
		msdyn_Warehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order associated with Work Order Product. */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
		/** The Incident related to this product */
		msdyn_WorkOrderIncident: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_workorderproductId: DevKit.WebApi.GuidValue;
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
		/** Status of the Work Order Product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Work Order Product */
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
	namespace msdyn_workorderproduct {
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
//{'JsForm':['Information','Work Order Product - Mobile'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
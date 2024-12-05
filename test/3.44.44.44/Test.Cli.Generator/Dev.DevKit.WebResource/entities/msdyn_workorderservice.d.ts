//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workorderservice_Information {
		interface tab_f1tab_actualcost_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_f1tab_durationsaleamt_Sections {
			f1tab_durationsaleamt_section_2: DevKit.Controls.Section;
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_f1tab_estimateinfo_Sections {
			f1tab_3_section_estimatesaleamt: DevKit.Controls.Section;
			f1tab_estimateinfo_section_cost: DevKit.Controls.Section;
		}
		interface tab_f1tab_other_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_f1tab_relatesto_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_f1tab_actualcost extends DevKit.Controls.ITab {
			Section: tab_f1tab_actualcost_Sections;
		}
		interface tab_f1tab_durationsaleamt extends DevKit.Controls.ITab {
			Section: tab_f1tab_durationsaleamt_Sections;
		}
		interface tab_f1tab_estimateinfo extends DevKit.Controls.ITab {
			Section: tab_f1tab_estimateinfo_Sections;
		}
		interface tab_f1tab_other extends DevKit.Controls.ITab {
			Section: tab_f1tab_other_Sections;
		}
		interface tab_f1tab_relatesto extends DevKit.Controls.ITab {
			Section: tab_f1tab_relatesto_Sections;
		}
		interface Tabs {
			f1tab_actualcost: tab_f1tab_actualcost;
			f1tab_durationsaleamt: tab_f1tab_durationsaleamt;
			f1tab_estimateinfo: tab_f1tab_estimateinfo;
			f1tab_other: tab_f1tab_other;
			f1tab_relatesto: tab_f1tab_relatesto;
		}
		interface Body {
			Tab: Tabs;
			/** Enter any additional costs associated with this service. The values are manually entered. Note: additional cost is not unit dependent. */
			msdyn_AdditionalCost: DevKit.Controls.Money;
			/** Agreement Booking Service linked to this Work Order Service */
			msdyn_AgreementBookingService: DevKit.Controls.Lookup;
			/** Shows the resource booking detail where this product was added. */
			msdyn_Booking: DevKit.Controls.Lookup;
			/** Enter the commission costs associated with this service. The value is manually specified and isn't automatically calculated. */
			msdyn_CommissionCosts: DevKit.Controls.Money;
			/** Unique identifier for Customer Asset associated with Work Order Service. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
			msdyn_Description: DevKit.Controls.String;
			/** Choose whether to disable entitlement selection for this work order service. */
			msdyn_DisableEntitlement: DevKit.Controls.Boolean;
			/** Specify any discount amount on this service. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_DiscountAmount: DevKit.Controls.Money;
			/** Specify any discount % on this service. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_DiscountPercent: DevKit.Controls.Double;
			/** Shows the actual duration of service. */
			msdyn_Duration: DevKit.Controls.Integer;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_DurationToBill: DevKit.Controls.Integer;
			/** Entitlement to apply to the Work Order Service. */
			msdyn_Entitlement: DevKit.Controls.Lookup;
			/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_EstimateDiscountAmount: DevKit.Controls.Money;
			/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_EstimateDiscountPercent: DevKit.Controls.Double;
			/** Enter the estimated duration of this service. */
			msdyn_EstimateDuration: DevKit.Controls.Integer;
			/** Shows the total amount for this service, excluding discounts. */
			msdyn_EstimateSubtotal: DevKit.Controls.Money;
			/** Shows the estimated total amount of this service, including discounts. */
			msdyn_EstimateTotalAmount: DevKit.Controls.Money;
			/** Shows the estimated total cost of this service. */
			msdyn_EstimateTotalCost: DevKit.Controls.Money;
			/** Shows the estimated sale amount per unit. */
			msdyn_EstimateUnitAmount: DevKit.Controls.Money;
			/** Shows the estimated cost amount per unit. */
			msdyn_EstimateUnitCost: DevKit.Controls.Money;
			/** Enter any internal notes you want to track on this service. */
			msdyn_InternalDescription: DevKit.Controls.String;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the current status of the line, estimate or used. */
			msdyn_LineStatus: DevKit.Controls.OptionSet;
			/** Enter the amount charged as a minimum charge. */
			msdyn_MinimumChargeAmount: DevKit.Controls.Money;
			/** Enter the duration of up to how long the minimum charge applies. */
			msdyn_MinimumChargeDuration: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Price List that determines the pricing for this service */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Service proposed or used for this work order */
			msdyn_Service: DevKit.Controls.Lookup;
			/** Enter the total amount excluding discounts. */
			msdyn_Subtotal: DevKit.Controls.Money;
			/** Specify if service is taxable. If you do not wish to charge tax set this field to No. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Shows the total cost of this service. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
			msdyn_TotalCost: DevKit.Controls.Money;
			/** The unit that determines the final quantity for this service */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
			msdyn_UnitAmount: DevKit.Controls.Money;
			/** Shows the actual cost per unit. */
			msdyn_UnitCost: DevKit.Controls.Money;
			/** The work order this service relates to */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** The Incident related to this product */
			msdyn_WorkOrderIncident: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_workorderservice_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_workorderservice_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workorderservice_Information */
		Body: DevKit.Formmsdyn_workorderservice_Information.Body;
		/** The Navigation of form msdyn_workorderservice_Information */
		Navigation: DevKit.Formmsdyn_workorderservice_Information.Navigation;
		/** The SidePanes of form msdyn_workorderservice_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Service_Mobile {
		interface tab_fstab_estimate_Sections {
			fstab_estimate_section_cost: DevKit.Controls.Section;
			fstab_estimate_section_sale: DevKit.Controls.Section;
		}
		interface tab_fstab_general_Sections {
			fstab_general_section_5: DevKit.Controls.Section;
			fstab_general_section_description: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_misc: DevKit.Controls.Section;
			fstab_sub_grids_section: DevKit.Controls.Section;
		}
		interface tab_fstab_pricing_Sections {
			fstab_pricing_section_cost: DevKit.Controls.Section;
			fstab_pricing_section_minimum_charge: DevKit.Controls.Section;
			fstab_pricing_section_sale: DevKit.Controls.Section;
		}
		interface tab_fstab_estimate extends DevKit.Controls.ITab {
			Section: tab_fstab_estimate_Sections;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_pricing extends DevKit.Controls.ITab {
			Section: tab_fstab_pricing_Sections;
		}
		interface Tabs {
			fstab_estimate: tab_fstab_estimate;
			fstab_general: tab_fstab_general;
			fstab_pricing: tab_fstab_pricing;
		}
		interface Body {
			Tab: Tabs;
			/** Enter any additional costs associated with this service. The values are manually entered. Note: additional cost is not unit dependent. */
			msdyn_AdditionalCost: DevKit.Controls.Money;
			/** Shows the resource booking detail where this product was added. */
			msdyn_Booking: DevKit.Controls.Lookup;
			/** Enter the commission costs associated with this service. The value is manually specified and isn't automatically calculated. */
			msdyn_CommissionCosts: DevKit.Controls.Money;
			/** Unique identifier for Customer Asset associated with Work Order Service. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
			msdyn_Description: DevKit.Controls.String;
			/** Choose whether to disable entitlement selection for this work order service. */
			msdyn_DisableEntitlement: DevKit.Controls.Boolean;
			/** Specify any discount amount on this service. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_DiscountAmount: DevKit.Controls.Money;
			/** Specify any discount % on this service. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_DiscountPercent: DevKit.Controls.Double;
			/** Shows the actual duration of service. */
			msdyn_Duration: DevKit.Controls.Integer;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			msdyn_DurationToBill: DevKit.Controls.Integer;
			/** Entitlement to apply to the Work Order Service. */
			msdyn_Entitlement: DevKit.Controls.Lookup;
			/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
			msdyn_EstimateDiscountAmount: DevKit.Controls.Money;
			/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
			msdyn_EstimateDiscountPercent: DevKit.Controls.Double;
			/** Enter the estimated duration of this service. */
			msdyn_EstimateDuration: DevKit.Controls.Integer;
			/** Shows the total amount for this service, excluding discounts. */
			msdyn_EstimateSubtotal: DevKit.Controls.Money;
			/** Shows the estimated total amount of this service, including discounts. */
			msdyn_EstimateTotalAmount: DevKit.Controls.Money;
			/** Shows the estimated total cost of this service. */
			msdyn_EstimateTotalCost: DevKit.Controls.Money;
			/** Shows the estimated sale amount per unit. */
			msdyn_EstimateUnitAmount: DevKit.Controls.Money;
			/** Shows the estimated cost amount per unit. */
			msdyn_EstimateUnitCost: DevKit.Controls.Money;
			/** Enter any internal notes you want to track on this service. */
			msdyn_InternalDescription: DevKit.Controls.String;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the current status of the line, estimate or used. */
			msdyn_LineStatus: DevKit.Controls.OptionSet;
			/** Enter the amount charged as a minimum charge. */
			msdyn_MinimumChargeAmount: DevKit.Controls.Money;
			/** Enter the duration of up to how long the minimum charge applies. */
			msdyn_MinimumChargeDuration: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Price List that determines the pricing for this service */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Service proposed or used for this work order */
			msdyn_Service: DevKit.Controls.Lookup;
			/** Enter the total amount excluding discounts. */
			msdyn_Subtotal: DevKit.Controls.Money;
			/** Specify if service is taxable. If you do not wish to charge tax set this field to No. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Shows the total cost of this service. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
			msdyn_TotalCost: DevKit.Controls.Money;
			/** The unit that determines the final quantity for this service */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
			msdyn_UnitAmount: DevKit.Controls.Money;
			/** Shows the actual cost per unit. */
			msdyn_UnitCost: DevKit.Controls.Money;
			/** The work order this service relates to */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** The Incident related to this product */
			msdyn_WorkOrderIncident: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_workorderservice_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorderservice_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormWork_Order_Service_Mobile extends DevKit.IForm {
		/**
		* Work Order Service - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Service_Mobile */
		Body: DevKit.FormWork_Order_Service_Mobile.Body;
		/** The Navigation of form Work_Order_Service_Mobile */
		Navigation: DevKit.FormWork_Order_Service_Mobile.Navigation;
		/** The SidePanes of form Work_Order_Service_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormAdd_Service_Mobile {
		interface tab_tab_1_Sections {
			sectionService: DevKit.Controls.Section;
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
			/** Enter the estimated duration of this service. */
			msdyn_EstimateDuration: DevKit.Controls.Integer;
			/** Service proposed or used for this work order */
			msdyn_Service: DevKit.Controls.Lookup;
		}
	}
	class FormAdd_Service_Mobile extends DevKit.IForm {
		/**
		* Add Service Mobile [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Add_Service_Mobile */
		Body: DevKit.FormAdd_Service_Mobile.Body;
	}
	class msdyn_workorderserviceApi {
		/**
		* DynamicsCrm.DevKit msdyn_workorderserviceApi
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
		/** Enter any additional costs associated with this service. The values are manually entered. Note: additional cost is not unit dependent. */
		msdyn_AdditionalCost: number;
		/** Shows the value of the additional cost in the base currency. */
		readonly msdyn_additionalcost_Base: number;
		/** Agreement Booking Service linked to this Work Order Service */
		msdyn_AgreementBookingService: string;
		/** Shows the resource booking detail where this product was added. */
		msdyn_Booking: string;
		/** Shows the sale amount per unit calculated by the system considering the minimum charge, if applicable. */
		msdyn_CalculatedUnitAmount: number;
		/** Shows the value of the calculated unit amount in the base currency. */
		readonly msdyn_calculatedunitamount_Base: number;
		/** Enter the commission costs associated with this service. The value is manually specified and isn't automatically calculated. */
		msdyn_CommissionCosts: number;
		/** Shows the value of the commission costs in the base currency. */
		readonly msdyn_commissioncosts_Base: number;
		/** Unique identifier for Customer Asset associated with Work Order Service. */
		msdyn_CustomerAsset: string;
		/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
		msdyn_Description: string;
		/** Choose whether to disable entitlement selection for this work order service. */
		msdyn_DisableEntitlement: boolean;
		/** Specify any discount amount on this service. Note: If you enter a discount amount you cannot enter a discount % */
		msdyn_DiscountAmount: number;
		/** Shows the value of the discount Amount in the base currency. */
		readonly msdyn_discountamount_Base: number;
		/** Specify any discount % on this service. Note: If you enter a discount % it will overwrite the discount $ */
		msdyn_DiscountPercent: number;
		/** Shows the actual duration of service. */
		msdyn_Duration: number;
		/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
		msdyn_DurationToBill: number;
		/** Entitlement to apply to the Work Order Service. */
		msdyn_Entitlement: string;
		/** Shows the estimated sale amount per unit calculated by the system considering the initial charge (if applicable). */
		msdyn_EstimateCalculatedUnitAmount: number;
		/** Shows the value of the estimate calculated unit amount in the base currency. */
		readonly msdyn_estimatecalculatedunitamount_Base: number;
		/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
		msdyn_EstimateDiscountAmount: number;
		/** Shows the value of the estimate discount amount in the base currency. */
		readonly msdyn_estimatediscountamount_Base: number;
		/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
		msdyn_EstimateDiscountPercent: number;
		/** Enter the estimated duration of this service. */
		msdyn_EstimateDuration: number;
		/** Shows the total amount for this service, excluding discounts. */
		msdyn_EstimateSubtotal: number;
		/** Shows the value of the estimate subtotal in the base currency. */
		readonly msdyn_estimatesubtotal_Base: number;
		/** Shows the estimated total amount of this service, including discounts. */
		msdyn_EstimateTotalAmount: number;
		/** Shows the value of the estimate total amount in the base currency. */
		readonly msdyn_estimatetotalamount_Base: number;
		/** Shows the estimated total cost of this service. */
		msdyn_EstimateTotalCost: number;
		/** Shows the value of the estimate total cost in the base currency. */
		readonly msdyn_estimatetotalcost_Base: number;
		/** Shows the estimated sale amount per unit. */
		msdyn_EstimateUnitAmount: number;
		/** Shows the value of the estimate unit amount in the base currency. */
		readonly msdyn_estimateunitamount_Base: number;
		/** Shows the estimated cost amount per unit. */
		msdyn_EstimateUnitCost: number;
		/** Shows the value of the estimate unit cost in the base currency. */
		readonly msdyn_estimateunitcost_Base: number;
		/** Enter any internal notes you want to track on this service. */
		msdyn_InternalDescription: string;
		msdyn_InternalFlags: string;
		msdyn_LineOrder: number;
		/** Enter the current status of the line, estimate or used. */
		msdyn_LineStatus: OptionSet.msdyn_workorderservice.msdyn_LineStatus;
		/** Enter the amount charged as a minimum charge. */
		msdyn_MinimumChargeAmount: number;
		/** Shows the value of the minimum charge amount in the base currency. */
		readonly msdyn_minimumchargeamount_Base: number;
		/** Enter the duration of up to how long the minimum charge applies. */
		msdyn_MinimumChargeDuration: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Price List that determines the pricing for this service */
		msdyn_PriceList: string;
		/** Service proposed or used for this work order */
		msdyn_Service: string;
		/** Enter the total amount excluding discounts. */
		msdyn_Subtotal: number;
		/** Shows the value of the subtotal in the base currency. */
		readonly msdyn_subtotal_Base: number;
		/** Specify if service is taxable. If you do not wish to charge tax set this field to No. */
		msdyn_Taxable: boolean;
		msdyn_TotalAmount: number;
		/** Shows the value of the total amount in the base currency. */
		readonly msdyn_totalamount_Base: number;
		/** Shows the total cost of this service. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
		msdyn_TotalCost: number;
		/** Shows the value of the total cost in the base currency. */
		readonly msdyn_totalcost_Base: number;
		/** The unit that determines the final quantity for this service */
		msdyn_Unit: string;
		/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
		msdyn_UnitAmount: number;
		/** Shows the value of the unit amount in the base currency. */
		readonly msdyn_unitamount_Base: number;
		/** Shows the actual cost per unit. */
		msdyn_UnitCost: number;
		/** Shows the value of the unit cost in the base currency. */
		readonly msdyn_unitcost_Base: number;
		/** The work order this service relates to */
		msdyn_WorkOrder: string;
		/** The Incident related to this product */
		msdyn_WorkOrderIncident: string;
		/** Shows the entity instances. */
		msdyn_workorderserviceId: string;
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
		/** Status of the Work Order Service */
		statecode: OptionSet.msdyn_workorderservice.statecode;
		/** Reason for the status of the Work Order Service */
		statuscode: OptionSet.msdyn_workorderservice.statuscode;
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
			/** Enter any additional costs associated with this service. The values are manually entered. Note: additional cost is not unit dependent. */
			readonly msdyn_AdditionalCost: string;
			/** Shows the value of the additional cost in the base currency. */
			readonly msdyn_additionalcost_Base: string;
			/** Agreement Booking Service linked to this Work Order Service */
			readonly msdyn_AgreementBookingService: string;
			/** Shows the resource booking detail where this product was added. */
			readonly msdyn_Booking: string;
			/** Shows the sale amount per unit calculated by the system considering the minimum charge, if applicable. */
			readonly msdyn_CalculatedUnitAmount: string;
			/** Shows the value of the calculated unit amount in the base currency. */
			readonly msdyn_calculatedunitamount_Base: string;
			/** Enter the commission costs associated with this service. The value is manually specified and isn't automatically calculated. */
			readonly msdyn_CommissionCosts: string;
			/** Shows the value of the commission costs in the base currency. */
			readonly msdyn_commissioncosts_Base: string;
			/** Unique identifier for Customer Asset associated with Work Order Service. */
			readonly msdyn_CustomerAsset: string;
			/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
			readonly msdyn_Description: string;
			/** Choose whether to disable entitlement selection for this work order service. */
			readonly msdyn_DisableEntitlement: string;
			/** Specify any discount amount on this service. Note: If you enter a discount amount you cannot enter a discount % */
			readonly msdyn_DiscountAmount: string;
			/** Shows the value of the discount Amount in the base currency. */
			readonly msdyn_discountamount_Base: string;
			/** Specify any discount % on this service. Note: If you enter a discount % it will overwrite the discount $ */
			readonly msdyn_DiscountPercent: string;
			/** Shows the actual duration of service. */
			readonly msdyn_Duration: string;
			/** Enter the quantity you wish to bill the customer for. By default, this will default to the same value as "Quantity." */
			readonly msdyn_DurationToBill: string;
			/** Entitlement to apply to the Work Order Service. */
			readonly msdyn_Entitlement: string;
			/** Shows the estimated sale amount per unit calculated by the system considering the initial charge (if applicable). */
			readonly msdyn_EstimateCalculatedUnitAmount: string;
			/** Shows the value of the estimate calculated unit amount in the base currency. */
			readonly msdyn_estimatecalculatedunitamount_Base: string;
			/** Enter a discount amount on the subtotal amount. Note: If you enter a discount amount you cannot enter a discount % */
			readonly msdyn_EstimateDiscountAmount: string;
			/** Shows the value of the estimate discount amount in the base currency. */
			readonly msdyn_estimatediscountamount_Base: string;
			/** Enter a discount % on the subtotal amount. Note: If you enter a discount % it will overwrite the discount $ */
			readonly msdyn_EstimateDiscountPercent: string;
			/** Enter the estimated duration of this service. */
			readonly msdyn_EstimateDuration: string;
			/** Shows the total amount for this service, excluding discounts. */
			readonly msdyn_EstimateSubtotal: string;
			/** Shows the value of the estimate subtotal in the base currency. */
			readonly msdyn_estimatesubtotal_Base: string;
			/** Shows the estimated total amount of this service, including discounts. */
			readonly msdyn_EstimateTotalAmount: string;
			/** Shows the value of the estimate total amount in the base currency. */
			readonly msdyn_estimatetotalamount_Base: string;
			/** Shows the estimated total cost of this service. */
			readonly msdyn_EstimateTotalCost: string;
			/** Shows the value of the estimate total cost in the base currency. */
			readonly msdyn_estimatetotalcost_Base: string;
			/** Shows the estimated sale amount per unit. */
			readonly msdyn_EstimateUnitAmount: string;
			/** Shows the value of the estimate unit amount in the base currency. */
			readonly msdyn_estimateunitamount_Base: string;
			/** Shows the estimated cost amount per unit. */
			readonly msdyn_EstimateUnitCost: string;
			/** Shows the value of the estimate unit cost in the base currency. */
			readonly msdyn_estimateunitcost_Base: string;
			/** Enter any internal notes you want to track on this service. */
			readonly msdyn_InternalDescription: string;
			readonly msdyn_InternalFlags: string;
			readonly msdyn_LineOrder: string;
			/** Enter the current status of the line, estimate or used. */
			readonly msdyn_LineStatus: string;
			/** Enter the amount charged as a minimum charge. */
			readonly msdyn_MinimumChargeAmount: string;
			/** Shows the value of the minimum charge amount in the base currency. */
			readonly msdyn_minimumchargeamount_Base: string;
			/** Enter the duration of up to how long the minimum charge applies. */
			readonly msdyn_MinimumChargeDuration: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Price List that determines the pricing for this service */
			readonly msdyn_PriceList: string;
			/** Service proposed or used for this work order */
			readonly msdyn_Service: string;
			/** Enter the total amount excluding discounts. */
			readonly msdyn_Subtotal: string;
			/** Shows the value of the subtotal in the base currency. */
			readonly msdyn_subtotal_Base: string;
			/** Specify if service is taxable. If you do not wish to charge tax set this field to No. */
			readonly msdyn_Taxable: string;
			readonly msdyn_TotalAmount: string;
			/** Shows the value of the total amount in the base currency. */
			readonly msdyn_totalamount_Base: string;
			/** Shows the total cost of this service. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs. */
			readonly msdyn_TotalCost: string;
			/** Shows the value of the total cost in the base currency. */
			readonly msdyn_totalcost_Base: string;
			/** The unit that determines the final quantity for this service */
			readonly msdyn_Unit: string;
			/** Enter the amount you want to charge the customer per unit. By default, this is calculated based on the selected price list. The amount can be changed. */
			readonly msdyn_UnitAmount: string;
			/** Shows the value of the unit amount in the base currency. */
			readonly msdyn_unitamount_Base: string;
			/** Shows the actual cost per unit. */
			readonly msdyn_UnitCost: string;
			/** Shows the value of the unit cost in the base currency. */
			readonly msdyn_unitcost_Base: string;
			/** The work order this service relates to */
			readonly msdyn_WorkOrder: string;
			/** The Incident related to this product */
			readonly msdyn_WorkOrderIncident: string;
			/** Shows the entity instances. */
			readonly msdyn_workorderserviceId: string;
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
			/** Status of the Work Order Service */
			readonly statecode: string;
			/** Reason for the status of the Work Order Service */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
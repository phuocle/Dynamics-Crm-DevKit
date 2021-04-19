//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormRMA {
		interface tab__967655CB_D318_4E85_A768_3B42E0FC398E_Sections {
			_567C00B9_7BCD_4668_9FD1_010DD4039922: DevKit.Controls.Section;
			tab_1_section_2: DevKit.Controls.Section;
			tab_1_section_3: DevKit.Controls.Section;
			_967655CB_D318_4E85_A768_3B42E0FC398E_SECTION_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
			_967655CB_D318_4E85_A768_3B42E0FC398E_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
		}
		interface tab_rmaproductstab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab__967655CB_D318_4E85_A768_3B42E0FC398E extends DevKit.Controls.ITab {
			Section: tab__967655CB_D318_4E85_A768_3B42E0FC398E_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_rmaproductstab extends DevKit.Controls.ITab {
			Section: tab_rmaproductstab_Sections;
		}
		interface Tabs {
			_967655CB_D318_4E85_A768_3B42E0FC398E: tab__967655CB_D318_4E85_A768_3B42E0FC398E;
			tab_3: tab_tab_3;
			rmaproductstab: tab_rmaproductstab;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** User who approved RMA */
			msdyn_ApprovedBy: DevKit.Controls.Lookup;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Enter the date RMA was requested by the customer. */
			msdyn_DateRequested: DevKit.Controls.Date;
			/** Enter a short description of the RMA. */
			msdyn_Description: DevKit.Controls.String;
			/** ETA */
			msdyn_ETA: DevKit.Controls.Date;
			/** Shows the unique number identifying this RMA record. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the tracking number of package */
			msdyn_PackagingTrackingNo: DevKit.Controls.String;
			/** Price List that determines the pricing for this product */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Shows the default action to be taken on all RMA Products. */
			msdyn_ProcessingAction: DevKit.Controls.OptionSet;
			msdyn_ReferenceNo: DevKit.Controls.String;
			/** Contact who requested this return */
			msdyn_RequestedByContact: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Shows the tracking number of the shipment. */
			msdyn_ShippingTrackingNo: DevKit.Controls.String;
			/** Method of shipment by Customer */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			/** RMA Substatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the current status of the RMA. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Specify if RMA is taxable */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Tax Code to be used to calculate tax when RMA is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Shows the total amount of all RMA Products including tax. */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Work Order this RMA is linked to */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_rma_msdyn_rmaproduct_RMA: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rmareceipt_RMA: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			receiptsgrid: DevKit.Controls.Grid;
			rmaproductsgrid: DevKit.Controls.Grid;
		}
	}
	class FormRMA extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RMA
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RMA */
		Body: MyDog.FormRMA.Body;
		/** The Navigation of form RMA */
		Navigation: MyDog.FormRMA.Navigation;
		/** The Grid of form RMA */
		Grid: MyDog.FormRMA.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_rma {
		enum msdyn_ProcessingAction {
			/** 690970002 */
			Change_Asset_Ownership,
			/** 690970000 */
			Create_RTV,
			/** 690970001 */
			Return_to_Warehouse
		}
		enum msdyn_SystemStatus {
			/** 690970001 */
			Canceled,
			/** 690970000 */
			Pending,
			/** 690970002 */
			Products_Received
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
//{'JsForm':['RMA'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
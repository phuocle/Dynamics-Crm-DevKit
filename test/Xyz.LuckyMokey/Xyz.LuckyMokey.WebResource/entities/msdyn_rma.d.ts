//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRMA {
		interface tab__967655CB_D318_4E85_A768_3B42E0FC398E_Sections {
			_567C00B9_7BCD_4668_9FD1_010DD4039922: DevKit.Form.Controls.ControlSection;
			tab_1_section_2: DevKit.Form.Controls.ControlSection;
			tab_1_section_3: DevKit.Form.Controls.ControlSection;
			_967655CB_D318_4E85_A768_3B42E0FC398E_SECTION_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
			_967655CB_D318_4E85_A768_3B42E0FC398E_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3_Sections {
		}
		interface tab_rmaproductstab_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__967655CB_D318_4E85_A768_3B42E0FC398E extends DevKit.Form.Controls.IControlTab {
			Section: tab__967655CB_D318_4E85_A768_3B42E0FC398E_Sections;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface tab_rmaproductstab extends DevKit.Form.Controls.IControlTab {
			Section: tab_rmaproductstab_Sections;
		}
		interface Tabs {
			_967655CB_D318_4E85_A768_3B42E0FC398E: tab__967655CB_D318_4E85_A768_3B42E0FC398E;
			tab_3: tab_tab_3;
			rmaproductstab: tab_rmaproductstab;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			receiptsgrid: DevKit.Form.Controls.ControlGrid;
			rmaproductsgrid: DevKit.Form.Controls.ControlGrid;
			/** User who approved RMA */
			msdyn_ApprovedBy: DevKit.Form.Controls.ControlLookup;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Form.Controls.ControlLookup;
			/** Enter the date RMA was requested by the customer. */
			msdyn_DateRequested: DevKit.Form.Controls.ControlDate;
			/** Enter a short description of the RMA. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** ETA */
			msdyn_ETA: DevKit.Form.Controls.ControlDate;
			/** Shows the unique number identifying this RMA record. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows the tracking number of package */
			msdyn_PackagingTrackingNo: DevKit.Form.Controls.ControlString;
			/** Price List that determines the pricing for this product */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Shows the default action to be taken on all RMA Products. */
			msdyn_ProcessingAction: DevKit.Form.Controls.ControlOptionSet;
			msdyn_ReferenceNo: DevKit.Form.Controls.ControlString;
			/** Contact who requested this return */
			msdyn_RequestedByContact: DevKit.Form.Controls.ControlLookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Form.Controls.ControlLookup;
			/** Shows the tracking number of the shipment. */
			msdyn_ShippingTrackingNo: DevKit.Form.Controls.ControlString;
			/** Method of shipment by Customer */
			msdyn_ShipVia: DevKit.Form.Controls.ControlLookup;
			/** RMA Substatus */
			msdyn_SubStatus: DevKit.Form.Controls.ControlLookup;
			/** Enter the current status of the RMA. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Specify if RMA is taxable */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			/** Tax Code to be used to calculate tax when RMA is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Form.Controls.ControlLookup;
			/** Shows the total amount of all RMA Products including tax. */
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Work Order this RMA is linked to */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_rma_msdyn_rmaproduct_RMA: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rmareceipt_RMA: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rtvproduct_RMA: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormRMA extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form RMA
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form RMA */
		Body: LuckyMokey.FormRMA.Body;
		/** The Navigation of form RMA */
		Navigation: LuckyMokey.FormRMA.Navigation;
	}
	class msdyn_rmaApi {
		/**
		* DynamicsCrm.DevKit msdyn_rmaApi
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
		/** User who approved RMA */
		msdyn_ApprovedBy: DevKit.WebApi.LookupValue;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: DevKit.WebApi.StringValue;
		/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
		msdyn_BillingAccount: DevKit.WebApi.LookupValue;
		/** Enter the date RMA was requested by the customer. */
		msdyn_DateRequested_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter a short description of the RMA. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** ETA */
		msdyn_ETA_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the unique number identifying this RMA record. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the tracking number of package */
		msdyn_PackagingTrackingNo: DevKit.WebApi.StringValue;
		/** Price List that determines the pricing for this product */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Shows the default action to be taken on all RMA Products. */
		msdyn_ProcessingAction: DevKit.WebApi.OptionSetValue;
		msdyn_ReferenceNo: DevKit.WebApi.StringValue;
		/** Contact who requested this return */
		msdyn_RequestedByContact: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_rmaId: DevKit.WebApi.GuidValue;
		/** Account to be serviced */
		msdyn_ServiceAccount: DevKit.WebApi.LookupValue;
		/** Shows the tracking number of the shipment. */
		msdyn_ShippingTrackingNo: DevKit.WebApi.StringValue;
		/** Method of shipment by Customer */
		msdyn_ShipVia: DevKit.WebApi.LookupValue;
		/** RMA Substatus */
		msdyn_SubStatus: DevKit.WebApi.LookupValue;
		/** Enter the current status of the RMA. */
		msdyn_SystemStatus: DevKit.WebApi.OptionSetValue;
		/** Specify if RMA is taxable */
		msdyn_Taxable: DevKit.WebApi.BooleanValue;
		/** Tax Code to be used to calculate tax when RMA is taxable. By default the system will use the tax code specified on the service account */
		msdyn_TaxCode: DevKit.WebApi.LookupValue;
		/** Shows the total amount of all RMA Products including tax. */
		msdyn_TotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total amount in the base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Work Order this RMA is linked to */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
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
		/** Status of the RMA */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the RMA */
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
	namespace msdyn_rma {
		enum msdyn_ProcessingAction {
			/** 690970000 */
			Create_RTV,
			/** 690970001 */
			Return_to_Warehouse,
			/** 690970002 */
			Change_Asset_Ownership
		}
		enum msdyn_SystemStatus {
			/** 690970000 */
			Pending,
			/** 690970001 */
			Canceled,
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
//{'JsForm':['RMA'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
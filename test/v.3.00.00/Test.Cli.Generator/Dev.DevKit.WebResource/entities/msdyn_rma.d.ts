﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRMA {
		interface tab__967655CB_D318_4E85_A768_3B42E0FC398E_Sections {
			_567C00B9_7BCD_4668_9FD1_010DD4039922: DevKit.Controls.Section;
			_967655CB_D318_4E85_A768_3B42E0FC398E_SECTION_2: DevKit.Controls.Section;
			_967655CB_D318_4E85_A768_3B42E0FC398E_SECTION_3: DevKit.Controls.Section;
			tab_1_section_2: DevKit.Controls.Section;
			tab_1_section_3: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_rmaproductstab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
		}
		interface tab__967655CB_D318_4E85_A768_3B42E0FC398E extends DevKit.Controls.ITab {
			Section: tab__967655CB_D318_4E85_A768_3B42E0FC398E_Sections;
		}
		interface tab_rmaproductstab extends DevKit.Controls.ITab {
			Section: tab_rmaproductstab_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			_967655CB_D318_4E85_A768_3B42E0FC398E: tab__967655CB_D318_4E85_A768_3B42E0FC398E;
			rmaproductstab: tab_rmaproductstab;
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
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
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_rma_msdyn_rmaproduct_RMA: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rmareceipt_RMA: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_rma_msdyn_rtvproduct_RMA: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			receiptsgrid: DevKit.Controls.Grid;
			rmaproductsgrid: DevKit.Controls.Grid;
		}
	}
	class FormRMA extends DevKit.IForm {
		/**
		* RMA [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RMA */
		Body: DevKit.FormRMA.Body;
		/** The Navigation of form RMA */
		Navigation: DevKit.FormRMA.Navigation;
		/** The Process of form RMA */
		Process: DevKit.FormRMA.Process;
		/** The Grid of form RMA */
		Grid: DevKit.FormRMA.Grid;
		/** The SidePanes of form RMA */
		SidePanes: DevKit.SidePanes;
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
		/** User who approved RMA */
		msdyn_ApprovedBy: string;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: string;
		/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
		msdyn_BillingAccount: string;
		/** Enter the date RMA was requested by the customer. */
		msdyn_DateRequested_UtcDateOnly: Date;
		/** Enter a short description of the RMA. */
		msdyn_Description: string;
		/** ETA */
		msdyn_ETA_UtcDateOnly: Date;
		/** Shows the unique number identifying this RMA record. */
		msdyn_name: string;
		/** Shows the tracking number of package */
		msdyn_PackagingTrackingNo: string;
		/** Price List that determines the pricing for this product */
		msdyn_PriceList: string;
		/** Shows the default action to be taken on all RMA Products. */
		msdyn_ProcessingAction: OptionSet.msdyn_rma.msdyn_ProcessingAction;
		msdyn_ReferenceNo: string;
		/** Contact who requested this return */
		msdyn_RequestedByContact: string;
		/** Shows the entity instances. */
		msdyn_rmaId: string;
		/** Account to be serviced */
		msdyn_ServiceAccount: string;
		/** Shows the tracking number of the shipment. */
		msdyn_ShippingTrackingNo: string;
		/** Method of shipment by Customer */
		msdyn_ShipVia: string;
		/** RMA Substatus */
		msdyn_SubStatus: string;
		/** Enter the current status of the RMA. */
		msdyn_SystemStatus: OptionSet.msdyn_rma.msdyn_SystemStatus;
		/** Specify if RMA is taxable */
		msdyn_Taxable: boolean;
		/** Tax Code to be used to calculate tax when RMA is taxable. By default the system will use the tax code specified on the service account */
		msdyn_TaxCode: string;
		/** Shows the total amount of all RMA Products including tax. */
		msdyn_TotalAmount: number;
		/** Shows the value of the total amount in the base currency. */
		readonly msdyn_totalamount_Base: number;
		/** Work Order this RMA is linked to */
		msdyn_WorkOrder: string;
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
		/** Status of the RMA */
		statecode: OptionSet.msdyn_rma.statecode;
		/** Reason for the status of the RMA */
		statuscode: OptionSet.msdyn_rma.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
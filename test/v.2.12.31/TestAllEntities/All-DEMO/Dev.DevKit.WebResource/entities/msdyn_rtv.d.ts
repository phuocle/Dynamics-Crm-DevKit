//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRTV {
		interface tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116_Sections {
			_7E0518DA_7EF7_44EE_922D_7BB9472EB9EF: DevKit.Controls.Section;
			_8B74A7E7_5EDB_4A59_9B52_77FBD784E116_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_rtvproductstab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116 extends DevKit.Controls.ITab {
			Section: tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116_Sections;
		}
		interface tab_rtvproductstab extends DevKit.Controls.ITab {
			Section: tab_rtvproductstab_Sections;
		}
		interface Tabs {
			_8B74A7E7_5EDB_4A59_9B52_77FBD784E116: tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116;
			rtvproductstab: tab_rtvproductstab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the unique number for identifying this RTV record. */
			msdyn_name: DevKit.Controls.String;
			/** Originating RMA if items were returned from customer */
			msdyn_OriginatingRMA: DevKit.Controls.Lookup;
			/** RTV Substatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the current status of the RTV. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Shows the total Amount to be credited on this RTV. */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Vendor where items will be returned */
			msdyn_Vendor: DevKit.Controls.Lookup;
			/** Contact person at Vendor */
			msdyn_VendorContact: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the RTV */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_rtv_msdyn_rtvproduct_RTV: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			rtvproductsgrid: DevKit.Controls.Grid;
		}
	}
	class FormRTV extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RTV
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RTV */
		Body: DevKit.FormRTV.Body;
		/** The Footer section of form RTV */
		Footer: DevKit.FormRTV.Footer;
		/** The Navigation of form RTV */
		Navigation: DevKit.FormRTV.Navigation;
		/** The Grid of form RTV */
		Grid: DevKit.FormRTV.Grid;
	}
	class msdyn_rtvApi {
		/**
		* DynamicsCrm.DevKit msdyn_rtvApi
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
		msdyn_Address1: DevKit.WebApi.StringValue;
		msdyn_Address2: DevKit.WebApi.StringValue;
		msdyn_Address3: DevKit.WebApi.StringValue;
		/** The user who approved or rejected this return */
		msdyn_ApprovedDeclinedBy: DevKit.WebApi.LookupValue;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: DevKit.WebApi.StringValue;
		/** Unique identifier for Resource Booking associated with RTV. */
		msdyn_Booking: DevKit.WebApi.LookupValue;
		msdyn_City: DevKit.WebApi.StringValue;
		msdyn_Country: DevKit.WebApi.StringValue;
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		/** Shows the unique number for identifying this RTV record. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Purchase Order from where items are originating */
		msdyn_OriginalPurchaseOrder: DevKit.WebApi.LookupValue;
		/** Originating RMA if items were returned from customer */
		msdyn_OriginatingRMA: DevKit.WebApi.LookupValue;
		msdyn_PostalCode: DevKit.WebApi.StringValue;
		msdyn_ReferenceNo: DevKit.WebApi.StringValue;
		/** Enter the date when return was requested. */
		msdyn_RequestDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the date items were returned to vendor. */
		msdyn_ReturnDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** User processing this return */
		msdyn_ReturnedBy: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_rtvId: DevKit.WebApi.GuidValue;
		/** Method of Shipment to Vendor */
		msdyn_ShipVia: DevKit.WebApi.LookupValue;
		msdyn_StateOrProvince: DevKit.WebApi.StringValue;
		/** RTV Substatus */
		msdyn_SubStatus: DevKit.WebApi.LookupValue;
		/** Enter the current status of the RTV. */
		msdyn_SystemStatus: DevKit.WebApi.OptionSetValue;
		/** Tax code vendor charges you */
		msdyn_TaxCode: DevKit.WebApi.LookupValue;
		/** Shows the total Amount to be credited on this RTV. */
		msdyn_TotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total amount in the base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Vendor where items will be returned */
		msdyn_Vendor: DevKit.WebApi.LookupValue;
		/** Contact person at Vendor */
		msdyn_VendorContact: DevKit.WebApi.LookupValue;
		/** RMA from Vendor */
		msdyn_VendorRMA: DevKit.WebApi.StringValue;
		/** Unique identifier for Work Order associated with RTV. */
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
		/** Status of the RTV */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the RTV */
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
	namespace msdyn_rtv {
		enum msdyn_SystemStatus {
			/** 690970001 */
			Approved,
			/** 690970004 */
			Canceled,
			/** 690970000 */
			Draft,
			/** 690970003 */
			Received,
			/** 690970002 */
			Shipped
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
//{'JsForm':['RTV'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
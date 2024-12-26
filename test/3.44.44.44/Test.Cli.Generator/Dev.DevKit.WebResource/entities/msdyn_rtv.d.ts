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
		interface Navigation {
			msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV: DevKit.Controls.NavigationItem,
			msdyn_msdyn_rtv_msdyn_rtvproduct_RTV: DevKit.Controls.NavigationItem,
			msdyn_rtv_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_rtv_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_rtv_Appointments: DevKit.Controls.NavigationItem,
			msdyn_rtv_Emails: DevKit.Controls.NavigationItem,
			msdyn_rtv_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_rtv_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_rtv_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_rtv_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_rtv_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_rtv_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_rtv_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_rtv_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_rtv_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_rtv_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_rtv_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_rtv_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			rtvproductsgrid: DevKit.Controls.Grid;
		}
	}
	class FormRTV extends DevKit.IForm {
		/**
		* RTV [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RTV */
		Body: DevKit.FormRTV.Body;
		/** The Navigation of form RTV */
		Navigation: DevKit.FormRTV.Navigation;
		/** The Grid of form RTV */
		Grid: DevKit.FormRTV.Grid;
		/** The SidePanes of form RTV */
		SidePanes: DevKit.SidePanes;
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
		msdyn_Address1: string;
		msdyn_Address2: string;
		msdyn_Address3: string;
		/** The user who approved or rejected this return */
		msdyn_ApprovedDeclinedBy: string;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: string;
		/** Unique identifier for Resource Booking associated with RTV. */
		msdyn_Booking: string;
		msdyn_City: string;
		msdyn_Country: string;
		msdyn_Latitude: number;
		msdyn_Longitude: number;
		/** Shows the unique number for identifying this RTV record. */
		msdyn_name: string;
		/** Purchase Order from where items are originating */
		msdyn_OriginalPurchaseOrder: string;
		/** Originating RMA if items were returned from customer */
		msdyn_OriginatingRMA: string;
		msdyn_PostalCode: string;
		msdyn_ReferenceNo: string;
		/** Enter the date when return was requested. */
		msdyn_RequestDate_UtcDateOnly: Date;
		/** Enter the date items were returned to vendor. */
		msdyn_ReturnDate_UtcDateOnly: Date;
		/** User processing this return */
		msdyn_ReturnedBy: string;
		/** Shows the entity instances. */
		msdyn_rtvId: string;
		/** Method of Shipment to Vendor */
		msdyn_ShipVia: string;
		msdyn_StateOrProvince: string;
		/** RTV Substatus */
		msdyn_SubStatus: string;
		/** Enter the current status of the RTV. */
		msdyn_SystemStatus: OptionSet.msdyn_rtv.msdyn_SystemStatus;
		/** Tax code vendor charges you */
		msdyn_TaxCode: string;
		/** Shows the total Amount to be credited on this RTV. */
		msdyn_TotalAmount: number;
		/** Shows the value of the total amount in the base currency. */
		readonly msdyn_totalamount_Base: number;
		/** Vendor where items will be returned */
		msdyn_Vendor: string;
		/** Contact person at Vendor */
		msdyn_VendorContact: string;
		/** RMA from Vendor */
		msdyn_VendorRMA: string;
		/** Unique identifier for Work Order associated with RTV. */
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
		/** Status of the RTV */
		statecode: OptionSet.msdyn_rtv.statecode;
		/** Reason for the status of the RTV */
		statuscode: OptionSet.msdyn_rtv.statuscode;
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
			readonly msdyn_Address1: string;
			readonly msdyn_Address2: string;
			readonly msdyn_Address3: string;
			/** The user who approved or rejected this return */
			readonly msdyn_ApprovedDeclinedBy: string;
			/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
			readonly msdyn_AutoNumbering: string;
			/** Unique identifier for Resource Booking associated with RTV. */
			readonly msdyn_Booking: string;
			readonly msdyn_City: string;
			readonly msdyn_Country: string;
			readonly msdyn_Latitude: string;
			readonly msdyn_Longitude: string;
			/** Shows the unique number for identifying this RTV record. */
			readonly msdyn_name: string;
			/** Purchase Order from where items are originating */
			readonly msdyn_OriginalPurchaseOrder: string;
			/** Originating RMA if items were returned from customer */
			readonly msdyn_OriginatingRMA: string;
			readonly msdyn_PostalCode: string;
			readonly msdyn_ReferenceNo: string;
			/** Enter the date when return was requested. */
			readonly msdyn_RequestDate_UtcDateOnly: string;
			/** Enter the date items were returned to vendor. */
			readonly msdyn_ReturnDate_UtcDateOnly: string;
			/** User processing this return */
			readonly msdyn_ReturnedBy: string;
			/** Shows the entity instances. */
			readonly msdyn_rtvId: string;
			/** Method of Shipment to Vendor */
			readonly msdyn_ShipVia: string;
			readonly msdyn_StateOrProvince: string;
			/** RTV Substatus */
			readonly msdyn_SubStatus: string;
			/** Enter the current status of the RTV. */
			readonly msdyn_SystemStatus: string;
			/** Tax code vendor charges you */
			readonly msdyn_TaxCode: string;
			/** Shows the total Amount to be credited on this RTV. */
			readonly msdyn_TotalAmount: string;
			/** Shows the value of the total amount in the base currency. */
			readonly msdyn_totalamount_Base: string;
			/** Vendor where items will be returned */
			readonly msdyn_Vendor: string;
			/** Contact person at Vendor */
			readonly msdyn_VendorContact: string;
			/** RMA from Vendor */
			readonly msdyn_VendorRMA: string;
			/** Unique identifier for Work Order associated with RTV. */
			readonly msdyn_WorkOrder: string;
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
			/** Status of the RTV */
			readonly statecode: string;
			/** Reason for the status of the RTV */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
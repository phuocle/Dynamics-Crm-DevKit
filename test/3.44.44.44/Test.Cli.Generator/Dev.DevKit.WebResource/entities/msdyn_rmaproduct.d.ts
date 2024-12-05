//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_rmaproduct_Information {
		interface Tabs {
		}
		interface Body {
			/** Account where ownership of associated asset should be transferred to (if Product Action is Change Asset Ownership) */
			msdyn_Changeownership: DevKit.Controls.Lookup;
			/** Specify if credit invoice should be generated for this product when returned */
			msdyn_CredittoAccount: DevKit.Controls.Boolean;
			/** Asset this line item relates to */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Type a description of the product. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the current status of this product. */
			msdyn_ItemStatus: DevKit.Controls.OptionSet;
			/** Shows the order of this product within the RMA. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Price List that determines the pricing for this product */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Shows the action to be performed by the system once the product is received (either create RTV, return to warehouse, or change asset ownership). */
			msdyn_ProcessingAction: DevKit.Controls.OptionSet;
			/** Product to return */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Shows the quantity processed as per the processing action. */
			msdyn_QtyProcessed: DevKit.Controls.Double;
			/** Enter the quantity currently received. */
			msdyn_QtyReceived: DevKit.Controls.Double;
			/** Enter the quantity to return. */
			msdyn_Quantitytoreturn: DevKit.Controls.Double;
			/** Vendor to where this product should be returned (if Product Action is RTV) */
			msdyn_ReturntoVendor: DevKit.Controls.Lookup;
			/** Warehouse to which this product should be returned to (if Product Action is Warehouse) */
			msdyn_ReturntoWarehouse: DevKit.Controls.Lookup;
			/** RMA this line item relates to */
			msdyn_RMA: DevKit.Controls.Lookup;
			/** Specify if product is taxable */
			msdyn_Taxable: DevKit.Controls.Boolean;
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Unit for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Shows the unit amount to be credited to the customer */
			msdyn_UnitAmount: DevKit.Controls.Money;
			/** Work Order Product to be returned */
			msdyn_WOProduct: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct: DevKit.Controls.NavigationItem,
			msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_Appointments: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_Emails: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_rmaproduct_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_rmaproduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_rmaproduct_Information */
		Body: DevKit.Formmsdyn_rmaproduct_Information.Body;
		/** The Navigation of form msdyn_rmaproduct_Information */
		Navigation: DevKit.Formmsdyn_rmaproduct_Information.Navigation;
		/** The SidePanes of form msdyn_rmaproduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_rmaproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_rmaproductApi
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
		/** Account where ownership of associated asset should be transferred to (if Product Action is Change Asset Ownership) */
		msdyn_Changeownership: string;
		/** Specify if credit invoice should be generated for this product when returned */
		msdyn_CredittoAccount: boolean;
		/** Asset this line item relates to */
		msdyn_CustomerAsset: string;
		/** Type a description of the product. */
		msdyn_Description: string;
		msdyn_InternalFlags: string;
		/** Enter the current status of this product. */
		msdyn_ItemStatus: OptionSet.msdyn_rmaproduct.msdyn_ItemStatus;
		/** Shows the order of this product within the RMA. */
		msdyn_LineOrder: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Price List that determines the pricing for this product */
		msdyn_PriceList: string;
		/** Shows the action to be performed by the system once the product is received (either create RTV, return to warehouse, or change asset ownership). */
		msdyn_ProcessingAction: OptionSet.msdyn_rmaproduct.msdyn_ProcessingAction;
		/** Product to return */
		msdyn_Product: string;
		/** Shows the quantity processed as per the processing action. */
		msdyn_QtyProcessed: number;
		/** Enter the quantity currently received. */
		msdyn_QtyReceived: number;
		/** Enter the quantity to return. */
		msdyn_Quantitytoreturn: number;
		/** Vendor to where this product should be returned (if Product Action is RTV) */
		msdyn_ReturntoVendor: string;
		/** Warehouse to which this product should be returned to (if Product Action is Warehouse) */
		msdyn_ReturntoWarehouse: string;
		/** RMA this line item relates to */
		msdyn_RMA: string;
		/** Shows the entity instances. */
		msdyn_rmaproductId: string;
		/** Specify if product is taxable */
		msdyn_Taxable: boolean;
		msdyn_TotalAmount: number;
		/** Shows the value of the total amount in the base currency. */
		readonly msdyn_totalamount_Base: number;
		/** Unit for this product */
		msdyn_Unit: string;
		/** Shows the unit amount to be credited to the customer */
		msdyn_UnitAmount: number;
		/** Shows the value of the unit amount in the base currency. */
		readonly msdyn_unitamount_Base: number;
		/** Work Order Product to be returned */
		msdyn_WOProduct: string;
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
		/** Status of the RMA Product */
		statecode: OptionSet.msdyn_rmaproduct.statecode;
		/** Reason for the status of the RMA Product */
		statuscode: OptionSet.msdyn_rmaproduct.statuscode;
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
			/** Account where ownership of associated asset should be transferred to (if Product Action is Change Asset Ownership) */
			readonly msdyn_Changeownership: string;
			/** Specify if credit invoice should be generated for this product when returned */
			readonly msdyn_CredittoAccount: string;
			/** Asset this line item relates to */
			readonly msdyn_CustomerAsset: string;
			/** Type a description of the product. */
			readonly msdyn_Description: string;
			readonly msdyn_InternalFlags: string;
			/** Enter the current status of this product. */
			readonly msdyn_ItemStatus: string;
			/** Shows the order of this product within the RMA. */
			readonly msdyn_LineOrder: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Price List that determines the pricing for this product */
			readonly msdyn_PriceList: string;
			/** Shows the action to be performed by the system once the product is received (either create RTV, return to warehouse, or change asset ownership). */
			readonly msdyn_ProcessingAction: string;
			/** Product to return */
			readonly msdyn_Product: string;
			/** Shows the quantity processed as per the processing action. */
			readonly msdyn_QtyProcessed: string;
			/** Enter the quantity currently received. */
			readonly msdyn_QtyReceived: string;
			/** Enter the quantity to return. */
			readonly msdyn_Quantitytoreturn: string;
			/** Vendor to where this product should be returned (if Product Action is RTV) */
			readonly msdyn_ReturntoVendor: string;
			/** Warehouse to which this product should be returned to (if Product Action is Warehouse) */
			readonly msdyn_ReturntoWarehouse: string;
			/** RMA this line item relates to */
			readonly msdyn_RMA: string;
			/** Shows the entity instances. */
			readonly msdyn_rmaproductId: string;
			/** Specify if product is taxable */
			readonly msdyn_Taxable: string;
			readonly msdyn_TotalAmount: string;
			/** Shows the value of the total amount in the base currency. */
			readonly msdyn_totalamount_Base: string;
			/** Unit for this product */
			readonly msdyn_Unit: string;
			/** Shows the unit amount to be credited to the customer */
			readonly msdyn_UnitAmount: string;
			/** Shows the value of the unit amount in the base currency. */
			readonly msdyn_unitamount_Base: string;
			/** Work Order Product to be returned */
			readonly msdyn_WOProduct: string;
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
			/** Status of the RMA Product */
			readonly statecode: string;
			/** Reason for the status of the RMA Product */
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
	namespace msdyn_rmaproduct {
		enum msdyn_ItemStatus {
			/** 690970002 */
			Canceled,
			/** 690970000 */
			Pending,
			/** 690970001 */
			Received
		}
		enum msdyn_ProcessingAction {
			/** 690970002 */
			Change_Asset_Ownership,
			/** 690970000 */
			Create_RTV,
			/** 690970001 */
			Return_to_Warehouse
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_fieldservicepricelistitem_Information {
		interface Tabs {
		}
		interface Body {
			/** Specify how the system should round the Duration To Bill on the Work Order Service */
			msdyn_DurationRoundingPolicy: DevKit.Controls.OptionSet;
			/** Specify the rounding duration. */
			msdyn_DurationRoundTo: DevKit.Controls.Integer;
			/** If enabled then the pricing of this item will not be multiplied by quantity */
			msdyn_FlatFee: DevKit.Controls.Boolean;
			/** Specify the minimum charge you wish to charge for this service. See note on Minimum Charge Duration */
			msdyn_MinimumChargeAmount: DevKit.Controls.Money;
			/** If this field has a value, the Minimum Charge Amount will first apply to the Minimum Duration and beyond the minimum duration the regular fee will apply */
			msdyn_MinimumChargeDuration: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the price list associated with the field service price list item. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** If you wish to limit this price list item to a certain product or service you can specify it. Otherwise this should be left blank */
			msdyn_ProductService: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Field Service Price List Item */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_fieldservicepricelistitem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_fieldservicepricelistitem_Information */
		Body: DevKit.Formmsdyn_fieldservicepricelistitem_Information.Body;
		/** The Footer section of form msdyn_fieldservicepricelistitem_Information */
		Footer: DevKit.Formmsdyn_fieldservicepricelistitem_Information.Footer;
		/** The Navigation of form msdyn_fieldservicepricelistitem_Information */
		Navigation: DevKit.Formmsdyn_fieldservicepricelistitem_Information.Navigation;
		/** The Process of form msdyn_fieldservicepricelistitem_Information */
		Process: DevKit.Formmsdyn_fieldservicepricelistitem_Information.Process;
		/** The SidePanes of form msdyn_fieldservicepricelistitem_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_fieldservicepricelistitemApi {
		/**
		* DynamicsCrm.DevKit msdyn_fieldservicepricelistitemApi
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
		/** Specify how the system should round the Duration To Bill on the Work Order Service */
		msdyn_DurationRoundingPolicy: OptionSet.msdyn_fieldservicepricelistitem.msdyn_DurationRoundingPolicy;
		/** Specify the rounding duration. */
		msdyn_DurationRoundTo: number;
		/** Shows the entity instances. */
		msdyn_fieldservicepricelistitemId: string;
		/** If enabled then the pricing of this item will not be multiplied by quantity */
		msdyn_FlatFee: boolean;
		/** Specify the minimum charge you wish to charge for this service. See note on Minimum Charge Duration */
		msdyn_MinimumChargeAmount: number;
		/** Shows the value of the minimum charge amount in the base currency. */
		readonly msdyn_minimumchargeamount_Base: number;
		/** If this field has a value, the Minimum Charge Amount will first apply to the Minimum Duration and beyond the minimum duration the regular fee will apply */
		msdyn_MinimumChargeDuration: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Shows the price list associated with the field service price list item. */
		msdyn_PriceList: string;
		/** If you wish to limit this price list item to a certain product or service you can specify it. Otherwise this should be left blank */
		msdyn_ProductService: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Field Service Price List Item */
		statecode: OptionSet.msdyn_fieldservicepricelistitem.statecode;
		/** Shows the reason for the status of the field service price list item. */
		statuscode: OptionSet.msdyn_fieldservicepricelistitem.statuscode;
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
			/** Specify how the system should round the Duration To Bill on the Work Order Service */
			readonly msdyn_DurationRoundingPolicy: string;
			/** Specify the rounding duration. */
			readonly msdyn_DurationRoundTo: string;
			/** Shows the entity instances. */
			readonly msdyn_fieldservicepricelistitemId: string;
			/** If enabled then the pricing of this item will not be multiplied by quantity */
			readonly msdyn_FlatFee: string;
			/** Specify the minimum charge you wish to charge for this service. See note on Minimum Charge Duration */
			readonly msdyn_MinimumChargeAmount: string;
			/** Shows the value of the minimum charge amount in the base currency. */
			readonly msdyn_minimumchargeamount_Base: string;
			/** If this field has a value, the Minimum Charge Amount will first apply to the Minimum Duration and beyond the minimum duration the regular fee will apply */
			readonly msdyn_MinimumChargeDuration: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the price list associated with the field service price list item. */
			readonly msdyn_PriceList: string;
			/** If you wish to limit this price list item to a certain product or service you can specify it. Otherwise this should be left blank */
			readonly msdyn_ProductService: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Field Service Price List Item */
			readonly statecode: string;
			/** Shows the reason for the status of the field service price list item. */
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
	namespace msdyn_fieldservicepricelistitem {
		enum msdyn_DurationRoundingPolicy {
			/** 690970002 */
			Down,
			/** 690970003 */
			Nearest,
			/** 690970000 */
			None,
			/** 690970001 */
			Up
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
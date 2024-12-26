//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_nottoexceed_Information {
		interface tab__20C873EF_EDBF_4992_846B_AA3942C92B3B_Sections {
			_20C873EF_EDBF_4992_846B_AA3942C92B3B_SECTION_2: DevKit.Controls.Section;
			_C7080E4B_6601_45CA_B360_CBA9FF30118C: DevKit.Controls.Section;
		}
		interface tab__20C873EF_EDBF_4992_846B_AA3942C92B3B extends DevKit.Controls.ITab {
			Section: tab__20C873EF_EDBF_4992_846B_AA3942C92B3B_Sections;
		}
		interface Tabs {
			_20C873EF_EDBF_4992_846B_AA3942C92B3B: tab__20C873EF_EDBF_4992_846B_AA3942C92B3B;
		}
		interface Body {
			Tab: Tabs;
			/** Identifies the service account scope of the not-to-exceed amount. */
			msdyn_account: DevKit.Controls.Lookup;
			/** Threshold amount that must not be exceeded. */
			msdyn_amount: DevKit.Controls.Money;
			/** Indicates the cost margin percentage applicable to Price and Cost margin type of not-to-exceed setting. */
			msdyn_costmargin: DevKit.Controls.Decimal;
			/** Identifies the incident type scope of the not-to-exceed amount. */
			msdyn_incidenttype: DevKit.Controls.Lookup;
			/** Identifies the functional location or geographical scope of the not-to-exceed amount. */
			msdyn_location: DevKit.Controls.Lookup;
			/** Meaningful name describing the not-to-exceed amount. */
			msdyn_name: DevKit.Controls.String;
			/** Indicates the type of not-to-exceed amount. */
			msdyn_ntetype: DevKit.Controls.OptionSet;
			/** Identifies the work order priority for the not-to-exceed amount. */
			msdyn_priority: DevKit.Controls.Lookup;
			/** Identifies the trade for the not-to-exceed amount. */
			msdyn_trade: DevKit.Controls.Lookup;
			/** Identifies the work order type for the not-to-exceed amount. */
			msdyn_workordertype: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_nottoexceed_msdyn_workordernte_nottoexceed: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_nottoexceed_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_nottoexceed_Information */
		Body: DevKit.Formmsdyn_nottoexceed_Information.Body;
		/** The Navigation of form msdyn_nottoexceed_Information */
		Navigation: DevKit.Formmsdyn_nottoexceed_Information.Navigation;
		/** The SidePanes of form msdyn_nottoexceed_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_nottoexceedApi {
		/**
		* DynamicsCrm.DevKit msdyn_nottoexceedApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Identifies the service account scope of the not-to-exceed amount. */
		msdyn_account: string;
		/** Threshold amount that must not be exceeded. */
		msdyn_amount: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Indicates the cost margin percentage applicable to Price and Cost margin type of not-to-exceed setting. */
		msdyn_costmargin: number;
		/** Identifies the incident type scope of the not-to-exceed amount. */
		msdyn_incidenttype: string;
		/** Identifies the functional location or geographical scope of the not-to-exceed amount. */
		msdyn_location: string;
		/** Meaningful name describing the not-to-exceed amount. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_nottoexceedId: string;
		/** Indicates the type of not-to-exceed amount. */
		msdyn_ntetype: OptionSet.msdyn_nottoexceed.msdyn_ntetype;
		/** Identifies the work order priority for the not-to-exceed amount. */
		msdyn_priority: string;
		/** Identifies the trade for the not-to-exceed amount. */
		msdyn_trade: string;
		/** Identifies the work order type for the not-to-exceed amount. */
		msdyn_workordertype: string;
		/** Date and time that the record was migrated. */
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
		/** Status of the Not-to-exceed */
		statecode: OptionSet.msdyn_nottoexceed.statecode;
		/** Reason for the status of the Not-to-exceed */
		statuscode: OptionSet.msdyn_nottoexceed.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Identifies the service account scope of the not-to-exceed amount. */
			readonly msdyn_account: string;
			/** Threshold amount that must not be exceeded. */
			readonly msdyn_amount: string;
			/** Value of the Amount in base currency. */
			readonly msdyn_amount_Base: string;
			/** Indicates the cost margin percentage applicable to Price and Cost margin type of not-to-exceed setting. */
			readonly msdyn_costmargin: string;
			/** Identifies the incident type scope of the not-to-exceed amount. */
			readonly msdyn_incidenttype: string;
			/** Identifies the functional location or geographical scope of the not-to-exceed amount. */
			readonly msdyn_location: string;
			/** Meaningful name describing the not-to-exceed amount. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_nottoexceedId: string;
			/** Indicates the type of not-to-exceed amount. */
			readonly msdyn_ntetype: string;
			/** Identifies the work order priority for the not-to-exceed amount. */
			readonly msdyn_priority: string;
			/** Identifies the trade for the not-to-exceed amount. */
			readonly msdyn_trade: string;
			/** Identifies the work order type for the not-to-exceed amount. */
			readonly msdyn_workordertype: string;
			/** Date and time that the record was migrated. */
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
			/** Status of the Not-to-exceed */
			readonly statecode: string;
			/** Reason for the status of the Not-to-exceed */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_nottoexceed {
		enum msdyn_ntetype {
			/** 192350200 */
			Cost,
			/** 192350100 */
			Price,
			/** 192350300 */
			Price_and_cost_margin
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
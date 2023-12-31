//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quoteinvoicingsetup_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_quoteinvoicingsetup_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quoteinvoicingsetup_Information */
		Body: DevKit.Formmsdyn_quoteinvoicingsetup_Information.Body;
		/** The Process of form msdyn_quoteinvoicingsetup_Information */
		Process: DevKit.Formmsdyn_quoteinvoicingsetup_Information.Process;
		/** The SidePanes of form msdyn_quoteinvoicingsetup_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quoteinvoicingsetup_Information2 {
		interface tab__39DB6AD7_0591_436C_8508_3F53A96FBA9C_Sections {
			_39DB6AD7_0591_436C_8508_3F53A96FBA9C_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_TabProducts_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__39DB6AD7_0591_436C_8508_3F53A96FBA9C extends DevKit.Controls.ITab {
			Section: tab__39DB6AD7_0591_436C_8508_3F53A96FBA9C_Sections;
		}
		interface tab_TabProducts extends DevKit.Controls.ITab {
			Section: tab_TabProducts_Sections;
		}
		interface Tabs {
			_39DB6AD7_0591_436C_8508_3F53A96FBA9C: tab__39DB6AD7_0591_436C_8508_3F53A96FBA9C;
			TabProducts: tab_TabProducts;
		}
		interface Body {
			Tab: Tabs;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Quote this invoice setup relates to */
			msdyn_Quote: DevKit.Controls.Lookup;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_quoteinvoicingsetup_msdyn_quoteinvoicingproduct_QuoteInvoicingSetup: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			GridProducts: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_quoteinvoicingsetup_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quoteinvoicingsetup_Information2 */
		Body: DevKit.Formmsdyn_quoteinvoicingsetup_Information2.Body;
		/** The Navigation of form msdyn_quoteinvoicingsetup_Information2 */
		Navigation: DevKit.Formmsdyn_quoteinvoicingsetup_Information2.Navigation;
		/** The Process of form msdyn_quoteinvoicingsetup_Information2 */
		Process: DevKit.Formmsdyn_quoteinvoicingsetup_Information2.Process;
		/** The Grid of form msdyn_quoteinvoicingsetup_Information2 */
		Grid: DevKit.Formmsdyn_quoteinvoicingsetup_Information2.Grid;
		/** The SidePanes of form msdyn_quoteinvoicingsetup_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_quoteinvoicingsetupApi {
		/**
		* DynamicsCrm.DevKit msdyn_quoteinvoicingsetupApi
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
		/** Summed up Amount Totals of the assigned Quote Invoice Product */
		msdyn_AmountTotals: number;
		/** Value of the Amount Totals in base currency. */
		readonly msdyn_amounttotals_Base: number;
		/** Type a description of this invoice setup. */
		msdyn_Description: string;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Number of Occurrences for this Quote Invoicing Setup */
		msdyn_NumberOfOccurrences: number;
		/** Quote this invoice setup relates to */
		msdyn_Quote: string;
		/** Unique identifier for entity instances */
		msdyn_quoteinvoicingsetupId: string;
		/** Stores the invoice recurrence settings. */
		msdyn_RecurrenceSettings: string;
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
		/** Status of the Quote Invoicing Setup */
		statecode: OptionSet.msdyn_quoteinvoicingsetup.statecode;
		/** Reason for the status of the Quote Invoicing Setup */
		statuscode: OptionSet.msdyn_quoteinvoicingsetup.statuscode;
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
			/** Summed up Amount Totals of the assigned Quote Invoice Product */
			readonly msdyn_AmountTotals: string;
			/** Value of the Amount Totals in base currency. */
			readonly msdyn_amounttotals_Base: string;
			/** Type a description of this invoice setup. */
			readonly msdyn_Description: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Number of Occurrences for this Quote Invoicing Setup */
			readonly msdyn_NumberOfOccurrences: string;
			/** Quote this invoice setup relates to */
			readonly msdyn_Quote: string;
			/** Unique identifier for entity instances */
			readonly msdyn_quoteinvoicingsetupId: string;
			/** Stores the invoice recurrence settings. */
			readonly msdyn_RecurrenceSettings: string;
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
			/** Status of the Quote Invoicing Setup */
			readonly statecode: string;
			/** Reason for the status of the Quote Invoicing Setup */
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
	namespace msdyn_quoteinvoicingsetup {
		enum OwnerIdType {
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
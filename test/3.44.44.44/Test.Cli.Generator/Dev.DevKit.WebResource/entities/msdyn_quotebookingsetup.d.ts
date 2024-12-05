//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quotebookingsetup_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup: DevKit.Controls.NavigationItem,
			msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup: DevKit.Controls.NavigationItem,
			msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup: DevKit.Controls.NavigationItem,
			msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_quotebookingsetup_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingsetup_Information */
		Body: DevKit.Formmsdyn_quotebookingsetup_Information.Body;
		/** The Navigation of form msdyn_quotebookingsetup_Information */
		Navigation: DevKit.Formmsdyn_quotebookingsetup_Information.Navigation;
		/** The SidePanes of form msdyn_quotebookingsetup_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotebookingsetup_Information2 {
		interface tab__23ECC851_0E7D_4CE2_8482_97AFD671FD2F_Sections {
			_985F1B59_B0DB_43C9_804C_EF1D9C6C6A74: DevKit.Controls.Section;
			IncidentsSection: DevKit.Controls.Section;
		}
		interface tab_MarginTab_Sections {
			_23ECC851_0E7D_4CE2_8482_97AFD671FD2F_SECTION_4: DevKit.Controls.Section;
			EstimatedMarginSection: DevKit.Controls.Section;
			EstimatedRevenue: DevKit.Controls.Section;
		}
		interface tab_ProductsAndServicesTab_Sections {
			productsSection: DevKit.Controls.Section;
			serviceSection: DevKit.Controls.Section;
		}
		interface tab_ServiceTaskTab_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__23ECC851_0E7D_4CE2_8482_97AFD671FD2F extends DevKit.Controls.ITab {
			Section: tab__23ECC851_0E7D_4CE2_8482_97AFD671FD2F_Sections;
		}
		interface tab_MarginTab extends DevKit.Controls.ITab {
			Section: tab_MarginTab_Sections;
		}
		interface tab_ProductsAndServicesTab extends DevKit.Controls.ITab {
			Section: tab_ProductsAndServicesTab_Sections;
		}
		interface tab_ServiceTaskTab extends DevKit.Controls.ITab {
			Section: tab_ServiceTaskTab_Sections;
		}
		interface Tabs {
			_23ECC851_0E7D_4CE2_8482_97AFD671FD2F: tab__23ECC851_0E7D_4CE2_8482_97AFD671FD2F;
			MarginTab: tab_MarginTab;
			ProductsAndServicesTab: tab_ProductsAndServicesTab;
			ServiceTaskTab: tab_ServiceTaskTab;
		}
		interface Body {
			Tab: Tabs;
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			msdyn_autogenerateworkorder: DevKit.Controls.Boolean;
			/** Type a description of this booking setup. */
			msdyn_description: DevKit.Controls.String;
			msdyn_EstimatedCost: DevKit.Controls.Money;
			/** The estimated margin for this Quote Booking Setup */
			msdyn_EstimatedMargin: DevKit.Controls.Decimal;
			msdyn_EstimatedMarginPerWO: DevKit.Controls.Decimal;
			/** Estimated Costs of all Products that are associated to this Quote Booking Setup */
			msdyn_EstimatedProductCost: DevKit.Controls.Money;
			/** The sum of estimated revenue of all products that are associated to this quote booking setup */
			msdyn_EstimatedProductRevenue: DevKit.Controls.Money;
			msdyn_EstimatedRevenue: DevKit.Controls.Money;
			/** The Estimated Revenue per Work Order */
			msdyn_EstimatedRevenuePerWO: DevKit.Controls.Money;
			/** The sum of the estimated costs of all quote booking services that are associated to this quote booking setup */
			msdyn_EstimatedServiceCost: DevKit.Controls.Money;
			/** The sum of estimated revenue of all services that are associated to this quote booking setup */
			msdyn_EstimatedServiceRevenue: DevKit.Controls.Money;
			/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
			msdyn_Latitude: DevKit.Controls.Double;
			/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
			msdyn_Longitude: DevKit.Controls.Double;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Quote this Booking Setup relates to */
			msdyn_quote: DevKit.Controls.Lookup;
			msdyn_QuoteDetailId: DevKit.Controls.String;
			/** Stores the booking recurrence settings. */
			msdyn_recurrencesettings: DevKit.Controls.String;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_workordertype: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup: DevKit.Controls.NavigationItem,
			msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup: DevKit.Controls.NavigationItem,
			msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup: DevKit.Controls.NavigationItem,
			msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup: DevKit.Controls.NavigationItem
		}
		interface Grid {
			IncidentsGrid: DevKit.Controls.Grid;
			productsGrid: DevKit.Controls.Grid;
			ServicesGrid: DevKit.Controls.Grid;
			ServiceTasksGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_quotebookingsetup_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingsetup_Information2 */
		Body: DevKit.Formmsdyn_quotebookingsetup_Information2.Body;
		/** The Navigation of form msdyn_quotebookingsetup_Information2 */
		Navigation: DevKit.Formmsdyn_quotebookingsetup_Information2.Navigation;
		/** The Grid of form msdyn_quotebookingsetup_Information2 */
		Grid: DevKit.Formmsdyn_quotebookingsetup_Information2.Grid;
		/** The SidePanes of form msdyn_quotebookingsetup_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotebookingsetup_Information3 {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
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
			/** Type a description of this booking setup. */
			msdyn_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_QuoteDetailId: DevKit.Controls.String;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_workordertype: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_quotebookingsetup_Information3 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingsetup_Information3 */
		Body: DevKit.Formmsdyn_quotebookingsetup_Information3.Body;
	}
	class msdyn_quotebookingsetupApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotebookingsetupApi
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
		/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
		msdyn_autogeneratebooking: boolean;
		/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
		msdyn_autogenerateworkorder: boolean;
		/** Type a description of this booking setup. */
		msdyn_description: string;
		msdyn_EstimatedCost: number;
		/** Value of the Estimated Cost in base currency. */
		readonly msdyn_estimatedcost_Base: number;
		/** Shows the duration of the booking. */
		msdyn_estimatedduration: number;
		/** The estimated margin for this Quote Booking Setup */
		msdyn_EstimatedMargin: number;
		msdyn_EstimatedMarginPerWO: number;
		/** Estimated Costs of all Products that are associated to this Quote Booking Setup */
		msdyn_EstimatedProductCost: number;
		/** Value of the EstimatedProductCost in base currency. */
		readonly msdyn_estimatedproductcost_Base: number;
		/** The sum of estimated revenue of all products that are associated to this quote booking setup */
		msdyn_EstimatedProductRevenue: number;
		/** Value of the EstimatedProductRevenue in base currency. */
		readonly msdyn_estimatedproductrevenue_Base: number;
		msdyn_EstimatedRevenue: number;
		/** Value of the Estimated Revenue in base currency. */
		readonly msdyn_estimatedrevenue_Base: number;
		/** The Estimated Revenue per Work Order */
		msdyn_EstimatedRevenuePerWO: number;
		/** Value of the EstimatedRevenuePerWO in base currency. */
		readonly msdyn_estimatedrevenueperwo_Base: number;
		/** The sum of the estimated costs of all quote booking services that are associated to this quote booking setup */
		msdyn_EstimatedServiceCost: number;
		/** Value of the EstimatedServiceCost in base currency. */
		readonly msdyn_estimatedservicecost_Base: number;
		/** The sum of estimated revenue of all services that are associated to this quote booking setup */
		msdyn_EstimatedServiceRevenue: number;
		/** Value of the EstimatedServiceRevenue in base currency. */
		readonly msdyn_estimatedservicerevenue_Base: number;
		/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
		msdyn_generateworkorderdaysinadvance: number;
		/** For internal use only. */
		msdyn_Internalflags: string;
		/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
		msdyn_Latitude: number;
		/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
		msdyn_Longitude: number;
		msdyn_Margin: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_NumberOfWO: number;
		/** Shows the flexibility of days after the booking date. */
		msdyn_postbookingflexibility: number;
		/** Shows the date until which Work Order generation can be postponed. Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
		msdyn_postponegenerationuntil_TimezoneDateAndTime: Date;
		/** Shows the flexibility of days prior to the booking date. */
		msdyn_prebookingflexibility: number;
		/** Preferred Resource to booked */
		msdyn_preferredresource: string;
		/** Shows the preferred time to booking. */
		msdyn_preferredstarttime_UtcDateOnly: Date;
		/** Booking Priority */
		msdyn_priority: string;
		/** Quote this Booking Setup relates to */
		msdyn_quote: string;
		/** Unique identifier for entity instances */
		msdyn_quotebookingsetupId: string;
		/** Relationship between Quote Detail and Quote Booking Setup */
		msdyn_quotedetail: string;
		msdyn_QuoteDetailId: string;
		/** Stores the booking recurrence settings. */
		msdyn_recurrencesettings: string;
		/** For internal use only. */
		msdyn_revision: number;
		/** Shows the time window up until when this can be booked. */
		msdyn_timewindowend_UtcDateOnly: Date;
		/** Shows the time window from when this can be booked. */
		msdyn_timewindowstart_UtcDateOnly: Date;
		msdyn_WorkLocation: OptionSet.msdyn_quotebookingsetup.msdyn_WorkLocation;
		/** Shows the work order summary to be set on the work orders generated. */
		msdyn_workordersummary: string;
		/** Work Order Type to be used on generated Work Orders */
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
		/** Contains the id of the process associated with the entity. */
		processid: string;
		/** Contains the id of the stage where the entity is located. */
		stageid: string;
		/** Status of the Quote Booking Setup */
		statecode: OptionSet.msdyn_quotebookingsetup.statecode;
		/** Reason for the status of the Quote Booking Setup */
		statuscode: OptionSet.msdyn_quotebookingsetup.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: string;
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
			/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
			readonly msdyn_autogeneratebooking: string;
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			readonly msdyn_autogenerateworkorder: string;
			/** Type a description of this booking setup. */
			readonly msdyn_description: string;
			readonly msdyn_EstimatedCost: string;
			/** Value of the Estimated Cost in base currency. */
			readonly msdyn_estimatedcost_Base: string;
			/** Shows the duration of the booking. */
			readonly msdyn_estimatedduration: string;
			/** The estimated margin for this Quote Booking Setup */
			readonly msdyn_EstimatedMargin: string;
			readonly msdyn_EstimatedMarginPerWO: string;
			/** Estimated Costs of all Products that are associated to this Quote Booking Setup */
			readonly msdyn_EstimatedProductCost: string;
			/** Value of the EstimatedProductCost in base currency. */
			readonly msdyn_estimatedproductcost_Base: string;
			/** The sum of estimated revenue of all products that are associated to this quote booking setup */
			readonly msdyn_EstimatedProductRevenue: string;
			/** Value of the EstimatedProductRevenue in base currency. */
			readonly msdyn_estimatedproductrevenue_Base: string;
			readonly msdyn_EstimatedRevenue: string;
			/** Value of the Estimated Revenue in base currency. */
			readonly msdyn_estimatedrevenue_Base: string;
			/** The Estimated Revenue per Work Order */
			readonly msdyn_EstimatedRevenuePerWO: string;
			/** Value of the EstimatedRevenuePerWO in base currency. */
			readonly msdyn_estimatedrevenueperwo_Base: string;
			/** The sum of the estimated costs of all quote booking services that are associated to this quote booking setup */
			readonly msdyn_EstimatedServiceCost: string;
			/** Value of the EstimatedServiceCost in base currency. */
			readonly msdyn_estimatedservicecost_Base: string;
			/** The sum of estimated revenue of all services that are associated to this quote booking setup */
			readonly msdyn_EstimatedServiceRevenue: string;
			/** Value of the EstimatedServiceRevenue in base currency. */
			readonly msdyn_estimatedservicerevenue_Base: string;
			/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
			readonly msdyn_generateworkorderdaysinadvance: string;
			/** For internal use only. */
			readonly msdyn_Internalflags: string;
			/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
			readonly msdyn_Latitude: string;
			/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
			readonly msdyn_Longitude: string;
			readonly msdyn_Margin: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_NumberOfWO: string;
			/** Shows the flexibility of days after the booking date. */
			readonly msdyn_postbookingflexibility: string;
			/** Shows the date until which Work Order generation can be postponed. Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
			readonly msdyn_postponegenerationuntil_TimezoneDateAndTime: string;
			/** Shows the flexibility of days prior to the booking date. */
			readonly msdyn_prebookingflexibility: string;
			/** Preferred Resource to booked */
			readonly msdyn_preferredresource: string;
			/** Shows the preferred time to booking. */
			readonly msdyn_preferredstarttime_UtcDateOnly: string;
			/** Booking Priority */
			readonly msdyn_priority: string;
			/** Quote this Booking Setup relates to */
			readonly msdyn_quote: string;
			/** Unique identifier for entity instances */
			readonly msdyn_quotebookingsetupId: string;
			/** Relationship between Quote Detail and Quote Booking Setup */
			readonly msdyn_quotedetail: string;
			readonly msdyn_QuoteDetailId: string;
			/** Stores the booking recurrence settings. */
			readonly msdyn_recurrencesettings: string;
			/** For internal use only. */
			readonly msdyn_revision: string;
			/** Shows the time window up until when this can be booked. */
			readonly msdyn_timewindowend_UtcDateOnly: string;
			/** Shows the time window from when this can be booked. */
			readonly msdyn_timewindowstart_UtcDateOnly: string;
			readonly msdyn_WorkLocation: string;
			/** Shows the work order summary to be set on the work orders generated. */
			readonly msdyn_workordersummary: string;
			/** Work Order Type to be used on generated Work Orders */
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
			/** Contains the id of the process associated with the entity. */
			readonly processid: string;
			/** Contains the id of the stage where the entity is located. */
			readonly stageid: string;
			/** Status of the Quote Booking Setup */
			readonly statecode: string;
			/** Reason for the status of the Quote Booking Setup */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly traversedpath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_quotebookingsetup {
		enum msdyn_WorkLocation {
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Onsite
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
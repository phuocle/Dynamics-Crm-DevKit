//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_quotebookingsetup_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quotebookingsetup_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotebookingsetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quotebookingsetup_Information */
		Body: LuckyMokey.Formmsdyn_quotebookingsetup_Information.Body;
	}
	namespace Formmsdyn_quotebookingsetup_Information {
		interface tab__23ECC851_0E7D_4CE2_8482_97AFD671FD2F_Sections {
			_985F1B59_B0DB_43C9_804C_EF1D9C6C6A74: DevKit.Form.Controls.ControlSection;
			IncidentsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_MarginTab_Sections {
			EstimatedRevenue: DevKit.Form.Controls.ControlSection;
			_23ECC851_0E7D_4CE2_8482_97AFD671FD2F_SECTION_4: DevKit.Form.Controls.ControlSection;
			EstimatedMarginSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ProductsAndServicesTab_Sections {
			productsSection: DevKit.Form.Controls.ControlSection;
			serviceSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ServiceTaskTab_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__23ECC851_0E7D_4CE2_8482_97AFD671FD2F extends DevKit.Form.Controls.IControlTab {
			Section: tab__23ECC851_0E7D_4CE2_8482_97AFD671FD2F_Sections;
		}
		interface tab_MarginTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_MarginTab_Sections;
		}
		interface tab_ProductsAndServicesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ProductsAndServicesTab_Sections;
		}
		interface tab_ServiceTaskTab extends DevKit.Form.Controls.IControlTab {
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
			IncidentsGrid: DevKit.Form.Controls.ControlGrid;
			productsGrid: DevKit.Form.Controls.ControlGrid;
			ServicesGrid: DevKit.Form.Controls.ControlGrid;
			ServiceTasksGrid: DevKit.Form.Controls.ControlGrid;
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			msdyn_autogenerateworkorder: DevKit.Form.Controls.ControlBoolean;
			/** Type a description of this booking setup. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			msdyn_EstimatedCost: DevKit.Form.Controls.ControlMoney;
			/** The estimated margin for this Quote Booking Setup */
			msdyn_EstimatedMargin: DevKit.Form.Controls.ControlDecimal;
			msdyn_EstimatedMarginPerWO: DevKit.Form.Controls.ControlDecimal;
			/** Estimated Costs of all Products that are associated to this Quote Booking Setup */
			msdyn_EstimatedProductCost: DevKit.Form.Controls.ControlMoney;
			/** The sum of estimated revenue of all products that are associated to this quote booking setup */
			msdyn_EstimatedProductRevenue: DevKit.Form.Controls.ControlMoney;
			msdyn_EstimatedRevenue: DevKit.Form.Controls.ControlMoney;
			/** The Estimated Revenue per Work Order */
			msdyn_EstimatedRevenuePerWO: DevKit.Form.Controls.ControlMoney;
			/** The sum of the estimated costs of all quote booking services that are associated to this quote booking setup */
			msdyn_EstimatedServiceCost: DevKit.Form.Controls.ControlMoney;
			/** The sum of estimated revenue of all services that are associated to this quote booking setup */
			msdyn_EstimatedServiceRevenue: DevKit.Form.Controls.ControlMoney;
			/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Quote this Booking Setup relates to */
			msdyn_quote: DevKit.Form.Controls.ControlLookup;
			msdyn_QuoteDetailId: DevKit.Form.Controls.ControlString;
			/** Stores the booking recurrence settings. */
			msdyn_recurrencesettings: DevKit.Form.Controls.ControlString;
			msdyn_WorkLocation: DevKit.Form.Controls.ControlOptionSet;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_workordertype: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_quotebookingsetup_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotebookingsetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quotebookingsetup_Information */
		Body: LuckyMokey.Formmsdyn_quotebookingsetup_Information.Body;
		/** The Navigation of form msdyn_quotebookingsetup_Information */
		Navigation: LuckyMokey.Formmsdyn_quotebookingsetup_Information.Navigation;
	}
	namespace Formmsdyn_quotebookingsetup_Information {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Type a description of this booking setup. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_QuoteDetailId: DevKit.Form.Controls.ControlString;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_workordertype: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quotebookingsetup_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotebookingsetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quotebookingsetup_Information */
		Body: LuckyMokey.Formmsdyn_quotebookingsetup_Information.Body;
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
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
		msdyn_autogeneratebooking: DevKit.WebApi.BooleanValue;
		/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
		msdyn_autogenerateworkorder: DevKit.WebApi.BooleanValue;
		/** Type a description of this booking setup. */
		msdyn_description: DevKit.WebApi.StringValue;
		msdyn_EstimatedCost: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Cost in base currency. */
		msdyn_estimatedcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the duration of the booking. */
		msdyn_estimatedduration: DevKit.WebApi.IntegerValue;
		/** The estimated margin for this Quote Booking Setup */
		msdyn_EstimatedMargin: DevKit.WebApi.DecimalValue;
		msdyn_EstimatedMarginPerWO: DevKit.WebApi.DecimalValue;
		/** Estimated Costs of all Products that are associated to this Quote Booking Setup */
		msdyn_EstimatedProductCost: DevKit.WebApi.MoneyValue;
		/** Value of the EstimatedProductCost in base currency. */
		msdyn_estimatedproductcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The sum of estimated revenue of all products that are associated to this quote booking setup */
		msdyn_EstimatedProductRevenue: DevKit.WebApi.MoneyValue;
		/** Value of the EstimatedProductRevenue in base currency. */
		msdyn_estimatedproductrevenue_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstimatedRevenue: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Revenue in base currency. */
		msdyn_estimatedrevenue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The Estimated Revenue per Work Order */
		msdyn_EstimatedRevenuePerWO: DevKit.WebApi.MoneyValue;
		/** Value of the EstimatedRevenuePerWO in base currency. */
		msdyn_estimatedrevenueperwo_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The sum of the estimated costs of all quote booking services that are associated to this quote booking setup */
		msdyn_EstimatedServiceCost: DevKit.WebApi.MoneyValue;
		/** Value of the EstimatedServiceCost in base currency. */
		msdyn_estimatedservicecost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The sum of estimated revenue of all services that are associated to this quote booking setup */
		msdyn_EstimatedServiceRevenue: DevKit.WebApi.MoneyValue;
		/** Value of the EstimatedServiceRevenue in base currency. */
		msdyn_estimatedservicerevenue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
		msdyn_generateworkorderdaysinadvance: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		msdyn_Internalflags: DevKit.WebApi.StringValue;
		/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		msdyn_Margin: DevKit.WebApi.DecimalValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_NumberOfWO: DevKit.WebApi.IntegerValue;
		/** Shows the flexibility of days after the booking date. */
		msdyn_postbookingflexibility: DevKit.WebApi.IntegerValue;
		/** Shows the date until which Work Order generation can be postponed. Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
		msdyn_postponegenerationuntil_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** Shows the flexibility of days prior to the booking date. */
		msdyn_prebookingflexibility: DevKit.WebApi.IntegerValue;
		/** Preferred Resource to booked */
		msdyn_preferredresource: DevKit.WebApi.LookupValue;
		/** Shows the preferred time to booking. */
		msdyn_preferredstarttime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Booking Priority */
		msdyn_priority: DevKit.WebApi.LookupValue;
		/** Quote this Booking Setup relates to */
		msdyn_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_quotebookingsetupId: DevKit.WebApi.GuidValue;
		/** Relationship between Quote Detail and Quote Booking Setup */
		msdyn_quotedetail: DevKit.WebApi.LookupValue;
		msdyn_QuoteDetailId: DevKit.WebApi.StringValue;
		/** Stores the booking recurrence settings. */
		msdyn_recurrencesettings: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_revision: DevKit.WebApi.IntegerValue;
		/** Shows the time window up until when this can be booked. */
		msdyn_timewindowend_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the time window from when this can be booked. */
		msdyn_timewindowstart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_WorkLocation: DevKit.WebApi.OptionSetValue;
		/** Shows the work order summary to be set on the work orders generated. */
		msdyn_workordersummary: DevKit.WebApi.StringValue;
		/** Work Order Type to be used on generated Work Orders */
		msdyn_workordertype: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
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
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Quote Booking Setup */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Quote Booking Setup */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotebookingsetup {
		enum msdyn_WorkLocation {
			/** 690970000 */
			Onsite,
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic
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
//{'JsForm':['Information','Information','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
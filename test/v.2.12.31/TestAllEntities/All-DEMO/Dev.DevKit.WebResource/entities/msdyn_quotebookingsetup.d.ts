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
	}
	class Formmsdyn_quotebookingsetup_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotebookingsetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingsetup_Information */
		Body: DevKit.Formmsdyn_quotebookingsetup_Information.Body;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
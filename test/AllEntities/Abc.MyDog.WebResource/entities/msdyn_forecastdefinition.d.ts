//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_forecastdefinition_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Select the fiscal month for the forecast definition. */
			msdyn_fiscalmonth: DevKit.Controls.OptionSet;
			/** Select the fiscal quarter for the forecast definition. */
			msdyn_fiscalquarter: DevKit.Controls.OptionSet;
			/** Select the fiscal year for the forecast definition. */
			msdyn_fiscalyear: DevKit.Controls.OptionSet;
			/** Name of the forecast definition. */
			msdyn_forecastdefinitionname: DevKit.Controls.String;
			/** Select the type of period for which the forecast must be generated. */
			msdyn_forecastperiodtype: DevKit.Controls.OptionSet;
			/** Select metric to attach with forecast */
			msdyn_metricid: DevKit.Controls.Lookup;
			/** Indicate the number of recurrences that the forecast will be generated. */
			msdyn_numberofrecurrences: DevKit.Controls.Integer;
			/** Select whether the quota for the forecast must to be taken from a goal or entered manually. */
			msdyn_quotasource: DevKit.Controls.OptionSet;
			/** Select the query that will be used to calculate data for the rollup field. */
			msdyn_rollupquery: DevKit.Controls.Lookup;
			/** Shows the date from which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
			msdyn_validfrom: DevKit.Controls.Date;
			/** Shows the date till which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
			msdyn_validto: DevKit.Controls.Date;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_forecastdefinition_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_forecastdefinition_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_forecastdefinition_Information */
		Body: MyDog.Formmsdyn_forecastdefinition_Information.Body;
	}
	class msdyn_forecastdefinitionApi {
		/**
		* DynamicsCrm.DevKit msdyn_forecastdefinitionApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the fiscal month for the forecast definition. */
		msdyn_fiscalmonth: DevKit.WebApi.OptionSetValue;
		/** Select the fiscal quarter for the forecast definition. */
		msdyn_fiscalquarter: DevKit.WebApi.OptionSetValue;
		/** Select the fiscal year for the forecast definition. */
		msdyn_fiscalyear: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for the forecast definition. */
		msdyn_forecastdefinitionId: DevKit.WebApi.GuidValue;
		/** Name of the forecast definition. */
		msdyn_forecastdefinitionname: DevKit.WebApi.StringValue;
		/** Select the type of period for which the forecast must be generated. */
		msdyn_forecastperiodtype: DevKit.WebApi.OptionSetValue;
		/** Select metric to attach with forecast */
		msdyn_metricid: DevKit.WebApi.LookupValue;
		/** Indicate the number of recurrences that the forecast will be generated. */
		msdyn_numberofrecurrences: DevKit.WebApi.IntegerValue;
		/** Select whether the quota for the forecast must to be taken from a goal or entered manually. */
		msdyn_quotasource: DevKit.WebApi.OptionSetValue;
		/** Select the query that will be used to calculate data for the rollup field. */
		msdyn_rollupquery: DevKit.WebApi.LookupValue;
		/** Shows the date from which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
		msdyn_validfrom_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Shows the date till which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
		msdyn_validto_DateOnly: DevKit.WebApi.DateOnlyValue;
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
		/** Status of the Forecast Definition */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Forecast Definition */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_forecastdefinition {
		enum msdyn_fiscalmonth {
			/** 3 */
			April,
			/** 7 */
			August,
			/** 11 */
			December,
			/** 1 */
			February,
			/** 0 */
			January,
			/** 6 */
			July,
			/** 5 */
			June,
			/** 2 */
			March,
			/** 4 */
			May,
			/** 10 */
			November,
			/** 9 */
			October,
			/** 8 */
			September
		}
		enum msdyn_fiscalquarter {
			/** 0 */
			Q1,
			/** 1 */
			Q2,
			/** 2 */
			Q3,
			/** 3 */
			Q4
		}
		enum msdyn_fiscalyear {
			/** 0 */
			FY2018,
			/** 1 */
			FY2019,
			/** 2 */
			FY2020,
			/** 3 */
			FY2021,
			/** 4 */
			FY2022,
			/** 5 */
			FY2023,
			/** 6 */
			FY2024,
			/** 7 */
			FY2025,
			/** 8 */
			FY2026,
			/** 9 */
			FY2027,
			/** 10 */
			FY2028,
			/** 11 */
			FY2029,
			/** 12 */
			FY2030,
			/** 13 */
			FY2031,
			/** 14 */
			FY2032,
			/** 15 */
			FY2033,
			/** 16 */
			FY2034,
			/** 17 */
			FY2035,
			/** 18 */
			FY2036,
			/** 19 */
			FY2037,
			/** 20 */
			FY2038,
			/** 21 */
			FY2039,
			/** 22 */
			FY2040
		}
		enum msdyn_forecastperiodtype {
			/** 2 */
			Custom,
			/** 0 */
			Monthly,
			/** 1 */
			Quarterly
		}
		enum msdyn_quotasource {
			/** 192350000 */
			Goal_based,
			/** 192350001 */
			Manual
		}
		enum statecode {
			/** 0 */
			Draft,
			/** 1 */
			Published
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 4 */
			Failed,
			/** 2 */
			In_progress,
			/** 3 */
			Success
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
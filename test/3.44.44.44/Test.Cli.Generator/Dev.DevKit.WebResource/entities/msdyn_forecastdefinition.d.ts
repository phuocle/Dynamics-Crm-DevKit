//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		interface Navigation {
			msdyn_msdyn_forecastdefinition_msdyn_forecastinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_forecastdefinition_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_forecastdefinition_Information */
		Body: DevKit.Formmsdyn_forecastdefinition_Information.Body;
		/** The Navigation of form msdyn_forecastdefinition_Information */
		Navigation: DevKit.Formmsdyn_forecastdefinition_Information.Navigation;
		/** The SidePanes of form msdyn_forecastdefinition_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Select the fiscal month for the forecast definition. */
		msdyn_fiscalmonth: OptionSet.msdyn_forecastdefinition.msdyn_fiscalmonth;
		/** Select the fiscal quarter for the forecast definition. */
		msdyn_fiscalquarter: OptionSet.msdyn_forecastdefinition.msdyn_fiscalquarter;
		/** Select the fiscal year for the forecast definition. */
		msdyn_fiscalyear: OptionSet.msdyn_forecastdefinition.msdyn_fiscalyear;
		/** Unique identifier for the forecast definition. */
		msdyn_forecastdefinitionId: string;
		/** Name of the forecast definition. */
		msdyn_forecastdefinitionname: string;
		/** Select the type of period for which the forecast must be generated. */
		msdyn_forecastperiodtype: OptionSet.msdyn_forecastdefinition.msdyn_forecastperiodtype;
		/** Select metric to attach with forecast */
		msdyn_metricid: string;
		/** Indicate the number of recurrences that the forecast will be generated. */
		msdyn_numberofrecurrences: number;
		/** Select whether the quota for the forecast must to be taken from a goal or entered manually. */
		msdyn_quotasource: OptionSet.msdyn_forecastdefinition.msdyn_quotasource;
		/** Select the query that will be used to calculate data for the rollup field. */
		msdyn_rollupquery: string;
		/** Shows the date from which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
		msdyn_validfrom_DateOnly: Date;
		/** Shows the date till which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
		msdyn_validto_DateOnly: Date;
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
		/** Status of the Forecast Definition */
		statecode: OptionSet.msdyn_forecastdefinition.statecode;
		/** Reason for the status of the Forecast Definition */
		statuscode: OptionSet.msdyn_forecastdefinition.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Select the fiscal month for the forecast definition. */
			readonly msdyn_fiscalmonth: string;
			/** Select the fiscal quarter for the forecast definition. */
			readonly msdyn_fiscalquarter: string;
			/** Select the fiscal year for the forecast definition. */
			readonly msdyn_fiscalyear: string;
			/** Unique identifier for the forecast definition. */
			readonly msdyn_forecastdefinitionId: string;
			/** Name of the forecast definition. */
			readonly msdyn_forecastdefinitionname: string;
			/** Select the type of period for which the forecast must be generated. */
			readonly msdyn_forecastperiodtype: string;
			/** Select metric to attach with forecast */
			readonly msdyn_metricid: string;
			/** Indicate the number of recurrences that the forecast will be generated. */
			readonly msdyn_numberofrecurrences: string;
			/** Select whether the quota for the forecast must to be taken from a goal or entered manually. */
			readonly msdyn_quotasource: string;
			/** Select the query that will be used to calculate data for the rollup field. */
			readonly msdyn_rollupquery: string;
			/** Shows the date from which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
			readonly msdyn_validfrom_DateOnly: string;
			/** Shows the date till which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
			readonly msdyn_validto_DateOnly: string;
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
			/** Status of the Forecast Definition */
			readonly statecode: string;
			/** Reason for the status of the Forecast Definition */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
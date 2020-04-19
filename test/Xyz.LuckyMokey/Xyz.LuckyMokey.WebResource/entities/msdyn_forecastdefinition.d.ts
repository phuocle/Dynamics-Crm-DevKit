//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_forecastdefinition_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Select the fiscal month for the forecast definition. */
			msdyn_fiscalmonth: DevKit.Form.Controls.ControlOptionSet;
			/** Select the fiscal quarter for the forecast definition. */
			msdyn_fiscalquarter: DevKit.Form.Controls.ControlOptionSet;
			/** Select the fiscal year for the forecast definition. */
			msdyn_fiscalyear: DevKit.Form.Controls.ControlOptionSet;
			/** Name of the forecast definition. */
			msdyn_forecastdefinitionname: DevKit.Form.Controls.ControlString;
			/** Select the type of period for which the forecast must be generated. */
			msdyn_forecastperiodtype: DevKit.Form.Controls.ControlOptionSet;
			/** Select metric to attach with forecast */
			msdyn_metricid: DevKit.Form.Controls.ControlLookup;
			/** Indicate the number of recurrences that the forecast will be generated. */
			msdyn_numberofrecurrences: DevKit.Form.Controls.ControlInteger;
			/** Select whether the quota for the forecast must to be taken from a goal or entered manually. */
			msdyn_quotasource: DevKit.Form.Controls.ControlOptionSet;
			/** Select the query that will be used to calculate data for the rollup field. */
			msdyn_rollupquery: DevKit.Form.Controls.ControlLookup;
			/** Shows the date from which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
			msdyn_validfrom: DevKit.Form.Controls.ControlDate;
			/** Shows the date till which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
			msdyn_validto: DevKit.Form.Controls.ControlDate;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_forecastdefinition_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_forecastdefinition_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_forecastdefinition_Information */
		Body: LuckyMokey.Formmsdyn_forecastdefinition_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_forecastdefinition {
		enum msdyn_fiscalmonth {
			/** 0 */
			January,
			/** 1 */
			February,
			/** 2 */
			March,
			/** 3 */
			April,
			/** 4 */
			May,
			/** 5 */
			June,
			/** 6 */
			July,
			/** 7 */
			August,
			/** 8 */
			September,
			/** 9 */
			October,
			/** 10 */
			November,
			/** 11 */
			December
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
			/** 22 */
			FY2040,
			/** 21 */
			FY2039,
			/** 20 */
			FY2038,
			/** 19 */
			FY2037,
			/** 18 */
			FY2036,
			/** 17 */
			FY2035,
			/** 16 */
			FY2034,
			/** 15 */
			FY2033,
			/** 14 */
			FY2032,
			/** 13 */
			FY2031,
			/** 12 */
			FY2030,
			/** 11 */
			FY2029,
			/** 10 */
			FY2028,
			/** 9 */
			FY2027,
			/** 8 */
			FY2026,
			/** 7 */
			FY2025,
			/** 6 */
			FY2024,
			/** 5 */
			FY2023,
			/** 4 */
			FY2022,
			/** 3 */
			FY2021,
			/** 2 */
			FY2020,
			/** 1 */
			FY2019,
			/** 0 */
			FY2018
		}
		enum msdyn_forecastperiodtype {
			/** 0 */
			Monthly,
			/** 1 */
			Quarterly,
			/** 2 */
			Custom
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
			/** 2 */
			In_progress,
			/** 3 */
			Success,
			/** 4 */
			Failed
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
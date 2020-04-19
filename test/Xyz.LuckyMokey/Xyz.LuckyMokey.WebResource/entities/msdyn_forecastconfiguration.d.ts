//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_forecastconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_forecastconfiguration_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_forecastconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_forecastconfiguration_Information */
		Body: LuckyMokey.Formmsdyn_forecastconfiguration_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_forecastconfiguration {
		enum msdyn_periodtype {
			/** 0 */
			Monthly,
			/** 1 */
			Quarterly
		}
		enum msdyn_startingfiscalmonth {
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
		enum msdyn_startingfiscalquarter {
			/** 0 */
			Q1,
			/** 1 */
			Q2,
			/** 2 */
			Q3,
			/** 3 */
			Q4
		}
		enum msdyn_startingfiscalyear {
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
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 2 */
			In_progress,
			/** 3 */
			Active,
			/** 4 */
			Failed,
			/** 5 */
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
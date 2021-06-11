//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_invoicefrequency_Project_Information {
		interface tab__7D8DF25F_4CE4_4FF8_B464_8D31B36593DF_Sections {
			_7D8DF25F_4CE4_4FF8_B464_8D31B36593DF_SECTION_2: DevKit.Controls.Section;
			DetailsSection: DevKit.Controls.Section;
		}
		interface tab_InvoiceFrequencyDetails_Day_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_InvoiceFrequencyDetails_Weekday_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_InvoiceFrequencyDetails_Weekly_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab__7D8DF25F_4CE4_4FF8_B464_8D31B36593DF extends DevKit.Controls.ITab {
			Section: tab__7D8DF25F_4CE4_4FF8_B464_8D31B36593DF_Sections;
		}
		interface tab_InvoiceFrequencyDetails_Day extends DevKit.Controls.ITab {
			Section: tab_InvoiceFrequencyDetails_Day_Sections;
		}
		interface tab_InvoiceFrequencyDetails_Weekday extends DevKit.Controls.ITab {
			Section: tab_InvoiceFrequencyDetails_Weekday_Sections;
		}
		interface tab_InvoiceFrequencyDetails_Weekly extends DevKit.Controls.ITab {
			Section: tab_InvoiceFrequencyDetails_Weekly_Sections;
		}
		interface Tabs {
			_7D8DF25F_4CE4_4FF8_B464_8D31B36593DF: tab__7D8DF25F_4CE4_4FF8_B464_8D31B36593DF;
			InvoiceFrequencyDetails_Day: tab_InvoiceFrequencyDetails_Day;
			InvoiceFrequencyDetails_Weekday: tab_InvoiceFrequencyDetails_Weekday;
			InvoiceFrequencyDetails_Weekly: tab_InvoiceFrequencyDetails_Weekly;
		}
		interface Body {
			Tab: Tabs;
			/** Describes how the run days per period interval are setup. As weekdays (Monday, Tuesday...) or day of period (1st, 2nd…)  */
			msdyn_daysofrun: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Select the period used for the setup of invoice frequency: supported values are Monthly, Weekly or Bi Weekly. */
			msdyn_period: DevKit.Controls.OptionSet;
			/** Select the number of times invoicing should run in a period. */
			msdyn_runspermonth: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency: DevKit.Controls.NavigationItem
		}
		interface Grid {
			InvoiceFrequencyDetails_1_Grid: DevKit.Controls.Grid;
			InvoiceFrequencyDetails: DevKit.Controls.Grid;
			InvoiceFrequencyDetails_2_Grid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_invoicefrequency_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_invoicefrequency_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_invoicefrequency_Project_Information */
		Body: DevKit.Formmsdyn_invoicefrequency_Project_Information.Body;
		/** The Navigation of form msdyn_invoicefrequency_Project_Information */
		Navigation: DevKit.Formmsdyn_invoicefrequency_Project_Information.Navigation;
		/** The Grid of form msdyn_invoicefrequency_Project_Information */
		Grid: DevKit.Formmsdyn_invoicefrequency_Project_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_invoicefrequency {
		enum msdyn_daysofrun {
			/** 192350000 */
			Day_of_period,
			/** 192350001 */
			Weekday_of_period
		}
		enum msdyn_period {
			/** 192350002 */
			Biweekly,
			/** 192350001 */
			Monthly,
			/** 192350000 */
			Weekly
		}
		enum msdyn_runspermonth {
			/** 1 */
			_1,
			/** 2 */
			_2,
			/** 3 */
			_3,
			/** 4 */
			_4
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
//{'JsForm':['Project Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
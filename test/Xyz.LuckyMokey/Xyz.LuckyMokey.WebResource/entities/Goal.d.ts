//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormGoal_Information {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
		}
		interface tab__349A439D_6ED5_BAE8_7C7D_3721869367CA_Sections {
			_3A5C2DC2_2EE7_848C_83EB_A2B1E4D1C703: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab__242FCD83_2A50_478E_922A_F4641920DDE0_Sections {
			_8ECDE6CB_085B_46D1_97A9_E357C5799076: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab__349A439D_6ED5_BAE8_7C7D_3721869367CA extends DevKit.Form.Controls.IControlTab {
			Section: tab__349A439D_6ED5_BAE8_7C7D_3721869367CA_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface tab__242FCD83_2A50_478E_922A_F4641920DDE0 extends DevKit.Form.Controls.IControlTab {
			Section: tab__242FCD83_2A50_478E_922A_F4641920DDE0_Sections;
		}
		interface Tabs {
			general: tab_general;
			_349A439D_6ED5_BAE8_7C7D_3721869367CA: tab__349A439D_6ED5_BAE8_7C7D_3721869367CA;
			notes: tab_notes;
			_242FCD83_2A50_478E_922A_F4641920DDE0: tab__242FCD83_2A50_478E_922A_F4641920DDE0;
		}
		interface Body {
			Tab: Tabs;
			child_goals: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Shows the actual value (Decimal type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Decimal. */
			ActualDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the actual value (integer) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount or Count and the amount data type is Integer. */
			ActualInteger: DevKit.Form.Controls.ControlInteger;
			/** Shows the actual value (Money type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Money. */
			ActualMoney: DevKit.Form.Controls.ControlMoney;
			/** Select whether only the goal owner's records, or all records, should be rolled up for goal results. */
			ConsiderOnlyGoalOwnersRecords: DevKit.Form.Controls.ControlBoolean;
			/** Indicates a placeholder rollup field for a decimal value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Indicates a placeholder rollup field for an integer value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldInteger: DevKit.Form.Controls.ControlInteger;
			/** Indicates a placeholder rollup field for a money value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldMoney: DevKit.Form.Controls.ControlMoney;
			/** Select the fiscal period for the goal. */
			FiscalPeriod: DevKit.Form.Controls.ControlOptionSet;
			/** Select the fiscal year for the goal that's being tracked. */
			FiscalYear: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the date when the goal ends. */
			GoalEndDate: DevKit.Form.Controls.ControlDate;
			/** Choose the user or team responsible for meeting the goal. */
			GoalOwnerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date and time when the period for tracking the goal begins. */
			GoalStartDate: DevKit.Form.Controls.ControlDate;
			/** Shows the in-progress value (decimal) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the in-progress value (integer) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressInteger: DevKit.Form.Controls.ControlInteger;
			/** Shows the in-progress value (money) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressMoney: DevKit.Form.Controls.ControlMoney;
			/** Select whether the goal period is a fiscal period or custom period. */
			IsFiscalPeriodGoal: DevKit.Form.Controls.ControlBoolean;
			/** Shows the date and time when the goal was last rolled up. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			LastRolledupDate: DevKit.Form.Controls.ControlDateTime;
			/** Choose the metric for the goal. This metric determines how the goal is tracked. */
			MetricId: DevKit.Form.Controls.ControlLookup;
			participatingrecordcontrol: DevKit.Form.Controls.ControlActionCards;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Choose a parent goal if the current goal is a child goal. This sets up a parent-child relationship for reporting and analytics. */
			ParentGoalId: DevKit.Form.Controls.ControlLookup;
			/** Shows the percentage achieved against the target goal. */
			Percentage: DevKit.Form.Controls.ControlDecimal;
			/** Shows the percentage achieved against the target goal. */
			Percentage_1: DevKit.Form.Controls.ControlDecimal;
			/** Shows the percentage achieved against the target goal. */
			Percentage_2: DevKit.Form.Controls.ControlDecimal;
			/** Select whether the data should be rolled up only from the child goals. */
			RollupOnlyFromChildGoals: DevKit.Form.Controls.ControlBoolean;
			/** Choose the query that will be used to calculate the actual data for the goal (decimal). */
			RollUpQueryActualDecimalId: DevKit.Form.Controls.ControlLookup;
			/** Choose the query that will be used to calculate the actual data for the goal (integer). */
			RollupQueryActualIntegerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the query that will be used to calculate the actual data for the goal (money). */
			RollUpQueryActualMoneyId: DevKit.Form.Controls.ControlLookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (decimal). */
			RollUpQueryCustomDecimalId: DevKit.Form.Controls.ControlLookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (integer). */
			RollUpQueryCustomIntegerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (money). */
			RollUpQueryCustomMoneyId: DevKit.Form.Controls.ControlLookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (decimal). */
			RollUpQueryInprogressDecimalId: DevKit.Form.Controls.ControlLookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (integer). */
			RollUpQueryInprogressIntegerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (money). */
			RollUpQueryInprogressMoneyId: DevKit.Form.Controls.ControlLookup;
			/** Select a stretch target (decimal) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Select the stretch target (integer) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetInteger: DevKit.Form.Controls.ControlInteger;
			/** Select stretch target (money) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetMoney: DevKit.Form.Controls.ControlMoney;
			/** Select a goal target of the decimal type to use for tracking data that include partial numbers, such as pounds sold of a product sold by weight. */
			TargetDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Select a goal target of the integer type to use for tracking anything countable in whole numbers, such as units sold. */
			TargetInteger: DevKit.Form.Controls.ControlInteger;
			/** Select a goal target (money) to track a monetary amount such as revenue from a product. */
			TargetMoney: DevKit.Form.Controls.ControlMoney;
			/** Type a title or name that describes the goal. */
			Title: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Shows whether the goal is open, completed, or canceled. Completed and canceled goals are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormGoal_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Goal_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Goal_Information */
		Body: LuckyMokey.FormGoal_Information.Body;
		/** The Footer section of form Goal_Information */
		Footer: LuckyMokey.FormGoal_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace Goal {
		enum AmountDataType {
			/** 0 */
			Money,
			/** 1 */
			Decimal,
			/** 2 */
			Integer
		}
		enum FiscalPeriod {
			/** 1 */
			Quarter_1,
			/** 2 */
			Quarter_2,
			/** 3 */
			Quarter_3,
			/** 4 */
			Quarter_4,
			/** 101 */
			January,
			/** 102 */
			February,
			/** 103 */
			March,
			/** 104 */
			April,
			/** 105 */
			May,
			/** 106 */
			June,
			/** 107 */
			July,
			/** 108 */
			August,
			/** 109 */
			September,
			/** 110 */
			October,
			/** 111 */
			November,
			/** 112 */
			December,
			/** 201 */
			Semester_1,
			/** 202 */
			Semester_2,
			/** 301 */
			Annual,
			/** 401 */
			P1,
			/** 402 */
			P2,
			/** 403 */
			P3,
			/** 404 */
			P4,
			/** 405 */
			P5,
			/** 406 */
			P6,
			/** 407 */
			P7,
			/** 408 */
			P8,
			/** 409 */
			P9,
			/** 410 */
			P10,
			/** 411 */
			P11,
			/** 412 */
			P12,
			/** 413 */
			P13
		}
		enum FiscalYear {
			/** 2038 */
			FY2038,
			/** 2037 */
			FY2037,
			/** 2036 */
			FY2036,
			/** 2035 */
			FY2035,
			/** 2034 */
			FY2034,
			/** 2033 */
			FY2033,
			/** 2032 */
			FY2032,
			/** 2031 */
			FY2031,
			/** 2030 */
			FY2030,
			/** 2029 */
			FY2029,
			/** 2028 */
			FY2028,
			/** 2027 */
			FY2027,
			/** 2026 */
			FY2026,
			/** 2025 */
			FY2025,
			/** 2024 */
			FY2024,
			/** 2023 */
			FY2023,
			/** 2022 */
			FY2022,
			/** 2021 */
			FY2021,
			/** 2020 */
			FY2020,
			/** 2019 */
			FY2019,
			/** 2018 */
			FY2018,
			/** 2017 */
			FY2017,
			/** 2016 */
			FY2016,
			/** 2015 */
			FY2015,
			/** 2014 */
			FY2014,
			/** 2013 */
			FY2013,
			/** 2012 */
			FY2012,
			/** 2011 */
			FY2011,
			/** 2010 */
			FY2010,
			/** 2009 */
			FY2009,
			/** 2008 */
			FY2008,
			/** 2007 */
			FY2007,
			/** 2006 */
			FY2006,
			/** 2005 */
			FY2005,
			/** 2004 */
			FY2004,
			/** 2003 */
			FY2003,
			/** 2002 */
			FY2002,
			/** 2001 */
			FY2001,
			/** 2000 */
			FY2000,
			/** 1999 */
			FY1999,
			/** 1998 */
			FY1998,
			/** 1997 */
			FY1997,
			/** 1996 */
			FY1996,
			/** 1995 */
			FY1995,
			/** 1994 */
			FY1994,
			/** 1993 */
			FY1993,
			/** 1992 */
			FY1992,
			/** 1991 */
			FY1991,
			/** 1990 */
			FY1990,
			/** 1989 */
			FY1989,
			/** 1988 */
			FY1988,
			/** 1987 */
			FY1987,
			/** 1986 */
			FY1986,
			/** 1985 */
			FY1985,
			/** 1984 */
			FY1984,
			/** 1983 */
			FY1983,
			/** 1982 */
			FY1982,
			/** 1981 */
			FY1981,
			/** 1980 */
			FY1980,
			/** 1979 */
			FY1979,
			/** 1978 */
			FY1978,
			/** 1977 */
			FY1977,
			/** 1976 */
			FY1976,
			/** 1975 */
			FY1975,
			/** 1974 */
			FY1974,
			/** 1973 */
			FY1973,
			/** 1972 */
			FY1972,
			/** 1971 */
			FY1971,
			/** 1970 */
			FY1970
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 0 */
			Open,
			/** 1 */
			Closed,
			/** 2 */
			Discarded
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
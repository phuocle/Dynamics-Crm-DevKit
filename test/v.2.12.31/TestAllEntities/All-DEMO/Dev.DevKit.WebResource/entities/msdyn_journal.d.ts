//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_journal_Information {
		interface tab__89B13559_B90E_4EAA_A6BE_47E4EBB36524_Sections {
			_89B13559_B90E_4EAA_A6BE_47E4EBB36524_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_ExpenseCorrectionsTab_Sections {
			ExpenseCorrectionParameters: DevKit.Controls.Section;
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_JounalLinesTab_Sections {
			JournalLinesSection: DevKit.Controls.Section;
		}
		interface tab_TimeEntryCorrectionsTab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			TimeEntryCorrectionParameters: DevKit.Controls.Section;
		}
		interface tab__89B13559_B90E_4EAA_A6BE_47E4EBB36524 extends DevKit.Controls.ITab {
			Section: tab__89B13559_B90E_4EAA_A6BE_47E4EBB36524_Sections;
		}
		interface tab_ExpenseCorrectionsTab extends DevKit.Controls.ITab {
			Section: tab_ExpenseCorrectionsTab_Sections;
		}
		interface tab_JounalLinesTab extends DevKit.Controls.ITab {
			Section: tab_JounalLinesTab_Sections;
		}
		interface tab_TimeEntryCorrectionsTab extends DevKit.Controls.ITab {
			Section: tab_TimeEntryCorrectionsTab_Sections;
		}
		interface Tabs {
			_89B13559_B90E_4EAA_A6BE_47E4EBB36524: tab__89B13559_B90E_4EAA_A6BE_47E4EBB36524;
			ExpenseCorrectionsTab: tab_ExpenseCorrectionsTab;
			JounalLinesTab: tab_JounalLinesTab;
			TimeEntryCorrectionsTab: tab_TimeEntryCorrectionsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Bookable Resource */
			msdyn_BookableResource: DevKit.Controls.Lookup;
			/** Bookable Resource */
			msdyn_BookableResource_1: DevKit.Controls.Lookup;
			/** Time Entry Date */
			msdyn_Date: DevKit.Controls.Date;
			/** The name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Expense Category */
			msdyn_ExpenseCategory: DevKit.Controls.Lookup;
			/** Shows if the journal has been submitted. */
			msdyn_IsPosted: DevKit.Controls.Boolean;
			/** The type of the journal. */
			msdyn_JournalType: DevKit.Controls.OptionSet;
			/** Project */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Project */
			msdyn_Project_1: DevKit.Controls.Lookup;
			/** Project Task */
			msdyn_ProjectTask: DevKit.Controls.Lookup;
			/** Resource Role */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Expense Date */
			msdyn_TransactionDate: DevKit.Controls.Date;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Journal */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Grid {
			TimeEntries: DevKit.Controls.Grid;
			Expenses: DevKit.Controls.Grid;
			JournalLinesGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_journal_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_journal_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_journal_Information */
		Body: DevKit.Formmsdyn_journal_Information.Body;
		/** The Grid of form msdyn_journal_Information */
		Grid: DevKit.Formmsdyn_journal_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_journal {
		enum msdyn_JournalType {
			/** 192350000 */
			Entry,
			/** 192350002 */
			Expense_Correction,
			/** 192350001 */
			Time_Correction
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
			/** 192350000 */
			Draft_Adjustment,
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
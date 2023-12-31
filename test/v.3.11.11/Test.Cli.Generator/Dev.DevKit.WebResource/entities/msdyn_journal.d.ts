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
			msdyn_BookableResource1: DevKit.Controls.Lookup;
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
			msdyn_Project1: DevKit.Controls.Lookup;
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
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Expenses: DevKit.Controls.Grid;
			JournalLinesGrid: DevKit.Controls.Grid;
			TimeEntries: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_journal_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_journal_Information */
		Body: DevKit.Formmsdyn_journal_Information.Body;
		/** The Process of form msdyn_journal_Information */
		Process: DevKit.Formmsdyn_journal_Information.Process;
		/** The Grid of form msdyn_journal_Information */
		Grid: DevKit.Formmsdyn_journal_Information.Grid;
		/** The SidePanes of form msdyn_journal_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_journalApi {
		/**
		* DynamicsCrm.DevKit msdyn_journalApi
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
		/** Bookable Resource */
		msdyn_BookableResource: string;
		/** Time Entry Date */
		msdyn_Date_UtcDateOnly: Date;
		msdyn_DefaultProject: string;
		/** The name of the custom entity. */
		msdyn_description: string;
		/** Expense Category */
		msdyn_ExpenseCategory: string;
		/** Shows if the journal has been submitted. */
		msdyn_IsPosted: boolean;
		/** Unique identifier for entity instances */
		msdyn_journalId: string;
		/** The type of the journal. */
		msdyn_JournalType: OptionSet.msdyn_journal.msdyn_JournalType;
		/** Project */
		msdyn_Project: string;
		/** Project Task */
		msdyn_ProjectTask: string;
		/** Resource Role */
		msdyn_ResourceCategory: string;
		/** Expense Date */
		msdyn_TransactionDate_UtcDateOnly: Date;
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
		/** Status of the Journal */
		statecode: OptionSet.msdyn_journal.statecode;
		/** Reason for the status of the Journal */
		statuscode: OptionSet.msdyn_journal.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Bookable Resource */
			readonly msdyn_BookableResource: string;
			/** Time Entry Date */
			readonly msdyn_Date_UtcDateOnly: string;
			readonly msdyn_DefaultProject: string;
			/** The name of the custom entity. */
			readonly msdyn_description: string;
			/** Expense Category */
			readonly msdyn_ExpenseCategory: string;
			/** Shows if the journal has been submitted. */
			readonly msdyn_IsPosted: string;
			/** Unique identifier for entity instances */
			readonly msdyn_journalId: string;
			/** The type of the journal. */
			readonly msdyn_JournalType: string;
			/** Project */
			readonly msdyn_Project: string;
			/** Project Task */
			readonly msdyn_ProjectTask: string;
			/** Resource Role */
			readonly msdyn_ResourceCategory: string;
			/** Expense Date */
			readonly msdyn_TransactionDate_UtcDateOnly: string;
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
			/** Status of the Journal */
			readonly statecode: string;
			/** Reason for the status of the Journal */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
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
	namespace msdyn_journal {
		enum msdyn_JournalType {
			/** 192350000 */
			Entry,
			/** 192350002 */
			Expense_Correction,
			/** 192350001 */
			Time_Correction
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCategory {
		interface tab_AssociatedCategories_Sections {
			Associated_Categories: DevKit.Controls.Section;
		}
		interface tab_AssociatedCategories extends DevKit.Controls.ITab {
			Section: tab_AssociatedCategories_Sections;
		}
		interface Tabs {
			AssociatedCategories: tab_AssociatedCategories;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the category number for customer reference. */
			CategoryNumber: DevKit.Controls.String;
			/** Type a detailed description of the category */
			Description: DevKit.Controls.String;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Type a title for the Category. */
			Title: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			AssociatedCategoriesGrid: DevKit.Controls.Grid;
		}
	}
	class FormCategory extends DevKit.IForm {
		/**
		* Category [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Category */
		Body: DevKit.FormCategory.Body;
		/** The Process of form Category */
		Process: DevKit.FormCategory.Process;
		/** The Grid of form Category */
		Grid: DevKit.FormCategory.Grid;
		/** The SidePanes of form Category */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCategory_Main_Interactive {
		interface Tabs {
		}
		interface Body {
			/** Type a detailed description of the category */
			Description: DevKit.Controls.String;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Type a title for the Category. */
			Title: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormCategory_Main_Interactive extends DevKit.IForm {
		/**
		* Category Main Interactive [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Category_Main_Interactive */
		Body: DevKit.FormCategory_Main_Interactive.Body;
		/** The Process of form Category_Main_Interactive */
		Process: DevKit.FormCategory_Main_Interactive.Process;
		/** The SidePanes of form Category_Main_Interactive */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCategory_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the category number for customer reference. */
			CategoryNumber: DevKit.Controls.String;
			/** Type a detailed description of the category */
			Description: DevKit.Controls.String;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Type a title for the Category. */
			Title: DevKit.Controls.String;
		}
	}
	class FormCategory_Quick_Create extends DevKit.IForm {
		/**
		* Category Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Category_Quick_Create */
		Body: DevKit.FormCategory_Quick_Create.Body;
	}
	class CategoryApi {
		/**
		* DynamicsCrm.DevKit CategoryApi
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
		/** Shows the category. */
		CategoryId: string;
		/** Shows the category number for customer reference. */
		CategoryNumber: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Type a detailed description of the category */
		Description: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the category. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns this category. */
		readonly OwningUser: string;
		/** Select an existing category article for the category. */
		ParentCategoryId: string;
		/** Enter a number to define the display position of the category in the hierarchy. */
		SequenceNumber: number;
		/** Type a title for the Category. */
		Title: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace Category {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
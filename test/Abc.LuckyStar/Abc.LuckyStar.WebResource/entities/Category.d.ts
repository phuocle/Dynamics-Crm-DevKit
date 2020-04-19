//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormCategory {
		interface tab_AssociatedCategories_Sections {
			Associated_Categories: DevKit.Form.Controls.ControlSection;
		}
		interface tab_AssociatedCategories extends DevKit.Form.Controls.IControlTab {
			Section: tab_AssociatedCategories_Sections;
		}
		interface Tabs {
			AssociatedCategories: tab_AssociatedCategories;
		}
		interface Body {
			Tab: Tabs;
			AssociatedCategoriesGrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the category number for customer reference. */
			CategoryNumber: DevKit.Form.Controls.ControlString;
			/** Type a detailed description of the category */
			Description: DevKit.Form.Controls.ControlString;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Form.Controls.ControlLookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Form.Controls.ControlInteger;
			/** Type a title for the Category. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCategory extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Category
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Category */
		Body: LuckyStar.FormCategory.Body;
	}
	namespace FormCategory_Main_Interactive {
		interface Tabs {
		}
		interface Body {
			/** Type a detailed description of the category */
			Description: DevKit.Form.Controls.ControlString;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Form.Controls.ControlLookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Form.Controls.ControlInteger;
			/** Type a title for the Category. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCategory_Main_Interactive extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Category_Main_Interactive
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Category_Main_Interactive */
		Body: LuckyStar.FormCategory_Main_Interactive.Body;
	}
	namespace FormCategory_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the category number for customer reference. */
			CategoryNumber: DevKit.Form.Controls.ControlString;
			/** Type a detailed description of the category */
			Description: DevKit.Form.Controls.ControlString;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Form.Controls.ControlLookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Form.Controls.ControlInteger;
			/** Type a title for the Category. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCategory_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Category_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Category_Quick_Create */
		Body: LuckyStar.FormCategory_Quick_Create.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows the category. */
		CategoryId: DevKit.WebApi.GuidValue;
		/** Shows the category number for customer reference. */
		CategoryNumber: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a detailed description of the category */
		Description: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the category. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns this category. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select an existing category article for the category. */
		ParentCategoryId: DevKit.WebApi.LookupValue;
		/** Enter a number to define the display position of the category in the hierarchy. */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type a title for the Category. */
		Title: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Category','Category Main Interactive','Category Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
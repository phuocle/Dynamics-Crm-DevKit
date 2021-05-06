//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAzure_Account {
		interface tab__C8071FB9_2A55_4559_93CD_357478050384_Sections {
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__C8071FB9_2A55_4559_93CD_357478050384 extends DevKit.Controls.ITab {
			Section: tab__C8071FB9_2A55_4559_93CD_357478050384_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			_C8071FB9_2A55_4559_93CD_357478050384: tab__C8071FB9_2A55_4559_93CD_357478050384;
			tab_3: tab_tab_3;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			devkit_AccountId: DevKit.Controls.Lookup;
			devkit_AzureAccountType: DevKit.Controls.Integer;
			devkit_Category: DevKit.Controls.OptionSet;
			devkit_City: DevKit.Controls.String;
			devkit_ContactId: DevKit.Controls.Lookup;
			devkit_CreatedOn: DevKit.Controls.DateTime;
			devkit_ModifiedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			devkit_name: DevKit.Controls.String;
			devkit_Price: DevKit.Controls.Decimal;
			devkit_Surface: DevKit.Controls.Double;
			/** The primary email address for the entity. */
			EmailAddress: DevKit.Controls.String;
		}
		interface quickForm_ACCOUNT_Body {
			AccountCategoryCode: DevKit.Controls.QuickView;
			AccountNumber: DevKit.Controls.QuickView;
		}
		interface quickForm_ACCOUNT extends DevKit.Controls.IQuickView {
			Body: quickForm_ACCOUNT_Body;
		}
		interface QuickForm {
			ACCOUNT: quickForm_ACCOUNT;
		}
	}
	class FormAzure_Account extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Azure_Account
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Azure_Account */
		Body: DevKit.FormAzure_Account.Body;
		/** The QuickForm of form Azure_Account */
		QuickForm: DevKit.FormAzure_Account.QuickForm;
	}
	class devkit_AzureAccountApi {
		/**
		* DynamicsCrm.DevKit devkit_AzureAccountApi
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
		devkit_AccountId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		devkit_AzureAccountId: DevKit.WebApi.GuidValue;
		devkit_AzureAccountType: DevKit.WebApi.IntegerValue;
		devkit_Category: DevKit.WebApi.OptionSetValue;
		devkit_City: DevKit.WebApi.StringValue;
		devkit_ContactId: DevKit.WebApi.LookupValue;
		devkit_CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		devkit_ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The name of the custom entity. */
		devkit_name: DevKit.WebApi.StringValue;
		devkit_Price: DevKit.WebApi.DecimalValue;
		devkit_Surface: DevKit.WebApi.DoubleValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace devkit_AzureAccount {
		enum devkit_Category {
			/** 1 */
			Organization,
			/** 2 */
			Owner
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
//{'JsForm':['Azure Account'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
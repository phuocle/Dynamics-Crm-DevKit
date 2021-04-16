//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormAzure_Account {
		interface tab__C8071FB9_2A55_4559_93CD_357478050384_Sections {
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__C8071FB9_2A55_4559_93CD_357478050384 extends DevKit.Form.Controls.IControlTab {
			Section: tab__C8071FB9_2A55_4559_93CD_357478050384_Sections;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			_C8071FB9_2A55_4559_93CD_357478050384: tab__C8071FB9_2A55_4559_93CD_357478050384;
			tab_3: tab_tab_3;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			ACCOUNT: DevKit.Form.Controls.ControlQuickView;
			devkit_AzureAccountType: DevKit.Form.Controls.ControlInteger;
			devkit_Category: DevKit.Form.Controls.ControlOptionSet;
			devkit_City: DevKit.Form.Controls.ControlString;
			devkit_CreatedOn: DevKit.Form.Controls.ControlDateTime;
			devkit_ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** The name of the custom entity. */
			devkit_name: DevKit.Form.Controls.ControlString;
			devkit_Price: DevKit.Form.Controls.ControlDecimal;
			devkit_Surface: DevKit.Form.Controls.ControlDouble;
			/** The primary email address for the entity. */
			EmailAddress: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAzure_Account extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Azure_Account
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Azure_Account */
		Body: MyDog.FormAzure_Account.Body;
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
//{'JsForm':['Azure Account'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}
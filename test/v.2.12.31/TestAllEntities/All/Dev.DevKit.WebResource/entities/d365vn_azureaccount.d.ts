//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAzure_Account {
		interface Header extends DevKit.Controls.IHeader {
			d365vn_AccountId: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			d365vn_AccountId: DevKit.Controls.Lookup;
			d365vn_CategoryCode: DevKit.Controls.OptionSet;
			d365vn_City: DevKit.Controls.String;
			d365vn_CreatedOn: DevKit.Controls.DateTime;
			d365vn_ModifiedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			d365vn_name: DevKit.Controls.String;
			d365vn_Price: DevKit.Controls.Decimal;
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
		/** The Header section of form Azure_Account */
		Header: DevKit.FormAzure_Account.Header;
	}
	class d365vn_azureaccountApi {
		/**
		* DynamicsCrm.DevKit d365vn_azureaccountApi
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
		d365vn_AccountId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		d365vn_azureaccountId: DevKit.WebApi.GuidValue;
		d365vn_CategoryCode: DevKit.WebApi.OptionSetValue;
		d365vn_City: DevKit.WebApi.StringValue;
		d365vn_CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		d365vn_ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The name of the custom entity. */
		d365vn_name: DevKit.WebApi.StringValue;
		d365vn_Price: DevKit.WebApi.DecimalValue;
	}
}
declare namespace OptionSet {
	namespace d365vn_azureaccount {
		enum d365vn_CategoryCode {
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
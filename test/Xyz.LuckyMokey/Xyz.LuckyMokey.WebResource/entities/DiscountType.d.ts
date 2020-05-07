//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormDiscountType_Information {
		interface tab_general_Sections {
			discount_type_information: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the discount list. */
			Description: DevKit.Form.Controls.ControlString;
			/** Information about whether the discount list amounts are specified as monetary amounts or percentages. */
			IsAmountType: DevKit.Form.Controls.ControlBoolean;
			/** Name of the discount list. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the currency associated with the discount type. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the discount list. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormDiscountType_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form DiscountType_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form DiscountType_Information */
		Body: LuckyMokey.FormDiscountType_Information.Body;
		/** The Footer section of form DiscountType_Information */
		Footer: LuckyMokey.FormDiscountType_Information.Footer;
	}
	class DiscountTypeApi {
		/**
		* DynamicsCrm.DevKit DiscountTypeApi
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
		/** Unique identifier of the user who created the discount list. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the discount list was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the discounttype. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the discount list. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the discount list. */
		DiscountTypeId: DevKit.WebApi.GuidValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information about whether the discount list amounts are specified as monetary amounts or percentages. */
		IsAmountType: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the discount list. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the discount list was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the discounttype. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the discount list. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the discount list. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the discount list. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the discount type. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DiscountType {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 100001 */
			Active,
			/** 100002 */
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
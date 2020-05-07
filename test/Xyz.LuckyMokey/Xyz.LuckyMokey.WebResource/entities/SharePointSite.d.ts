//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSharePointSite_Information {
		interface tab_general_Sections {
			section_1: DevKit.Form.Controls.ControlSection;
			url_option: DevKit.Form.Controls.ControlSection;
			url_validation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Absolute URL of the SharePoint site. */
			AbsoluteURL: DevKit.Form.Controls.ControlString;
			/** Description of the SharePoint site record. */
			Description: DevKit.Form.Controls.ControlString;
			/** Indicates if SharePoint Grid is present or not. */
			IsGridPresent: DevKit.Form.Controls.ControlBoolean;
			/** Allows embedding of Power BI Reports available in this SharePoint site. */
			IsPowerBISite: DevKit.Form.Controls.ControlBoolean;
			/** Date and time when the SharePoint site URL was last validated. */
			LastValidated: DevKit.Form.Controls.ControlDateTime;
			/** Name of the SharePoint site record. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the SharePoint site. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the parent SharePoint site. */
			ParentSite: DevKit.Form.Controls.ControlLookup;
			/** Relative URL of the SharePoint site. */
			RelativeUrl: DevKit.Form.Controls.ControlString;
			/** Validation status of the SharePoint site URL. */
			ValidationStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for validation status of the URL */
			ValidationStatusErrorCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Footer {
			/** Status of the SharePoint site record. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navSharePointSubSites: DevKit.Form.Controls.ControlNavigationItem,
			navSubDocumentLocations: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormSharePointSite_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form SharePointSite_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SharePointSite_Information */
		Body: LuckyMokey.FormSharePointSite_Information.Body;
		/** The Footer section of form SharePointSite_Information */
		Footer: LuckyMokey.FormSharePointSite_Information.Footer;
		/** The Navigation of form SharePointSite_Information */
		Navigation: LuckyMokey.FormSharePointSite_Information.Navigation;
	}
	class SharePointSiteApi {
		/**
		* DynamicsCrm.DevKit SharePointSiteApi
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
		/** Absolute URL of the SharePoint site. */
		AbsoluteURL: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the SharePoint site record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SharePoint site record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the SharePoint site record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the SharePoint site record. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate between the currency associated with the SharePoint site record and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Indicates whether the SharePoint site is the default site or not. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Indicates if SharePoint Grid is present or not. */
		IsGridPresent: DevKit.WebApi.BooleanValue;
		/** Allows embedding of Power BI Reports available in this SharePoint site. */
		IsPowerBISite: DevKit.WebApi.BooleanValue;
		/** Date and time when the SharePoint site URL was last validated. */
		LastValidated_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who last modified the SharePoint site record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SharePoint site record was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the SharePoint site record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the SharePoint site record. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the document location record. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the SharePoint site record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the SharePoint site record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the parent SharePoint site. */
		ParentSite: DevKit.WebApi.LookupValue;
		/** Relative URL of the SharePoint site. */
		RelativeUrl: DevKit.WebApi.StringValue;
		/** Shows the service type of location of the SharePoint site. */
		ServiceType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the SharePoint site in Dynamics 365 */
		SharePointSiteId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SiteCollectionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the SharePoint site record. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the SharePoint site record. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the SharePoint site record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Choose the user who owns the SharePoint site. */
		UserId: DevKit.WebApi.GuidValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Validation status of the SharePoint site URL. */
		ValidationStatus: DevKit.WebApi.OptionSetValue;
		/** Reason for validation status of the URL */
		ValidationStatusErrorCode: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SharePointSite {
		enum ServiceType {
			/** 0 */
			SharePoint,
			/** 1 */
			OneDrive,
			/** 2 */
			Shared_with_me,
			/** 3 */
			MS_Teams
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum ValidationStatus {
			/** 1 */
			Not_Validated,
			/** 2 */
			In_Progress,
			/** 3 */
			Invalid,
			/** 4 */
			Valid,
			/** 5 */
			Could_not_validate
		}
		enum ValidationStatusErrorCode {
			/** 1 */
			This_records_URL_has_not_been_validated,
			/** 2 */
			This_records_URL_is_valid,
			/** 3 */
			This_records_URL_is_not_valid,
			/** 4 */
			The_URL_schemes_of_Microsoft_Dynamics_365_and_SharePoint_are_different,
			/** 5 */
			The_URL_could_not_be_accessed_because_of_Internet_Explorer_security_settings,
			/** 6 */
			Authentication_failure,
			/** 7 */
			Invalid_certificates
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
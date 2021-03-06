﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormExternalParty_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the external party status */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Contains the value that is used to detect and avoid duplicate external party records. */
			CorrelationKey: DevKit.Controls.String;
			/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
			EmailAddress: DevKit.Controls.String;
			/** Type the full name of the external party. */
			FullName: DevKit.Controls.String;
			/** Shows the date when the external party was last disabled on. */
			LastDisabledOn: DevKit.Controls.Date;
			/** Shows the date when the external party was last enabled on. */
			LastEnabledOn: DevKit.Controls.Date;
		}
		interface Grid {
			externalPartyItemsGrid: DevKit.Controls.Grid;
		}
	}
	class FormExternalParty_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form ExternalParty_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ExternalParty_Information */
		Body: DevKit.FormExternalParty_Information.Body;
		/** The Header section of form ExternalParty_Information */
		Header: DevKit.FormExternalParty_Information.Header;
		/** The Grid of form ExternalParty_Information */
		Grid: DevKit.FormExternalParty_Information.Grid;
	}
	class ExternalPartyApi {
		/**
		* DynamicsCrm.DevKit ExternalPartyApi
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
		/** Contains the value that is used to detect and avoid duplicate external party records. */
		CorrelationKey: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier for entity instances */
		ExternalPartyId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the External Party used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		ExternalPartyIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Type the external party's first name. */
		FirstName: DevKit.WebApi.StringValue;
		/** Type the full name of the external party. */
		FullName: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows the date when the external party was last disabled on. */
		LastDisabledOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the date when the external party was last enabled on. */
		LastEnabledOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the external party's last name. */
		LastName: DevKit.WebApi.StringValue;
		/** Type the external party's middle name. */
		MiddleName: DevKit.WebApi.StringValue;
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
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the external party is enabled or disabled */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the external party status */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Type of the external party. */
		Type: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Type the phonetic spelling of the external party's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party.. */
		YomiFirstName: DevKit.WebApi.StringValue;
		/** Shows the combined Yomi first and last names of the external party so that the full phonetic name can be displayed in views and reports. */
		YomiFullName: DevKit.WebApi.StringValueReadonly;
		/** Type the phonetic spelling of the external party's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party. */
		YomiLastName: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the external party's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiMiddleName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ExternalParty {
		enum StateCode {
			/** 1 */
			Disabled,
			/** 0 */
			Enabled
		}
		enum StatusCode {
			/** 2 */
			Disabled,
			/** 1 */
			Enabled
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
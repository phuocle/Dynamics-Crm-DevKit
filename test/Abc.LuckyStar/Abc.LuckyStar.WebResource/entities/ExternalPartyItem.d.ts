//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormExternalPartyItem_Information {
		interface Header {
			/** Select the external party items status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Choose the channel access profile that's used to determine the permissions when CRM is accessed from an external channel. */
			ChannelAccessProfileId: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type the external party record that this item is created for. */
			ExternalPartyId: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the external party item was last disabled for external channel access. */
			LastDisabledOn: DevKit.Form.Controls.ControlDate;
			/** Shows the date and time when the external party item was last enabled for external channel access. */
			LastEnabledOn: DevKit.Form.Controls.ControlDate;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type the name of the external party item. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the external party enabled record that is associated with this external party item. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormExternalPartyItem_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ExternalPartyItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ExternalPartyItem_Information */
		Body: LuckyStar.FormExternalPartyItem_Information.Body;
		/** The Header section of form ExternalPartyItem_Information */
		Header: LuckyStar.FormExternalPartyItem_Information.Header;
	}
	class ExternalPartyItemApi {
		/**
		* DynamicsCrm.DevKit ExternalPartyItemApi
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
		/** Choose the channel access profile that's used to determine the permissions when CRM is accessed from an external channel. */
		ChannelAccessProfileId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the external party item with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type the external party record that this item is created for. */
		ExternalPartyId: DevKit.WebApi.LookupValue;
		/** Unique identifier for external party instances */
		ExternalPartyItemId: DevKit.WebApi.GuidValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Shows the date and time when the external party item was last disabled for external channel access. */
		LastDisabledOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the date and time when the external party item was last enabled for external channel access. */
		LastEnabledOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the name of the external party item. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the external party enabled record that is associated with this external party item. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Choose the external party enabled record that is associated with this external party item. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
		RegardingObjectIdDsc: DevKit.WebApi.IntegerValue;
		/** Shows the name of the regarding object. */
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Shows whether the external party item is enabled or disabled. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the external party items status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Exchange rate for the currency associated with the ExternalPartyItem with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ExternalPartyItem {
		enum StateCode {
			/** 0 */
			Enabled,
			/** 1 */
			Disabled
		}
		enum StatusCode {
			/** 1 */
			Enabled,
			/** 2 */
			Disabled
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormExternalPartyItem_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the external party items status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Choose the channel access profile that's used to determine the permissions when CRM is accessed from an external channel. */
			ChannelAccessProfileId: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type the external party record that this item is created for. */
			ExternalPartyId: DevKit.Controls.Lookup;
			/** Shows the date and time when the external party item was last disabled for external channel access. */
			LastDisabledOn: DevKit.Controls.Date;
			/** Shows the date and time when the external party item was last enabled for external channel access. */
			LastEnabledOn: DevKit.Controls.Date;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type the name of the external party item. */
			Name: DevKit.Controls.String;
			/** Choose the external party enabled record that is associated with this external party item. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormExternalPartyItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ExternalPartyItem_Information */
		Body: DevKit.FormExternalPartyItem_Information.Body;
		/** The Header section of form ExternalPartyItem_Information */
		Header: DevKit.FormExternalPartyItem_Information.Header;
		/** The Process of form ExternalPartyItem_Information */
		Process: DevKit.FormExternalPartyItem_Information.Process;
		/** The SidePanes of form ExternalPartyItem_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Choose the external party enabled record that is associated with this external party item. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Choose the external party enabled record that is associated with this external party item. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
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
			LastDisabledOn: DevKit.Controls.DateOnly;
			/** Shows the date and time when the external party item was last enabled for external channel access. */
			LastEnabledOn: DevKit.Controls.DateOnly;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type the name of the external party item. */
			Name: DevKit.Controls.String;
			/** Choose the external party enabled record that is associated with this external party item. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
	}
	export class FormExternalPartyItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form ExternalPartyItem_Information */
		Body: DevKit.FormExternalPartyItem_Information.Body;
		/** The Header section of form ExternalPartyItem_Information */
		Header: DevKit.FormExternalPartyItem_Information.Header;
	}
	export class ExternalPartyItemApi {
		/**
		* DynamicsCrm.DevKit ExternalPartyItemApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Choose the channel access profile that's used to determine the permissions when CRM is accessed from an external channel. */
		ChannelAccessProfileId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Exchange rate for the currency associated with the external party item with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Type the external party record that this item is created for. */
		ExternalPartyId: string | null;
		/** Unique identifier for external party instances */
		ExternalPartyItemId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string | null;
		/** Shows the date and time when the external party item was last disabled for external channel access. */
		LastDisabledOn_UtcDateOnly: Date | null;
		/** Shows the date and time when the external party item was last enabled for external channel access. */
		LastEnabledOn_UtcDateOnly: Date | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type the name of the external party item. */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows whether the external party item is enabled or disabled. */
		StateCode: OptionSet.ExternalPartyItem.StateCode | null;
		/** Select the external party items status. */
		StatusCode: OptionSet.ExternalPartyItem.StatusCode | null;
		/** Exchange rate for the currency associated with the ExternalPartyItem with respect to the base currency. */
		TransactionCurrencyId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Choose the channel access profile that's used to determine the permissions when CRM is accessed from an external channel. */
			readonly ChannelAccessProfileId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the external party item with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Type the external party record that this item is created for. */
			readonly ExternalPartyId: string;
			/** Unique identifier for external party instances */
			readonly ExternalPartyItemId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the similarity rule is introduced. */
			readonly IntroducedVersion: string;
			/** Shows the date and time when the external party item was last disabled for external channel access. */
			readonly LastDisabledOn_UtcDateOnly: string;
			/** Shows the date and time when the external party item was last enabled for external channel access. */
			readonly LastEnabledOn_UtcDateOnly: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Type the name of the external party item. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows whether the external party item is enabled or disabled. */
			readonly StateCode: string;
			/** Select the external party items status. */
			readonly StatusCode: string;
			/** Exchange rate for the currency associated with the ExternalPartyItem with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExternalPartyItem {
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Disabled = 1*/
			Disabled = 1,
			/** Enabled = 0*/
			Enabled = 0
		}
		enum StatusCode {
			/** Disabled = 2*/
			Disabled = 2,
			/** Enabled = 1*/
			Enabled = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
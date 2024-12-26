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
		interface Navigation {

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
		/** The Navigation of form ExternalPartyItem_Information */
		Navigation: DevKit.FormExternalPartyItem_Information.Navigation;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Choose the channel access profile that's used to determine the permissions when CRM is accessed from an external channel. */
		ChannelAccessProfileId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the external party item with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Type the external party record that this item is created for. */
		ExternalPartyId: string;
		/** Unique identifier for external party instances */
		ExternalPartyItemId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string;
		/** Shows the date and time when the external party item was last disabled for external channel access. */
		LastDisabledOn_UtcDateOnly: Date;
		/** Shows the date and time when the external party item was last enabled for external channel access. */
		LastEnabledOn_UtcDateOnly: Date;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type the name of the external party item. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Choose the external party enabled record that is associated with this external party item. */
		regardingobjectid_contact: string;
		/** Choose the external party enabled record that is associated with this external party item. */
		regardingobjectid_systemuser: string;
		/** Shows whether the external party item is enabled or disabled. */
		StateCode: OptionSet.ExternalPartyItem.StateCode;
		/** Select the external party items status. */
		StatusCode: OptionSet.ExternalPartyItem.StatusCode;
		/** Exchange rate for the currency associated with the ExternalPartyItem with respect to the base currency. */
		TransactionCurrencyId: string;
		readonly VersionNumber: number;
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
			/** Choose the external party enabled record that is associated with this external party item. */
			readonly regardingobjectid_contact: string;
			/** Choose the external party enabled record that is associated with this external party item. */
			readonly regardingobjectid_systemuser: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
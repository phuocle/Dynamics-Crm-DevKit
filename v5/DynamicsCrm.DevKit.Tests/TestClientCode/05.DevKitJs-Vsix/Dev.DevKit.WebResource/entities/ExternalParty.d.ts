//@ts-check
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
			LastDisabledOn: DevKit.Controls.DateOnly;
			/** Shows the date when the external party was last enabled on. */
			LastEnabledOn: DevKit.Controls.DateOnly;
		}
		interface Grid {
			/** Associated External Party Items */
			externalPartyItemsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormExternalParty_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form ExternalParty_Information */
		Body: DevKit.FormExternalParty_Information.Body;
		/** The Header section of form ExternalParty_Information */
		Header: DevKit.FormExternalParty_Information.Header;
		/** The Grid of form ExternalParty_Information */
		Grid: DevKit.FormExternalParty_Information.Grid;
	}
	export class ExternalPartyApi {
		/**
		* DynamicsCrm.DevKit ExternalPartyApi
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
		/** Contains the value that is used to detect and avoid duplicate external party records. */
		CorrelationKey: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
		EmailAddress: string | null;
		/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier for entity instances */
		ExternalPartyId: string | null;
		/** Unique identifier of the External Party used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly ExternalPartyIdUnique: string | null;
		/** Type the external party's first name. */
		FirstName: string | null;
		/** Type the full name of the external party. */
		FullName: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Shows the date when the external party was last disabled on. */
		LastDisabledOn_UtcDateOnly: Date | null;
		/** Shows the date when the external party was last enabled on. */
		LastEnabledOn_UtcDateOnly: Date | null;
		/** Type the external party's last name. */
		LastName: string | null;
		/** Type the external party's middle name. */
		MiddleName: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Shows whether the external party is enabled or disabled */
		StateCode: OptionSet.ExternalParty.StateCode | null;
		/** Select the external party status */
		StatusCode: OptionSet.ExternalParty.StatusCode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
		TransactionCurrencyId: string | null;
		/** Type of the external party. */
		Type: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/** Type the phonetic spelling of the external party's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party.. */
		YomiFirstName: string | null;
		/** Shows the combined Yomi first and last names of the external party so that the full phonetic name can be displayed in views and reports. */
		readonly YomiFullName: string | null;
		/** Type the phonetic spelling of the external party's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party. */
		YomiLastName: string | null;
		/** Type the phonetic spelling of the external party's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiMiddleName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Contains the value that is used to detect and avoid duplicate external party records. */
			readonly CorrelationKey: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
			readonly EmailAddress: string;
			/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Unique identifier for entity instances */
			readonly ExternalPartyId: string;
			/** Unique identifier of the External Party used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly ExternalPartyIdUnique: string;
			/** Type the external party's first name. */
			readonly FirstName: string;
			/** Type the full name of the external party. */
			readonly FullName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows the date when the external party was last disabled on. */
			readonly LastDisabledOn_UtcDateOnly: string;
			/** Shows the date when the external party was last enabled on. */
			readonly LastEnabledOn_UtcDateOnly: string;
			/** Type the external party's last name. */
			readonly LastName: string;
			/** Type the external party's middle name. */
			readonly MiddleName: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Shows whether the external party is enabled or disabled */
			readonly StateCode: string;
			/** Select the external party status */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Type of the external party. */
			readonly Type: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Type the phonetic spelling of the external party's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party.. */
			readonly YomiFirstName: string;
			/** Shows the combined Yomi first and last names of the external party so that the full phonetic name can be displayed in views and reports. */
			readonly YomiFullName: string;
			/** Type the phonetic spelling of the external party's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party. */
			readonly YomiLastName: string;
			/** Type the phonetic spelling of the external party's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
			readonly YomiMiddleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExternalParty {
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
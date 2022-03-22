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
			LastDisabledOn: DevKit.Controls.Date;
			/** Shows the date when the external party was last enabled on. */
			LastEnabledOn: DevKit.Controls.Date;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			externalPartyItemsGrid: DevKit.Controls.Grid;
		}
	}
	class FormExternalParty_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
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
		/** The Process of form ExternalParty_Information */
		Process: DevKit.FormExternalParty_Information.Process;
		/** The Grid of form ExternalParty_Information */
		Grid: DevKit.FormExternalParty_Information.Grid;
		/** The SidePanes of form ExternalParty_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Contains the value that is used to detect and avoid duplicate external party records. */
		CorrelationKey: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
		EmailAddress: string;
		/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Unique identifier for entity instances */
		ExternalPartyId: string;
		/** Unique identifier of the External Party used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly ExternalPartyIdUnique: string;
		/** Type the external party's first name. */
		FirstName: string;
		/** Type the full name of the external party. */
		FullName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows the date when the external party was last disabled on. */
		LastDisabledOn_UtcDateOnly: Date;
		/** Shows the date when the external party was last enabled on. */
		LastEnabledOn_UtcDateOnly: Date;
		/** Type the external party's last name. */
		LastName: string;
		/** Type the external party's middle name. */
		MiddleName: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Shows whether the external party is enabled or disabled */
		StateCode: OptionSet.ExternalParty.StateCode;
		/** Select the external party status */
		StatusCode: OptionSet.ExternalParty.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Type of the external party. */
		Type: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Type the phonetic spelling of the external party's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party.. */
		YomiFirstName: string;
		/** Shows the combined Yomi first and last names of the external party so that the full phonetic name can be displayed in views and reports. */
		readonly YomiFullName: string;
		/** Type the phonetic spelling of the external party's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party. */
		YomiLastName: string;
		/** Type the phonetic spelling of the external party's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiMiddleName: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
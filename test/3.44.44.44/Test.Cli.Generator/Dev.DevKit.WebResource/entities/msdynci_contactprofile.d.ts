//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynci_contactprofile_Information {
		interface Tabs {
		}
		interface Body {
			/** Identifier */
			msdynci_identifier: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdynci_contactprofile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynci_contactprofile_Information */
		Body: DevKit.Formmsdynci_contactprofile_Information.Body;
		/** The Navigation of form msdynci_contactprofile_Information */
		Navigation: DevKit.Formmsdynci_contactprofile_Information.Navigation;
		/** The SidePanes of form msdynci_contactprofile_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynci_contactprofileApi {
		/**
		* DynamicsCrm.DevKit msdynci_contactprofileApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** BirthDate */
		msdynci_birthdate_UtcDateAndTime: Date;
		/** City */
		msdynci_city: string;
		/** ContactId */
		msdynci_contactid: string;
		/** Unique identifier for entity instances */
		msdynci_contactprofileId: string;
		/** CountryOrRegion */
		msdynci_countryorregion: string;
		/** CustomerId */
		msdynci_customerid: string;
		/** EntityName */
		msdynci_entityname: string;
		/** FirstName */
		msdynci_firstname: string;
		/** Gender */
		msdynci_gender: string;
		/** Id */
		msdynci_id: string;
		/** Identifier */
		msdynci_identifier: string;
		/** JobTitle */
		msdynci_jobtitle: string;
		/** LastName */
		msdynci_lastname: string;
		msdynci_lookupfield_customer: string;
		/** PostalCode */
		msdynci_postalcode: string;
		/** PrimaryEmail */
		msdynci_primaryemail: string;
		/** PrimaryPhone */
		msdynci_primaryphone: string;
		/** SourceId */
		msdynci_sourceid: string;
		/** StateOrProvince */
		msdynci_stateorprovince: string;
		/** StreetAddress */
		msdynci_streetaddress: string;
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
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** BirthDate */
			readonly msdynci_birthdate_UtcDateAndTime: string;
			/** City */
			readonly msdynci_city: string;
			/** ContactId */
			readonly msdynci_contactid: string;
			/** Unique identifier for entity instances */
			readonly msdynci_contactprofileId: string;
			/** CountryOrRegion */
			readonly msdynci_countryorregion: string;
			/** CustomerId */
			readonly msdynci_customerid: string;
			/** EntityName */
			readonly msdynci_entityname: string;
			/** FirstName */
			readonly msdynci_firstname: string;
			/** Gender */
			readonly msdynci_gender: string;
			/** Id */
			readonly msdynci_id: string;
			/** Identifier */
			readonly msdynci_identifier: string;
			/** JobTitle */
			readonly msdynci_jobtitle: string;
			/** LastName */
			readonly msdynci_lastname: string;
			readonly msdynci_lookupfield_customer: string;
			/** PostalCode */
			readonly msdynci_postalcode: string;
			/** PrimaryEmail */
			readonly msdynci_primaryemail: string;
			/** PrimaryPhone */
			readonly msdynci_primaryphone: string;
			/** SourceId */
			readonly msdynci_sourceid: string;
			/** StateOrProvince */
			readonly msdynci_stateorprovince: string;
			/** StreetAddress */
			readonly msdynci_streetaddress: string;
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
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynci_contactprofile {
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
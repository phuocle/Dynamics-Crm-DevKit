//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCXP_Authenticated_Business_Unit_Aware_Domain_Form {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Name of aligned (envelope-from) domain */
			msdynmkt_alignedname: DevKit.Controls.String;
			msdynmkt_businessunitowned: DevKit.Controls.Boolean;
			/** Host of envelope-from DNS record */
			msdynmkt_domainalignmentrecordhost: DevKit.Controls.String;
			/** Type of DNS record for envelope-from domain */
			msdynmkt_domainalignmentrecordtype: DevKit.Controls.String;
			/** Value of envelope-from DNS record */
			msdynmkt_domainalignmentrecordvalue: DevKit.Controls.String;
			/** Envelope-from domain validation status */
			msdynmkt_domainalignmentvalidationstatus: DevKit.Controls.OptionSet;
			/** Email dns record 1 status */
			msdynmkt_emaildnsrecord1status: DevKit.Controls.OptionSet;
			/** Email dns record 2 status */
			msdynmkt_emaildnsrecord2status: DevKit.Controls.OptionSet;
			/** The email DNS record 1 host */
			msdynmkt_emailhost1: DevKit.Controls.String;
			/** The email DNS record 2 host */
			msdynmkt_emailhost2: DevKit.Controls.String;
			/** Value of email key 1 */
			msdynmkt_emailkey1: DevKit.Controls.String;
			/** Value of email key 2 */
			msdynmkt_emailkey2: DevKit.Controls.String;
			/** Type of DNS email 1 record */
			msdynmkt_emailtyperecord1: DevKit.Controls.String;
			/** Type of DNS email 2 record */
			msdynmkt_emailtyperecord2: DevKit.Controls.String;
			/** Enable envelope-from domain and generate envelope-from domain keys */
			msdynmkt_generatedomainalignmentkeys: DevKit.Controls.Boolean;
			/** Enable for email sending (generate email keys) */
			msdynmkt_generateemailkeys: DevKit.Controls.Boolean;
			/** Enable for form hosting */
			msdynmkt_generateformkeys: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** The key of the DNS record for domain ownership */
			msdynmkt_ownershiprecordkey: DevKit.Controls.String;
			/** The DNS record type for domain ownership */
			msdynmkt_ownershiprecordtype: DevKit.Controls.String;
			/** Ownership validation status */
			msdynmkt_ownershipvalidationstatus: DevKit.Controls.OptionSet;
			/** Internal field for tracking progress of entity configuration via wizard */
			msdynmkt_stepwizardprogress: DevKit.Controls.String;
			/** The date when DNS registration was last confirmed */
			msdynmkt_validationdate: DevKit.Controls.Date;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Status of the Domain */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Domain */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormCXP_Authenticated_Business_Unit_Aware_Domain_Form extends DevKit.IForm {
		/**
		* CXP Authenticated Business Unit Aware Domain Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CXP_Authenticated_Business_Unit_Aware_Domain_Form */
		Body: DevKit.FormCXP_Authenticated_Business_Unit_Aware_Domain_Form.Body;
		/** The Navigation of form CXP_Authenticated_Business_Unit_Aware_Domain_Form */
		Navigation: DevKit.FormCXP_Authenticated_Business_Unit_Aware_Domain_Form.Navigation;
		/** The SidePanes of form CXP_Authenticated_Business_Unit_Aware_Domain_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_domainApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_domainApi
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
		/** Name of aligned (envelope-from) domain */
		msdynmkt_alignedname: string;
		msdynmkt_businessunitowned: boolean;
		/** Host of envelope-from DNS record */
		msdynmkt_domainalignmentrecordhost: string;
		/** Type of DNS record for envelope-from domain */
		msdynmkt_domainalignmentrecordtype: string;
		/** Value of envelope-from DNS record */
		msdynmkt_domainalignmentrecordvalue: string;
		/** Envelope-from domain validation status */
		msdynmkt_domainalignmentvalidationstatus: OptionSet.msdynmkt_domain.msdynmkt_domainalignmentvalidationstatus;
		/** Unique identifier for entity instances */
		msdynmkt_domainId: string;
		/** Email dns record 1 status */
		msdynmkt_emaildnsrecord1status: OptionSet.msdynmkt_domain.msdynmkt_emaildnsrecord1status;
		/** Email dns record 2 status */
		msdynmkt_emaildnsrecord2status: OptionSet.msdynmkt_domain.msdynmkt_emaildnsrecord2status;
		/** The email DNS record 1 host */
		msdynmkt_emailhost1: string;
		/** The email DNS record 2 host */
		msdynmkt_emailhost2: string;
		/** Value of email key 1 */
		msdynmkt_emailkey1: string;
		/** Value of email key 2 */
		msdynmkt_emailkey2: string;
		/** Type of DNS email 1 record */
		msdynmkt_emailtyperecord1: string;
		/** Type of DNS email 2 record */
		msdynmkt_emailtyperecord2: string;
		/** Enable envelope-from domain and generate envelope-from domain keys */
		msdynmkt_generatedomainalignmentkeys: boolean;
		/** Enable for email sending (generate email keys) */
		msdynmkt_generateemailkeys: boolean;
		/** Enable for form hosting */
		msdynmkt_generateformkeys: boolean;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Prefill outbound marketing forms */
		msdynmkt_obmprefillenabled: boolean;
		/** The key of the DNS record for domain ownership */
		msdynmkt_ownershiprecordkey: string;
		/** The DNS record type for domain ownership */
		msdynmkt_ownershiprecordtype: string;
		/** Ownership validation status */
		msdynmkt_ownershipvalidationstatus: OptionSet.msdynmkt_domain.msdynmkt_ownershipvalidationstatus;
		/** Prefill marketing forms */
		msdynmkt_rtmprefillenabled: boolean;
		/** Internal field for tracking progress of entity configuration via wizard */
		msdynmkt_stepwizardprogress: string;
		/** The date when DNS registration was last confirmed */
		msdynmkt_validationdate_UtcDateOnly: Date;
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
		/** Status of the Domain */
		statecode: OptionSet.msdynmkt_domain.statecode;
		/** Reason for the status of the Domain */
		statuscode: OptionSet.msdynmkt_domain.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
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
			/** Name of aligned (envelope-from) domain */
			readonly msdynmkt_alignedname: string;
			readonly msdynmkt_businessunitowned: string;
			/** Host of envelope-from DNS record */
			readonly msdynmkt_domainalignmentrecordhost: string;
			/** Type of DNS record for envelope-from domain */
			readonly msdynmkt_domainalignmentrecordtype: string;
			/** Value of envelope-from DNS record */
			readonly msdynmkt_domainalignmentrecordvalue: string;
			/** Envelope-from domain validation status */
			readonly msdynmkt_domainalignmentvalidationstatus: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_domainId: string;
			/** Email dns record 1 status */
			readonly msdynmkt_emaildnsrecord1status: string;
			/** Email dns record 2 status */
			readonly msdynmkt_emaildnsrecord2status: string;
			/** The email DNS record 1 host */
			readonly msdynmkt_emailhost1: string;
			/** The email DNS record 2 host */
			readonly msdynmkt_emailhost2: string;
			/** Value of email key 1 */
			readonly msdynmkt_emailkey1: string;
			/** Value of email key 2 */
			readonly msdynmkt_emailkey2: string;
			/** Type of DNS email 1 record */
			readonly msdynmkt_emailtyperecord1: string;
			/** Type of DNS email 2 record */
			readonly msdynmkt_emailtyperecord2: string;
			/** Enable envelope-from domain and generate envelope-from domain keys */
			readonly msdynmkt_generatedomainalignmentkeys: string;
			/** Enable for email sending (generate email keys) */
			readonly msdynmkt_generateemailkeys: string;
			/** Enable for form hosting */
			readonly msdynmkt_generateformkeys: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Prefill outbound marketing forms */
			readonly msdynmkt_obmprefillenabled: string;
			/** The key of the DNS record for domain ownership */
			readonly msdynmkt_ownershiprecordkey: string;
			/** The DNS record type for domain ownership */
			readonly msdynmkt_ownershiprecordtype: string;
			/** Ownership validation status */
			readonly msdynmkt_ownershipvalidationstatus: string;
			/** Prefill marketing forms */
			readonly msdynmkt_rtmprefillenabled: string;
			/** Internal field for tracking progress of entity configuration via wizard */
			readonly msdynmkt_stepwizardprogress: string;
			/** The date when DNS registration was last confirmed */
			readonly msdynmkt_validationdate_UtcDateOnly: string;
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
			/** Status of the Domain */
			readonly statecode: string;
			/** Reason for the status of the Domain */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_domain {
		enum msdynmkt_domainalignmentvalidationstatus {
			/** 2 */
			canceled,
			/** 1 */
			Confirmed,
			/** 4 */
			Confirming_DNS_registration,
			/** 32 */
			Internal_error,
			/** 30 */
			Keys_not_found_on_DNS,
			/** 3 */
			Not_requested,
			/** 31 */
			Record_not_found,
			/** 0 */
			Waiting_to_confirm
		}
		enum msdynmkt_emaildnsrecord1status {
			/** 2 */
			canceled,
			/** 1 */
			Confirmed,
			/** 4 */
			Confirming_DNS_registration,
			/** 32 */
			Internal_error,
			/** 30 */
			Keys_not_found_on_DNS,
			/** 3 */
			Not_requested,
			/** 31 */
			Record_not_found,
			/** 0 */
			Waiting_to_confirm
		}
		enum msdynmkt_emaildnsrecord2status {
			/** 2 */
			canceled,
			/** 1 */
			Confirmed,
			/** 4 */
			Confirming_DNS_registration,
			/** 32 */
			Internal_error,
			/** 30 */
			Keys_not_found_on_DNS,
			/** 3 */
			Not_requested,
			/** 31 */
			Record_not_found,
			/** 0 */
			Waiting_to_confirm
		}
		enum msdynmkt_ownershipvalidationstatus {
			/** 2 */
			canceled,
			/** 1 */
			Confirmed,
			/** 4 */
			Confirming_DNS_registration,
			/** 32 */
			Internal_error,
			/** 30 */
			Keys_not_found_on_DNS,
			/** 3 */
			Not_requested,
			/** 31 */
			Record_not_found,
			/** 0 */
			Waiting_to_confirm
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
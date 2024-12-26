//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_virtualdomain_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_virtualdomain_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_virtualdomain_Information */
		Body: DevKit.Formmsdynmkt_virtualdomain_Information.Body;
		/** The Navigation of form msdynmkt_virtualdomain_Information */
		Navigation: DevKit.Formmsdynmkt_virtualdomain_Information.Navigation;
		/** The SidePanes of form msdynmkt_virtualdomain_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_virtualdomainApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_virtualdomainApi
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
		/** Name of aligned (envelope-from) domain */
		msdynmkt_alignedname: string;
		msdynmkt_businessunitowned: boolean;
		/** Unique identifier of the user who created the record. */
		msdynmkt_createdby: string;
		/** Date and time when the record was created. */
		msdynmkt_createdon_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		msdynmkt_createdonbehalfby: string;
		/** Host of envelope-from DNS record */
		msdynmkt_domainalignmentrecordhost: string;
		/** Type of DNS record for envelope-from domain */
		msdynmkt_domainalignmentrecordtype: string;
		/** Value of envelope-from DNS record */
		msdynmkt_domainalignmentrecordvalue: string;
		/** Envelope-from domain validation status */
		msdynmkt_domainalignmentvalidationstatus: OptionSet.msdynmkt_virtualdomain.msdynmkt_domainalignmentvalidationstatus;
		/** Email dns record 1 status */
		msdynmkt_emaildnsrecord1status: OptionSet.msdynmkt_virtualdomain.msdynmkt_emaildnsrecord1status;
		/** Email dns record 2 status */
		msdynmkt_emaildnsrecord2status: OptionSet.msdynmkt_virtualdomain.msdynmkt_emaildnsrecord2status;
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
		/** Unique identifier of the user who modified the record. */
		msdynmkt_modifiedby: string;
		/** Date and time when the record was modified. */
		msdynmkt_modifiedon_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		msdynmkt_modifiedonbehalfby: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Prefill outbound marketing forms */
		msdynmkt_ombprefillenabled: boolean;
		/** The key of the DNS record for domain ownership */
		msdynmkt_ownershiprecordkey: string;
		/** The DNS record type for domain ownership */
		msdynmkt_ownershiprecordtype: string;
		/** Ownership validation status */
		msdynmkt_ownershipvalidationstatus: OptionSet.msdynmkt_virtualdomain.msdynmkt_ownershipvalidationstatus;
		/** Unique identifier for the business unit that owns the record */
		msdynmkt_owningbusinessunit: string;
		/** Prefill marketing forms */
		msdynmkt_rtmprefillenabled: boolean;
		/** Id of the source domain entity */
		msdynmkt_sourceentityId: string;
		/** Type of the source domain entity */
		msdynmkt_sourceentitytype: string;
		/** The date when DNS registration was last confirmed */
		msdynmkt_validationdate_UtcDateOnly: Date;
		/** Unique identifier for entity instances */
		msdynmkt_virtualdomainId: string;
		readonly FormattedValue: {
			/** Name of aligned (envelope-from) domain */
			readonly msdynmkt_alignedname: string;
			readonly msdynmkt_businessunitowned: string;
			/** Unique identifier of the user who created the record. */
			readonly msdynmkt_createdby: string;
			/** Date and time when the record was created. */
			readonly msdynmkt_createdon_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly msdynmkt_createdonbehalfby: string;
			/** Host of envelope-from DNS record */
			readonly msdynmkt_domainalignmentrecordhost: string;
			/** Type of DNS record for envelope-from domain */
			readonly msdynmkt_domainalignmentrecordtype: string;
			/** Value of envelope-from DNS record */
			readonly msdynmkt_domainalignmentrecordvalue: string;
			/** Envelope-from domain validation status */
			readonly msdynmkt_domainalignmentvalidationstatus: string;
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
			/** Unique identifier of the user who modified the record. */
			readonly msdynmkt_modifiedby: string;
			/** Date and time when the record was modified. */
			readonly msdynmkt_modifiedon_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly msdynmkt_modifiedonbehalfby: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Prefill outbound marketing forms */
			readonly msdynmkt_ombprefillenabled: string;
			/** The key of the DNS record for domain ownership */
			readonly msdynmkt_ownershiprecordkey: string;
			/** The DNS record type for domain ownership */
			readonly msdynmkt_ownershiprecordtype: string;
			/** Ownership validation status */
			readonly msdynmkt_ownershipvalidationstatus: string;
			/** Unique identifier for the business unit that owns the record */
			readonly msdynmkt_owningbusinessunit: string;
			/** Prefill marketing forms */
			readonly msdynmkt_rtmprefillenabled: string;
			/** Id of the source domain entity */
			readonly msdynmkt_sourceentityId: string;
			/** Type of the source domain entity */
			readonly msdynmkt_sourceentitytype: string;
			/** The date when DNS registration was last confirmed */
			readonly msdynmkt_validationdate_UtcDateOnly: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_virtualdomainId: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_virtualdomain {
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
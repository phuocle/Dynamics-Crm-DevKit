//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCXP_Authenticated_Domain_Form {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who created the record */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			/** Unique identifier of the user who modified the record */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyncrm_alignedname: DevKit.Controls.String;
			/** Envelope-from domain required flag */
			msdyncrm_domainalignmentrequired: DevKit.Controls.Boolean;
			/** Envelope-from domain validation status */
			msdyncrm_domainalignmentvalidationstatus: DevKit.Controls.OptionSet;
			/** Instructions for CNAME Host field */
			msdyncrm_domalignrechost: DevKit.Controls.String;
			/** the dns record type for Envelope-from domain */
			msdyncrm_domalignrectype: DevKit.Controls.String;
			/** the value of the dns record for Envelope-from domain */
			msdyncrm_domalignrecvalue: DevKit.Controls.String;
			/** The email DNS record 1 host */
			msdyncrm_emailhost1: DevKit.Controls.String;
			/** The email DNS record 2 host */
			msdyncrm_emailhost2: DevKit.Controls.String;
			/** Value of email key 1 */
			msdyncrm_emailkey1: DevKit.Controls.String;
			/** Value of email key 1 */
			msdyncrm_emailkey2: DevKit.Controls.String;
			/** Email keys validation status */
			msdyncrm_emailkeysvalidationstatus: DevKit.Controls.OptionSet;
			/** The email DNS record 1 type */
			msdyncrm_emailtyperecord1: DevKit.Controls.String;
			/** The email DNS record 2 type */
			msdyncrm_emailtyperecord2: DevKit.Controls.String;
			/** Enable custom Envelope-from domain - generate Envelope-from domain keys */
			msdyncrm_generatedomainalignmentkeys: DevKit.Controls.Boolean;
			/** Enable for email sending (generate email keys) */
			msdyncrm_generateemailkeys: DevKit.Controls.Boolean;
			/** Enable for form hosting */
			msdyncrm_generateformkeys: DevKit.Controls.Boolean;
			/** How-to for system admin */
			msdyncrm_instructions: DevKit.Controls.String;
			/** How to for system admin */
			msdyncrm_ipinstructions: DevKit.Controls.String;
			/** How to for system admin. */
			msdyncrm_ipslist: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Prefill outbound marketing forms */
			msdyncrm_obmprefillenabled: DevKit.Controls.Boolean;
			/** Ownership validation status */
			msdyncrm_ownershipvalidationstatus: DevKit.Controls.OptionSet;
			/** Prefill marketing forms */
			msdyncrm_rtmprefillenabled: DevKit.Controls.Boolean;
			/** Host */
			msdyncrm_txthostinstructions: DevKit.Controls.String;
			/** The key of the DNS record for domain ownership */
			msdyncrm_txtkey: DevKit.Controls.String;
			/** The DNS record type for domain ownership */
			msdyncrm_txttyperecord: DevKit.Controls.String;
			/** The date when DNS registration was last confirmed */
			msdyncrm_validationdate: DevKit.Controls.Date;
			/** Email dns record 1 status */
			msdynmkt_emaildnsrecord1status: DevKit.Controls.OptionSet;
			/** Email dns record 2 status */
			msdynmkt_emaildnsrecord2status: DevKit.Controls.OptionSet;
			/** Internal field for tracking progress of entity configuration via wizard */
			msdynmkt_StepWizardProgress: DevKit.Controls.String;
			/** Status of the domain */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the domain */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_msdyncrm_setupdomain_msdyncrm_defaultmarketingsetting_DefaultSetupDomain: DevKit.Controls.NavigationItem
		}
	}
	class FormCXP_Authenticated_Domain_Form extends DevKit.IForm {
		/**
		* CXP Authenticated Domain Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CXP_Authenticated_Domain_Form */
		Body: DevKit.FormCXP_Authenticated_Domain_Form.Body;
		/** The Navigation of form CXP_Authenticated_Domain_Form */
		Navigation: DevKit.FormCXP_Authenticated_Domain_Form.Navigation;
		/** The SidePanes of form CXP_Authenticated_Domain_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_setupdomainApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_setupdomainApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		msdyncrm_alignedname: string;
		/** Envelope-from domain required flag */
		msdyncrm_domainalignmentrequired: boolean;
		/** Envelope-from domain validation status */
		msdyncrm_domainalignmentvalidationstatus: OptionSet.msdyncrm_setupdomain.msdyncrm_domainalignmentvalidationstatus;
		/** Instructions for CNAME Host field */
		msdyncrm_domalignrechost: string;
		/** the dns record type for Envelope-from domain */
		msdyncrm_domalignrectype: string;
		/** the value of the dns record for Envelope-from domain */
		msdyncrm_domalignrecvalue: string;
		/** The email DNS record 1 host */
		msdyncrm_emailhost1: string;
		/** The email DNS record 2 host */
		msdyncrm_emailhost2: string;
		/** Value of email key 1 */
		msdyncrm_emailkey1: string;
		/** Value of email key 1 */
		msdyncrm_emailkey2: string;
		/** Email keys validation status */
		msdyncrm_emailkeysvalidationstatus: OptionSet.msdyncrm_setupdomain.msdyncrm_emailkeysvalidationstatus;
		/** The email DNS record 1 type */
		msdyncrm_emailtyperecord1: string;
		/** The email DNS record 2 type */
		msdyncrm_emailtyperecord2: string;
		/** Enable custom Envelope-from domain - generate Envelope-from domain keys */
		msdyncrm_generatedomainalignmentkeys: boolean;
		/** Enable for email sending (generate email keys) */
		msdyncrm_generateemailkeys: boolean;
		/** Enable for form hosting */
		msdyncrm_generateformkeys: boolean;
		/** How-to for system admin */
		msdyncrm_instructions: string;
		/** How to for system admin */
		msdyncrm_ipinstructions: string;
		/** How to for system admin. */
		msdyncrm_ipslist: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** Prefill outbound marketing forms */
		msdyncrm_obmprefillenabled: boolean;
		/** Ownership validation status */
		msdyncrm_ownershipvalidationstatus: OptionSet.msdyncrm_setupdomain.msdyncrm_ownershipvalidationstatus;
		/** Prefill marketing forms */
		msdyncrm_rtmprefillenabled: boolean;
		/** Unique identifier for this entity */
		msdyncrm_setupdomainId: string;
		/** Host */
		msdyncrm_txthostinstructions: string;
		/** The key of the DNS record for domain ownership */
		msdyncrm_txtkey: string;
		/** The DNS record type for domain ownership */
		msdyncrm_txttyperecord: string;
		/** The date when DNS registration was last confirmed */
		msdyncrm_validationdate_UtcDateOnly: Date;
		/** Email dns record 1 status */
		msdynmkt_emaildnsrecord1status: OptionSet.msdyncrm_setupdomain.msdynmkt_emaildnsrecord1status;
		/** Email dns record 2 status */
		msdynmkt_emaildnsrecord2status: OptionSet.msdyncrm_setupdomain.msdynmkt_emaildnsrecord2status;
		/** Internal field for tracking progress of entity configuration via wizard */
		msdynmkt_StepWizardProgress: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the domain */
		statecode: OptionSet.msdyncrm_setupdomain.statecode;
		/** Reason for the status of the domain */
		statuscode: OptionSet.msdyncrm_setupdomain.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly msdyncrm_alignedname: string;
			/** Envelope-from domain required flag */
			readonly msdyncrm_domainalignmentrequired: string;
			/** Envelope-from domain validation status */
			readonly msdyncrm_domainalignmentvalidationstatus: string;
			/** Instructions for CNAME Host field */
			readonly msdyncrm_domalignrechost: string;
			/** the dns record type for Envelope-from domain */
			readonly msdyncrm_domalignrectype: string;
			/** the value of the dns record for Envelope-from domain */
			readonly msdyncrm_domalignrecvalue: string;
			/** The email DNS record 1 host */
			readonly msdyncrm_emailhost1: string;
			/** The email DNS record 2 host */
			readonly msdyncrm_emailhost2: string;
			/** Value of email key 1 */
			readonly msdyncrm_emailkey1: string;
			/** Value of email key 1 */
			readonly msdyncrm_emailkey2: string;
			/** Email keys validation status */
			readonly msdyncrm_emailkeysvalidationstatus: string;
			/** The email DNS record 1 type */
			readonly msdyncrm_emailtyperecord1: string;
			/** The email DNS record 2 type */
			readonly msdyncrm_emailtyperecord2: string;
			/** Enable custom Envelope-from domain - generate Envelope-from domain keys */
			readonly msdyncrm_generatedomainalignmentkeys: string;
			/** Enable for email sending (generate email keys) */
			readonly msdyncrm_generateemailkeys: string;
			/** Enable for form hosting */
			readonly msdyncrm_generateformkeys: string;
			/** How-to for system admin */
			readonly msdyncrm_instructions: string;
			/** How to for system admin */
			readonly msdyncrm_ipinstructions: string;
			/** How to for system admin. */
			readonly msdyncrm_ipslist: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** Prefill outbound marketing forms */
			readonly msdyncrm_obmprefillenabled: string;
			/** Ownership validation status */
			readonly msdyncrm_ownershipvalidationstatus: string;
			/** Prefill marketing forms */
			readonly msdyncrm_rtmprefillenabled: string;
			/** Unique identifier for this entity */
			readonly msdyncrm_setupdomainId: string;
			/** Host */
			readonly msdyncrm_txthostinstructions: string;
			/** The key of the DNS record for domain ownership */
			readonly msdyncrm_txtkey: string;
			/** The DNS record type for domain ownership */
			readonly msdyncrm_txttyperecord: string;
			/** The date when DNS registration was last confirmed */
			readonly msdyncrm_validationdate_UtcDateOnly: string;
			/** Email dns record 1 status */
			readonly msdynmkt_emaildnsrecord1status: string;
			/** Email dns record 2 status */
			readonly msdynmkt_emaildnsrecord2status: string;
			/** Internal field for tracking progress of entity configuration via wizard */
			readonly msdynmkt_StepWizardProgress: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the domain */
			readonly statecode: string;
			/** Reason for the status of the domain */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_setupdomain {
		enum msdyncrm_domainalignmentvalidationstatus {
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
		enum msdyncrm_emailkeysvalidationstatus {
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
		enum msdyncrm_ownershipvalidationstatus {
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
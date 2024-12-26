//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocapplepay_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_ocapplepay_msdyn_ocpaymentprofile_ocapplepayid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocapplepay_msdyn_ocrichobjectmap_ocapplepayid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ocapplepay_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocapplepay_Information */
		Body: DevKit.Formmsdyn_ocapplepay_Information.Body;
		/** The Navigation of form msdyn_ocapplepay_Information */
		Navigation: DevKit.Formmsdyn_ocapplepay_Information.Navigation;
		/** The SidePanes of form msdyn_ocapplepay_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocapplepayApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocapplepayApi
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
		/** Merchant Country Code */
		msdyn_countrycode: string;
		msdyn_fallbackurl: string;
		msdyn_merchantcapabilities: Array<OptionSet.msdyn_ocapplepay.msdyn_merchantcapabilities>;
		/** Merchant display name or domain name */
		msdyn_merchantdisplayname: string;
		/** Apple Pay Merchant ID */
		msdyn_merchantid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_ocapplepayId: string;
		/** The Apple Pay Merchant Certificate (Base 64 string) */
		msdyn_ocbase64merchantcertstring: string;
		/** The Apple Pay Merchant Certificate (Base 64 string) */
		msdyn_ocbase64merchantcertstringcontd: string;
		/** Merchant Certificate File Name */
		msdyn_ocmerchantcertfilename: string;
		/** The password for the Apple Pay Merchant certificate */
		msdyn_ocmerchantcertificatepassword: string;
		/** Merchant Domain URL */
		msdyn_ocmerchantdomainurl: string;
		/** Order Tracking URL */
		msdyn_ordertrackingurl: string;
		/** The URL of the payment service provider */
		msdyn_paymentgatewayurl: string;
		/** The URL that Apple calls into when payment method is updated */
		msdyn_paymentmethodupdateurl: string;
		/** The URL that Apple will call into when there is a shipping contact update */
		msdyn_shippingcontactupdateurl: string;
		msdyn_shippingmethodupdateurl: string;
		msdyn_supportednetworks: Array<OptionSet.msdyn_ocapplepay.msdyn_supportednetworks>;
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
		/** Status of the OC Apple Pay Entity */
		statecode: OptionSet.msdyn_ocapplepay.statecode;
		/** Reason for the status of the OC Apple Pay Entity */
		statuscode: OptionSet.msdyn_ocapplepay.statuscode;
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
			/** Merchant Country Code */
			readonly msdyn_countrycode: string;
			readonly msdyn_fallbackurl: string;
			readonly msdyn_merchantcapabilities: Array<string>;
			/** Merchant display name or domain name */
			readonly msdyn_merchantdisplayname: string;
			/** Apple Pay Merchant ID */
			readonly msdyn_merchantid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocapplepayId: string;
			/** The Apple Pay Merchant Certificate (Base 64 string) */
			readonly msdyn_ocbase64merchantcertstring: string;
			/** The Apple Pay Merchant Certificate (Base 64 string) */
			readonly msdyn_ocbase64merchantcertstringcontd: string;
			/** Merchant Certificate File Name */
			readonly msdyn_ocmerchantcertfilename: string;
			/** The password for the Apple Pay Merchant certificate */
			readonly msdyn_ocmerchantcertificatepassword: string;
			/** Merchant Domain URL */
			readonly msdyn_ocmerchantdomainurl: string;
			/** Order Tracking URL */
			readonly msdyn_ordertrackingurl: string;
			/** The URL of the payment service provider */
			readonly msdyn_paymentgatewayurl: string;
			/** The URL that Apple calls into when payment method is updated */
			readonly msdyn_paymentmethodupdateurl: string;
			/** The URL that Apple will call into when there is a shipping contact update */
			readonly msdyn_shippingcontactupdateurl: string;
			readonly msdyn_shippingmethodupdateurl: string;
			readonly msdyn_supportednetworks: Array<string>;
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
			/** Status of the OC Apple Pay Entity */
			readonly statecode: string;
			/** Reason for the status of the OC Apple Pay Entity */
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
	namespace msdyn_ocapplepay {
		enum msdyn_merchantcapabilities {
			/** 192350002 */
			_3D_Secure,
			/** 192350001 */
			Credit,
			/** 192350000 */
			Debit
		}
		enum msdyn_supportednetworks {
			/** 192350000 */
			American_Express,
			/** 192350002 */
			Discover,
			/** 192350003 */
			MasterCard,
			/** 192350001 */
			Visa
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
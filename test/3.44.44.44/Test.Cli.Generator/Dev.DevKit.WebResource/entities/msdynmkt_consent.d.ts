//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_consent_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The profile ID of the entity. */
			msdynmkt_profileId: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			msdynmkt_AllowEmail: DevKit.Controls.OptionSet;
			msdynmkt_AllowSMS: DevKit.Controls.OptionSet;
			msdynmkt_AllowTracking: DevKit.Controls.OptionSet;
			msdynmkt_changesource: DevKit.Controls.OptionSet;
			msdynmkt_reason: DevKit.Controls.OptionSet;
			ProfileCard: DevKit.Controls.ActionCards;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_consent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_consent_Information */
		Body: DevKit.Formmsdynmkt_consent_Information.Body;
		/** The Header section of form msdynmkt_consent_Information */
		Header: DevKit.Formmsdynmkt_consent_Information.Header;
		/** The Navigation of form msdynmkt_consent_Information */
		Navigation: DevKit.Formmsdynmkt_consent_Information.Navigation;
		/** The SidePanes of form msdynmkt_consent_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_consentApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_consentApi
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
		msdynmkt_AllowEmail: OptionSet.msdynmkt_consent.msdynmkt_AllowEmail;
		msdynmkt_AllowSMS: OptionSet.msdynmkt_consent.msdynmkt_AllowSMS;
		msdynmkt_AllowTracking: OptionSet.msdynmkt_consent.msdynmkt_AllowTracking;
		msdynmkt_changesource: OptionSet.msdynmkt_consent.msdynmkt_changesource;
		/** Unique identifier for entity instances */
		msdynmkt_consentId: string;
		/** The profile ID of the entity. */
		msdynmkt_profileId: string;
		msdynmkt_reason: OptionSet.msdynmkt_consent.msdynmkt_reason;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Dynamics Consent Entry */
		statecode: OptionSet.msdynmkt_consent.statecode;
		/** Reason for the status of the Dynamics Consent Entry */
		statuscode: OptionSet.msdynmkt_consent.statuscode;
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
			readonly msdynmkt_AllowEmail: string;
			readonly msdynmkt_AllowSMS: string;
			readonly msdynmkt_AllowTracking: string;
			readonly msdynmkt_changesource: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_consentId: string;
			/** The profile ID of the entity. */
			readonly msdynmkt_profileId: string;
			readonly msdynmkt_reason: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Dynamics Consent Entry */
			readonly statecode: string;
			/** Reason for the status of the Dynamics Consent Entry */
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
	namespace msdynmkt_consent {
		enum msdynmkt_AllowEmail {
			/** 534120000 */
			Opted_in,
			/** 534120001 */
			Opted_out
		}
		enum msdynmkt_AllowSMS {
			/** 534120000 */
			Opted_in,
			/** 534120001 */
			Opted_out
		}
		enum msdynmkt_AllowTracking {
			/** 534120000 */
			Opted_in,
			/** 534120001 */
			Opted_out
		}
		enum msdynmkt_changesource {
			/** 534120000 */
			Internal,
			/** 534120001 */
			Preference_page,
			/** 534120002 */
			Text_message
		}
		enum msdynmkt_reason {
			/** 534119999 */
			No_reasons,
			/** 534120000 */
			Opt_in_Advertisement,
			/** 534120002 */
			Opt_in_Events,
			/** 534120001 */
			Opt_in_Landing_page,
			/** 534120003 */
			Opt_out_Content_was_irrelevant,
			/** 534120005 */
			Opt_out_Didnt_recall_signing_up,
			/** 534120007 */
			Opt_out_One_click_unsubscribe,
			/** 534120006 */
			Opt_out_Privacy_concerns,
			/** 534120004 */
			Opt_out_Received_too_frequently
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
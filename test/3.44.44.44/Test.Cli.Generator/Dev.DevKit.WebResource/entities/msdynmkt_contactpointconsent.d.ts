//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_contactpointconsent_Information {
		interface Tabs {
		}
		interface Body {
			msdynmkt_consentstatus: DevKit.Controls.OptionSet;
			msdynmkt_consenttype: DevKit.Controls.OptionSet;
			msdynmkt_contactpoint: DevKit.Controls.String;
			msdynmkt_reason: DevKit.Controls.OptionSet;
			msdynmkt_source: DevKit.Controls.OptionSet;
			msdynmkt_trackingstatus: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_contactpointconsent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_contactpointconsent_Information */
		Body: DevKit.Formmsdynmkt_contactpointconsent_Information.Body;
		/** The Navigation of form msdynmkt_contactpointconsent_Information */
		Navigation: DevKit.Formmsdynmkt_contactpointconsent_Information.Navigation;
		/** The SidePanes of form msdynmkt_contactpointconsent_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_contactpointconsentApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_contactpointconsentApi
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
		msdynmkt_consentstatus: OptionSet.msdynmkt_contactpointconsent.msdynmkt_consentstatus;
		msdynmkt_consenttype: OptionSet.msdynmkt_contactpointconsent.msdynmkt_consenttype;
		msdynmkt_contactpoint: string;
		/** Unique identifier for entity instances */
		msdynmkt_contactpointconsentId: string;
		msdynmkt_reason: OptionSet.msdynmkt_contactpointconsent.msdynmkt_reason;
		msdynmkt_source: OptionSet.msdynmkt_contactpointconsent.msdynmkt_source;
		msdynmkt_trackingstatus: OptionSet.msdynmkt_contactpointconsent.msdynmkt_trackingstatus;
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
		/** Status of the Contact Point Consent */
		statecode: OptionSet.msdynmkt_contactpointconsent.statecode;
		/** Reason for the status of the Contact Point Consent */
		statuscode: OptionSet.msdynmkt_contactpointconsent.statuscode;
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
			readonly msdynmkt_consentstatus: string;
			readonly msdynmkt_consenttype: string;
			readonly msdynmkt_contactpoint: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_contactpointconsentId: string;
			readonly msdynmkt_reason: string;
			readonly msdynmkt_source: string;
			readonly msdynmkt_trackingstatus: string;
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
			/** Status of the Contact Point Consent */
			readonly statecode: string;
			/** Reason for the status of the Contact Point Consent */
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
	namespace msdynmkt_contactpointconsent {
		enum msdynmkt_consentstatus {
			/** 534120000 */
			Opted_in,
			/** 534120001 */
			Opted_out
		}
		enum msdynmkt_consenttype {
			/** 534120002 */
			Custom,
			/** 534120000 */
			Email,
			/** 534120001 */
			Text_Message
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
		enum msdynmkt_source {
			/** 534120000 */
			Internal,
			/** 534120001 */
			Preference_page,
			/** 534120002 */
			Text_message
		}
		enum msdynmkt_trackingstatus {
			/** 534120000 */
			Opted_in,
			/** 534120001 */
			Opted_out
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
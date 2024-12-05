//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_contactpointconsent2_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdynmkt_contactpointtype: DevKit.Controls.OptionSet;
			msdynmkt_contactpointvalue: DevKit.Controls.String;
			msdynmkt_logicalreason: DevKit.Controls.OptionSet;
			msdynmkt_modifiedonbehalf: DevKit.Controls.String;
			msdynmkt_source: DevKit.Controls.OptionSet;
			msdynmkt_uionly_value_marketingmessage: DevKit.Controls.OptionSet;
			msdynmkt_uionly_value_tracking: DevKit.Controls.OptionSet;
			msdynmkt_value: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_contactpointconsent2_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_contactpointconsent2_Information */
		Body: DevKit.Formmsdynmkt_contactpointconsent2_Information.Body;
		/** The Navigation of form msdynmkt_contactpointconsent2_Information */
		Navigation: DevKit.Formmsdynmkt_contactpointconsent2_Information.Navigation;
		/** The SidePanes of form msdynmkt_contactpointconsent2_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_contactpointconsent2Api {
		/**
		* DynamicsCrm.DevKit msdynmkt_contactpointconsent2Api
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
		msdynmkt_consenttypevalue: OptionSet.msdynmkt_contactpointconsent2.msdynmkt_consenttypevalue;
		/** Unique identifier for entity instances */
		msdynmkt_contactpointconsent2Id: string;
		msdynmkt_contactpointtype: OptionSet.msdynmkt_contactpointconsent2.msdynmkt_contactpointtype;
		msdynmkt_contactpointvalue: string;
		msdynmkt_logicalreason: OptionSet.msdynmkt_contactpointconsent2.msdynmkt_logicalreason;
		msdynmkt_migrationtimestamp_TimezoneDateAndTime: Date;
		msdynmkt_modifiedonbehalf: string;
		msdynmkt_reason: string;
		msdynmkt_source: OptionSet.msdynmkt_contactpointconsent2.msdynmkt_source;
		msdynmkt_uionly_value_marketingmessage: OptionSet.msdynmkt_contactpointconsent2.msdynmkt_uionly_value_marketingmessage;
		msdynmkt_uionly_value_tracking: OptionSet.msdynmkt_contactpointconsent2.msdynmkt_uionly_value_tracking;
		msdynmkt_value: OptionSet.msdynmkt_contactpointconsent2.msdynmkt_value;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Contact Point Consent */
		statecode: OptionSet.msdynmkt_contactpointconsent2.statecode;
		/** Reason for the status of the Contact Point Consent */
		statuscode: OptionSet.msdynmkt_contactpointconsent2.statuscode;
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
			readonly msdynmkt_consenttypevalue: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_contactpointconsent2Id: string;
			readonly msdynmkt_contactpointtype: string;
			readonly msdynmkt_contactpointvalue: string;
			readonly msdynmkt_logicalreason: string;
			readonly msdynmkt_migrationtimestamp_TimezoneDateAndTime: string;
			readonly msdynmkt_modifiedonbehalf: string;
			readonly msdynmkt_reason: string;
			readonly msdynmkt_source: string;
			readonly msdynmkt_uionly_value_marketingmessage: string;
			readonly msdynmkt_uionly_value_tracking: string;
			readonly msdynmkt_value: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
	namespace msdynmkt_contactpointconsent2 {
		enum msdynmkt_consenttypevalue {
			/** 534120000 */
			Marketing_Communication,
			/** 534120001 */
			Tracking
		}
		enum msdynmkt_contactpointtype {
			/** 534120002 */
			Custom,
			/** 534120000 */
			Email,
			/** 534120001 */
			Text_Message,
			/** 534120003 */
			Voice
		}
		enum msdynmkt_logicalreason {
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
			/** 534120007 */
			Email_list_unsubscribe,
			/** 534120000 */
			Internal,
			/** 534120003 */
			Loaded,
			/** 534120004 */
			Preference_Center,
			/** 534120001 */
			Preference_page,
			/** 534120005 */
			Realtime_Marketing_Form,
			/** 534120006 */
			Subscription_Center,
			/** 534120002 */
			Text_message
		}
		enum msdynmkt_uionly_value_marketingmessage {
			/** 534120000 */
			Not_Set,
			/** 534120001 */
			Opted_In,
			/** 534120002 */
			Opted_Out
		}
		enum msdynmkt_uionly_value_tracking {
			/** 534120000 */
			Not_Set,
			/** 534120001 */
			Opted_In,
			/** 534120002 */
			Opted_Out
		}
		enum msdynmkt_value {
			/** 534120000 */
			Not_Set,
			/** 534120001 */
			Opted_In,
			/** 534120002 */
			Opted_Out
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
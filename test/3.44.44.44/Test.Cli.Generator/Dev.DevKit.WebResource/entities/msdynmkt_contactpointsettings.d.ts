//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_contactpointsettings_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_entityname: DevKit.Controls.String;
		}
		interface tab__68069E40_9B17_4F8A_84D5_7A754397A49B_Sections {
		}
		interface tab__68069E40_9B17_4F8A_84D5_7A754397A49B extends DevKit.Controls.ITab {
			Section: tab__68069E40_9B17_4F8A_84D5_7A754397A49B_Sections;
		}
		interface Tabs {
			_68069E40_9B17_4F8A_84D5_7A754397A49B: tab__68069E40_9B17_4F8A_84D5_7A754397A49B;
		}
		interface Body {
			Tab: Tabs;
			EditAudienceDataInfoControl: DevKit.Controls.ActionCards;
			msdynmkt_contactablefields: DevKit.Controls.ActionCards;
			msdynmkt_contactpointtype: DevKit.Controls.OptionSet;
			msdynmkt_entityname: DevKit.Controls.ActionCards;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_contactpointsettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_contactpointsettings_Information */
		Body: DevKit.Formmsdynmkt_contactpointsettings_Information.Body;
		/** The Header section of form msdynmkt_contactpointsettings_Information */
		Header: DevKit.Formmsdynmkt_contactpointsettings_Information.Header;
		/** The Navigation of form msdynmkt_contactpointsettings_Information */
		Navigation: DevKit.Formmsdynmkt_contactpointsettings_Information.Navigation;
		/** The SidePanes of form msdynmkt_contactpointsettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_contactpointsettingsApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_contactpointsettingsApi
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
		msdynmkt_contactablefields: string;
		/** Unique identifier for entity instances */
		msdynmkt_contactpointsettingsId: string;
		msdynmkt_contactpointtype: OptionSet.msdynmkt_contactpointsettings.msdynmkt_contactpointtype;
		msdynmkt_emailaddressfields: string;
		/** The name of the custom entity. */
		msdynmkt_entityname: string;
		msdynmkt_phonenumberfields: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Contact Point Settings */
		statecode: OptionSet.msdynmkt_contactpointsettings.statecode;
		/** Reason for the status of the Contact Point Settings */
		statuscode: OptionSet.msdynmkt_contactpointsettings.statuscode;
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
			readonly msdynmkt_contactablefields: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_contactpointsettingsId: string;
			readonly msdynmkt_contactpointtype: string;
			readonly msdynmkt_emailaddressfields: string;
			/** The name of the custom entity. */
			readonly msdynmkt_entityname: string;
			readonly msdynmkt_phonenumberfields: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Contact Point Settings */
			readonly statecode: string;
			/** Reason for the status of the Contact Point Settings */
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
	namespace msdynmkt_contactpointsettings {
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
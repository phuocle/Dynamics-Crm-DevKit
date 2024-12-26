//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_linkedinconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			msdyncr2_synchronizecampaigns: DevKit.Controls.Boolean;
			msdyncrm_authenticationresource: DevKit.Controls.String;
			msdyncrm_authenticationtokenendpoint: DevKit.Controls.String;
			msdyncrm_authenticationtype: DevKit.Controls.OptionSet;
			/** Client ID */
			msdyncrm_clientId: DevKit.Controls.String;
			/** Expiration date */
			msdyncrm_configcacheexpirationdate: DevKit.Controls.Date;
			/** Expiration (in milliseconds) */
			msdyncrm_configcacheexpirationperiodinms: DevKit.Controls.Integer;
			/** Discovery endpoint for the configuration */
			msdyncrm_discoveryendpointurl: DevKit.Controls.String;
			msdyncrm_OnMatchingFail: DevKit.Controls.OptionSet;
			/** Organization configuration */
			msdyncrm_organization_config: DevKit.Controls.String;
			/** Redirect URL */
			msdyncrm_redirectUrl: DevKit.Controls.String;
			msdyncrm_s2sinboundconfigurl: DevKit.Controls.String;
			msdyncrm_servicepublicid: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_linkedinconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_linkedinconfiguration_Information */
		Body: DevKit.Formmsdyncrm_linkedinconfiguration_Information.Body;
		/** The Navigation of form msdyncrm_linkedinconfiguration_Information */
		Navigation: DevKit.Formmsdyncrm_linkedinconfiguration_Information.Navigation;
		/** The SidePanes of form msdyncrm_linkedinconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_linkedinconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_linkedinconfigurationApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person */
		readonly ModifiedOnBehalfBy: string;
		msdyncr2_synchronizecampaigns: boolean;
		msdyncrm_authenticationresource: string;
		msdyncrm_authenticationtokenendpoint: string;
		msdyncrm_authenticationtype: OptionSet.msdyncrm_linkedinconfiguration.msdyncrm_authenticationtype;
		/** Client ID */
		msdyncrm_clientId: string;
		/** Expiration date */
		msdyncrm_configcacheexpirationdate_UtcDateOnly: Date;
		/** Expiration (in milliseconds) */
		msdyncrm_configcacheexpirationperiodinms: number;
		/** Discovery endpoint for the configuration */
		msdyncrm_discoveryendpointurl: string;
		/** Unique identifier for this entity */
		msdyncrm_linkedinconfigurationId: string;
		msdyncrm_OnMatchingFail: OptionSet.msdyncrm_linkedinconfiguration.msdyncrm_OnMatchingFail;
		/** Organization configuration */
		msdyncrm_organization_config: string;
		/** Redirect URL */
		msdyncrm_redirectUrl: string;
		msdyncrm_s2sinboundconfigurl: string;
		msdyncrm_servicepublicid: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this */
		readonly OwningTeam: string;
		/** Indicates the person who owns this */
		readonly OwningUser: string;
		/** Status of the LinkedIn Configuration */
		statecode: OptionSet.msdyncrm_linkedinconfiguration.statecode;
		/** Reason for the status of the LinkedIn Configuration */
		statuscode: OptionSet.msdyncrm_linkedinconfiguration.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncr2_synchronizecampaigns: string;
			readonly msdyncrm_authenticationresource: string;
			readonly msdyncrm_authenticationtokenendpoint: string;
			readonly msdyncrm_authenticationtype: string;
			/** Client ID */
			readonly msdyncrm_clientId: string;
			/** Expiration date */
			readonly msdyncrm_configcacheexpirationdate_UtcDateOnly: string;
			/** Expiration (in milliseconds) */
			readonly msdyncrm_configcacheexpirationperiodinms: string;
			/** Discovery endpoint for the configuration */
			readonly msdyncrm_discoveryendpointurl: string;
			/** Unique identifier for this entity */
			readonly msdyncrm_linkedinconfigurationId: string;
			readonly msdyncrm_OnMatchingFail: string;
			/** Organization configuration */
			readonly msdyncrm_organization_config: string;
			/** Redirect URL */
			readonly msdyncrm_redirectUrl: string;
			readonly msdyncrm_s2sinboundconfigurl: string;
			readonly msdyncrm_servicepublicid: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this */
			readonly OwningTeam: string;
			/** Indicates the person who owns this */
			readonly OwningUser: string;
			/** Status of the LinkedIn Configuration */
			readonly statecode: string;
			/** Reason for the status of the LinkedIn Configuration */
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
	namespace msdyncrm_linkedinconfiguration {
		enum msdyncrm_authenticationtype {
			/** 192350001 */
			Basic_Authentication,
			/** 192350000 */
			Bearer_Authentication
		}
		enum msdyncrm_OnMatchingFail {
			/** 192350001 */
			Create_new_lead,
			/** 192350000 */
			Ignore
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
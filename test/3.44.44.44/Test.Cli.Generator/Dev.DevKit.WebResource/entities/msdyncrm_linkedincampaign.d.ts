//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_linkedincampaign_Information {
		interface Tabs {
		}
		interface Body {
			msdyncrm_CampaignType: DevKit.Controls.OptionSet;
			msdyncrm_EndDate: DevKit.Controls.Date;
			msdyncrm_LinkedInAccount: DevKit.Controls.Lookup;
			msdyncrm_linkedinid: DevKit.Controls.String;
			msdyncrm_LinkedInStatus: DevKit.Controls.OptionSet;
			/** The name of the campaign. */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_StartDate: DevKit.Controls.Date;
			/** Total number of leads for this linkiedin campaign */
			msdyncrm_totalleads: DevKit.Controls.Integer;
			/** Total number of submissions received on this linkiedin campaign */
			msdyncrm_totalsubmissions: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncr2_msdyncrm_linkedincampaign_msdyncrm_customerjourney_LinkedInCampaign: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_linkedincampaign_lead_LinkedInCampaign: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_linkedincampaign_msdyncrm_linkedincampaignactivity_campaignid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_linkedincampaign_msdyncrm_linkedinformsubmission_LinkedInCampaign: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_linkedincampaign_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_linkedincampaign_Information */
		Body: DevKit.Formmsdyncrm_linkedincampaign_Information.Body;
		/** The Navigation of form msdyncrm_linkedincampaign_Information */
		Navigation: DevKit.Formmsdyncrm_linkedincampaign_Information.Navigation;
		/** The SidePanes of form msdyncrm_linkedincampaign_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_linkedincampaignApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_linkedincampaignApi
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
		msdyncrm_CampaignType: OptionSet.msdyncrm_linkedincampaign.msdyncrm_CampaignType;
		msdyncrm_EndDate_UtcDateOnly: Date;
		msdyncrm_LinkedInAccount: string;
		/** Unique identifier for entity instances */
		msdyncrm_linkedincampaignId: string;
		msdyncrm_linkedinid: string;
		msdyncrm_LinkedInStatus: OptionSet.msdyncrm_linkedincampaign.msdyncrm_LinkedInStatus;
		/** The name of the campaign. */
		msdyncrm_name: string;
		msdyncrm_StartDate_UtcDateOnly: Date;
		/** Total number of leads for this linkiedin campaign */
		readonly msdyncrm_totalleads: number;
		/** Last Updated time of rollup field Total leads. */
		readonly msdyncrm_totalleads_Date_UtcDateAndTime: Date;
		/** State of rollup field Total leads. */
		readonly msdyncrm_totalleads_State: number;
		/** Total number of submissions received on this linkiedin campaign */
		readonly msdyncrm_totalsubmissions: number;
		/** Last Updated time of rollup field Total submissions. */
		readonly msdyncrm_totalsubmissions_Date_UtcDateAndTime: Date;
		/** State of rollup field Total submissions. */
		readonly msdyncrm_totalsubmissions_State: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this */
		readonly OwningBusinessUnit: string;
		/** Indicates which team owns this */
		readonly OwningTeam: string;
		/** Indicates the person who owns this */
		readonly OwningUser: string;
		/** Status of the LinkedIn Campaign */
		statecode: OptionSet.msdyncrm_linkedincampaign.statecode;
		/** Reason for the status of the LinkedIn Campaign */
		statuscode: OptionSet.msdyncrm_linkedincampaign.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
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
			readonly msdyncrm_CampaignType: string;
			readonly msdyncrm_EndDate_UtcDateOnly: string;
			readonly msdyncrm_LinkedInAccount: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_linkedincampaignId: string;
			readonly msdyncrm_linkedinid: string;
			readonly msdyncrm_LinkedInStatus: string;
			/** The name of the campaign. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_StartDate_UtcDateOnly: string;
			/** Total number of leads for this linkiedin campaign */
			readonly msdyncrm_totalleads: string;
			/** Last Updated time of rollup field Total leads. */
			readonly msdyncrm_totalleads_Date_UtcDateAndTime: string;
			/** State of rollup field Total leads. */
			readonly msdyncrm_totalleads_State: string;
			/** Total number of submissions received on this linkiedin campaign */
			readonly msdyncrm_totalsubmissions: string;
			/** Last Updated time of rollup field Total submissions. */
			readonly msdyncrm_totalsubmissions_Date_UtcDateAndTime: string;
			/** State of rollup field Total submissions. */
			readonly msdyncrm_totalsubmissions_State: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this */
			readonly OwningBusinessUnit: string;
			/** Indicates which team owns this */
			readonly OwningTeam: string;
			/** Indicates the person who owns this */
			readonly OwningUser: string;
			/** Status of the LinkedIn Campaign */
			readonly statecode: string;
			/** Reason for the status of the LinkedIn Campaign */
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
	namespace msdyncrm_linkedincampaign {
		enum msdyncrm_CampaignType {
			/** 192350003 */
			LinkedIn_Dynamic_Ad,
			/** 192350001 */
			LinkedIn_Sponsored_Content,
			/** 192350002 */
			LinkedIn_Sponsored_InMail,
			/** 192350000 */
			Text_Advertisement
		}
		enum msdyncrm_LinkedInStatus {
			/** 192350000 */
			Active,
			/** 192350002 */
			Archived,
			/** 192350004 */
			Canceled,
			/** 192350003 */
			Completed,
			/** 192350005 */
			Draft,
			/** 192350001 */
			Paused
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_website_Information {
		interface tab_GeneralInfo_Sections {
		}
		interface tab_insights_Sections {
			insights_section: DevKit.Controls.Section;
		}
		interface tab_GeneralInfo extends DevKit.Controls.ITab {
			Section: tab_GeneralInfo_Sections;
		}
		interface tab_insights extends DevKit.Controls.ITab {
			Section: tab_insights_Sections;
		}
		interface Tabs {
			GeneralInfo: tab_GeneralInfo;
			insights: tab_insights;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			msdyncrm_capturing_code: DevKit.Controls.ActionCards;
			msdyncrm_Description: DevKit.Controls.String;
			msdyncrm_javascriptcode_compound: DevKit.Controls.ActionCards;
			/** The name of the marketing website */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_purpose: DevKit.Controls.OptionSet;
			msdyncrm_timeout: DevKit.Controls.Integer;
			msdyncrm_Url: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the marketing website */
			statecode: DevKit.Controls.OptionSet;
			WebsiteInsightsCtrl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyncrm_msdyncrm_website_msdyncrm_formpage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_website_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_website_msdyncrm_marketingpage_marketingwebsite: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_website_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_website_Information */
		Body: DevKit.Formmsdyncrm_website_Information.Body;
		/** The Navigation of form msdyncrm_website_Information */
		Navigation: DevKit.Formmsdyncrm_website_Information.Navigation;
		/** The SidePanes of form msdyncrm_website_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuick_Create_for_Website {
		interface tab_tab_1_Sections {
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdyncrm_Description: DevKit.Controls.String;
			/** The name of the marketing website */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_timeout: DevKit.Controls.Integer;
			msdyncrm_Url: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormQuick_Create_for_Website extends DevKit.IForm {
		/**
		* Quick Create for Website [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_Create_for_Website */
		Body: DevKit.FormQuick_Create_for_Website.Body;
	}
	class msdyncrm_websiteApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_websiteApi
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
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_capturing_Code: string;
		msdyncrm_Description: string;
		msdyncrm_externalformhosting_iframetemplate: string;
		msdyncrm_externalformhostingcodetemplate: string;
		msdyncrm_insights_placeholder: string;
		msdyncrm_Javascriptcode: string;
		msdyncrm_Javascriptcode_compound: string;
		/** The name of the marketing website */
		msdyncrm_name: string;
		msdyncrm_purpose: OptionSet.msdyncrm_website.msdyncrm_purpose;
		/** Unique ID for remote entity instances */
		msdyncrm_remote_websiteid: string;
		msdyncrm_shouldberemoved: boolean;
		msdyncrm_timeout: number;
		msdyncrm_Url: string;
		/** Unique ID for entity instances */
		msdyncrm_websiteId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the team that owns this. */
		readonly OwningUser: string;
		/** Status of the marketing website */
		statecode: OptionSet.msdyncrm_website.statecode;
		/** Marketing website status reason */
		statuscode: OptionSet.msdyncrm_website.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_capturing_Code: string;
			readonly msdyncrm_Description: string;
			readonly msdyncrm_externalformhosting_iframetemplate: string;
			readonly msdyncrm_externalformhostingcodetemplate: string;
			readonly msdyncrm_insights_placeholder: string;
			readonly msdyncrm_Javascriptcode: string;
			readonly msdyncrm_Javascriptcode_compound: string;
			/** The name of the marketing website */
			readonly msdyncrm_name: string;
			readonly msdyncrm_purpose: string;
			/** Unique ID for remote entity instances */
			readonly msdyncrm_remote_websiteid: string;
			readonly msdyncrm_shouldberemoved: string;
			readonly msdyncrm_timeout: string;
			readonly msdyncrm_Url: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_websiteId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the team that owns this. */
			readonly OwningUser: string;
			/** Status of the marketing website */
			readonly statecode: string;
			/** Marketing website status reason */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_website {
		enum msdyncrm_purpose {
			/** 192350000 */
			General,
			/** 192350001 */
			Marketing_page
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
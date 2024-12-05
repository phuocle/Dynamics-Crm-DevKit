//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingpageconfiguration_Information {
		interface tab__3B262475_4C2D_4125_854A_ABF68D9FD3C4_Sections {
			_3B262475_4C2D_4125_854A_ABF68D9FD3C4_SECTION_3: DevKit.Controls.Section;
			_3B262475_4C2D_4125_854A_ABF68D9FD3C4_SECTION_4: DevKit.Controls.Section;
			_3B262475_4C2D_4125_854A_ABF68D9FD3C4_SECTION_6: DevKit.Controls.Section;
			_CB6764CE_81ED_406D_BB3F_FF4CB035E061: DevKit.Controls.Section;
			_F5B1E97F_CFA2_4C94_AD3A_59E2C7B9705D: DevKit.Controls.Section;
		}
		interface tab_MarketingPageConfigurationMain_PortalIntegrationTabV2_Sections {
			_BDF0AB82_1080_4490_918F_E2CD4AACCD96_PORTAL_DEFAULTS_SECTIONV2: DevKit.Controls.Section;
		}
		interface tab__3B262475_4C2D_4125_854A_ABF68D9FD3C4 extends DevKit.Controls.ITab {
			Section: tab__3B262475_4C2D_4125_854A_ABF68D9FD3C4_Sections;
		}
		interface tab_MarketingPageConfigurationMain_PortalIntegrationTabV2 extends DevKit.Controls.ITab {
			Section: tab_MarketingPageConfigurationMain_PortalIntegrationTabV2_Sections;
		}
		interface Tabs {
			_3B262475_4C2D_4125_854A_ABF68D9FD3C4: tab__3B262475_4C2D_4125_854A_ABF68D9FD3C4;
			MarketingPageConfigurationMain_PortalIntegrationTabV2: tab_MarketingPageConfigurationMain_PortalIntegrationTabV2;
		}
		interface Body {
			Tab: Tabs;
			adx_parentwebpageid: DevKit.Controls.ActionCards;
			adx_websiteid: DevKit.Controls.ActionCards;
			adx_websitelanguageid: DevKit.Controls.ActionCards;
			msdyncrm_allowsubmissiononlyforms: DevKit.Controls.Boolean;
			msdyncrm_contactcampaignattribute: DevKit.Controls.String;
			msdyncrm_contactemailattribute: DevKit.Controls.String;
			msdyncrm_contactmarketingformattribute: DevKit.Controls.String;
			msdyncrm_contactmarketingpageattribute: DevKit.Controls.String;
			msdyncrm_contactmatchingstrategy: DevKit.Controls.Lookup;
			msdyncrm_default: DevKit.Controls.Boolean;
			msdyncrm_entityupdatebehavioronsubmit: DevKit.Controls.OptionSet;
			msdyncrm_insertprivacybanner: DevKit.Controls.Boolean;
			msdyncrm_keepsuccessfulsubmissions: DevKit.Controls.Boolean;
			msdyncrm_leadcampaignattribute: DevKit.Controls.String;
			msdyncrm_leadcontactattribute: DevKit.Controls.String;
			msdyncrm_leademailattribute: DevKit.Controls.String;
			msdyncrm_leadmarketingformattribute: DevKit.Controls.String;
			msdyncrm_leadmarketingpageattribute: DevKit.Controls.String;
			msdyncrm_leadmatchingstrategy: DevKit.Controls.Lookup;
			/** Name of the landing page */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_privacybannertext: DevKit.Controls.String;
			msdyncrm_privacypolicylinktext: DevKit.Controls.String;
			msdyncrm_privacypolicylinkurl: DevKit.Controls.String;
			msdyncrm_websitefilter_placeholder: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_marketingpageconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingpageconfiguration_Information */
		Body: DevKit.Formmsdyncrm_marketingpageconfiguration_Information.Body;
		/** The Navigation of form msdyncrm_marketingpageconfiguration_Information */
		Navigation: DevKit.Formmsdyncrm_marketingpageconfiguration_Information.Navigation;
		/** The SidePanes of form msdyncrm_marketingpageconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_marketingpageconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingpageconfigurationApi
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
		adx_parentwebpageid: string;
		adx_websiteid: string;
		adx_websitelanguageid: string;
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
		msdyncrm_allowsubmissiononlyforms: boolean;
		msdyncrm_contactcampaignattribute: string;
		msdyncrm_contactemailattribute: string;
		msdyncrm_contactmarketingformattribute: string;
		msdyncrm_contactmarketingpageattribute: string;
		msdyncrm_contactmatchingstrategy: string;
		msdyncrm_default: boolean;
		msdyncrm_entityupdatebehavioronsubmit: OptionSet.msdyncrm_marketingpageconfiguration.msdyncrm_entityupdatebehavioronsubmit;
		msdyncrm_insertprivacybanner: boolean;
		msdyncrm_keepsuccessfulsubmissions: boolean;
		msdyncrm_leadcampaignattribute: string;
		msdyncrm_leadcontactattribute: string;
		msdyncrm_leademailattribute: string;
		msdyncrm_leadmarketingformattribute: string;
		msdyncrm_leadmarketingpageattribute: string;
		msdyncrm_leadmatchingstrategy: string;
		/** Unique ID for entity instances */
		msdyncrm_marketingpageconfigurationId: string;
		/** Name of the landing page */
		msdyncrm_name: string;
		msdyncrm_organizationtype: number;
		msdyncrm_organizationtype_lastrefresh_TimezoneDateAndTime: Date;
		msdyncrm_portalinstallationstatus: OptionSet.msdyncrm_marketingpageconfiguration.msdyncrm_portalinstallationstatus;
		msdyncrm_portalintegrationtype: OptionSet.msdyncrm_marketingpageconfiguration.msdyncrm_portalintegrationtype;
		msdyncrm_privacybannertext: string;
		msdyncrm_privacypolicylinktext: string;
		msdyncrm_privacypolicylinkurl: string;
		msdyncrm_websitefilter_placeholder: string;
		/** Unique ID of the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the landing page */
		statecode: OptionSet.msdyncrm_marketingpageconfiguration.statecode;
		/** landing page status reason */
		statuscode: OptionSet.msdyncrm_marketingpageconfiguration.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly adx_parentwebpageid: string;
			readonly adx_websiteid: string;
			readonly adx_websitelanguageid: string;
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
			readonly msdyncrm_allowsubmissiononlyforms: string;
			readonly msdyncrm_contactcampaignattribute: string;
			readonly msdyncrm_contactemailattribute: string;
			readonly msdyncrm_contactmarketingformattribute: string;
			readonly msdyncrm_contactmarketingpageattribute: string;
			readonly msdyncrm_contactmatchingstrategy: string;
			readonly msdyncrm_default: string;
			readonly msdyncrm_entityupdatebehavioronsubmit: string;
			readonly msdyncrm_insertprivacybanner: string;
			readonly msdyncrm_keepsuccessfulsubmissions: string;
			readonly msdyncrm_leadcampaignattribute: string;
			readonly msdyncrm_leadcontactattribute: string;
			readonly msdyncrm_leademailattribute: string;
			readonly msdyncrm_leadmarketingformattribute: string;
			readonly msdyncrm_leadmarketingpageattribute: string;
			readonly msdyncrm_leadmatchingstrategy: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingpageconfigurationId: string;
			/** Name of the landing page */
			readonly msdyncrm_name: string;
			readonly msdyncrm_organizationtype: string;
			readonly msdyncrm_organizationtype_lastrefresh_TimezoneDateAndTime: string;
			readonly msdyncrm_portalinstallationstatus: string;
			readonly msdyncrm_portalintegrationtype: string;
			readonly msdyncrm_privacybannertext: string;
			readonly msdyncrm_privacypolicylinktext: string;
			readonly msdyncrm_privacypolicylinkurl: string;
			readonly msdyncrm_websitefilter_placeholder: string;
			/** Unique ID of the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the landing page */
			readonly statecode: string;
			/** landing page status reason */
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
	namespace msdyncrm_marketingpageconfiguration {
		enum msdyncrm_entityupdatebehavioronsubmit {
			/** 0 */
			Contacts_and_leads,
			/** 3 */
			No_update,
			/** 1 */
			Only_contacts,
			/** 2 */
			Only_leads
		}
		enum msdyncrm_portalinstallationstatus {
			/** 3 */
			Failed,
			/** 1 */
			Not_started,
			/** 2 */
			Started
		}
		enum msdyncrm_portalintegrationtype {
			/** 1 */
			Force_local_hosting,
			/** 2 */
			Force_portal_hosting
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
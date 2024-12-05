//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormWebinar_configuration {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the webinar configuration */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab_CredentialsTab_Sections {
			CredentialsTab_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralTab_Sections {
			_6B4BA965_7EE1_4292_B589_5D5EF8961D16: DevKit.Controls.Section;
		}
		interface tab_CredentialsTab extends DevKit.Controls.ITab {
			Section: tab_CredentialsTab_Sections;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			CredentialsTab: tab_CredentialsTab;
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** The date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			msevtmgt_accesstoken: DevKit.Controls.String;
			msevtmgt_AccessTokenKey: DevKit.Controls.String;
			msevtmgt_AccessTokenSecret: DevKit.Controls.String;
			msevtmgt_appURL: DevKit.Controls.String;
			/** Tells whether the credentials in this webinar configuration have been authenticated with the provider */
			msevtmgt_authorized: DevKit.Controls.OptionSet;
			msevtmgt_ClientId: DevKit.Controls.String;
			msevtmgt_LastUpdateDateTime: DevKit.Controls.DateTime;
			msevtmgt_Message: DevKit.Controls.String;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			msevtmgt_providerservicestatus: DevKit.Controls.OptionSet;
			msevtmgt_UpdateCredentials: DevKit.Controls.OptionSet;
			/** Unique identifier for the webinar provider associated with the webinar configuration */
			msevtmgt_WebinarProviderId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			WebResource_consent: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msevtmgt_msevtmgt_webinarconfiguration_msevtmgt_webinartype_webinarconfiguration: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msevtmgt_event_Web: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msevtmgt_session_Web: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_webinarconfiguration_Tasks: DevKit.Controls.NavigationItem
		}
		interface quickForm_Terms_Body {
			msevtmgt_privacypolicy: DevKit.Controls.QuickView;
			msevtmgt_termsofservice: DevKit.Controls.QuickView;
		}
		interface quickForm_Terms extends DevKit.Controls.IQuickView {
			Body: quickForm_Terms_Body;
		}
		interface QuickForm {
			Terms: quickForm_Terms;
		}
	}
	class FormWebinar_configuration extends DevKit.IForm {
		/**
		* Webinar configuration [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Webinar_configuration */
		Body: DevKit.FormWebinar_configuration.Body;
		/** The Header section of form Webinar_configuration */
		Header: DevKit.FormWebinar_configuration.Header;
		/** The Navigation of form Webinar_configuration */
		Navigation: DevKit.FormWebinar_configuration.Navigation;
		/** The QuickForm of form Webinar_configuration */
		QuickForm: DevKit.FormWebinar_configuration.QuickForm;
		/** The SidePanes of form Webinar_configuration */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_webinarconfigurationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_webinarconfigurationApi
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
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_accesstoken: string;
		msevtmgt_AccessTokenKey: string;
		msevtmgt_AccessTokenSecret: string;
		msevtmgt_appURL: string;
		/** Tells whether the credentials in this webinar configuration have been authenticated with the provider */
		msevtmgt_authorized: OptionSet.msevtmgt_webinarconfiguration.msevtmgt_authorized;
		msevtmgt_ClientId: string;
		msevtmgt_LastUpdateDateTime_UtcDateAndTime: Date;
		msevtmgt_Message: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		msevtmgt_providerservicestatus: OptionSet.msevtmgt_webinarconfiguration.msevtmgt_providerservicestatus;
		msevtmgt_UpdateCredentials: OptionSet.msevtmgt_webinarconfiguration.msevtmgt_UpdateCredentials;
		/** Unique identifier for entity instances */
		msevtmgt_webinarconfigurationId: string;
		/** Unique identifier for the webinar provider associated with the webinar configuration */
		msevtmgt_WebinarProviderId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the webinar configuration */
		statecode: OptionSet.msevtmgt_webinarconfiguration.statecode;
		/** Reason for the status of the webinar configuration */
		statuscode: OptionSet.msevtmgt_webinarconfiguration.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_accesstoken: string;
			readonly msevtmgt_AccessTokenKey: string;
			readonly msevtmgt_AccessTokenSecret: string;
			readonly msevtmgt_appURL: string;
			/** Tells whether the credentials in this webinar configuration have been authenticated with the provider */
			readonly msevtmgt_authorized: string;
			readonly msevtmgt_ClientId: string;
			readonly msevtmgt_LastUpdateDateTime_UtcDateAndTime: string;
			readonly msevtmgt_Message: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			readonly msevtmgt_providerservicestatus: string;
			readonly msevtmgt_UpdateCredentials: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_webinarconfigurationId: string;
			/** Unique identifier for the webinar provider associated with the webinar configuration */
			readonly msevtmgt_WebinarProviderId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the webinar configuration */
			readonly statecode: string;
			/** Reason for the status of the webinar configuration */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_webinarconfiguration {
		enum msevtmgt_authorized {
			/** 100000001 */
			No,
			/** 100000002 */
			Token_expired,
			/** 100000000 */
			Yes
		}
		enum msevtmgt_providerservicestatus {
			/** 100000002 */
			Forbidden,
			/** 100000000 */
			Healthy,
			/** 100000001 */
			Not_authenticated,
			/** 100000003 */
			Unhealthy
		}
		enum msevtmgt_UpdateCredentials {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
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
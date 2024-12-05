//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormWebinar_provider {
		interface tab_GeneralTab_Sections {
			CredentialsSection: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_base_service_url: DevKit.Controls.String;
			/** The client ID that identifies this Dynamics 365 organization to the webinar provider. The webinar provider generates this ID. */
			msevtmgt_clientid: DevKit.Controls.String;
			/** The client secret */
			msevtmgt_clientsecret: DevKit.Controls.String;
			msevtmgt_MaxDurationInMinutes: DevKit.Controls.Integer;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			/** Privacy policy URL */
			msevtmgt_privacypolicy: DevKit.Controls.String;
			/** Terms of service URL */
			msevtmgt_termsofservice: DevKit.Controls.String;
			msevtmgt_updatecredentials: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			msevtmgt_msevtmgt_webinarprovider_msevtmgt_webinartype_WebinarProviderId: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msevtmgt_webinarconf_Prov: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_webinarprovider_webinarconsent: DevKit.Controls.NavigationItem
		}
	}
	class FormWebinar_provider extends DevKit.IForm {
		/**
		* Webinar provider [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Webinar_provider */
		Body: DevKit.FormWebinar_provider.Body;
		/** The Navigation of form Webinar_provider */
		Navigation: DevKit.FormWebinar_provider.Navigation;
		/** The SidePanes of form Webinar_provider */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_WebinarProviderApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_WebinarProviderApi
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
		msevtmgt_base_service_url: string;
		/** The client ID that identifies this Dynamics 365 organization to the webinar provider. The webinar provider generates this ID. */
		msevtmgt_clientid: string;
		/** The client secret */
		msevtmgt_clientsecret: string;
		/** If the value is set to 'Yes', the webinar provider comes out of the box and it's preconfigured by Microsoft. */
		msevtmgt_IsDefaultProvider: boolean;
		msevtmgt_MaxDurationInMinutes: number;
		/** The name of the custom entity */
		msevtmgt_name: string;
		/** Privacy policy URL */
		msevtmgt_privacypolicy: string;
		/** Terms of service URL */
		msevtmgt_termsofservice: string;
		msevtmgt_updatecredentials: boolean;
		/** Unique identifier for entity instances */
		msevtmgt_WebinarProviderId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the webinar provider */
		statecode: OptionSet.msevtmgt_WebinarProvider.statecode;
		/** Reason for the status of the webinar provider */
		statuscode: OptionSet.msevtmgt_WebinarProvider.statuscode;
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
			readonly msevtmgt_base_service_url: string;
			/** The client ID that identifies this Dynamics 365 organization to the webinar provider. The webinar provider generates this ID. */
			readonly msevtmgt_clientid: string;
			/** The client secret */
			readonly msevtmgt_clientsecret: string;
			/** If the value is set to 'Yes', the webinar provider comes out of the box and it's preconfigured by Microsoft. */
			readonly msevtmgt_IsDefaultProvider: string;
			readonly msevtmgt_MaxDurationInMinutes: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			/** Privacy policy URL */
			readonly msevtmgt_privacypolicy: string;
			/** Terms of service URL */
			readonly msevtmgt_termsofservice: string;
			readonly msevtmgt_updatecredentials: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_WebinarProviderId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the webinar provider */
			readonly statecode: string;
			/** Reason for the status of the webinar provider */
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
	namespace msevtmgt_WebinarProvider {
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
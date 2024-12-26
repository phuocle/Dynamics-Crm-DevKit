//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_redirect_Information {
		interface Tabs {
		}
		interface Body {
			/** The path to redirect visitors from */
			mspp_inboundurl: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** The path to redirect visitors to */
			mspp_redirecturl: DevKit.Controls.String;
			/** Unique identifier for Site Marker associated with Redirect. */
			mspp_sitemarkerid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Redirect. */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Redirect. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {
			mspp_redirect_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			mspp_redirect_adx_portalcomments: DevKit.Controls.NavigationItem,
			mspp_redirect_Appointments: DevKit.Controls.NavigationItem,
			mspp_redirect_BulkOperations: DevKit.Controls.NavigationItem,
			mspp_redirect_CampaignActivities: DevKit.Controls.NavigationItem,
			mspp_redirect_CampaignResponses: DevKit.Controls.NavigationItem,
			mspp_redirect_Emails: DevKit.Controls.NavigationItem,
			mspp_redirect_IncidentResolutions: DevKit.Controls.NavigationItem,
			mspp_redirect_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			mspp_redirect_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			mspp_redirect_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			mspp_redirect_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			mspp_redirect_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			mspp_redirect_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			mspp_redirect_msfp_alerts: DevKit.Controls.NavigationItem,
			mspp_redirect_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			mspp_redirect_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			mspp_redirect_OpportunityCloses: DevKit.Controls.NavigationItem,
			mspp_redirect_OrderCloses: DevKit.Controls.NavigationItem,
			mspp_redirect_PhoneCalls: DevKit.Controls.NavigationItem,
			mspp_redirect_QuoteCloses: DevKit.Controls.NavigationItem,
			mspp_redirect_ServiceAppointments: DevKit.Controls.NavigationItem,
			mspp_redirect_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_redirect_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_redirect_Information */
		Body: DevKit.Formmspp_redirect_Information.Body;
		/** The Navigation of form mspp_redirect_Information */
		Navigation: DevKit.Formmspp_redirect_Information.Navigation;
		/** The SidePanes of form mspp_redirect_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_redirectApi {
		/**
		* DynamicsCrm.DevKit mspp_redirectApi
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
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		/** The path to redirect visitors from */
		mspp_inboundurl: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for entity instances */
		mspp_redirectId: string;
		/** The path to redirect visitors to */
		mspp_redirecturl: string;
		/** Unique identifier for Site Marker associated with Redirect. */
		mspp_sitemarkerid: string;
		mspp_statuscode: OptionSet.mspp_redirect.mspp_statuscode;
		/** Unique identifier for Web Page associated with Redirect. */
		mspp_webpageid: string;
		/** Unique identifier for Website associated with Redirect. */
		mspp_websiteid: string;
		/** Status of the Redirect */
		statecode: OptionSet.mspp_redirect.statecode;
		/** Reason for the status of the Redirect */
		statuscode: OptionSet.mspp_redirect.statuscode;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** The path to redirect visitors from */
			readonly mspp_inboundurl: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for entity instances */
			readonly mspp_redirectId: string;
			/** The path to redirect visitors to */
			readonly mspp_redirecturl: string;
			/** Unique identifier for Site Marker associated with Redirect. */
			readonly mspp_sitemarkerid: string;
			readonly mspp_statuscode: string;
			/** Unique identifier for Web Page associated with Redirect. */
			readonly mspp_webpageid: string;
			/** Unique identifier for Website associated with Redirect. */
			readonly mspp_websiteid: string;
			/** Status of the Redirect */
			readonly statecode: string;
			/** Reason for the status of the Redirect */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_redirect {
		enum mspp_statuscode {
			/** 301 */
			_301_Permanent_Redirect,
			/** 302 */
			_302_Temporary_Redirect
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
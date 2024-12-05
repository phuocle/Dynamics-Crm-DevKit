//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_shortcut_Information {
		interface Tabs {
		}
		interface Body {
			mspp_description: DevKit.Controls.String;
			mspp_description1: DevKit.Controls.String;
			mspp_disabletargetvalidation: DevKit.Controls.Boolean;
			mspp_displayorder: DevKit.Controls.Integer;
			mspp_externalurl: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Page associated with Shortcut. */
			mspp_parentpage_webpageid: DevKit.Controls.Lookup;
			mspp_title: DevKit.Controls.String;
			/** Web File that is pointed to by the shortcut */
			mspp_webfileid: DevKit.Controls.Lookup;
			/** The web page that the shortcut points to */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Shortcut. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {
			mspp_shortcut_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			mspp_shortcut_adx_portalcomments: DevKit.Controls.NavigationItem,
			mspp_shortcut_Appointments: DevKit.Controls.NavigationItem,
			mspp_shortcut_BulkOperations: DevKit.Controls.NavigationItem,
			mspp_shortcut_CampaignActivities: DevKit.Controls.NavigationItem,
			mspp_shortcut_CampaignResponses: DevKit.Controls.NavigationItem,
			mspp_shortcut_Emails: DevKit.Controls.NavigationItem,
			mspp_shortcut_IncidentResolutions: DevKit.Controls.NavigationItem,
			mspp_shortcut_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			mspp_shortcut_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			mspp_shortcut_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			mspp_shortcut_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			mspp_shortcut_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			mspp_shortcut_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			mspp_shortcut_msfp_alerts: DevKit.Controls.NavigationItem,
			mspp_shortcut_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			mspp_shortcut_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			mspp_shortcut_OpportunityCloses: DevKit.Controls.NavigationItem,
			mspp_shortcut_OrderCloses: DevKit.Controls.NavigationItem,
			mspp_shortcut_PhoneCalls: DevKit.Controls.NavigationItem,
			mspp_shortcut_QuoteCloses: DevKit.Controls.NavigationItem,
			mspp_shortcut_ServiceAppointments: DevKit.Controls.NavigationItem,
			mspp_shortcut_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_shortcut_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_shortcut_Information */
		Body: DevKit.Formmspp_shortcut_Information.Body;
		/** The Navigation of form mspp_shortcut_Information */
		Navigation: DevKit.Formmspp_shortcut_Information.Navigation;
		/** The SidePanes of form mspp_shortcut_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_shortcutApi {
		/**
		* DynamicsCrm.DevKit mspp_shortcutApi
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
		mspp_description: string;
		mspp_disabletargetvalidation: boolean;
		mspp_displayorder: number;
		mspp_externalurl: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for Web Page associated with Shortcut. */
		mspp_parentpage_webpageid: string;
		/** Unique identifier for entity instances */
		mspp_shortcutId: string;
		mspp_title: string;
		/** Web File that is pointed to by the shortcut */
		mspp_webfileid: string;
		/** The web page that the shortcut points to */
		mspp_webpageid: string;
		/** Unique identifier for Website associated with Shortcut. */
		mspp_websiteid: string;
		/** Status of the Shortcut */
		statecode: OptionSet.mspp_shortcut.statecode;
		/** Reason for the status of the Shortcut */
		statuscode: OptionSet.mspp_shortcut.statuscode;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			readonly mspp_disabletargetvalidation: string;
			readonly mspp_displayorder: string;
			readonly mspp_externalurl: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for Web Page associated with Shortcut. */
			readonly mspp_parentpage_webpageid: string;
			/** Unique identifier for entity instances */
			readonly mspp_shortcutId: string;
			readonly mspp_title: string;
			/** Web File that is pointed to by the shortcut */
			readonly mspp_webfileid: string;
			/** The web page that the shortcut points to */
			readonly mspp_webpageid: string;
			/** Unique identifier for Website associated with Shortcut. */
			readonly mspp_websiteid: string;
			/** Status of the Shortcut */
			readonly statecode: string;
			/** Reason for the status of the Shortcut */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_shortcut {
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
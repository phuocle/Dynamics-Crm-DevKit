//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_publishingstatetransitionrule_Information {
		interface tab_tab_webroles_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webroles extends DevKit.Controls.ITab {
			Section: tab_tab_webroles_Sections;
		}
		interface Tabs {
			tab_webroles: tab_tab_webroles;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
			mspp_fromstate_publishingstateid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
			mspp_tostate_publishingstateid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Publishing State Transition Rule. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {
			mspp_publishingstatetransitionrule_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_adx_portalcomments: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_Appointments: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_BulkOperations: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_CampaignActivities: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_CampaignResponses: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_Emails: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_IncidentResolutions: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msfp_alerts: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_OpportunityCloses: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_OrderCloses: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_PhoneCalls: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_QuoteCloses: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_ServiceAppointments: DevKit.Controls.NavigationItem,
			mspp_publishingstatetransitionrule_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webroles: DevKit.Controls.Grid;
		}
	}
	class Formmspp_publishingstatetransitionrule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_publishingstatetransitionrule_Information */
		Body: DevKit.Formmspp_publishingstatetransitionrule_Information.Body;
		/** The Navigation of form mspp_publishingstatetransitionrule_Information */
		Navigation: DevKit.Formmspp_publishingstatetransitionrule_Information.Navigation;
		/** The Grid of form mspp_publishingstatetransitionrule_Information */
		Grid: DevKit.Formmspp_publishingstatetransitionrule_Information.Grid;
		/** The SidePanes of form mspp_publishingstatetransitionrule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_publishingstatetransitionruleApi {
		/**
		* DynamicsCrm.DevKit mspp_publishingstatetransitionruleApi
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
		/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
		mspp_fromstate_publishingstateid: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for entity instances */
		mspp_publishingstatetransitionruleId: string;
		/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
		mspp_tostate_publishingstateid: string;
		/** Unique identifier for Website associated with Publishing State Transition Rule. */
		mspp_websiteid: string;
		/** Status of the Publishing State Transition Rule */
		statecode: OptionSet.mspp_publishingstatetransitionrule.statecode;
		/** Reason for the status of the Publishing State Transition Rule */
		statuscode: OptionSet.mspp_publishingstatetransitionrule.statuscode;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
			readonly mspp_fromstate_publishingstateid: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for entity instances */
			readonly mspp_publishingstatetransitionruleId: string;
			/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
			readonly mspp_tostate_publishingstateid: string;
			/** Unique identifier for Website associated with Publishing State Transition Rule. */
			readonly mspp_websiteid: string;
			/** Status of the Publishing State Transition Rule */
			readonly statecode: string;
			/** Reason for the status of the Publishing State Transition Rule */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_publishingstatetransitionrule {
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
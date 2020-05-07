//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_incidenttype_Information {
		interface tab__C6408E85_49E7_4216_BF96_986A20C64ECB_Sections {
			_AA02FBB3_348E_4F8C_BC8E_1FE3F9BD7D90: DevKit.Form.Controls.ControlSection;
			_2405DB6B_E18C_49E5_A76B_505837745C84: DevKit.Form.Controls.ControlSection;
			_C6408E85_49E7_4216_BF96_986A20C64ECB_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_details_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__C6408E85_49E7_4216_BF96_986A20C64ECB extends DevKit.Form.Controls.IControlTab {
			Section: tab__C6408E85_49E7_4216_BF96_986A20C64ECB_Sections;
		}
		interface tab_f1tab_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_details_Sections;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_6 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_7_Sections;
		}
		interface Tabs {
			_C6408E85_49E7_4216_BF96_986A20C64ECB: tab__C6408E85_49E7_4216_BF96_986A20C64ECB;
			f1tab_details: tab_f1tab_details;
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
		}
		interface Body {
			Tab: Tabs;
			incidentproductssubgrid: DevKit.Form.Controls.ControlGrid;
			incidentservicessubgrid: DevKit.Form.Controls.ControlGrid;
			servicetasksgrid: DevKit.Form.Controls.ControlGrid;
			Characteristics: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_CopyIncidentItemstoAgreement: DevKit.Form.Controls.ControlBoolean;
			/** Unique identifier for Work Order Type associated with Incident Type. */
			msdyn_DefaultWorkOrderType: DevKit.Form.Controls.ControlLookup;
			/** Incident Type description. This will be the default description shown on the work order */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows date and time when the Suggested Duration value was updated. */
			msdyn_LastCalculatedTime: DevKit.Form.Controls.ControlDateTime;
			/** Incident Type name */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Suggested duration is average of actual duration of historical bookings with the same incident type */
			msdyn_SuggestedDuration: DevKit.Form.Controls.ControlInteger;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Incident Type */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_incidenttype_requirementgroup_incident: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_incidenttype_incident_IncidentType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_incidenttype_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_incidenttype_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_incidenttype_Information */
		Body: LuckyMokey.Formmsdyn_incidenttype_Information.Body;
		/** The Footer section of form msdyn_incidenttype_Information */
		Footer: LuckyMokey.Formmsdyn_incidenttype_Information.Footer;
		/** The Navigation of form msdyn_incidenttype_Information */
		Navigation: LuckyMokey.Formmsdyn_incidenttype_Information.Navigation;
	}
	class msdyn_incidenttypeApi {
		/**
		* DynamicsCrm.DevKit msdyn_incidenttypeApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_CopyIncidentItemstoAgreement: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Work Order Type associated with Incident Type. */
		msdyn_DefaultWorkOrderType: DevKit.WebApi.LookupValue;
		/** Incident Type description. This will be the default description shown on the work order */
		msdyn_Description: DevKit.WebApi.StringValue;
		msdyn_EstimatedDuration: DevKit.WebApi.IntegerValue;
		/** Shows the entity instances. */
		msdyn_incidenttypeId: DevKit.WebApi.GuidValue;
		/** Shows date and time when the Suggested Duration value was updated. */
		msdyn_LastCalculatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Incident Type name */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Suggested duration is average of actual duration of historical bookings with the same incident type */
		msdyn_SuggestedDuration: DevKit.WebApi.IntegerValue;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Incident Type */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Incident Type */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_incidenttype {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
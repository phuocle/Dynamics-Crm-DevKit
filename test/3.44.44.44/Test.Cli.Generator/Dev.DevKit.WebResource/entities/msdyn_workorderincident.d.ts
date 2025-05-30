﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workorderincident_Information {
		interface tab_f1tab_resolution_Sections {
			_0366D152_E56D_4D51_B9ED_9BF3C729CE77_SECTION_3: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			workorderresolutionksection: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_workorderproductstab_Sections {
			workorderproductssection: DevKit.Controls.Section;
		}
		interface tab_workorderservicestab_Sections {
			workorderservicessection: DevKit.Controls.Section;
		}
		interface tab_workorderservicetaskstab_Sections {
			workorderservicetasksection: DevKit.Controls.Section;
		}
		interface tab_f1tab_resolution extends DevKit.Controls.ITab {
			Section: tab_f1tab_resolution_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_8 extends DevKit.Controls.ITab {
			Section: tab_tab_8_Sections;
		}
		interface tab_workorderproductstab extends DevKit.Controls.ITab {
			Section: tab_workorderproductstab_Sections;
		}
		interface tab_workorderservicestab extends DevKit.Controls.ITab {
			Section: tab_workorderservicestab_Sections;
		}
		interface tab_workorderservicetaskstab extends DevKit.Controls.ITab {
			Section: tab_workorderservicetaskstab_Sections;
		}
		interface Tabs {
			f1tab_resolution: tab_f1tab_resolution;
			tab_7: tab_tab_7;
			tab_8: tab_tab_8;
			workorderproductstab: tab_workorderproductstab;
			workorderservicestab: tab_workorderservicestab;
			workorderservicetaskstab: tab_workorderservicetaskstab;
		}
		interface Body {
			Tab: Tabs;
			/** Agreement Booking Incident linked to this Work Order Incident */
			msdyn_AgreementBookingIncident: DevKit.Controls.Lookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_Description: DevKit.Controls.String;
			/** Incident description */
			msdyn_Description1: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Workorder incident's functional location. */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Shows if the incident has been resolved by one of its related tasks. */
			msdyn_IncidentResolved: DevKit.Controls.Boolean;
			/** Incident type reported */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			msdyn_IsPrimary: DevKit.Controls.Boolean;
			msdyn_ItemsPopulated: DevKit.Controls.Boolean;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_PrimaryResolution: DevKit.Controls.Lookup;
			/** Shows the percent completed on associated tasks. This indicates the total of completed tasks, but not if the incident was resolved. */
			msdyn_TasksPercentCompleted: DevKit.Controls.Double;
			/** Indicates the Trade that associated with the Work Order Incident. */
			msdyn_Trade: DevKit.Controls.Lookup;
			/** Parent Work Order where incident was reported on */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			workorderproductsgrid: DevKit.Controls.Grid;
			workorderresolutiongrid: DevKit.Controls.Grid;
			workorderservicesgrid: DevKit.Controls.Grid;
			workorderservicetasksgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_workorderincident_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workorderincident_Information */
		Body: DevKit.Formmsdyn_workorderincident_Information.Body;
		/** The Navigation of form msdyn_workorderincident_Information */
		Navigation: DevKit.Formmsdyn_workorderincident_Information.Navigation;
		/** The Grid of form msdyn_workorderincident_Information */
		Grid: DevKit.Formmsdyn_workorderincident_Information.Grid;
		/** The SidePanes of form msdyn_workorderincident_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Incident_Mobile {
		interface tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77_Sections {
			_0366D152_E56D_4D51_B9ED_9BF3C729CE77_SECTION_3: DevKit.Controls.Section;
			_28146354_51ED_48D8_A48D_42EBC5D11F28: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
		}
		interface tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77 extends DevKit.Controls.ITab {
			Section: tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			_0366D152_E56D_4D51_B9ED_9BF3C729CE77: tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Workorder incident's functional location. */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Incident type reported */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** For internal use only. */
			msdyn_InternalFlags: DevKit.Controls.String;
			msdyn_IsPrimary: DevKit.Controls.Boolean;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_PrimaryResolution: DevKit.Controls.Lookup;
			/** Indicates the Trade that associated with the Work Order Incident. */
			msdyn_Trade: DevKit.Controls.Lookup;
			/** Parent Work Order where incident was reported on */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorderincident_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			workorderproductsgrid: DevKit.Controls.Grid;
			workorderservicesgrid: DevKit.Controls.Grid;
			workorderservicetasksgrid: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order_Incident_Mobile extends DevKit.IForm {
		/**
		* Work Order Incident - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Incident_Mobile */
		Body: DevKit.FormWork_Order_Incident_Mobile.Body;
		/** The Navigation of form Work_Order_Incident_Mobile */
		Navigation: DevKit.FormWork_Order_Incident_Mobile.Navigation;
		/** The Grid of form Work_Order_Incident_Mobile */
		Grid: DevKit.FormWork_Order_Incident_Mobile.Grid;
		/** The SidePanes of form Work_Order_Incident_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_workorderincidentApi {
		/**
		* DynamicsCrm.DevKit msdyn_workorderincidentApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Agreement Booking Incident linked to this Work Order Incident */
		msdyn_AgreementBookingIncident: string;
		/** Customer Asset related to this incident reported */
		msdyn_CustomerAsset: string;
		/** Incident description */
		msdyn_Description: string;
		/** Shows the time estimated to resolve this incident. */
		msdyn_EstimatedDuration: number;
		/** Workorder incident's functional location. */
		msdyn_FunctionalLocation: string;
		/** Shows if the incident has been resolved by one of its related tasks. */
		msdyn_IncidentResolved: boolean;
		/** Incident type reported */
		msdyn_IncidentType: string;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		msdyn_IsMobile: boolean;
		msdyn_IsPrimary: boolean;
		msdyn_ItemsPopulated: boolean;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		msdyn_PrimaryResolution: string;
		/** Resource Requirement */
		msdyn_ResourceRequirement: string;
		/** Shows the percent completed on associated tasks. This indicates the total of completed tasks, but not if the incident was resolved. */
		msdyn_TasksPercentCompleted: number;
		/** Indicates the Trade that associated with the Work Order Incident. */
		msdyn_Trade: string;
		/** Parent Work Order where incident was reported on */
		msdyn_WorkOrder: string;
		/** Shows the entity instances. */
		msdyn_workorderincidentId: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Work Order Incident */
		statecode: OptionSet.msdyn_workorderincident.statecode;
		/** Reason for the status of the Work Order Incident */
		statuscode: OptionSet.msdyn_workorderincident.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Agreement Booking Incident linked to this Work Order Incident */
			readonly msdyn_AgreementBookingIncident: string;
			/** Customer Asset related to this incident reported */
			readonly msdyn_CustomerAsset: string;
			/** Incident description */
			readonly msdyn_Description: string;
			/** Shows the time estimated to resolve this incident. */
			readonly msdyn_EstimatedDuration: string;
			/** Workorder incident's functional location. */
			readonly msdyn_FunctionalLocation: string;
			/** Shows if the incident has been resolved by one of its related tasks. */
			readonly msdyn_IncidentResolved: string;
			/** Incident type reported */
			readonly msdyn_IncidentType: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			readonly msdyn_IsMobile: string;
			readonly msdyn_IsPrimary: string;
			readonly msdyn_ItemsPopulated: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_PrimaryResolution: string;
			/** Resource Requirement */
			readonly msdyn_ResourceRequirement: string;
			/** Shows the percent completed on associated tasks. This indicates the total of completed tasks, but not if the incident was resolved. */
			readonly msdyn_TasksPercentCompleted: string;
			/** Indicates the Trade that associated with the Work Order Incident. */
			readonly msdyn_Trade: string;
			/** Parent Work Order where incident was reported on */
			readonly msdyn_WorkOrder: string;
			/** Shows the entity instances. */
			readonly msdyn_workorderincidentId: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Work Order Incident */
			readonly statecode: string;
			/** Reason for the status of the Work Order Incident */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_workorderincident {
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
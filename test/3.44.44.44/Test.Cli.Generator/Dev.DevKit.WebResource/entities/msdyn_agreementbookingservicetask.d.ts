//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAgreement_Booking_Service_Task_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_4: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_service_task_relates_to: DevKit.Controls.Section;
			InspectionFormSection_Mobile: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			fstab_other_section: DevKit.Controls.Section;
			fstab_other_section_2: DevKit.Controls.Section;
			fstab_other_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Agreement associated with Agreement Booking Service Task. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Shows the agreement booking incident associated with the agreement booking service task. */
			msdyn_AgreementBookingIncident: DevKit.Controls.Lookup;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Service Task. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Unique identifier for Customer Asset associated with Agreement Booking Service Task. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			msdyn_Description: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Unique identifier for Inspection Template associated with Agreement Booking Service Task. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Depicts whether inspection template is enabled for Agreement Booking Service Task */
			msdyn_InspectionEnabled: DevKit.Controls.Boolean;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Inspection Template associated with Agreement Booking Service Task. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Unique identifier for Service Task Type associated with Agreement Booking Service Task. */
			msdyn_TaskType: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_agreementbookingservicetask_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_Appointments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_Emails: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_Tasks: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask: DevKit.Controls.NavigationItem
		}
	}
	class FormAgreement_Booking_Service_Task_Mobile extends DevKit.IForm {
		/**
		* Agreement Booking Service Task - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Booking_Service_Task_Mobile */
		Body: DevKit.FormAgreement_Booking_Service_Task_Mobile.Body;
		/** The Navigation of form Agreement_Booking_Service_Task_Mobile */
		Navigation: DevKit.FormAgreement_Booking_Service_Task_Mobile.Navigation;
		/** The SidePanes of form Agreement_Booking_Service_Task_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_agreementbookingservicetask_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Agreement associated with Agreement Booking Service Task. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Shows the agreement booking incident associated with the agreement booking service task. */
			msdyn_AgreementBookingIncident: DevKit.Controls.Lookup;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Service Task. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Unique identifier for Customer Asset associated with Agreement Booking Service Task. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			msdyn_Description: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Unique identifier for Inspection Template associated with Agreement Booking Service Task. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Depicts whether inspection template is enabled for Agreement Booking Service Task */
			msdyn_InspectionEnabled: DevKit.Controls.Boolean;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Inspection Template associated with Agreement Booking Service Task. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Unique identifier for Service Task Type associated with Agreement Booking Service Task. */
			msdyn_TaskType: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_agreementbookingservicetask_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_Appointments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_Emails: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingservicetask_Tasks: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_agreementbookingservicetask_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agreementbookingservicetask_Information */
		Body: DevKit.Formmsdyn_agreementbookingservicetask_Information.Body;
		/** The Navigation of form msdyn_agreementbookingservicetask_Information */
		Navigation: DevKit.Formmsdyn_agreementbookingservicetask_Information.Navigation;
		/** The SidePanes of form msdyn_agreementbookingservicetask_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_agreementbookingservicetaskApi {
		/**
		* DynamicsCrm.DevKit msdyn_agreementbookingservicetaskApi
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
		/** Unique identifier for Agreement associated with Agreement Booking Service Task. */
		msdyn_Agreement: string;
		/** Shows the agreement booking incident associated with the agreement booking service task. */
		msdyn_AgreementBookingIncident: string;
		/** Shows the entity instances. */
		msdyn_agreementbookingservicetaskId: string;
		/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Service Task. */
		msdyn_AgreementBookingSetup: string;
		/** Unique identifier for Customer Asset associated with Agreement Booking Service Task. */
		msdyn_CustomerAsset: string;
		msdyn_Description: string;
		msdyn_EstimatedDuration: number;
		/** Unique identifier for Inspection Template associated with Agreement Booking Service Task. */
		msdyn_Inspection: string;
		/** Depicts whether inspection template is enabled for Agreement Booking Service Task */
		msdyn_InspectionEnabled: boolean;
		msdyn_InternalFlags: string;
		msdyn_IsCopied: boolean;
		msdyn_LineOrder: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for Service Task Type associated with Agreement Booking Service Task. */
		msdyn_TaskType: string;
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
		/** Status of the Agreement Booking Service Task */
		statecode: OptionSet.msdyn_agreementbookingservicetask.statecode;
		/** Reason for the status of the Agreement Booking Service Task */
		statuscode: OptionSet.msdyn_agreementbookingservicetask.statuscode;
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
			/** Unique identifier for Agreement associated with Agreement Booking Service Task. */
			readonly msdyn_Agreement: string;
			/** Shows the agreement booking incident associated with the agreement booking service task. */
			readonly msdyn_AgreementBookingIncident: string;
			/** Shows the entity instances. */
			readonly msdyn_agreementbookingservicetaskId: string;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Service Task. */
			readonly msdyn_AgreementBookingSetup: string;
			/** Unique identifier for Customer Asset associated with Agreement Booking Service Task. */
			readonly msdyn_CustomerAsset: string;
			readonly msdyn_Description: string;
			readonly msdyn_EstimatedDuration: string;
			/** Unique identifier for Inspection Template associated with Agreement Booking Service Task. */
			readonly msdyn_Inspection: string;
			/** Depicts whether inspection template is enabled for Agreement Booking Service Task */
			readonly msdyn_InspectionEnabled: string;
			readonly msdyn_InternalFlags: string;
			readonly msdyn_IsCopied: string;
			readonly msdyn_LineOrder: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for Service Task Type associated with Agreement Booking Service Task. */
			readonly msdyn_TaskType: string;
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
			/** Status of the Agreement Booking Service Task */
			readonly statecode: string;
			/** Reason for the status of the Agreement Booking Service Task */
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
	namespace msdyn_agreementbookingservicetask {
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
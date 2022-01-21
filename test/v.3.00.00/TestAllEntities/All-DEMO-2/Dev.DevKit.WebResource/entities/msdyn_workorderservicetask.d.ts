//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workorderservicetask_Information {
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface Tabs {
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
		}
		interface Body {
			Tab: Tabs;
			msdyn_ActualDuration: DevKit.Controls.Integer;
			/** Agreement Booking Service Task linked to this Work Order Service Task */
			msdyn_AgreementBookingServiceTask: DevKit.Controls.Lookup;
			/** Agreement Booking Service Task linked to this Work Order Service Task */
			msdyn_AgreementBookingServiceTask1: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking1: DevKit.Controls.Lookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset1: DevKit.Controls.Lookup;
			msdyn_Description: DevKit.Controls.String;
			msdyn_Description1: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Unique identifier for Inspection Template associated with Work Order Service Task. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Definition associated with Work Order Service Task. */
			msdyn_inspectiondefinitionid: DevKit.Controls.Lookup;
			/** Depicts whether inspection template is enabled for Work Order Service Task Type. */
			msdyn_InspectionEnabled: DevKit.Controls.Boolean;
			/** Depicts the result of Inspection that the user enters */
			msdyn_inspectiontaskresult: DevKit.Controls.OptionSet;
			/** Shows the order of this task within the work order service tasks. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_PercentComplete: DevKit.Controls.Double;
			/** For internal use only */
			msdyn_surveyboundedoutput: DevKit.Controls.String;
			/** Unique identifier for Service Task Type associated with Work Order Service Task. */
			msdyn_TaskType: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Work Order Service Task. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident1: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Work Order Service Task */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_workorderservicetask_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workorderservicetask_Information */
		Body: DevKit.Formmsdyn_workorderservicetask_Information.Body;
		/** The Footer section of form msdyn_workorderservicetask_Information */
		Footer: DevKit.Formmsdyn_workorderservicetask_Information.Footer;
		/** The Navigation of form msdyn_workorderservicetask_Information */
		Navigation: DevKit.Formmsdyn_workorderservicetask_Information.Navigation;
		/** The Process of form msdyn_workorderservicetask_Information */
		Process: DevKit.Formmsdyn_workorderservicetask_Information.Process;
		/** The SidePanes of form msdyn_workorderservicetask_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Service_Task_Mobile {
		interface tab__1932B377_2E7E_4880_9B0E_477CC529B5FE_Sections {
			_1932B377_2E7E_4880_9B0E_477CC529B5FE_SECTION_2: DevKit.Controls.Section;
			_594A0AD8_A9A3_4509_9E40_52F6789D7512: DevKit.Controls.Section;
			fstab_general_section_duration: DevKit.Controls.Section;
			fstab_sub_grids_section: DevKit.Controls.Section;
			InspectionFormSection_Mobile: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab__1932B377_2E7E_4880_9B0E_477CC529B5FE extends DevKit.Controls.ITab {
			Section: tab__1932B377_2E7E_4880_9B0E_477CC529B5FE_Sections;
		}
		interface Tabs {
			_1932B377_2E7E_4880_9B0E_477CC529B5FE: tab__1932B377_2E7E_4880_9B0E_477CC529B5FE;
		}
		interface Body {
			Tab: Tabs;
			msdyn_ActualDuration: DevKit.Controls.Integer;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking: DevKit.Controls.Lookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			msdyn_Description: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Unique identifier for Inspection Template associated with Work Order Service Task. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Definition associated with Work Order Service Task. */
			msdyn_inspectiondefinitionid: DevKit.Controls.Lookup;
			/** Depicts whether inspection template is enabled for Work Order Service Task Type. */
			msdyn_InspectionEnabled: DevKit.Controls.Boolean;
			/** Depicts the result of Inspection that the user enters */
			msdyn_inspectiontaskresult: DevKit.Controls.OptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_PercentComplete: DevKit.Controls.Double;
			/** For internal use only */
			msdyn_surveyboundedoutput: DevKit.Controls.String;
			/** Unique identifier for Service Task Type associated with Work Order Service Task. */
			msdyn_TaskType: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Work Order Service Task. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormWork_Order_Service_Task_Mobile extends DevKit.IForm {
		/**
		* Work Order Service Task - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Service_Task_Mobile */
		Body: DevKit.FormWork_Order_Service_Task_Mobile.Body;
		/** The Navigation of form Work_Order_Service_Task_Mobile */
		Navigation: DevKit.FormWork_Order_Service_Task_Mobile.Navigation;
		/** The Process of form Work_Order_Service_Task_Mobile */
		Process: DevKit.FormWork_Order_Service_Task_Mobile.Process;
		/** The SidePanes of form Work_Order_Service_Task_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_workorderservicetaskApi {
		/**
		* DynamicsCrm.DevKit msdyn_workorderservicetaskApi
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
		msdyn_ActualDuration: DevKit.WebApi.IntegerValue;
		/** Agreement Booking Service Task linked to this Work Order Service Task */
		msdyn_AgreementBookingServiceTask: DevKit.WebApi.LookupValue;
		/** Unique identifier for Resource Booking associated with Work Order Service Task. */
		msdyn_Booking: DevKit.WebApi.LookupValue;
		/** Unique identifier for Customer Asset associated with Work Order Service Task. */
		msdyn_CustomerAsset: DevKit.WebApi.LookupValue;
		msdyn_Description: DevKit.WebApi.StringValue;
		msdyn_EstimatedDuration: DevKit.WebApi.IntegerValue;
		/** Unique identifier for Inspection Template associated with Work Order Service Task. */
		msdyn_Inspection: DevKit.WebApi.LookupValue;
		/** Unique identifier for Inspection Definition associated with Work Order Service Task. */
		msdyn_inspectiondefinitionid: DevKit.WebApi.LookupValue;
		/** Depicts whether inspection template is enabled for Work Order Service Task Type. */
		msdyn_InspectionEnabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Inspection Response associated with Work Order Service Task. */
		msdyn_inspectionresponseid: DevKit.WebApi.LookupValue;
		/** Output of the Inspection. */
		msdyn_InspectionResult: DevKit.WebApi.OptionSetValue;
		/** Depicts the result of Inspection that the user enters */
		msdyn_inspectiontaskresult: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** Shows the order of this task within the work order service tasks. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_PercentComplete: DevKit.WebApi.DoubleValue;
		/** For internal use only */
		msdyn_surveyboundedoutput: DevKit.WebApi.StringValue;
		/** Unique identifier for Service Task Type associated with Work Order Service Task. */
		msdyn_TaskType: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order associated with Work Order Service Task. */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
		msdyn_WorkOrderIncident: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_workorderservicetaskId: DevKit.WebApi.GuidValue;
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
		/** Status of the Work Order Service Task */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Work Order Service Task */
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
	namespace msdyn_workorderservicetask {
		enum msdyn_InspectionResult {
			/** 100000001 */
			Fail,
			/** 100000002 */
			Invalid,
			/** 100000000 */
			Pass
		}
		enum msdyn_inspectiontaskresult {
			/** 192350001 */
			Fail,
			/** 192350003 */
			NA,
			/** 192350002 */
			Partial_Success,
			/** 192350000 */
			Pass
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
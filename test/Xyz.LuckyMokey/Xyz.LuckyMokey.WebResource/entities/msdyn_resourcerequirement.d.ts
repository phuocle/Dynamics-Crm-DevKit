//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_resourcerequirement_Information {
		interface tab_Requirement_General_Sections {
			_DB0712F3_6333_4878_92C9_004903985F09: DevKit.Form.Controls.ControlSection;
			Requirement_Notes: DevKit.Form.Controls.ControlSection;
			_971E72A7_0E77_4C1E_80B9_E4EB74143E46_SECTION_3: DevKit.Form.Controls.ControlSection;
			_971E72A7_0E77_4C1E_80B9_E4EB74143E46_SECTION_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_project_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_FieldService_Sections {
			tab_FieldService_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_ResourceBookings_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Requirement_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_Requirement_General_Sections;
		}
		interface tab_tab_project extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_project_Sections;
		}
		interface tab_tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_FieldService_Sections;
		}
		interface tab_tab_ResourceBookings extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_ResourceBookings_Sections;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			Requirement_General: tab_Requirement_General;
			tab_project: tab_tab_project;
			tab_FieldService: tab_tab_FieldService;
			tab_ResourceBookings: tab_tab_ResourceBookings;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			RequirementCharacteristics: DevKit.Form.Controls.ControlGrid;
			RequirementResourceCategory: DevKit.Form.Controls.ControlGrid;
			RequirementResourcePreferences: DevKit.Form.Controls.ControlGrid;
			RequirementOrganizationUnit: DevKit.Form.Controls.ControlGrid;
			IFRAME_AvailabilityView: DevKit.Form.Controls.ControlIFrame;
			WebResource_msdyn_timewindowstart: DevKit.Form.Controls.ControlWebResource;
			WebResource_msdyn_timewindowend: DevKit.Form.Controls.ControlWebResource;
			/** Select the allocation method to be used for creating requirement distribution over a time period. */
			msdyn_allocationmethod: DevKit.Form.Controls.ControlOptionSet;
			/** The calendar that will be used for a resource requirement */
			msdyn_CalendarId: DevKit.Form.Controls.ControlString;
			/** Type the city where the resource is required. */
			msdyn_city: DevKit.Form.Controls.ControlString;
			/** Enter the cost price of the resource required. */
			msdyn_costprice: DevKit.Form.Controls.ControlMoney;
			/** Type the country/region where the resource is required. */
			msdyn_country: DevKit.Form.Controls.ControlString;
			/** Duration of total minutes required */
			msdyn_duration: DevKit.Form.Controls.ControlInteger;
			/** Effort that's required from resource capacity */
			msdyn_effort: DevKit.Form.Controls.ControlDecimal;
			msdyn_fromdate: DevKit.Form.Controls.ControlDate;
			/** The fulfilled duration, in minutes. */
			msdyn_FulfilledDuration: DevKit.Form.Controls.ControlInteger;
			msdyn_IsPrimary: DevKit.Form.Controls.ControlBoolean;
			/** The latitude to use for the location of a requirement. */
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			/** The longitude to use for the location of a requirement. */
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Enter the percentage of the calendar capacity required. */
			msdyn_percentage: DevKit.Form.Controls.ControlDecimal;
			msdyn_PoolType: DevKit.Form.Controls.ControlMultiOptionSet;
			/** Priority of the requirement. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Form.Controls.ControlLookup;
			/** Select the project for which the resource is required. */
			msdyn_projectid: DevKit.Form.Controls.ControlLookup;
			msdyn_ProposedDuration: DevKit.Form.Controls.ControlInteger;
			msdyn_RemainingDuration: DevKit.Form.Controls.ControlInteger;
			/** The status of the resource request associated with this requirement. */
			msdyn_requeststatus: DevKit.Form.Controls.ControlString;
			/** Requirement Group */
			msdyn_requirementgroupid: DevKit.Form.Controls.ControlLookup;
			msdyn_resourcetype: DevKit.Form.Controls.ControlMultiOptionSet;
			/** Type the state/province where the resource is required. */
			msdyn_stateorprovince: DevKit.Form.Controls.ControlString;
			/** Requirement Status */
			msdyn_Status: DevKit.Form.Controls.ControlLookup;
			msdyn_Territory: DevKit.Form.Controls.ControlLookup;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Form.Controls.ControlDateTime;
			msdyn_TimeGroup: DevKit.Form.Controls.ControlLookup;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Form.Controls.ControlDateTime;
			msdyn_TimeWindowEnd: DevKit.Form.Controls.ControlDateTime;
			msdyn_TimeWindowStart: DevKit.Form.Controls.ControlDateTime;
			/** End date of requirement period */
			msdyn_todate: DevKit.Form.Controls.ControlDate;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Form.Controls.ControlLookup;
			msdyn_WorkLocation: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for Work Order associated with Resource Requirement. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_resourcerequirement_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_resourcerequirement_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_resourcerequirement_Information */
		Body: LuckyMokey.Formmsdyn_resourcerequirement_Information.Body;
	}
	namespace FormInfomation {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select the allocation method to be used for creating requirement distribution over a time period. */
			msdyn_allocationmethod: DevKit.Form.Controls.ControlOptionSet;
			/** Duration of total minutes required */
			msdyn_duration: DevKit.Form.Controls.ControlInteger;
			msdyn_fromdate: DevKit.Form.Controls.ControlDate;
			/** The latitude to use for the location of a requirement. */
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			/** The longitude to use for the location of a requirement. */
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Enter the percentage of the calendar capacity required. */
			msdyn_percentage: DevKit.Form.Controls.ControlDecimal;
			msdyn_PoolType: DevKit.Form.Controls.ControlMultiOptionSet;
			/** Enter the number of resources required. */
			msdyn_quantity: DevKit.Form.Controls.ControlDecimal;
			/** Requirement Group */
			msdyn_requirementgroupid: DevKit.Form.Controls.ControlLookup;
			msdyn_resourcetype: DevKit.Form.Controls.ControlMultiOptionSet;
			/** Requirement Status */
			msdyn_Status: DevKit.Form.Controls.ControlLookup;
			/** End date of requirement period */
			msdyn_todate: DevKit.Form.Controls.ControlDate;
			/** Select the type of resource requirement. */
			msdyn_type: DevKit.Form.Controls.ControlOptionSet;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Form.Controls.ControlLookup;
			msdyn_WorkLocation: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormInfomation extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Infomation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Infomation */
		Body: LuckyMokey.FormInfomation.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_resourcerequirement {
		enum msdyn_allocationmethod {
			/** 192350000 */
			None,
			/** 192350001 */
			Full_capacity,
			/** 192350004 */
			Percentage_capacity,
			/** 192350003 */
			Distribute_evenly,
			/** 192350005 */
			Front_load
		}
		enum msdyn_PoolType {
			/** 192350000 */
			Account,
			/** 192350001 */
			Contact,
			/** 192350002 */
			User,
			/** 192350003 */
			Equipment,
			/** 192350004 */
			Facility
		}
		enum msdyn_resourcetype {
			/** 1 */
			Generic,
			/** 2 */
			Contact,
			/** 3 */
			User,
			/** 4 */
			Equipment,
			/** 5 */
			Account,
			/** 6 */
			Crew,
			/** 7 */
			Facility,
			/** 8 */
			Pool
		}
		enum msdyn_type {
			/** 192350000 */
			New,
			/** 192350001 */
			Extend
		}
		enum msdyn_WorkLocation {
			/** 690970000 */
			Onsite,
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic
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
//{'JsForm':['Infomation','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
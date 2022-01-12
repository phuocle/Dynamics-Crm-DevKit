//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMobile_Offline_Profile_Item {
		interface tab_GENERALINFORMATION_TAB_Sections {
			Entity_Selection: DevKit.Controls.Section;
			MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS: DevKit.Controls.Section;
		}
		interface tab_GENERALINFORMATION_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			GENERALINFORMATION_TAB: tab_GENERALINFORMATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the name of the mobile offline profile item. */
			Name: DevKit.Controls.String;
			/** Specify data download filter for selected entity */
			RecordDistributionCriteria: DevKit.Controls.OptionSet;
			/** Download my records */
			RecordsOwnedByMe: DevKit.Controls.Boolean;
			/** Download my business unit's records */
			RecordsOwnedByMyBusinessUnit: DevKit.Controls.Boolean;
			/** Download my team's records */
			RecordsOwnedByMyTeam: DevKit.Controls.Boolean;
			/** Mobile offline enabled entity */
			SelectedEntityTypeCode: DevKit.Controls.String;
		}
		interface Grid {
			profileassociationgrid: DevKit.Controls.Grid;
		}
	}
	class FormMobile_Offline_Profile_Item extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Mobile_Offline_Profile_Item Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mobile_Offline_Profile_Item */
		Body: DevKit.FormMobile_Offline_Profile_Item.Body;
		/** The Grid of form Mobile_Offline_Profile_Item */
		Grid: DevKit.FormMobile_Offline_Profile_Item.Grid;
		/** The SidePanes of form Mobile_Offline_Profile_Item */
		SidePanes: DevKit.SidePanes;
	}
	class MobileOfflineProfileItemApi {
		/**
		* DynamicsCrm.DevKit MobileOfflineProfileItemApi
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
		/** Specifies whether records of this entity can be followed. */
		CanBeFollowed: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Internal Use Only */
		EntityObjectTypeCode: DevKit.WebApi.IntegerValueReadonly;
		/** Specify whether records related to this entity will be made available for offline access. */
		GetRelatedEntityRecords: DevKit.WebApi.BooleanValue;
		/** Version in which the Mobile offline Profile Item is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether profile item is validated or not */
		IsValidated: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the mobile offline profile item is visible in the Profile Item subgrid. */
		IsVisibleInGrid: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the mobile offline profile item. */
		MobileOfflineProfileItemId: DevKit.WebApi.GuidValue;
		/** For Internal Use Only */
		MobileOfflineProfileItemIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the name of the mobile offline profile item. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the Mobile Offline Profile Item. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Profile item entity filter criteria */
		ProfileItemEntityFilter: DevKit.WebApi.StringValue;
		/** Saved Query associated with the Mobile offline profile item rule. */
		ProfileItemRule: DevKit.WebApi.LookupValue;
		/** Displays the last published date time. */
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Specify data download filter for selected entity */
		RecordDistributionCriteria: DevKit.WebApi.OptionSetValue;
		/** Download my records */
		RecordsOwnedByMe: DevKit.WebApi.BooleanValue;
		/** Download my business unit's records */
		RecordsOwnedByMyBusinessUnit: DevKit.WebApi.BooleanValue;
		/** Download my team's records */
		RecordsOwnedByMyTeam: DevKit.WebApi.BooleanValue;
		/** Items contained with a particular Profile. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Internal Use Only */
		RelationshipData: DevKit.WebApi.StringValue;
		/** Internal Use Only */
		SelectedEntityMetadata: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** How often to sync data offline. */
		SyncIntervalInMinutes: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Version number of the Mobile Offline Profile Item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Contains converted sql of the referenced view. */
		ViewQuery: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfileItem {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum RecordDistributionCriteria {
			/** 1 */
			All_records,
			/** 3 */
			Custom_data_filter,
			/** 0 */
			Download_related_data_only,
			/** 2 */
			Other_data_filter
		}
		enum SelectedEntityTypeCode {
			/** 1 */
			Account,
			/** 16 */
			AccountLeads,
			/** 10074 */
			Activity_File_Attachment,
			/** 10521 */
			Agreement_Business_Process,
			/** 4201 */
			Appointment,
			/** 10126 */
			Asset_Category_Template_Association,
			/** 10127 */
			Asset_Template_Association,
			/** 1001 */
			Attachment,
			/** 1150 */
			Bookable_Resource,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 10593 */
			Bookable_Resource_Booking_Quick_Note,
			/** 1152 */
			Booking_Status,
			/** 10518 */
			Booking_Timestamp,
			/** 112 */
			Case,
			/** 10520 */
			Case_to_Work_Order_Business_Process,
			/** 10605 */
			CFS_IoT_Alert_Process_Flow,
			/** 123 */
			Competitor,
			/** 1004 */
			Competitor_Address,
			/** 1006 */
			Competitor_Product,
			/** 3234 */
			Connection,
			/** 3231 */
			Connection_Role,
			/** 2 */
			Contact,
			/** 22 */
			ContactLeads,
			/** 9105 */
			Currency,
			/** 10128 */
			Customer_Asset,
			/** 10130 */
			Customer_Asset_Category,
			/** 4202 */
			Email,
			/** 9700 */
			Entitlement,
			/** 7272 */
			Entitlement_Contact,
			/** 6363 */
			Entitlement_Product,
			/** 4545 */
			Entitlement_Template_Product,
			/** 10524 */
			Field_Service_Price_List_Item,
			/** 10525 */
			Field_Service_Setting,
			/** 10131 */
			Functional_Location,
			/** 10606 */
			Geolocation_Settings,
			/** 1007 */
			Image_Descriptor,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 10528 */
			Incident_Type,
			/** 10530 */
			Incident_Type_Product,
			/** 10598 */
			Incident_Type_Resolution,
			/** 10531 */
			Incident_Type_Service,
			/** 10532 */
			Incident_Type_Service_Task,
			/** 10533 */
			Incident_Types_Setup,
			/** 10502 */
			Inspection_Attachment,
			/** 10505 */
			Inspection_Response,
			/** 10501 */
			Inspection_Template,
			/** 10503 */
			Inspection_Template_Version,
			/** 1090 */
			Invoice,
			/** 1091 */
			Invoice_Line,
			/** 10419 */
			Invoice_Process,
			/** 10138 */
			IoT_Alert,
			/** 10154 */
			IoT_Alert_to_Case_Process,
			/** 10139 */
			IoT_Device,
			/** 10140 */
			IoT_Device_Category,
			/** 10141 */
			IoT_Device_Command,
			/** 10142 */
			IoT_Device_Command_Definition,
			/** 10143 */
			IoT_Device_Data_History,
			/** 10144 */
			IoT_Device_Property,
			/** 10145 */
			IoT_Device_Registration_History,
			/** 10148 */
			IoT_Property_Definition,
			/** 10149 */
			IoT_Provider,
			/** 10150 */
			IoT_Provider_Instance,
			/** 10151 */
			IoT_Settings,
			/** 9953 */
			Knowledge_Article,
			/** 10084 */
			Knowledge_Article_Attachment,
			/** 10080 */
			Knowledge_Article_Image,
			/** 9955 */
			Knowledge_Article_Views,
			/** 4 */
			Lead,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 24 */
			LeadCompetitors,
			/** 27 */
			LeadProduct,
			/** 5 */
			Note,
			/** 3 */
			Opportunity,
			/** 1083 */
			Opportunity_Line,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 1088 */
			Order,
			/** 1089 */
			Order_Line,
			/** 4210 */
			Phone_Call,
			/** 952 */
			Phone_To_Case_Process,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10395 */
			Priority,
			/** 1024 */
			Product,
			/** 10548 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10418 */
			Project_Stages,
			/** 1048 */
			Property,
			/** 10133 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10132 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10134 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10135 */
			Property_Template_Association,
			/** 10519 */
			Purchase_Order_Business_Process,
			/** 2020 */
			Queue,
			/** 2029 */
			Queue_Item,
			/** 1084 */
			Quote,
			/** 1085 */
			Quote_Line,
			/** 10601 */
			Resolution,
			/** 10407 */
			Scheduling_Parameter,
			/** 10571 */
			Service_Task_Type,
			/** 9752 */
			SLA_KPI_Instance,
			/** 4212 */
			Task,
			/** 10573 */
			Tax_Code,
			/** 9 */
			Team,
			/** 10136 */
			Template_For_Properties,
			/** 2013 */
			Territory,
			/** 10481 */
			Time_Entry,
			/** 10575 */
			Time_Off_Request,
			/** 10496 */
			Time_Source,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 8 */
			User,
			/** 10577 */
			Warehouse,
			/** 10578 */
			Work_Order,
			/** 10522 */
			Work_Order_Business_Process,
			/** 10581 */
			Work_Order_Incident,
			/** 10582 */
			Work_Order_Product,
			/** 10604 */
			Work_Order_Resolution,
			/** 10584 */
			Work_Order_Service,
			/** 10585 */
			Work_Order_Service_Task,
			/** 10586 */
			Work_Order_Substatus,
			/** 10587 */
			Work_Order_Type
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
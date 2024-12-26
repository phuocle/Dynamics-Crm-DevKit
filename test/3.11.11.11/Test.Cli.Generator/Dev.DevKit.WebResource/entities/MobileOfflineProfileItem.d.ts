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
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			profileassociationgrid: DevKit.Controls.Grid;
		}
	}
	class FormMobile_Offline_Profile_Item extends DevKit.IForm {
		/**
		* Mobile Offline Profile Item [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mobile_Offline_Profile_Item */
		Body: DevKit.FormMobile_Offline_Profile_Item.Body;
		/** The Process of form Mobile_Offline_Profile_Item */
		Process: DevKit.FormMobile_Offline_Profile_Item.Process;
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
		/** Specifies whether records of this entity can be followed. */
		CanBeFollowed: boolean;
		/** For internal use only. */
		readonly ComponentState: OptionSet.MobileOfflineProfileItem.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Internal Use Only */
		readonly EntityObjectTypeCode: number;
		/** Specify whether records related to this entity will be made available for offline access. */
		GetRelatedEntityRecords: boolean;
		/** Version in which the Mobile offline Profile Item is introduced. */
		IntroducedVersion: string;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Information about whether profile item is validated or not */
		readonly IsValidated: boolean;
		/** Information about whether the mobile offline profile item is visible in the Profile Item subgrid. */
		IsVisibleInGrid: boolean;
		/** Unique identifier of the mobile offline profile item. */
		MobileOfflineProfileItemId: string;
		/** For Internal Use Only */
		readonly MobileOfflineProfileItemIdUnique: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the name of the mobile offline profile item. */
		Name: string;
		/** Unique identifier of the organization associated with the Mobile Offline Profile Item. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Profile item entity filter criteria */
		ProfileItemEntityFilter: string;
		/** Saved Query associated with the Mobile offline profile item rule. */
		ProfileItemRule: string;
		/** Displays the last published date time. */
		readonly PublishedOn_UtcDateAndTime: Date;
		/** Specify data download filter for selected entity */
		RecordDistributionCriteria: OptionSet.MobileOfflineProfileItem.RecordDistributionCriteria;
		/** Download my records */
		RecordsOwnedByMe: boolean;
		/** Download my business unit's records */
		RecordsOwnedByMyBusinessUnit: boolean;
		/** Download my team's records */
		RecordsOwnedByMyTeam: boolean;
		/** Items contained with a particular Profile. */
		RegardingObjectId: string;
		/** Internal Use Only */
		RelationshipData: string;
		/** Internal Use Only */
		readonly SelectedEntityMetadata: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Shows the ID of the stage. */
		StageId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** How often to sync data offline. */
		SyncIntervalInMinutes: number;
		/** For internal use only. */
		TraversedPath: string;
		/** Version number of the Mobile Offline Profile Item. */
		readonly VersionNumber: number;
		/** Contains converted sql of the referenced view. */
		ViewQuery: string;
		readonly FormattedValue: {
			/** Specifies whether records of this entity can be followed. */
			readonly CanBeFollowed: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Internal Use Only */
			readonly EntityObjectTypeCode: string;
			/** Specify whether records related to this entity will be made available for offline access. */
			readonly GetRelatedEntityRecords: string;
			/** Version in which the Mobile offline Profile Item is introduced. */
			readonly IntroducedVersion: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Information about whether profile item is validated or not */
			readonly IsValidated: string;
			/** Information about whether the mobile offline profile item is visible in the Profile Item subgrid. */
			readonly IsVisibleInGrid: string;
			/** Unique identifier of the mobile offline profile item. */
			readonly MobileOfflineProfileItemId: string;
			/** For Internal Use Only */
			readonly MobileOfflineProfileItemIdUnique: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the name of the mobile offline profile item. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the Mobile Offline Profile Item. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Profile item entity filter criteria */
			readonly ProfileItemEntityFilter: string;
			/** Saved Query associated with the Mobile offline profile item rule. */
			readonly ProfileItemRule: string;
			/** Displays the last published date time. */
			readonly PublishedOn_UtcDateAndTime: string;
			/** Specify data download filter for selected entity */
			readonly RecordDistributionCriteria: string;
			/** Download my records */
			readonly RecordsOwnedByMe: string;
			/** Download my business unit's records */
			readonly RecordsOwnedByMyBusinessUnit: string;
			/** Download my team's records */
			readonly RecordsOwnedByMyTeam: string;
			/** Items contained with a particular Profile. */
			readonly RegardingObjectId: string;
			/** Internal Use Only */
			readonly RelationshipData: string;
			/** Internal Use Only */
			readonly SelectedEntityMetadata: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** How often to sync data offline. */
			readonly SyncIntervalInMinutes: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Version number of the Mobile Offline Profile Item. */
			readonly VersionNumber: string;
			/** Contains converted sql of the referenced view. */
			readonly ViewQuery: string;
		}
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
			/** 10087 */
			Activity_File_Attachment,
			/** 10594 */
			Agreement_Business_Process,
			/** 4201 */
			Appointment,
			/** 10149 */
			Asset_Category_Template_Association,
			/** 10150 */
			Asset_Template_Association,
			/** 1001 */
			Attachment,
			/** 1150 */
			Bookable_Resource,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 10662 */
			Bookable_Resource_Booking_Quick_Note,
			/** 1152 */
			Booking_Status,
			/** 10591 */
			Booking_Timestamp,
			/** 112 */
			Case,
			/** 10593 */
			Case_to_Work_Order_Business_Process,
			/** 10674 */
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
			/** 10151 */
			Customer_Asset,
			/** 10155 */
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
			/** 10597 */
			Field_Service_Price_List_Item,
			/** 10598 */
			Field_Service_Setting,
			/** 10156 */
			Functional_Location,
			/** 10675 */
			Geolocation_Settings,
			/** 1007 */
			Image_Descriptor,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 10601 */
			Incident_Type,
			/** 10603 */
			Incident_Type_Product,
			/** 10667 */
			Incident_Type_Resolution,
			/** 10604 */
			Incident_Type_Service,
			/** 10605 */
			Incident_Type_Service_Task,
			/** 10606 */
			Incident_Types_Setup,
			/** 10575 */
			Inspection_Attachment,
			/** 10578 */
			Inspection_Response,
			/** 10574 */
			Inspection_Template,
			/** 10576 */
			Inspection_Template_Version,
			/** 1090 */
			Invoice,
			/** 1091 */
			Invoice_Line,
			/** 10492 */
			Invoice_Process,
			/** 10165 */
			IoT_Alert,
			/** 10181 */
			IoT_Alert_to_Case_Process,
			/** 10166 */
			IoT_Device,
			/** 10167 */
			IoT_Device_Category,
			/** 10168 */
			IoT_Device_Command,
			/** 10169 */
			IoT_Device_Command_Definition,
			/** 10170 */
			IoT_Device_Data_History,
			/** 10171 */
			IoT_Device_Property,
			/** 10172 */
			IoT_Device_Registration_History,
			/** 10175 */
			IoT_Property_Definition,
			/** 10176 */
			IoT_Provider,
			/** 10177 */
			IoT_Provider_Instance,
			/** 10178 */
			IoT_Settings,
			/** 9953 */
			Knowledge_Article,
			/** 10099 */
			Knowledge_Article_Attachment,
			/** 10095 */
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
			/** 10114 */
			OrganizationDataSyncState,
			/** 4210 */
			Phone_Call,
			/** 952 */
			Phone_To_Case_Process,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10479 */
			Priority,
			/** 1024 */
			Product,
			/** 10621 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10491 */
			Project_Stages,
			/** 1048 */
			Property,
			/** 10158 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10157 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10159 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10160 */
			Property_Template_Association,
			/** 10592 */
			Purchase_Order_Business_Process,
			/** 2020 */
			Queue,
			/** 2029 */
			Queue_Item,
			/** 1084 */
			Quote,
			/** 1085 */
			Quote_Line,
			/** 10670 */
			Resolution,
			/** 10482 */
			Scheduling_Parameter,
			/** 10644 */
			Service_Task_Type,
			/** 9752 */
			SLA_KPI_Instance,
			/** 4212 */
			Task,
			/** 10646 */
			Tax_Code,
			/** 9 */
			Team,
			/** 10161 */
			Template_For_Properties,
			/** 2013 */
			Territory,
			/** 10554 */
			Time_Entry,
			/** 10648 */
			Time_Off_Request,
			/** 10569 */
			Time_Source,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 8 */
			User,
			/** 10650 */
			Warehouse,
			/** 10651 */
			Work_Order,
			/** 10595 */
			Work_Order_Business_Process,
			/** 10654 */
			Work_Order_Incident,
			/** 10655 */
			Work_Order_Product,
			/** 10673 */
			Work_Order_Resolution,
			/** 10657 */
			Work_Order_Service,
			/** 10658 */
			Work_Order_Service_Task,
			/** 10659 */
			Work_Order_Substatus,
			/** 10660 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
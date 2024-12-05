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
		interface Navigation {
			MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: DevKit.Controls.NavigationItem
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
		/** The Navigation of form Mobile_Offline_Profile_Item */
		Navigation: DevKit.FormMobile_Offline_Profile_Item.Navigation;
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
		/** Selected attributes of an entity to enable for offline sync */
		SelectedColumns: string;
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
			/** Selected attributes of an entity to enable for offline sync */
			readonly SelectedColumns: string;
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
			/** 16 */
			AccountLeads,
			/** 10184 */
			Activity_File_Attachment,
			/** 11657 */
			Agreement_Business_Process,
			/** 10378 */
			Asset_Category_Template_Association,
			/** 10379 */
			Asset_Template_Association,
			/** 1150 */
			Bookable_Resource,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 11716 */
			Bookable_Resource_Booking_Quick_Note,
			/** 1152 */
			Booking_Status,
			/** 11654 */
			Booking_Timestamp,
			/** 112 */
			Case,
			/** 11656 */
			Case_to_Work_Order_Business_Process,
			/** 11734 */
			CFS_IoT_Alert_Process_Flow,
			/** 11568 */
			Comparator_Metadata,
			/** 1004 */
			Competitor_Address,
			/** 1006 */
			Competitor_Product,
			/** 3231 */
			Connection_Role,
			/** 22 */
			ContactLeads,
			/** 11599 */
			Copilot_knowledge_interaction,
			/** 9105 */
			Currency,
			/** 10380 */
			Customer_Asset,
			/** 10384 */
			Customer_Asset_Category,
			/** 9700 */
			Entitlement,
			/** 7272 */
			Entitlement_Contact,
			/** 6363 */
			Entitlement_Product,
			/** 4545 */
			Entitlement_Template_Product,
			/** 10647 */
			Entity_Attachment,
			/** 11085 */
			EventMainBusinessProcessFlow,
			/** 11660 */
			Field_Service_Price_List_Item,
			/** 11661 */
			Field_Service_Setting,
			/** 11746 */
			Field_Service_Summary_Configuration,
			/** 10385 */
			Functional_Location,
			/** 10386 */
			Functional_Location_Type,
			/** 10388 */
			Functional_Location_Type_Template_Association,
			/** 11735 */
			Geolocation_Settings,
			/** 1007 */
			Image_Descriptor,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 11664 */
			Incident_Type,
			/** 11666 */
			Incident_Type_Product,
			/** 11722 */
			Incident_Type_Resolution,
			/** 11667 */
			Incident_Type_Service,
			/** 11668 */
			Incident_Type_Service_Task,
			/** 11669 */
			Incident_Types_Setup,
			/** 11627 */
			Inspection_Attachment,
			/** 11630 */
			Inspection_Response,
			/** 11626 */
			Inspection_Template,
			/** 11628 */
			Inspection_Template_Version,
			/** 1091 */
			Invoice_Product,
			/** 10402 */
			IoT_Alert,
			/** 10418 */
			IoT_Alert_to_Case_Process,
			/** 10403 */
			IoT_Device,
			/** 10404 */
			IoT_Device_Category,
			/** 10405 */
			IoT_Device_Command,
			/** 10406 */
			IoT_Device_Command_Definition,
			/** 10407 */
			IoT_Device_Data_History,
			/** 10408 */
			IoT_Device_Property,
			/** 10409 */
			IoT_Device_Registration_History,
			/** 10412 */
			IoT_Property_Definition,
			/** 10413 */
			IoT_Provider,
			/** 10414 */
			IoT_Provider_Instance,
			/** 10415 */
			IoT_Settings,
			/** 9953 */
			Knowledge_Article,
			/** 10199 */
			Knowledge_Article_Attachment,
			/** 10193 */
			Knowledge_Article_Image,
			/** 9955 */
			Knowledge_Article_Views,
			/** 11610 */
			Knowledge_Harvest_Job_Record,
			/** 11198 */
			Lead_to_opportunity,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 24 */
			LeadCompetitors,
			/** 27 */
			LeadProduct,
			/** 10387 */
			Location_Template_Association,
			/** 11747 */
			MobileSource,
			/** 11608 */
			msdyn_historicalcaseharvestbatch,
			/** 11609 */
			msdyn_historicalcaseharvestrun,
			/** 11724 */
			Not_to_exceed,
			/** 1083 */
			Opportunity_Line,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 1089 */
			Order_Line,
			/** 10221 */
			OrganizationDataSyncFnoState,
			/** 10222 */
			OrganizationDataSyncState,
			/** 4210 */
			Phone_Call,
			/** 952 */
			Phone_To_Case_Process,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 11006 */
			Priority,
			/** 11683 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 1048 */
			Property,
			/** 10390 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10389 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10391 */
			Property_Location_Association,
			/** 10392 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10393 */
			Property_Template_Association,
			/** 11655 */
			Purchase_Order_Business_Process,
			/** 2020 */
			Queue,
			/** 2029 */
			Queue_Item,
			/** 1085 */
			Quote_Line,
			/** 11727 */
			Resolution,
			/** 11015 */
			Scheduling_Parameter,
			/** 11702 */
			Service_Task_Type,
			/** 9752 */
			SLA_KPI_Instance,
			/** 11639 */
			Tax_Code,
			/** 9 */
			Team,
			/** 10394 */
			Template_For_Properties,
			/** 2013 */
			Territory,
			/** 11631 */
			Time_Entry,
			/** 11703 */
			Time_Off_Request,
			/** 11632 */
			Time_Source,
			/** 11728 */
			Trade,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 11641 */
			Warehouse,
			/** 11705 */
			Work_Order,
			/** 11658 */
			Work_Order_Business_Process,
			/** 11708 */
			Work_Order_Incident,
			/** 11732 */
			Work_order_not_to_exceed,
			/** 11709 */
			Work_Order_Product,
			/** 11733 */
			Work_Order_Resolution,
			/** 11711 */
			Work_Order_Service,
			/** 11712 */
			Work_Order_Service_Task,
			/** 11713 */
			Work_Order_Substatus,
			/** 11714 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
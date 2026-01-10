//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMobile_Offline_Profile_Item {
		interface tab_GENERALINFORMATION_TAB_Sections {
			Entity_Selection: DevKit.Controls.Section;
			MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS: DevKit.Controls.Section;
		}
		/** General Information */
		interface tab_GENERALINFORMATION_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			/** General Information */
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
			/** MOBILE OFFLINE PROFILE ITEM ASSOCIATION DETAILS */
			profileassociationgrid: DevKit.Controls.Grid;
		}
	}
	export class FormMobile_Offline_Profile_Item extends DevKit.IForm {
		/**
		* Mobile Offline Profile Item [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Mobile_Offline_Profile_Item */
		Body: DevKit.FormMobile_Offline_Profile_Item.Body;
		/** The Grid of form Mobile_Offline_Profile_Item */
		Grid: DevKit.FormMobile_Offline_Profile_Item.Grid;
	}
	export class MobileOfflineProfileItemApi {
		/**
		* DynamicsCrm.DevKit MobileOfflineProfileItemApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Specifies whether records of this entity can be followed. */
		CanBeFollowed: boolean | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.MobileOfflineProfileItem.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Internal Use Only */
		readonly EntityObjectTypeCode: number | null;
		/** Specify whether records related to this entity will be made available for offline access. */
		GetRelatedEntityRecords: boolean | null;
		/** Version in which the Mobile offline Profile Item is introduced. */
		IntroducedVersion: string | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Information about whether profile item is validated or not */
		readonly IsValidated: boolean | null;
		/** Information about whether the mobile offline profile item is visible in the Profile Item subgrid. */
		IsVisibleInGrid: boolean | null;
		/** Unique identifier of the mobile offline profile item. */
		MobileOfflineProfileItemId: string | null;
		/** For Internal Use Only */
		readonly MobileOfflineProfileItemIdUnique: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Enter the name of the mobile offline profile item. */
		Name: string | null;
		/** Unique identifier of the organization associated with the Mobile Offline Profile Item. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Profile item entity filter criteria */
		ProfileItemEntityFilter: string | null;
		/** Saved Query associated with the Mobile offline profile item rule. */
		ProfileItemRule: string | null;
		/** Displays the last published date time. */
		readonly PublishedOn_UtcDateAndTime: Date | null;
		/** Specify data download filter for selected entity */
		RecordDistributionCriteria: OptionSet.MobileOfflineProfileItem.RecordDistributionCriteria | null;
		/** Download my records */
		RecordsOwnedByMe: boolean | null;
		/** Download my business unit's records */
		RecordsOwnedByMyBusinessUnit: boolean | null;
		/** Download my team's records */
		RecordsOwnedByMyTeam: boolean | null;
		/** Items contained with a particular Profile. */
		RegardingObjectId: string | null;
		/** Internal Use Only */
		RelationshipData: string | null;
		/** Selected attributes of an entity to enable for offline sync */
		SelectedColumns: string | null;
		/** Internal Use Only */
		readonly SelectedEntityMetadata: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** How often to sync data offline. */
		SyncIntervalInMinutes: number | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Version number of the Mobile Offline Profile Item. */
		readonly VersionNumber: number | null;
		/** Contains converted sql of the referenced view. */
		ViewQuery: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum RecordDistributionCriteria {
			/** All_records = 1*/
			All_records = 1,
			/** Custom_data_filter = 3*/
			Custom_data_filter = 3,
			/** Download_related_data_only = 0*/
			Download_related_data_only = 0,
			/** Other_data_filter = 2*/
			Other_data_filter = 2
		}
		enum SelectedEntityTypeCode {
			/** Account = 1*/
			Account = 1,
			/** AccountBPF = 10919*/
			AccountBPF = 10919,
			/** Activity_File_Attachment = 10252*/
			Activity_File_Attachment = 10252,
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Attachment = 1001*/
			Attachment = 1001,
			/** Contact = 2*/
			Contact = 2,
			/** Email = 4202*/
			Email = 4202,
			/** Image_Descriptor = 1007*/
			Image_Descriptor = 1007,
			/** Interim_Update_Knowledge_Article = 10705*/
			Interim_Update_Knowledge_Article = 10705,
			/** Knowledge_Article_Attachment = 10267*/
			Knowledge_Article_Attachment = 10267,
			/** Knowledge_Article_Custom_Entity = 10706*/
			Knowledge_Article_Custom_Entity = 10706,
			/** Knowledge_Article_Image = 10261*/
			Knowledge_Article_Image = 10261,
			/** Knowledge_Harvest_Job_Record = 10275*/
			Knowledge_Harvest_Job_Record = 10275,
			/** msdyn_historicalcaseharvestbatch = 10273*/
			msdyn_historicalcaseharvestbatch = 10273,
			/** msdyn_historicalcaseharvestrun = 10274*/
			msdyn_historicalcaseharvestrun = 10274,
			/** Note = 5*/
			Note = 5,
			/** OrganizationDataSyncFnoState = 10297*/
			OrganizationDataSyncFnoState = 10297,
			/** OrganizationDataSyncState = 10298*/
			OrganizationDataSyncState = 10298,
			/** PowerPagesDDOSAlert = 10451*/
			PowerPagesDDOSAlert = 10451,
			/** Queue = 2020*/
			Queue = 2020,
			/** Queue_Item = 2029*/
			Queue_Item = 2029,
			/** Reserve_entity_10701ed370 = 10604*/
			Reserve_entity_10701ed370 = 10604,
			/** Reserve_entity_1bfb649ef5 = 10488*/
			Reserve_entity_1bfb649ef5 = 10488,
			/** Reserve_entity_26a8ef60be = 10810*/
			Reserve_entity_26a8ef60be = 10810,
			/** Reserve_entity_2de89d6f96 = 10819*/
			Reserve_entity_2de89d6f96 = 10819,
			/** Reserve_entity_2f931a2c87 = 10468*/
			Reserve_entity_2f931a2c87 = 10468,
			/** Reserve_entity_3d0e4d135d = 10799*/
			Reserve_entity_3d0e4d135d = 10799,
			/** Reserve_entity_49318bf520 = 10675*/
			Reserve_entity_49318bf520 = 10675,
			/** Reserve_entity_56035df1f6 = 10571*/
			Reserve_entity_56035df1f6 = 10571,
			/** Reserve_entity_58265009a3 = 10822*/
			Reserve_entity_58265009a3 = 10822,
			/** Reserve_entity_6356b0c104 = 10524*/
			Reserve_entity_6356b0c104 = 10524,
			/** Reserve_entity_6a32540060 = 10585*/
			Reserve_entity_6a32540060 = 10585,
			/** Reserve_entity_702362ceb4 = 10787*/
			Reserve_entity_702362ceb4 = 10787,
			/** Reserve_entity_7aab32d91e = 10669*/
			Reserve_entity_7aab32d91e = 10669,
			/** Reserve_entity_878256b1bd = 10506*/
			Reserve_entity_878256b1bd = 10506,
			/** Reserve_entity_9520b6e405 = 10807*/
			Reserve_entity_9520b6e405 = 10807,
			/** Reserve_entity_9eafbd660d = 10686*/
			Reserve_entity_9eafbd660d = 10686,
			/** Reserve_entity_a8cd77b9ac = 10825*/
			Reserve_entity_a8cd77b9ac = 10825,
			/** Reserve_entity_af3e0052ac = 10816*/
			Reserve_entity_af3e0052ac = 10816,
			/** Reserve_entity_b3331f12e0 = 10715*/
			Reserve_entity_b3331f12e0 = 10715,
			/** Reserve_entity_ba02296c07 = 10542*/
			Reserve_entity_ba02296c07 = 10542,
			/** Reserve_entity_bbc4b9fafc = 10655*/
			Reserve_entity_bbc4b9fafc = 10655,
			/** Reserve_entity_c15f669578 = 10718*/
			Reserve_entity_c15f669578 = 10718,
			/** Reserve_entity_c21749bb70 = 10621*/
			Reserve_entity_c21749bb70 = 10621,
			/** Reserve_entity_cd9cd968cc = 10712*/
			Reserve_entity_cd9cd968cc = 10712,
			/** Reserve_entity_dc212544db = 10638*/
			Reserve_entity_dc212544db = 10638,
			/** Reserve_entity_dfef254c8f = 10590*/
			Reserve_entity_dfef254c8f = 10590,
			/** Reserve_entity_dff8308cc9 = 10813*/
			Reserve_entity_dff8308cc9 = 10813,
			/** Reserve_entity_e113384c28 = 10828*/
			Reserve_entity_e113384c28 = 10828,
			/** Reserve_entity_e4227f9f0f = 10557*/
			Reserve_entity_e4227f9f0f = 10557,
			/** Reserve_entity_ed7de5dd0b = 10700*/
			Reserve_entity_ed7de5dd0b = 10700,
			/** SLA_KPI_Instance = 9752*/
			SLA_KPI_Instance = 9752,
			/** Task = 4212*/
			Task = 4212,
			/** Team = 9*/
			Team = 9,
			/** User = 8*/
			User = 8
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
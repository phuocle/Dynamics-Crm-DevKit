//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomer_Asset {
		interface tab__B3F36061_1F16_4BBB_BD74_44FAC42C9094_Sections {
			_216040C1_499B_4120_8175_2EFB7536E940: DevKit.Controls.Section;
			_576663BB_EA91_486D_8F88_DA4CD98DF0EB: DevKit.Controls.Section;
			_B3F36061_1F16_4BBB_BD74_44FAC42C9094_SECTION_3: DevKit.Controls.Section;
			_B3F36061_1F16_4BBB_BD74_44FAC42C9094_SECTION_7: DevKit.Controls.Section;
			Asset_WorkOrder: DevKit.Controls.Section;
			Connected_Device_Readings: DevKit.Controls.Section;
			ConnectedDeviceAttributes: DevKit.Controls.Section;
			Device_Summary_Visualization: DevKit.Controls.Section;
			fstab_summary_location: DevKit.Controls.Section;
			knowledgesection: DevKit.Controls.Section;
		}
		interface tab_AlertsTab_Sections {
			AlertsSection: DevKit.Controls.Section;
		}
		interface tab_CommandsTab_Sections {
			CommandsSection: DevKit.Controls.Section;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Controls.Section;
		}
		interface tab__B3F36061_1F16_4BBB_BD74_44FAC42C9094 extends DevKit.Controls.ITab {
			Section: tab__B3F36061_1F16_4BBB_BD74_44FAC42C9094_Sections;
		}
		interface tab_AlertsTab extends DevKit.Controls.ITab {
			Section: tab_AlertsTab_Sections;
		}
		interface tab_CommandsTab extends DevKit.Controls.ITab {
			Section: tab_CommandsTab_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface Tabs {
			_B3F36061_1F16_4BBB_BD74_44FAC42C9094: tab__B3F36061_1F16_4BBB_BD74_44FAC42C9094;
			AlertsTab: tab_AlertsTab;
			CommandsTab: tab_CommandsTab;
			DeviceInsightsTab: tab_DeviceInsightsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Parent Customer of this Asset */
			msdyn_Account: DevKit.Controls.Lookup;
			/** The category of the customer asset */
			msdyn_CustomerAssetCategory: DevKit.Controls.Lookup;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. This value will be updated based on the connected devices. */
			msdyn_DeviceId: DevKit.Controls.String;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. This value will be updated based on the connected devices. */
			msdyn_DeviceId1: DevKit.Controls.String;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. This value will be updated based on the connected devices. */
			msdyn_DeviceId2: DevKit.Controls.String;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			/** Top-Level Asset, (if this asset is a sub asset) */
			msdyn_MasterAsset: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Parent Asset */
			msdyn_ParentAsset: DevKit.Controls.Lookup;
			/** Reference to Product associated with this Asset */
			msdyn_Product: DevKit.Controls.Lookup;
			/** A status field that denotes whether all the devices connected to this asset are registered with the IoT provider. */
			msdyn_RegistrationStatus: DevKit.Controls.OptionSet;
			/** Indicates a link to the Work Order Product from where this Asset was auto created by the system. */
			msdyn_WorkOrderProduct: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_PowerBIConnectedDevices: DevKit.Controls.WebResource;
		}
		interface Navigation {
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			AlertsGrid: DevKit.Controls.Grid;
			Asset_SubAsset: DevKit.Controls.Grid;
			Asset_WorkOrder: DevKit.Controls.Grid;
			CommandsGrid: DevKit.Controls.Grid;
			ConnectedDevices: DevKit.Controls.Grid;
			KnowledgeArticlesSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormCustomer_Asset extends DevKit.IForm {
		/**
		* Customer Asset [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Customer_Asset */
		Body: DevKit.FormCustomer_Asset.Body;
		/** The Navigation of form Customer_Asset */
		Navigation: DevKit.FormCustomer_Asset.Navigation;
		/** The Process of form Customer_Asset */
		Process: DevKit.FormCustomer_Asset.Process;
		/** The Grid of form Customer_Asset */
		Grid: DevKit.FormCustomer_Asset.Grid;
		/** The SidePanes of form Customer_Asset */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCustomer_Asset_Mobile {
		interface tab_CommandsTab_Sections {
			CommandsSection: DevKit.Controls.Section;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Controls.Section;
		}
		interface tab_fstab_AssetHierarchy_Sections {
			AssetHierarchySection: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
		}
		interface tab_fstab_summary_Sections {
			_576663BB_EA91_486D_8F88_DA4CD98DF0EB: DevKit.Controls.Section;
			ConnectedDeviceAttributes: DevKit.Controls.Section;
			Device_Summary_Visualization: DevKit.Controls.Section;
			fstab_summary_column_2_section_1: DevKit.Controls.Section;
			fstab_summary_column_3_section_1: DevKit.Controls.Section;
			fstab_summary_location: DevKit.Controls.Section;
			fstab_summary_section_general: DevKit.Controls.Section;
			KnowledgeSection: DevKit.Controls.Section;
		}
		interface tab_PropertyLogsTab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_CommandsTab extends DevKit.Controls.ITab {
			Section: tab_CommandsTab_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_fstab_AssetHierarchy extends DevKit.Controls.ITab {
			Section: tab_fstab_AssetHierarchy_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface tab_fstab_summary extends DevKit.Controls.ITab {
			Section: tab_fstab_summary_Sections;
		}
		interface tab_PropertyLogsTab extends DevKit.Controls.ITab {
			Section: tab_PropertyLogsTab_Sections;
		}
		interface Tabs {
			CommandsTab: tab_CommandsTab;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			fstab_AssetHierarchy: tab_fstab_AssetHierarchy;
			fstab_sub_grids: tab_fstab_sub_grids;
			fstab_summary: tab_fstab_summary;
			PropertyLogsTab: tab_PropertyLogsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Parent Customer of this Asset */
			msdyn_Account: DevKit.Controls.Lookup;
			/** The category of the customer asset */
			msdyn_CustomerAssetCategory: DevKit.Controls.Lookup;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. This value will be updated based on the connected devices. */
			msdyn_DeviceId: DevKit.Controls.String;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. This value will be updated based on the connected devices. */
			msdyn_DeviceId1: DevKit.Controls.String;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. This value will be updated based on the connected devices. */
			msdyn_DeviceId2: DevKit.Controls.String;
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			/** Top-Level Asset, (if this asset is a sub asset) */
			msdyn_MasterAsset: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name1: DevKit.Controls.String;
			/** Parent Asset */
			msdyn_ParentAsset: DevKit.Controls.Lookup;
			/** Reference to Product associated with this Asset */
			msdyn_Product: DevKit.Controls.Lookup;
			/** A status field that denotes whether all the devices connected to this asset are registered with the IoT provider. */
			msdyn_RegistrationStatus: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Asset_SubAsset: DevKit.Controls.Grid;
			CommandsGrid: DevKit.Controls.Grid;
			ConnectedDevices: DevKit.Controls.Grid;
			CurrentPropertyValuesSubgrid: DevKit.Controls.Grid;
			KnowledgeArticlesSubGrid: DevKit.Controls.Grid;
			PropertyLogsSubGrid: DevKit.Controls.Grid;
			WORKORDERS: DevKit.Controls.Grid;
		}
	}
	class FormCustomer_Asset_Mobile extends DevKit.IForm {
		/**
		* Customer Asset - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Customer_Asset_Mobile */
		Body: DevKit.FormCustomer_Asset_Mobile.Body;
		/** The Navigation of form Customer_Asset_Mobile */
		Navigation: DevKit.FormCustomer_Asset_Mobile.Navigation;
		/** The Process of form Customer_Asset_Mobile */
		Process: DevKit.FormCustomer_Asset_Mobile.Process;
		/** The Grid of form Customer_Asset_Mobile */
		Grid: DevKit.FormCustomer_Asset_Mobile.Grid;
		/** The SidePanes of form Customer_Asset_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCustomer_Asset_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Parent Customer of this Asset */
			msdyn_Account: DevKit.Controls.Lookup;
			/** The category of the customer asset */
			msdyn_CustomerAssetCategory: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Reference to Product associated with this Asset */
			msdyn_Product: DevKit.Controls.Lookup;
		}
	}
	class FormCustomer_Asset_Quick_Create extends DevKit.IForm {
		/**
		* Customer Asset Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Customer_Asset_Quick_Create */
		Body: DevKit.FormCustomer_Asset_Quick_Create.Body;
	}
	class msdyn_customerassetApi {
		/**
		* DynamicsCrm.DevKit msdyn_customerassetApi
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
		/** Parent Customer of this Asset */
		msdyn_Account: DevKit.WebApi.LookupValue;
		/** If active parent alerts exist for the customer asset */
		msdyn_alert: DevKit.WebApi.BooleanValueReadonly;
		/** Count of parent alerts for this customer asset */
		msdyn_alertcount: DevKit.WebApi.IntegerValueReadonly;
		/** Last Updated time of rollup field Alert Count. */
		msdyn_alertcount_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Alert Count. */
		msdyn_alertcount_State: DevKit.WebApi.IntegerValueReadonly;
		/** The category of the customer asset */
		msdyn_CustomerAssetCategory: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_customerassetId: DevKit.WebApi.GuidValue;
		/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. This value will be updated based on the connected devices. */
		msdyn_DeviceId: DevKit.WebApi.StringValue;
		msdyn_FunctionalLocation: DevKit.WebApi.LookupValue;
		msdyn_LastAlertTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Last Updated time of rollup field Last active alert time. */
		msdyn_LastAlertTime_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Last active alert time. */
		msdyn_LastAlertTime_State: DevKit.WebApi.IntegerValueReadonly;
		/** The last command sent to any of the connected devices for this asset. */
		msdyn_LastCommandSent: DevKit.WebApi.LookupValue;
		/** The timestamp of the last command sent for any of the connected devices for this asset. */
		msdyn_LastCommandSentTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		/** Top-Level Asset, (if this asset is a sub asset) */
		msdyn_MasterAsset: DevKit.WebApi.LookupValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Parent Asset */
		msdyn_ParentAsset: DevKit.WebApi.LookupValue;
		/** Reference to Product associated with this Asset */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** A status field that denotes whether all the devices connected to this asset are registered with the IoT provider. */
		msdyn_RegistrationStatus: DevKit.WebApi.OptionSetValue;
		/** Indicates a link to the Work Order Product from where this Asset was auto created by the system. */
		msdyn_WorkOrderProduct: DevKit.WebApi.LookupValue;
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
		/** Status of the Customer Asset */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Customer Asset */
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
	namespace msdyn_customerasset {
		enum msdyn_RegistrationStatus {
			/** 192350004 */
			Error,
			/** 192350002 */
			In_Progress,
			/** 192350003 */
			Registered,
			/** 192350000 */
			Unknown,
			/** 192350001 */
			Unregistered
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
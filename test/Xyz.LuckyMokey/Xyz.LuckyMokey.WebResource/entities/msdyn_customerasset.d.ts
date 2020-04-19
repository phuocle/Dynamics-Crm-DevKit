//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCustomer_Asset {
		interface tab__B3F36061_1F16_4BBB_BD74_44FAC42C9094_Sections {
			_216040C1_499B_4120_8175_2EFB7536E940: DevKit.Form.Controls.ControlSection;
			ConnectedDeviceAttributes: DevKit.Form.Controls.ControlSection;
			fstab_summary_location: DevKit.Form.Controls.ControlSection;
			_B3F36061_1F16_4BBB_BD74_44FAC42C9094_SECTION_7: DevKit.Form.Controls.ControlSection;
			_576663BB_EA91_486D_8F88_DA4CD98DF0EB: DevKit.Form.Controls.ControlSection;
			Connected_Device_Readings: DevKit.Form.Controls.ControlSection;
			Device_Summary_Visualization: DevKit.Form.Controls.ControlSection;
			_B3F36061_1F16_4BBB_BD74_44FAC42C9094_SECTION_3: DevKit.Form.Controls.ControlSection;
			Asset_WorkOrder: DevKit.Form.Controls.ControlSection;
		}
		interface tab_CommandsTab_Sections {
			CommandsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_AlertsTab_Sections {
			AlertsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B3F36061_1F16_4BBB_BD74_44FAC42C9094 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B3F36061_1F16_4BBB_BD74_44FAC42C9094_Sections;
		}
		interface tab_CommandsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_CommandsTab_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_AlertsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_AlertsTab_Sections;
		}
		interface Tabs {
			_B3F36061_1F16_4BBB_BD74_44FAC42C9094: tab__B3F36061_1F16_4BBB_BD74_44FAC42C9094;
			CommandsTab: tab_CommandsTab;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			AlertsTab: tab_AlertsTab;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ConnectedDevices: DevKit.Form.Controls.ControlGrid;
			WebResource_PowerBIConnectedDevices: DevKit.Form.Controls.ControlWebResource;
			Asset_SubAsset: DevKit.Form.Controls.ControlGrid;
			Asset_WorkOrder: DevKit.Form.Controls.ControlGrid;
			CommandsGrid: DevKit.Form.Controls.ControlGrid;
			AlertsGrid: DevKit.Form.Controls.ControlGrid;
			/** Parent Customer of this Asset */
			msdyn_Account: DevKit.Form.Controls.ControlLookup;
			/** The category of the customer asset */
			msdyn_CustomerAssetCategory: DevKit.Form.Controls.ControlLookup;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. */
			msdyn_DeviceId: DevKit.Form.Controls.ControlString;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. */
			msdyn_DeviceId_1: DevKit.Form.Controls.ControlString;
			/** Device ID used to register with the IoT provider. This will not be used if there are two or more connected devices for this asset. */
			msdyn_DeviceId_2: DevKit.Form.Controls.ControlString;
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** Top level Asset, (if this asset is a sub asset) */
			msdyn_MasterAsset: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Parent Asset */
			msdyn_ParentAsset: DevKit.Form.Controls.ControlLookup;
			/** Reference to Product associated with this Asset */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** A status field that denotes whether all the devices connected to this asset are registered with the IoT provider. */
			msdyn_RegistrationStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Indicates a link to the Work Order Product from where this Asset was auto created by the system. */
			msdyn_WorkOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormCustomer_Asset extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Customer_Asset
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Customer_Asset */
		Body: LuckyMokey.FormCustomer_Asset.Body;
		/** The Navigation of form Customer_Asset */
		Navigation: LuckyMokey.FormCustomer_Asset.Navigation;
	}
	namespace FormCustomer_Asset_Mobile {
		interface tab_fstab_summary_Sections {
			fstab_summary_section_general: DevKit.Form.Controls.ControlSection;
			fstab_summary_location: DevKit.Form.Controls.ControlSection;
			fstab_summary_column_2_section_1: DevKit.Form.Controls.ControlSection;
			fstab_summary_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_summary_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_summary: tab_fstab_summary;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			Asset_SubAsset: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			WORKORDERS: DevKit.Form.Controls.ControlGrid;
			/** Parent Customer of this Asset */
			msdyn_Account: DevKit.Form.Controls.ControlLookup;
			/** The category of the customer asset */
			msdyn_CustomerAssetCategory: DevKit.Form.Controls.ControlLookup;
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** Top level Asset, (if this asset is a sub asset) */
			msdyn_MasterAsset: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Parent Asset */
			msdyn_ParentAsset: DevKit.Form.Controls.ControlLookup;
			/** Reference to Product associated with this Asset */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormCustomer_Asset_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Customer_Asset_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Customer_Asset_Mobile */
		Body: LuckyMokey.FormCustomer_Asset_Mobile.Body;
		/** The Navigation of form Customer_Asset_Mobile */
		Navigation: LuckyMokey.FormCustomer_Asset_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_customerasset {
		enum msdyn_RegistrationStatus {
			/** 192350000 */
			Unknown,
			/** 192350001 */
			Unregistered,
			/** 192350002 */
			In_Progress,
			/** 192350003 */
			Registered,
			/** 192350004 */
			Error
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
//{'JsForm':['Customer Asset','Customer Asset - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
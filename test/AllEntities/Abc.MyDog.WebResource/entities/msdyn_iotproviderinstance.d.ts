//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_iotproviderinstance_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_General_Sections {
			_8D4FB144_C2C7_46BB_A136_4D4234B14B86: DevKit.Controls.Section;
			section_2: DevKit.Controls.Section;
		}
		interface tab_DevicesTab_Sections {
			DevicesSection: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface tab_DevicesTab extends DevKit.Controls.ITab {
			Section: tab_DevicesTab_Sections;
		}
		interface Tabs {
			General: tab_General;
			DevicesTab: tab_DevicesTab;
		}
		interface Body {
			Tab: Tabs;
			/** The IoT Provider of which this record is an instance. */
			msdyn_IoTProvider: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The ID of the provider instance. */
			msdyn_ProviderInstanceId: DevKit.Controls.String;
			/** The URL of the provider instance. */
			msdyn_URL: DevKit.Controls.String;
		}
		interface Grid {
			IoTProviderInstanceDevices: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_iotproviderinstance_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotproviderinstance_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotproviderinstance_Information */
		Body: MyDog.Formmsdyn_iotproviderinstance_Information.Body;
		/** The Header section of form msdyn_iotproviderinstance_Information */
		Header: MyDog.Formmsdyn_iotproviderinstance_Information.Header;
		/** The Grid of form msdyn_iotproviderinstance_Information */
		Grid: MyDog.Formmsdyn_iotproviderinstance_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotproviderinstance {
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_upgraderun_Information {
		interface tab__4A6546DD_DFC2_4A18_88D6_04661583D80E_Sections {
		}
		interface tab__4A6546DD_DFC2_4A18_88D6_04661583D80E extends DevKit.Controls.ITab {
			Section: tab__4A6546DD_DFC2_4A18_88D6_04661583D80E_Sections;
		}
		interface Tabs {
			_4A6546DD_DFC2_4A18_88D6_04661583D80E: tab__4A6546DD_DFC2_4A18_88D6_04661583D80E;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Errors during upgrade or installation, if any */
			msdyn_Error: DevKit.Controls.String;
			/** Date/time when an upgrade run finished */
			msdyn_FinishedDate: DevKit.Controls.DateTime;
			/** Name of the Package Deployer package */
			msdyn_Package: DevKit.Controls.String;
			/** Name of the Solution that is upgraded */
			msdyn_Solution: DevKit.Controls.String;
			/** Version that was installed before upgrade run */
			msdyn_StartingVersion: DevKit.Controls.String;
			/** Status/outcome of an upgrade run */
			msdyn_Status: DevKit.Controls.OptionSet;
			/** Version that will be achieved by the upgrade run */
			msdyn_TargetVersion: DevKit.Controls.String;
		}
		interface Grid {
			UpgradeVersions: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_upgraderun_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_upgraderun_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_upgraderun_Information */
		Body: DevKit.Formmsdyn_upgraderun_Information.Body;
		/** The Grid of form msdyn_upgraderun_Information */
		Grid: DevKit.Formmsdyn_upgraderun_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_upgraderun {
		enum msdyn_Status {
			/** 100000002 */
			Failure,
			/** 100000000 */
			Started,
			/** 100000001 */
			Success
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
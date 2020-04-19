//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_ciprovider_Information {
		interface tab__2190EC7E_BB48_4408_AA64_6008072A8A39_Sections {
			_2190EC7E_BB48_4408_AA64_6008072A8A39_SECTION_3: DevKit.Form.Controls.ControlSection;
			_C8623D8D_AFFD_453D_8CAE_3DA82648CCF0_SECTION_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab__2190EC7E_BB48_4408_AA64_6008072A8A39 extends DevKit.Form.Controls.IControlTab {
			Section: tab__2190EC7E_BB48_4408_AA64_6008072A8A39_Sections;
		}
		interface Tabs {
			_2190EC7E_BB48_4408_AA64_6008072A8A39: tab__2190EC7E_BB48_4408_AA64_6008072A8A39;
		}
		interface Body {
			Tab: Tabs;
			WebResource_msdyn_cifmessage: DevKit.Form.Controls.ControlWebResource;
			msdyn_appselector: DevKit.Form.Controls.ControlActionCards;
			/** API Version */
			msdyn_ciproviderapiversion: DevKit.Form.Controls.ControlOptionSet;
			/** Enable Outbound Communication */
			msdyn_ClickToAct: DevKit.Form.Controls.ControlBoolean;
			/** Custom Parameters for the Widget to load */
			msdyn_customparams: DevKit.Form.Controls.ControlString;
			/** Enable CIF Analytics for the current provider */
			msdyn_EnableAnalytics: DevKit.Form.Controls.ControlBoolean;
			msdyn_Label: DevKit.Form.Controls.ControlString;
			/** URL for the Channel provider */
			msdyn_LandingUrl: DevKit.Form.Controls.ControlString;
			/** Name of the Channel provider */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_roleselector: DevKit.Form.Controls.ControlActionCards;
			/** Select Channel Order as 0 for this Channel to take precedence over others. */
			msdyn_SortOrder: DevKit.Form.Controls.ControlInteger;
			/** Domain to be whitelisted */
			msdyn_trusteddomain: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_ciprovider_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ciprovider_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_ciprovider_Information */
		Body: LuckyMokey.Formmsdyn_ciprovider_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_ciprovider {
		enum msdyn_ciproviderapiversion {
			/** 0 */
			_10,
			/** 1 */
			_20
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_organizationalunit_Information {
		interface tab__3D875146_3739_4B34_9BB2_ABC10665669D_Sections {
			_7588A081_A7EE_4340_87A0_08057DA1D0FE: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4_Sections {
			_D952AB6B_D6B2_462B_B63E_2555C38B9A95: DevKit.Form.Controls.ControlSection;
		}
		interface tab__3D875146_3739_4B34_9BB2_ABC10665669D extends DevKit.Form.Controls.IControlTab {
			Section: tab__3D875146_3739_4B34_9BB2_ABC10665669D_Sections;
		}
		interface tab__B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4_Sections;
		}
		interface Tabs {
			_3D875146_3739_4B34_9BB2_ABC10665669D: tab__3D875146_3739_4B34_9BB2_ABC10665669D;
			_B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4: tab__B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4;
		}
		interface Body {
			Tab: Tabs;
			PriceList: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Select the currency that the organization uses to track its costs. */
			msdyn_currency: DevKit.Form.Controls.ControlLookup;
			/** Enter a description of the organizational unit. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** The latitude to use for the location of organizational unit. */
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			/** The longitude to use for the location of organizational unit. */
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
		}
		interface Navigation {
			nav_msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_organizationalunit_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_organizationalunit_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_organizationalunit_Information */
		Body: LuckyMokey.Formmsdyn_organizationalunit_Information.Body;
		/** The Navigation of form msdyn_organizationalunit_Information */
		Navigation: LuckyMokey.Formmsdyn_organizationalunit_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_organizationalunit {
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
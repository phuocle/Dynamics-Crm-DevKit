//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_ocwhatsappchannelaccount_Information {
		interface tab_tab1_general_Sections {
			Section1_Step1: DevKit.Controls.Section;
			Section2_Step2: DevKit.Controls.Section;
			Section3_Step3: DevKit.Controls.Section;
			Section4_Step4: DevKit.Controls.Section;
		}
		interface tab_tab1_general extends DevKit.Controls.ITab {
			Section: tab_tab1_general_Sections;
		}
		interface Tabs {
			tab1_general: tab_tab1_general;
		}
		interface Body {
			Tab: Tabs;
			WebResource_WhatsAppAccountInstructions: DevKit.Controls.WebResource;
			WebResource_WhatsAppCallbackUrl: DevKit.Controls.WebResource;
			WebResource_WhatsAppAccountValidation: DevKit.Controls.WebResource;
			/** Authentication token of WhatsApp account. */
			msdyn_authenticationtoken: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The account ID of 3rd party provider */
			msdyn_provideraccountid: DevKit.Controls.String;
			/** URL for Twilio inbound request */
			msdyn_TwilioInboundURL: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			Subgrid_WhatsAppNumbers: DevKit.Controls.Grid;
			Subgrid_ValidationResult: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocwhatsappchannelaccount_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocwhatsappchannelaccount_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocwhatsappchannelaccount_Information */
		Body: MyDog.Formmsdyn_ocwhatsappchannelaccount_Information.Body;
		/** The Grid of form msdyn_ocwhatsappchannelaccount_Information */
		Grid: MyDog.Formmsdyn_ocwhatsappchannelaccount_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocwhatsappchannelaccount {
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
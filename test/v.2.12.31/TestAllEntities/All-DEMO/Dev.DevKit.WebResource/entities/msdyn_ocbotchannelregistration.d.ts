//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocbotchannelregistration_Information {
		interface tab__A5BDA06F_065C_4B0C_B963_1A94D7693649_Sections {
			_3C9CB577_F8E3_4468_912D_98FEF8318FAC: DevKit.Controls.Section;
			_A5BDA06F_065C_4B0C_B963_1A94D7693649_SECTION_2: DevKit.Controls.Section;
			_A5BDA06F_065C_4B0C_B963_1A94D7693649_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__A5BDA06F_065C_4B0C_B963_1A94D7693649 extends DevKit.Controls.ITab {
			Section: tab__A5BDA06F_065C_4B0C_B963_1A94D7693649_Sections;
		}
		interface Tabs {
			_A5BDA06F_065C_4B0C_B963_1A94D7693649: tab__A5BDA06F_065C_4B0C_B963_1A94D7693649;
		}
		interface Body {
			Tab: Tabs;
			/** Flag to indicate if BCR entity is related to Custom Messaging */
			msdyn_iscustommessagingbcr: DevKit.Controls.Boolean;
			/** Flag to indicate if the record is newly created */
			msdyn_iscustommessagingcreated: DevKit.Controls.Boolean;
			/** Microsoft app Id and secret last validated date. */
			msdyn_lastvalidateddate: DevKit.Controls.DateTime;
			/** Messaging Endpoint (URL) */
			msdyn_messagingendpoint: DevKit.Controls.String;
			/** MS Application ID for the BCR */
			msdyn_msappid: DevKit.Controls.String;
			/** Bot channel registration client secret */
			msdyn_msappsecret: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Microsoft app ID and secert Validation status */
			msdyn_validationstatus: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_CopyCustomMessagingEndpointUrl: DevKit.Controls.WebResource;
			WebResource_CustomMessagingAccountDetailsDisclaimer: DevKit.Controls.WebResource;
			WebResource_CustomMessagingEndpointUrlDisclaimer: DevKit.Controls.WebResource;
			WebResource_CustomMessagingValidateButton: DevKit.Controls.WebResource;
			WebResource_ShowHideCustomMessagingMSAppSecret: DevKit.Controls.WebResource;
		}
		interface Grid {
			CustomMessagingChannels: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocbotchannelregistration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocbotchannelregistration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocbotchannelregistration_Information */
		Body: DevKit.Formmsdyn_ocbotchannelregistration_Information.Body;
		/** The Grid of form msdyn_ocbotchannelregistration_Information */
		Grid: DevKit.Formmsdyn_ocbotchannelregistration_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocbotchannelregistration {
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
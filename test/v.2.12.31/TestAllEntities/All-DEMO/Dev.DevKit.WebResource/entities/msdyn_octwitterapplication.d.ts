//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_octwitterapplication_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Field indicating whether Twitter Application form saved or not */
			msdyn_twitterapplicationsaved: DevKit.Controls.String;
			/** Twitter Messaging Callback URL */
			msdyn_twittercallbackurl: DevKit.Controls.String;
			/** Twitter Consumer Key */
			msdyn_twitterconsumerkey: DevKit.Controls.String;
			/** Twitter Consumer Secret */
			msdyn_twitterconsumersecret: DevKit.Controls.String;
			/** Twitter Developer Account Environment Name */
			msdyn_twitterenvironmentname: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_CopyTwitterCallbackUrl: DevKit.Controls.WebResource;
			WebResource_ShowHideTwitterConsumerKey: DevKit.Controls.WebResource;
			WebResource_ShowHideTwitterConsumerSecret: DevKit.Controls.WebResource;
			WebResource_TwitterAccountInstructions: DevKit.Controls.WebResource;
			WebResource_TwitterApplicationSaved: DevKit.Controls.WebResource;
			WebResource_TwitterCallbackUrlDisclaimer: DevKit.Controls.WebResource;
		}
		interface Grid {
			TwitterHandles: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_octwitterapplication_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_octwitterapplication_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_octwitterapplication_Information */
		Body: DevKit.Formmsdyn_octwitterapplication_Information.Body;
		/** The Grid of form msdyn_octwitterapplication_Information */
		Grid: DevKit.Formmsdyn_octwitterapplication_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_octwitterapplication {
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
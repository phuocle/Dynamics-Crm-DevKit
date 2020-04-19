//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormExternalParty_Information {
		interface Header {
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the external party status */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Tabs {
		}
		interface Body {
			externalPartyItemsGrid: DevKit.Form.Controls.ControlGrid;
			/** Contains the value that is used to detect and avoid duplicate external party records. */
			CorrelationKey: DevKit.Form.Controls.ControlString;
			/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
			EmailAddress: DevKit.Form.Controls.ControlString;
			/** Type the full name of the external party. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Shows the date when the external party was last disabled on. */
			LastDisabledOn: DevKit.Form.Controls.ControlDate;
			/** Shows the date when the external party was last enabled on. */
			LastEnabledOn: DevKit.Form.Controls.ControlDate;
		}
	}
	class FormExternalParty_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ExternalParty_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ExternalParty_Information */
		Body: LuckyMokey.FormExternalParty_Information.Body;
		/** The Header section of form ExternalParty_Information */
		Header: LuckyMokey.FormExternalParty_Information.Header;
	}
}
declare namespace OptionSet {
	namespace ExternalParty {
		enum StateCode {
			/** 0 */
			Enabled,
			/** 1 */
			Disabled
		}
		enum StatusCode {
			/** 1 */
			Enabled,
			/** 2 */
			Disabled
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
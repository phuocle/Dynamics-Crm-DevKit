//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormExternalPartyItem_Information {
		interface Header {
			/** Select the external party items status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Choose the channel access profile that's used to determine the permissions when CRM is accessed from an external channel. */
			ChannelAccessProfileId: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type the external party record that this item is created for. */
			ExternalPartyId: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the external party item was last disabled for external channel access. */
			LastDisabledOn: DevKit.Form.Controls.ControlDate;
			/** Shows the date and time when the external party item was last enabled for external channel access. */
			LastEnabledOn: DevKit.Form.Controls.ControlDate;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type the name of the external party item. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the external party enabled record that is associated with this external party item. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormExternalPartyItem_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ExternalPartyItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ExternalPartyItem_Information */
		Body: LuckyMokey.FormExternalPartyItem_Information.Body;
		/** The Header section of form ExternalPartyItem_Information */
		Header: LuckyMokey.FormExternalPartyItem_Information.Header;
	}
}
declare namespace OptionSet {
	namespace ExternalPartyItem {
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
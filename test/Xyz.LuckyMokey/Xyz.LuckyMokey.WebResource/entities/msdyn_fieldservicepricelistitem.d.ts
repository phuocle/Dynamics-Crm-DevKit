//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_fieldservicepricelistitem_Information {
		interface Tabs {
		}
		interface Body {
			/** Specify how the system should round the Duration To Bill on the Work Order Service */
			msdyn_DurationRoundingPolicy: DevKit.Form.Controls.ControlOptionSet;
			/** Specify the rounding duration. */
			msdyn_DurationRoundTo: DevKit.Form.Controls.ControlInteger;
			/** If enabled then the pricing of this item will not be multiplied by quantity */
			msdyn_FlatFee: DevKit.Form.Controls.ControlBoolean;
			/** Specify the minimum charge you wish to charge for this service. See note on Minimum Charge Duration */
			msdyn_MinimumChargeAmount: DevKit.Form.Controls.ControlMoney;
			/** If this field has a value, the Minimum Charge Amount will first apply to the Minimum Duration and beyond the minimum duration the regular fee will apply */
			msdyn_MinimumChargeDuration: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows the price list associated with the field service price list item. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** If you wish to limit this price list item to a certain product or service you can specify it. Otherwise this should be left blank */
			msdyn_ProductService: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Field Service Price List Item */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_fieldservicepricelistitem_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_fieldservicepricelistitem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_fieldservicepricelistitem_Information */
		Body: LuckyMokey.Formmsdyn_fieldservicepricelistitem_Information.Body;
		/** The Footer section of form msdyn_fieldservicepricelistitem_Information */
		Footer: LuckyMokey.Formmsdyn_fieldservicepricelistitem_Information.Footer;
		/** The Navigation of form msdyn_fieldservicepricelistitem_Information */
		Navigation: LuckyMokey.Formmsdyn_fieldservicepricelistitem_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_fieldservicepricelistitem {
		enum msdyn_DurationRoundingPolicy {
			/** 690970000 */
			None,
			/** 690970001 */
			Up,
			/** 690970002 */
			Down,
			/** 690970003 */
			Nearest
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
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormPublisher_Information {
		interface tab__70098AD5_4956_11DD_982E_00188B01DCE6_Sections {
			_70098AD6_4956_11DD_982E_00188B01DCE6: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
			_EAF2EDB4_7C5E_DD11_940F_00155D8AC303: DevKit.Form.Controls.ControlSection;
		}
		interface tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343_Sections {
			_CBF04024_5749_444C_BC51_CFAF839688BF: DevKit.Form.Controls.ControlSection;
			_6FE75F79_0CA8_4DBE_8C7B_6E68C17DE013: DevKit.Form.Controls.ControlSection;
		}
		interface tab_solutions_marketplace_Sections {
			marketplacesection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__70098AD5_4956_11DD_982E_00188B01DCE6 extends DevKit.Form.Controls.IControlTab {
			Section: tab__70098AD5_4956_11DD_982E_00188B01DCE6_Sections;
		}
		interface tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343 extends DevKit.Form.Controls.IControlTab {
			Section: tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343_Sections;
		}
		interface tab_solutions_marketplace extends DevKit.Form.Controls.IControlTab {
			Section: tab_solutions_marketplace_Sections;
		}
		interface Tabs {
			_70098AD5_4956_11DD_982E_00188B01DCE6: tab__70098AD5_4956_11DD_982E_00188B01DCE6;
			_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343: tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343;
			solutions_marketplace: tab_solutions_marketplace;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_SolutionsMarketplace: DevKit.Form.Controls.ControlIFrame;
			/** City name for address 1. */
			Address1_City: DevKit.Form.Controls.ControlString;
			/** Country/region name for address 1. */
			Address1_Country: DevKit.Form.Controls.ControlString;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Form.Controls.ControlString;
			/** Second line for entering address 1 information. */
			Address1_Line2: DevKit.Form.Controls.ControlString;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Form.Controls.ControlString;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Form.Controls.ControlString;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Form.Controls.ControlString;
			/** Default option value prefix used for newly created options for solutions associated with this publisher. */
			CustomizationOptionValuePrefix: DevKit.Form.Controls.ControlInteger;
			/** Prefix used for new entities, attributes, and entity relationships for solutions associated with this publisher. */
			CustomizationPrefix: DevKit.Form.Controls.ControlString;
			/** Description of the solution. */
			Description: DevKit.Form.Controls.ControlString;
			/** Email address for the publisher. */
			EMailAddress: DevKit.Form.Controls.ControlString;
			/** User display name for this publisher. */
			FriendlyName: DevKit.Form.Controls.ControlString;
			/** URL for the supporting website of this publisher. */
			SupportingWebsiteUrl: DevKit.Form.Controls.ControlString;
			/** The unique name of this publisher. */
			UniqueName: DevKit.Form.Controls.ControlString;
		}
	}
	class FormPublisher_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Publisher_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Publisher_Information */
		Body: LuckyMokey.FormPublisher_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Publisher {
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
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
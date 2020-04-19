//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formadobe_recipient_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Agreement associated with Recipient. */
			adobe_AgreementId: DevKit.Form.Controls.ControlLookup;
			adobe_datesigned: DevKit.Form.Controls.ControlDate;
			adobe_emailaddress: DevKit.Form.Controls.ControlString;
			adobe_fullname: DevKit.Form.Controls.ControlString;
			adobe_hassigned: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			adobe_name: DevKit.Form.Controls.ControlString;
			adobe_parentagreementstatus: DevKit.Form.Controls.ControlString;
			adobe_recipientorderbackup: DevKit.Form.Controls.ControlInteger;
			adobe_signingurl: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formadobe_recipient_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form adobe_recipient_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form adobe_recipient_Information */
		Body: LuckyMokey.Formadobe_recipient_Information.Body;
	}
	namespace Formadobe_recipient_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			adobe_countrycode: DevKit.Form.Controls.ControlString;
			adobe_emailaddress: DevKit.Form.Controls.ControlString;
			adobe_fullname: DevKit.Form.Controls.ControlString;
			adobe_identityverification: DevKit.Form.Controls.ControlOptionSet;
			adobe_overridedefaultverification: DevKit.Form.Controls.ControlBoolean;
			adobe_password: DevKit.Form.Controls.ControlString;
			adobe_phone: DevKit.Form.Controls.ControlString;
			adobe_recipientcrmtype: DevKit.Form.Controls.ControlOptionSet;
			adobe_recipientrole: DevKit.Form.Controls.ControlOptionSet;
			adobe_relatedcontact: DevKit.Form.Controls.ControlLookup;
			adobe_relatedlead: DevKit.Form.Controls.ControlLookup;
			adobe_relateduser: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formadobe_recipient_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form adobe_recipient_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form adobe_recipient_Quick_Create */
		Body: LuckyMokey.Formadobe_recipient_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace adobe_recipient {
		enum adobe_identityverification {
			/** 648770003 */
			EMAIL,
			/** 648770004 */
			PHONE,
			/** 648770000 */
			PASSWORD,
			/** 648770001 */
			KNOWLEDGE_BASE,
			/** 648770002 */
			WEB_IDENTITY
		}
		enum adobe_recipientcrmtype {
			/** 648770000 */
			New,
			/** 648770001 */
			Contact,
			/** 648770002 */
			Lead,
			/** 648770003 */
			User
		}
		enum adobe_recipientlookuptype {
			/** 648770000 */
			Lead,
			/** 648770001 */
			Contact,
			/** 648770002 */
			User
		}
		enum adobe_recipientrole {
			/** 648770000 */
			SIGNER,
			/** 648770001 */
			APPROVER,
			/** 648770002 */
			CC
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
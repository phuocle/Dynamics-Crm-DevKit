//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBookableResourceCharacteristic_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Type the name of the association between the resource and characteristic. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormBookableResourceCharacteristic_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceCharacteristic_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResourceCharacteristic_Information */
		Body: LuckyMokey.FormBookableResourceCharacteristic_Information.Body;
	}
	namespace FormOmnichannel_Bookable_Resource_Characteristic_Main_Form {
		interface Tabs {
		}
		interface Body {
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Type the name of the association between the resource and characteristic. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormOmnichannel_Bookable_Resource_Characteristic_Main_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Omnichannel_Bookable_Resource_Characteristic_Main_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Omnichannel_Bookable_Resource_Characteristic_Main_Form */
		Body: LuckyMokey.FormOmnichannel_Bookable_Resource_Characteristic_Main_Form.Body;
	}
	namespace FormBookableResourceCharacteristic_Quick_Create {
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
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormBookableResourceCharacteristic_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceCharacteristic_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResourceCharacteristic_Quick_Create */
		Body: LuckyMokey.FormBookableResourceCharacteristic_Quick_Create.Body;
	}
	namespace FormQuick_create_bookable_resource_form {
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
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQuick_create_bookable_resource_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_create_bookable_resource_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_create_bookable_resource_form */
		Body: LuckyMokey.FormQuick_create_bookable_resource_form.Body;
	}
}
declare namespace OptionSet {
	namespace BookableResourceCharacteristic {
		enum msdyn_approvalstatus {
			/** 192350000 */
			Saved,
			/** 192350001 */
			Pending_Approval,
			/** 192350002 */
			Rejected,
			/** 192350003 */
			Approved,
			/** 192350004 */
			Recalled
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'JsForm':['Information','Main Form','Quick Create','Quick create bookable resource form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_odatav4ds_Information {
		interface tab_tab_Request_Parameters_Sections {
			tab_requestparameters_section_type: DevKit.Form.Controls.ControlSection;
			tab_requestparameters_section_name: DevKit.Form.Controls.ControlSection;
			tab_requestparameters_section_value: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_additional_parameters_Sections {
			tab_additional_section_parametertype: DevKit.Form.Controls.ControlSection;
			tab_additional_section_parametername: DevKit.Form.Controls.ControlSection;
			tab_additional_section_value: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_Request_Parameters extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_Request_Parameters_Sections;
		}
		interface tab_tab_additional_parameters extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_additional_parameters_Sections;
		}
		interface Tabs {
			tab_Request_Parameters: tab_tab_Request_Parameters;
			tab_additional_parameters: tab_tab_additional_parameters;
		}
		interface Body {
			Tab: Tabs;
			/** Parameter10 Type */
			msdyn_isparameter10header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter1 Type */
			msdyn_isparameter1header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter2 Type */
			msdyn_isparameter2header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter3 Type */
			msdyn_isparameter3header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter4 Type */
			msdyn_isparameter4header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter5 Type */
			msdyn_isparameter5header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter6 Type */
			msdyn_isparameter6header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter7 Type */
			msdyn_isparameter7header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter8 Type */
			msdyn_isparameter8header: DevKit.Form.Controls.ControlBoolean;
			/** Parameter9 Type */
			msdyn_isparameter9header: DevKit.Form.Controls.ControlBoolean;
			/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_paginationtype: DevKit.Form.Controls.ControlOptionSet;
			msdyn_parameter10name: DevKit.Form.Controls.ControlString;
			msdyn_parameter10value: DevKit.Form.Controls.ControlString;
			msdyn_parameter1name: DevKit.Form.Controls.ControlString;
			msdyn_parameter1value: DevKit.Form.Controls.ControlString;
			msdyn_parameter2name: DevKit.Form.Controls.ControlString;
			msdyn_parameter2value: DevKit.Form.Controls.ControlString;
			msdyn_parameter3name: DevKit.Form.Controls.ControlString;
			msdyn_parameter3value: DevKit.Form.Controls.ControlString;
			msdyn_parameter4name: DevKit.Form.Controls.ControlString;
			msdyn_parameter4value: DevKit.Form.Controls.ControlString;
			msdyn_parameter5name: DevKit.Form.Controls.ControlString;
			msdyn_parameter5value: DevKit.Form.Controls.ControlString;
			msdyn_parameter6name: DevKit.Form.Controls.ControlString;
			msdyn_parameter6value: DevKit.Form.Controls.ControlString;
			msdyn_parameter7name: DevKit.Form.Controls.ControlString;
			msdyn_parameter7value: DevKit.Form.Controls.ControlString;
			msdyn_parameter8name: DevKit.Form.Controls.ControlString;
			msdyn_parameter8value: DevKit.Form.Controls.ControlString;
			msdyn_parameter9name: DevKit.Form.Controls.ControlString;
			msdyn_parameter9value: DevKit.Form.Controls.ControlString;
			msdyn_returninlinecount: DevKit.Form.Controls.ControlBoolean;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			msdyn_timeout: DevKit.Form.Controls.ControlInteger;
			/** URL of the OData v4 web service endpoint this data source will target. */
			msdyn_uri: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_odatav4ds_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_odatav4ds_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_odatav4ds_Information */
		Body: LuckyMokey.Formmsdyn_odatav4ds_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_odatav4ds {
		enum msdyn_paginationtype {
			/** 0 */
			Client_side_Paging,
			/** 1 */
			Server_side_Paging
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
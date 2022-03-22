//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_odatav4ds_Information {
		interface tab_tab_additional_parameters_Sections {
			tab_additional_section_parametername: DevKit.Controls.Section;
			tab_additional_section_parametertype: DevKit.Controls.Section;
			tab_additional_section_value: DevKit.Controls.Section;
		}
		interface tab_tab_Request_Parameters_Sections {
			tab_requestparameters_section_name: DevKit.Controls.Section;
			tab_requestparameters_section_type: DevKit.Controls.Section;
			tab_requestparameters_section_value: DevKit.Controls.Section;
		}
		interface tab_tab_additional_parameters extends DevKit.Controls.ITab {
			Section: tab_tab_additional_parameters_Sections;
		}
		interface tab_tab_Request_Parameters extends DevKit.Controls.ITab {
			Section: tab_tab_Request_Parameters_Sections;
		}
		interface Tabs {
			tab_additional_parameters: tab_tab_additional_parameters;
			tab_Request_Parameters: tab_tab_Request_Parameters;
		}
		interface Body {
			Tab: Tabs;
			/** Parameter10 Type */
			msdyn_isparameter10header: DevKit.Controls.Boolean;
			/** Parameter1 Type */
			msdyn_isparameter1header: DevKit.Controls.Boolean;
			/** Parameter2 Type */
			msdyn_isparameter2header: DevKit.Controls.Boolean;
			/** Parameter3 Type */
			msdyn_isparameter3header: DevKit.Controls.Boolean;
			/** Parameter4 Type */
			msdyn_isparameter4header: DevKit.Controls.Boolean;
			/** Parameter5 Type */
			msdyn_isparameter5header: DevKit.Controls.Boolean;
			/** Parameter6 Type */
			msdyn_isparameter6header: DevKit.Controls.Boolean;
			/** Parameter7 Type */
			msdyn_isparameter7header: DevKit.Controls.Boolean;
			/** Parameter8 Type */
			msdyn_isparameter8header: DevKit.Controls.Boolean;
			/** Parameter9 Type */
			msdyn_isparameter9header: DevKit.Controls.Boolean;
			/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_paginationtype: DevKit.Controls.OptionSet;
			msdyn_parameter10name: DevKit.Controls.String;
			msdyn_parameter10value: DevKit.Controls.String;
			msdyn_parameter1name: DevKit.Controls.String;
			msdyn_parameter1value: DevKit.Controls.String;
			msdyn_parameter2name: DevKit.Controls.String;
			msdyn_parameter2value: DevKit.Controls.String;
			msdyn_parameter3name: DevKit.Controls.String;
			msdyn_parameter3value: DevKit.Controls.String;
			msdyn_parameter4name: DevKit.Controls.String;
			msdyn_parameter4value: DevKit.Controls.String;
			msdyn_parameter5name: DevKit.Controls.String;
			msdyn_parameter5value: DevKit.Controls.String;
			msdyn_parameter6name: DevKit.Controls.String;
			msdyn_parameter6value: DevKit.Controls.String;
			msdyn_parameter7name: DevKit.Controls.String;
			msdyn_parameter7value: DevKit.Controls.String;
			msdyn_parameter8name: DevKit.Controls.String;
			msdyn_parameter8value: DevKit.Controls.String;
			msdyn_parameter9name: DevKit.Controls.String;
			msdyn_parameter9value: DevKit.Controls.String;
			msdyn_returninlinecount: DevKit.Controls.Boolean;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL of the OData v4 web service endpoint this data source will target. */
			msdyn_uri: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_odatav4ds_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_odatav4ds_Information */
		Body: DevKit.Formmsdyn_odatav4ds_Information.Body;
		/** The Process of form msdyn_odatav4ds_Information */
		Process: DevKit.Formmsdyn_odatav4ds_Information.Process;
		/** The SidePanes of form msdyn_odatav4ds_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_odatav4ds_Information2 {
		interface tab_tab_additional_parameters_Sections {
			tab_additional_section_parametername: DevKit.Controls.Section;
			tab_additional_section_parametertype: DevKit.Controls.Section;
			tab_additional_section_value: DevKit.Controls.Section;
		}
		interface tab_tab_Request_Parameters_Sections {
			tab_requestparameters_section_name: DevKit.Controls.Section;
			tab_requestparameters_section_type: DevKit.Controls.Section;
			tab_requestparameters_section_value: DevKit.Controls.Section;
		}
		interface tab_tab_additional_parameters extends DevKit.Controls.ITab {
			Section: tab_tab_additional_parameters_Sections;
		}
		interface tab_tab_Request_Parameters extends DevKit.Controls.ITab {
			Section: tab_tab_Request_Parameters_Sections;
		}
		interface Tabs {
			tab_additional_parameters: tab_tab_additional_parameters;
			tab_Request_Parameters: tab_tab_Request_Parameters;
		}
		interface Body {
			Tab: Tabs;
			/** Parameter10 Type */
			msdyn_isparameter10header: DevKit.Controls.Boolean;
			/** Parameter1 Type */
			msdyn_isparameter1header: DevKit.Controls.Boolean;
			/** Parameter2 Type */
			msdyn_isparameter2header: DevKit.Controls.Boolean;
			/** Parameter3 Type */
			msdyn_isparameter3header: DevKit.Controls.Boolean;
			/** Parameter4 Type */
			msdyn_isparameter4header: DevKit.Controls.Boolean;
			/** Parameter5 Type */
			msdyn_isparameter5header: DevKit.Controls.Boolean;
			/** Parameter6 Type */
			msdyn_isparameter6header: DevKit.Controls.Boolean;
			/** Parameter7 Type */
			msdyn_isparameter7header: DevKit.Controls.Boolean;
			/** Parameter8 Type */
			msdyn_isparameter8header: DevKit.Controls.Boolean;
			/** Parameter9 Type */
			msdyn_isparameter9header: DevKit.Controls.Boolean;
			/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_paginationtype: DevKit.Controls.OptionSet;
			msdyn_parameter10name: DevKit.Controls.String;
			msdyn_parameter10value: DevKit.Controls.String;
			msdyn_parameter1name: DevKit.Controls.String;
			msdyn_parameter1value: DevKit.Controls.String;
			msdyn_parameter2name: DevKit.Controls.String;
			msdyn_parameter2value: DevKit.Controls.String;
			msdyn_parameter3name: DevKit.Controls.String;
			msdyn_parameter3value: DevKit.Controls.String;
			msdyn_parameter4name: DevKit.Controls.String;
			msdyn_parameter4value: DevKit.Controls.String;
			msdyn_parameter5name: DevKit.Controls.String;
			msdyn_parameter5value: DevKit.Controls.String;
			msdyn_parameter6name: DevKit.Controls.String;
			msdyn_parameter6value: DevKit.Controls.String;
			msdyn_parameter7name: DevKit.Controls.String;
			msdyn_parameter7value: DevKit.Controls.String;
			msdyn_parameter8name: DevKit.Controls.String;
			msdyn_parameter8value: DevKit.Controls.String;
			msdyn_parameter9name: DevKit.Controls.String;
			msdyn_parameter9value: DevKit.Controls.String;
			msdyn_returninlinecount: DevKit.Controls.Boolean;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL of the OData v4 web service endpoint this data source will target. */
			msdyn_uri: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_odatav4ds_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_odatav4ds_Information2 */
		Body: DevKit.Formmsdyn_odatav4ds_Information2.Body;
		/** The Process of form msdyn_odatav4ds_Information2 */
		Process: DevKit.Formmsdyn_odatav4ds_Information2.Process;
		/** The SidePanes of form msdyn_odatav4ds_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_odatav4dsApi {
		/**
		* DynamicsCrm.DevKit msdyn_odatav4dsApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Type additional information to describe this OData v4 data source. What environment does this data source target and what is the purpose of this system ? */
		msdyn_description: string;
		/** Parameter10 Type */
		msdyn_isparameter10header: boolean;
		/** Parameter1 Type */
		msdyn_isparameter1header: boolean;
		/** Parameter2 Type */
		msdyn_isparameter2header: boolean;
		/** Parameter3 Type */
		msdyn_isparameter3header: boolean;
		/** Parameter4 Type */
		msdyn_isparameter4header: boolean;
		/** Parameter5 Type */
		msdyn_isparameter5header: boolean;
		/** Parameter6 Type */
		msdyn_isparameter6header: boolean;
		/** Parameter7 Type */
		msdyn_isparameter7header: boolean;
		/** Parameter8 Type */
		msdyn_isparameter8header: boolean;
		/** Parameter9 Type */
		msdyn_isparameter9header: boolean;
		/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_odatav4dsId: string;
		msdyn_paginationmode: boolean;
		msdyn_paginationtype: OptionSet.msdyn_odatav4ds.msdyn_paginationtype;
		msdyn_parameter10name: string;
		msdyn_parameter10value: string;
		msdyn_parameter1name: string;
		msdyn_parameter1value: string;
		msdyn_parameter2name: string;
		msdyn_parameter2value: string;
		msdyn_parameter3name: string;
		msdyn_parameter3value: string;
		msdyn_parameter4name: string;
		msdyn_parameter4value: string;
		msdyn_parameter5name: string;
		msdyn_parameter5value: string;
		msdyn_parameter6name: string;
		msdyn_parameter6value: string;
		msdyn_parameter7name: string;
		msdyn_parameter7value: string;
		msdyn_parameter8name: string;
		msdyn_parameter8value: string;
		msdyn_parameter9name: string;
		msdyn_parameter9value: string;
		msdyn_returninlinecount: boolean;
		/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
		msdyn_timeout: number;
		/** URL of the OData v4 web service endpoint this data source will target. */
		msdyn_uri: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
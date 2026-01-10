//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_odatav4ds_Information {
		interface tab_tab_additional_parameters_Sections {
			/** Parameter Name */
			tab_additional_section_parametername: DevKit.Controls.Section;
			/** Parameter Type */
			tab_additional_section_parametertype: DevKit.Controls.Section;
			/** Value */
			tab_additional_section_value: DevKit.Controls.Section;
		}
		interface tab_tab_Request_Parameters_Sections {
			/** Parameter Name */
			tab_requestparameters_section_name: DevKit.Controls.Section;
			/** Parameter Type */
			tab_requestparameters_section_type: DevKit.Controls.Section;
			/** Value */
			tab_requestparameters_section_value: DevKit.Controls.Section;
		}
		/** Additional Request Parameters */
		interface tab_tab_additional_parameters extends DevKit.Controls.ITab {
			Section: tab_tab_additional_parameters_Sections;
		}
		/** Request Parameters */
		interface tab_tab_Request_Parameters extends DevKit.Controls.ITab {
			Section: tab_tab_Request_Parameters_Sections;
		}
		interface Tabs {
			/** Additional Request Parameters */
			tab_additional_parameters: tab_tab_additional_parameters;
			/** Request Parameters */
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
			/** Pagination Mode */
			msdyn_paginationtype: DevKit.Controls.OptionSet;
			/** parameter10name */
			msdyn_parameter10name: DevKit.Controls.String;
			/** parameter10value */
			msdyn_parameter10value: DevKit.Controls.String;
			/** parameter1name */
			msdyn_parameter1name: DevKit.Controls.String;
			/** parameter1value */
			msdyn_parameter1value: DevKit.Controls.String;
			/** parameter2name */
			msdyn_parameter2name: DevKit.Controls.String;
			/** parameter2value */
			msdyn_parameter2value: DevKit.Controls.String;
			/** parameter3name */
			msdyn_parameter3name: DevKit.Controls.String;
			/** parameter3value */
			msdyn_parameter3value: DevKit.Controls.String;
			/** parameter4name */
			msdyn_parameter4name: DevKit.Controls.String;
			/** parameter4value */
			msdyn_parameter4value: DevKit.Controls.String;
			/** parameter5name */
			msdyn_parameter5name: DevKit.Controls.String;
			/** parameter5value */
			msdyn_parameter5value: DevKit.Controls.String;
			/** parameter6name */
			msdyn_parameter6name: DevKit.Controls.String;
			/** parameter6value */
			msdyn_parameter6value: DevKit.Controls.String;
			/** parameter7name */
			msdyn_parameter7name: DevKit.Controls.String;
			/** parameter7value */
			msdyn_parameter7value: DevKit.Controls.String;
			/** parameter8name */
			msdyn_parameter8name: DevKit.Controls.String;
			/** parameter8value */
			msdyn_parameter8value: DevKit.Controls.String;
			/** parameter9name */
			msdyn_parameter9name: DevKit.Controls.String;
			/** parameter9value */
			msdyn_parameter9value: DevKit.Controls.String;
			/** Return Inline Count */
			msdyn_returninlinecount: DevKit.Controls.Boolean;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL of the OData v4 web service endpoint this data source will target. */
			msdyn_uri: DevKit.Controls.String;
		}
	}
	export class Formmsdyn_odatav4ds_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_odatav4ds_Information */
		Body: DevKit.Formmsdyn_odatav4ds_Information.Body;
	}
	namespace Formmsdyn_odatav4ds_Information2 {
		interface tab_tab_additional_parameters_Sections {
			/** Parameter Name */
			tab_additional_section_parametername: DevKit.Controls.Section;
			/** Parameter Type */
			tab_additional_section_parametertype: DevKit.Controls.Section;
			/** Value */
			tab_additional_section_value: DevKit.Controls.Section;
		}
		interface tab_tab_Request_Parameters_Sections {
			/** Parameter Name */
			tab_requestparameters_section_name: DevKit.Controls.Section;
			/** Parameter Type */
			tab_requestparameters_section_type: DevKit.Controls.Section;
			/** Value */
			tab_requestparameters_section_value: DevKit.Controls.Section;
		}
		/** Additional Request Parameters */
		interface tab_tab_additional_parameters extends DevKit.Controls.ITab {
			Section: tab_tab_additional_parameters_Sections;
		}
		/** Request Parameters */
		interface tab_tab_Request_Parameters extends DevKit.Controls.ITab {
			Section: tab_tab_Request_Parameters_Sections;
		}
		interface Tabs {
			/** Additional Request Parameters */
			tab_additional_parameters: tab_tab_additional_parameters;
			/** Request Parameters */
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
			/** Pagination Mode */
			msdyn_paginationtype: DevKit.Controls.OptionSet;
			/** parameter10name */
			msdyn_parameter10name: DevKit.Controls.String;
			/** parameter10value */
			msdyn_parameter10value: DevKit.Controls.String;
			/** parameter1name */
			msdyn_parameter1name: DevKit.Controls.String;
			/** parameter1value */
			msdyn_parameter1value: DevKit.Controls.String;
			/** parameter2name */
			msdyn_parameter2name: DevKit.Controls.String;
			/** parameter2value */
			msdyn_parameter2value: DevKit.Controls.String;
			/** parameter3name */
			msdyn_parameter3name: DevKit.Controls.String;
			/** parameter3value */
			msdyn_parameter3value: DevKit.Controls.String;
			/** parameter4name */
			msdyn_parameter4name: DevKit.Controls.String;
			/** parameter4value */
			msdyn_parameter4value: DevKit.Controls.String;
			/** parameter5name */
			msdyn_parameter5name: DevKit.Controls.String;
			/** parameter5value */
			msdyn_parameter5value: DevKit.Controls.String;
			/** parameter6name */
			msdyn_parameter6name: DevKit.Controls.String;
			/** parameter6value */
			msdyn_parameter6value: DevKit.Controls.String;
			/** parameter7name */
			msdyn_parameter7name: DevKit.Controls.String;
			/** parameter7value */
			msdyn_parameter7value: DevKit.Controls.String;
			/** parameter8name */
			msdyn_parameter8name: DevKit.Controls.String;
			/** parameter8value */
			msdyn_parameter8value: DevKit.Controls.String;
			/** parameter9name */
			msdyn_parameter9name: DevKit.Controls.String;
			/** parameter9value */
			msdyn_parameter9value: DevKit.Controls.String;
			/** Return Inline Count */
			msdyn_returninlinecount: DevKit.Controls.Boolean;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL of the OData v4 web service endpoint this data source will target. */
			msdyn_uri: DevKit.Controls.String;
		}
	}
	export class Formmsdyn_odatav4ds_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_odatav4ds_Information2 */
		Body: DevKit.Formmsdyn_odatav4ds_Information2.Body;
	}
	export class msdyn_odatav4dsApi {
		/**
		* DynamicsCrm.DevKit msdyn_odatav4dsApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Type additional information to describe this OData v4 data source. What environment does this data source target and what is the purpose of this system ? */
		msdyn_description: string | null;
		/** Parameter10 Type */
		msdyn_isparameter10header: boolean | null;
		/** Parameter1 Type */
		msdyn_isparameter1header: boolean | null;
		/** Parameter2 Type */
		msdyn_isparameter2header: boolean | null;
		/** Parameter3 Type */
		msdyn_isparameter3header: boolean | null;
		/** Parameter4 Type */
		msdyn_isparameter4header: boolean | null;
		/** Parameter5 Type */
		msdyn_isparameter5header: boolean | null;
		/** Parameter6 Type */
		msdyn_isparameter6header: boolean | null;
		/** Parameter7 Type */
		msdyn_isparameter7header: boolean | null;
		/** Parameter8 Type */
		msdyn_isparameter8header: boolean | null;
		/** Parameter9 Type */
		msdyn_isparameter9header: boolean | null;
		/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
		msdyn_name: string | null;
		/** Unique identifier for entity instances */
		msdyn_odatav4dsId: string | null;
		msdyn_paginationmode: boolean | null;
		msdyn_paginationtype: OptionSet.msdyn_odatav4ds.msdyn_paginationtype | null;
		msdyn_parameter10name: string | null;
		msdyn_parameter10value: string | null;
		msdyn_parameter1name: string | null;
		msdyn_parameter1value: string | null;
		msdyn_parameter2name: string | null;
		msdyn_parameter2value: string | null;
		msdyn_parameter3name: string | null;
		msdyn_parameter3value: string | null;
		msdyn_parameter4name: string | null;
		msdyn_parameter4value: string | null;
		msdyn_parameter5name: string | null;
		msdyn_parameter5value: string | null;
		msdyn_parameter6name: string | null;
		msdyn_parameter6value: string | null;
		msdyn_parameter7name: string | null;
		msdyn_parameter7value: string | null;
		msdyn_parameter8name: string | null;
		msdyn_parameter8value: string | null;
		msdyn_parameter9name: string | null;
		msdyn_parameter9value: string | null;
		msdyn_returninlinecount: boolean | null;
		/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
		msdyn_timeout: number | null;
		/** URL of the OData v4 web service endpoint this data source will target. */
		msdyn_uri: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Type additional information to describe this OData v4 data source. What environment does this data source target and what is the purpose of this system ? */
			readonly msdyn_description: string;
			/** Parameter10 Type */
			readonly msdyn_isparameter10header: string;
			/** Parameter1 Type */
			readonly msdyn_isparameter1header: string;
			/** Parameter2 Type */
			readonly msdyn_isparameter2header: string;
			/** Parameter3 Type */
			readonly msdyn_isparameter3header: string;
			/** Parameter4 Type */
			readonly msdyn_isparameter4header: string;
			/** Parameter5 Type */
			readonly msdyn_isparameter5header: string;
			/** Parameter6 Type */
			readonly msdyn_isparameter6header: string;
			/** Parameter7 Type */
			readonly msdyn_isparameter7header: string;
			/** Parameter8 Type */
			readonly msdyn_isparameter8header: string;
			/** Parameter9 Type */
			readonly msdyn_isparameter9header: string;
			/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_odatav4dsId: string;
			readonly msdyn_paginationmode: string;
			readonly msdyn_paginationtype: string;
			readonly msdyn_parameter10name: string;
			readonly msdyn_parameter10value: string;
			readonly msdyn_parameter1name: string;
			readonly msdyn_parameter1value: string;
			readonly msdyn_parameter2name: string;
			readonly msdyn_parameter2value: string;
			readonly msdyn_parameter3name: string;
			readonly msdyn_parameter3value: string;
			readonly msdyn_parameter4name: string;
			readonly msdyn_parameter4value: string;
			readonly msdyn_parameter5name: string;
			readonly msdyn_parameter5value: string;
			readonly msdyn_parameter6name: string;
			readonly msdyn_parameter6value: string;
			readonly msdyn_parameter7name: string;
			readonly msdyn_parameter7value: string;
			readonly msdyn_parameter8name: string;
			readonly msdyn_parameter8value: string;
			readonly msdyn_parameter9name: string;
			readonly msdyn_parameter9value: string;
			readonly msdyn_returninlinecount: string;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			readonly msdyn_timeout: string;
			/** URL of the OData v4 web service endpoint this data source will target. */
			readonly msdyn_uri: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_odatav4ds {
		enum msdyn_paginationtype {
			/** Client_side_Paging = 0*/
			Client_side_Paging = 0,
			/** Server_side_Paging = 1*/
			Server_side_Paging = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
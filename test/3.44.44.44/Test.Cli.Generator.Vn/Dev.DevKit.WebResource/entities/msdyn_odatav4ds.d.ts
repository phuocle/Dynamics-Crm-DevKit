//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
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
			/** Loại tham số10 */
			msdyn_isparameter10header: DevKit.Controls.Boolean;
			/** Loại tham số1 */
			msdyn_isparameter1header: DevKit.Controls.Boolean;
			/** Loại tham số2 */
			msdyn_isparameter2header: DevKit.Controls.Boolean;
			/** Loại tham số3 */
			msdyn_isparameter3header: DevKit.Controls.Boolean;
			/** Loại tham số4 */
			msdyn_isparameter4header: DevKit.Controls.Boolean;
			/** Loại tham số5 */
			msdyn_isparameter5header: DevKit.Controls.Boolean;
			/** Loại tham số6 */
			msdyn_isparameter6header: DevKit.Controls.Boolean;
			/** Loại tham số7 */
			msdyn_isparameter7header: DevKit.Controls.Boolean;
			/** Loại tham số8 */
			msdyn_isparameter8header: DevKit.Controls.Boolean;
			/** Loại tham số9 */
			msdyn_isparameter9header: DevKit.Controls.Boolean;
			/** Tên của nguồn dữ liệu OData v4. Tên này xuất hiện trong danh sách nguồn dữ liệu dạng thả xuống khi tạo một thực thể mới. */
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
			/** Thời gian phải chờ tính theo giây trước khi yêu cầu OData v4 hết thời gian chờ. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL của điểm cuối dịch vụ web OData v4 mà nguồn dữ liệu này sẽ hướng tới. */
			msdyn_uri: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormThong_tin2 {
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
			/** Loại tham số10 */
			msdyn_isparameter10header: DevKit.Controls.Boolean;
			/** Loại tham số1 */
			msdyn_isparameter1header: DevKit.Controls.Boolean;
			/** Loại tham số2 */
			msdyn_isparameter2header: DevKit.Controls.Boolean;
			/** Loại tham số3 */
			msdyn_isparameter3header: DevKit.Controls.Boolean;
			/** Loại tham số4 */
			msdyn_isparameter4header: DevKit.Controls.Boolean;
			/** Loại tham số5 */
			msdyn_isparameter5header: DevKit.Controls.Boolean;
			/** Loại tham số6 */
			msdyn_isparameter6header: DevKit.Controls.Boolean;
			/** Loại tham số7 */
			msdyn_isparameter7header: DevKit.Controls.Boolean;
			/** Loại tham số8 */
			msdyn_isparameter8header: DevKit.Controls.Boolean;
			/** Loại tham số9 */
			msdyn_isparameter9header: DevKit.Controls.Boolean;
			/** Tên của nguồn dữ liệu OData v4. Tên này xuất hiện trong danh sách nguồn dữ liệu dạng thả xuống khi tạo một thực thể mới. */
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
			/** Thời gian phải chờ tính theo giây trước khi yêu cầu OData v4 hết thời gian chờ. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL của điểm cuối dịch vụ web OData v4 mà nguồn dữ liệu này sẽ hướng tới. */
			msdyn_uri: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormThong_tin2 extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin2 */
		Body: DevKit.FormThong_tin2.Body;
		/** The Navigation of form Thong_tin2 */
		Navigation: DevKit.FormThong_tin2.Navigation;
		/** The SidePanes of form Thong_tin2 */
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
		/** Nhập thông tin bổ sung để mô tả nguồn dữ liệu OData v4 này. Nguồn dữ liệu này hướng tới môi trường nào, và mục tiêu của hệ thống này là gì? */
		msdyn_description: string;
		/** Loại tham số10 */
		msdyn_isparameter10header: boolean;
		/** Loại tham số1 */
		msdyn_isparameter1header: boolean;
		/** Loại tham số2 */
		msdyn_isparameter2header: boolean;
		/** Loại tham số3 */
		msdyn_isparameter3header: boolean;
		/** Loại tham số4 */
		msdyn_isparameter4header: boolean;
		/** Loại tham số5 */
		msdyn_isparameter5header: boolean;
		/** Loại tham số6 */
		msdyn_isparameter6header: boolean;
		/** Loại tham số7 */
		msdyn_isparameter7header: boolean;
		/** Loại tham số8 */
		msdyn_isparameter8header: boolean;
		/** Loại tham số9 */
		msdyn_isparameter9header: boolean;
		/** Tên của nguồn dữ liệu OData v4. Tên này xuất hiện trong danh sách nguồn dữ liệu dạng thả xuống khi tạo một thực thể mới. */
		msdyn_name: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
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
		/** Thời gian phải chờ tính theo giây trước khi yêu cầu OData v4 hết thời gian chờ. */
		msdyn_timeout: number;
		/** URL của điểm cuối dịch vụ web OData v4 mà nguồn dữ liệu này sẽ hướng tới. */
		msdyn_uri: string;
		readonly FormattedValue: {
			/** Nhập thông tin bổ sung để mô tả nguồn dữ liệu OData v4 này. Nguồn dữ liệu này hướng tới môi trường nào, và mục tiêu của hệ thống này là gì? */
			readonly msdyn_description: string;
			/** Loại tham số10 */
			readonly msdyn_isparameter10header: string;
			/** Loại tham số1 */
			readonly msdyn_isparameter1header: string;
			/** Loại tham số2 */
			readonly msdyn_isparameter2header: string;
			/** Loại tham số3 */
			readonly msdyn_isparameter3header: string;
			/** Loại tham số4 */
			readonly msdyn_isparameter4header: string;
			/** Loại tham số5 */
			readonly msdyn_isparameter5header: string;
			/** Loại tham số6 */
			readonly msdyn_isparameter6header: string;
			/** Loại tham số7 */
			readonly msdyn_isparameter7header: string;
			/** Loại tham số8 */
			readonly msdyn_isparameter8header: string;
			/** Loại tham số9 */
			readonly msdyn_isparameter9header: string;
			/** Tên của nguồn dữ liệu OData v4. Tên này xuất hiện trong danh sách nguồn dữ liệu dạng thả xuống khi tạo một thực thể mới. */
			readonly msdyn_name: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
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
			/** Thời gian phải chờ tính theo giây trước khi yêu cầu OData v4 hết thời gian chờ. */
			readonly msdyn_timeout: string;
			/** URL của điểm cuối dịch vụ web OData v4 mà nguồn dữ liệu này sẽ hướng tới. */
			readonly msdyn_uri: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_odatav4ds {
		enum msdyn_paginationtype {
			/** 1 */
			Phan_trang_phia_may_chu,
			/** 0 */
			Phan_trang_phia_ung_dung_khach
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Nhận xét cho chuỗi hiển thị tùy chỉnh. */
			CustomComment: DevKit.Controls.String;
			/** Chuỗi hiển thị tùy chỉnh. */
			CustomDisplayString: DevKit.Controls.String;
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
	class DisplayStringApi {
		/**
		* DynamicsCrm.DevKit DisplayStringApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.DisplayString.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo chuỗi hiển thị. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo chuỗi hiển thị. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo displaystring. */
		readonly CreatedOnBehalfBy: string;
		/** Nhận xét cho chuỗi hiển thị tùy chỉnh. */
		CustomComment: string;
		/** Chuỗi hiển thị tùy chỉnh. */
		CustomDisplayString: string;
		/** Mã định danh duy nhất của chuỗi hiển thị. */
		DisplayStringId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly DisplayStringIdUnique: string;
		/** Chỉ sử dụng nội bộ. */
		readonly DisplayStringKey: string;
		/** Tham số được dùng để định dạng chuỗi hiển thị. */
		readonly FormatParameters: number;
		readonly IsManaged: boolean;
		/** Mã ngôn ngữ của chuỗi hiển thị. */
		LanguageCode: number;
		/** Mã định danh duy nhất của người dùng sửa đổi chuỗi hiển thị lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi chuỗi hiển thị lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi displaystring chức lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với chuỗi hiển thị. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Chuỗi hiển thị đã phát hành. */
		readonly PublishedDisplayString: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo chuỗi hiển thị. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo chuỗi hiển thị. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo displaystring. */
			readonly CreatedOnBehalfBy: string;
			/** Nhận xét cho chuỗi hiển thị tùy chỉnh. */
			readonly CustomComment: string;
			/** Chuỗi hiển thị tùy chỉnh. */
			readonly CustomDisplayString: string;
			/** Mã định danh duy nhất của chuỗi hiển thị. */
			readonly DisplayStringId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly DisplayStringIdUnique: string;
			/** Chỉ sử dụng nội bộ. */
			readonly DisplayStringKey: string;
			/** Tham số được dùng để định dạng chuỗi hiển thị. */
			readonly FormatParameters: string;
			readonly IsManaged: string;
			/** Mã ngôn ngữ của chuỗi hiển thị. */
			readonly LanguageCode: string;
			/** Mã định danh duy nhất của người dùng sửa đổi chuỗi hiển thị lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi chuỗi hiển thị lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi displaystring chức lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với chuỗi hiển thị. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Chuỗi hiển thị đã phát hành. */
			readonly PublishedDisplayString: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DisplayString {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
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
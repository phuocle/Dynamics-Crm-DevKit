//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections {
		}
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F extends DevKit.Controls.ITab {
			Section: tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections;
		}
		interface Tabs {
			_C01C55A7_B832_422F_B768_4BDA9674E00F: tab__C01C55A7_B832_422F_B768_4BDA9674E00F;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn Thực thể */
			EntityPickList: DevKit.Controls.OptionSet;
			/** Chọn Trường */
			FieldPickList: DevKit.Controls.OptionSet;
			/** Chỉ rõ việc ánh xạ dùng cho khớp văn bản hay khớp chính xác */
			IsTextMatchMapping: DevKit.Controls.Boolean;
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
	class TextAnalyticsEntityMappingApi {
		/**
		* DynamicsCrm.DevKit TextAnalyticsEntityMappingApi
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
		readonly ComponentState: OptionSet.TextAnalyticsEntityMapping.ComponentState;
		/** Thực thể */
		Entity2: string;
		/** Tên Hiển thị của Thực thể */
		EntityDisplayName: string;
		/** Chọn Thực thể */
		EntityPickList: OptionSet.TextAnalyticsEntityMapping.EntityPickList;
		/** Trường */
		Field: string;
		/** Tên Hiển thị của Trường */
		FieldDisplayName: string;
		/** Chọn Trường */
		FieldPickList: OptionSet.TextAnalyticsEntityMapping.FieldPickList;
		/** Được Quản lý */
		readonly IsManaged: boolean;
		/** Chỉ rõ việc ánh xạ dùng cho khớp văn bản hay khớp chính xác */
		IsTextMatchMapping: boolean;
		/** Loại Mô hình. */
		ModelType: number;
		/** Mã định danh duy nhất của tổ chức được liên kết với Ánh xạ thực thể phân tích văn bản. */
		readonly OrganizationId: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Tên Mối quan hệ */
		RelationshipName: string;
		/** Quy tắc Tương tự được liên kết với ánh xạ thực thể. */
		SimilarityRuleId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		TextAnalyticsEntityMappingId: string;
		/** Mã định danh duy nhất của Ánh xạ Thực thể Phân tích Văn bản */
		readonly TextAnalyticsEntityMappingIdUnique: string;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Thực thể */
			readonly Entity2: string;
			/** Tên Hiển thị của Thực thể */
			readonly EntityDisplayName: string;
			/** Chọn Thực thể */
			readonly EntityPickList: string;
			/** Trường */
			readonly Field: string;
			/** Tên Hiển thị của Trường */
			readonly FieldDisplayName: string;
			/** Chọn Trường */
			readonly FieldPickList: string;
			/** Được Quản lý */
			readonly IsManaged: string;
			/** Chỉ rõ việc ánh xạ dùng cho khớp văn bản hay khớp chính xác */
			readonly IsTextMatchMapping: string;
			/** Loại Mô hình. */
			readonly ModelType: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với Ánh xạ thực thể phân tích văn bản. */
			readonly OrganizationId: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Tên Mối quan hệ */
			readonly RelationshipName: string;
			/** Quy tắc Tương tự được liên kết với ánh xạ thực thể. */
			readonly SimilarityRuleId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly TextAnalyticsEntityMappingId: string;
			/** Mã định danh duy nhất của Ánh xạ Thực thể Phân tích Văn bản */
			readonly TextAnalyticsEntityMappingIdUnique: string;
		}
	}
}
declare namespace OptionSet {
	namespace TextAnalyticsEntityMapping {
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
		enum EntityPickList {
			/** 2 */
			Co,
			/** 1 */
			Khong
		}
		enum FieldPickList {
			/** 2 */
			Co,
			/** 1 */
			Khong
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
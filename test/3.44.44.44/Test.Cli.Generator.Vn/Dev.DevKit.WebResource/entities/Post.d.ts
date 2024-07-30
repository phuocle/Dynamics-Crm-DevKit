//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			Post_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn bản ghi mẹ dành cho bài đăng để nhận dạng khách hàng, cơ hội, trường hợp hoặc bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Chọn khả năng tạo bài đăng theo cách thủ công hoặc tự động. */
			Source: DevKit.Controls.OptionSet;
			/** Hiện văn bản của bài đăng. Nếu đây là bài đăng thủ công, nó sẽ hiển thị là văn bản thuần. Nếu đây là bài đăng tự động, nó sẽ hiển thị ở dạng XML. */
			Text: DevKit.Controls.String;
		}
		interface Navigation {
			post_activity_file_attachment: DevKit.Controls.NavigationItem
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
	class PostApi {
		/**
		* DynamicsCrm.DevKit PostApi
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
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Hiển thị văn bản của bài đăng. */
		LargeText: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với giải pháp. */
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		PostId: string;
		/** Mã định danh duy nhất của bản lưu ý bài đăng mà có liên kết đến bài đăng. */
		readonly PostRegardingId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly PostToYammer: boolean;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu đối tượng liên quan. */
		readonly RegardingObjectOwningBusinessUnit: string;
		/** Chọn khả năng tạo bài đăng theo cách thủ công hoặc tự động. */
		Source: OptionSet.Post.Source;
		/** Hiện văn bản của bài đăng. Nếu đây là bài đăng thủ công, nó sẽ hiển thị là văn bản thuần. Nếu đây là bài đăng tự động, nó sẽ hiển thị ở dạng XML. */
		Text: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại bài đăng. */
		Type: OptionSet.Post.Type;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Chỉ sử dụng nội bộ. */
		readonly YammerPostState: number;
		/** Chỉ sử dụng nội bộ. */
		readonly YammerRetryCount: number;
		readonly FormattedValue: {
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Hiển thị văn bản của bài đăng. */
			readonly LargeText: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với giải pháp. */
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly PostId: string;
			/** Mã định danh duy nhất của bản lưu ý bài đăng mà có liên kết đến bài đăng. */
			readonly PostRegardingId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PostToYammer: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu đối tượng liên quan. */
			readonly RegardingObjectOwningBusinessUnit: string;
			/** Chọn khả năng tạo bài đăng theo cách thủ công hoặc tự động. */
			readonly Source: string;
			/** Hiện văn bản của bài đăng. Nếu đây là bài đăng thủ công, nó sẽ hiển thị là văn bản thuần. Nếu đây là bài đăng tự động, nó sẽ hiển thị ở dạng XML. */
			readonly Text: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại bài đăng. */
			readonly Type: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly YammerPostState: string;
			/** Chỉ sử dụng nội bộ. */
			readonly YammerRetryCount: string;
		}
	}
}
declare namespace OptionSet {
	namespace Post {
		enum RegardingObjectOwnerIdType {
		}
		enum RegardingObjectTypeCode {
		}
		enum Source {
			/** 3 */
			Bai_dang_ActionHub,
			/** 2 */
			Dang_Thu_cong,
			/** 1 */
			Dang_Tu_dong
		}
		enum Type {
			/** 5 */
			Cau_hoi,
			/** 6 */
			Dang_lai,
			/** 1 */
			Kiem_nhap,
			/** 4 */
			Thong_bao_Rieng_tu,
			/** 3 */
			Tin_tuc,
			/** 7 */
			Trang_thai,
			/** 2 */
			Y_tuong
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
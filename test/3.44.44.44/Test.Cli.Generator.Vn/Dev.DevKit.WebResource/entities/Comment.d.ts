//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CommentApi {
		/**
		* DynamicsCrm.DevKit CommentApi
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
		/** Ngữ cảnh liên kết cho bản ghi trong thành phần lạ của trình tạo */
		Anchor: string;
		/** Mã định danh duy nhất cho thành phần lạ của trình tạo */
		ArtifactId: string;
		/** Loại thành phần lạ của trình tạo */
		ArtifactType: OptionSet.Comment.ArtifactType;
		/** Nội dung phần thân cho bản ghi */
		Body: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		CommentId: string;
		/** Mã định danh duy nhất cho vùng chứa của bản ghi này */
		Container: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Kiểu bản ghi */
		Kind: OptionSet.Comment.Kind;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Trường tên bắt buộc */
		Name: string;
		/** AadId của tác giả ban đầu của nhận xét */
		OriginalAuthorAadId: string;
		/** Email của tác giả ban đầu của nhận xét */
		OriginalAuthorEmail: string;
		/** Tên đầy đủ của tác giả ban đầu của nhận xét */
		OriginalAuthorFullName: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
		AppModule: string;
		/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
		Bot: string;
		/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
		BotComponent: string;
		/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
		CanvasApp: string;
		/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
		Parent: string;
		/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
		PowerPageSite: string;
		/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
		Workflow: string;
		State: OptionSet.Comment.State;
		/** Trạng thái của Nhận xét */
		statecode: OptionSet.Comment.statecode;
		/** Lý do dẫn đến trạng thái của Nhận xét */
		statuscode: OptionSet.Comment.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Ngữ cảnh liên kết cho bản ghi trong thành phần lạ của trình tạo */
			readonly Anchor: string;
			/** Mã định danh duy nhất cho thành phần lạ của trình tạo */
			readonly ArtifactId: string;
			/** Loại thành phần lạ của trình tạo */
			readonly ArtifactType: string;
			/** Nội dung phần thân cho bản ghi */
			readonly Body: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly CommentId: string;
			/** Mã định danh duy nhất cho vùng chứa của bản ghi này */
			readonly Container: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Kiểu bản ghi */
			readonly Kind: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Trường tên bắt buộc */
			readonly Name: string;
			/** AadId của tác giả ban đầu của nhận xét */
			readonly OriginalAuthorAadId: string;
			/** Email của tác giả ban đầu của nhận xét */
			readonly OriginalAuthorEmail: string;
			/** Tên đầy đủ của tác giả ban đầu của nhận xét */
			readonly OriginalAuthorFullName: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
			readonly AppModule: string;
			/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
			readonly Bot: string;
			/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
			readonly BotComponent: string;
			/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
			readonly CanvasApp: string;
			/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
			readonly Parent: string;
			/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
			readonly PowerPageSite: string;
			/** Mã định danh duy nhất cho cấp độ mẹ của bản ghi này */
			readonly Workflow: string;
			readonly State: string;
			/** Trạng thái của Nhận xét */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Nhận xét */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Comment {
		enum ArtifactType {
			/** 4 */
			Bot,
			/** 3 */
			Mo_dun_ung_dung,
			/** 0 */
			Quy_trinh_lam_viec,
			/** 2 */
			Thanh_phan_bot,
			/** 5 */
			Trang_web_Power_Pages,
			/** 1 */
			Ung_dung_canvas
		}
		enum Kind {
			/** 0 */
			Bo_chua,
			/** 1 */
			Chuoi_chu_de,
			/** 2 */
			Tra_loi
		}
		enum ParentIdType {
		}
		enum State {
			/** 1 */
			Da_giai_quyet,
			/** 0 */
			Mo
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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
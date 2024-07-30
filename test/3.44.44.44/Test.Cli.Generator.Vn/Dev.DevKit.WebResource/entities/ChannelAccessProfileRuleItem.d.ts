//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_RuleCriteria_Sections {
			ConditionControl: DevKit.Controls.Section;
			rule_then_conditions: DevKit.Controls.Section;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_RuleCriteria extends DevKit.Controls.ITab {
			Section: tab_RuleCriteria_Sections;
		}
		interface Tabs {
			notes: tab_notes;
			RuleCriteria: tab_RuleCriteria;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn cấu hình truy cập kênh được gán mục đó. */
			AssociatedChannelAccessProfile: DevKit.Controls.Lookup;
			/** Nhập thông tin bổ sung để mô tả mục quy tắc cấu hình truy cập kênh. */
			Description: DevKit.Controls.String;
			/** Nhập tên mô tả cho mục quy tắc cấu hình truy cập kênh. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
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
	class ChannelAccessProfileRuleItemApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileRuleItemApi
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
		/** Chọn cấu hình truy cập kênh được gán mục đó. */
		AssociatedChannelAccessProfile: string;
		/** Cho biết quy tắc cấu hình truy cập kênh được liên kết với mục quy tắc cấu hình truy cập kênh này. */
		ChannelAccessProfileRuleId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		ChannelAccessProfileRuleItemId: string;
		/** Mã định danh duy nhất của mục quy tắc cấu hình truy cập kênh. */
		readonly ChannelAccessProfileRuleItemIdUnique: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ChannelAccessProfileRuleItem.ComponentState;
		/** Điều kiện cho mục quy tắc */
		ConditionXml: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung để mô tả mục quy tắc cấu hình truy cập kênh. */
		Description: string;
		/** Tỷ giá của loại tiền được liên kết với mục quy tắc cấu hình truy cập kênh theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Phiên bản trong đó mục quy tắc cấu hình truy cập kênh được giới thiệu. */
		IntroducedVersion: string;
		/** Được Quản lý */
		readonly IsManaged: boolean;
		/** Cho biết người đã cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả cho mục quy tắc cấu hình truy cập kênh. */
		Name: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Số thứ tự của mục quy tắc cấu hình truy cập Kênh */
		SequenceNumber: number;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tỷ giá của loại tiền được liên kết với mục quy tắc cấu hình truy cập kênh theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chọn cấu hình truy cập kênh được gán mục đó. */
			readonly AssociatedChannelAccessProfile: string;
			/** Cho biết quy tắc cấu hình truy cập kênh được liên kết với mục quy tắc cấu hình truy cập kênh này. */
			readonly ChannelAccessProfileRuleId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly ChannelAccessProfileRuleItemId: string;
			/** Mã định danh duy nhất của mục quy tắc cấu hình truy cập kênh. */
			readonly ChannelAccessProfileRuleItemIdUnique: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Điều kiện cho mục quy tắc */
			readonly ConditionXml: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung để mô tả mục quy tắc cấu hình truy cập kênh. */
			readonly Description: string;
			/** Tỷ giá của loại tiền được liên kết với mục quy tắc cấu hình truy cập kênh theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Phiên bản trong đó mục quy tắc cấu hình truy cập kênh được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Được Quản lý */
			readonly IsManaged: string;
			/** Cho biết người đã cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả cho mục quy tắc cấu hình truy cập kênh. */
			readonly Name: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Số thứ tự của mục quy tắc cấu hình truy cập Kênh */
			readonly SequenceNumber: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tỷ giá của loại tiền được liên kết với mục quy tắc cấu hình truy cập kênh theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfileRuleItem {
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
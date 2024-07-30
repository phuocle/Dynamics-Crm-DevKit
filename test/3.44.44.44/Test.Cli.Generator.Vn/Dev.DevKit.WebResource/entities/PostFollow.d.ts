//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			Follow_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			RegardingObjectId: DevKit.Controls.Lookup;
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
	class PostFollowApi {
		/**
		* DynamicsCrm.DevKit PostFollowApi
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
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu lượt theo dõi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Hiện ID của lượt theo dõi bài đăng. */
		PostFollowId: string;
		/** Chỉ Sử dụng Nội bộ */
		readonly PostToYammer: boolean;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_account: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_appointment: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_contact: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_knowledgearticle: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_phonecall: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_processsession: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_queue: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_systemuser: string;
		/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
		regardingobjectid_task: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của lượt theo dõi bài đăng. */
		readonly VersionNumber: number;
		/** Chỉ Sử dụng Nội bộ */
		readonly YammerPostState: number;
		/** Chỉ Sử dụng Nội bộ */
		readonly YammerRetryCount: number;
		readonly FormattedValue: {
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu lượt theo dõi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Hiện ID của lượt theo dõi bài đăng. */
			readonly PostFollowId: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly PostToYammer: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_account: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_appointment: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_contact: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_phonecall: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_processsession: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_queue: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_systemuser: string;
			/** Chọn bản ghi mẹ dành cho bài đăng đã theo dõi để nhận dạng khách hàng, cơ hội, trường hợp hoặc loại bản ghi khác có liên quan mật thiết nhất đến bài đăng. */
			readonly regardingobjectid_task: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của lượt theo dõi bài đăng. */
			readonly VersionNumber: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly YammerPostState: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly YammerRetryCount: string;
		}
	}
}
declare namespace OptionSet {
	namespace PostFollow {
		enum RegardingObjectTypeCode {
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
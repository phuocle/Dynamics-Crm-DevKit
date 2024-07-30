//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CallbackRegistrationApi {
		/**
		* DynamicsCrm.DevKit CallbackRegistrationApi
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
		/** Mã định danh duy nhất của đăng ký cuộc gọi lại. */
		CallbackRegistrationId: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo đăng ký cuộc gọi lại. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Tên Thực thể. */
		EntityName1: string;
		/** điều kiện được biểu thị bằng cú pháp OData $filter */
		FilterExpression: string;
		/** Danh sách thuộc tính, phân tách bằng dấu phẩy. Nếu sửa ít nhất một thuộc tính thì URL cuộc gọi lại phải được gọi. */
		FilteringAttributes: string;
		/** For internal use only. Holds hard delete information. */
		HardDelete: boolean;
		/** For internal use only. Holds version of logic apps trigger. */
		LogicAppsVersion: string;
		/** Nêu rõ loại thông báo */
		Message: OptionSet.CallbackRegistration.Message;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi đăng ký cuộc gọi lại lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên đăng ký cuộc gọi lại. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu đăng ký cuộc gọi lại. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu đăng ký cuộc gọi lại. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu đăng ký cuộc gọi lại. */
		readonly OwningUser: string;
		/** độ trễ biểu thị bằng biểu thức OData */
		PostponeUntil: string;
		/** Chỉ định bối cảnh người dùng mà cuộc gọi lại này sẽ thực hiện */
		RunAs: OptionSet.CallbackRegistration.RunAs;
		/** Chỉ sử dụng nội bộ. Giữ các thuộc tính chung liên quan đến tích hợp thời gian chạy. */
		RuntimeIntegrationProperties: string;
		/** Chỉ định Phạm vi */
		Scope: OptionSet.CallbackRegistration.Scope;
		/** Name of the SDK message the subscriber is interested in */
		SdkMessageName: string;
		/** For internal use only. Holds soft delete information. */
		SoftDeleteStatus: number;
		/** URL đăng ký cuộc gọi lại đầy đủ. */
		Url: string;
		/** Chỉ định loại phiên bản đăng ký Cuộc gọi lại */
		Version: OptionSet.CallbackRegistration.Version;
		/** Version number of the callbackregistration. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của đăng ký cuộc gọi lại. */
			readonly CallbackRegistrationId: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo đăng ký cuộc gọi lại. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Tên Thực thể. */
			readonly EntityName1: string;
			/** điều kiện được biểu thị bằng cú pháp OData $filter */
			readonly FilterExpression: string;
			/** Danh sách thuộc tính, phân tách bằng dấu phẩy. Nếu sửa ít nhất một thuộc tính thì URL cuộc gọi lại phải được gọi. */
			readonly FilteringAttributes: string;
			/** For internal use only. Holds hard delete information. */
			readonly HardDelete: string;
			/** For internal use only. Holds version of logic apps trigger. */
			readonly LogicAppsVersion: string;
			/** Nêu rõ loại thông báo */
			readonly Message: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi đăng ký cuộc gọi lại lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên đăng ký cuộc gọi lại. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu đăng ký cuộc gọi lại. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu đăng ký cuộc gọi lại. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu đăng ký cuộc gọi lại. */
			readonly OwningUser: string;
			/** độ trễ biểu thị bằng biểu thức OData */
			readonly PostponeUntil: string;
			/** Chỉ định bối cảnh người dùng mà cuộc gọi lại này sẽ thực hiện */
			readonly RunAs: string;
			/** Chỉ sử dụng nội bộ. Giữ các thuộc tính chung liên quan đến tích hợp thời gian chạy. */
			readonly RuntimeIntegrationProperties: string;
			/** Chỉ định Phạm vi */
			readonly Scope: string;
			/** Name of the SDK message the subscriber is interested in */
			readonly SdkMessageName: string;
			/** For internal use only. Holds soft delete information. */
			readonly SoftDeleteStatus: string;
			/** URL đăng ký cuộc gọi lại đầy đủ. */
			readonly Url: string;
			/** Chỉ định loại phiên bản đăng ký Cuộc gọi lại */
			readonly Version: string;
			/** Version number of the callbackregistration. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CallbackRegistration {
		enum Message {
			/** 3 */
			Cap_nhat,
			/** 6 */
			Cap_nhat_hoac_Xoa,
			/** 1 */
			Tao,
			/** 4 */
			Tao_hoac_Cap_nhat,
			/** 7 */
			Tao_hoac_Cap_nhat_hoac_Xoa,
			/** 5 */
			Tao_hoac_Xoa,
			/** 2 */
			Xoa
		}
		enum RunAs {
			/** 2 */
			Chu_so_huu_Ban_ghi,
			/** 3 */
			Chu_so_huu_Quy_trinh,
			/** 1 */
			Dang_kich_hoat_Nguoi_dung
		}
		enum Scope {
			/** 2 */
			Don_vi_Kinh_doanh,
			/** 1 */
			Nguoi_dung,
			/** 3 */
			ParentChildBusinessUnit,
			/** 4 */
			To_chuc
		}
		enum Version {
			/** 1 */
			V1,
			/** 2 */
			V2,
			/** 3 */
			V3
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
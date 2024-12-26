//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ServiceEndpointApi {
		/**
		* DynamicsCrm.DevKit ServiceEndpointApi
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
		/** Chỉ định chế độ xác thực với SB */
		AuthType: OptionSet.ServiceEndpoint.AuthType;
		/** Giá trị Xác thực */
		AuthValue: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ServiceEndpoint.ComponentState;
		/** Chế độ kết nối để liên lạc với điểm cuối dịch vụ. */
		ConnectionMode: OptionSet.ServiceEndpoint.ConnectionMode;
		/** Loại hợp đồng điểm cuối. */
		Contract: OptionSet.ServiceEndpoint.Contract;
		/** Mã định danh duy nhất của người dùng đã tạo điểm cuối dịch vụ. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo điểm cuối dịch vụ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo điểm cuối dịch vụ. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả của điểm cuối dịch vụ. */
		Description: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		readonly IsAuthValueSet: boolean;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		readonly IsSASKeySet: boolean;
		readonly IsSASTokenSet: boolean;
		/** Unique identifier for keyvaultreference associated with serviceendpoint. */
		KeyVaultReferenceId: string;
		/** Chỉ định phương thức mã hóa ký tự cho nội dung tin nhắn */
		MessageCharset: OptionSet.ServiceEndpoint.MessageCharset;
		/** Loại nội dung thông báo */
		MessageFormat: OptionSet.ServiceEndpoint.MessageFormat;
		/** Mã định danh duy nhất của người dùng sửa đổi điểm cuối dịch vụ lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi điểm cuối dịch vụ lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa điểm cuối dịch vụ. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của điểm cuối dịch vụ. */
		Name: string;
		/** Địa chỉ điểm cuối dịch vụ đầy đủ. */
		NamespaceAddress: string;
		/** Định dạng của Vùng tên Service Bus */
		NamespaceFormat: OptionSet.ServiceEndpoint.NamespaceFormat;
		/** Mã định danh duy nhất của tổ chức có liên kết với điểm cuối dịch vụ. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Đường dẫn đến điểm cuối dịch vụ. */
		Path: string;
		/** Chỉ sử dụng nội bộ. Giữ các thuộc tính chung liên quan đến tích hợp thời gian chạy. */
		RuntimeIntegrationProperties: string;
		/** Khóa Truy cập được Chia sẻ */
		SASKey: string;
		/** Tên Khóa Truy cập được Chia sẻ */
		SASKeyName: string;
		/** Mã thông báo Truy cập được Chia sẻ */
		SASToken: string;
		/** Chỉ định loại sơ đồ cho các sự kiện trong lưới sự kiện */
		SchemaType: OptionSet.ServiceEndpoint.SchemaType;
		/** Mã định danh duy nhất của điểm cuối dịch vụ. */
		ServiceEndpointId: string;
		/** Mã định danh duy nhất của điểm cuối dịch vụ. */
		readonly ServiceEndpointIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Vùng tên của giải pháp App Fabric. */
		SolutionNamespace: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Url điểm cuối dịch vụ đầy đủ. */
		Url: string;
		/** Use Auth Information in KeyVault */
		UseKeyVaultConfiguration: boolean;
		/** Loại giá trị của yêu cầu người dùng bổ sung. */
		UserClaim: OptionSet.ServiceEndpoint.UserClaim;
		readonly FormattedValue: {
			/** Chỉ định chế độ xác thực với SB */
			readonly AuthType: string;
			/** Giá trị Xác thực */
			readonly AuthValue: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Chế độ kết nối để liên lạc với điểm cuối dịch vụ. */
			readonly ConnectionMode: string;
			/** Loại hợp đồng điểm cuối. */
			readonly Contract: string;
			/** Mã định danh duy nhất của người dùng đã tạo điểm cuối dịch vụ. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo điểm cuối dịch vụ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo điểm cuối dịch vụ. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả của điểm cuối dịch vụ. */
			readonly Description: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			readonly IsAuthValueSet: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			readonly IsSASKeySet: string;
			readonly IsSASTokenSet: string;
			/** Unique identifier for keyvaultreference associated with serviceendpoint. */
			readonly KeyVaultReferenceId: string;
			/** Chỉ định phương thức mã hóa ký tự cho nội dung tin nhắn */
			readonly MessageCharset: string;
			/** Loại nội dung thông báo */
			readonly MessageFormat: string;
			/** Mã định danh duy nhất của người dùng sửa đổi điểm cuối dịch vụ lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi điểm cuối dịch vụ lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa điểm cuối dịch vụ. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của điểm cuối dịch vụ. */
			readonly Name: string;
			/** Địa chỉ điểm cuối dịch vụ đầy đủ. */
			readonly NamespaceAddress: string;
			/** Định dạng của Vùng tên Service Bus */
			readonly NamespaceFormat: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với điểm cuối dịch vụ. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Đường dẫn đến điểm cuối dịch vụ. */
			readonly Path: string;
			/** Chỉ sử dụng nội bộ. Giữ các thuộc tính chung liên quan đến tích hợp thời gian chạy. */
			readonly RuntimeIntegrationProperties: string;
			/** Khóa Truy cập được Chia sẻ */
			readonly SASKey: string;
			/** Tên Khóa Truy cập được Chia sẻ */
			readonly SASKeyName: string;
			/** Mã thông báo Truy cập được Chia sẻ */
			readonly SASToken: string;
			/** Chỉ định loại sơ đồ cho các sự kiện trong lưới sự kiện */
			readonly SchemaType: string;
			/** Mã định danh duy nhất của điểm cuối dịch vụ. */
			readonly ServiceEndpointId: string;
			/** Mã định danh duy nhất của điểm cuối dịch vụ. */
			readonly ServiceEndpointIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Vùng tên của giải pháp App Fabric. */
			readonly SolutionNamespace: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Url điểm cuối dịch vụ đầy đủ. */
			readonly Url: string;
			/** Use Auth Information in KeyVault */
			readonly UseKeyVaultConfiguration: string;
			/** Loại giá trị của yêu cầu người dùng bổ sung. */
			readonly UserClaim: string;
		}
	}
}
declare namespace OptionSet {
	namespace ServiceEndpoint {
		enum AuthType {
			/** 1 */
			ACS,
			/** 6 */
			Chuoi_Truy_van_Http,
			/** 7 */
			Connection_String,
			/** 2 */
			Khoa_SAS,
			/** 4 */
			Khoa_Webhook,
			/** 3 */
			Ma_thong_bao_SAS,
			/** 8 */
			Phim_truy_nhap,
			/** 5 */
			Tieu_de_Http
		}
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
		enum ConnectionMode {
			/** 1 */
			Binh_thuong,
			/** 2 */
			Da_hop_nhat
		}
		enum Contract {
			/** 5 */
			Chu_de,
			/** 10 */
			Data_Lake_duoc_quan_ly,
			/** 2 */
			Hang_doi,
			/** 6 */
			Hang_doi_On_dinh,
			/** 9 */
			Luoi_su_kien,
			/** 1 */
			OneWay,
			/** 3 */
			Phan_con_lai,
			/** 7 */
			Trung_tam_Su_kien,
			/** 4 */
			TwoWay,
			/** 8 */
			Webhook
		}
		enum MessageCharset {
			/** 0 */
			Mac_dinh,
			/** 1 */
			UTF8
		}
		enum MessageFormat {
			/** 2 */
			Json,
			/** 3 */
			Van_ban_XML,
			/** 1 */
			XML_nhi_phan
		}
		enum NamespaceFormat {
			/** 2 */
			Dia_chi_Vung_ten,
			/** 1 */
			Ten_cua_Vung_ten
		}
		enum SchemaType {
			/** 1 */
			Luoi_su_kien,
			/** 2 */
			Su_kien_dam_may
		}
		enum UserClaim {
			/** 1 */
			Khong,
			/** 2 */
			UserId,
			/** 3 */
			UserInfo
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
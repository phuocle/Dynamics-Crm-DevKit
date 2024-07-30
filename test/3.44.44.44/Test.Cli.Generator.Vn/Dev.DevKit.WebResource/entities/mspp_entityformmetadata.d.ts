//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entityformmetadata_Information {
		interface Tabs {
		}
		interface Body {
			mspp_adddescription: DevKit.Controls.Boolean;
			mspp_attributelogicalname: DevKit.Controls.String;
			mspp_constantsummaximumtotal: DevKit.Controls.Integer;
			mspp_constantsumminimumtotal: DevKit.Controls.Integer;
			mspp_constantsumvalidationerrormessage: DevKit.Controls.String;
			/** Chỉ định cách sửa đổi hoặc nâng cao kiểm soát. */
			mspp_controlstyle: DevKit.Controls.OptionSet;
			mspp_cssclass: DevKit.Controls.String;
			mspp_description: DevKit.Controls.String;
			mspp_descriptionposition: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất cho biểu mẫu thực thể liên kết với siêu dữ liệu biểu mẫu thực thể. */
			mspp_entityform: DevKit.Controls.Lookup;
			mspp_entityformforcreate: DevKit.Controls.Lookup;
			mspp_fieldisrequired: DevKit.Controls.Boolean;
			/** Thông báo lỗi hiển thị khi không thể xác thực trình xác thực vị trí địa lý. */
			mspp_geolocationvalidatorerrormessage: DevKit.Controls.String;
			/** Cho biết những thuộc tính được nhóm và kết xuất dưới dạng một kiểm soát phức hợp nếu kiểu kiểm soát là loại phân nhóm, chẳng hạn như "Nhóm số nguyên dưới dạng tổng hằng số". */
			mspp_groupname: DevKit.Controls.String;
			mspp_ignoredefaultvalue: DevKit.Controls.Boolean;
			mspp_label: DevKit.Controls.String;
			mspp_maxmultiplechoiceselectedcount: DevKit.Controls.Integer;
			mspp_minmultiplechoiceselectedcount: DevKit.Controls.Integer;
			mspp_multiplechoicevalidationerrormessage: DevKit.Controls.String;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_notes_settings: DevKit.Controls.String;
			/** Dùng trường này cùng với Loại khi lưu = Người liên hệ của người dùng hiện tại để ánh xạ mọi thuộc tính từ bản ghi người liên hệ của người dùng hiện tại với tên lô-gic cho thuộc tính của bản ghi này. */
			mspp_onsavefromattribute: DevKit.Controls.String;
			/** Hiển thị cơ chế để điền giá trị vào một trường. */
			mspp_onsavetype: DevKit.Controls.OptionSet;
			mspp_onsavevalue: DevKit.Controls.String;
			/** Dùng trường này cùng với Loại điền sẵn = Người liên hệ của người dùng hiện tại để ánh xạ mọi thuộc tính từ bản ghi người liên hệ của người dùng hiện tại với tên lô-gic cho thuộc tính của bản ghi này. */
			mspp_prepopulatefromattribute: DevKit.Controls.String;
			/** Hiển thị cơ chế để điền giá trị vào một trường. */
			mspp_prepopulatetype: DevKit.Controls.OptionSet;
			/** Giá trị để điền sẵn vào trường. */
			mspp_prepopulatevalue: DevKit.Controls.String;
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			mspp_randomizeoptionsetvalues: DevKit.Controls.Boolean;
			mspp_rangevalidationerrormessage: DevKit.Controls.String;
			mspp_rankordernotiesvalidationerrormessage: DevKit.Controls.String;
			/** Thông báo lỗi hiển thị khi không có giá trị trong một trường bắt buộc. */
			mspp_requiredfieldvalidationerrormessage: DevKit.Controls.String;
			mspp_sectionname: DevKit.Controls.String;
			mspp_setvalueonsave: DevKit.Controls.Boolean;
			mspp_subgrid_name: DevKit.Controls.String;
			mspp_subgrid_settings: DevKit.Controls.String;
			mspp_tabname: DevKit.Controls.String;
			mspp_timeline_settings: DevKit.Controls.String;
			mspp_type: DevKit.Controls.OptionSet;
			mspp_useattributedescriptionproperty: DevKit.Controls.Boolean;
			/** Thông báo lỗi được xác định cho việc xác thực. */
			mspp_validationerrormessage: DevKit.Controls.String;
			/** Thêm một trình xác thực biểu thức chính quy với biểu thức chính quy đã chỉ định. */
			mspp_validationregularexpression: DevKit.Controls.String;
			mspp_validationregularexpressionerrormessage: DevKit.Controls.String;
			WebResource_attributelogicalname: DevKit.Controls.WebResource;
			WebResource_localizeconstantsumerrormessage: DevKit.Controls.WebResource;
			WebResource_localizedescription: DevKit.Controls.WebResource;
			WebResource_localizegeolocationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizelabel: DevKit.Controls.WebResource;
			WebResource_localizemultiplechoiceerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerangevalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerankordernotieserrormessage: DevKit.Controls.WebResource;
			WebResource_localizeregularexpressionerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerequiredfieldvalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizevalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_mspp_onsavefromattribute: DevKit.Controls.WebResource;
			WebResource_mspp_prepopulatefromattribute: DevKit.Controls.WebResource;
			WebResource_notes_settings: DevKit.Controls.WebResource;
			WebResource_sectionname: DevKit.Controls.WebResource;
			WebResource_subgrid_name: DevKit.Controls.WebResource;
			WebResource_subgrid_settings: DevKit.Controls.WebResource;
			WebResource_tabname: DevKit.Controls.WebResource;
			WebResource_timeline_settings: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class Formmspp_entityformmetadata_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_entityformmetadata_Information */
		Body: DevKit.Formmspp_entityformmetadata_Information.Body;
		/** The Navigation of form mspp_entityformmetadata_Information */
		Navigation: DevKit.Formmspp_entityformmetadata_Information.Navigation;
		/** The SidePanes of form mspp_entityformmetadata_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_entityformmetadataApi {
		/**
		* DynamicsCrm.DevKit mspp_entityformmetadataApi
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
		mspp_adddescription: boolean;
		mspp_attributelogicalname: string;
		mspp_constantsummaximumtotal: number;
		mspp_constantsumminimumtotal: number;
		mspp_constantsumvalidationerrormessage: string;
		/** Chỉ định cách sửa đổi hoặc nâng cao kiểm soát. */
		mspp_controlstyle: OptionSet.mspp_entityformmetadata.mspp_controlstyle;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_cssclass: string;
		mspp_description: string;
		mspp_descriptionposition: OptionSet.mspp_entityformmetadata.mspp_descriptionposition;
		/** Mã định danh duy nhất cho biểu mẫu thực thể liên kết với siêu dữ liệu biểu mẫu thực thể. */
		mspp_entityform: string;
		mspp_entityformforcreate: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_entityformmetadataId: string;
		mspp_fieldisrequired: boolean;
		/** Thông báo lỗi hiển thị khi không thể xác thực trình xác thực vị trí địa lý. */
		mspp_geolocationvalidatorerrormessage: string;
		/** Cho biết những thuộc tính được nhóm và kết xuất dưới dạng một kiểm soát phức hợp nếu kiểu kiểm soát là loại phân nhóm, chẳng hạn như "Nhóm số nguyên dưới dạng tổng hằng số". */
		mspp_groupname: string;
		mspp_ignoredefaultvalue: boolean;
		mspp_label: string;
		mspp_maxmultiplechoiceselectedcount: number;
		mspp_minmultiplechoiceselectedcount: number;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_multiplechoicevalidationerrormessage: string;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		mspp_notes_settings: string;
		/** Dùng trường này cùng với Loại khi lưu = Người liên hệ của người dùng hiện tại để ánh xạ mọi thuộc tính từ bản ghi người liên hệ của người dùng hiện tại với tên lô-gic cho thuộc tính của bản ghi này. */
		mspp_onsavefromattribute: string;
		/** Hiển thị cơ chế để điền giá trị vào một trường. */
		mspp_onsavetype: OptionSet.mspp_entityformmetadata.mspp_onsavetype;
		mspp_onsavevalue: string;
		/** Dùng trường này cùng với Loại điền sẵn = Người liên hệ của người dùng hiện tại để ánh xạ mọi thuộc tính từ bản ghi người liên hệ của người dùng hiện tại với tên lô-gic cho thuộc tính của bản ghi này. */
		mspp_prepopulatefromattribute: string;
		/** Hiển thị cơ chế để điền giá trị vào một trường. */
		mspp_prepopulatetype: OptionSet.mspp_entityformmetadata.mspp_prepopulatetype;
		/** Giá trị để điền sẵn vào trường. */
		mspp_prepopulatevalue: string;
		mspp_provisionedlanguages: number;
		mspp_randomizeoptionsetvalues: boolean;
		mspp_rangevalidationerrormessage: string;
		mspp_rankordernotiesvalidationerrormessage: string;
		/** Thông báo lỗi hiển thị khi không có giá trị trong một trường bắt buộc. */
		mspp_requiredfieldvalidationerrormessage: string;
		mspp_sectionname: string;
		mspp_setvalueonsave: boolean;
		mspp_subgrid_name: string;
		mspp_subgrid_settings: string;
		mspp_tabname: string;
		mspp_timeline_settings: string;
		mspp_type: OptionSet.mspp_entityformmetadata.mspp_type;
		mspp_useattributedescriptionproperty: boolean;
		/** Thông báo lỗi được xác định cho việc xác thực. */
		mspp_validationerrormessage: string;
		/** Thêm một trình xác thực biểu thức chính quy với biểu thức chính quy đã chỉ định. */
		mspp_validationregularexpression: string;
		mspp_validationregularexpressionerrormessage: string;
		/** Trạng thái của siêu dữ liệu biểu mẫu cơ bản */
		statecode: OptionSet.mspp_entityformmetadata.statecode;
		/** Lý do dẫn đến trạng thái của siêu dữ liệu biểu mẫu cơ bản */
		statuscode: OptionSet.mspp_entityformmetadata.statuscode;
		readonly FormattedValue: {
			readonly mspp_adddescription: string;
			readonly mspp_attributelogicalname: string;
			readonly mspp_constantsummaximumtotal: string;
			readonly mspp_constantsumminimumtotal: string;
			readonly mspp_constantsumvalidationerrormessage: string;
			/** Chỉ định cách sửa đổi hoặc nâng cao kiểm soát. */
			readonly mspp_controlstyle: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_cssclass: string;
			readonly mspp_description: string;
			readonly mspp_descriptionposition: string;
			/** Mã định danh duy nhất cho biểu mẫu thực thể liên kết với siêu dữ liệu biểu mẫu thực thể. */
			readonly mspp_entityform: string;
			readonly mspp_entityformforcreate: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_entityformmetadataId: string;
			readonly mspp_fieldisrequired: string;
			/** Thông báo lỗi hiển thị khi không thể xác thực trình xác thực vị trí địa lý. */
			readonly mspp_geolocationvalidatorerrormessage: string;
			/** Cho biết những thuộc tính được nhóm và kết xuất dưới dạng một kiểm soát phức hợp nếu kiểu kiểm soát là loại phân nhóm, chẳng hạn như "Nhóm số nguyên dưới dạng tổng hằng số". */
			readonly mspp_groupname: string;
			readonly mspp_ignoredefaultvalue: string;
			readonly mspp_label: string;
			readonly mspp_maxmultiplechoiceselectedcount: string;
			readonly mspp_minmultiplechoiceselectedcount: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_multiplechoicevalidationerrormessage: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			readonly mspp_notes_settings: string;
			/** Dùng trường này cùng với Loại khi lưu = Người liên hệ của người dùng hiện tại để ánh xạ mọi thuộc tính từ bản ghi người liên hệ của người dùng hiện tại với tên lô-gic cho thuộc tính của bản ghi này. */
			readonly mspp_onsavefromattribute: string;
			/** Hiển thị cơ chế để điền giá trị vào một trường. */
			readonly mspp_onsavetype: string;
			readonly mspp_onsavevalue: string;
			/** Dùng trường này cùng với Loại điền sẵn = Người liên hệ của người dùng hiện tại để ánh xạ mọi thuộc tính từ bản ghi người liên hệ của người dùng hiện tại với tên lô-gic cho thuộc tính của bản ghi này. */
			readonly mspp_prepopulatefromattribute: string;
			/** Hiển thị cơ chế để điền giá trị vào một trường. */
			readonly mspp_prepopulatetype: string;
			/** Giá trị để điền sẵn vào trường. */
			readonly mspp_prepopulatevalue: string;
			readonly mspp_provisionedlanguages: string;
			readonly mspp_randomizeoptionsetvalues: string;
			readonly mspp_rangevalidationerrormessage: string;
			readonly mspp_rankordernotiesvalidationerrormessage: string;
			/** Thông báo lỗi hiển thị khi không có giá trị trong một trường bắt buộc. */
			readonly mspp_requiredfieldvalidationerrormessage: string;
			readonly mspp_sectionname: string;
			readonly mspp_setvalueonsave: string;
			readonly mspp_subgrid_name: string;
			readonly mspp_subgrid_settings: string;
			readonly mspp_tabname: string;
			readonly mspp_timeline_settings: string;
			readonly mspp_type: string;
			readonly mspp_useattributedescriptionproperty: string;
			/** Thông báo lỗi được xác định cho việc xác thực. */
			readonly mspp_validationerrormessage: string;
			/** Thêm một trình xác thực biểu thức chính quy với biểu thức chính quy đã chỉ định. */
			readonly mspp_validationregularexpression: string;
			readonly mspp_validationregularexpressionerrormessage: string;
			/** Trạng thái của siêu dữ liệu biểu mẫu cơ bản */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của siêu dữ liệu biểu mẫu cơ bản */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_entityformmetadata {
		enum mspp_controlstyle {
			/** 100000000 */
			Bo_tuy_chon_duoi_dang_danh_sach_nut_radio_doc,
			/** 100000001 */
			Bo_tuy_chon_duoi_dang_danh_sach_nut_radio_ngang,
			/** 756150000 */
			Ket_xuat_tra_cuu_duoi_dang_tha_xuong,
			/** 100000006 */
			Ma_tran_nhieu_lua_chon,
			/** 100000002 */
			Mot_dong_van_ban_duoi_dang_trinh_xac_thuc_tra_cuu_vi_tri_dia_ly,
			/** 100000007 */
			Nhieu_lua_chon,
			/** 100000005 */
			Nhom_so_nguyen_duoi_dang_pham_vi_thu_tu_xep_hang_cho_phep_quan_he_rang_buoc,
			/** 100000004 */
			Nhom_so_nguyen_duoi_dang_pham_vi_thu_tu_xep_hang_khong_co_quan_he_rang_buoc,
			/** 100000003 */
			Nhom_so_nguyen_duoi_dang_tong_hang_so,
			/** 100000008 */
			Nhom_so_nguyen_duoi_dang_xep_hang_ngan_xep,
			/** 756150001 */
			Thanh_phan_ma
		}
		enum mspp_descriptionposition {
			/** 100000001 */
			Ben_duoi_truong,
			/** 100000002 */
			Ben_tren_nhan,
			/** 100000000 */
			Ben_tren_truong
		}
		enum mspp_onsavetype {
			/** 100000000 */
			Gia_tri,
			/** 100000001 */
			Ngay_thang_cua_ngay_hom_nay,
			/** 100000002 */
			Nguoi_dung_hien_tai_cua_cong_thong_tin
		}
		enum mspp_prepopulatetype {
			/** 100000000 */
			Gia_tri,
			/** 100000001 */
			Ngay_thang_cua_ngay_hom_nay,
			/** 100000002 */
			Nguoi_dung_hien_tai_cua_cong_thong_tin
		}
		enum mspp_type {
			/** 756150000 */
			Dong_thoi_gian,
			/** 100000005 */
			Ghi_chu,
			/** 100000003 */
			Luoi_con,
			/** 100000001 */
			Phan,
			/** 100000002 */
			Tab,
			/** 100000000 */
			Thuoc_tinh
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
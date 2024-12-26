'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_webformmetadata_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			mspp_adddescription: {},
			mspp_attributelogicalname: {},
			mspp_constantsummaximumtotal: {},
			mspp_constantsumminimumtotal: {},
			mspp_constantsumvalidationerrormessage: {},
			mspp_controlstyle: {},
			mspp_cssclass: {},
			mspp_description: {},
			mspp_descriptionposition: {},
			mspp_entityformforcreateinwebformmetadata: {},
			mspp_fieldisrequired: {},
			mspp_geolocationvalidatorerrormessage: {},
			mspp_groupname: {},
			mspp_ignoredefaultvalue: {},
			mspp_label: {},
			mspp_maxmultiplechoiceselectedcount: {},
			mspp_minmultiplechoiceselectedcount: {},
			mspp_multiplechoicevalidationerrormessage: {},
			mspp_notes_settings: {},
			mspp_onsavefromattribute: {},
			mspp_onsavetype: {},
			mspp_onsavevalue: {},
			mspp_prepopulatefromattribute: {},
			mspp_prepopulatetype: {},
			mspp_prepopulatevalue: {},
			mspp_provisionedlanguages: {},
			mspp_purchasecreateinvoiceonpayment: {},
			mspp_purchasefulfillorderonpayment: {},
			mspp_purchaselineitemdescriptionattribute: {},
			mspp_purchaselineiteminstructionsattribute: {},
			mspp_purchaselineitemorderattribute: {},
			mspp_purchaselineitemproductattribute: {},
			mspp_purchaselineitemquantityattribute: {},
			mspp_purchaselineitemrelationship: {},
			mspp_purchaselineitemrequiredattribute: {},
			mspp_purchaselineitemuomattribute: {},
			mspp_purchaseoptionalproductsrelationship: {},
			mspp_purchasequotename: {},
			mspp_purchaserequiredproductsrelationship: {},
			mspp_purchaserequiresshipping: {},
			mspp_purchasetargetentityinvoicerelationship: {},
			mspp_purchasetargetentityorderrelationship: {},
			mspp_purchasetargetentityrelationship: {},
			mspp_randomizeoptionsetvalues: {},
			mspp_rangevalidationerrormessage: {},
			mspp_rankordernotiesvalidationerrormessage: {},
			mspp_requiredfieldvalidationerrormessage: {},
			mspp_sectionname: {},
			mspp_setvalueonsave: {},
			mspp_subgrid_name: {},
			mspp_subgrid_settings: {},
			mspp_tabname: {},
			mspp_timeline_settings: {},
			mspp_type: {},
			mspp_useattributedescriptionproperty: {},
			mspp_validationerrormessage: {},
			mspp_validationregularexpression: {},
			mspp_validationregularexpressionerrormessage: {},
			mspp_webformstep: {},
			WebResource_attributelogicalname: {},
			WebResource_localize_constantsumvalidationerrormessage: {},
			WebResource_localize_description: {},
			WebResource_localize_geolocationvalidatorerrormessage: {},
			WebResource_localize_label: {},
			WebResource_localize_multiplechoicevalidationerrormessage: {},
			WebResource_localize_rangevalidationerrormessage: {},
			WebResource_localize_rankordernotiesvalidationerrormessage: {},
			WebResource_localize_requiredfieldvalidationerrormessage: {},
			WebResource_localize_validationerrormessage: {},
			WebResource_localize_validationregularexpressionerrormessage: {},
			WebResource_mspp_onsavefromattribute: {},
			WebResource_mspp_prepopulatefromattribute: {},
			WebResource_notes_settings: {},
			WebResource_sectionname: {},
			WebResource_subgrid_name: {},
			WebResource_subgrid_settings: {},
			WebResource_tabname: {},
			WebResource_timeline_settings: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webformmetadata = {
		mspp_controlstyle : {
			Bo_tuy_chon_duoi_dang_danh_sach_nut_radio_doc: 100000000,
			Bo_tuy_chon_duoi_dang_danh_sach_nut_radio_ngang: 100000001,
			Ket_xuat_tra_cuu_duoi_dang_tha_xuong: 756150000,
			Ma_tran_nhieu_lua_chon: 100000006,
			Mot_dong_van_ban_duoi_dang_trinh_xac_thuc_tra_cuu_vi_tri_dia_ly: 100000002,
			Nhieu_lua_chon: 100000007,
			Nhom_so_nguyen_duoi_dang_pham_vi_thu_tu_xep_hang_cho_phep_quan_he_rang_buoc: 100000005,
			Nhom_so_nguyen_duoi_dang_pham_vi_thu_tu_xep_hang_khong_co_quan_he_rang_buoc: 100000004,
			Nhom_so_nguyen_duoi_dang_tong_hang_so: 100000003,
			Nhom_so_nguyen_duoi_dang_xep_hang_ngan_xep: 100000008,
			Thanh_phan_ma: 756150001
		},
		mspp_descriptionposition : {
			Ben_duoi_truong: 100000001,
			Ben_tren_nhan: 100000002,
			Ben_tren_truong: 100000000
		},
		mspp_onsavetype : {
			Gia_tri: 100000000,
			Ngay_thang_cua_ngay_hom_nay: 100000001,
			Nguoi_dung_hien_tai_cua_cong_thong_tin: 100000002
		},
		mspp_prepopulatetype : {
			Gia_tri: 100000000,
			Ngay_thang_cua_ngay_hom_nay: 100000001,
			Nguoi_dung_hien_tai_cua_cong_thong_tin: 100000002
		},
		mspp_type : {
			Dong_thoi_gian: 756150000,
			Ghi_chu: 100000005,
			Luoi_con: 100000004,
			Mua: 100000003,
			Phan: 100000001,
			Tab: 100000002,
			Thuoc_tinh: 100000000
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));
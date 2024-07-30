'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.DependencyApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _dependency = {
			DependencyId: { a: 'dependencyid', r: true },
			DependencyType: { a: 'dependencytype', r: true },
			DependentComponentBaseSolutionId: { a: 'dependentcomponentbasesolutionid', r: true },
			DependentComponentNodeId: { b: 'dependentcomponentnodeid', a: '_dependentcomponentnodeid_value', c: 'dependencynodes', d: 'dependencynode', r: true },
			DependentComponentObjectId: { a: 'dependentcomponentobjectid', r: true },
			DependentComponentParentId: { a: 'dependentcomponentparentid', r: true },
			DependentComponentType: { a: 'dependentcomponenttype', r: true },
			RequiredComponentBaseSolutionId: { a: 'requiredcomponentbasesolutionid', r: true },
			RequiredComponentIntroducedVersion: { a: 'requiredcomponentintroducedversion', r: true },
			RequiredComponentNodeId: { b: 'requiredcomponentnodeid', a: '_requiredcomponentnodeid_value', c: 'dependencynodes', d: 'dependencynode', r: true },
			RequiredComponentObjectId: { a: 'requiredcomponentobjectid', r: true },
			RequiredComponentParentId: { a: 'requiredcomponentparentid', r: true },
			RequiredComponentType: { a: 'requiredcomponenttype', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var dependency = {};
		dependency.ODataEntity = e;
		dependency.FormattedValue = {};
		for (var field in _dependency) {
			var a = _dependency[field].a;
			var b = _dependency[field].b;
			var c = _dependency[field].c;
			var d = _dependency[field].d;
			var g = _dependency[field].g;
			var r = _dependency[field].r;
			webApiField(dependency, field, e, a, b, c, d, r, u, g);
		}
		dependency.Entity = u;
		dependency.EntityName = 'dependency';
		dependency.EntityCollectionName = 'dependencies';
		dependency['@odata.etag'] = e['@odata.etag'];
		dependency.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		dependency.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return dependency;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Dependency = {
		DependencyType : {
			Da_phat_hanh: 2,
			Giai_phap_Noi_bo: 1,
			Huy_phat_hanh: 4,
			Khong: 0
		},
		DependentComponentType : {
			Anh_xa_Nguon_Du_lieu: 166,
			Ban_do_Chuoi_Hien_thi: 23,
			Ban_do_the_ruy_bang_den_lenh: 53,
			Ban_do_Thuoc_tinh: 47,
			Bao_cao: 31,
			Bieu_mau: 24,
			Bieu_mau_he_thong: 60,
			Bo_ket_noi_371: 371,
			Bo_ket_noi_372: 372,
			Bo_tuy_chon: 9,
			Buoc_xu_ly_thong_bao_SDK: 92,
			Cau_hinh_AI: 402,
			Cau_hinh_Bao_mat_Truong: 70,
			Cau_hinh_Hinh_anh_Thuc_the: 432,
			Cau_hinh_Hinh_anh_Thuoc_tinh: 431,
			Cau_hinh_mac_dinh_cua_dieu_khien_tuy_chinh: 68,
			Cau_hinh_Mobile_Offline: 161,
			Cau_hinh_phan_tich_thuc_the: 430,
			Chenh_lech_ruy_bang: 55,
			Chi_muc: 18,
			Chuoi_Hien_thi: 22,
			Cum_to_hop_bo_tro: 91,
			Dac_quyen: 16,
			Diem_cuoi_dich_vu: 95,
			Dieu_khien_tuy_chinh: 66,
			Dieu_kien_Quy_tac_Trung_lap: 45,
			Dieu_kien_them_cua_moi_quan_he: 8,
			Dinh_nghia_Bien_Moi_truong: 380,
			Du_an_AI: 401,
			Gia_tri_Bien_Moi_truong: 381,
			Gia_tri_danh_sach_chon_thuoc_tinh: 4,
			Gia_tri_tra_cuu_thuoc_tinh: 5,
			Hien_thi_truc_quan_bao_cao: 34,
			Hien_thi_truc_quan_ve_truy_van_da_luu: 59,
			Hinh_anh_buoc_xu_ly_thong_bao_SDK: 93,
			Khoa_Thuc_the: 14,
			Kiem_soat_phuc: 64,
			Lenh_tren_ruy_bang: 48,
			Loai_bo_tro: 90,
			Loai_Du_an_AI: 400,
			Mau_bai_viet_KB: 38,
			Mau_email: 36,
			Mau_Hop_dong: 37,
			Mau_Tron_Thu: 39,
			Moi_quan_he: 3,
			Moi_quan_he_cua_moi_quan_he_cua_thuc_the: 12,
			Moi_quan_he_cua_thuc_the: 10,
			Muc_cau_hinh_Mobile_Offline: 162,
			Muc_quy_tac_chuyen_doi: 155,
			Muc_quy_tac_dinh_tuyen: 151,
			Muc_SLA: 153,
			Nhan_da_ban_dia_hoa: 7,
			Nhap_Ban_do: 208,
			Nhom_boi_canh_ruy_bang: 49,
			PrivilegeObjectTypeCode: 17,
			Quy_tac_Chuyen_doi: 154,
			Quy_tac_Dinh_tuyen: 150,
			Quy_tac_He_thong_cap_bac: 65,
			Quy_tac_ruy_bang: 52,
			Quy_tac_trung_lap: 44,
			Quy_tac_Tuong_tu: 165,
			Quy_trinh_lam_viec: 29,
			Quyen_cua_Truong: 71,
			Quyen_vai_tro: 21,
			SDKMessage: 201,
			SDKMessageFilter: 202,
			SdkMessagePair: 203,
			SdkMessageRequest: 204,
			SdkMessageRequestField: 205,
			SdkMessageResponse: 206,
			SdkMessageResponseField: 207,
			So_do_Thuc_the: 46,
			So_do_trang_web: 62,
			Tai_nguyen_web: 61,
			Tep_dinh_kem: 35,
			The_loai_bao_cao: 33,
			Thoa_thuan_Cap_do_Dich_vu: 152,
			Thuc_the: 1,
			Thuc_the_bao_cao: 32,
			Thuoc_tinh: 2,
			Thuoc_tinh_duoc_quan_ly: 13,
			To_chuc: 25,
			Truy_van_da_luu: 26,
			Tuy_chinh_ruy_bang: 50,
			Ung_dung_Bang_tuy_bien: 300,
			Vai_tro: 20,
			Vai_tro_cua_moi_quan_he_cua_thuc_the: 11,
			Vai_tro_Ket_noi: 63,
			WebWizard: 210,
			Xem_thuoc_tinh: 6
		},
		RequiredComponentType : {
			Anh_xa_Nguon_Du_lieu: 166,
			Ban_do_Chuoi_Hien_thi: 23,
			Ban_do_the_ruy_bang_den_lenh: 53,
			Ban_do_Thuoc_tinh: 47,
			Bao_cao: 31,
			Bieu_mau: 24,
			Bieu_mau_he_thong: 60,
			Bo_ket_noi_371: 371,
			Bo_ket_noi_372: 372,
			Bo_tuy_chon: 9,
			Buoc_xu_ly_thong_bao_SDK: 92,
			Cau_hinh_AI: 402,
			Cau_hinh_Bao_mat_Truong: 70,
			Cau_hinh_Hinh_anh_Thuc_the: 432,
			Cau_hinh_Hinh_anh_Thuoc_tinh: 431,
			Cau_hinh_mac_dinh_cua_dieu_khien_tuy_chinh: 68,
			Cau_hinh_Mobile_Offline: 161,
			Cau_hinh_phan_tich_thuc_the: 430,
			Chenh_lech_ruy_bang: 55,
			Chi_muc: 18,
			Chuoi_Hien_thi: 22,
			Cum_to_hop_bo_tro: 91,
			Dac_quyen: 16,
			Diem_cuoi_dich_vu: 95,
			Dieu_khien_tuy_chinh: 66,
			Dieu_kien_Quy_tac_Trung_lap: 45,
			Dieu_kien_them_cua_moi_quan_he: 8,
			Dinh_nghia_Bien_Moi_truong: 380,
			Du_an_AI: 401,
			Gia_tri_Bien_Moi_truong: 381,
			Gia_tri_danh_sach_chon_thuoc_tinh: 4,
			Gia_tri_tra_cuu_thuoc_tinh: 5,
			Hien_thi_truc_quan_bao_cao: 34,
			Hien_thi_truc_quan_ve_truy_van_da_luu: 59,
			Hinh_anh_buoc_xu_ly_thong_bao_SDK: 93,
			Khoa_Thuc_the: 14,
			Kiem_soat_phuc: 64,
			Lenh_tren_ruy_bang: 48,
			Loai_bo_tro: 90,
			Loai_Du_an_AI: 400,
			Mau_bai_viet_KB: 38,
			Mau_email: 36,
			Mau_Hop_dong: 37,
			Mau_Tron_Thu: 39,
			Moi_quan_he: 3,
			Moi_quan_he_cua_moi_quan_he_cua_thuc_the: 12,
			Moi_quan_he_cua_thuc_the: 10,
			Muc_cau_hinh_Mobile_Offline: 162,
			Muc_quy_tac_chuyen_doi: 155,
			Muc_quy_tac_dinh_tuyen: 151,
			Muc_SLA: 153,
			Nhan_da_ban_dia_hoa: 7,
			Nhap_Ban_do: 208,
			Nhom_boi_canh_ruy_bang: 49,
			PrivilegeObjectTypeCode: 17,
			Quy_tac_Chuyen_doi: 154,
			Quy_tac_Dinh_tuyen: 150,
			Quy_tac_He_thong_cap_bac: 65,
			Quy_tac_ruy_bang: 52,
			Quy_tac_trung_lap: 44,
			Quy_tac_Tuong_tu: 165,
			Quy_trinh_lam_viec: 29,
			Quyen_cua_Truong: 71,
			Quyen_vai_tro: 21,
			SDKMessage: 201,
			SDKMessageFilter: 202,
			SdkMessagePair: 203,
			SdkMessageRequest: 204,
			SdkMessageRequestField: 205,
			SdkMessageResponse: 206,
			SdkMessageResponseField: 207,
			So_do_Thuc_the: 46,
			So_do_trang_web: 62,
			Tai_nguyen_web: 61,
			Tep_dinh_kem: 35,
			The_loai_bao_cao: 33,
			Thoa_thuan_Cap_do_Dich_vu: 152,
			Thuc_the: 1,
			Thuc_the_bao_cao: 32,
			Thuoc_tinh: 2,
			Thuoc_tinh_duoc_quan_ly: 13,
			To_chuc: 25,
			Truy_van_da_luu: 26,
			Tuy_chinh_ruy_bang: 50,
			Ung_dung_Bang_tuy_bien: 300,
			Vai_tro: 20,
			Vai_tro_cua_moi_quan_he_cua_thuc_the: 11,
			Vai_tro_Ket_noi: 63,
			WebWizard: 210,
			Xem_thuoc_tinh: 6
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
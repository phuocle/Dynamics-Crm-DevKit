﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AuditApi = function (e) {
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
		var _audit = {
			Action: { a: 'action', r: true },
			AdditionalInfo: { a: 'additionalinfo' },
			AttributeMask: { a: 'attributemask', r: true },
			AuditId: { a: 'auditid', r: true },
			CallingUserId: { b: 'callinguserid', a: '_callinguserid_value', c: 'systemusers', d: 'systemuser', r: true },
			ChangeData: { a: 'changedata', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			Operation: { a: 'operation', r: true },
			TransactionId: { a: 'transactionid', r: true },
			UserAdditionalInfo: { a: 'useradditionalinfo' },
			userid: { b: 'userid', a: '_userid_value', c: 'systemusers', d: 'systemuser', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var audit = {};
		audit.ODataEntity = e;
		audit.FormattedValue = {};
		for (var field in _audit) {
			var a = _audit[field].a;
			var b = _audit[field].b;
			var c = _audit[field].c;
			var d = _audit[field].d;
			var g = _audit[field].g;
			var r = _audit[field].r;
			webApiField(audit, field, e, a, b, c, d, r, u, g);
		}
		audit.Entity = u;
		audit.EntityName = 'audit';
		audit.EntityCollectionName = 'audits';
		audit['@odata.etag'] = e['@odata.etag'];
		audit.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		audit.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return audit;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Audit = {
		Action : {
			Anh_xa_Nhap: 60,
			ApplicationBasedAccessAllowed: 122,
			ApplicationBasedAccessDenied: 121,
			Archive: 115,
			Cap_nhat: 2,
			Chia_se: 14,
			Da_bat_cho_to_chuc: 63,
			Da_bat_dau_Kiem_tra_Thuc_the: 105,
			Da_bat_dau_Kiem_tra_Thuoc_tinh: 106,
			Da_bat_dau_Kiem_tra_Truy_cap_Nguoi_dung: 112,
			Da_bat_Kiem_tra: 107,
			Da_dung_Kiem_tra_Thuc_the: 108,
			Da_dung_Kiem_tra_Thuoc_tinh: 109,
			Da_dung_Kiem_tra_Truy_cap_Nguoi_dung: 113,
			Da_tat_Kiem_tra: 110,
			Da_tra: 23,
			Dang_ky: 50,
			Dang_xu_ly_Noi_bo: 46,
			Dat_Trang_thai: 41,
			Dinh_tinh: 24,
			Dong: 16,
			Dung_kich_hoat: 5,
			Dung_lien_ket_Thuc_the: 34,
			Gan: 13,
			Gan_Vai_tro_cho_Nguoi_dung: 55,
			Gan_Vai_tro_cho_Nhom: 53,
			Gia_han: 42,
			Giai_quyet: 20,
			Gui: 26,
			Gui_Email_Truc_tiep: 62,
			Hoa_don: 29,
			Hoan_thanh: 18,
			Hop_nhat: 12,
			Huy: 17,
			Huy_tu_cach: 25,
			IPFirewallAcccesAllowed: 119,
			IPFirewallAcccesDenied: 118,
			Khong_chia_se: 49,
			Khong_xac_dinh: 0,
			Kich_hoat: 4,
			Len_lich_lai: 47,
			Lien_ket_Thuc_the: 33,
			Loai_bo_Dac_quyen_khoi_Vai_tro: 58,
			Loai_bo_Hang_thay_the: 40,
			Loai_bo_Muc: 38,
			Loai_bo_Thanh_vien_32: 32,
			Loai_bo_Thanh_vien_36: 36,
			Loai_bo_Vai_tro_khoi_Nguoi_dung: 56,
			Loai_bo_Vai_tro_khoi_Nhom: 54,
			Mo_lai: 21,
			Phan_tang: 11,
			Phe_duyet: 28,
			Restore: 120,
			Retain: 116,
			RollbackRetain: 117,
			Sao_y: 61,
			Sua_doi_Chia_se: 48,
			Sua_lai: 43,
			Tao: 1,
			Tao_Bao_gia_tu_Co_hoi: 51,
			Thang: 44,
			Thay_doi_Kiem_tra_o_Cap_do_Thuc_the: 102,
			Thay_doi_Kiem_tra_o_Cap_do_Thuoc_tinh: 103,
			Thay_doi_Kiem_tra_o_Cap_do_To_chuc: 104,
			Thay_the_Dac_quyen_trong_Vai_tro: 59,
			Them_Dac_quyen_vao_Vai_tro: 57,
			Them_Hang_thay_the: 39,
			Them_Muc: 37,
			Them_Thanh_vien_31: 31,
			Them_Thanh_vien_35: 35,
			Them_vao_Hang_doi: 52,
			Thua: 45,
			Thuc_hien: 22,
			Treo: 30,
			Truy_cap_Nguoi_dung_qua_Dich_vu_Web: 65,
			Truy_cap_Nguoi_dung_qua_Web: 64,
			Truy_xuat: 15,
			Tu_choi: 27,
			Upsert: 6,
			Xoa: 3,
			Xoa_Nhat_ky_Kiem_tra: 111,
			Xoa_Thuc_the: 100,
			Xoa_Thuoc_tinh: 101
		},
		ObjectTypeCode : {
		},
		Operation : {
			Archive: 115,
			Cap_nhat: 2,
			CustomOperation: 200,
			Restore: 118,
			Retain: 116,
			RollbackRetain: 117,
			Tao: 1,
			Truy_cap: 4,
			Upsert: 5,
			Xoa: 3
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
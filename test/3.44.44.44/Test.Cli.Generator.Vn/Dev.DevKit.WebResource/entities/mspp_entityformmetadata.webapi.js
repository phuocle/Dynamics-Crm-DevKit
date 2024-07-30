'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_entityformmetadataApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _mspp_entityformmetadata = {
			mspp_adddescription: { a: 'mspp_adddescription' },
			mspp_attributelogicalname: { a: 'mspp_attributelogicalname' },
			mspp_constantsummaximumtotal: { a: 'mspp_constantsummaximumtotal' },
			mspp_constantsumminimumtotal: { a: 'mspp_constantsumminimumtotal' },
			mspp_constantsumvalidationerrormessage: { a: 'mspp_constantsumvalidationerrormessage' },
			mspp_controlstyle: { a: 'mspp_controlstyle' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_cssclass: { a: 'mspp_cssclass' },
			mspp_description: { a: 'mspp_description' },
			mspp_descriptionposition: { a: 'mspp_descriptionposition' },
			mspp_entityform: { b: 'mspp_entityform', a: '_mspp_entityform_value', c: 'mspp_entityforms', d: 'mspp_entityform' },
			mspp_entityformforcreate: { b: 'mspp_entityformforcreate', a: '_mspp_entityformforcreate_value', c: 'mspp_entityforms', d: 'mspp_entityform' },
			mspp_entityformmetadataId: { a: 'mspp_entityformmetadataid' },
			mspp_fieldisrequired: { a: 'mspp_fieldisrequired' },
			mspp_geolocationvalidatorerrormessage: { a: 'mspp_geolocationvalidatorerrormessage' },
			mspp_groupname: { a: 'mspp_groupname' },
			mspp_ignoredefaultvalue: { a: 'mspp_ignoredefaultvalue' },
			mspp_label: { a: 'mspp_label' },
			mspp_maxmultiplechoiceselectedcount: { a: 'mspp_maxmultiplechoiceselectedcount' },
			mspp_minmultiplechoiceselectedcount: { a: 'mspp_minmultiplechoiceselectedcount' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_multiplechoicevalidationerrormessage: { a: 'mspp_multiplechoicevalidationerrormessage' },
			mspp_name: { a: 'mspp_name' },
			mspp_notes_settings: { a: 'mspp_notes_settings' },
			mspp_onsavefromattribute: { a: 'mspp_onsavefromattribute' },
			mspp_onsavetype: { a: 'mspp_onsavetype' },
			mspp_onsavevalue: { a: 'mspp_onsavevalue' },
			mspp_prepopulatefromattribute: { a: 'mspp_prepopulatefromattribute' },
			mspp_prepopulatetype: { a: 'mspp_prepopulatetype' },
			mspp_prepopulatevalue: { a: 'mspp_prepopulatevalue' },
			mspp_provisionedlanguages: { a: 'mspp_provisionedlanguages' },
			mspp_randomizeoptionsetvalues: { a: 'mspp_randomizeoptionsetvalues' },
			mspp_rangevalidationerrormessage: { a: 'mspp_rangevalidationerrormessage' },
			mspp_rankordernotiesvalidationerrormessage: { a: 'mspp_rankordernotiesvalidationerrormessage' },
			mspp_requiredfieldvalidationerrormessage: { a: 'mspp_requiredfieldvalidationerrormessage' },
			mspp_sectionname: { a: 'mspp_sectionname' },
			mspp_setvalueonsave: { a: 'mspp_setvalueonsave' },
			mspp_subgrid_name: { a: 'mspp_subgrid_name' },
			mspp_subgrid_settings: { a: 'mspp_subgrid_settings' },
			mspp_tabname: { a: 'mspp_tabname' },
			mspp_timeline_settings: { a: 'mspp_timeline_settings' },
			mspp_type: { a: 'mspp_type' },
			mspp_useattributedescriptionproperty: { a: 'mspp_useattributedescriptionproperty' },
			mspp_validationerrormessage: { a: 'mspp_validationerrormessage' },
			mspp_validationregularexpression: { a: 'mspp_validationregularexpression' },
			mspp_validationregularexpressionerrormessage: { a: 'mspp_validationregularexpressionerrormessage' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_entityformmetadata = {};
		mspp_entityformmetadata.ODataEntity = e;
		mspp_entityformmetadata.FormattedValue = {};
		for (var field in _mspp_entityformmetadata) {
			var a = _mspp_entityformmetadata[field].a;
			var b = _mspp_entityformmetadata[field].b;
			var c = _mspp_entityformmetadata[field].c;
			var d = _mspp_entityformmetadata[field].d;
			var g = _mspp_entityformmetadata[field].g;
			var r = _mspp_entityformmetadata[field].r;
			webApiField(mspp_entityformmetadata, field, e, a, b, c, d, r, u, g);
		}
		mspp_entityformmetadata.Entity = u;
		mspp_entityformmetadata.EntityName = 'mspp_entityformmetadata';
		mspp_entityformmetadata.EntityCollectionName = 'mspp_entityformmetadatas';
		mspp_entityformmetadata['@odata.etag'] = e['@odata.etag'];
		mspp_entityformmetadata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_entityformmetadata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_entityformmetadata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_entityformmetadata = {
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
			Luoi_con: 100000003,
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
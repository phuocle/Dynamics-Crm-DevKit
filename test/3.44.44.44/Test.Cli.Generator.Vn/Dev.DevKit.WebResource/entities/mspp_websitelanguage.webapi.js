'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_websitelanguageApi = function (e) {
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
		var _mspp_websitelanguage = {
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_description: { a: 'mspp_description' },
			mspp_displayname: { a: 'mspp_displayname' },
			mspp_languagecode: { a: 'mspp_languagecode' },
			mspp_lcid: { a: 'mspp_lcid' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_name: { a: 'mspp_name' },
			mspp_publishingstate: { b: 'mspp_publishingstate', a: '_mspp_publishingstate_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_systemlanguage: { a: 'mspp_systemlanguage' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			mspp_websitelanguageId: { a: 'mspp_websitelanguageid' },
			mspp_websitelcid: { a: 'mspp_websitelcid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_websitelanguage = {};
		mspp_websitelanguage.ODataEntity = e;
		mspp_websitelanguage.FormattedValue = {};
		for (var field in _mspp_websitelanguage) {
			var a = _mspp_websitelanguage[field].a;
			var b = _mspp_websitelanguage[field].b;
			var c = _mspp_websitelanguage[field].c;
			var d = _mspp_websitelanguage[field].d;
			var g = _mspp_websitelanguage[field].g;
			var r = _mspp_websitelanguage[field].r;
			webApiField(mspp_websitelanguage, field, e, a, b, c, d, r, u, g);
		}
		mspp_websitelanguage.Entity = u;
		mspp_websitelanguage.EntityName = 'mspp_websitelanguage';
		mspp_websitelanguage.EntityCollectionName = 'mspp_websitelanguages';
		mspp_websitelanguage['@odata.etag'] = e['@odata.etag'];
		mspp_websitelanguage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_websitelanguage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_websitelanguage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_websitelanguage = {
		mspp_websitelcid : {
			Tieng_A_Rap: 1025,
			Tieng_Anh: 1033,
			Tieng_Ba_Lan_Ba_Lan: 1045,
			Tieng_Basque_Basque: 1069,
			Tieng_Bo_Dao_Nha_Bo_Dao_Nha: 2070,
			Tieng_Bo_Dao_Nha_Brazil: 1046,
			Tieng_Bulgaria_Bulgaria: 1026,
			Tieng_Catalan_Catalan: 1027,
			Tieng_Croatia_Croatia: 1050,
			Tieng_Dan_Mach_Dan_Mach: 1030,
			Tieng_Do_Thai: 1037,
			Tieng_Duc_Duc: 1031,
			Tieng_Estonia_Estonia: 1061,
			Tieng_Galician_Tay_Ban_Nha: 1110,
			Tieng_Ha_Lan_Ha_Lan: 1043,
			Tieng_Han_Han_Quoc: 1042,
			Tieng_Hindi_An_Do: 1081,
			Tieng_Hungary_Hungary: 1038,
			Tieng_Hy_Lap_Hy_Lap: 1032,
			Tieng_Indonesia_Indonesia: 1057,
			Tieng_Italy_Italy: 1040,
			Tieng_Kazakh_Kazakhstan: 1087,
			Tieng_Latvia_Latvia: 1062,
			Tieng_Litva_Litva: 1063,
			Tieng_Ma_Lai_Malaysia: 1086,
			Tieng_Na_Uy_Bokmal_Na_Uy: 1044,
			Tieng_Nga_Nga: 1049,
			Tieng_Nhat_Nhat_Ban: 1041,
			Tieng_Phan_Lan_Phan_Lan: 1035,
			Tieng_Phap_Phap: 1036,
			Tieng_Romania_Romania: 1048,
			Tieng_Sec_Cong_hoa_Sec: 1029,
			Tieng_Serbia_Cyrillic_Serbia: 3098,
			Tieng_Serbia_Latinh_Serbia: 2074,
			Tieng_Slovak_Slovakia: 1051,
			Tieng_Slovenia_Slovenia: 1060,
			Tieng_Tay_Ban_Nha_Cach_sap_xep_Truyen_thong_Tay_Ban_Nha: 3082,
			Tieng_Thai_Thai_Lan: 1054,
			Tieng_Tho_Nhi_Ky_Tho_Nhi_Ky: 1055,
			Tieng_Thuy_Dien_Thuy_Dien: 1053,
			Tieng_Trung_Dac_khu_Hanh_chinh_Hong_Kong: 3076,
			Tieng_Trung_Phon_the: 1028,
			Tieng_Trung_Trung_Quoc: 2052,
			Tieng_Ukraina_Ukraina: 1058,
			Tieng_Viet_Viet_Nam: 1066
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_cannedmessageApi = function (e) {
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
		var _msdyn_cannedmessage = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_cannedmessageId: { a: 'msdyn_cannedmessageid' },
			msdyn_Locale_Field: { a: 'msdyn_locale_field' },
			msdyn_message: { a: 'msdyn_message' },
			msdyn_tagscontrolfield: { a: 'msdyn_tagscontrolfield' },
			msdyn_title: { a: 'msdyn_title' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_cannedmessage = {};
		msdyn_cannedmessage.ODataEntity = e;
		msdyn_cannedmessage.FormattedValue = {};
		for (var field in _msdyn_cannedmessage) {
			var a = _msdyn_cannedmessage[field].a;
			var b = _msdyn_cannedmessage[field].b;
			var c = _msdyn_cannedmessage[field].c;
			var d = _msdyn_cannedmessage[field].d;
			var g = _msdyn_cannedmessage[field].g;
			var r = _msdyn_cannedmessage[field].r;
			webApiField(msdyn_cannedmessage, field, e, a, b, c, d, r, u, g);
		}
		msdyn_cannedmessage.Entity = u;
		msdyn_cannedmessage.EntityName = 'msdyn_cannedmessage';
		msdyn_cannedmessage.EntityCollectionName = 'msdyn_cannedmessages';
		msdyn_cannedmessage['@odata.etag'] = e['@odata.etag'];
		msdyn_cannedmessage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_cannedmessage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_cannedmessage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_cannedmessage = {
		msdyn_Locale_Field : {
			ar_SA: 1025,
			bg_BG: 1026,
			ca_ES: 1027,
			cs_CZ: 1029,
			da_DK: 1030,
			de_DE: 1031,
			el_GR: 1032,
			en_US: 1033,
			es_ES: 3082,
			et_EE: 1061,
			eu_ES: 1069,
			fi_FI: 1035,
			fr_FR: 1036,
			gl_ES: 1110,
			he_IL: 1037,
			hi_IN: 1081,
			hr_HR: 1050,
			hu_HU: 1038,
			id_ID: 1057,
			it_IT: 1040,
			ja_JP: 1041,
			kk_KZ: 1087,
			ko_KR: 1042,
			lt_LT: 1063,
			lv_LV: 1062,
			ms_MY: 1086,
			nb_NO: 1044,
			nl_NL: 1043,
			pl_PL: 1045,
			pt_BR: 1046,
			pt_PT: 2070,
			ro_RO: 1048,
			ru_RU: 1049,
			sk_SK: 1051,
			sl_SI: 1060,
			sr_Cyrl_CS: 3098,
			sv_SE: 1053,
			th_TH: 1054,
			tr_TR: 1055,
			uk_UA: 1058,
			vi_VN: 1066,
			zh_CN: 2052,
			zh_HK: 3076,
			zh_TW: 1028
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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
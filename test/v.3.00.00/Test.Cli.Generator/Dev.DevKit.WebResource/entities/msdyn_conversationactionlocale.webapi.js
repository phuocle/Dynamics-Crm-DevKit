'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_conversationactionlocaleApi = function (e) {
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
		var _msdyn_conversationactionlocale = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Conversationactionkey: { b: 'msdyn_Conversationactionkey', a: '_msdyn_conversationactionkey_value', c: 'msdyn_conversationactions', d: 'msdyn_conversationaction' },
			msdyn_conversationactionlocaleId: { a: 'msdyn_conversationactionlocaleid' },
			msdyn_Label: { a: 'msdyn_label' },
			msdyn_Locale_picklist: { a: 'msdyn_locale_picklist' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_SlashCommands: { a: 'msdyn_slashcommands' },
			msdyn_Tooltip: { a: 'msdyn_tooltip' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_conversationactionlocale = {};
		msdyn_conversationactionlocale.ODataEntity = e;
		msdyn_conversationactionlocale.FormattedValue = {};
		for (var field in _msdyn_conversationactionlocale) {
			var a = _msdyn_conversationactionlocale[field].a;
			var b = _msdyn_conversationactionlocale[field].b;
			var c = _msdyn_conversationactionlocale[field].c;
			var d = _msdyn_conversationactionlocale[field].d;
			var g = _msdyn_conversationactionlocale[field].g;
			var r = _msdyn_conversationactionlocale[field].r;
			webApiField(msdyn_conversationactionlocale, field, e, a, b, c, d, r, u, g);
		}
		msdyn_conversationactionlocale.Entity = u;
		msdyn_conversationactionlocale.EntityName = 'msdyn_conversationactionlocale';
		msdyn_conversationactionlocale.EntityCollectionName = 'msdyn_conversationactionlocales';
		msdyn_conversationactionlocale['@odata.etag'] = e['@odata.etag'];
		msdyn_conversationactionlocale.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_conversationactionlocale.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_conversationactionlocale;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_conversationactionlocale = {
		msdyn_Locale_picklist : {
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
			sr_Latn_CS: 2074,
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
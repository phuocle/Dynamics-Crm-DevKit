'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.CallbackRegistrationApi = function (e) {
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
		var _callbackregistration = {
			CallbackRegistrationId: { a: 'callbackregistrationid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityName2: { a: 'entityname' },
			FilterExpression: { a: 'filterexpression' },
			FilteringAttributes: { a: 'filteringattributes' },
			HardDelete: { a: 'harddelete' },
			LogicAppsVersion: { a: 'logicappsversion' },
			Message: { a: 'message' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PostponeUntil: { a: 'postponeuntil' },
			RunAs: { a: 'runas' },
			RuntimeIntegrationProperties: { a: 'runtimeintegrationproperties' },
			Scope: { a: 'scope' },
			SdkMessageName: { a: 'sdkmessagename' },
			SoftDeleteStatus: { a: 'softdeletestatus' },
			Url: { a: 'url' },
			Version: { a: 'version' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var callbackregistration = {};
		callbackregistration.ODataEntity = e;
		callbackregistration.FormattedValue = {};
		for (var field in _callbackregistration) {
			var a = _callbackregistration[field].a;
			var b = _callbackregistration[field].b;
			var c = _callbackregistration[field].c;
			var d = _callbackregistration[field].d;
			var g = _callbackregistration[field].g;
			var r = _callbackregistration[field].r;
			webApiField(callbackregistration, field, e, a, b, c, d, r, u, g);
		}
		callbackregistration.Entity = u;
		callbackregistration.EntityName = 'callbackregistration';
		callbackregistration.EntityCollectionName = 'callbackregistrations';
		callbackregistration['@odata.etag'] = e['@odata.etag'];
		callbackregistration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		callbackregistration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return callbackregistration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.CallbackRegistration = {
		Message : {
			Cap_nhat: 3,
			Cap_nhat_hoac_Xoa: 6,
			Tao: 1,
			Tao_hoac_Cap_nhat: 4,
			Tao_hoac_Cap_nhat_hoac_Xoa: 7,
			Tao_hoac_Xoa: 5,
			Xoa: 2
		},
		RunAs : {
			Chu_so_huu_Ban_ghi: 2,
			Chu_so_huu_Quy_trinh: 3,
			Dang_kich_hoat_Nguoi_dung: 1
		},
		Scope : {
			Don_vi_Kinh_doanh: 2,
			Nguoi_dung: 1,
			ParentChildBusinessUnit: 3,
			To_chuc: 4
		},
		Version : {
			V1: 1,
			V2: 2,
			V3: 3
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
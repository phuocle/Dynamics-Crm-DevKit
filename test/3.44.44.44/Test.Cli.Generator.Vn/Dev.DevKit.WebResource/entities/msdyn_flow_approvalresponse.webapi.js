'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_flow_approvalresponseApi = function (e) {
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
		var _msdyn_flow_approvalresponse = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_flow_approvalresponse_additionalfields: { a: 'msdyn_flow_approvalresponse_additionalfields' },
			msdyn_flow_approvalresponse_approval: { b: 'msdyn_flow_approvalresponse_approval', a: '_msdyn_flow_approvalresponse_approval_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			msdyn_flow_approvalresponse_approvalstagekey: { a: 'msdyn_flow_approvalresponse_approvalstagekey' },
			msdyn_flow_approvalresponse_comments: { a: 'msdyn_flow_approvalresponse_comments' },
			msdyn_flow_approvalresponse_name: { a: 'msdyn_flow_approvalresponse_name' },
			msdyn_flow_approvalresponse_response: { a: 'msdyn_flow_approvalresponse_response' },
			msdyn_flow_approvalresponse_stage: { a: 'msdyn_flow_approvalresponse_stage' },
			msdyn_flow_approvalresponse_stepnumber: { a: 'msdyn_flow_approvalresponse_stepnumber' },
			msdyn_flow_approvalresponseId: { a: 'msdyn_flow_approvalresponseid' },
			msdyn_flow_approvalresponseidx_approvalid: { a: 'msdyn_flow_approvalresponseidx_approvalid' },
			msdyn_flow_approvalresponseidx_owninguserid: { a: 'msdyn_flow_approvalresponseidx_owninguserid' },
			msdyn_flow_approvalresponseidx_stage: { a: 'msdyn_flow_approvalresponseidx_stage' },
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
		var msdyn_flow_approvalresponse = {};
		msdyn_flow_approvalresponse.ODataEntity = e;
		msdyn_flow_approvalresponse.FormattedValue = {};
		for (var field in _msdyn_flow_approvalresponse) {
			var a = _msdyn_flow_approvalresponse[field].a;
			var b = _msdyn_flow_approvalresponse[field].b;
			var c = _msdyn_flow_approvalresponse[field].c;
			var d = _msdyn_flow_approvalresponse[field].d;
			var g = _msdyn_flow_approvalresponse[field].g;
			var r = _msdyn_flow_approvalresponse[field].r;
			webApiField(msdyn_flow_approvalresponse, field, e, a, b, c, d, r, u, g);
		}
		msdyn_flow_approvalresponse.Entity = u;
		msdyn_flow_approvalresponse.EntityName = 'msdyn_flow_approvalresponse';
		msdyn_flow_approvalresponse.EntityCollectionName = 'msdyn_flow_approvalresponses';
		msdyn_flow_approvalresponse['@odata.etag'] = e['@odata.etag'];
		msdyn_flow_approvalresponse.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_flow_approvalresponse.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_flow_approvalresponse;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_approvalresponse = {
		msdyn_flow_approvalresponse_stage : {
			Co_ban: 192350001,
			Hoan_thanh: 192351000,
			Khong_chi_dinh: 192350000
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Da_cam_ket: 192350002,
			Da_luu: 192350001,
			Dang_danh_gia: 192350000
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
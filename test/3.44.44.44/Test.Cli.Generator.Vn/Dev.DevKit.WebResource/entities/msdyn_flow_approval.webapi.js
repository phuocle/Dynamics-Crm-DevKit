'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_flow_approvalApi = function (e) {
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
		var _msdyn_flow_approval = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_flow_approval_additionalfields: { a: 'msdyn_flow_approval_additionalfields' },
			msdyn_flow_approval_allowreassign: { a: 'msdyn_flow_approval_allowreassign' },
			msdyn_flow_approval_approvalstagekey: { a: 'msdyn_flow_approval_approvalstagekey' },
			msdyn_flow_approval_basicapprovalmodel: { b: 'msdyn_flow_approval_basicapprovalmodel', a: '_msdyn_flow_approval_basicapprovalmodel_value', c: 'msdyn_flow_basicapprovalmodels', d: 'msdyn_flow_basicapprovalmodel' },
			msdyn_flow_approval_category: { a: 'msdyn_flow_approval_category' },
			msdyn_flow_approval_completedon_UtcDateAndTime: { a: 'msdyn_flow_approval_completedon' },
			msdyn_flow_approval_currentstepnumber: { a: 'msdyn_flow_approval_currentstepnumber' },
			msdyn_flow_approval_details: { a: 'msdyn_flow_approval_details' },
			msdyn_flow_approval_dueon_UtcDateAndTime: { a: 'msdyn_flow_approval_dueon' },
			msdyn_flow_approval_expireson_UtcDateAndTime: { a: 'msdyn_flow_approval_expireson' },
			msdyn_flow_approval_itemlink: { a: 'msdyn_flow_approval_itemlink' },
			msdyn_flow_approval_itemlinkdescription: { a: 'msdyn_flow_approval_itemlinkdescription' },
			msdyn_flow_approval_itemlinkhash: { a: 'msdyn_flow_approval_itemlinkhash' },
			msdyn_flow_approval_modelid: { a: 'msdyn_flow_approval_modelid' },
			msdyn_flow_approval_modeltype: { a: 'msdyn_flow_approval_modeltype' },
			msdyn_flow_approval_name: { a: 'msdyn_flow_approval_name' },
			msdyn_flow_approval_partneridhash: { a: 'msdyn_flow_approval_partneridhash' },
			msdyn_flow_approval_partnermetadata: { a: 'msdyn_flow_approval_partnermetadata' },
			msdyn_flow_approval_priority: { a: 'msdyn_flow_approval_priority' },
			msdyn_flow_approval_requesttype: { a: 'msdyn_flow_approval_requesttype' },
			msdyn_flow_approval_result: { a: 'msdyn_flow_approval_result' },
			msdyn_flow_approval_sendemail: { a: 'msdyn_flow_approval_sendemail' },
			msdyn_flow_approval_source: { a: 'msdyn_flow_approval_source' },
			msdyn_flow_approval_stage: { a: 'msdyn_flow_approval_stage' },
			msdyn_flow_approval_tags: { a: 'msdyn_flow_approval_tags' },
			msdyn_flow_approval_templateformid: { a: 'msdyn_flow_approval_templateformid' },
			msdyn_flow_approval_templateid: { a: 'msdyn_flow_approval_templateid' },
			msdyn_flow_approval_templateresponseId: { a: 'msdyn_flow_approval_templateresponseid' },
			msdyn_flow_approval_title: { a: 'msdyn_flow_approval_title' },
			msdyn_flow_approvalId: { a: 'msdyn_flow_approvalid' },
			new_msdyn_flow_approval_allowcancel: { a: 'msdyn_flow_approval_allowcancel' },
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
		var msdyn_flow_approval = {};
		msdyn_flow_approval.ODataEntity = e;
		msdyn_flow_approval.FormattedValue = {};
		for (var field in _msdyn_flow_approval) {
			var a = _msdyn_flow_approval[field].a;
			var b = _msdyn_flow_approval[field].b;
			var c = _msdyn_flow_approval[field].c;
			var d = _msdyn_flow_approval[field].d;
			var g = _msdyn_flow_approval[field].g;
			var r = _msdyn_flow_approval[field].r;
			webApiField(msdyn_flow_approval, field, e, a, b, c, d, r, u, g);
		}
		msdyn_flow_approval.Entity = u;
		msdyn_flow_approval.EntityName = 'msdyn_flow_approval';
		msdyn_flow_approval.EntityCollectionName = 'msdyn_flow_approvals';
		msdyn_flow_approval['@odata.etag'] = e['@odata.etag'];
		msdyn_flow_approval.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_flow_approval.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_flow_approval;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_approval = {
		msdyn_flow_approval_priority : {
			Khan_cap: 192350000,
			Quan_trong: 192350001,
			Thap: 192350003,
			Trung_binh: 192350002
		},
		msdyn_flow_approval_requesttype : {
			Co_ban: 192350001,
			Khac: 192350000,
			Ky_dien_tu: 192350002,
			Mau: 192350003
		},
		msdyn_flow_approval_stage : {
			Co_ban: 192350001,
			Hoan_thanh: 192351000,
			Khong_chi_dinh: 192350000
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Da_het_han: 192350005,
			Da_hoan_thanh: 192350004,
			Da_huy: 192350006,
			Da_huy_bo: 192350007,
			Da_tao: 192350000,
			Da_treo: 192350002,
			Dang_cho_xu_ly: 192350001
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
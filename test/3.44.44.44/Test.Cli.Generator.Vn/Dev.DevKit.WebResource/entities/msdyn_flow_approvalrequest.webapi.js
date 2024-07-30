'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_flow_approvalrequestApi = function (e) {
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
		var _msdyn_flow_approvalrequest = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_flow_approvalrequest_allowreassignment: { a: 'msdyn_flow_approvalrequest_allowreassignment' },
			msdyn_flow_approvalrequest_approval: { b: 'msdyn_flow_approvalrequest_approval', a: '_msdyn_flow_approvalrequest_approval_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			msdyn_flow_approvalrequest_approvalstagekey: { a: 'msdyn_flow_approvalrequest_approvalstagekey' },
			msdyn_flow_approvalrequest_dueon_UtcDateAndTime: { a: 'msdyn_flow_approvalrequest_dueon' },
			msdyn_flow_approvalrequest_expireson_UtcDateAndTime: { a: 'msdyn_flow_approvalrequest_expireson' },
			msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: { a: 'msdyn_flow_approvalrequest_lastnotifiedon' },
			msdyn_flow_approvalrequest_name: { a: 'msdyn_flow_approvalrequest_name' },
			msdyn_flow_approvalrequest_notificationfrequency: { a: 'msdyn_flow_approvalrequest_notificationfrequency' },
			msdyn_flow_approvalrequest_options: { a: 'msdyn_flow_approvalrequest_options' },
			msdyn_flow_approvalrequest_partnermetadata: { a: 'msdyn_flow_approvalrequest_partnermetadata' },
			msdyn_flow_approvalrequest_reassignedfrom: { b: 'msdyn_flow_approvalrequest_reassignedfrom', a: '_msdyn_flow_approvalrequest_reassignedfrom_value', c: 'msdyn_flow_approvalrequests', d: 'msdyn_flow_approvalrequest' },
			msdyn_flow_approvalrequest_responseoptions: { a: 'msdyn_flow_approvalrequest_responseoptions' },
			msdyn_flow_approvalrequest_responseoptionstype: { a: 'msdyn_flow_approvalrequest_responseoptionstype' },
			msdyn_flow_approvalrequest_stage: { a: 'msdyn_flow_approvalrequest_stage' },
			msdyn_flow_approvalrequest_stepnumber: { a: 'msdyn_flow_approvalrequest_stepnumber' },
			msdyn_flow_approvalrequestId: { a: 'msdyn_flow_approvalrequestid' },
			msdyn_flow_approvalrequestidx_approvalid: { a: 'msdyn_flow_approvalrequestidx_approvalid' },
			msdyn_flow_approvalrequestidx_owninguserid: { a: 'msdyn_flow_approvalrequestidx_owninguserid' },
			msdyn_flow_approvalrequestidx_reassignedfromid: { a: 'msdyn_flow_approvalrequestidx_reassignedfromid' },
			msdyn_flow_approvalrequestidx_stage: { a: 'msdyn_flow_approvalrequestidx_stage' },
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
		var msdyn_flow_approvalrequest = {};
		msdyn_flow_approvalrequest.ODataEntity = e;
		msdyn_flow_approvalrequest.FormattedValue = {};
		for (var field in _msdyn_flow_approvalrequest) {
			var a = _msdyn_flow_approvalrequest[field].a;
			var b = _msdyn_flow_approvalrequest[field].b;
			var c = _msdyn_flow_approvalrequest[field].c;
			var d = _msdyn_flow_approvalrequest[field].d;
			var g = _msdyn_flow_approvalrequest[field].g;
			var r = _msdyn_flow_approvalrequest[field].r;
			webApiField(msdyn_flow_approvalrequest, field, e, a, b, c, d, r, u, g);
		}
		msdyn_flow_approvalrequest.Entity = u;
		msdyn_flow_approvalrequest.EntityName = 'msdyn_flow_approvalrequest';
		msdyn_flow_approvalrequest.EntityCollectionName = 'msdyn_flow_approvalrequests';
		msdyn_flow_approvalrequest['@odata.etag'] = e['@odata.etag'];
		msdyn_flow_approvalrequest.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_flow_approvalrequest.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_flow_approvalrequest;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_approvalrequest = {
		msdyn_flow_approvalrequest_responseoptionstype : {
			BasicApproveReject: 192350001,
			CustomOptions: 192350002,
			NotSpecified: 192350000
		},
		msdyn_flow_approvalrequest_stage : {
			Co_ban: 192350001,
			Hoan_thanh: 192351000,
			Khong_chi_dinh: 192350000
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Da_chi_dinh_lai: 192350000,
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
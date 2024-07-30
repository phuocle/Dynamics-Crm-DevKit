'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_pminferredtaskApi = function (e) {
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
		var _msdyn_pminferredtask = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_analysisschedule: { a: 'msdyn_analysisschedule' },
			msdyn_automationdata: { a: 'msdyn_automationdata' },
			msdyn_automationstatus: { a: 'msdyn_automationstatus' },
			msdyn_datavalidation: { a: 'msdyn_datavalidation' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_inputdatabinding: { a: 'msdyn_inputdatabinding' },
			msdyn_isreportavailable: { a: 'msdyn_isreportavailable' },
			msdyn_iterationid: { a: 'msdyn_iterationid' },
			msdyn_lasterrors: { a: 'msdyn_lasterrors' },
			msdyn_lasterrorsreport_name: { a: 'msdyn_lasterrorsreport', r: true },
			msdyn_lastreportrefreshdate_TimezoneDateAndTime: { a: 'msdyn_lastreportrefreshdate' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_outputdata: { a: 'msdyn_outputdata' },
			msdyn_pminferredtaskId: { a: 'msdyn_pminferredtaskid' },
			msdyn_reportdata: { a: 'msdyn_reportdata' },
			msdyn_reportprovisioningstatus: { a: 'msdyn_reportprovisioningstatus' },
			msdyn_sharedrecordingmetadata: { a: 'msdyn_sharedrecordingmetadata' },
			msdyn_source: { a: 'msdyn_source' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_pminferredtask = {};
		msdyn_pminferredtask.ODataEntity = e;
		msdyn_pminferredtask.FormattedValue = {};
		for (var field in _msdyn_pminferredtask) {
			var a = _msdyn_pminferredtask[field].a;
			var b = _msdyn_pminferredtask[field].b;
			var c = _msdyn_pminferredtask[field].c;
			var d = _msdyn_pminferredtask[field].d;
			var g = _msdyn_pminferredtask[field].g;
			var r = _msdyn_pminferredtask[field].r;
			webApiField(msdyn_pminferredtask, field, e, a, b, c, d, r, u, g);
		}
		msdyn_pminferredtask.Entity = u;
		msdyn_pminferredtask.EntityName = 'msdyn_pminferredtask';
		msdyn_pminferredtask.EntityCollectionName = 'msdyn_pminferredtasks';
		msdyn_pminferredtask['@odata.etag'] = e['@odata.etag'];
		msdyn_pminferredtask.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_pminferredtask.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_pminferredtask;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_pminferredtask = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		msdyn_automationstatus : {
			Chua_bat_dau: 200000000,
			Dang_tien_hanh: 200000002,
			Hoan_thanh: 200000003,
			Khong_duoc_de_xuat: 200000001
		},
		msdyn_reportprovisioningstatus : {
			Chua_bat_dau: 193350000,
			Da_bo_qua: 193350004,
			Da_cung_cap: 193350002,
			Dang_cung_cap: 193350001,
			Khong_thanh_cong: 193350003
		},
		msdyn_source : {
			Dang_ghi: 0,
			Kho_du_lieu: 1
		},
		statecode : {
			Ban_nhap: 0,
			Da_nhap: 4,
			Dang_tien_hanh: 1,
			Hoan_tat: 2,
			Khong_thanh_cong: 3
		},
		statuscode : {
			Ban_nhap: 0,
			Da_nhap: 7,
			Da_phan_tich: 4,
			Da_xep_hang_doi: 1,
			Dang_phan_tich: 2,
			Dang_xoa: 3,
			Khong_phan_tich_duoc: 5,
			Khong_xoa_duoc: 6
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
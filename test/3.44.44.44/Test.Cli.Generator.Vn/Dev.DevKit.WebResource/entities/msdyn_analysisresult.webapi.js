'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_analysisresultApi = function (e) {
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
		var _msdyn_analysisresult = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AnalysisComponentId: { b: 'msdyn_AnalysisComponentId', a: '_msdyn_analysiscomponentid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			msdyn_AnalysisComponentType: { a: 'msdyn_analysiscomponenttype' },
			msdyn_AnalysisJobId: { b: 'msdyn_AnalysisJobId', a: '_msdyn_analysisjobid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			msdyn_analysisresultId: { a: 'msdyn_analysisresultid' },
			msdyn_Category: { a: 'msdyn_category' },
			msdyn_ComponentType: { a: 'msdyn_componenttype' },
			msdyn_EntityName: { a: 'msdyn_entityname' },
			msdyn_FileUri: { a: 'msdyn_fileuri' },
			msdyn_HasResolution: { a: 'msdyn_hasresolution' },
			msdyn_helplink: { a: 'msdyn_helplink' },
			msdyn_Level: { a: 'msdyn_level' },
			msdyn_Line: { a: 'msdyn_line' },
			msdyn_Member: { a: 'msdyn_member' },
			msdyn_Message: { a: 'msdyn_message' },
			msdyn_MessageArguments: { a: 'msdyn_messagearguments' },
			msdyn_MessageId: { a: 'msdyn_messageid' },
			msdyn_Module: { a: 'msdyn_module' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_RepairIssueType: { a: 'msdyn_repairissuetype' },
			msdyn_ReturnStatus: { a: 'msdyn_returnstatus' },
			msdyn_RuleId: { a: 'msdyn_ruleid' },
			msdyn_RuleReferenceUri: { a: 'msdyn_rulereferenceuri' },
			msdyn_Severity: { a: 'msdyn_severity' },
			msdyn_Snippet: { a: 'msdyn_snippet' },
			msdyn_SolutionHealthMessage: { a: 'msdyn_solutionhealthmessage' },
			msdyn_Type: { a: 'msdyn_type' },
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
		var msdyn_analysisresult = {};
		msdyn_analysisresult.ODataEntity = e;
		msdyn_analysisresult.FormattedValue = {};
		for (var field in _msdyn_analysisresult) {
			var a = _msdyn_analysisresult[field].a;
			var b = _msdyn_analysisresult[field].b;
			var c = _msdyn_analysisresult[field].c;
			var d = _msdyn_analysisresult[field].d;
			var g = _msdyn_analysisresult[field].g;
			var r = _msdyn_analysisresult[field].r;
			webApiField(msdyn_analysisresult, field, e, a, b, c, d, r, u, g);
		}
		msdyn_analysisresult.Entity = u;
		msdyn_analysisresult.EntityName = 'msdyn_analysisresult';
		msdyn_analysisresult.EntityCollectionName = 'msdyn_analysisresults';
		msdyn_analysisresult['@odata.etag'] = e['@odata.etag'];
		msdyn_analysisresult.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_analysisresult.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_analysisresult;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysisresult = {
		msdyn_AnalysisComponentType : {
			Tinh_trang_Thanh_phan: 192350001,
			Tinh_trang_To_chuc: 192350000
		},
		msdyn_Category : {
			Bao_mat: 192350003,
			Di_chuyen_Truc_tuyen: 192350005,
			Hieu_suat: 192350000,
			Kha_nang_duy_tri: 192350006,
			Kha_nang_ho_tro: 192350007,
			Kha_nang_truy_nhap: 192350008,
			Licensing: 192350009,
			San_sang_Nang_cap: 192350001,
			Su_dung: 192350002,
			Thiet_ke: 192350004
		},
		msdyn_ComponentType : {
			Cau_hinh: 192350002,
			Phan_bo_tro: 192350001,
			Tai_nguyen_web: 192350000
		},
		msdyn_Level : {
			Canh_bao: 192350001,
			Loi: 192350000
		},
		msdyn_ReturnStatus : {
			Canh_bao: 192350004,
			Da_giai_quyet: 192350003,
			Dat: 192350000,
			Goi_y: 192350006,
			Loi: 192350005,
			Loi_Cau_hinh: 192350002,
			That_bai: 192350001
		},
		msdyn_Severity : {
			Cao: 192350002,
			Nghiem_trong: 192350003,
			Thap: 192350000,
			Trung_binh: 192350001
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
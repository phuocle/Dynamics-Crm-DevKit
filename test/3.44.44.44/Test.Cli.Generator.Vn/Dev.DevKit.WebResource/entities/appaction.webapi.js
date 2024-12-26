'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.appactionApi = function (e) {
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
		var _appaction = {
			appactionId: { a: 'appactionid' },
			AppModuleId: { b: 'appmoduleid', a: '_appmoduleid_value', c: 'appmodules', d: 'appmodule' },
			ButtonAccessibilityText: { a: 'buttonaccessibilitytext' },
			ButtonLabelText: { a: 'buttonlabeltext' },
			ButtonSequencePriority: { a: 'buttonsequencepriority' },
			ButtonTooltipDescription: { a: 'buttontooltipdescription' },
			ButtonTooltipTitle: { a: 'buttontooltiptitle' },
			ClientType: { a: 'clienttype', g: true },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			Context: { a: 'context' },
			ContextEntity: { b: 'contextentity', a: '_contextentity_value', c: 'entities', d: 'entity' },
			ContextValue: { a: 'contextvalue' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			FontIcon: { a: 'fonticon' },
			GroupTitle: { a: 'grouptitle' },
			Hidden: { a: 'hidden' },
			IconWebResourceId: { b: 'iconwebresourceid', a: '_iconwebresourceid_value', c: 'webresources', d: 'webresource' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsDisabled: { a: 'isdisabled' },
			isGroupTitleHidden: { a: 'isgrouptitlehidden' },
			IsManaged: { a: 'ismanaged', r: true },
			Location: { a: 'location' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OnClickEventFormulaComponentLibrary: { a: 'onclickeventformulacomponentlibrary' },
			OnClickEventFormulaComponentLibraryId: { b: 'onclickeventformulacomponentlibraryid', a: '_onclickeventformulacomponentlibraryid_value', c: 'canvasapps', d: 'canvasapp' },
			OnClickEventFormulaComponentName: { a: 'onclickeventformulacomponentname' },
			OnClickEventFormulaFunctionName: { a: 'onclickeventformulafunctionname' },
			OnClickEventJavaScriptFunctionName: { a: 'onclickeventjavascriptfunctionname' },
			OnClickEventJavaScriptParameters: { a: 'onclickeventjavascriptparameters' },
			OnClickEventJavaScriptWebResourceId: { b: 'onclickeventjavascriptwebresourceid', a: '_onclickeventjavascriptwebresourceid_value', c: 'webresources', d: 'webresource' },
			OnClickEventType: { a: 'onclickeventtype' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			Origin: { a: 'origin' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			ParentAppActionId: { b: 'parentappactionid', a: '_parentappactionid_value', c: 'appactions', d: 'appaction' },
			Sequence: { a: 'sequence' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Type: { a: 'type' },
			UniqueName: { a: 'uniquename' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			VisibilityFormulaComponentLibrary: { a: 'visibilityformulacomponentlibrary' },
			VisibilityFormulaComponentLibraryId: { b: 'visibilityformulacomponentlibraryid', a: '_visibilityformulacomponentlibraryid_value', c: 'canvasapps', d: 'canvasapp' },
			VisibilityFormulaComponentName: { a: 'visibilityformulacomponentname' },
			VisibilityFormulaFunctionName: { a: 'visibilityformulafunctionname' },
			VisibilityType: { a: 'visibilitytype' }
		};
		if (e === undefined) e = {};
		var u = {};
		var appaction = {};
		appaction.ODataEntity = e;
		appaction.FormattedValue = {};
		for (var field in _appaction) {
			var a = _appaction[field].a;
			var b = _appaction[field].b;
			var c = _appaction[field].c;
			var d = _appaction[field].d;
			var g = _appaction[field].g;
			var r = _appaction[field].r;
			webApiField(appaction, field, e, a, b, c, d, r, u, g);
		}
		appaction.Entity = u;
		appaction.EntityName = 'appaction';
		appaction.EntityCollectionName = 'appactions';
		appaction['@odata.etag'] = e['@odata.etag'];
		appaction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appaction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appaction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.appaction = {
		ClientType : {
			Thiet_bi_di_dong: 1,
			Trinh_duyet: 0,
			Ung_dung_thu: 2
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		Context : {
			Tat_ca: 0,
			Thuc_the: 1
		},
		Location : {
			Bang_thong_tin: 6,
			Bieu_mau: 0,
			Bieu_mau_nhanh: 4,
			Luoi_chinh: 1,
			Luoi_con: 2,
			Luoi_lien_ket: 3,
			Tieu_de_chung: 5
		},
		OnClickEventType : {
			Cong_thuc: 1,
			JavaScript: 2,
			Khong_co: 0
		},
		Origin : {
			Da_di_chuyen: 1,
			Da_di_chuyen_o_cap_do_nang_cao: 2,
			Mac_dinh: 0
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		Type : {
			Nhom: 3,
			Nut_chia_tach: 2,
			Nut_tha_xuong: 1,
			Nut_tieu_chuan: 0
		},
		VisibilityType : {
			Cong_thuc: 1,
			Khong_co: 0,
			Quy_tac_co_dien: 2
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
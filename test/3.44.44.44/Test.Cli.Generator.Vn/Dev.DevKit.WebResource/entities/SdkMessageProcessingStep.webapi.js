'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SdkMessageProcessingStepApi = function (e) {
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
		var _sdkmessageprocessingstep = {
			AsyncAutoDelete: { a: 'asyncautodelete' },
			CanBeBypassed: { a: 'canbebypassed' },
			CanUseReadOnlyConnection: { a: 'canusereadonlyconnection' },
			Category: { a: 'category' },
			ComponentState: { a: 'componentstate', r: true },
			Configuration: { a: 'configuration' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomizationLevel: { a: 'customizationlevel', r: true },
			Description: { a: 'description' },
			EnablePluginProfiler: { a: 'enablepluginprofiler' },
			EventExpander: { a: 'eventexpander' },
			eventhandler_plugintype: { b: 'eventhandler_plugintype', a: '_eventhandler_value', c: 'plugintypes', d: 'plugintype' },
			eventhandler_serviceendpoint: { b: 'eventhandler_serviceendpoint', a: '_eventhandler_value', c: 'serviceendpoints', d: 'serviceendpoint' },
			FilteringAttributes: { a: 'filteringattributes' },
			FxExpressionId: { b: 'fxexpressionid', a: '_fxexpressionid_value', c: 'fxexpressions', d: 'fxexpression' },
			ImpersonatingUserId: { b: 'impersonatinguserid', a: '_impersonatinguserid_value', c: 'systemusers', d: 'systemuser' },
			IntroducedVersion: { a: 'introducedversion' },
			InvocationSource: { a: 'invocationsource' },
			IsCustomizable: { a: 'iscustomizable' },
			IsHidden: { a: 'ishidden' },
			IsManaged: { a: 'ismanaged', r: true },
			Mode: { a: 'mode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			PluginTypeId: { b: 'plugintypeid', a: '_plugintypeid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter' },
			PowerfxRuleId: { b: 'powerfxruleid', a: '_powerfxruleid_value', c: 'powerfxrules', d: 'powerfxrule' },
			Rank: { a: 'rank' },
			RuntimeIntegrationProperties: { a: 'runtimeintegrationproperties' },
			SdkMessageFilterId: { b: 'sdkmessagefilterid', a: '_sdkmessagefilterid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter' },
			SdkMessageId: { b: 'sdkmessageid', a: '_sdkmessageid_value', c: 'sdkmessages', d: 'sdkmessage' },
			SdkMessageProcessingStepId: { a: 'sdkmessageprocessingstepid' },
			SdkMessageProcessingStepIdUnique: { a: 'sdkmessageprocessingstepidunique', r: true },
			SdkMessageProcessingStepSecureConfigId: { b: 'sdkmessageprocessingstepsecureconfigid', a: '_sdkmessageprocessingstepsecureconfigid_value', c: 'sdkmessageprocessingstepsecureconfigs', d: 'sdkmessageprocessingstepsecureconfig' },
			SolutionId: { a: 'solutionid', r: true },
			Stage: { a: 'stage' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SupportedDeployment: { a: 'supporteddeployment' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var sdkmessageprocessingstep = {};
		sdkmessageprocessingstep.ODataEntity = e;
		sdkmessageprocessingstep.FormattedValue = {};
		for (var field in _sdkmessageprocessingstep) {
			var a = _sdkmessageprocessingstep[field].a;
			var b = _sdkmessageprocessingstep[field].b;
			var c = _sdkmessageprocessingstep[field].c;
			var d = _sdkmessageprocessingstep[field].d;
			var g = _sdkmessageprocessingstep[field].g;
			var r = _sdkmessageprocessingstep[field].r;
			webApiField(sdkmessageprocessingstep, field, e, a, b, c, d, r, u, g);
		}
		sdkmessageprocessingstep.Entity = u;
		sdkmessageprocessingstep.EntityName = 'sdkmessageprocessingstep';
		sdkmessageprocessingstep.EntityCollectionName = 'sdkmessageprocessingsteps';
		sdkmessageprocessingstep['@odata.etag'] = e['@odata.etag'];
		sdkmessageprocessingstep.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sdkmessageprocessingstep.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sdkmessageprocessingstep;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SdkMessageProcessingStep = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		EventHandlerTypeCode : {
		},
		InvocationSource : {
			Ma_Cha: 0,
			Muc_con: 1
		},
		Mode : {
			Dong_bo: 0,
			Khong_dong_bo: 1
		},
		Stage : {
			Giai_doan_Hau_cam_ket_duoc_bat_dau_sau_khi_cam_ket_giao_dich_Chi_su_dung_noi_bo: 90,
			Giai_doan_Tien_cam_ket_duoc_bat_dau_truoc_khi_cam_ket_giao_dich_Chi_su_dung_noi_bo: 80,
			Sau_khi_thao_tac: 40,
			Sau_khi_thao_tac_Khong_con_dung: 50,
			Sau_khi_thao_thac_cuoi_cung_Chi_su_dung_noi_bo: 55,
			Sau_khi_thao_thac_noi_bo_sau_bo_tro_ngoai_Chi_su_dung_noi_bo: 45,
			Sau_khi_thao_thac_noi_bo_truoc_bo_tro_ngoai_Chi_su_dung_noi_bo: 35,
			Thao_thac_chinh_Chi_su_dung_noi_bo: 30,
			Truoc_khi_thao_tac: 20,
			Truoc_khi_thao_thac_ban_dau_Chi_su_dung_noi_bo: 5,
			Truoc_khi_thao_thac_noi_bo_sau_bo_tro_ngoai_Chi_su_dung_noi_bo: 25,
			Truoc_khi_thao_thac_noi_bo_truoc_bo_tro_ngoai_Chi_su_dung_noi_bo: 15,
			Truoc_khi_xac_thuc: 10
		},
		StateCode : {
			Da_bat: 0,
			Da_tat: 1
		},
		StatusCode : {
			Da_bat: 1,
			Da_tat: 2
		},
		SupportedDeployment : {
			Ca_hai: 2,
			Chi_danh_cho_Microsoft_Dynamics_365_Client_for_Outlook: 1,
			Duy_nhat_may_chu: 0
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
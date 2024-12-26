'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.WorkflowDependencyApi = function (e) {
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
		var _workflowdependency = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomEntityName: { a: 'customentityname' },
			DependentAttributeName: { a: 'dependentattributename' },
			DependentEntityName: { a: 'dependententityname' },
			EntityAttributes: { a: 'entityattributes' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true },
			ParameterName: { a: 'parametername' },
			ParameterType: { a: 'parametertype' },
			RelatedAttributeName: { a: 'relatedattributename' },
			RelatedEntityName: { a: 'relatedentityname' },
			SdkMessageId: { b: 'sdkmessageid', a: '_sdkmessageid_value', c: 'sdkmessages', d: 'sdkmessage' },
			Type: { a: 'type' },
			VersionNumber: { a: 'versionnumber', r: true },
			WorkflowDependencyId: { a: 'workflowdependencyid' },
			WorkflowId: { b: 'workflowid', a: '_workflowid_value', c: 'workflows', d: 'workflow' }
		};
		if (e === undefined) e = {};
		var u = {};
		var workflowdependency = {};
		workflowdependency.ODataEntity = e;
		workflowdependency.FormattedValue = {};
		for (var field in _workflowdependency) {
			var a = _workflowdependency[field].a;
			var b = _workflowdependency[field].b;
			var c = _workflowdependency[field].c;
			var d = _workflowdependency[field].d;
			var g = _workflowdependency[field].g;
			var r = _workflowdependency[field].r;
			webApiField(workflowdependency, field, e, a, b, c, d, r, u, g);
		}
		workflowdependency.Entity = u;
		workflowdependency.EntityName = 'workflowdependency';
		workflowdependency.EntityCollectionName = 'workflowdependencies';
		workflowdependency['@odata.etag'] = e['@odata.etag'];
		workflowdependency.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		workflowdependency.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return workflowdependency;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.WorkflowDependency = {
		Type : {
			Bo_duoi_sdk: 1,
			Dinh_nghia_thuc_the_tuy_chinh_ma_quy_trinh_lam_viec_phu_thuoc_vao_do: 7,
			Dinh_nghia_thuoc_tinh_ma_quy_trinh_lam_viec_phu_thuoc_vao_do: 8,
			Tham_so_cuc_bo: 2,
			Thuc_the_chinh: 3,
			Thuc_the_chinh_sau_thao_tac_SDK: 5,
			Thuc_the_chinh_truoc_thao_tac_SDK: 4,
			Thuc_the_doi_so_ma_quy_trinh_lam_viec_phu_thuoc_vao_do: 9,
			Thuc_the_lien_quan: 6
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
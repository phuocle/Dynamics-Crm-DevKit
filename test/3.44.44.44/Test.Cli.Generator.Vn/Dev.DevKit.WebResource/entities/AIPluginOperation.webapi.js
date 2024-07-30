'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AIPluginOperationApi = function (e) {
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
		var _aipluginoperation = {
			AIPlugin: { b: 'AIPlugin', a: '_aiplugin_value', c: 'aiplugins', d: 'aiplugin' },
			AIPluginOperationExportKey: { a: 'aipluginoperationexportkey' },
			AIPluginOperationId: { a: 'aipluginoperationid' },
			AIPluginOperationResponseTemplate: { b: 'aipluginoperationresponsetemplate', a: '_aipluginoperationresponsetemplate_value', c: 'aipluginoperationresponsetemplates', d: 'aipluginoperationresponsetemplate' },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomAPI: { b: 'customapi', a: '_customapi_value', c: 'customapis', d: 'customapi' },
			Description: { a: 'description' },
			DVFileSearch: { b: 'dvfilesearch', a: '_dvfilesearch_value', c: 'dvfilesearchs', d: 'dvfilesearch' },
			DVTableSearch: { b: 'dvtablesearch', a: '_dvtablesearch_value', c: 'dvtablesearchs', d: 'dvtablesearch' },
			Entity2: { b: 'entity', a: '_entity_value', c: 'entities', d: 'entity' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsConsequential: { a: 'isconsequential' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AIModel: { b: 'msdyn_AIModel', a: '_msdyn_aimodel_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			Name: { a: 'name' },
			OperationId: { a: 'operationid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ReferencedOperationId: { a: 'referencedoperationid' },
			ResponseSemantics: { a: 'responsesemantics' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			Workflow: { b: 'workflow', a: '_workflow_value', c: 'workflows', d: 'workflow' }
		};
		if (e === undefined) e = {};
		var u = {};
		var aipluginoperation = {};
		aipluginoperation.ODataEntity = e;
		aipluginoperation.FormattedValue = {};
		for (var field in _aipluginoperation) {
			var a = _aipluginoperation[field].a;
			var b = _aipluginoperation[field].b;
			var c = _aipluginoperation[field].c;
			var d = _aipluginoperation[field].d;
			var g = _aipluginoperation[field].g;
			var r = _aipluginoperation[field].r;
			webApiField(aipluginoperation, field, e, a, b, c, d, r, u, g);
		}
		aipluginoperation.Entity = u;
		aipluginoperation.EntityName = 'aipluginoperation';
		aipluginoperation.EntityCollectionName = 'aipluginoperations';
		aipluginoperation['@odata.etag'] = e['@odata.etag'];
		aipluginoperation.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		aipluginoperation.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return aipluginoperation;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AIPluginOperation = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
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
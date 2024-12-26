'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SourceControlComponentApi = function (e) {
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
		var _sourcecontrolcomponent = {
			Action: { a: 'action' },
			ComponentDisplayName: { a: 'componentdisplayname' },
			ComponentId: { a: 'componentid' },
			ComponentPath: { a: 'componentpath' },
			ComponentType: { a: 'componenttype' },
			ComponentTypeName: { a: 'componenttypename' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCommitted: { a: 'iscommitted' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			SolutionComponentState: { a: 'solutioncomponentstate' },
			SourceControlComponentId: { a: 'sourcecontrolcomponentid' },
			SourceControlComponentPayloadId: { b: 'SourceControlComponentPayloadId', a: '_sourcecontrolcomponentpayloadid_value', c: 'sourcecontrolcomponentpayloads', d: 'sourcecontrolcomponentpayload' },
			TTLInSeconds: { a: 'ttlinseconds' },
			UserAction: { a: 'useraction' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var sourcecontrolcomponent = {};
		sourcecontrolcomponent.ODataEntity = e;
		sourcecontrolcomponent.FormattedValue = {};
		for (var field in _sourcecontrolcomponent) {
			var a = _sourcecontrolcomponent[field].a;
			var b = _sourcecontrolcomponent[field].b;
			var c = _sourcecontrolcomponent[field].c;
			var d = _sourcecontrolcomponent[field].d;
			var g = _sourcecontrolcomponent[field].g;
			var r = _sourcecontrolcomponent[field].r;
			webApiField(sourcecontrolcomponent, field, e, a, b, c, d, r, u, g);
		}
		sourcecontrolcomponent.Entity = u;
		sourcecontrolcomponent.EntityName = 'sourcecontrolcomponent';
		sourcecontrolcomponent.EntityCollectionName = 'sourcecontrolcomponents';
		sourcecontrolcomponent['@odata.etag'] = e['@odata.etag'];
		sourcecontrolcomponent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sourcecontrolcomponent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sourcecontrolcomponent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SourceControlComponent = {
		Action : {
			Conflict: 3,
			None: 0,
			Pull: 2,
			Push: 1
		},
		SolutionComponentState : {
			Create: 0,
			Delete: 2,
			Update: 1
		},
		UserAction : {
			None: 0,
			Pull: 2,
			Push: 1
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
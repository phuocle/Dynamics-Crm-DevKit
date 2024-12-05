'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.EventExpanderBreadcrumbApi = function (e) {
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
		var _eventexpanderbreadcrumb = {
			CompletedOn_UtcDateAndTime: { a: 'completedon' },
			CorrelationId: { a: 'correlationid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser' },
			CreatedOn_UtcDateAndTime: { a: 'createdon' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Data: { a: 'data' },
			DataBlobId: { a: 'datablobid' },
			ErrorCode: { a: 'errorcode' },
			EventExpanderBreadcrumbId: { a: 'eventexpanderbreadcrumbid' },
			ExpanderStartTime_UtcDateAndTime: { a: 'expanderstarttime' },
			FriendlyMessage: { a: 'friendlymessage' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OperationType: { a: 'operationtype' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			PostponeUntil_UtcDateAndTime: { a: 'postponeuntil' },
			RetryCount: { a: 'retrycount' },
			StartedOn_UtcDateAndTime: { a: 'startedon' },
			StateCode: { a: 'breadcrumbstatecode' },
			StatusCode: { a: 'breadcrumbstatuscode' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true },
			Workload: { a: 'workload' }
		};
		if (e === undefined) e = {};
		var u = {};
		var eventexpanderbreadcrumb = {};
		eventexpanderbreadcrumb.ODataEntity = e;
		eventexpanderbreadcrumb.FormattedValue = {};
		for (var field in _eventexpanderbreadcrumb) {
			var a = _eventexpanderbreadcrumb[field].a;
			var b = _eventexpanderbreadcrumb[field].b;
			var c = _eventexpanderbreadcrumb[field].c;
			var d = _eventexpanderbreadcrumb[field].d;
			var g = _eventexpanderbreadcrumb[field].g;
			var r = _eventexpanderbreadcrumb[field].r;
			webApiField(eventexpanderbreadcrumb, field, e, a, b, c, d, r, u, g);
		}
		eventexpanderbreadcrumb.Entity = u;
		eventexpanderbreadcrumb.EntityName = 'eventexpanderbreadcrumb';
		eventexpanderbreadcrumb.EntityCollectionName = 'eventexpanderbreadcrumbs';
		eventexpanderbreadcrumb['@odata.etag'] = e['@odata.etag'];
		eventexpanderbreadcrumb.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		eventexpanderbreadcrumb.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return eventexpanderbreadcrumb;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EventExpanderBreadcrumb = {
		StateCode : {
			Completed: 3,
			Locked: 2,
			Ready: 0
		},
		StatusCode : {
			Canceled: 32,
			Canceling: 22,
			Failed: 31,
			In_Progress: 20,
			Succeeded: 30,
			Waiting_For_Resources: 0
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
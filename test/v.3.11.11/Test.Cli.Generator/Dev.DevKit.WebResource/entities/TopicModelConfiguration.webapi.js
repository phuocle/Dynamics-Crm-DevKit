'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.TopicModelConfigurationApi = function (e) {
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
		var _topicmodelconfiguration = {
			ComponentState: { a: 'componentstate', r: true },
			DataFilter: { a: 'datafilter' },
			Description: { a: 'description' },
			FetchXmlList: { a: 'fetchxmllist' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsManaged: { a: 'ismanaged', r: true },
			MinRelevanceScore: { a: 'minrelevancescore' },
			Name: { a: 'name' },
			NgramSize: { a: 'ngramsize' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			SolutionId: { a: 'solutionid', r: true },
			StopWords: { a: 'stopwords' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeFilter: { a: 'timefilter' },
			TimeFilterDuration: { a: 'timefilterduration' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TopicModelConfigurationId: { a: 'topicmodelconfigurationid' },
			TopicModelConfigurationIdUnique: { a: 'topicmodelconfigurationidunique', r: true },
			TopicModelId: { b: 'topicmodelid', a: '_topicmodelid_value', c: 'topicmodels', d: 'topicmodel' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var topicmodelconfiguration = {};
		topicmodelconfiguration.ODataEntity = e;
		topicmodelconfiguration.FormattedValue = {};
		for (var field in _topicmodelconfiguration) {
			var a = _topicmodelconfiguration[field].a;
			var b = _topicmodelconfiguration[field].b;
			var c = _topicmodelconfiguration[field].c;
			var d = _topicmodelconfiguration[field].d;
			var g = _topicmodelconfiguration[field].g;
			var r = _topicmodelconfiguration[field].r;
			webApiField(topicmodelconfiguration, field, e, a, b, c, d, r, u, g);
		}
		topicmodelconfiguration.Entity = u;
		topicmodelconfiguration.EntityName = 'topicmodelconfiguration';
		topicmodelconfiguration.EntityCollectionName = 'topicmodelconfigurations';
		topicmodelconfiguration['@odata.etag'] = e['@odata.etag'];
		topicmodelconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		topicmodelconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return topicmodelconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.TopicModelConfiguration = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		SourceEntity : {
			Incident: 112
		},
		TimeFilter : {
			Last_N_Days: 1,
			Last_N_Weeks: 2
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
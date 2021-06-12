'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.TopicModelExecutionHistoryApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var topicmodelexecutionhistory = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ErrorDetails: { a: 'azuresyncerrormessage' },
			FetchXmlList: { a: 'fetchxmllist' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsTestExecution: { a: 'istestexecution' },
			MaxTopics: { a: 'maxtopics' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NumberOfTopicsFound: { a: 'numberoftopicsfound' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			RecordCorrelationId: { a: 'recordcorrelationid' },
			RecordsProcessed: { a: 'recordsprocessed' },
			StartTime_UtcDateAndTime: { a: 'starttime' },
			Status: { a: 'status' },
			StatusReason: { a: 'statusreason' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TopicModelConfigurationId: { b: 'topicmodelconfigurationid', a: '_topicmodelconfigurationid_value', c: 'topicmodelconfigurations', d: 'topicmodelconfiguration' },
			TopicModelExecutionHistoryId: { a: 'topicmodelexecutionhistoryid' },
			TopicModelId: { b: 'topicmodelid', a: '_topicmodelid_value', c: 'topicmodels', d: 'topicmodel' },
			TotalTime: { a: 'totaltime' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in topicmodelexecutionhistory) {
			var a = topicmodelexecutionhistory[field].a;
			var b = topicmodelexecutionhistory[field].b;
			var c = topicmodelexecutionhistory[field].c;
			var d = topicmodelexecutionhistory[field].d;
			var g = topicmodelexecutionhistory[field].g;
			var r = topicmodelexecutionhistory[field].r;
			topicmodelexecutionhistory[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		topicmodelexecutionhistory.Entity = u;
		topicmodelexecutionhistory.EntityName = 'topicmodelexecutionhistory';
		topicmodelexecutionhistory.EntityCollectionName = 'topicmodelexecutionhistories';
		topicmodelexecutionhistory['@odata.etag'] = e['@odata.etag'];
		topicmodelexecutionhistory.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		topicmodelexecutionhistory.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return topicmodelexecutionhistory;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.TopicModelExecutionHistory = {
		Status : {
			Failed: 4,
			In_progress: 2,
			Queued: 1,
			Success: 3
		},
		StatusReason : {
			Analysis_failed: 6,
			Analyzing_topic_analysis_execution: 3,
			Connection_failed: 7,
			Synchronization_failed: 5,
			Topic_analysis_execution_is_queued: 1,
			Topic_analysis_execution_is_synchronizing: 2,
			Topic_analysis_has_built: 4
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
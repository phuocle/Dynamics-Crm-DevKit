'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.MailboxStatisticsApi = function (e) {
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
		var mailboxstatistics = {
			AsyncEventId: { a: 'asynceventid', r: true },
			CrmItemsBacklog: { a: 'crmitemsbacklog', r: true },
			IndividualStepDurations: { a: 'individualstepdurations', r: true },
			ItemsFailed: { a: 'itemsfailed', r: true },
			ItemsProcessed: { a: 'itemsprocessed', r: true },
			MachineName: { a: 'machinename', r: true },
			MailboxId: { b: 'mailboxid', a: '_mailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			MailboxProcessCompletedOn_UtcDateAndTime: { a: 'mailboxprocesscompletedon', r: true },
			MailboxProcessScheduledOn_UtcDateAndTime: { a: 'mailboxprocessscheduledon', r: true },
			MailboxProcessStartedOn_UtcDateAndTime: { a: 'mailboxprocessstartedon', r: true },
			MailboxStatisticsId: { a: 'mailboxstatisticsid', r: true },
			OperationTypeId: { a: 'operationtypeid', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			ProcessResult: { a: 'processresult', r: true },
			ProcessTimeIntervalInMinutes: { a: 'processtimeintervalinminutes', r: true },
			ScheduledTimeIntervalInMinutes: { a: 'scheduledtimeintervalinminutes', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in mailboxstatistics) {
			var a = mailboxstatistics[field].a;
			var b = mailboxstatistics[field].b;
			var c = mailboxstatistics[field].c;
			var d = mailboxstatistics[field].d;
			var g = mailboxstatistics[field].g;
			var r = mailboxstatistics[field].r;
			mailboxstatistics[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		mailboxstatistics.Entity = u;
		mailboxstatistics.EntityName = 'mailboxstatistics';
		mailboxstatistics.EntityCollectionName = 'mailboxstatistics';
		mailboxstatistics['@odata.etag'] = e['@odata.etag'];
		mailboxstatistics.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mailboxstatistics.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mailboxstatistics;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MailboxStatistics = {
		OperationTypeId : {
			ACT: 2,
			Incoming_Email: 0,
			Outgoing_Email: 1
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
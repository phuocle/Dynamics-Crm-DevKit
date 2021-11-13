'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SLAKPIInstanceApi = function (e) {
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
		var slakpiinstance = {
			ApplicableFromValue_UtcDateAndTime: { a: 'applicablefromvalue' },
			ComputedFailureTime_UtcDateAndTime: { a: 'computedfailuretime' },
			ComputedWarningTime_UtcDateAndTime: { a: 'computedwarningtime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ElapsedTime: { a: 'elapsedtime' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FailureTime_UtcDateAndTime: { a: 'failuretime' },
			LastResumeTime_UtcDateAndTime: { a: 'lastresumetime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ActionExecutionStatus: { a: 'msdyn_actionexecutionstatus' },
			msdyn_calendarid: { a: 'msdyn_calendarid' },
			msdyn_prevslakpiinstanceid: { a: 'msdyn_prevslakpiinstanceid' },
			msdyn_slaitemid: { b: 'msdyn_slaitemid', a: '_msdyn_slaitemid_value', c: 'slaitems', d: 'slaitem' },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit' },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: '', d: '' },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: '', d: '' },
			PausedOn_UtcDateAndTime: { a: 'pausedon' },
			regarding_account: { b: 'regarding_account', a: '_regarding_value', c: 'accounts', d: 'account' },
			regarding_activitypointer: { b: 'regarding_activitypointer', a: '_regarding_value', c: 'activitypointers', d: 'activitypointer' },
			regarding_appointment: { b: 'regarding_appointment', a: '_regarding_value', c: 'appointments', d: 'appointment' },
			regarding_contact: { b: 'regarding_contact', a: '_regarding_value', c: 'contacts', d: 'contact' },
			regarding_email: { b: 'regarding_email', a: '_regarding_value', c: 'emails', d: 'email' },
			regarding_fax: { b: 'regarding_fax', a: '_regarding_value', c: 'faxes', d: 'fax' },
			regarding_letter: { b: 'regarding_letter', a: '_regarding_value', c: 'letters', d: 'letter' },
			regarding_phonecall: { b: 'regarding_phonecall', a: '_regarding_value', c: 'phonecalls', d: 'phonecall' },
			regarding_socialactivity: { b: 'regarding_socialactivity', a: '_regarding_value', c: 'socialactivities', d: 'socialactivity' },
			regarding_task: { b: 'regarding_task', a: '_regarding_value', c: 'tasks', d: 'task' },
			RegardingEntityID: { a: 'regardingentityid' },
			RegardingIdName: { a: 'regardingidname', r: true },
			SLAKPIInstanceId: { a: 'slakpiinstanceid' },
			Status: { a: 'status' },
			SucceededOn_UtcDateAndTime: { a: 'succeededon' },
			SuccessCheckedAt_TimezoneDateAndTime: { a: 'successcheckedat' },
			TerminalStateReached: { a: 'terminalstatereached' },
			TerminalStateTime_UtcDateAndTime: { a: 'terminalstatetime' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true },
			WarningTime_UtcDateAndTime: { a: 'warningtime' },
			WarningTimeReached: { a: 'warningtimereached' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in slakpiinstance) {
			var a = slakpiinstance[field].a;
			var b = slakpiinstance[field].b;
			var c = slakpiinstance[field].c;
			var d = slakpiinstance[field].d;
			var g = slakpiinstance[field].g;
			var r = slakpiinstance[field].r;
			slakpiinstance[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		slakpiinstance.Entity = u;
		slakpiinstance.EntityName = 'slakpiinstance';
		slakpiinstance.EntityCollectionName = 'slakpiinstances';
		slakpiinstance['@odata.etag'] = e['@odata.etag'];
		slakpiinstance.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		slakpiinstance.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return slakpiinstance;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SLAKPIInstance = {
		msdyn_ActionExecutionStatus : {
			None: 0,
			Success: 2,
			Warning: 1
		},
		Status : {
			Canceled: 5,
			In_Progress: 0,
			Nearing_Noncompliance: 2,
			Noncompliant: 1,
			Paused: 3,
			Succeeded: 4
		},
		WarningTimeReached : {
			No: 0,
			Yes: 1
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
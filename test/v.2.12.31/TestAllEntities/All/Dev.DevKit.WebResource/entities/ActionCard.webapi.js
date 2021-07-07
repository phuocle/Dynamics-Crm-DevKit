'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ActionCardApi = function (e) {
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
		var actioncard = {
			ActionCardId: { a: 'actioncardid' },
			CardType: { a: 'cardtype' },
			CardTypeId: { b: 'cardtypeid', a: '_cardtypeid_value', c: 'cardtypes', d: 'cardtype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Data: { a: 'data' },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpiryDate_UtcDateAndTime: { a: 'expirydate' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentRegardingObjectId: { b: 'parentregardingobjectid', a: '_parentregardingobjectid_value', c: '', d: '' },
			ParentRegardingObjectIdData: { a: 'parentregardingobjectiddata' },
			Priority: { a: 'priority' },
			RecordId: { b: 'recordid', a: '_recordid_value', c: '', d: '' },
			RecordIdObjectTypeCode2: { a: 'recordidobjecttypecode2' },
			ReferenceTokens: { a: 'referencetokens' },
			regardingobjectid_account_actioncard: { b: 'regardingobjectid_account_actioncard', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_appointment_actioncard: { b: 'regardingobjectid_appointment_actioncard', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_contact_actioncard: { b: 'regardingobjectid_contact_actioncard', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_email_actioncard: { b: 'regardingobjectid_email_actioncard', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_fax_actioncard: { b: 'regardingobjectid_fax_actioncard', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_letter_actioncard: { b: 'regardingobjectid_letter_actioncard', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_phonecall_actioncard: { b: 'regardingobjectid_phonecall_actioncard', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_recurringappointmentmaster_actioncard: { b: 'regardingobjectid_recurringappointmentmaster_actioncard', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_task_actioncard: { b: 'regardingobjectid_task_actioncard', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
			Source: { a: 'source' },
			StartDate_UtcDateAndTime: { a: 'startdate' },
			State: { a: 'state' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true },
			Visibility: { a: 'visibility' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in actioncard) {
			var a = actioncard[field].a;
			var b = actioncard[field].b;
			var c = actioncard[field].c;
			var d = actioncard[field].d;
			var g = actioncard[field].g;
			var r = actioncard[field].r;
			actioncard[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		actioncard.Entity = u;
		actioncard.EntityName = 'actioncard';
		actioncard.EntityCollectionName = 'actioncard';
		actioncard['@odata.etag'] = e['@odata.etag'];
		actioncard.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		actioncard.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return actioncard;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ActionCard = {
		Source : {
			CRM: 1,
			Exchange: 2
		},
		State : {
			Active: 0,
			Completed: 2,
			Dismissed: 1
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
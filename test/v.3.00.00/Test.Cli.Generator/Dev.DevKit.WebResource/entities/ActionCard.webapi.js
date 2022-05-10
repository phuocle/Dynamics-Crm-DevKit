'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ActionCardApi = function (e) {
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
		var _actioncard = {
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
			msdyn_actioncardregardingid: { a: 'msdyn_actioncardregardingid' },
			msdyn_regardingobjectid: { a: 'msdyn_regardingobjectid' },
			msdyn_regardingobjectlogicalname: { a: 'msdyn_regardingobjectlogicalname' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentRegardingObjectIdData: { a: 'parentregardingobjectiddata' },
			Priority: { a: 'priority' },
			RecordIdObjectTypeCode2: { a: 'recordidobjecttypecode2' },
			ReferenceTokens: { a: 'referencetokens' },
			regardingobjectid_account_actioncard: { b: 'regardingobjectid_account_actioncard', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_appointment_actioncard: { b: 'regardingobjectid_appointment_actioncard', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_chat: { b: 'regardingobjectid_chat', a: '_regardingobjectid_value', c: 'chats', d: 'chat' },
			regardingobjectid_contact_actioncard: { b: 'regardingobjectid_contact_actioncard', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_email_actioncard: { b: 'regardingobjectid_email_actioncard', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_fax_actioncard: { b: 'regardingobjectid_fax_actioncard', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_incident_actioncard: { b: 'regardingobjectid_incident_actioncard', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_lead_actioncard: { b: 'regardingobjectid_lead_actioncard', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_letter_actioncard: { b: 'regardingobjectid_letter_actioncard', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_msdyn_approval: { b: 'regardingobjectid_msdyn_approval', a: '_regardingobjectid_value', c: 'msdyn_approvals', d: 'msdyn_approval' },
			regardingobjectid_msdyn_bookingalert: { b: 'regardingobjectid_msdyn_bookingalert', a: '_regardingobjectid_value', c: 'msdyn_bookingalerts', d: 'msdyn_bookingalert' },
			regardingobjectid_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			regardingobjectid_msdyn_ocoutboundmessage: { b: 'regardingobjectid_msdyn_ocoutboundmessage', a: '_regardingobjectid_value', c: 'msdyn_ocoutboundmessages', d: 'msdyn_ocoutboundmessage' },
			regardingobjectid_msdyn_ocsession: { b: 'regardingobjectid_msdyn_ocsession', a: '_regardingobjectid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			regardingobjectid_msfp_alert: { b: 'regardingobjectid_msfp_alert', a: '_regardingobjectid_value', c: 'msfp_alerts', d: 'msfp_alert' },
			regardingobjectid_msfp_surveyinvite: { b: 'regardingobjectid_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			regardingobjectid_msfp_surveyresponse: { b: 'regardingobjectid_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			regardingobjectid_opportunity_actioncard: { b: 'regardingobjectid_opportunity_actioncard', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_phonecall_actioncard: { b: 'regardingobjectid_phonecall_actioncard', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_recurringappointmentmaster_actioncard: { b: 'regardingobjectid_recurringappointmentmaster_actioncard', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_serviceappointment_actioncard: { b: 'regardingobjectid_serviceappointment_actioncard', a: '_regardingobjectid_value', c: 'serviceappointments', d: 'serviceappointment' },
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
		var actioncard = {};
		actioncard.ODataEntity = e;
		actioncard.FormattedValue = {};
		for (var field in _actioncard) {
			var a = _actioncard[field].a;
			var b = _actioncard[field].b;
			var c = _actioncard[field].c;
			var d = _actioncard[field].d;
			var g = _actioncard[field].g;
			var r = _actioncard[field].r;
			webApiField(actioncard, field, e, a, b, c, d, r, u, g);
		}
		actioncard.Entity = u;
		actioncard.EntityName = 'actioncard';
		actioncard.EntityCollectionName = 'actioncard';
		actioncard['@odata.etag'] = e['@odata.etag'];
		actioncard.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		actioncard.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
		OwnerIdType : {
		},
		ParentRegardingObjectTypeCode : {
		},
		RecordIdObjectTypeCode : {
		},
		RegardingObjectTypeCode : {
		},
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
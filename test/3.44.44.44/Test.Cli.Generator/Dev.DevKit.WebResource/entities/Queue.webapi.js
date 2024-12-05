'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.QueueApi = function (e) {
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
		var _queue = {
			AllowEmailCredentials: { a: 'allowemailcredentials', r: true },
			BusinessUnitId: { b: 'businessunitid', a: '_businessunitid_value', c: 'businessunits', d: 'businessunit' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DefaultMailbox: { b: 'defaultmailbox', a: '_defaultmailbox_value', c: 'mailboxes', d: 'mailbox', r: true },
			Description: { a: 'description' },
			EMailAddress: { a: 'emailaddress' },
			EmailPassword: { a: 'emailpassword', r: true },
			EmailRouterAccessApproval: { a: 'emailrouteraccessapproval' },
			EmailSignature: { b: 'emailsignature', a: '_emailsignature_value', c: 'emailsignatures', d: 'emailsignature' },
			EmailUsername: { a: 'emailusername', r: true },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			IgnoreUnsolicitedEmail: { a: 'ignoreunsolicitedemail' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IncomingEmailDeliveryMethod: { a: 'incomingemaildeliverymethod' },
			IncomingEmailFilteringMethod: { a: 'incomingemailfilteringmethod' },
			IsEmailAddressApprovedByO365Admin: { a: 'isemailaddressapprovedbyo365admin', r: true },
			IsFaxQueue: { a: 'isfaxqueue', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_assignmentinputcontractid: { b: 'msdyn_assignmentinputcontractid', a: '_msdyn_assignmentinputcontractid_value', c: 'msdyn_decisioncontracts', d: 'msdyn_decisioncontract' },
			msdyn_assignmentstrategy: { a: 'msdyn_assignmentstrategy' },
			msdyn_inqueueoverflowrulesetid: { b: 'msdyn_inqueueoverflowrulesetid', a: '_msdyn_inqueueoverflowrulesetid_value', c: 'msdyn_decisionrulesets', d: 'msdyn_decisionruleset' },
			msdyn_intentfamilyid: { b: 'msdyn_intentfamilyid', a: '_msdyn_intentfamilyid_value', c: 'msdyn_intentfamilies', d: 'msdyn_intentfamily' },
			msdyn_isdefaultqueue: { a: 'msdyn_isdefaultqueue' },
			msdyn_isomnichannelqueue: { a: 'msdyn_isomnichannelqueue' },
			msdyn_maxqueuesize: { a: 'msdyn_maxqueuesize' },
			msdyn_operatinghourid: { b: 'msdyn_operatinghourid', a: '_msdyn_operatinghourid_value', c: 'msdyn_operatinghours', d: 'msdyn_operatinghour' },
			msdyn_operatinghoursbasedassignment: { a: 'msdyn_operatinghoursbasedassignment' },
			msdyn_prequeueoverflowrulesetid: { b: 'msdyn_prequeueoverflowrulesetid', a: '_msdyn_prequeueoverflowrulesetid_value', c: 'msdyn_decisionrulesets', d: 'msdyn_decisionruleset' },
			msdyn_priority: { a: 'msdyn_priority' },
			msdyn_processqueueperiodically: { a: 'msdyn_processqueueperiodically' },
			msdyn_queuetype: { a: 'msdyn_queuetype' },
			msdyn_uniquename: { a: 'msdyn_uniquename' },
			Name: { a: 'name' },
			NumberOfItems: { a: 'numberofitems', r: true },
			NumberOfMembers: { a: 'numberofmembers', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OutgoingEmailDeliveryMethod: { a: 'outgoingemaildeliverymethod' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PrimaryUserId: { b: 'primaryuserid', a: '_primaryuserid_value', c: 'systemusers', d: 'systemuser' },
			QueueId: { a: 'queueid' },
			QueueTypeCode: { a: 'queuetypecode', r: true },
			QueueViewType: { a: 'queueviewtype' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var queue = {};
		queue.ODataEntity = e;
		queue.FormattedValue = {};
		for (var field in _queue) {
			var a = _queue[field].a;
			var b = _queue[field].b;
			var c = _queue[field].c;
			var d = _queue[field].d;
			var g = _queue[field].g;
			var r = _queue[field].r;
			webApiField(queue, field, e, a, b, c, d, r, u, g);
		}
		queue.Entity = u;
		queue.EntityName = 'queue';
		queue.EntityCollectionName = 'queues';
		queue['@odata.etag'] = e['@odata.etag'];
		queue.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		queue.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return queue;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Queue = {
		EmailRouterAccessApproval : {
			Approved: 1,
			Empty: 0,
			Pending_Approval: 2,
			Rejected: 3
		},
		IncomingEmailDeliveryMethod : {
			Forward_Mailbox: 3,
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		IncomingEmailFilteringMethod : {
			All_email_messages: 0,
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2,
			Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3,
			Email_messages_in_response_to_Dynamics_365_email: 1,
			No_email_messages: 4
		},
		msdyn_assignmentstrategy : {
			Custom_Assignment_Configuration: 192350002,
			Longest_Idle: 192350003,
			Omnichannel_Assignment: 192350000,
			Round_Robin: 192350001
		},
		msdyn_queuetype : {
			Entity: 192350001,
			Messaging: 192350000,
			Voice: 192350002
		},
		OutgoingEmailDeliveryMethod : {
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		QueueTypeCode : {
			Default_Value: 1
		},
		QueueViewType : {
			Private: 1,
			Public: 0
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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
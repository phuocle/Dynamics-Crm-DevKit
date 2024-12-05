'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_liveconversationApi = function (e) {
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
		var _msdyn_liveconversation = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activeagentassignedon_UtcDateAndTime: { a: 'msdyn_activeagentassignedon' },
			msdyn_activeagentid: { b: 'msdyn_activeagentid', a: '_msdyn_activeagentid_value', c: 'systemusers', d: 'systemuser' },
			msdyn_cdsqueueid: { b: 'msdyn_cdsqueueid', a: '_msdyn_cdsqueueid_value', c: 'queues', d: 'queue' },
			msdyn_channel: { a: 'msdyn_channel', g: true },
			msdyn_closedon_UtcDateAndTime: { a: 'msdyn_closedon' },
			msdyn_createdon_UtcDateAndTime: { a: 'msdyn_createdon' },
			msdyn_customer_msdyn_liveconversation_account: { b: 'msdyn_customer_msdyn_liveconversation_account', a: '_msdyn_customer_value', c: 'accounts', d: 'account' },
			msdyn_customer_msdyn_liveconversation_contact: { b: 'msdyn_customer_msdyn_liveconversation_contact', a: '_msdyn_customer_value', c: 'contacts', d: 'contact' },
			msdyn_customersentimentlabel: { a: 'msdyn_customersentimentlabel' },
			msdyn_escalationcount: { a: 'msdyn_escalationcount' },
			msdyn_initiatedon_UtcDateAndTime: { a: 'msdyn_initiatedon' },
			msdyn_liveconversationId: { a: 'msdyn_liveconversationid' },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_modifiedon_UtcDateAndTime: { a: 'msdyn_modifiedon' },
			msdyn_oclastsessionid: { a: 'msdyn_oclastsessionid' },
			msdyn_queueid: { b: 'msdyn_queueid', a: '_msdyn_queueid_value', c: 'msdyn_omnichannelqueues', d: 'msdyn_omnichannelqueue' },
			msdyn_startedon_UtcDateAndTime: { a: 'msdyn_startedon' },
			msdyn_statecode: { a: 'msdyn_statecode' },
			msdyn_statuscode: { a: 'msdyn_statuscode' },
			msdyn_statusupdatedon_UtcDateAndTime: { a: 'msdyn_statusupdatedon' },
			msdyn_subject: { a: 'msdyn_subject' },
			msdyn_title: { a: 'msdyn_title' },
			msdyn_transfercount: { a: 'msdyn_transfercount' },
			msdyn_workstreamworkdistributionmode: { a: 'msdyn_workstreamworkdistributionmode' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_liveconversation = {};
		msdyn_liveconversation.ODataEntity = e;
		msdyn_liveconversation.FormattedValue = {};
		for (var field in _msdyn_liveconversation) {
			var a = _msdyn_liveconversation[field].a;
			var b = _msdyn_liveconversation[field].b;
			var c = _msdyn_liveconversation[field].c;
			var d = _msdyn_liveconversation[field].d;
			var g = _msdyn_liveconversation[field].g;
			var r = _msdyn_liveconversation[field].r;
			webApiField(msdyn_liveconversation, field, e, a, b, c, d, r, u, g);
		}
		msdyn_liveconversation.Entity = u;
		msdyn_liveconversation.EntityName = 'msdyn_liveconversation';
		msdyn_liveconversation.EntityCollectionName = 'msdyn_liveconversations';
		msdyn_liveconversation['@odata.etag'] = e['@odata.etag'];
		msdyn_liveconversation.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_liveconversation.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_liveconversation;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_liveconversation = {
		msdyn_channel : {
			Apple_Messages_for_Business: 192450000,
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			Googles_Business_Messages: 192450001,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			Voice_call: 192440000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		msdyn_customerIdType : {
		},
		msdyn_customersentimentlabel : {
			NA: 0,
			Negative: 8,
			Neutral: 10,
			Positive: 12,
			Slightly_negative: 9,
			Slightly_positive: 11,
			Very_negative: 7,
			Very_positive: 13
		},
		msdyn_statecode : {
			Active: 1,
			Closed: 3,
			Open: 0,
			Waiting: 2,
			Wrap_up: 4
		},
		msdyn_statuscode : {
			Active: 2,
			Closed: 4,
			Open: 1,
			Waiting: 3,
			Wrap_up: 5
		},
		msdyn_workstreamworkdistributionmode : {
			Pick: 192350001,
			Push: 192350000
		},
		statecode : {
			Active: 1,
			Closed: 3,
			Open: 0,
			Waiting: 2,
			Wrap_up: 4
		},
		statuscode : {
			Active: 2,
			Closed: 4,
			Open: 1,
			Waiting: 3,
			Wrap_up: 5
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
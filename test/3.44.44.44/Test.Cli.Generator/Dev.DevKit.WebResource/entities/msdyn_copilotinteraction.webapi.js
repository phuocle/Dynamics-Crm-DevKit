'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_copilotinteractionApi = function (e) {
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
		var _msdyn_copilotinteraction = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_clienttimestamp_UtcDateAndTime: { a: 'msdyn_clienttimestamp' },
			msdyn_copilotinteractionId: { a: 'msdyn_copilotinteractionid' },
			msdyn_interactioncontext: { a: 'msdyn_interactioncontext' },
			msdyn_interactiondataid: { b: 'msdyn_interactiondataid', a: '_msdyn_interactiondataid_value', c: 'msdyn_copilotinteractiondatas', d: 'msdyn_copilotinteractiondata' },
			msdyn_interactionforid: { a: 'msdyn_interactionforid' },
			msdyn_interactionforlogicalname: { a: 'msdyn_interactionforlogicalname' },
			msdyn_interactiontype: { a: 'msdyn_interactiontype' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_scenariorequestid: { a: 'msdyn_scenariorequestid' },
			msdyn_scenariotype: { a: 'msdyn_scenariotype' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_copilotinteraction = {};
		msdyn_copilotinteraction.ODataEntity = e;
		msdyn_copilotinteraction.FormattedValue = {};
		for (var field in _msdyn_copilotinteraction) {
			var a = _msdyn_copilotinteraction[field].a;
			var b = _msdyn_copilotinteraction[field].b;
			var c = _msdyn_copilotinteraction[field].c;
			var d = _msdyn_copilotinteraction[field].d;
			var g = _msdyn_copilotinteraction[field].g;
			var r = _msdyn_copilotinteraction[field].r;
			webApiField(msdyn_copilotinteraction, field, e, a, b, c, d, r, u, g);
		}
		msdyn_copilotinteraction.Entity = u;
		msdyn_copilotinteraction.EntityName = 'msdyn_copilotinteraction';
		msdyn_copilotinteraction.EntityCollectionName = 'msdyn_copilotinteractions';
		msdyn_copilotinteraction['@odata.etag'] = e['@odata.etag'];
		msdyn_copilotinteraction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_copilotinteraction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_copilotinteraction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_copilotinteraction = {
		msdyn_interactiontype : {
			AcceptSuggestion: 100230312,
			ArticleProposed: 100230310,
			Available: 100230309,
			Copy: 100230304,
			EditAndSend: 100230307,
			ExpandTile: 100230314,
			Generated: 100230305,
			ManualCopy: 100230308,
			MarkAsReviewed: 100230311,
			RequestSolution: 100230315,
			SendToCustomer: 100230306,
			ThumbsClear: 100230303,
			ThumbsDown: 100230302,
			ThumbsUp: 100230301,
			ViewHistory: 100230313
		},
		msdyn_scenariotype : {
			Ask_a_question: 100230201,
			Case_summary: 100230205,
			Chat_Assist: 100230216,
			Collaborate_with_SMEs: 100230210,
			Copilot: 100230204,
			Custom_entity_summary: 100230209,
			Inline_Copilot_for_email: 100230211,
			Intent_Assist: 100230213,
			Knowledge_draft_assist: 100230208,
			knowledge_harvest: 100230214,
			Live_conversation_response: 100230202,
			Live_conversation_summary: 100230206,
			Resolution_notes: 100230215,
			Timeline_highlights: 100230207,
			Timeline_next_best_actions: 100230212,
			Write_an_email: 100230203
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
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
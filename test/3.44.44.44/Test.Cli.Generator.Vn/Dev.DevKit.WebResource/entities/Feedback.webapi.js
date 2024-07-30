'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FeedbackApi = function (e) {
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
		var _feedback = {
			adx_approved: { a: 'adx_approved' },
			adx_authorurl: { a: 'adx_authorurl' },
			Adx_ContactEmail: { a: 'adx_contactemail' },
			Adx_ContactUsername: { a: 'adx_contactusername' },
			Adx_CreatedByContact: { a: 'adx_createdbycontact' },
			ClosedBy: { b: 'closedby', a: '_closedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ClosedOn_UtcDateAndTime: { a: 'closedon', r: true },
			Comments: { a: 'comments' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByContact: { b: 'createdbycontact', a: '_createdbycontact_value', c: 'contacts', d: 'contact' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOnBehalfByContact: { b: 'createdonbehalfbycontact', a: '_createdonbehalfbycontact_value', c: 'contacts', d: 'contact' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FeedbackId: { a: 'feedbackid' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			MaxRating: { a: 'maxrating' },
			MinRating: { a: 'minrating' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ContextObjectId: { b: 'msdyn_contextobjectid', a: '_msdyn_contextobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			NormalizedRating: { a: 'normalizedrating', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Rating: { a: 'rating' },
			ContactId: { b: 'ContactId', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			FeedbackId2: { b: 'FeedbackId', a: '_regardingobjectid_value', c: 'feedback', d: 'feedback' },
			KnowledgeArticleId: { b: 'KnowledgeArticleId', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			Source: { a: 'source' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var feedback = {};
		feedback.ODataEntity = e;
		feedback.FormattedValue = {};
		for (var field in _feedback) {
			var a = _feedback[field].a;
			var b = _feedback[field].b;
			var c = _feedback[field].c;
			var d = _feedback[field].d;
			var g = _feedback[field].g;
			var r = _feedback[field].r;
			webApiField(feedback, field, e, a, b, c, d, r, u, g);
		}
		feedback.Entity = u;
		feedback.EntityName = 'feedback';
		feedback.EntityCollectionName = 'feedback';
		feedback['@odata.etag'] = e['@odata.etag'];
		feedback.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		feedback.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return feedback;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Feedback = {
		msdyn_ContextObjectIdType : {
		},
		RegardingObjectTypeCode : {
		},
		Source : {
			Cong_thong_tin: 1,
			Noi_bo: 0
		},
		StateCode : {
			Da_dong: 1,
			Mo: 0
		},
		StatusCode : {
			Bi_tu_choi: 4,
			Da_chap_nhan: 2,
			Da_de_xuat: 1,
			Da_dong: 3
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
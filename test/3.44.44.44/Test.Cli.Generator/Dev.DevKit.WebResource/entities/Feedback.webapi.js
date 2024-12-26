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
			msdyn_ContextObjectId_incident: { b: 'msdyn_ContextObjectId_incident', a: '_msdyn_contextobjectid_value', c: 'incidents', d: 'incident' },
			msdyn_ContextObjectId_knowledgearticle: { b: 'msdyn_ContextObjectId_knowledgearticle', a: '_msdyn_contextobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
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
			regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: { b: 'regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate', a: '_regardingobjectid_value', c: 'msdyncrm_appointmentactivitymarketingtemplates', d: 'msdyncrm_appointmentactivitymarketingtemplate' },
			regardingobjectid_msdyncrm_contentsettings: { b: 'regardingobjectid_msdyncrm_contentsettings', a: '_regardingobjectid_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			regardingobjectid_msdyncrm_customerjourney: { b: 'regardingobjectid_msdyncrm_customerjourney', a: '_regardingobjectid_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			regardingobjectid_msdyncrm_leadscoremodel: { b: 'regardingobjectid_msdyncrm_leadscoremodel', a: '_regardingobjectid_value', c: 'msdyncrm_leadscoremodels', d: 'msdyncrm_leadscoremodel' },
			regardingobjectid_msdyncrm_linkedinaccount: { b: 'regardingobjectid_msdyncrm_linkedinaccount', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinaccounts', d: 'msdyncrm_linkedinaccount' },
			regardingobjectid_msdyncrm_linkedinactivity: { b: 'regardingobjectid_msdyncrm_linkedinactivity', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinactivities', d: 'msdyncrm_linkedinactivity' },
			regardingobjectid_msdyncrm_linkedinfieldmapping: { b: 'regardingobjectid_msdyncrm_linkedinfieldmapping', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinfieldmappings', d: 'msdyncrm_linkedinfieldmapping' },
			regardingobjectid_msdyncrm_linkedinform: { b: 'regardingobjectid_msdyncrm_linkedinform', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinforms', d: 'msdyncrm_linkedinform' },
			regardingobjectid_msdyncrm_linkedinformanswer: { b: 'regardingobjectid_msdyncrm_linkedinformanswer', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformanswers', d: 'msdyncrm_linkedinformanswer' },
			regardingobjectid_msdyncrm_linkedinformquestion: { b: 'regardingobjectid_msdyncrm_linkedinformquestion', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformquestions', d: 'msdyncrm_linkedinformquestion' },
			regardingobjectid_msdyncrm_linkedinformsubmission: { b: 'regardingobjectid_msdyncrm_linkedinformsubmission', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformsubmissions', d: 'msdyncrm_linkedinformsubmission' },
			regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: { b: 'regardingobjectid_msdyncrm_linkedinleadmatchingstrategy', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinleadmatchingstrategies', d: 'msdyncrm_linkedinleadmatchingstrategy' },
			regardingobjectid_msdyncrm_linkedinuserprofile: { b: 'regardingobjectid_msdyncrm_linkedinuserprofile', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinuserprofiles', d: 'msdyncrm_linkedinuserprofile' },
			regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: { b: 'regardingobjectid_msdyncrm_marketingdynamiccontentmetadata', a: '_regardingobjectid_value', c: 'msdyncrm_marketingdynamiccontentmetadatas', d: 'msdyncrm_marketingdynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: { b: 'regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemaildynamiccontentmetadatas', d: 'msdyncrm_marketingemaildynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemailtestsend: { b: 'regardingobjectid_msdyncrm_marketingemailtestsend', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemailtestsends', d: 'msdyncrm_marketingemailtestsend' },
			regardingobjectid_msdyncrm_mktactivity: { b: 'regardingobjectid_msdyncrm_mktactivity', a: '_regardingobjectid_value', c: 'msdyncrm_mktactivities', d: 'msdyncrm_mktactivity' },
			regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: { b: 'regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate', a: '_regardingobjectid_value', c: 'msdyncrm_phonecallactivitymarketingtemplates', d: 'msdyncrm_phonecallactivitymarketingtemplate' },
			regardingobjectid_msdyncrm_taskactivitymarketingtemplate: { b: 'regardingobjectid_msdyncrm_taskactivitymarketingtemplate', a: '_regardingobjectid_value', c: 'msdyncrm_taskactivitymarketingtemplates', d: 'msdyncrm_taskactivitymarketingtemplate' },
			regardingobjectid_msdyn_copilottranscript: { b: 'regardingobjectid_msdyn_copilottranscript', a: '_regardingobjectid_value', c: 'msdyn_copilottranscripts', d: 'msdyn_copilottranscript' },
			regardingobjectid_msdyn_liveconversation: { b: 'regardingobjectid_msdyn_liveconversation', a: '_regardingobjectid_value', c: 'msdyn_liveconversations', d: 'msdyn_liveconversation' },
			regardingobjectid_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			regardingobjectid_msdyn_ocoutboundmessage: { b: 'regardingobjectid_msdyn_ocoutboundmessage', a: '_regardingobjectid_value', c: 'msdyn_ocoutboundmessages', d: 'msdyn_ocoutboundmessage' },
			regardingobjectid_msdyn_ocsession: { b: 'regardingobjectid_msdyn_ocsession', a: '_regardingobjectid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			regardingobjectid_msdyn_ocvoicemail: { b: 'regardingobjectid_msdyn_ocvoicemail', a: '_regardingobjectid_value', c: 'msdyn_ocvoicemails', d: 'msdyn_ocvoicemail' },
			regardingobjectid_msfp_alert: { b: 'regardingobjectid_msfp_alert', a: '_regardingobjectid_value', c: 'msfp_alerts', d: 'msfp_alert' },
			regardingobjectid_msfp_surveyinvite: { b: 'regardingobjectid_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			regardingobjectid_msfp_surveyresponse: { b: 'regardingobjectid_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
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
			Internal: 0,
			Portal: 1
		},
		StateCode : {
			Closed: 1,
			Open: 0
		},
		StatusCode : {
			Accepted: 2,
			Closed: 3,
			Proposed: 1,
			Rejected: 4
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
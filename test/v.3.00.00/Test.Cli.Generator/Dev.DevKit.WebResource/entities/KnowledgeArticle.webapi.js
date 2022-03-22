'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.KnowledgeArticleApi = function (e) {
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
		var _knowledgearticle = {
			ArticlePublicNumber: { a: 'articlepublicnumber' },
			Content: { a: 'content' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpirationDate_UtcDateAndTime: { a: 'expirationdate' },
			ExpirationStateId: { a: 'expirationstateid' },
			ExpirationStatusId: { a: 'expirationstatusid' },
			ExpiredReviewOptions: { a: 'expiredreviewoptions' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsInternal: { a: 'isinternal' },
			IsLatestVersion: { a: 'islatestversion' },
			IsPrimary: { a: 'isprimary' },
			IsRootArticle: { a: 'isrootarticle' },
			Keywords: { a: 'keywords' },
			knowledgearticleId: { a: 'knowledgearticleid' },
			KnowledgeArticleViews: { a: 'knowledgearticleviews', r: true },
			KnowledgeArticleViews_Date_UtcDateAndTime: { a: 'knowledgearticleviews_date', r: true },
			KnowledgeArticleViews_State: { a: 'knowledgearticleviews_state', r: true },
			LanguageLocaleId: { b: 'languagelocaleid', a: '_languagelocaleid_value', c: 'languagelocales', d: 'languagelocale' },
			MajorVersionNumber: { a: 'majorversionnumber' },
			MinorVersionNumber: { a: 'minorversionnumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_contentstore: { a: 'msdyn_contentstore', r: true },
			msdyn_ingestedarticleurl: { a: 'msdyn_ingestedarticleurl' },
			msdyn_iscontentsyncedtostore: { a: 'msdyn_iscontentsyncedtostore' },
			msdyn_isingestedarticle: { a: 'msdyn_isingestedarticle' },
			msdyn_keywordsdescsuggestioncontrol: { a: 'msdyn_keywordsdescsuggestioncontrol' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentArticleContentId: { b: 'parentarticlecontentid', a: '_parentarticlecontentid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			PreviousArticleContentId: { b: 'previousarticlecontentid', a: '_previousarticlecontentid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			primaryauthorid: { b: 'primaryauthorid', a: '_primaryauthorid_value', c: 'systemusers', d: 'systemuser' },
			processid: { a: 'processid' },
			PublishOn_UtcDateAndTime: { a: 'publishon' },
			PublishStatusId: { a: 'publishstatusid' },
			Rating: { a: 'rating', r: true },
			Rating_Count: { a: 'rating_count', r: true },
			Rating_Date_UtcDateAndTime: { a: 'rating_date', r: true },
			Rating_State: { a: 'rating_state', r: true },
			Rating_Sum: { a: 'rating_sum', r: true },
			ReadyForReview: { a: 'readyforreview' },
			Review: { a: 'review' },
			RootArticleId: { b: 'rootarticleid', a: '_rootarticleid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			ScheduledStatusId: { a: 'scheduledstatusid' },
			SetCategoryAssociations: { a: 'setcategoryassociations' },
			SetProductAssociations: { a: 'setproductassociations' },
			stageid: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SubjectId: { b: 'subjectid', a: '_subjectid_value', c: 'subjects', d: 'subject' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			traversedpath: { a: 'traversedpath' },
			UpdateContent: { a: 'updatecontent' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var knowledgearticle = {};
		knowledgearticle.ODataEntity = e;
		knowledgearticle.FormattedValue = {};
		for (var field in _knowledgearticle) {
			var a = _knowledgearticle[field].a;
			var b = _knowledgearticle[field].b;
			var c = _knowledgearticle[field].c;
			var d = _knowledgearticle[field].d;
			var g = _knowledgearticle[field].g;
			var r = _knowledgearticle[field].r;
			webApiField(knowledgearticle, field, e, a, b, c, d, r, u, g);
		}
		knowledgearticle.Entity = u;
		knowledgearticle.EntityName = 'knowledgearticle';
		knowledgearticle.EntityCollectionName = 'knowledgearticles';
		knowledgearticle['@odata.etag'] = e['@odata.etag'];
		knowledgearticle.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		knowledgearticle.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return knowledgearticle;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.KnowledgeArticle = {
		ExpiredReviewOptions : {
			Archive: 2,
			Needs_Updating: 0,
			Republish: 1
		},
		Review : {
			Approved: 0,
			Rejected: 1
		},
		StateCode : {
			Approved: 1,
			Archived: 5,
			Discarded: 6,
			Draft: 0,
			Expired: 4,
			Published: 3,
			Scheduled: 2
		},
		StatusCode : {
			Approved: 5,
			Archived: 12,
			Discarded: 13,
			Draft: 2,
			Expired: 10,
			In_review: 4,
			Needs_review_3: 3,
			Needs_review_8: 8,
			Proposed: 1,
			Published: 7,
			Rejected_11: 11,
			Rejected_14: 14,
			Scheduled: 6,
			Updating: 9
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
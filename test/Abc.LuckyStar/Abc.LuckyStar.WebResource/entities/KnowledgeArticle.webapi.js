'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.KnowledgeArticleApi = function (e) {
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
		var knowledgearticle = {
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
			LanguageLocaleIdLocaleId: { a: 'languagelocaleidlocaleid', r: true },
			MajorVersionNumber: { a: 'majorversionnumber' },
			MinorVersionNumber: { a: 'minorversionnumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
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
			stageid: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SubjectId: { b: 'subjectid', a: '_subjectid_value', c: 'subjects', d: 'subject' },
			SubjectIdDsc: { a: 'subjectiddsc', r: true },
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
		for (var field in knowledgearticle) {
			var a = knowledgearticle[field].a;
			var b = knowledgearticle[field].b;
			var c = knowledgearticle[field].c;
			var d = knowledgearticle[field].d;
			var g = knowledgearticle[field].g;
			var r = knowledgearticle[field].r;
			knowledgearticle[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		knowledgearticle.Entity = u;
		knowledgearticle.EntityName = 'knowledgearticle';
		knowledgearticle.EntityCollectionName = 'knowledgearticles';
		knowledgearticle['@odata.etag'] = e['@odata.etag'];
		knowledgearticle.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		knowledgearticle.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
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
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.KnowledgeArticle = {
		ExpiredReviewOptions : {
			Needs_Updating: 0,
			Republish: 1,
			Archive: 2
		},
		Review : {
			Approved: 0,
			Rejected: 1
		},
		StateCode : {
			Draft: 0,
			Approved: 1,
			Scheduled: 2,
			Published: 3,
			Expired: 4,
			Archived: 5,
			Discarded: 6
		},
		StatusCode : {
			Proposed: 1,
			Draft: 2,
			Needs_review: 3,8,
			In_review: 4,
			Approved: 5,
			Scheduled: 6,
			Published: 7,
			Updating: 9,
			Expired: 10,
			Rejected: 11,14,
			Archived: 12,
			Discarded: 13
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
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
			msdyn_agentreviewstatus: { a: 'msdyn_agentreviewstatus' },
			msdyn_compliancestatecode: { a: 'msdyn_compliancestatecode' },
			msdyn_contentstore_name: { a: 'msdyn_contentstore', r: true },
			msdyn_externalreferenceid: { a: 'msdyn_externalreferenceid' },
			msdyn_ingestedarticleurl: { a: 'msdyn_ingestedarticleurl' },
			msdyn_integratedsearchproviderid: { b: 'msdyn_integratedsearchproviderid', a: '_msdyn_integratedsearchproviderid_value', c: 'msdyn_integratedsearchproviders', d: 'msdyn_integratedsearchprovider' },
			msdyn_iscontentsyncedtostore: { a: 'msdyn_iscontentsyncedtostore' },
			msdyn_isingestedarticle: { a: 'msdyn_isingestedarticle' },
			msdyn_keywordsdescsuggestioncontrol: { a: 'msdyn_keywordsdescsuggestioncontrol' },
			msdyn_languagecode: { a: 'msdyn_languagecode' },
			msdyn_retrycountformigrationtocontentstore: { a: 'msdyn_retrycountformigrationtocontentstore' },
			msdyn_totalcasesimpacted: { a: 'msdyn_totalcasesimpacted' },
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
				return '';
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
			Can_cap_nhat: 0,
			Luu_tru: 2,
			Xuat_ban_lai: 1
		},
		msdyn_agentreviewstatus : {
			Not_Reviewed: 100000000,
			Reviewed_By_Agent: 100000001
		},
		msdyn_compliancestatecode : {
			Compliant: 100000000,
			Non_Compliant: 100000001,
			Pending: 100000002
		},
		Review : {
			Bi_tu_choi: 1,
			Da_phe_duyet: 0
		},
		StateCode : {
			Ban_nhap: 0,
			Da_het_han: 4,
			Da_len_lich: 2,
			Da_loai_bo: 6,
			Da_luu_tru: 5,
			Da_phe_duyet: 1,
			Da_xuat_ban: 3
		},
		StatusCode : {
			Ban_nhap: 2,
			Bi_tu_choi_11: 11,
			Bi_tu_choi_14: 14,
			Can_danh_gia_3: 3,
			Can_danh_gia_8: 8,
			Da_de_xuat: 1,
			Da_het_han: 10,
			Da_len_lich: 6,
			Da_loai_bo: 13,
			Da_luu_tru: 12,
			Da_phe_duyet: 5,
			Da_xuat_ban: 7,
			Dang_cap_nhat: 9,
			Dang_duoc_danh_gia: 4
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
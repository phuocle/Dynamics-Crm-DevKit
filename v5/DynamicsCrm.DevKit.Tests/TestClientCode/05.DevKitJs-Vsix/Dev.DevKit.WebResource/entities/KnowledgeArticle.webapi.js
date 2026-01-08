'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.KnowledgeArticleApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _knowledgearticle = {
			ArticlePublicNumber: { a: 'articlepublicnumber' },
			Content: { a: 'content' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			ExpirationDate_UtcDateAndTime: { a: 'expirationdate', g: 'DateTime' },
			ExpirationStateId: { a: 'expirationstateid', g: 'Integer' },
			ExpirationStatusId: { a: 'expirationstatusid', g: 'Integer' },
			ExpiredReviewOptions: { a: 'expiredreviewoptions', g: 'Integer' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IsInternal: { a: 'isinternal', g: 'Boolean' },
			IsLatestVersion: { a: 'islatestversion', g: 'Boolean' },
			IsPrimary: { a: 'isprimary', g: 'Boolean' },
			IsRootArticle: { a: 'isrootarticle', g: 'Boolean' },
			Keywords: { a: 'keywords' },
			knowledgearticleId: { a: 'knowledgearticleid' },
			KnowledgeArticleViews: { a: 'knowledgearticleviews', r: true, g: 'Integer' },
			KnowledgeArticleViews_Date_UtcDateAndTime: { a: 'knowledgearticleviews_date', r: true, g: 'DateTime' },
			KnowledgeArticleViews_State: { a: 'knowledgearticleviews_state', r: true, g: 'Integer' },
			LanguageLocaleId: { b: 'languagelocaleid', a: '_languagelocaleid_value', c: 'languagelocales', d: 'languagelocale' },
			MajorVersionNumber: { a: 'majorversionnumber', g: 'Integer' },
			MinorVersionNumber: { a: 'minorversionnumber', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_agentreviewstatus: { a: 'msdyn_agentreviewstatus', g: 'Integer' },
			msdyn_compliancestatecode: { a: 'msdyn_compliancestatecode', g: 'Integer' },
			msdyn_contentstore_name: { a: 'msdyn_contentstore', r: true },
			msdyn_creationmode: { a: 'msdyn_creationmode', g: 'Integer' },
			msdyn_externalreferenceid: { a: 'msdyn_externalreferenceid' },
			msdyn_harvestsourceentity: { a: 'msdyn_harvestsourceentity' },
			msdyn_ingestedarticleurl: { a: 'msdyn_ingestedarticleurl' },
			msdyn_integratedsearchproviderid: { b: 'msdyn_integratedsearchproviderid', a: '_msdyn_integratedsearchproviderid_value', c: 'msdyn_integratedsearchproviders', d: 'msdyn_integratedsearchprovider' },
			msdyn_iscontentsyncedtostore: { a: 'msdyn_iscontentsyncedtostore', g: 'Boolean' },
			msdyn_isingestedarticle: { a: 'msdyn_isingestedarticle', g: 'Boolean' },
			msdyn_keywordsdescsuggestioncontrol: { a: 'msdyn_keywordsdescsuggestioncontrol', g: 'Boolean' },
			msdyn_languagecode: { a: 'msdyn_languagecode' },
			msdyn_retrycountformigrationtocontentstore: { a: 'msdyn_retrycountformigrationtocontentstore', g: 'Integer' },
			msdyn_sourceofcreation: { a: 'msdyn_sourceofcreation', g: 'Integer' },
			msdyn_totalcasesimpacted: { a: 'msdyn_totalcasesimpacted', g: 'Integer' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentArticleContentId: { b: 'parentarticlecontentid', a: '_parentarticlecontentid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			PreviousArticleContentId: { b: 'previousarticlecontentid', a: '_previousarticlecontentid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			primaryauthorid: { b: 'primaryauthorid', a: '_primaryauthorid_value', c: 'systemusers', d: 'systemuser' },
			processid: { a: 'processid' },
			PublishOn_UtcDateAndTime: { a: 'publishon', g: 'DateTime' },
			PublishStatusId: { a: 'publishstatusid', g: 'Integer' },
			Rating: { a: 'rating', r: true, g: 'Number' },
			Rating_Count: { a: 'rating_count', r: true, g: 'Integer' },
			Rating_Date_UtcDateAndTime: { a: 'rating_date', r: true, g: 'DateTime' },
			Rating_State: { a: 'rating_state', r: true, g: 'Integer' },
			Rating_Sum: { a: 'rating_sum', r: true, g: 'Number' },
			ReadyForReview: { a: 'readyforreview', g: 'Boolean' },
			Review: { a: 'review', g: 'Integer' },
			RootArticleId: { b: 'rootarticleid', a: '_rootarticleid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			ScheduledStatusId: { a: 'scheduledstatusid', g: 'Integer' },
			SetCategoryAssociations: { a: 'setcategoryassociations', g: 'Boolean' },
			stageid: { a: 'stageid' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			SubjectId: { b: 'subjectid', a: '_subjectid_value', c: 'subjects', d: 'subject' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			traversedpath: { a: 'traversedpath' },
			UpdateContent: { a: 'updatecontent', g: 'Boolean' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const knowledgearticle = {};
		knowledgearticle.ODataEntity = e;
		knowledgearticle.FormattedValue = {};
		for (const field in _knowledgearticle) {
			const fieldConfig = _knowledgearticle[field];
			webApiField(knowledgearticle, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		knowledgearticle.Entity = u;
		knowledgearticle.EntityName = 'knowledgearticle';
		knowledgearticle.EntityCollectionName = 'knowledgearticles';
		knowledgearticle['@odata.etag'] = e?.['@odata.etag'];
		knowledgearticle.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		knowledgearticle.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return knowledgearticle;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.KnowledgeArticle = {
		ExpiredReviewOptions: { Archive: 2, Needs_Updating: 0, Republish: 1 },
		msdyn_agentreviewstatus: { Not_Reviewed: 100000000, Reviewed: 100000001 },
		msdyn_compliancestatecode: { Compliant: 100000000, Non_Compliant: 100000001, Pending: 100000002 },
		msdyn_creationmode: { Copilot: 1, Manual: 0 },
		msdyn_sourceofcreation: { BulkHarvest: 3, DraftAssist: 1, Manual: 0, RealTimeHarvest: 2, RealTimeHarvest_Conversation: 4 },
		Review: { Approved: 0, Rejected: 1 },
		StateCode: { Approved: 1, Archived: 5, Discarded: 6, Draft: 0, Expired: 4, Published: 3, Scheduled: 2 },
		StatusCode: { Approved: 5, Archived: 12, Discarded: 13, Draft: 2, Expired: 10, In_review: 4, Needs_review_3: 3, Needs_review_8: 8, Proposed: 1, Published: 7, Rejected_11: 11, Rejected_14: 14, Scheduled: 6, Updating: 9 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));
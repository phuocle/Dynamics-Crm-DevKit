'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.MailboxApi = function (e) {
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
		var _mailbox = {
			ACTDeliveryMethod: { a: 'actdeliverymethod' },
			ACTStatus: { a: 'actstatus' },
			AllowEmailConnectorToUseCredentials: { a: 'allowemailconnectortousecredentials' },
			AverageTotalDuration: { a: 'averagetotalduration', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EmailAddress: { a: 'emailaddress' },
			EmailRouterAccessApproval: { a: 'emailrouteraccessapproval' },
			EmailServerProfile: { b: 'emailserverprofile', a: '_emailserverprofile_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			EnabledForACT: { a: 'enabledforact' },
			EnabledForIncomingEmail: { a: 'enabledforincomingemail' },
			EnabledForOutgoingEmail: { a: 'enabledforoutgoingemail' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			EWSURL: { a: 'ewsurl' },
			ExchangeContactsImportCompletedOn_UtcDateAndTime: { a: 'exchangecontactsimportcompletedon', r: true },
			ExchangeContactsImportStatus: { a: 'exchangecontactsimportstatus' },
			ExchangeSyncStateXml: { a: 'exchangesyncstatexml' },
			ExchangeSyncStateXmlFileRef_name: { a: 'exchangesyncstatexmlfileref', r: true },
			FolderHierarchy: { a: 'folderhierarchy' },
			ForcedUnlockCount: { a: 'forcedunlockcount', r: true },
			HostId: { a: 'hostid', r: true },
			IncomingEmailDeliveryMethod: { a: 'incomingemaildeliverymethod' },
			IncomingEmailStatus: { a: 'incomingemailstatus' },
			IsACTSyncOrgFlagSet: { a: 'isactsyncorgflagset' },
			IsEmailAddressApprovedByO365Admin: { a: 'isemailaddressapprovedbyo365admin' },
			IsExchangeContactsImportScheduled: { a: 'isexchangecontactsimportscheduled', r: true },
			IsForwardMailbox: { a: 'isforwardmailbox', r: true },
			IsOauthAccessTokenSet: { a: 'isoauthaccesstokenset', r: true },
			IsOauthRefreshTokenSet: { a: 'isoauthrefreshtokenset', r: true },
			IsPasswordSet: { a: 'ispasswordset', r: true },
			IsServiceAccount: { a: 'isserviceaccount', r: true },
			ItemsFailedForLastSync: { a: 'itemsfailedforlastsync' },
			ItemsProcessedForLastSync: { a: 'itemsprocessedforlastsync' },
			LastActiveOn_UtcDateAndTime: { a: 'lastactiveon', r: true },
			LastAutoDiscoveredOn_UtcDateAndTime: { a: 'lastautodiscoveredon' },
			LastDuration: { a: 'lastduration', r: true },
			LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: { a: 'lastmailboxforcedunlockoccurredon', r: true },
			LastMessageId: { a: 'lastmessageid' },
			LastSuccessfulSyncCompletedOn_UtcDateAndTime: { a: 'lastsuccessfulsynccompletedon' },
			LastSyncError: { a: 'lastsyncerror' },
			LastSyncErrorCode: { a: 'lastsyncerrorcode' },
			LastSyncErrorCount: { a: 'lastsyncerrorcount' },
			LastSyncErrorMachineName: { a: 'lastsyncerrormachinename' },
			LastSyncErrorOccurredOn_UtcDateAndTime: { a: 'lastsyncerroroccurredon' },
			LastSyncStartedOn_UtcDateAndTime: { a: 'lastsyncstartedon', r: true },
			LastTagCompletedOn_UtcDateAndTime: { a: 'lasttagcompletedon' },
			LastTaggedMessageId: { a: 'lasttaggedmessageid' },
			LastTagProcessedMaxItems: { a: 'lasttagprocessedmaxitems' },
			MailboxId: { a: 'mailboxid' },
			MailboxProcessingContext: { a: 'mailboxprocessingcontext' },
			MailboxStatus: { a: 'mailboxstatus', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NextScheduledACTSyncInSeconds: { a: 'nextscheduledactsyncinseconds', r: true },
			NoACTCount: { a: 'noactcount', r: true },
			NoEmailCount: { a: 'noemailcount', r: true },
			OauthAccessToken: { a: 'oauthaccesstoken' },
			OauthRefreshToken: { a: 'oauthrefreshtoken' },
			OauthTokenExpiresOn_UtcDateAndTime: { a: 'oauthtokenexpireson' },
			OfficeAppsDeploymentCompleteOn_UtcDateAndTime: { a: 'officeappsdeploymentcompleteon', r: true },
			OfficeAppsDeploymentError: { a: 'officeappsdeploymenterror', r: true },
			OfficeAppsDeploymentScheduled: { a: 'officeappsdeploymentscheduled' },
			OfficeAppsDeploymentStatus: { a: 'officeappsdeploymentstatus' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OrgMarkedAsPrimaryForExchangeSync: { a: 'orgmarkedasprimaryforexchangesync' },
			OutgoingEmailDeliveryMethod: { a: 'outgoingemaildeliverymethod' },
			OutgoingEmailStatus: { a: 'outgoingemailstatus' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Password: { a: 'password' },
			PostponeMailboxProcessingUntil_UtcDateOnly: { a: 'postponemailboxprocessinguntil' },
			PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: { a: 'postponeofficeappsdeploymentuntil' },
			PostponeSendingUntil_UtcDateOnly: { a: 'postponesendinguntil' },
			PostponeTestEmailConfigurationUntil_UtcDateAndTime: { a: 'postponetestemailconfigurationuntil' },
			ProcessAndDeleteEmails: { a: 'processanddeleteemails' },
			ProcessedTimes: { a: 'processedtimes', r: true },
			ProcessEmailReceivedAfter_UtcDateOnly: { a: 'processemailreceivedafter' },
			ProcessingLastAttemptedOn_UtcDateAndTime: { a: 'processinglastattemptedon' },
			ProcessingStateCode: { a: 'processingstatecode', r: true },
			ReceivingPostponedUntil_UtcDateOnly: { a: 'receivingpostponeduntil', r: true },
			ReceivingPostponedUntilForACT_UtcDateOnly: { a: 'receivingpostponeduntilforact', r: true },
			regardingobjectid_queue: { b: 'regardingobjectid_queue', a: '_regardingobjectid_value', c: 'queues', d: 'queue', r: true },
			regardingobjectid: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TagEmailsAfter_UtcDateOnly: { a: 'tagemailsafter' },
			TestEmailConfigurationRetryCount: { a: 'testemailconfigurationretrycount' },
			TestEmailConfigurationScheduled: { a: 'testemailconfigurationscheduled' },
			TestMailboxAccessCompletedOn_UtcDateAndTime: { a: 'testmailboxaccesscompletedon' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransientFailureCount: { a: 'transientfailurecount', r: true },
			UndeliverableFolder: { a: 'undeliverablefolder' },
			Username: { a: 'username' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VerboseLoggingEnabled: { a: 'verboseloggingenabled' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var mailbox = {};
		mailbox.ODataEntity = e;
		mailbox.FormattedValue = {};
		for (var field in _mailbox) {
			var a = _mailbox[field].a;
			var b = _mailbox[field].b;
			var c = _mailbox[field].c;
			var d = _mailbox[field].d;
			var g = _mailbox[field].g;
			var r = _mailbox[field].r;
			webApiField(mailbox, field, e, a, b, c, d, r, u, g);
		}
		mailbox.Entity = u;
		mailbox.EntityName = 'mailbox';
		mailbox.EntityCollectionName = 'mailboxes';
		mailbox['@odata.etag'] = e['@odata.etag'];
		mailbox.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mailbox.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mailbox;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Mailbox = {
		ACTDeliveryMethod : {
			Dong_bo_phia_May_chu: 1,
			Khong: 2,
			Microsoft_Dynamics_365_danh_cho_Outlook: 0
		},
		ACTStatus : {
			Khong_Chay: 0,
			Loi: 2,
			Thanh_cong: 1
		},
		EmailRouterAccessApproval : {
			Bi_tu_choi: 3,
			Da_phe_chuan: 1,
			Dang_cho_Phe_duyet: 2,
			Trong: 0
		},
		ExchangeContactsImportStatus : {
			Imported: 1,
			ImportFailed: 2,
			NotImported: 0
		},
		IncomingEmailDeliveryMethod : {
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email: 2,
			Hop_thu_chuyen_tiep: 3,
			Khong: 0,
			Microsoft_Dynamics_365_danh_cho_Outlook: 1
		},
		IncomingEmailStatus : {
			Khong_Chay: 0,
			Loi: 2,
			Thanh_cong: 1
		},
		MailboxStatus : {
			Khong_Chay: 0,
			Loi: 2,
			Thanh_cong: 1
		},
		OfficeAppsDeploymentStatus : {
			Da_cai_dat: 1,
			InstallFailed: 2,
			NotInstalled: 0,
			UninstallFailed: 3,
			UpgradeRequired: 4
		},
		OutgoingEmailDeliveryMethod : {
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email: 2,
			Khong: 0,
			Microsoft_Dynamics_365_danh_cho_Outlook: 1
		},
		OutgoingEmailStatus : {
			Khong_Chay: 0,
			Loi: 2,
			Thanh_cong: 1
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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
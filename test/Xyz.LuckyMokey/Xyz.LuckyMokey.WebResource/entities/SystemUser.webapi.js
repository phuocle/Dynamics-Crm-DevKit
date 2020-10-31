'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.SystemUserApi = function (e) {
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
		var systemuser = {
			AccessMode: { a: 'accessmode' },
			ActiveDirectoryGuid: { a: 'activedirectoryguid', r: true },
			Address1_AddressId: { a: 'address1_addressid' },
			Address1_AddressTypeCode: { a: 'address1_addresstypecode' },
			Address1_City: { a: 'address1_city' },
			Address1_Composite: { a: 'address1_composite', r: true },
			Address1_Country: { a: 'address1_country' },
			Address1_County: { a: 'address1_county' },
			Address1_Fax: { a: 'address1_fax' },
			Address1_Latitude: { a: 'address1_latitude' },
			Address1_Line1: { a: 'address1_line1' },
			Address1_Line2: { a: 'address1_line2' },
			Address1_Line3: { a: 'address1_line3' },
			Address1_Longitude: { a: 'address1_longitude' },
			Address1_Name: { a: 'address1_name' },
			Address1_PostalCode: { a: 'address1_postalcode' },
			Address1_PostOfficeBox: { a: 'address1_postofficebox' },
			Address1_ShippingMethodCode: { a: 'address1_shippingmethodcode' },
			Address1_StateOrProvince: { a: 'address1_stateorprovince' },
			Address1_Telephone1: { a: 'address1_telephone1' },
			Address1_Telephone2: { a: 'address1_telephone2' },
			Address1_Telephone3: { a: 'address1_telephone3' },
			Address1_UPSZone: { a: 'address1_upszone' },
			Address1_UTCOffset: { a: 'address1_utcoffset' },
			Address2_AddressId: { a: 'address2_addressid' },
			Address2_AddressTypeCode: { a: 'address2_addresstypecode' },
			Address2_City: { a: 'address2_city' },
			Address2_Composite: { a: 'address2_composite', r: true },
			Address2_Country: { a: 'address2_country' },
			Address2_County: { a: 'address2_county' },
			Address2_Fax: { a: 'address2_fax' },
			Address2_Latitude: { a: 'address2_latitude' },
			Address2_Line1: { a: 'address2_line1' },
			Address2_Line2: { a: 'address2_line2' },
			Address2_Line3: { a: 'address2_line3' },
			Address2_Longitude: { a: 'address2_longitude' },
			Address2_Name: { a: 'address2_name' },
			Address2_PostalCode: { a: 'address2_postalcode' },
			Address2_PostOfficeBox: { a: 'address2_postofficebox' },
			Address2_ShippingMethodCode: { a: 'address2_shippingmethodcode' },
			Address2_StateOrProvince: { a: 'address2_stateorprovince' },
			Address2_Telephone1: { a: 'address2_telephone1' },
			Address2_Telephone2: { a: 'address2_telephone2' },
			Address2_Telephone3: { a: 'address2_telephone3' },
			Address2_UPSZone: { a: 'address2_upszone' },
			Address2_UTCOffset: { a: 'address2_utcoffset' },
			adobe_AdobeProvisioningId: { b: 'adobe_AdobeProvisioningId', a: '_adobe_adobeprovisioningid_value', c: 'adobe_integrationsettingses', d: 'adobe_integrationsettings' },
			ApplicationId: { a: 'applicationid' },
			ApplicationIdUri: { a: 'applicationiduri', r: true },
			AzureActiveDirectoryObjectId: { a: 'azureactivedirectoryobjectid', r: true },
			BusinessUnitId: { b: 'businessunitid', a: '_businessunitid_value', c: 'businessunits', d: 'businessunit' },
			CalendarId: { b: 'calendarid', a: '_calendarid_value', c: 'calendars', d: 'calendar' },
			CALType: { a: 'caltype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DefaultFiltersPopulated: { a: 'defaultfilterspopulated', r: true },
			DefaultMailbox: { b: 'defaultmailbox', a: '_defaultmailbox_value', c: 'mailboxes', d: 'mailbox', r: true },
			DefaultOdbFolderName: { a: 'defaultodbfoldername', r: true },
			DisabledReason: { a: 'disabledreason', r: true },
			DisplayInServiceViews: { a: 'displayinserviceviews' },
			DomainName: { a: 'domainname' },
			EmailRouterAccessApproval: { a: 'emailrouteraccessapproval' },
			EmployeeId: { a: 'employeeid' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			FirstName: { a: 'firstname' },
			FullName: { a: 'fullname', r: true },
			GovernmentId: { a: 'governmentid' },
			HomePhone: { a: 'homephone' },
			IdentityId: { a: 'identityid', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IncomingEmailDeliveryMethod: { a: 'incomingemaildeliverymethod' },
			InternalEMailAddress: { a: 'internalemailaddress' },
			InviteStatusCode: { a: 'invitestatuscode' },
			IsActiveDirectoryUser: { a: 'isactivedirectoryuser', r: true },
			IsDisabled: { a: 'isdisabled' },
			IsEmailAddressApprovedByO365Admin: { a: 'isemailaddressapprovedbyo365admin', r: true },
			IsIntegrationUser: { a: 'isintegrationuser' },
			IsLicensed: { a: 'islicensed' },
			IsSyncWithDirectory: { a: 'issyncwithdirectory' },
			JobTitle: { a: 'jobtitle' },
			LastName: { a: 'lastname' },
			LatestUpdateTime_UtcDateAndTime: { a: 'latestupdatetime', r: true },
			MiddleName: { a: 'middlename' },
			MobileAlertEMail: { a: 'mobilealertemail' },
			MobileOfflineProfileId: { b: 'mobileofflineprofileid', a: '_mobileofflineprofileid_value', c: 'mobileofflineprofiles', d: 'mobileofflineprofile' },
			MobilePhone: { a: 'mobilephone' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AgentType: { a: 'msdyn_agentType' },
			msdyn_BotApplicationId: { a: 'msdyn_botapplicationid' },
			msdyn_BotDescription: { a: 'msdyn_botdescription' },
			msdyn_BotEndpoint: { a: 'msdyn_botendpoint' },
			msdyn_BotProvider: { a: 'msdyn_botprovider' },
			msdyn_BotSecretKeys: { a: 'msdyn_botsecretkeys' },
			msdyn_Capacity: { a: 'msdyn_capacity' },
			msdyn_DefaultPresenceIdUser: { b: 'msdyn_DefaultPresenceIdUser', a: '_msdyn_defaultpresenceiduser_value', c: 'msdyn_presences', d: 'msdyn_presence' },
			msdyn_gdproptout: { a: 'msdyn_gdproptout' },
			msdyn_gridwrappercontrolfield: { a: 'msdyn_gridwrappercontrolfield' },
			msdyn_UserType: { a: 'msdyn_usertype' },
			msdyusd_USDConfigurationId: { b: 'msdyusd_USDConfigurationId', a: '_msdyusd_usdconfigurationid_value', c: 'msdyusd_configurations', d: 'msdyusd_configuration' },
			NickName: { a: 'nickname' },
			OrganizationId: { a: 'organizationid', r: true },
			OutgoingEmailDeliveryMethod: { a: 'outgoingemaildeliverymethod' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ParentSystemUserId: { b: 'parentsystemuserid', a: '_parentsystemuserid_value', c: 'systemusers', d: 'systemuser' },
			PassportHi: { a: 'passporthi' },
			PassportLo: { a: 'passportlo' },
			PersonalEMailAddress: { a: 'personalemailaddress' },
			PhotoUrl: { a: 'photourl' },
			PositionId: { b: 'positionid', a: '_positionid_value', c: 'positions', d: 'position' },
			PreferredAddressCode: { a: 'preferredaddresscode' },
			PreferredEmailCode: { a: 'preferredemailcode' },
			PreferredPhoneCode: { a: 'preferredphonecode' },
			ProcessId: { a: 'processid' },
			QueueId: { b: 'queueid', a: '_queueid_value', c: 'queues', d: 'queue' },
			Salutation: { a: 'salutation' },
			SetupUser: { a: 'setupuser' },
			SharePointEmailAddress: { a: 'sharepointemailaddress' },
			SiteId: { b: 'siteid', a: '_siteid_value', c: 'sites', d: 'site' },
			Skills: { a: 'skills' },
			StageId: { a: 'stageid' },
			SystemUserId: { a: 'systemuserid' },
			TerritoryId: { b: 'territoryid', a: '_territoryid_value', c: 'territories', d: 'territory' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UserLicenseType: { a: 'userlicensetype' },
			UserPuid: { a: 'userpuid', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WindowsLiveID: { a: 'windowsliveid' },
			YammerEmailAddress: { a: 'yammeremailaddress' },
			YammerUserId: { a: 'yammeruserid' },
			YomiFirstName: { a: 'yomifirstname' },
			YomiFullName: { a: 'yomifullname', r: true },
			YomiLastName: { a: 'yomilastname' },
			YomiMiddleName: { a: 'yomimiddlename' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in systemuser) {
			var a = systemuser[field].a;
			var b = systemuser[field].b;
			var c = systemuser[field].c;
			var d = systemuser[field].d;
			var g = systemuser[field].g;
			var r = systemuser[field].r;
			systemuser[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		systemuser.Entity = u;
		systemuser.EntityName = 'systemuser';
		systemuser.EntityCollectionName = 'systemusers';
		systemuser['@odata.etag'] = e['@odata.etag'];
		systemuser.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		systemuser.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return systemuser;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SystemUser = {
		AccessMode : {
			Read_Write: 0,
			Administrative: 1,
			Read: 2,
			Support_User: 3,
			Non_interactive: 4,
			Delegated_Admin: 5
		},
		Address1_AddressTypeCode : {
			Default_Value: 1
		},
		Address1_ShippingMethodCode : {
			Default_Value: 1
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
		},
		CALType : {
			Professional: 0,
			Administrative: 1,
			Basic: 2,
			Device_Professional: 3,
			Device_Basic: 4,
			Essential: 5,
			Device_Essential: 6,
			Enterprise: 7,
			Device_Enterprise: 8,
			Sales: 9,
			Service: 10,
			Field_Service: 11,
			Project_Service: 12
		},
		EmailRouterAccessApproval : {
			Empty: 0,
			Approved: 1,
			Pending_Approval: 2,
			Rejected: 3
		},
		IncomingEmailDeliveryMethod : {
			None: 0,
			Microsoft_Dynamics_365_for_Outlook: 1,
			Server_Side_Synchronization_or_Email_Router: 2,
			Forward_Mailbox: 3
		},
		InviteStatusCode : {
			Invitation_Not_Sent: 0,
			Invited: 1,
			Invitation_Near_Expired: 2,
			Invitation_Expired: 3,
			Invitation_Accepted: 4,
			Invitation_Rejected: 5,
			Invitation_Revoked: 6
		},
		msdyn_AgentType : {
			Application_user: 192350000,
			Bot_application_user: 192350001
		},
		msdyn_BotProvider : {
			Virtual_Agent: 192350000,
			Other: 192350001,
			None: 192350002
		},
		msdyn_UserType : {
			CRM_User: 192350000,
			BOT_User: 192350001
		},
		OutgoingEmailDeliveryMethod : {
			None: 0,
			Microsoft_Dynamics_365_for_Outlook: 1,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		PreferredAddressCode : {
			Mailing_Address: 1,
			Other_Address: 2
		},
		PreferredEmailCode : {
			Default_Value: 1
		},
		PreferredPhoneCode : {
			Main_Phone: 1,
			Other_Phone: 2,
			Home_Phone: 3,
			Mobile_Phone: 4
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDeveloper_information {
		interface Tabs {
		}
		interface Body {
			ApiTokenControl: DevKit.Controls.ActionCards;
			DevInformationControl: DevKit.Controls.ActionCards;
			/** Unique identifier for API token associated with mobile app channel instances. */
			msdynmkt_apitoken: DevKit.Controls.String;
			/** Unique identifier for Mobile app channel instance id */
			msdynmkt_mobileappchannelinstanceId: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_ChannelInstance_extendedentityid_msdynmkt_mobileappchannelinstance: DevKit.Controls.NavigationItem,
			msdynmkt_mobileappchannelinstance_pushmobiledevice: DevKit.Controls.NavigationItem
		}
	}
	class FormDeveloper_information extends DevKit.IForm {
		/**
		* Developer information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Developer_information */
		Body: DevKit.FormDeveloper_information.Body;
		/** The Navigation of form Developer_information */
		Navigation: DevKit.FormDeveloper_information.Navigation;
		/** The SidePanes of form Developer_information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_mobileappchannelinstance_Information {
		interface Tabs {
		}
		interface Body {
			FileLoaderControl: DevKit.Controls.ActionCards;
			/** Unique identifier for API Key associated with FCM mobile app instances */
			msdynmkt_apikey: DevKit.Controls.String;
			/** Unique identifier for Application mode associated with Apns mobile app instances */
			msdynmkt_applicationmode: DevKit.Controls.OptionSet;
			/** Unique identifier for Authentication mode associated with Apns mobile app instances */
			msdynmkt_authenticationmode: DevKit.Controls.OptionSet;
			/** Unique identifier for Bundle Id associated with Apns Token-based mobile app instances */
			msdynmkt_bundleid: DevKit.Controls.String;
			/** Unique identifier for Certificate1 associated with Apns Cert-based mobile app instances */
			msdynmkt_certificate1: DevKit.Controls.String;
			/** Unique identifier for Certificate2 associated with Apns Apns Cert-based mobile app instances */
			msdynmkt_certificate2: DevKit.Controls.String;
			msdynmkt_certificate3: DevKit.Controls.String;
			msdynmkt_certificate4: DevKit.Controls.String;
			/** Unique identifier for Certificate5 associated with Apns Cert-based mobile app instances */
			msdynmkt_certificate5: DevKit.Controls.String;
			/** Unique identifier for Certificate name associated with Apns Cert-based mobile app instances */
			msdynmkt_certificatename: DevKit.Controls.String;
			/** Unique identifier for Fcm Authentication mode associated with Fcm mobile app instances */
			msdynmkt_fcmauthenticationmode: DevKit.Controls.OptionSet;
			/** Unique identifier for Key Id associated with Apns Token-based mobile app instances */
			msdynmkt_keyid: DevKit.Controls.String;
			/** Unique identifier for Certificate Password associated with Apns Cert-based mobile app instances */
			msdynmkt_password: DevKit.Controls.String;
			/** Unique identifier for ServiceAccountJson1 associated with Fcm json-based mobile app instances */
			msdynmkt_serviceaccountjson1: DevKit.Controls.String;
			/** Unique identifier for ServiceAccountJson2 associated with Apns Fcm json-based mobile app instances */
			msdynmkt_serviceaccountjson2: DevKit.Controls.String;
			msdynmkt_serviceaccountjson3: DevKit.Controls.String;
			msdynmkt_serviceaccountjson4: DevKit.Controls.String;
			/** Unique identifier for ServiceAccountJson5 associated with Fcm json-based mobile app instances */
			msdynmkt_serviceaccountjson5: DevKit.Controls.String;
			/** Unique identifier for ServiceAccountJson name associated with Fcm json-based mobile app instances */
			msdynmkt_serviceaccountjsonname: DevKit.Controls.String;
			/** Unique identifier for Signing Key associated with Apns Token-based mobile app instances */
			msdynmkt_signingkey: DevKit.Controls.String;
			/** Unique identifier for Team Id associated with Apns Token-based mobile app instances */
			msdynmkt_teamid: DevKit.Controls.String;
			ServiceAccountJsonLoaderControl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_ChannelInstance_extendedentityid_msdynmkt_mobileappchannelinstance: DevKit.Controls.NavigationItem,
			msdynmkt_mobileappchannelinstance_pushmobiledevice: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_mobileappchannelinstance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_mobileappchannelinstance_Information */
		Body: DevKit.Formmsdynmkt_mobileappchannelinstance_Information.Body;
		/** The Navigation of form msdynmkt_mobileappchannelinstance_Information */
		Navigation: DevKit.Formmsdynmkt_mobileappchannelinstance_Information.Navigation;
		/** The SidePanes of form msdynmkt_mobileappchannelinstance_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_mobileappchannelinstanceApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_mobileappchannelinstanceApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for API Key associated with FCM mobile app instances */
		msdynmkt_apikey: string;
		/** Unique identifier for API token associated with mobile app channel instances. */
		msdynmkt_apitoken: string;
		/** Unique identifier for Application mode associated with Apns mobile app instances */
		msdynmkt_applicationmode: OptionSet.msdynmkt_mobileappchannelinstance.msdynmkt_applicationmode;
		/** Unique identifier for Authentication mode associated with Apns mobile app instances */
		msdynmkt_authenticationmode: OptionSet.msdynmkt_mobileappchannelinstance.msdynmkt_authenticationmode;
		/** Unique identifier for Bundle Id associated with Apns Token-based mobile app instances */
		msdynmkt_bundleid: string;
		/** Unique identifier for Certificate1 associated with Apns Cert-based mobile app instances */
		msdynmkt_certificate1: string;
		/** Unique identifier for Certificate2 associated with Apns Apns Cert-based mobile app instances */
		msdynmkt_certificate2: string;
		msdynmkt_certificate3: string;
		msdynmkt_certificate4: string;
		/** Unique identifier for Certificate5 associated with Apns Cert-based mobile app instances */
		msdynmkt_certificate5: string;
		/** Unique identifier for Certificate name associated with Apns Cert-based mobile app instances */
		msdynmkt_certificatename: string;
		/** Unique identifier for the Description */
		msdynmkt_description: string;
		/** Unique identifier for Fcm Authentication mode associated with Fcm mobile app instances */
		msdynmkt_fcmauthenticationmode: OptionSet.msdynmkt_mobileappchannelinstance.msdynmkt_fcmauthenticationmode;
		/** Unique identifier for Key Id associated with Apns Token-based mobile app instances */
		msdynmkt_keyid: string;
		/** Unique identifier for Mobile app channel instance id */
		msdynmkt_mobileappchannelinstanceId: string;
		/** Unique identifier for the Name */
		msdynmkt_name: string;
		/** Unique identifier for Certificate Password associated with Apns Cert-based mobile app instances */
		msdynmkt_password: string;
		/** Unique identifier for ServiceAccountJson1 associated with Fcm json-based mobile app instances */
		msdynmkt_serviceaccountjson1: string;
		/** Unique identifier for ServiceAccountJson2 associated with Apns Fcm json-based mobile app instances */
		msdynmkt_serviceaccountjson2: string;
		msdynmkt_serviceaccountjson3: string;
		msdynmkt_serviceaccountjson4: string;
		/** Unique identifier for ServiceAccountJson5 associated with Fcm json-based mobile app instances */
		msdynmkt_serviceaccountjson5: string;
		/** Unique identifier for ServiceAccountJson name associated with Fcm json-based mobile app instances */
		msdynmkt_serviceaccountjsonname: string;
		/** Unique identifier for Signing Key associated with Apns Token-based mobile app instances */
		msdynmkt_signingkey: string;
		/** Unique identifier for Team Id associated with Apns Token-based mobile app instances */
		msdynmkt_teamid: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the mobileapp channel instance */
		statecode: OptionSet.msdynmkt_mobileappchannelinstance.statecode;
		/** Reason for the status of the mobileapp channel instance */
		statuscode: OptionSet.msdynmkt_mobileappchannelinstance.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for API Key associated with FCM mobile app instances */
			readonly msdynmkt_apikey: string;
			/** Unique identifier for API token associated with mobile app channel instances. */
			readonly msdynmkt_apitoken: string;
			/** Unique identifier for Application mode associated with Apns mobile app instances */
			readonly msdynmkt_applicationmode: string;
			/** Unique identifier for Authentication mode associated with Apns mobile app instances */
			readonly msdynmkt_authenticationmode: string;
			/** Unique identifier for Bundle Id associated with Apns Token-based mobile app instances */
			readonly msdynmkt_bundleid: string;
			/** Unique identifier for Certificate1 associated with Apns Cert-based mobile app instances */
			readonly msdynmkt_certificate1: string;
			/** Unique identifier for Certificate2 associated with Apns Apns Cert-based mobile app instances */
			readonly msdynmkt_certificate2: string;
			readonly msdynmkt_certificate3: string;
			readonly msdynmkt_certificate4: string;
			/** Unique identifier for Certificate5 associated with Apns Cert-based mobile app instances */
			readonly msdynmkt_certificate5: string;
			/** Unique identifier for Certificate name associated with Apns Cert-based mobile app instances */
			readonly msdynmkt_certificatename: string;
			/** Unique identifier for the Description */
			readonly msdynmkt_description: string;
			/** Unique identifier for Fcm Authentication mode associated with Fcm mobile app instances */
			readonly msdynmkt_fcmauthenticationmode: string;
			/** Unique identifier for Key Id associated with Apns Token-based mobile app instances */
			readonly msdynmkt_keyid: string;
			/** Unique identifier for Mobile app channel instance id */
			readonly msdynmkt_mobileappchannelinstanceId: string;
			/** Unique identifier for the Name */
			readonly msdynmkt_name: string;
			/** Unique identifier for Certificate Password associated with Apns Cert-based mobile app instances */
			readonly msdynmkt_password: string;
			/** Unique identifier for ServiceAccountJson1 associated with Fcm json-based mobile app instances */
			readonly msdynmkt_serviceaccountjson1: string;
			/** Unique identifier for ServiceAccountJson2 associated with Apns Fcm json-based mobile app instances */
			readonly msdynmkt_serviceaccountjson2: string;
			readonly msdynmkt_serviceaccountjson3: string;
			readonly msdynmkt_serviceaccountjson4: string;
			/** Unique identifier for ServiceAccountJson5 associated with Fcm json-based mobile app instances */
			readonly msdynmkt_serviceaccountjson5: string;
			/** Unique identifier for ServiceAccountJson name associated with Fcm json-based mobile app instances */
			readonly msdynmkt_serviceaccountjsonname: string;
			/** Unique identifier for Signing Key associated with Apns Token-based mobile app instances */
			readonly msdynmkt_signingkey: string;
			/** Unique identifier for Team Id associated with Apns Token-based mobile app instances */
			readonly msdynmkt_teamid: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the mobileapp channel instance */
			readonly statecode: string;
			/** Reason for the status of the mobileapp channel instance */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_mobileappchannelinstance {
		enum msdynmkt_applicationmode {
			/** 0 */
			Production,
			/** 1 */
			Sandbox
		}
		enum msdynmkt_authenticationmode {
			/** 0 */
			Certificate,
			/** 1 */
			Token
		}
		enum msdynmkt_fcmauthenticationmode {
			/** 0 */
			Api_Key,
			/** 1 */
			Service_Account_Json
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
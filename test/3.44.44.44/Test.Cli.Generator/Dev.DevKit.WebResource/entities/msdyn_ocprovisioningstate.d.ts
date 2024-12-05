//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocprovisioningstate_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Additional details */
			msdyn_errormessage: DevKit.Controls.String;
			/** Reason for the status of the Provisioning State */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_ocprovisioningstate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocprovisioningstate_Information */
		Body: DevKit.Formmsdyn_ocprovisioningstate_Information.Body;
		/** The Navigation of form msdyn_ocprovisioningstate_Information */
		Navigation: DevKit.Formmsdyn_ocprovisioningstate_Information.Navigation;
		/** The SidePanes of form msdyn_ocprovisioningstate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocprovisioningstateApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocprovisioningstateApi
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
		/** Automated Calling Status for Heavy Metal Migration Automated Calling feature. */
		msdyn_AutomatedCallingStatus: OptionSet.msdyn_ocprovisioningstate.msdyn_AutomatedCallingStatus;
		/** Related Communication Provider Settings */
		msdyn_communicationprovidersettingid: string;
		/** Additional details */
		msdyn_errormessage: string;
		/** Exception Details during channel provisioning */
		msdyn_exceptiondetails: string;
		/** Provisioning Status for GateKeeper */
		msdyn_gatekeeperstatus: OptionSet.msdyn_ocprovisioningstate.msdyn_gatekeeperstatus;
		/** Provisioning Status Reason for GateKeeper */
		msdyn_gatekeeperstatusreason: OptionSet.msdyn_ocprovisioningstate.msdyn_gatekeeperstatusreason;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Related Facebook application */
		msdyn_ocfbapplicationid: string;
		/** Related Facebook page */
		msdyn_ocfbpageid: string;
		/** Related Line Channel */
		msdyn_oclinechannelconfigid: string;
		/** Unique identifier for entity instances */
		msdyn_ocprovisioningstateId: string;
		/** Related Teams Channel */
		msdyn_octeamschannelconfigid: string;
		/** Related WhatsApp Account */
		msdyn_ocwhatsappchannelaccountId: string;
		/** Related Phone Number */
		msdyn_phonenumberid: string;
		/** Response for the provisioning action */
		msdyn_provisioningresponse: string;
		msdyn_voicechannelsettingid: string;
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
		/** Status of the Provisioning State */
		statecode: OptionSet.msdyn_ocprovisioningstate.statecode;
		/** Reason for the status of the Provisioning State */
		statuscode: OptionSet.msdyn_ocprovisioningstate.statuscode;
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
			/** Automated Calling Status for Heavy Metal Migration Automated Calling feature. */
			readonly msdyn_AutomatedCallingStatus: string;
			/** Related Communication Provider Settings */
			readonly msdyn_communicationprovidersettingid: string;
			/** Additional details */
			readonly msdyn_errormessage: string;
			/** Exception Details during channel provisioning */
			readonly msdyn_exceptiondetails: string;
			/** Provisioning Status for GateKeeper */
			readonly msdyn_gatekeeperstatus: string;
			/** Provisioning Status Reason for GateKeeper */
			readonly msdyn_gatekeeperstatusreason: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Related Facebook application */
			readonly msdyn_ocfbapplicationid: string;
			/** Related Facebook page */
			readonly msdyn_ocfbpageid: string;
			/** Related Line Channel */
			readonly msdyn_oclinechannelconfigid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocprovisioningstateId: string;
			/** Related Teams Channel */
			readonly msdyn_octeamschannelconfigid: string;
			/** Related WhatsApp Account */
			readonly msdyn_ocwhatsappchannelaccountId: string;
			/** Related Phone Number */
			readonly msdyn_phonenumberid: string;
			/** Response for the provisioning action */
			readonly msdyn_provisioningresponse: string;
			readonly msdyn_voicechannelsettingid: string;
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
			/** Status of the Provisioning State */
			readonly statecode: string;
			/** Reason for the status of the Provisioning State */
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
	namespace msdyn_ocprovisioningstate {
		enum msdyn_AutomatedCallingStatus {
			/** 2 */
			Failure,
			/** 3 */
			InProgress,
			/** 0 */
			NotTested,
			/** 1 */
			Success
		}
		enum msdyn_gatekeeperstatus {
			/** 715240000 */
			Active,
			/** 715240001 */
			Inactive
		}
		enum msdyn_gatekeeperstatusreason {
			/** 2 */
			Deprovisioned,
			/** 1 */
			Error,
			/** 0 */
			Running
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350006 */
			Deprovisioned,
			/** 192350005 */
			Deprovisioning,
			/** 192350001 */
			Draft,
			/** 192350004 */
			Error,
			/** 192350002 */
			Processing,
			/** 192350003 */
			Running
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_occommunicationprovidersetting_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider: DevKit.Controls.NavigationItem,
			msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid: DevKit.Controls.NavigationItem,
			msdyn_occommunicationprovidersetting_msdyn_entr: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_occommunicationprovidersetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_occommunicationprovidersetting_Information */
		Body: DevKit.Formmsdyn_occommunicationprovidersetting_Information.Body;
		/** The Navigation of form msdyn_occommunicationprovidersetting_Information */
		Navigation: DevKit.Formmsdyn_occommunicationprovidersetting_Information.Navigation;
		/** The SidePanes of form msdyn_occommunicationprovidersetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_occommunicationprovidersettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_occommunicationprovidersettingApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_occommunicationprovidersetting.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Account SID */
		msdyn_AccountSID: string;
		/** Application module picklist */
		msdyn_appmodule: Array<OptionSet.msdyn_occommunicationprovidersetting.msdyn_appmodule>;
		/** Flag specifying whether account is trial or not. */
		msdyn_isTrial: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Communication provider picklist */
		msdyn_OcCommunicationProvider: OptionSet.msdyn_occommunicationprovidersetting.msdyn_OcCommunicationProvider;
		/** The data residency location of the resource. */
		msdyn_occommunicationproviderdatalocation: string;
		/** The immutable id of the resource. */
		msdyn_occommunicationproviderimmutableid: string;
		/** Unique identifier for entity instances */
		msdyn_occommunicationprovidersettingId: string;
		/** Authtoken or connectionstring */
		msdyn_Secret: string;
		/** Secure Authtoken or connectionstring value */
		msdyn_securesecret: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Communication Provider Setting */
		statecode: OptionSet.msdyn_occommunicationprovidersetting.statecode;
		/** Reason for the status of the Communication Provider Setting */
		statuscode: OptionSet.msdyn_occommunicationprovidersetting.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Account SID */
			readonly msdyn_AccountSID: string;
			/** Application module picklist */
			readonly msdyn_appmodule: Array<string>;
			/** Flag specifying whether account is trial or not. */
			readonly msdyn_isTrial: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Communication provider picklist */
			readonly msdyn_OcCommunicationProvider: string;
			/** The data residency location of the resource. */
			readonly msdyn_occommunicationproviderdatalocation: string;
			/** The immutable id of the resource. */
			readonly msdyn_occommunicationproviderimmutableid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_occommunicationprovidersettingId: string;
			/** Authtoken or connectionstring */
			readonly msdyn_Secret: string;
			/** Secure Authtoken or connectionstring value */
			readonly msdyn_securesecret: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Communication Provider Setting */
			readonly statecode: string;
			/** Reason for the status of the Communication Provider Setting */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_occommunicationprovidersetting {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_appmodule {
			/** 192350000 */
			Service
		}
		enum msdyn_OcCommunicationProvider {
			/** 192350000 */
			Azure_Communication_Services,
			/** 192350003 */
			Microsoft_Teams_Phone_System,
			/** 192350002 */
			TeleSign,
			/** 192350001 */
			Twilio
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
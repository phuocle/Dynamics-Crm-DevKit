//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_consentprovider_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_ConsentproviderLocalization_msdynmk: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_consentprovider_msdynmkt_complia: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_consentprovider_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_consentprovider_Information */
		Body: DevKit.Formmsdynmkt_consentprovider_Information.Body;
		/** The Navigation of form msdynmkt_consentprovider_Information */
		Navigation: DevKit.Formmsdynmkt_consentprovider_Information.Navigation;
		/** The SidePanes of form msdynmkt_consentprovider_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_consentproviderApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_consentproviderApi
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
		readonly ComponentState: OptionSet.msdynmkt_consentprovider.ComponentState;
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
		msdynmkt_consentcheckurltemplate: string;
		msdynmkt_consentproviderexternalentity: string;
		msdynmkt_consentproviderexternalformidentifier: string;
		msdynmkt_consentproviderexternalpurposeentity: string;
		msdynmkt_consentproviderexternalpurposeformidentifier: string;
		/** Unique identifier for entity instances */
		msdynmkt_consentproviderId: string;
		msdynmkt_consentresolutionmessageoptions: OptionSet.msdynmkt_consentprovider.msdynmkt_consentresolutionmessageoptions;
		msdynmkt_consentresolutiontrackingoptions: OptionSet.msdynmkt_consentprovider.msdynmkt_consentresolutiontrackingoptions;
		msdynmkt_email_consentresolutionmessageoverride: OptionSet.msdynmkt_consentprovider.msdynmkt_email_consentresolutionmessageoverride;
		msdynmkt_email_consentresolutiontrackingoverride: OptionSet.msdynmkt_consentprovider.msdynmkt_email_consentresolutiontrackingoverride;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_oneclickunsubscribesupported: boolean;
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
		/** Status of the Consent Provider */
		statecode: OptionSet.msdynmkt_consentprovider.statecode;
		/** Reason for the status of the Consent Provider */
		statuscode: OptionSet.msdynmkt_consentprovider.statuscode;
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
			readonly msdynmkt_consentcheckurltemplate: string;
			readonly msdynmkt_consentproviderexternalentity: string;
			readonly msdynmkt_consentproviderexternalformidentifier: string;
			readonly msdynmkt_consentproviderexternalpurposeentity: string;
			readonly msdynmkt_consentproviderexternalpurposeformidentifier: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_consentproviderId: string;
			readonly msdynmkt_consentresolutionmessageoptions: string;
			readonly msdynmkt_consentresolutiontrackingoptions: string;
			readonly msdynmkt_email_consentresolutionmessageoverride: string;
			readonly msdynmkt_email_consentresolutiontrackingoverride: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_oneclickunsubscribesupported: string;
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
			/** Status of the Consent Provider */
			readonly statecode: string;
			/** Reason for the status of the Consent Provider */
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
	namespace msdynmkt_consentprovider {
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
		enum msdynmkt_consentresolutionmessageoptions {
			/** 238550002 */
			Always_resolve_to_consent_given,
			/** 238550003 */
			Always_resolve_to_consent_not_given,
			/** 238550001 */
			Use_custom_api_to_resolve,
			/** 238550004 */
			Use_Real_time_journeys_default_implementation
		}
		enum msdynmkt_consentresolutiontrackingoptions {
			/** 238550002 */
			Always_resolve_to_consent_given,
			/** 238550003 */
			Always_resolve_to_consent_not_given,
			/** 238550001 */
			Use_custom_api_to_resolve,
			/** 238550004 */
			Use_Real_time_journeys_default_implementation
		}
		enum msdynmkt_email_consentresolutionmessageoverride {
			/** 238550002 */
			Always_resolve_to_consent_given,
			/** 238550003 */
			Always_resolve_to_consent_not_given,
			/** 238550000 */
			No_override,
			/** 238550001 */
			Use_custom_api_to_resolve,
			/** 238550004 */
			Use_Real_time_journeys_default_implementation
		}
		enum msdynmkt_email_consentresolutiontrackingoverride {
			/** 238550002 */
			Always_resolve_to_consent_given,
			/** 238550003 */
			Always_resolve_to_consent_not_given,
			/** 238550000 */
			No_override,
			/** 238550001 */
			Use_custom_api_to_resolve,
			/** 238550004 */
			Use_Real_time_journeys_default_implementation
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
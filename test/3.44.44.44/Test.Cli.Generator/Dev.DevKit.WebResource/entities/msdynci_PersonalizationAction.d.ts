//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynci_PersonalizationAction_Information {
		interface Tabs {
		}
		interface Body {
			msdynci_SignalId: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdynci_PersonalizationAction_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynci_PersonalizationAction_Information */
		Body: DevKit.Formmsdynci_PersonalizationAction_Information.Body;
		/** The Navigation of form msdynci_PersonalizationAction_Information */
		Navigation: DevKit.Formmsdynci_PersonalizationAction_Information.Navigation;
		/** The SidePanes of form msdynci_PersonalizationAction_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynci_PersonalizationActionApi {
		/**
		* DynamicsCrm.DevKit msdynci_PersonalizationActionApi
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
		msdynci_ActionElapsedTime: number;
		msdynci_ActionElapsedTimeMs: number;
		msdynci_ActionElementId: string;
		msdynci_ActionIsOutbound: boolean;
		msdynci_ActionName: string;
		msdynci_ActionTarget: string;
		msdynci_ActionType: string;
		msdynci_AlternateKeyReference: string;
		msdynci_ClickCoordinates: string;
		msdynci_HostDomain: string;
		msdynci_OptimizelyCampaignId: number;
		msdynci_OptimizelyCampaignIdentifier: number;
		msdynci_OptimizelyExperimentId: number;
		msdynci_OptimizelyExperimentIdentifier: number;
		msdynci_OrgId: string;
		msdynci_OrgTenantId: string;
		/** Unique identifier for entity instances */
		msdynci_PersonalizationActionId: string;
		msdynci_personalizationcookiereference: string;
		msdynci_ReferrerUri: string;
		msdynci_SDKVersion: string;
		msdynci_SessionDuration: number;
		msdynci_SessionDurationMs: number;
		msdynci_SessionId: string;
		msdynci_SignalId: string;
		msdynci_SignalName: string;
		msdynci_SignalSource: string;
		msdynci_SignalTimestamp: string;
		msdynci_SignalTimezone: string;
		msdynci_SignalVersion: string;
		msdynci_UserAuthId: string;
		msdynci_UserEntityId: string;
		msdynci_UserEntityType: string;
		msdynci_UserLocalId: string;
		msdynci_UserState: string;
		msdynci_UserTrackingContext: string;
		msdynci_ViewName: string;
		msdynci_ViewPreviousViews: string;
		msdynci_ViewTitle: string;
		msdynci_viewtype: string;
		msdynci_ViewUri: string;
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
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Time to live in seconds. */
		TTLInSeconds: number;
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
			readonly msdynci_ActionElapsedTime: string;
			readonly msdynci_ActionElapsedTimeMs: string;
			readonly msdynci_ActionElementId: string;
			readonly msdynci_ActionIsOutbound: string;
			readonly msdynci_ActionName: string;
			readonly msdynci_ActionTarget: string;
			readonly msdynci_ActionType: string;
			readonly msdynci_AlternateKeyReference: string;
			readonly msdynci_ClickCoordinates: string;
			readonly msdynci_HostDomain: string;
			readonly msdynci_OptimizelyCampaignId: string;
			readonly msdynci_OptimizelyCampaignIdentifier: string;
			readonly msdynci_OptimizelyExperimentId: string;
			readonly msdynci_OptimizelyExperimentIdentifier: string;
			readonly msdynci_OrgId: string;
			readonly msdynci_OrgTenantId: string;
			/** Unique identifier for entity instances */
			readonly msdynci_PersonalizationActionId: string;
			readonly msdynci_personalizationcookiereference: string;
			readonly msdynci_ReferrerUri: string;
			readonly msdynci_SDKVersion: string;
			readonly msdynci_SessionDuration: string;
			readonly msdynci_SessionDurationMs: string;
			readonly msdynci_SessionId: string;
			readonly msdynci_SignalId: string;
			readonly msdynci_SignalName: string;
			readonly msdynci_SignalSource: string;
			readonly msdynci_SignalTimestamp: string;
			readonly msdynci_SignalTimezone: string;
			readonly msdynci_SignalVersion: string;
			readonly msdynci_UserAuthId: string;
			readonly msdynci_UserEntityId: string;
			readonly msdynci_UserEntityType: string;
			readonly msdynci_UserLocalId: string;
			readonly msdynci_UserState: string;
			readonly msdynci_UserTrackingContext: string;
			readonly msdynci_ViewName: string;
			readonly msdynci_ViewPreviousViews: string;
			readonly msdynci_ViewTitle: string;
			readonly msdynci_viewtype: string;
			readonly msdynci_ViewUri: string;
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
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynci_PersonalizationAction {
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
﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEntitlement_Channel {
		interface tab_general_Sections {
			entitlementchannelinformation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select a channel for which you are defining the entitlement terms. */
			Channel: DevKit.Controls.OptionSet;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Controls.Decimal;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormEntitlement_Channel extends DevKit.IForm {
		/**
		* Entitlement Channel [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Entitlement_Channel */
		Body: DevKit.FormEntitlement_Channel.Body;
		/** The Process of form Entitlement_Channel */
		Process: DevKit.FormEntitlement_Channel.Process;
		/** The SidePanes of form Entitlement_Channel */
		SidePanes: DevKit.SidePanes;
	}
	class EntitlementChannelApi {
		/**
		* DynamicsCrm.DevKit EntitlementChannelApi
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
		/** Select a channel for which you are defining the entitlement terms. */
		Channel: OptionSet.EntitlementChannel.Channel;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier for entity instances */
		EntitlementChannelId: string;
		/** Unique identifier for Entitlement associated with Entitlement Channel. */
		EntitlementId: string;
		/** Exchange rate for the currency associated with the incident with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		Name: string;
		/** Unique identifier of the organization with which the entitlement channel is associated. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Type the total number of entitlement terms that are left. */
		RemainingTerms: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type the total number of entitlement terms. */
		TotalTerms: number;
		/** Unique identifier of the currency associated with the incident. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace EntitlementChannel {
		enum Channel {
			/** 2 */
			Email,
			/** 2483 */
			Facebook,
			/** 700610000 */
			IoT,
			/** 1 */
			Phone,
			/** 3986 */
			Twitter,
			/** 3 */
			Web
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
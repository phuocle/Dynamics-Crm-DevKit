//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocwhatsappchannelaccount_Information {
		interface tab_tab1_general_Sections {
			Section1_Step1: DevKit.Controls.Section;
			Section2_Step2: DevKit.Controls.Section;
			Section3_Step3: DevKit.Controls.Section;
			Section4_Step4: DevKit.Controls.Section;
		}
		interface tab_tab1_general extends DevKit.Controls.ITab {
			Section: tab_tab1_general_Sections;
		}
		interface Tabs {
			tab1_general: tab_tab1_general;
		}
		interface Body {
			Tab: Tabs;
			/** Authentication token of WhatsApp account. */
			msdyn_authenticationtoken: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The account ID of 3rd party provider */
			msdyn_provideraccountid: DevKit.Controls.String;
			/** URL for Twilio inbound request */
			msdyn_TwilioInboundURL: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_WhatsAppAccountInstructions: DevKit.Controls.WebResource;
			WebResource_WhatsAppAccountValidation: DevKit.Controls.WebResource;
			WebResource_WhatsAppCallbackUrl: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msdyn_ocwhatsappchannelaccount_msdyn_ocprovisioningstate_msdyn_ocwhatsappchannelaccountId: DevKit.Controls.NavigationItem,
			msdyn_ocwhatsappchannelaccount_msdyn_ocwhatsappchannelnumber_ocwhatsappaccountid: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Subgrid_ValidationResult: DevKit.Controls.Grid;
			Subgrid_WhatsAppNumbers: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocwhatsappchannelaccount_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocwhatsappchannelaccount_Information */
		Body: DevKit.Formmsdyn_ocwhatsappchannelaccount_Information.Body;
		/** The Navigation of form msdyn_ocwhatsappchannelaccount_Information */
		Navigation: DevKit.Formmsdyn_ocwhatsappchannelaccount_Information.Navigation;
		/** The Grid of form msdyn_ocwhatsappchannelaccount_Information */
		Grid: DevKit.Formmsdyn_ocwhatsappchannelaccount_Information.Grid;
		/** The SidePanes of form msdyn_ocwhatsappchannelaccount_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocwhatsappchannelaccountApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocwhatsappchannelaccountApi
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
		readonly ComponentState: OptionSet.msdyn_ocwhatsappchannelaccount.ComponentState;
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
		/** Authentication token of WhatsApp account. */
		msdyn_authenticationtoken: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_ocwhatsappchannelaccountId: string;
		/** The account ID of 3rd party provider */
		msdyn_provideraccountid: string;
		/** Provider Azure Communication Services Connection String Reference */
		msdyn_ProviderAcsConnectionStringId: string;
		/** Provider Azure Communication Services resource name */
		msdyn_ProviderAcsResourceName: string;
		/** Provider Event Grid App Id */
		msdyn_ProviderEventGridAppId: string;
		/** Provider Event Grid Tenant Id  */
		msdyn_ProviderEventGridAppTenantId: string;
		/** Channel Provider for Whatsapp Channel */
		msdyn_ProviderType: OptionSet.msdyn_ocwhatsappchannelaccount.msdyn_ProviderType;
		/** OC Authentication token of WhatsApp account. */
		msdyn_secureauthenticationtoken: string;
		/** URL for Twilio inbound request */
		msdyn_TwilioInboundURL: string;
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
		/** Status of the WhatsApp Channel Account */
		statecode: OptionSet.msdyn_ocwhatsappchannelaccount.statecode;
		/** Reason for the status of the WhatsApp Channel Account */
		statuscode: OptionSet.msdyn_ocwhatsappchannelaccount.statuscode;
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
			/** Authentication token of WhatsApp account. */
			readonly msdyn_authenticationtoken: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocwhatsappchannelaccountId: string;
			/** The account ID of 3rd party provider */
			readonly msdyn_provideraccountid: string;
			/** Provider Azure Communication Services Connection String Reference */
			readonly msdyn_ProviderAcsConnectionStringId: string;
			/** Provider Azure Communication Services resource name */
			readonly msdyn_ProviderAcsResourceName: string;
			/** Provider Event Grid App Id */
			readonly msdyn_ProviderEventGridAppId: string;
			/** Provider Event Grid Tenant Id  */
			readonly msdyn_ProviderEventGridAppTenantId: string;
			/** Channel Provider for Whatsapp Channel */
			readonly msdyn_ProviderType: string;
			/** OC Authentication token of WhatsApp account. */
			readonly msdyn_secureauthenticationtoken: string;
			/** URL for Twilio inbound request */
			readonly msdyn_TwilioInboundURL: string;
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
			/** Status of the WhatsApp Channel Account */
			readonly statecode: string;
			/** Reason for the status of the WhatsApp Channel Account */
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
	namespace msdyn_ocwhatsappchannelaccount {
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
		enum msdyn_ProviderType {
			/** 192350001 */
			Azure_Communication_Services,
			/** 192350000 */
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